import React from 'react';
import '../App.css';
import ManagerComponents from './managerComponents'
import NewOnePage from './newOnePage';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../Components/wrap.css'
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import '../Components/style.css';
import Alert2 from './alert2'
import MultiSelectInput from './multiSelectInput/MultiSelectInput'
import { createBrowserHistory } from "history";
import Pdf from "react-to-pdf";
import $ from 'jquery';
import createIcon from './assets/create.svg';
import contentIcon from './assets/content.svg';
import designSvg from './assets/des.svg'
import polygon from './assets/Polygon.svg'
import '../Components/newOnePage.css';
import {
} from "react-router-dom";
import MassageSuccessUpdate from './massageSuccessUpdate'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import copyLinkIcon from './assets/copyLinkIcon.svg';
import PaperHeader from './paperHeader';
import AlertEWU from './alertEWU'



const historyRefresh = createBrowserHistory({ forceRefresh: true })
// import MultiSelectInput from './MultiSelectInput'
// import configData from "../config.json";
// import plus from './img/Icon awesome-plus.png';



const history = createBrowserHistory();
const drawerWidth = '18%';
const useStyles = theme => ({

  root: {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#E8EAEC',
  },
  configurator: {
    zIndex: theme.zIndex.drawer + 10,
    position: 'relative',
    marginTop: '50px',
    height: 'calc(100% - 64px)',
    flexShrink: 0,
  },
  configuratorOpen: {
    height: 'calc(100% - 64px)',
    width: '18%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxShadow: '0px 1px 2px #00000029',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    marginTop: 50,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#E8EAEC',
    margin: '10px',
    marginTop: '60px',
    position: 'relative',

  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background_color: '#1c1d21',
    position: 'fixed',
    minHeight: '50px',
  },
  grow: {
    flexGrow: 1,
    height: '8.5vh',
    bottom: 0,
    position: 'fixed'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  margin: {
    margin: theme.spacing(1),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    height: 140,
    width: 100,
    padding: 10
  },
  popover: {
    z_index: '300000',

  },





  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),

    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
});
const options = {
  orientation: 'landscape',
};
const ButtonPdf = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <Pdf targetRef={ref} options={options} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </React.Fragment>
  );
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
// setTimeout(
//   function() {
//       this.setState({ position: 1 });
//   }
//   .bind(this),
//   3000
// );



//   $("#success").click(function(){
//     setTimeout(function () {

//       $('#suc').hide();
//     }, 1000);
// });
// $(".crud").click(function () {
//   $('.crud').addClass("crudOposite");
// });


// $('#success').click(
//   setTimeout(function () {

//     $('#suc').fadeOut(300);
//   }, 1000)

// );

// <-- time in milliseconds

class Warp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      openDrawer: false,
      valueTab: 0,
      openCollapse: false,
      crudArrow: false,
      right: true,
      visibility: 'hidden',
      anchorEl: null,
      color: 'gray',
      background: '#3a405e 0% 0% no-repeat padding-box',
      fontColor: 'white',
      arrowColor: 'gray',
      openSpeedDial: false,
      video: [],
      topContacts: [],
      nuck: true,
      old: true,
      alert3Delet: false,
      ss: true,
      exitAlertInNewPaper: false,
      fontColor: 'black',
      tooltipCopyLinkClick: false,
    };

    this.delInDimus = this.delInDimus.bind(this);
  }

  navigateToPaper = (name, _id) => {
    this.props.isPdf(false);
    this.props.currentPaper(name)
    const qoute = this.props.allquote.quotes.find(x => x._id == _id)
    this.props.updateQuote(qoute);
    this.setState({ old: false });
    this.state.old = false
    const url = window.location;
    historyRefresh.push(name);
  }



  setQoutesColor = () => {

    this.setState({ quotes: this.props.allquote.quotes });
    this.state.map(e => e.emailsToSend == true ?
      <>{this.setState({ count: this.state.count + 1 })}</>
      : null)
    console.log(this.state.count)
    // <button onClick={() => this.setState({ count: this.state.count + 1 })}>



    console.log(this.state.quotes)
    const qoute1 = this.props.allquote.quotes.find(x => x._id == this.props.quote._id)
    const qoute2 = this.props.allquote.quotes.findIndex(x => x._id == this.props.quote._id)
    this.setState({
      quotes: this.state.quotes.concat(qoute1)
    })

    const newList = this.state.quotes.splice(qoute2, 1);
    console.log(this.state.quotes)


    //    this.getUidByUserName(userName).then((uid) => {continue_page()})
  }
  deleteQuotes = () => {
    this.setState({ alert2Delet: true })
    this.props.setAlert2Statuse(1)
  }
  deleteQuotesShowTips = () => {

    this.setState({ alert3Delet: true })
    this.props.setAlert3Statuse(1)
  }
  getLinkOpen = () => {
    this.setState({ crudArrow: true })
  }
  getLinkClose = () => {
    this.setState({ crudArrow: false })
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
  changeOld() {

    this.props.setClearQuote();

  }


  sendEmail = () => {
    var url = window.location.href.replace("/admin", "");
    if (this.props.quote) {
      if (this.props.quote.contactDetailsTo)
        this.props.sendEmail(url);
      else {
        this.props.massageToShowSuccesOrError("It is not possible to send an email without a destination")
        this.props.massageSuccessOrError(true);
        this.props.massageSuccessOrOops("Oops");
      }


    }
    else {
      this.props.massageToShowSuccesOrError("No paper selected")
      this.props.massageSuccessOrError(true);
      this.props.massageSuccessOrOops("Oops");
    }

  }
  async handleClick1(e) {
    if (!this.props.managerComponent.exitAlert)//אם לא התבצע  שינוי
    {
      this.setState({ exitAlertInNewPaper: true })
      console.log(this.state.exitAlertInNewPaper);
    }
    await this.props.setClearQuote();
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.props.quote.quillStyle, 'text/html');
    e.stopPropagation()
    await this.props.setClearQuote();
    await this.props.createQuote();
  };


  ddHover = (a) => {

    // let b = $(a);
    // b.css("backgroundColor", "gray")

    // let u = a;
    // let r = $(".allPaper");
    // let p = $(".allPaper").find("")
    // console.log(p)
    // p.css("display", "none")
    let t = $(a).find(".dupDelHover")
    t.css("display", "inline-block")

  }




  ddHover3 = (a) => {
    let t = $(a);
    t.css("display", "inline-block")
  }

  ddHover2 = (a) => {
    // let b = $(a);
    // b.css("backgroundColor", "white")
    let t = $(a).find(".dupDelHover")
    t.css("display", "none")


  }
  hhhhhhh = (es) => {
    $(".ql-snow.ql-toolbar button").data("toggle", "tooltip");
    $(".ql-snow.ql-toolbar button").attr("title", "Disabled tooltip");
    $(".jghhgjh").css("display", "none !important");
    $(".ql-snow.ql-toolbar button")[0].style.backgroundColor = "red !important"
    document.getElementById("jghhgjh").style.backgroundColor = "red !important"
    es.style.backgroundColor = "red !important"

  }
  ddHover3 = (a) => {
    let p = $(".allPaper").find(".dupDelHover")
    p.css("display", "none")
    let t = $(a);
    t.css("display", "inline-block")
  }


  onHoverPaper = (e) => {
    // this.props
    // האפור
    let p = $(".allPaper").find(".dupDelHover")
    p.css("display", "none")
    // let b = $(e);
    let t = $(e);

    t.css("display", "inline-block")
    t.css("backgroundColor", "#E4E5E4")
  }

  onOutPaper = (e) => {
    let t = $(e);
    t.css("backgroundColor", "white")
  }
  setFontColor = (e) => {
    this.setState({ fontColor: "#DB0E65" })
    console.log("ggggggggg", this.state.fontColor)

  }

  changeName = (a) => {

    if (this.props.quote2.currentName != a.textContent) {
      this.props.changeNameQ(a.textContent);
      // setNameQ
    }
  }

  refCallback = (item) => {

    if (item) {

      item.ondblclick = function (e) {
        this.contentEditable = true;

      }
      item.onblur = async () => {
        console.log(this.props.quote2.currentName)

        this.changeName(item)
        await this.props.createQuote();

        //  await this.changeName(item)

        // this.props.q uote





        // console.log(this.props.qoute.currentPaper);
        console.log(this.props)
        // .allquote.quotes.currentPaper)
        // console.log(this.props.allquote.currentName) 

      }
    }
  }
  sendEmailHTML = () => {
    var massege = `<h2 style="text-align:left; background-color:red; color:red !important; ">שלום וברכה </h2>
    <img alt=""  src={tempLogo}/>`
    this.props.sendEmail(massege);
  }
  componentWillMount() {

    if (this.props.managerComponent.exitAlert == true && this.state.exitAlertInNewPaper) {
      window.onbeforeunload = function (e) {
        return 'Please press the Logout button to logout.';
      };
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.managerComponent.exitAlert)
      this.props.setExitAlert(true)
  }



  componentDidMount() {
    // $('.box1').scrollTo(0,500)
    //  let i = $('.box1').scrollTop(1000, 1022);
    let url = window.location;
    var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);

    let query = new URLSearchParams(this.props.location.search);
    if (query.get("contact"))
      localStorage.contactDetailsTo = query.get("contact")
    if (localStorage.contactDetailsTo) {
      history.replace(`/admin/${userName}`)
    }
    this.props.changeContactDetailsTo(localStorage.contactDetailsTo);
    if (localStorage.contactDetailsTo)
      localStorage.removeItem("contactDetailsTo");

    this.props.getAllQuote();
    this.props.getQuote();
    if (!this.props.allContacts)

      this.props.getAllContacts();


  }
  askPaperDidUpdate = () => {
    if (this.props.managerComponent.paperDidUpdate) {
      this.props.changeExitAlertWithoutUpdate(true)
    }
    else {
      if (this.props.managerComponent.exportYN === "papers") {
        this.props.changeExportYN("export")
      }
      else if (this.props.managerComponent.exportYN === "export") {
        this.props.changeExportYN("send")
      }
      else
        this.props.changeExportYN("papers")
    }

  }
  copyUrl = () => {

    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = window.location.href.replace('/admin/', '/');
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
  backToListPapers = () => {
    let url = window.location;
    var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
    historyRefresh.push(`/admin/${userName}`);
  }
  render() {
    var url = window.location;
    const paperName = (url.pathname.split('/')[3]);
    const userName = (url.pathname.split('/')[2]);
    console.log(this.props.contactDetails);
    const docToPrint = React.createRef();
    const open = Boolean(this.state.anchorEl)
    let paperUrl = window.location.href.replace('/admin/', '/');

    if (this.props.managerComponent.paperDidUpdate) {
      window.onbeforeunload = function () {
        return "Did you save your stuff?"
      }
    }
    else {
      window.onbeforeunload = false
    }
    return (

      <>
        <PaperHeader ></PaperHeader>

        <MassageSuccessUpdate></MassageSuccessUpdate>

        <div >
          {this.props.quote2.alert2Statuse ?
            <Alert2></Alert2> : ""}
          {this.props.managerComponent.exitAlertWithoutUpdate ? <AlertEWU></AlertEWU> : ""}
          <CssBaseline />

          {this.fastAccses()}

          <div style={{ width: "15%", position: "relative", float: "right", bottom: "0.1%" }}>


            <div className="box1 d-none d-sm-block"
            // style={{ overflowY: "auto", height: "91vh", width: "100%", backgroundColor: "#FFFFFF", borderRadius: "12px", position: "relative", right: "9%", boxShadow: "3px 3px 15px #00000029", marginTop: "7vh" }} 
            >

              {this.props.managerComponent.exportYN === "papers" ? <>
                {/* || this.props.managerComponent.exportYN === "send" */}
                {/* ... */}
                {/* <div style={{ width: "12%" }}> */}
                <div className="copyLink d-flex justify-content-center align-items-center" style={{ display: "block", marginLeft: "1.5vw", marginTop: "2.5vh", position: 'fixed', width: "12%" }}>
                  <div id='linkCopyUrl' class='d-flex bd-highlight' >
                    <div class="input-group mb-3" >
                      <input type="text" class="form-control" value={paperUrl}
                        id="valueToCopy"
                        aria-label="Recipient's username" aria-describedby="basic-addon2"
                        style={{ border: "1px solid #DB0E65", borderRight: "none", fontSize: "0.9vw", opacity: "0.8" }}
                      />

                      <div id={this.state.tooltipCopyLinkClick ? "tooltipCopyLinkClick" : ""} className="input-group-append tooltipCopyLink" onClick={() => this.setState({ tooltipCopyLinkClick: true })} onMouseLeave={() => this.setState({ tooltipCopyLinkClick: false })}>
                        <span data-toggle="tooltip" data-placement="left" title="Copy Link" style={{ cursor: "pointer", border: "1px solid #DB0E65", borderLeft: "none", backgroundColor: "rgb(196 1 99 / 13%)", height: "3.5vh !important" }}
                          class="input-group-text" onClick={() => this.copyUrl()} id="basic-addon2"><img src={copyLinkIcon}></img></span>
                        <span class="tooltiptextCopyLink">Copy link</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div style={{ margin: "4px", marginTop: "-10px" }}> */}
                {/* </div> */}
                {/* </div> */}
                {/* /// */}
                <div className="d-flex justify-content-center">
                  <div className="papers d-flex justify-content-between" style={{ backgroundColor: "white", width: "15%", position: 'fixed', top: "14vh", paddingRight: "1.5%", paddingLeft: "1.5%", marginTop: "8vh" }}>
                    {/* <img src={plus} id="plus" style={{ display: "inline-block", verticalAlign: "middle", size: "1%" }} /> */}
                    <p onClick={() => this.backToListPapers()} style={{ fontSize: "1vw", fontWeight: "bold", textAlign: "center", cursor: "pointer" }}>My papers</p>
                    <div className="d-flex justify-content-center align-items-center btnPlus" title="new paper" onClick={(e) => this.handleClick1(e)}>+</div>
                  </div>
                </div>
                <div class="allPaper" style={{ marginTop: "10vh", overflowX: "hidden !important" }} >



                  <Grid item xs={12} class="d-flex justify-content-center align-items-center" style={{ overflowX: "hidden !important", marginTop: "3vh" }}>
                    <Grid container justify="center" style={{ overflowX: "hidden !important", color: "" }} >
                      {
                        this.props.allquote && this.props.allquote.quotes && this.props.allquote.quotes.length > 0 ?

                          [...this.props.allquote.quotes].reverse().slice(0, this.props.allquote.quotes.length).map((quote, index) => (
                            <div key={index} onMouseOver={(e) => this.ddHover(e.target)} onMouseLeave={(e) => this.ddHover2(e.target)} item style={{
                              marginRight: "0.4vw", marginLeft: "0.4vw", width: "100%", textAlign: 'left',
                              paddingBottom: "0 !important", marginTop: "1vh", height: "4vh", overflowX: "hidden !important", cursor: "pointer"
                            }}>

                              {quote.name != this.props.quote.name ?
                                <>
                                  <div ref={this.refCallback} data-toggle="tooltip" data-placement="left"
                                    className="thisPaper" style={{ textAlign: "left", overflowX: "hidden !important", marginLeft: '2vh' }}
                                    onMouseOver={(e) => this.onHoverPaper(e.target)}
                                    onMouseLeave={(e) => this.onOutPaper(e.target)}
                                    onClick={(e) => { this.navigateToPaper(quote.name, quote._id); }}
                                  >
                                    {quote.name}


                                  </div>
                                  <div className="dupDelHover" style={{ textAlign: "left" }} >
                                    <i class=" fas fa-trash-alt " style={{ color: "#000505", marginRight: "0.3vw" }} onClick={() => { this.deleteQuote(quote._id); }} ></i>
                                    <i class="fas fa-copy " style={{ color: "#000505" }} onClick={() => { this.duplicate(quote._id) }}></i>
                                    {/* <i >{quote.lastUpdateQuote}</i> */}
                                  </div>
                                  {/* </div> */}
                                </>
                                :
                                <>

                                  <div data-toggle="tooltip" data-placement="left"
                                    className="thisPaper" ref={this.refCallback} style={{ textAlign: "left", overflowX: "hidden !important", marginLeft: '2vh', color: "#DB0E65" }} onMouseOver={(e) => this.ddHover(e.target)}
                                    onClick={(e) => { this.navigateToPaper(quote.name, quote._id); }}
                                    onMouseOver={(e) => this.onHoverPaper(e.target)}
                                    onMouseLeave={(e) => this.onOutPaper(e.target)} >
                                    {quote.name}
                                  </div>
                                  <div className="dupDelHover" style={{ textAlign: "left" }}>
                                    <i class=" fas fa-trash-alt" style={{ marginRight: '0.3vw', color: "#4f5150" }} onClick={() => { this.deleteQuote(quote._id); }} ></i>
                                    <i class="fas fa-copy " style={{ color: "#4f5150" }} onClick={() => { this.duplicate(quote._id) }}></i>
                                  </div>
                                </>}
                            </div>

                          )
                          )
                          :
                          <span></span>

                      }



                    </Grid>

                  </Grid>

                </div>
              </> : <>
                {/* <hr className="d-flex justify-content-center subjectAndBodyEmail"></hr> */}
                {/* <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon> */}
                {/* <i class="fas fa-arrow-left"></i> */}
                {/* <i class="fal fa-angle-left"></i> */}
                <div onClick={() => this.props.changeExportYN("papers")} className="d-flex justify-content-start align-items-center" style={{ cursor: "pointer", marginLeft: "5%", marginTop: "1vh" }}>
                  x
                  <div className="d-flex justify-content-center align-items-center">
                    <div style={{ paddingLeft: "1vw", paddingTop: "2.5vh", fontSize: "0.9vw" }}><ChevronLeftIcon></ChevronLeftIcon> List of papers</div>
                  </div>
                </div>
                <hr className="d-flex justify-content-center subjectAndBodyEmail"></hr>

                {this.props.allContact &&
                  <MultiSelectInput options={getEmailsContacts(this.props.allContact)} style={{ backgroundColor: '#F6F6FA', border: 'aliceblue', zIndex: "10", width: '20vw !important', zIndex: "10" }}  ></MultiSelectInput>}
              </>}

              <div style={{ width: "88%", margin: "auto" }} className="d-flex justify-content-center">
                {/* , position: "fixed", bottom: "0" */}
                <button onClick={() => this.askPaperDidUpdate()} className="btn bkgstyle" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>{this.props.managerComponent.exportYN === "export" ? "send" : "export"}
                </button>
              </div>
            </div>

          </div>

          <div className="newOnePage" style={{ width: this.props.quote2.right ? this.props.managerComponent.isCollapsed ? "80%" : "66%" : "77%", position: "relative", float: "right", marginRight: this.props.managerComponent.isCollapsed ? "3.2%" : "3.5%" }}>
            <NewOnePage ></NewOnePage>
          </div>

          <div className="row">
            <div className="col-12">
              <Provider store={store}>



                {/* ירקתי מה שרות עשתה */}
                {/* <ButtonPdf ref={docToPrint} /> */}
                <div className="cardDC" ref={docToPrint}

                >



                  {/* ירקתי מה שרות עשתה */}
                  {/* <NewOnePage></NewOnePage> */}





                </div>


              </Provider>

            </div>


          </div>


          {this.props.quote2.right ?
            <div className={this.props.managerComponent.isCollapsed ? "configurator d-none" : "configurator d-none d-sm-block"} id={this.props.quote2.opacity ? "wrap-configurator-opacity" : "wrap-configurator"} >

              {/* <div className="createNewPage d-flex justify-content-center align-items-center mt-4">

                <div width="2px">
                  <Tab label={<div>


                  </div>} style={{ justifyContent: 'space-between' }}
                    onClick={this.handlePopoverOpen}
                  />


                </div>


                <Typography variant="h6" style={{ flexGrow: 5, textAlign: 'center', fontSize: 15 + "px", color: this.props.quote2.opacity ? "black" : "white" }}>
                </Typography>

              </div> */}



              <div className="row" style={{ height: '100%' }}>


                <div className="col-3 bkgB" style={{ height: "100vh" }}>

                  <div onClick={() => { this.props.changeNumStep("0"); this.backToListPapers() }} className={this.props.quote2.numStep === "0" ? "bkimage myPointer" : "myPointer"} style={{ marginBottom: "2vh", width: "3.7vw" }}>
                    <div className=" d-flex justify-content-center wrap "> <i class="fas fa-home icon 7x" style={{ width: "1.9vw !important", display: "block !important" }}></i></div>
                    {this.props.quote2.numStep === "0" ?
                      <div className=" d-flex justify-content-end polygon"><img className="imgPol" src={polygon}></img></div>
                      :
                      <div>
                      </div>}
                    <div className=" d-flex justify-content-center txt" style={{ fontSize: "0.8vw" }}>Home</div>
                  </div>
                  <div onClick={() => this.props.changeNumStep("1")} className={this.props.quote2.numStep === "1" ? "bkimage myPointer" : "myPointer"} style={{ marginBottom: "2vh", width: "3.7vw" }}>
                    <div className=" d-flex justify-content-center wrap "> <img className="icon" style={{ width: "1.2vw !important", display: "block !important" }} src={createIcon}></img></div>
                    {this.props.quote2.numStep === "1" ?
                      <div className=" d-flex justify-content-end polygon"><img className="imgPol" src={polygon}></img></div>
                      :
                      <div>
                      </div>}
                    <div className=" d-flex justify-content-center txt" style={{ fontSize: "0.8vw" }}>Create</div>
                  </div>
                  <div onClick={() => this.props.changeNumStep("2")} className={this.props.quote2.numStep === "2" ? "bkimage myPointer" : "myPointer"} style={{ marginBottom: "2vh", width: "3.7vw" }}>
                    <div className=" d-flex justify-content-center wrap"> <img className="icon" style={{ width: "1.2vw !important", display: "block !important" }} src={designSvg}></img></div>
                    {this.props.quote2.numStep === "2" ?
                      <div className=" d-flex justify-content-end polygon"><img className="imgPol" src={polygon}></img></div>
                      :
                      <div></div>
                    }
                    <div className=" d-flex justify-content-center txt" style={{ fontSize: "0.8vw" }}>Design</div>
                  </div>
                  <div onClick={() => this.props.changeNumStep("3")} className={this.props.quote2.numStep === "3" ? "bkimage myPointer" : "myPointer"} style={{ marginBottom: "2vh", width: "3.7vw" }}>
                    <div className=" d-flex justify-content-center wrap d-flex align-content-end flex-wrap"> <img className="icon" style={{ width: "1.2vw !important", display: "block !important" }} src={contentIcon}></img></div>
                    {this.props.quote2.numStep === "3" ?
                      <div className=" d-flex justify-content-end polygon"><img className="imgPol" src={polygon}></img></div>
                      :
                      <div></div>
                    }
                    <div className=" d-flex justify-content-center txt" style={{ fontSize: "0.8vw" }}>Content</div>
                  </div>


                </div>
                <div className="col-9" style={{ paddingLeft: "0vw" }}><ManagerComponents></ManagerComponents></div>

              </div>

              {/* style={{ bottom: 0, backgroundColor: '#1E2C39', position: 'fixed', minHeight: '50px', height: "50px", display: "flex", width: "15.5%" }} */}




            </div>

            : ""}
        </div>



      </>
    )
  };


  fastAccses() {


    return (
      <Grid item xs={12} md={6} style={{ bottom: '20px', marginLeft: '65%', position: "absolute" }}>
        {/* console.log(this.props.quote.CurrentPaper)
      console.log(this.props.allquote.quotes)  */}

      </Grid>

    )
  }

  vewPdf = () => {
    if (this.props.managerComponent.activeStep === 0) {


      this.props.massageToShowSuccesOrError("You need to edit quote")
      this.props.massageSuccessOrError(true);
      this.props.massageSuccessOrOops("Oops");
    }
    else {
      console.log(this);
      var url = window.location;
      var contactId = (url.pathname.split('/')[2]);
      var userName = (url.pathname.split('/')[1]);
      history.replace("/" + userName + '/quotePdf')
    }


  }



  managerAlert = () => {
    this.setState({ eeee: true })
  }

  ////YAEL

  createContact = () => {

    this.props.createContact();
    this.setState({ anchorEl: false });

  }


  showTips = (num, rows) => {
    console.log(this.props.allcontact);
    const numOfContact = null;
    return (


      <div>

        {
          <Grid item xs={12} class="d-flex justify-content-center align-items-center">
            <Grid container justify="center">

              {this.props.allquote && this.props.allquote.quotes && this.props.allquote.quotes.length > 0 ?

                [...this.props.allquote.quotes].reverse().slice(0, this.props.allquote.quotes.length).map((quote, index) => (

                  <div key={index} item className="elemntInList">

                    {
                      <>

                        <Button
                          onClick={() => { this.navigateToPaper(quote.name, quote._id); }} className="elemntInList2"
                        >
                          <label class="fontSize10Quotes E8EAEC"   >{quote.name}</label>


                        </Button>
                        <br></br>

                        <div class="row">
                          <div class="col-1">
                            <Button value='click'
                            >
                              <i class="fas fa-trash-alt E8EAEC" onClick={() => { this.deleteQuote(quote._id); }}></i>
                            </Button>
                          </div>
                          <div class="col-6"> </div>
                          <div class="col-1">
                            <Button value='click' style={{ width: 0.2 }}>

                              <i class="fas fa-copy E8EAEC" onClick={() => { this.duplicate(quote._id) }} ></i>
                            </Button>
                          </div>
                        </div>
                      </>

                    }

                  </div>

                )


                )

                : <span></span>}



            </Grid>

          </Grid>}

      </div>

    )

  }
  duplicate = (id) => {
    this.props.duplicate(id);
    ;
  }
  toggleDrawer = () => {

    const show = this.props.quote2.right
    if (this.state.nuck)
      this.props.changeRight();
    // this.setState({ right: !show });
    else
      if (this.props.quote2.right === false)
        this.setState({ nuck: true });
  };
  serNuck = () => {

    const nuck2 = this.state.nuck;

    if (this.state.right === false && this.state.nuck === true)
      this.setState({ nuck: true });
    else
      this.setState({
        nuck: !nuck2,
      });

  }


  async delInDimus() {
    await this.props.delInDimus();
    this.props.delInDimus2();
  }
  handleDrawerOpen = () => {
    const show = this.state.openDrawer
    this.setState({ openDrawer: !show });
  };

  handleDrawerClose = () => {
    this.setState({ openDrawer: false })
  };

  handleChange = (event, newValue) => {
    this.setState({ valueTab: newValue })
  };

  getFastAccses = () => {
    this.setState({ visibility: 'visible' })
  };

  closeFastAccses = () => {
    this.setState({ visibility: 'hidden' })
  };

  handlePopoverOpen = (event) => {

    if (this.state.anchorEl === null) {
      this.setState({ anchorEl: event.currentTarget });
      // this.props.dispatch(setDEgelTen(true))

    }
    else {
      this.setState({ anchorEl: null });
      // this.props.dispatch(setDEgelTen(false))

    }

  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
    // this.props.dispatch(setDEgelTen(false))

  };
  changeCurrentContact1 = (e) => {
    this.setState({ anchorEl: null });
    const contact = [...this.props.allcontact.contacts].reverse().slice(0, this.props.allquote.quotes.length)[e];

    // const contact2=this.props.allContact[e];
    this.props.changeCurrentContact2(contact);
    this.props.changeCurrentContactId(contact._id);

  }


  deleteQuote = (_id) => {
    const qoute = this.props.allquote.quotes.find(x => x._id == _id)
    this.props.updateQuote(qoute);
    this.props.setAlert2Statuse(true);

  }
  view = () => {
    window.location.href = window.location.href.replace("/admin", "")
    // <Route path={"/"+userName+"/"+paperName+"/hhhh"}  component={ViewNewOnePage} />
    // window.location
  }
  changeColor = () => {
    if (this.state.color === 'gray')
      this.setState({ color: 'black', fontColor: 'black', arrowColor: 'white' })
    else
      this.setState({ color: 'gray', fontColor: 'white', arrowColor: 'gray' });
  };

  handleClose = () => {
    this.setState({ openSpeedDial: false });
  };

  handleOpen = () => {
    this.setState({ openSpeedDial: true });
  };




}


const mapStateToProps = (state) => {
  return {
    managerComponent: state.managerComponent.managerComponent,
    allContact: state.managerComponent.managerComponent.allContact,
    allquote: state.quote.allQuote,
    quote: state.quote.quote,
    quote2: state.quote,

  };
}
const mapDispatchToProps = (dispatch) => ({
  changeCurrentContact2: (currentContact) => dispatch(actions.editContact2(currentContact)),
  updateQuote: (currentContact) => dispatch(actions.editQuote4(currentContact)),
  createQuote: (a) => dispatch(actions.createQuote(a)),
  changeCurrentContactId: (e) => dispatch(actions.setContactId(e)),
  delInDimus: () => dispatch(actions.setDeletecontact()),
  delInDimus2: () => dispatch(actions.setDeletecontact2()),
  setAlert2Statuse: (a) => dispatch(actions.setAlert2Statuse(a)),
  setAlert3Statuse: (a) => dispatch(actions.setAlert3Statuse(a)),
  duplicate: (a) => dispatch(actions.duplicate(a)),
  editQuote: (a) => dispatch(actions.editQuote(a)),
  getQuote: (a) => dispatch(actions.getQuote()),
  changeNameQ: (email) => dispatch(actions.setNameQ(email)),
  setClearQuote: (name) => dispatch(actions.setClearQuote(name)),
  sendEmail: (message) => dispatch(actions.sendEmail(message)),
  getAllQuote: (a) => dispatch(actions.getallQuote()),
  getAllContacts: (a) => dispatch(actions.getallContact(a)),
  changeNumStep: (name) => dispatch(actions.setNumStep(name)),
  changeRight: () => dispatch(actions.setRight()),
  massageToShowSuccesOrError: (e) => dispatch(actions.setMassageToShowSuccesOrError(e)),
  massageSuccessOrError: (e) => dispatch(actions.setMassageSuccessOrError(e)),
  currentPaper: (e) => dispatch(actions.setCurrentPaper(e)),
  changeExportYN: (e) => dispatch(actions.setExportYN(e)),
  massageSuccessOrOops: (e) => dispatch(actions.setMassageSuccessOrOops(e)),
  changeContactDetailsTo: (e) => dispatch(actions.setContactDetailsTo(e)),
  setExitAlert: (bol) => dispatch(actions.setExitAlert(bol)),
  isPdf: (e) => dispatch(actions.setIsPdf(e)),
  changeExitAlertWithoutUpdate: (e) => dispatch(actions.setExitAlertWithoutUpdate(e)),
  changeExitType: (e) => dispatch(actions.setExitType(e)),


})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Warp));