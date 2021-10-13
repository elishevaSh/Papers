import React from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
// import * as ReactQuill from 'react-quill'; 
// import React from 'react/react-in-jsx-scope';
// import ReactDOM from 'react-dom'

import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import '../Components/newOnePage.css';
import './quill2.css';
import loading from './assets/LOGO_1.gif';
import Massage from './massage';
import $ from 'jquery';
import Lottie from "react-lottie";
import loadings from './assets/Papers.json';

import ImageResize from 'quill-image-resize-module-react';



// import { FaThumbtack } from 'react-icons/fa';
// import $ from "jquery";
// import React, { Component } from "react";
//const file
// const [aa,setaa]=useState('')
// const CustomButton = () => <span className="octicon octicon-star" />;

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}
// function onChangeHandlerProfile(e, title) {

//   
//   var files = document.querySelectorAll(".ql-editor img")
//   if (files.length && !files[files.length - 1].src.startsWith("https")) {
//     var file = this.dataURLtoFile(files[files.length - 1].src, `image${files.length - 1}.jpg`);
//     console.log(e)
//     const reader1 = new FileReader()
//     // const file = e
//     reader1.onloadend = () => {
//       this.setState({ file2: reader1.result })
//     };
//     reader1.readAsDataURL(file)
//     var fileToUpload = file
//     var myFile = new FormData()
//     myFile.append("file", fileToUpload)
//     // if (!this.props.rowToEdit)


//     this.props.addNewImageFromDb(myFile)
//   }
// }




/*
 * Custom toolbar component including insertStar button and dropdowns
 */




/* 
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", kkk: "", file: "", file2: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadings,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  handleChange(html) {
    this.props.changeQuillStyle(html);
  }
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









  CustomToolbar = (props) => (
    <div id="toolbar">
      <button className="ql-align"></button>
    </div>
  );
  componentDidMount() {
    $('.ql-container ql-snow').attr("dir", "auto")
  }


  render() {

    return (
      <div style={{ width: "80%", zIndex: 55, marginLeft: "auto", marginRight: "auto" }}>

        <div>{this.CustomToolbar()}</div>
        <div className="row">
          <ReactQuill
            readOnly={window.location.pathname.split('/')[1] === 'admin' ? false : true}
            placeholder={this.props.placeholder}
            id="reactQuill"
            modules={Editor.modules}
            formats={Editor.formats}
            // theme={"snow"}
            style={{ direction: "auto !important" }}
            className="quillStyle"
            value={this.props.quote ? this.props.quote.quillStyle ? this.props.quote.quillStyle : "" : ""}
            onChange={this.handleChange}

          />

        </div>
        <div class="d-flex justify-content-center align-items-center ">
          <Massage ></Massage>
        </div>
        {/* <div class="d-flex justify-content-center align-items-center" >
          {this.props.quote2.approachedToServerYesOrNo ?

            <Lottie options={this.defaultAnimationOptions} height={300} width={300} style={{
              width: "200px",
              position: "absolute",
              top: "20vh"
            }} />
            : null
          }
        </div> */}
      </div>


    );
  }
}
// if ((window.location.pathname.split('/')[1]) === "admin") {
Quill.register('modules/imageResize', ImageResize);

Editor.theme = 'snow';
Editor.modules = {
  toolbar: {
    container:
      [
        // {header: "1" },
        // [{size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], , [{ align: ['', 'center', 'right', 'justify'] }],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link', 'image'], ['clean'],
        [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },
        { 'background': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },
          // [{ 'direction': 'rtl' }],
          // [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
          // [{ direction: 'rtl' }] // this is rtl support

        ]
      ],
    handlers: {
      insertStar: insertStar,
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
      }
    }
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize']
  },
  clipboard: {
    matchVisual: false,
  }
};
// }
// else {
//   Editor.modules = {

//     toolbar: {
//       container:
//         [

//         ],
//       handlers: {
//         insertStar: insertStar,
//         // 'image': onChangeHandlerProfile
//       }
//     },
//     clipboard: {
//       matchVisual: false,
//     }
//   };
// }

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

Editor.formats = [
  "header",
  //"font",
  "size",
  "bold",
  //"italic",
  //"underline",
  //"strike",
  //"blockquote",
  "list",
  //"bullet",
  //"indent",
  "link",
  "image",
  "color",
  //"background",
  //"insertStar",
  "align",
  "direction"
];

// editor.format('direction', 'auto');
const mapStateToProps = (state) => {
  ;
  return {
    quote: state.quote.quote,
    quote2: state.quote,
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeQuillStyle: (q) => dispatch(actions.setQuillStyle(q)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Editor);



// var files=document.querySelectorAll(".ql-editor img")
// var file = new File([files[1].src], "image.jpg");