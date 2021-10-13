import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import $ from 'jquery';
import configData from "../config.json";
import { TokenToString } from "../Redux/Middleware/serverData";
import keys from '../config/env/keys'

class DocService {
  dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  createPdf = (html, email) => {
    const url = window.location;
    const userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
    const paperName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[3]) : (url.pathname.split('/')[2]);
    const jwt = TokenToString

    drawDOM(html, {
      fileName: 'paper.pdf',
    })
      .then((group) => {
        return exportPDF(group);
      }).then((dataUri) => {
        const file = this.dataURLtoFile(dataUri, "paper.pdf")
        var myFile = new FormData()
        myFile.append("file", file)
        myFile.append("tags", "CRM/" + email);
        $.ajax({

          type: "POST",
          url: keys.API_URL_FILES + userName + "/uploadMultipleFiles",

          headers: { Authorization: jwt },
          data: myFile,
          processData: false,
          contentType: false,
          success: function (response) {
            // const userName = (url.pathname.split('/')[1]);
            var urlView = `https://papers.dev.leader.codes/${userName}/${paperName ? paperName : "new"}`
            return fetch(configData.SERVER_URL + userName + '/papersPdf/' + paperName, {
              method: 'POST',
              headers: {
                Authorization: jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },

              body: JSON.stringify({
                "html": urlView,
                "to": email,
                "from": "noreply@mail.leader.codes",
                "subject": paperName ? paperName + " paper to sign" : "new paper to sign",
                attachments: { filename: "paper.pdf", path:  response.filesData.file.url },
                "paperName": paperName,
                "isSigned": true
              }),
            })
              .then((res) => res.json()).then((resJson) => {
                console.log(resJson)
                // kkkk
              })
          }
        })

      })
  }
}

const Doc = new DocService();
export default Doc;