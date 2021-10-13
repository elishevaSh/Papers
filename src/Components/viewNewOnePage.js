import 'date-fns';
import React, { useEffect, useRef } from 'react';
import {
  withStyles
} from '@material-ui/styles';
// import { PDFtoIMG } from 'react-pdf-to-image';
// import file from './pdf-sample.pdf';
// import { convertPdfToPng } from 'convert-pdf-png';
import ContentEditable from 'react-contenteditable'
import format from "date-fns/format";
import Quill2 from './quill2';
import DigitalSignature from './digitalSignature'
import deputationSignature from '../Components/assets/deputationSignature.svg';
import logo2 from '../Components/assets/newLogoLeader.svg';


import 'bootstrap/dist/css/bootstrap.css';
import '../Components/newOnePage.css';
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
// import phone from './assets/phone2.png';
// import globe from './assets/globe-solid.png';
import paper from './assets/paper-plane-solid.svg';
import phone from './assets/phone3.svg';
import globe from './assets/globe3.svg';
import email from './assets/telegram3.svg';
import '../Components/style.css';
import '../Components/viewNewOnePage.css';
import loading from './assets/LOGO_1.gif';
import $ from 'jquery';
// import {PDFtoIMG} from 'react-pdf-to-image';
import lesson2 from './assets/lesson2.pdf';
// import RNPdfToImage from 'react-native-pdf-to-image';


import Massage from './massage';
import PdfContainer from './PdfContainer';
import { getEmailsContacts } from './newOnePage';

// import { jsPDF } from "jspdf";





// import mPDF from 'mpdf/mpdf.php';


const useStyles = (theme) => ({


  theContent: {
    width: '75%',
    height: "auto !impotant",
    position: "absolute",
    boxShadow: "3px 3px 15px #00000029",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px 10px 0 0",
    margin: "auto !important",
    verticalAlign: "middle",
    top: "14.8vh"
  },
  end: {
    height: '6.5vh',
    backgroundColor: '#3A405E',
    width: '100% !important',
    marginRight: '0 !important',
    marginLeft: '0 !important',
  }
});

class ViewNewOnePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameYOrN: false,
      logoYOrN: false,
      contactDetailsYOrN: false,
      exitAlert: false,
      customerSigniture: false,
      ff: ""
    };

  }

  componentDidMount = async () => {
    // const { params } = this.props.match;
    // this.props.numOfViews()
    if (this.props.quote.name === "") {
      await this.props.getQuote();
    }
    if (!(this.props.location.search === "?user")) {
      this.props.changePaperViews();
    }

    // alert(this.props.quote.numOfViews())

  }

  hrefWebsite() {
    if (this.props.quote.companyDetailsWebsite.substring(0, 8) === "https://")
      window.location.href = this.props.quote.companyDetailsWebsite;
  }
  dataURLtoFile(dataurl, filename) {
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
  ffffff(e) {
    // ההמרה לפי די אפ לא עובדת
    const pdf = e;
    let png = new File([e], "try.png", { type: "image/png" })
    // let reader = new FileReader();
    // reader.onload = () => {
    //   this.setState({ ff: png });
    // };
    // reader.readAsDataURL(png);
    this.setState({
      ff: URL.createObjectURL(png)
    }, () => {
    });

    // let reader = new FileReader();

    // reader.addEventListener("load", function () {
    //   // convert image file to base64 string
    //   k = reader.result;
    // }, false);
    // if (png)
    //   reader.readAsDataURL(png)





    // this.setState({ ff: k })

    // pdf.name="שיעור 2.png"
    // pdf.type= "application/png"

    // const f = this.props.quote.pdf;
    // const ff = f.replace(".pdf", ".png")
    // const objectFile = this.dataURLtoFile(ff, "image" + 5 + ".png");


    // const r = RNPdfToImage.convert(pdf);
    // const callback = images => {
    //   // the function returns an array
    //   // every img is a normal file object
    //   images.forEach(img => {
    //     console.log("hhhh", img.filename);
    //   });
    // }
    // convertPdfToPng(pdf, {
    //   outputType: 'callback',
    //   callback: callback
    // });



  }
  // createPdf = (html, email) => {
  //   Doc.createPdf(html, email);
  // }

  render() {
    // let url = window.location;
    const { classes } = this.props;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log("qqqq"+this.props.quote);
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    let today = year + "-" + month + "-" + day;

    return (
      <>

        <PdfContainer quote={this.props.quote} trimmedDataURLYesOrNo={this.props.quote.trimmedDataURLYesOrNo} >
          <div style={{ minHeight: "14vh" }}>

            {this.props.quote && !this.props.quote.imageYN ? <></> : <>
              <div onClick={() => this.changeCardBGI()}>
                <label className="labelFileInputImage" for="fileInputImage" onClick={() => this.props.changeCurrentComponent('Logo')}> {this.state.imageYOrNo ?
                  <div className="d-flex justify-content-end align-items-center">
                  </div> :
                  <span></span>}

                  <div style={{ position: "relative" }}>
                    <img alt="" style={{ borderRadius: "4px 4px 0 0 " }} class="imgTableAndChairs" width="100% important" src={this.props.quote ? this.props.quote.imageImage ? this.props.quote.imageImage : <></> : <></>}   />
                    <div className="overlayBackgroundImage"></div>
                  </div>
                </label>
              </div>
            </>}
          </div>


          <div className="d-flex justify-content-center titelheder " style={{ position: 'absolute', top: '4%', width: '100%', height: '0' }}>
            <div style={{ width: "86%", marginBottom: "3vw", zIndex: 99 }} className="d-flex justify-content-between" >


              <div className="contactDetails">
                {this.props.quote && !this.props.quote.contactDetailsDateYN ? <></> :
                  <span
                    style={{
                      color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                      fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "",
                      fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "Reagular" : "Reagular"
                    }}
                  >
                    <label className="SPlabelSide" style={{ textTransform: "capitalize" }}>Date: </label>
                    <label className="SPlabelSide" htmlFor="inputDate" >{this.props.quote ? this.props.quote.lastUpdateQuote ? format(new Date(this.props.quote.lastUpdateQuote), this.props.quote.formatDate ? this.props.quote.formatDate : "dd/MM/yyyy") : format(new Date(today), this.props.quote.formatDate ? this.props.quote.formatDate : "dd/MM/yyyy") : format(new Date(today), this.props.quote.formatDate ? this.props.quote.formatDate : "dd/MM/yyyy")}</label>
                    <span className="SPlabelSide"
                      id="inputDate"
                      style={{ cursor: "pointer !important", display: "none" }}>
                    </span>
                    <br />
                  </span>
                }

                {this.props.quote && !this.props.quote.contactDetailsToYN ? <></> :
                  <span
                    style={{
                      color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                      fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "",
                      fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "Reagular" : "Reagular"
                    }}
                  >
                    <span className="SPlabelSide" style={{ textTransform: "capitalize" }}>To: </span>
                    <input className="SPlabelSide" type="text"
                      value={this.props.quote ? this.props.quote.contactDetailsTo ? this.props.quote.contactDetailsTo : "" : ""}
                      style={{
                        color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                        fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "",
                        fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "Reagular" : "Reagular"

                      }}

                    /><br />
                  </span>
                }
                {this.props.quote && !this.props.quote.contactDetailsFromYN ? <></> :
                  <span
                    style={{
                      color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                      fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "",
                      fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "Reagular" : "Reagular"
                    }}
                  >
                    <label className="SPlabelSide" style={{ textTransform: "capitalize" }}>From: </label>
                    <input className="SPlabelSide" type="text"
                      value={this.props.quote ? this.props.quote.contactDetailsFrom ? this.props.quote.contactDetailsFrom : window.location.pathname.split('/')[2] : window.location.pathname.split('/')[2]}
                      style={{
                        color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                        fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "",
                        fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "Reagular" : "Reagular"
                      }}
                    /><br />
                  </span>
                }
              </div>
              <div id="title">
                <div style={{ marginTop: "7vh", textAlign: "center" }} className="d-flex justify-content-center align-items-center">
                  <div>
                    <label >
                      <div>
                        {this.props.quote ? this.props.quote.nameYOrN ?
                          <>
                            <input id="TypeYourPropsalName" type="text"
                              onKeyPress={(e) => this.inputSize(e)}
                              onClick={() => this.changeCardPN()}
                              value={this.props.quote ? this.props.quote.name ? this.props.quote.name : "" : ""}
                              style={{ textAlign: "center", fontSize: "2vw", fontWeight: 'bold', width: this.props.quote.name ? this.props.quote.name.length < 15 ? (this.props.quote.name.length + 1) * 1 + 'vw' : "25vw" : "10vw", color: '#707071' }}
                              onChange={(e) => { this.props.changeNameQ(e.target.value); }}
                            />
                          </> : <></> : <></>}

                      </div>


                    </label>
                  </div>
                </div>
              </div>

              <div className="d-none d-sm-block">
                <div className="divLabel  mb-5"
                  onClick={() => this.changeCDDesign()}
                  onMouseEnter={() => this.setState({ dateYOrNo: true })}
                  onMouseLeave={() => this.setState({ dateYOrNo: false })}
                  style={{
                    marginTop: "3.2vh",
                    color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                    fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "", lineHeight: this.props.quote ? this.props.quote.contactDetailsLineHeight ? this.props.quote.contactDetailsLineHeight : '0.4' : "0.4",
                    fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "" : "", fontSize: this.props.quote ? this.props.quote.contactDetailsTextsize ? this.props.quote.contactDetailsTextsize + "vw" : '0.7vw' : '0.7vw',
                    width: "14vw"
                  }}>



                  <div>
                    {this.props.quote && !this.props.quote.LogoYOrN ? <></> :
                      <><div className="hoverMoveLogo" >
                        <label  style={{ marginTop: "3.2vh",position:"absolute"}}>
                              <img src={this.props.quote ? this.props.quote.logo ? this.props.quote.logo : logo2 : logo2} id="logo"
                                style={{ borderRadius: this.props.quote ? this.props.quote.logoBorderRadiusLogo ? this.props.quote.logoBorderRadiusLogo : "" : "", display: "inline-block", cursor: "pointer", marginLeft: "6vw", marginTop: "-6vh" }}
                                width={"50% !important"}
                                height="auto" />
                        </label>
                      </div></>
                    }
                  </div>



                  {/* ;;;;; */}
                </div>
                <Massage image={"rrr"} text={"sss"} ></Massage>
              </div>

            </div>

          </div>






          {this.props.quote.quillYOrN ?
            <div className="viewQuill d-flex justify-content-center">
              <Quill2 disabled={true}></Quill2>
            </div>
            : <>
              <div className="d-flex justify-content-center align-items-center">
                <img style={{ width: "80%", height: "auto !important" }} src={this.props.quote ? this.props.quote.pdfToImage ? this.props.quote.pdfToImage : "" : ""} />

              </div>
              <div class="d-flex justify-content-center align-items-center ">
                <Massage ></Massage>
              </div>
            </>
          }
          <div className="d-flex justify-content-center" style={{ zIndex: 44, marginTop: "-2.5vh" }}>

            <label htmlFor="businessSignature">

              <img className="businessSignature" src={this.props.quote ? this.props.quote.businessSignature ? this.props.quote.businessSignature : deputationSignature : deputationSignature}
                width="10vw"
                height="auto"
                position="relative"
              />
            </label>

          </div>



          <div className={classes.end} id="footerr" style={{ backgroundColor: this.props.quote ? this.props.quote.companyDetailsBackgroundColor ? this.props.quote.companyDetailsBackgroundColor : "#DB0E65" : "#DB0E65" }}>

            <div className="d-flex justify-content-around align-items-center mt-2 height5" >

              {this.props.quote.companyDetailsCall != "055 676 3901" ?
                <div className="d-flex justify-content-center align-items-center dirLtr m-0">
                  {this.props.quote && !this.props.quote.companyDetailsCallYN ? <></> : <>
                    <div className="  justify-content-center align-items-center mr-2 " ><img alt="" className="imgEnd" src={phone} /></div>
                    <EditableInput quote={this.props.quote} val={this.props.quote.companyDetailsCall} defaultVal={"055 676 3901"} />
                  </>}
                </div> : <></>}
              {this.props.quote.companyDetailsMail2 != "HAY@LEADER.COM" ?
                <div className="d-flex justify-content-center align-items-center dirC m-0">
                  {this.props.quote && !this.props.quote.companyDetailsMailYN ? <></> : <>
                    <div className="  justify-content-center align-items-center mr-2 "><img alt="" className="imgEnd" src={email} /></div>
                    <EditableInput quote={this.props.quote} val={this.props.quote.companyDetailsMail2} defaultVal={"HAY@LEADER.COM"} />
                  </>}
                </div> : <></>}
              {this.props.quote.companyDetailsWebsite != "LEADER.COM" ?
                <div className="d-flex justify-content-center align-items-center dirRtl m-0">
                  {this.props.quote && !this.props.quote.companyDetailsWebsiteYN ? <></> : <>
                    <div>
                      <a onClick={(e) => this.hrefWebsite(e)} class="linkWebsite" style={{ marginBottom: "1vh" }} >
                        <EditableInput quote={this.props.quote} val={this.props.quote.companyDetailsWebsite} defaultVal={"leader.com"} />
                      </a>
                    </div>
                    <div className="justify-content-center align-items-center mr-2 "><img alt="" className="imgEnd" src={globe} /></div>
                  </>}
                </div> : <></>}
            </div>
          </div>




          <div style={{ position: "absolute", height: '15vh', marginBottom: "30px", width: "100%", zIndex: "-9" }}></div>
          <div className="d-flex justify-content-center align-items-center" style={{ zIndex: "-2 !important", background: "rgb(245, 245, 245)",height:"6vw" }}>
            {this.props.quoteReducer.digitalSignatureUrl ? <img src={this.props.quoteReducer.digitalSignatureUrl} style={{ zIndex: "-2 !important", marginTop: "4vh", height: "7.5vh", bottom: "0vh", width: "auto", background: "rgb(245, 245, 245) !important" }} /> : <></>}
          </div>

          <div className="d-flex justify-content-center align-items-center">
            {this.props.quote && this.props.quote.trimmedDataURLYesOrNo
              ?
              this.props.quote._id != null ?
                <>{this.state.customerSigniture === false ?
                  <div style={{ width: "100vw", zIndex: "70", background: "#F5F5F5", height: "14vh", position: "fixed", bottom: "0vh", marginBottom: "0 !important" }} className="d-flex justify-content-center align-items-center mb0">
                    <button onClick={() => this.setState({ customerSigniture: true })}
                      style={{ width: "75vw", textAlign: "center", borderRadius: "5px", marginTop: "4vh", marginBottom: "3vh" }}
                      className="d-flex justify-content-center align-items-center bkgCustomerSignitureButton">{this.props.quote ? this.props.quote.customerSignatureText ? this.props.quote.customerSignatureText : "Customer Signature" : "Customer Signature"}</button>
                  </div>
                  : <></>}
                  {this.props.managerComponent.digitalSignatureConfirmation === false ?
                      <div className="d-flex justify-content-center align-items-center" style={{ width: "80vw", background: "#F5F5F5", position: "fixed", bottom: "0px", zIndex: 0, marginLeft: "auto", marginRight: "auto", margin: "0" }} >
                        <DigitalSignature></DigitalSignature>
                      </div>
                    : <></>}


                </>
                :
                <></>

              : null}
          </div>










        </PdfContainer>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    managerComponent: state.managerComponent.managerComponent,
    quote: state.quote.quote,
    quoteReducer: state.quote,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getQuote: (a) => dispatch(actions.getQuote()),
  changeEmailsToSendPdf: (s) => dispatch(actions.setEmailsToSendPdf(s)),
  changePaperViews: (a) => dispatch(actions.numViews()),
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ViewNewOnePage));

const EditableInput = props => {
  const edsitableRef = useRef()
  return (
    <ContentEditable
      innerRef={edsitableRef}
      className="endItem4View "
      html={props.quote ? props.val ? props.val : props.defaultVal : props.defaultVal}
      style={{
        backgroundColor: props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#DB0E65" : "#DB0E65", color: "#FBFBFD !important", fontSize: "1vw"
      }}
    />
  )
}