import 'date-fns';
import React, { useEffect, useRef } from 'react';
import {
  withStyles,
} from '@material-ui/styles';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Col from 'react-bootstrap/Col'

import ContentEditable from 'react-contenteditable'
import deputationSignature from '../Components/assets/deputationSignature.svg';
import upload from './assets/upload.svg'
import Stepper2 from './stepper2'
import $ from 'jquery';
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import deleteD from './assets/deleteDropdown.svg';
import edit from './assets/editDropdown.svg';
import link from './assets/linkDropdown.svg';
import exportD from './assets/exportDropdown.svg';
import details from './assets/detailsDropdown.svg';
import copy from './assets/copyDropdown.svg';
import path from './assets/pathDropdown.svg';
import save from './assets/saveDropdown.svg';
import Lottie from "react-lottie";
import format from "date-fns/format";
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import arrow from './assets/arrow-ios-back-outline.svg';
import imageCompression from 'browser-image-compression';
import 'bootstrap/dist/css/bootstrap.css';
import '../Components/newOnePage.css';
import Quill2 from './quill2';
import logo2 from '../Components/assets/LogoLeader.svg';
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import phone from './assets/phone3.svg';
import globe from './assets/globe3.svg';
import email from './assets/telegram3.svg';
import Massage from './massage';
import '../Components/style.css';
import loadings from './assets/Papers.json';
import { createBrowserHistory } from "history";
const historyRefresh = createBrowserHistory({ forceRefresh: true })

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    '& .PrivateValueLabel-circle': {

      display: 'none'

    },
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none"
    },
  },
  theContent: {
    width: '80%',
    height: "65%",
    position: "absolute",
    boxShadow: "3px 3px 15px #00000029",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px 10px 0 0",
    margin: "auto !important",
    verticalAlign: "middle",
    bottom: "7vh !important"
  },
  end: {
    width: '100% !important',
    position: "absolute !important",
    bottom: "0"
  }
});

export const getEmailsContacts = (contacts) => {
  let emailsContacts = [];
  if (contacts && contacts.length) {
    contacts.map((contact) => {
      emailsContacts.push({ value: contact.email, label: contact.email })
    })
  }
  return emailsContacts;
}

class NewOnePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OPYOrN: false,
      nameYOrN: false,
      logoYOrN: false,
      contactDetailsYOrN: false,
    };
  }


  async onChangeHandlerProfile(event) {
    let reader = new FileReader();
    reader.onloadend = () => {
      this.props.changeLogo(reader.result)
    }
    reader.readAsDataURL(event);
    const imageFile = event;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      await this.props.addImageFromDb({ imageType: "logo", file: compressedFile });
    } catch (error) {
      console.log(error);
    }
  }
  async onChangeHandlerProfilePdf(event) {
    this.changeIndex(true);
    let reader = new FileReader();
    reader.onloadend = () => {
      this.props.changePdf(reader.result)
    }
    reader.readAsDataURL(event);
    await this.props.onChangeHandlerProfilePdf(event);
  }
 

  async onChangeHandlerBusinessSignature(event) {
    let reader = new FileReader();
    reader.onloadend = () => {
      this.props.changeBusinessSignature(reader.result)
    }
    reader.readAsDataURL(event)
    const imageFile = event;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      // await this.props.onChangeHandlerProfileBusinessSignature(compressedFile);
      await this.props.addImageFromDb({ imageType: "businessSignature", file: compressedFile });
    } catch (error) {
      console.log(error);
    }


  }


  changeCardCD(e) {
    this.props.changeNumStep('1')
    this.props.changeCardStep('contactDetailsDetails')
    e.stopPropagation()
    $("#contactDetailsCard").slideDown("fast");
    $("#footerCard").slideUp("fast");
  }
  changeCDDesign() {
    this.props.changeNumStep('2')
    this.props.changeCardStep('company details design')
    $("#companyDetailsDesignCard").slideDown("fast");
    $("#logoCard").slideUp("fast");
    $("#businessSignatureCard").slideUp("fast");
    $("#imageCard").slideUp("fast");
    $("#footerColorCard").slideUp("fast")
  }
  changeCardF() {
    this.props.changeNumStep('2')
    this.props.changeCardStep('color footer')
    $("#footerColorCard").slideDown("fast");
    $("#logoCard").slideUp("fast");
    $("#businessSignatureCard").slideUp("fast");
    $("#imageCard").slideUp("fast");
    $("#companyDetailsDesignCard").slideUp("fast")
  }
  changeCardFStep1(e) {
    this.props ? this.props.changeCardStep('footerDetails') : this.changeCardStep('footerDetails')
    this.props ? this.props.changeNumStep("1") : this.changeNumStep("1")
    $("#footerCard").slideDown("fast");
    $("#contactDetailsCard").slideUp("fast");
    // e.preventDefault();
    e.stopPropagation()

  }
  changeCardFStep11(e) {
    this.changeCardStep('footerDetails')
    this.changeNumStep("1")
    $("#footerCard").slideDown("fast");
    $("#contactDetailsCard").slideUp("fast");
    // e.preventDefault();
    // e.stopPropagation()

  }
  changeCardL() {
    this.props.changeNumStep('2')
    this.props.changeCardStep('logo')
    $("#logoCard").slideDown("fast");
    $("#imageCard").slideUp("fast");
    $("#businessSignatureCard").slideUp("fast");
    $("#footerColorCard").slideUp("fast");
    $("#companyDetailsDesignCard").slideUp("fast")
  }

  changeCardBGI() {
    this.props.changeNumStep('2')
    this.props.changeCardStep('image')
    $("#imageCard").slideDown("fast");
    $("#logoCard").slideUp("fast");
    $("#businessSignatureCard").slideUp("fast");
    $("#footerColorCard").slideUp("fast");
    $("#companyDetailsDesignCard").slideUp("fast")
  }
  changeCardPN() {
    this.props.changeNumStep('3')
    this.props.changeCardStep('paperName');
    $("#paperNameCard").slideDown("fast");
    $("#digitalSignatureCard").slideUp("fast");
  }
  changeCardQ() {
    this.props.changeCardStep('quill');
  }
  backToListPapers = () => {
    let url = window.location;
    var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
    historyRefresh.push(`/admin/${userName}`);

  }
  changeCardDS() {
    this.props.changeNumStep('2')
    this.props.changeCardStep('businessSignature');
    $("#businessSignatureCard").slideDown("fast");
    $("#imageCard").slideUp("fast");
    $("#logoCard").slideUp("fast");
    $("#footerColorCard").slideUp("fast");
    $("#companyDetailsDesignCard").slideUp("fast")
  }
  hrefWebsite(e) {
    if (this.props.quote.companyDetailsWebsite.substring(0, 8) === "https://")
      window.open(this.props.quote.companyDetailsWebsite);
    e.stopPropagation()
  }

  inputSize(input) {
    if (input.target.value.length < 25)
      input.target.style.width = (input.target.value.length + 1) * 1 + 'vw !important'
  }
  async componentDidMount() {
    await this.props.getAllQuote();
    await this.props.getQuote();
    await this.props.changePaperDidUpdate(false);
  }

  openCropper(event) {
    this.props.changeImageSrc(event)
  }
  copyUrl = () => {
    // var url = window.location;
    // let u = url.href.replace('/admin/', '/')
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = window.location.href.replace('/admin/', '/');
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    // window.open(u);
  }
  duplicate = (id) => {
    this.props.duplicate(id);
    ;
  }
  componentDidUpdate(prevProps) {
    if (this.props.quote != prevProps.quote) {
      this.props.changePaperDidUpdate(true);
    }
  }
  deleteQuotes = () => {
    this.setState({ alert2Delet: true })
    this.props.setAlert2Statuse(1)
  }
  deleteQuote = (_id) => {
    const qoute = this.props.allquote.quotes.find(x => x._id == _id)
    this.props.updateQuote(qoute);
    this.props.setAlert2Statuse(true);

  }

  changeIndex(e) {
    // !this.props.quote.isPdf
    this.props.setIsPdf(e)
  }
  handleClickOpen() {
    if ($('.crud').hasClass('crudOposite') == false) {
      var v = document.getElementById("crud");
      v.className += " crudOposite";
    }
    if (this.props.quote.name) {
      if (this.props.quote != null & this.props.quote._id != null)
        this.props.editQuote();
      else
        this.props.createQuote();
    }
    else {
      var parser = new DOMParser();
      var doc = parser.parseFromString(this.props.quote.quillStyle, 'text/html');
      if (!doc.body.innerText) {
        this.props.createQuote();
      }
      else {

      }
    }



  }
  render() {


    const { classes } = this.props;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log("qqqq"+this.props.quote);
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    let today = year + "-" + month + "-" + day;
    const navDropdownTitle = (<img src={path}></img>);
    const defaultAnimationOptions = {
      loop: true,
      autoplay: true,
      animationData: loadings,
      // rendererSettings: {
      //   preserveAspectRatio: "xMidYMid slice",
      // },
    };

    return (
      <>

        <div style={{ position: "relative", width: "65%", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <Stepper2></Stepper2>
        </div>
        <div className="casing1" style={{ borderRadius: "12px !important", height: '89vh', marginLeft: this.props.managerComponent.isCollapsed ? "0vh" : "2%" }} >

          <div className=" d-block d-sm-none">
            <div className="navmobile " style={{ width: "100%", height: "7vh" }} >

              <Navbar>
                <Navbar.Collapse className="justify-content-start" >
                  <bottun style={{ paddingLeft: "3vw", paddingRight: "3vw" }} onClick={() => this.backToListPapers()}><img style={{ float: "left", margin: "auto", color: "black" }} src={arrow}></img></bottun>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" >
                  <bottun onClick={() => this.handleClickOpen()} style={{ paddingRight: "3vw" }}><img src={save}></img></bottun>
                  <Menu direction={"botton"} style={{ height: "inherint", width: "5vw", marginLeft: "-3vw" }} menuButton={<MenuButton><img src={path}></img></MenuButton>}>
                    <MenuItem onClick={() => this.deleteQuote(this.props.quote._id)}><img src={deleteD} style={{ paddingRight: "3vw" }}></img> Delete </MenuItem>
                    <MenuItem onClick={() => this.duplicate(this.props.quote._id)}><img src={copy} style={{ paddingRight: "3vw" }}></img> Copy </MenuItem>
                    <MenuItem><img src={edit} style={{ paddingRight: "3vw" }}></img> Edit  </MenuItem>
                    <MenuItem onClick={() => this.copyUrl()}><img src={link} style={{ paddingRight: "3vw" }} ></img> Copy link</MenuItem>
                    <MenuItem onClick={() => this.props.changeExportYN("export")}><img src={exportD} style={{ paddingRight: "3vw" }}></img>   Export</MenuItem>
                    <MenuItem><img src={details} style={{ paddingRight: "3vw" }}></img>   Details</MenuItem>
                  </Menu>
                </Navbar.Collapse>
              </Navbar>
            </div>

          </div>

          {this.props.quote2.approachedToServerYesOrNo ?
            <div class="d-flex justify-content-center align-items-center" style={{ marginBottom: "0" }}>

              <Lottie options={{
                loop: true,
                autoplay: true,
                animationData: loadings,
              }} style={{
                width: "30%",
                position: "absolute",
                top: "8%",
                zIndex: "1111111111111111"
              }}
              />
            </div>

            : null
          }
          {/* <HeaderLeader appName={'papers'} /> */}
          <div style={{ minHeight: "15vh" }}>
            {this.props.quote && !this.props.quote.imageYN ? <></> : <>
              <div onClick={() => this.changeCardBGI()} style={{ cursor: "pointer" }}>
                <label className="labelFileInputImage" for="fileInputImage" onClick={() => this.props.changeCurrentComponent('Image')}> {this.state.imageYOrNo ?
                  <div className="d-flex justify-content-end align-items-center">
                  </div> :
                  <span></span>}
                  <div style={{ position: "relative" }}>
                    <img alt="" style={{ borderRadius: "4px 4px 0 0 " }} class="imgTableAndChairs" width="100% important" src={this.props.quote ? this.props.quote.imageImage ? this.props.quote.imageImage : <></> : <></>} onClick={() => this.openCropper("backgroundImage")} />
                    <div className="overlayBackgroundImage" style={{ cursor: "pointer" }} onClick={() => this.openCropper("backgroundImage")}></div>
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
                      onChange={(e) => this.props.changeDate(e.target.value)}
                      onClick={(e) => this.changeCardCD(e)}
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
                      onChange={(e) => this.props.changeTo(e.target.value)}
                      onClick={(e) => this.changeCardCD(e)}
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
                      onChange={(e) => this.props.changeFrom(e.target.value)}
                      onClick={(e) => this.changeCardCD(e)}
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
                  <div onMouseEnter={() => this.setState({ nameYOrN: true })} onMouseLeave={() => this.setState({ nameYOrN: false })} onClick={() => this.props.changeCurrentComponent("Name")}>
                    <label >
                      <div>
                        {this.props.quote ? this.props.quote.nameYOrN ?
                          <>
                            <input id="TypeYourPropsalName" type="text"
                              onKeyPress={(e) => this.inputSize(e)}
                              onClick={() => this.changeCardPN()}
                              value={this.props.quote ? this.props.quote.name ? this.props.quote.name : "" : ""}
                              style={{ textAlign: "center", fontSize: "2vw", fontWeight: 'bold', width: this.props.quote.name ? this.props.quote.name.length < 15 ? (this.props.quote.name.length + 1) * 1 + 'vw' : "25vw" : "10vw", color: '#707071', zIndex: 99 }}
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
                  onClick={() => this.props.changeCurrentComponent('Logo')}
                  onMouseEnter={() => this.setState({ dateYOrNo: true })}
                  onMouseLeave={() => this.setState({ dateYOrNo: false })}
                  style={{
                    marginTop: "3.2vh",
                    color: this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "black" : "black",
                    fontFamily: this.props.quote ? this.props.quote.contactDetailsFont ? this.props.quote.contactDetailsFont : "" : "", lineHeight: this.props.quote ? this.props.quote.contactDetailsLineHeight ? this.props.quote.contactDetailsLineHeight : '0.4' : "0.4",
                    fontWeight: this.props.quote ? this.props.quote.contactDetailsTextWeight ? this.props.quote.contactDetailsTextWeight : "" : "", fontSize: this.props.quote ? this.props.quote.contactDetailsTextsize ? this.props.quote.contactDetailsTextsize + "vw" : '0.7vw' : '0.7vw',
                    width: "13vw"
                  }}>


                  <div>
                    {this.props.quote && !this.props.quote.LogoYOrN ? <></> :
                      <><div
                        onMouseEnter={() => this.setState({ logoYOrN: true })}
                        onMouseLeave={() => this.setState({ logoYOrN: false })}
                        className="hoverMoveLogo" >
                        <label htmlFor="logouu" style={{ marginTop: "3.2vh" }}>
                          <div>
                            <div style={{ position: "relative", height: "10vh", width: "5vw" }} onClick={() => this.changeCardL()}>
                              <img src={this.props.quote ? this.props.quote.logo ? this.props.quote.logo : logo2 : logo2} id="logo"
                                style={{ borderRadius: this.props.quote ? this.props.quote.logoBorderRadiusLogo ? this.props.quote.logoBorderRadiusLogo : "" : "", display: "inline-block", cursor: "pointer", marginLeft: "6vw", marginTop: "-6vh" }}
                                height={"80% !important"}
                                width="auto" />
                            </div>
                            {this.state.logoYOrN ?
                              <div className="d-flex justify-content-end">
                              </div>
                              :
                              <span></span>
                            }
                          </div>

                        </label>

                        <input type={"file"}
                          id="logouu"
                          htmlFor="myInput"
                          accept="image/*"
                          style={{
                            display: 'none',
                            cursor: 'pointer',

                          }}
                          onChange={(e) => { this.onChangeHandlerProfile(e.target.files[0]); }}
                        ></input>

                      </div></>

                    }
                  </div>



                  {/* ;;;;; */}
                </div>
                <Massage image={"rrr"} text={"sss"} ></Massage>
              </div>

            </div>

          </div>


          {this.props.quote2.updateEnabled ? <Col id="progresBar" >
            <ProgressBar
              variant={this.props.managerComponent.progressColor}
              animated
              now={this.props.managerComponent.loadedAjax1}
              label={`${Math.round(this.props.managerComponent.loadedAjax1)
                }%`}
            />
          </Col> : <></>}

          {this.props.quote.quillYOrN ?
            <div className="" onClick={() => this.changeCardQ()}>
              {this.props.quote && !this.props.quote.imageYN ? <span className="quillWithoutImage"><Quill2 ></Quill2></span> : <Quill2 ></Quill2>}
            </div>
            : <>
              <div className="importPdfShow border rounded" style={{ position: "relative", marginLeft: "auto", marginRight: "auto", marginTop: "2%" }}>
                <img className={this.props.quote.isPdf ? "none" : "d-flex justify-content-center upload"} src={upload} />
                <p className={this.props.quote.isPdf ? "none" : "d-flex justify-content-center"}>Upload or drag your files here</p>
                <div className="d-flex justify-content-center"><button style={{ marginLeft: "auto", marginRight: "auto", borderRadius: "4px" }} className={this.props.quote.isPdf ? "updateBtnPdf" : "btnUpload"} id="btnUpload" onClick={() => { document.getElementById("inputFile").click() }} > upload</button></div>
                <input className={this.props.quote.isPdf ? "none" : "importPdfEmbed"}
                  id="inputFile"
                  style={{
                    cursor: 'pointer',
                    display: 'none'
                  }} type="file" accept="application/pdf, image/jpeg,image/png" name="file" multiple onChange={(e) => { this.onChangeHandlerProfilePdf(e.target.files[0]); }} />
                {this.props.quote.pdf ? this.props.quote.pdf.substring(this.props.quote.pdf.length - 3) == "pdf" ?
                  <iframe className="importPdfEmbed" src={this.props.quote ? this.props.quote.pdf ? this.props.quote.pdf :
                    ""
                    :
                    ""} type="application/pdf"
                    style={{ position: "absolute", height: "30vh", top: 0, zIndex: 33, width: "100%" }}
                  />

                  : <div className="d-flex justify-content-center"><img src={this.props.quote.pdf} style={{ position: "absolute", height: "30vh", top: 0 }} /></div>
                  : <></>}



              </div>
            </>
          }



          <div className="d-flex justify-content-center" style={{ zIndex: 44 }}>

            <label htmlFor="businessSignature" style={{ cursor: "pointer", marginTop: "0.8%" }}>
              <div onClick={() => this.changeCardDS()}>

                <img className="businessSignature" src={this.props.quote ? this.props.quote.businessSignature ? this.props.quote.businessSignature : deputationSignature : deputationSignature}
                  width="12vw"
                  height="auto"
                  position="relative"
                  cursor="pointer"
                />
              </div>
            </label>
            <input type={"file"}
              htmlFor="myInput"
              accept="image/*"
              style={{
                display: 'none',
                cursor: 'pointer',

              }}
              onChange={(e) => this.onChangeHandlerBusinessSignature(e.target.files[0])}
            ></input>
          </div>


          <div className={classes.end} id="footerr" style={{
            backgroundColor: this.props.quote ? this.props.quote.companyDetailsBackgroundColor ? this.props.quote.companyDetailsBackgroundColor : "#DB0E65" : "#DB0E65",
            width: "100% !important", height: "5.5vh", marginLeft: "0 !important", marginRight: "0 !important"
          }}
            onClick={() => this.changeCardF()}>
            <div className="d-flex justify-content-around align-items-center mt2">

              <div className=" d-flex justify-content-center align-items-center dirLtr">
                {this.props.quote && !this.props.quote.companyDetailsCallYN ? <></> : <>
                  <div className=" d-flex justify-content-center align-items-center m-2" onClick={(e) => this.changeCardFStep1(e)}><img alt="" className="imgEnd" src={phone} /></div>
                  <EditableInput quote={this.props.quote} changeCardFStep11={this.changeCardFStep1} changeCardStep={this.props.changeCardStep} changeNumStep={this.props.changeNumStep} changeCompanyDetailsWebsite={this.props.changeCompanyDetailsCall} val={this.props.quote.companyDetailsCall} defaultVal={"055 676 3901"} />
                </>}
              </div>

              <div className="d-flex justify-content-center align-items-center dirC">
                {this.props.quote && !this.props.quote.companyDetailsMailYN ? <></> : <>
                  <div className=" d-flex justify-content-center align-items-center m-2" ><img alt="" className="imgEnd" src={email} onClick={(e) => this.changeCardFStep1(e)} /></div>
                  <EditableInput quote={this.props.quote} changeCardFStep11={this.changeCardFStep1} changeCardStep={this.props.changeCardStep} changeNumStep={this.props.changeNumStep} changeCompanyDetailsWebsite={this.props.changeCompanyDetailsMail2} val={this.props.quote.companyDetailsMail2} defaultVal={"HAY@LEADER.COM"} />
                </>}
              </div>
              <div className=" d-flex justify-content-center align-items-center dirRtl">
                {this.props.quote && !this.props.quote.companyDetailsWebsiteYN ? <></> : <>
                  <a onClick={(e) => this.hrefWebsite(e)} class="linkWebsite" >
                    <div style={{ marginTop: "1vh" }}>
                      <EditableInput quote={this.props.quote} changeCardFStep11={this.changeCardFStep11} changeCardStep={this.props.changeCardStep} changeNumStep={this.props.changeNumStep} changeCompanyDetailsWebsite={this.props.changeCompanyDetailsWebsite} val={this.props.quote.companyDetailsWebsite} defaultVal={"leader.com"} />
                    </div>
                  </a>
                  <div className=" d-flex justify-content-center align-items-center m-2"
                    onClick={(e) => this.changeCardFStep1(e)}><img alt="" className="imgEnd" src={globe} />
                  </div>


                </>}
              </div>
            </div>

          </div>





        </div>


      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    allquote: state.quote.allQuote,
    quote: state.quote.quote,
    quote2: state.quote,
    managerComponent: state.managerComponent.managerComponent,
    allContact: state.managerComponent.managerComponent.allContact,
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeCardStep: (e) => dispatch(actions.setCardStep(e)),
  changeCompanyDetailsCall: (companyDetails) => dispatch(actions.setCompanyDetailsCall(companyDetails)),
  changeCompanyDetailsMail2: (companyDetails) => dispatch(actions.setCompanyDetailsMail2(companyDetails)),
  changeCompanyDetailsWebsite: (companyDetails) => dispatch(actions.setCompanyDetailsWebsite(companyDetails)),
  changeDate: (e) => dispatch(actions.setContactDetailsDate(e)),
  changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),
  changeFrom: (e) => dispatch(actions.setContactDetailsFrom(e)),
  changeCurrentComponent: (e) => dispatch(actions.setStepper(e)),
  changeLogo: (image) => dispatch(actions.setLogo(image)),
  changePdf: (image) => dispatch(actions.setPdf(image)),
  changeNameQ: (email) => dispatch(actions.setNameQ(email)),
  changeImageImage: (image) => dispatch(actions.setImageImage(image)),
  addImageFromDb: (image) => dispatch(actions.addImageFromDb(image)),
  onChangeHandlerProfilePdf: (pdf) => dispatch(actions.addNewImageFromDbPdf(pdf)),
  changeBusinessSignature: (image) => dispatch(actions.setBusinessSignature(image)),
  changeNumStep: (name) => dispatch(actions.setNumStep(name)),
  getAllQuote: (a) => dispatch(actions.getallQuote()),
  getQuote: (a) => dispatch(actions.getQuote()),
  changeImageSrc: (image) => dispatch(actions.setImageSrc(image)),
  editQuote: (a) => dispatch(actions.editQuote()),
  updateQuote: (currentContact) => dispatch(actions.editQuote4(currentContact)),
  setAlert2Statuse: (a) => dispatch(actions.setAlert2Statuse(a)),
  duplicate: (a) => dispatch(actions.duplicate(a)),
  changeExportYN: (e) => dispatch(actions.setExportYN(e)),
  createQuote: (a) => dispatch(actions.createQuote()),
  setIsPdf: (e) => dispatch(actions.setIsPdf(e)),
  changePaperDidUpdate: (e) => dispatch(actions.setPaperDidUpdate(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(NewOnePage));



const EditableInput = props => {
  const edsitableRef = useRef()
  useEffect(() => {
    if (edsitableRef.current) {
      edsitableRef.current.onclick = ((e) => props.changeCardFStep11(e))
      edsitableRef.current.placeholder = 'alert ref'

    }
  }, [edsitableRef.current])

  return (
    <ContentEditable
      innerRef={edsitableRef}
      className="endItem4 "
      html={props.quote ? props.val ? props.val : props.defaultVal : props.defaultVal}
      placeholder={"leader.com"}
      // onKeyPress={(e) => this.inputSize(e)}
      onChange={(e) => props.changeCompanyDetailsWebsite(e.target.value)}
      style={{
        backgroundColor: props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#DB0E65" : "#DB0E65", color: "#FBFBFD !important", fontSize: "1vw"
      }}
    />
  )
}