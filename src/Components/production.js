import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SelectInput from './SelectInput'
import $ from 'jquery';
import '../Components/production.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import format from "date-fns/format";
import { TiArrowSortedDown } from "react-icons/ti";

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden !important',

        '& .PrivateValueLabel-circle': {

            display: 'none'

        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },

    Logo_root_37: {
        background_color: '#4d5358'
    },

    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        // height: 19,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        // width: 100,
        height: 10,
        // textAlign: 'left',
        font: 'Bold 14px/19px Roboto',
        // letterSpacing: 0.17,
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
        //    width:13
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        // borderBottom: '1px solid #75798e',
        opacity: 1,
        width: '12vh',
        fontSize: '0.9vw',
        marginBottom: "1.8vh",
        backgroundColor: "#A7A7A736 !important",
        height: "3.5vh",
        width: '95%',
    },

    textcontect: {
        color: 'white',
        margin: '1%',
        fontSize: '0.9vw'
    },
    toolbar: {
        paddingRight: '0px',

    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
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

function Production(props) {
    const { changeCardStep, changeTo
    } = props;
    const [formatDateList] = React.useState([
        { format: "dd/MM/yyyy", display: format(new Date(), 'dd/MM/yyyy') },
        { format: "yyyy/MM/dd", display: format(new Date(), 'yyyy/MM/dd') },
        { format: "dd-MM-yyyy", display: format(new Date(), 'dd-MM-yyyy') }
    ]);

    const { classes } = props;
    console.log(classes)
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    let today = year + "-" + month + "-" + day;
    function changeVal(e) {
        setValue(e.target.value)
        props.changeQuillYOrN()
    }
    function changeFormat(format) {
        props.setFormatDate(format)
      }
    
        const [value, setValue] = React.useState('input');
        const handleChange = (event) => {
            setValue(event.target.value)
            props.changeQuillYOrN()
        };
    return (
        <>
            <p style={{ fontSize: "1vw", textAlign: "center" }} className="fs08">Create</p>
            <hr style={{ height: "0.01vw", width: "100%" }} />
            {/* <div style={{ marginLeft: "15px", marginRight: "10px" }}> */}
            {props.managerComponent.cardStep === "contactDetailsDetails" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#contactDetailsCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08">Contact details</div>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                    {/* <br></br> */}
                </>
                :
                < div >
                    <div style={{ cursor: "pointer" }} onClick={() => { $("#contactDetailsCard").slideDown("fast"); props.changeCardStep("contactDetailsDetails"); $("#footerCard").slideUp("fast"); $("#importPdfCard").slideUp("fast"); }} className=" d-flex justify-content-between align-items-center marginR10L15">
                        <div className="fs08">Contact details</div>
                        <KeyboardArrowRightIcon />
                    </div>
                </div>

            }
            <div id="contactDetailsCard" className="marginR10L15" style={{ display: "none" }}>

                <div className="row  mb-0" style={{ width: "95%" }}>
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}>Date</FormLabel>
                    </div>
                    <div className="col-1">
                        <div class="form-check form-switch">
                            <input className={props.quote ? props.quote.contactDetailsDateYN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.contactDetailsDateYN : true} onChange={() => props.changeContactDetailsDateYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                    </div>
                </div>

                {props.quote.contactDetailsDateYN ? <>
                    <input type="Date"
                        width={2}
                        value={props.quote ? props.quote.lastUpdateQuote ? props.quote.lastUpdateQuote : today : today}
                        onChange={(e) => props.changeLastUpdateQuote(e.target.value)}
                        onFocus={(e) => e.currentTarget.placeholder = ''}
                        onBlur={(e) => e.currentTarget.placeholder = (props.quote ? props.quote.lastUpdateQuote ? props.quote.lastUpdateQuote : new Date().toLocaleString() : new Date().toLocaleString())}
                        className={classes.fieldTextStyle}
                    />
                    <p className='inputText'>Date format</p>
                  <div className="box d-flex" > 
                  <label>{props.quote ? props.quote.lastUpdateQuote ? format(new Date(props.quote.lastUpdateQuote),props.quote.formatDate?props.quote.formatDate:"dd/MM/yyyy") : format(new Date(today),props.quote.formatDate?props.quote.formatDate:"dd/MM/yyyy"): format(new Date(today),props.quote.formatDate?props.quote.formatDate:"dd/MM/yyyy")}</label>

                        <TiArrowSortedDown class="dropdown-toggle  " type="button" style={{ verticalAlign: "top", marginLeft: "4px", marginTop: '3px', cursor: 'pointer', color: '#d2d3db', fontSize: "20pt", hover: { backgroundColor: 'red' } }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div class="dropdown-menu production_dropdown-menu"  aria-labelledby="dropdownMenuButton" >
                            {formatDateList && formatDateList.map((format, index) => (
                                <a className="dropdown-item"
                                    onClick={() => changeFormat(formatDateList[index].format)}
                                >{format.display}</a>
                            ))}
                        </div>
                    </div>
                    {/* https://papers.dev.leader.codes/admin/moriya/?includesConversations=false?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJNcGZVeWZ6TndzTU1JSTNIQldBQldtYXpGUHkyIiwiZW1haWwiOiJtb3JpeWEubmFkYXYuMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE2MjcyMDI2OTd9.wHKUNYYULsoHzJipFtXEZ9_orFG40yQsL1H8aa4ifyk */}

                    {/* <br></br> */}
                </> : <></>}


                <div className="row mt-3 mb-0">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}>To</FormLabel>
                    </div>
                    <div className="col-1">

                        <div class="form-check form-switch">
                            <input className={props.quote ? props.quote.contactDetailsToYN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.contactDetailsToYN : true} onChange={() => props.changeContactDetailsToYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                        {/* <AntSwitch checked={props.quote ? props.quote.contactDetailsToYN : true} onChange={() => props.changeContactDetailsToYN()} /> */}
                    </div>
                </div>
                {props.quote.contactDetailsToYN ? <>
                    <div className="selectInput mb-0" style={{ padding: "0px,0px,0px,2px" }} >
                        {props.allContact &&
                            <SelectInput options={getEmailsContacts(props.allContact)} style={{ backgroundColor: '#F6F6FA', border: 'aliceblue', width: '10vw !important', marginRight: "2vw", fontSize: "0.9vw !important" }}
                                value={props.quote ? props.quote.contactDetailsTo ? props.quote.contactDetailsTo : "" : ""}></SelectInput>
                        }</div>
                    <br></br>
                    <br></br>
                </> : <></>}



                <div className="row mt-0">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}>From</FormLabel>
                    </div>
                    <div className="col-1">
                        <div class="form-check form-switch">
                            <input className={props.quote ? props.quote.contactDetailsFromYN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.contactDetailsFromYN : true} onChange={() => props.changeContactDetailsFromYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                    </div>
                </div>

                {props.quote.contactDetailsFromYN ? <>
                    <input type="text"
                        width={2}
                        InputProps={{ className: classes.multilineColor }}
                        onChange={(e) => props.changeFrom(e.target.value)}
                        onFocus={(e) => e.currentTarget.placeholder = ''}
                        onBlur={(e) => e.currentTarget.placeholder = "From"}
                        placeholder="From"
                        value={props.quote ? props.quote.contactDetailsFrom ? props.quote.contactDetailsFrom : window.location.pathname.split('/')[2] : window.location.pathname.split('/')[2]}
                        className={classes.fieldTextStyle} />
                    {/* <br></br> */}
                    <br></br>
                </> : <></>}
            </div>

            {
                props.managerComponent.cardStep === "footerDetails" ?
                    <>
                        <div className="bkgBl">
                            <div onClick={() => { $("#footerCard").slideUp("fast"); props.changeCardStep(""); }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                                <div className="fs08">Footer</div>
                                <KeyboardArrowDownIcon />

                            </div>
                        </div>


                    </>
                    :
                    <div>
                        <div style={{ cursor: "pointer" }} onClick={() => { $("#footerCard").slideDown("fast"); props.changeCardStep("footerDetails"); $("#contactDetailsCard").slideUp("fast"); $("#importPdfCard").slideUp("fast"); }} className=" d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08">Footer</div>
                            <KeyboardArrowRightIcon />

                        </div>
                    </div>

            }
            <div style={{ display: "none" }} id="footerCard" className="marginR10L15">
                <div className="row ">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}>Phone</FormLabel>
                    </div>
                    <div className="col-1">
                        <div class="form-check form-switch">
                            <input className={props.quote ? props.quote.companyDetailsCallYN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.companyDetailsCallYN : true} onChange={() => props.changeCompanyDetailsCallYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                        {/* <AntSwitch checked={props.quote ? props.quote.companyDetailsCallYN : true} onChange={() => props.changeCompanyDetailsCallYN()} /> */}
                    </div>
                </div>
                {/* <div class="mt-2 ml-2"> */}
                {props.quote.companyDetailsCallYN ? <>
                    <input type="text"
                        width={40}
                        InputProps={{ className: classes.multilineColor }}
                        onChange={(e) => props.changeCompanyDetailsCall(e.target.value)}


                        onFocus={(e) => e.currentTarget.placeholder = ''}
                        onBlur={(e) => e.currentTarget.placeholder = (props.quote ? props.quote.companyDetailsCall ? props.quote.companyDetailsCall : "+25 06388 900 1" : "+25 06388 900 1")}
                        placeholder={props.quote ? props.quote.companyDetailsCall ? props.quote.companyDetailsCall : "+25 06388 900 1" : "+25 06388 900 1"}

                        value={props.quote ? props.quote.companyDetailsCall ? props.quote.companyDetailsCall : "" : ""}
                        className={classes.fieldTextStyle} />
                </> : <></>}

                <div className="row mt-1 mb-0">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}>Email</FormLabel>
                    </div>
                    <div className="col-1">
                        <div class="form-check form-switch">
                            <input className={props.quote ? props.quote.companyDetailsMailYN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.companyDetailsMailYN : true} onChange={() => props.changeCompanyDetailsMailYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                        {/* <AntSwitch checked={props.quote ? props.quote.companyDetailsMailYN : true} onChange={() => props.changeCompanyDetailsMailYN()} /> */}
                    </div>
                </div>
                {/* <div class="mt-2 ml-2"> */}
                {props.quote.companyDetailsMailYN ? <>
                    <input type="text"
                        width={2}
                        InputProps={{ className: classes.multilineColor }}
                        onChange={(e) => props.changeCompanyDetailsMail2(e.target.value)}
                        value={props.quote ? props.quote.companyDetailsMail2 ? props.quote.companyDetailsMail2 : "" : ""}
                        onFocus={(e) => e.currentTarget.placeholder = ''}
                        onBlur={(e) => e.currentTarget.placeholder = (props.quote ? props.quote.companyDetailsMail2 ? props.quote.companyDetailsMail2 : "HAY@" : "HAY@LEADER.COM")}

                        placeholder={props.quote ? props.quote.companyDetailsMail2 ? props.quote.companyDetailsMail2 : "HAY@" : "HAY@LEADER.COM"}
                        className={classes.fieldTextStyle} />
                </> : <></>}

                <div className="row mt-1 ">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}>Website</FormLabel>
                    </div>
                    <div className="col-1">

                        <div class="form-check form-switch">

                            <input className={props.quote ? props.quote.companyDetailsWebsiteYN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.companyDetailsWebsiteYN : true} onChange={() => props.changeCompanyDetailsWebsiteYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                        {/* <AntSwitch checked={props.quote ? props.quote.companyDetailsWebsiteYN : true} onChange={() => props.changeCompanyDetailsWebsiteYN()} /> */}
                    </div>
                </div>
                {/* <div class="mt-2 ml-2"> */}
                {props.quote.companyDetailsWebsiteYN ? <>
                    <input type="text"
                        width={2}
                        InputProps={{ className: classes.multilineColor }}
                        onChange={(e) => props.changeCompanyDetailsWebsite(e.target.value)}
                        onFocus={(e) => e.currentTarget.placeholder = ''}
                        onBlur={(e) => e.currentTarget.placeholder = (props.quote ? props.quote.companyDetailsWebsite ? props.quote.companyDetailsWebsite : "LEADER.COM" : "LEADER.COM")}
                        placeholder={props.quote ? props.quote.companyDetailsWebsite ? props.quote.companyDetailsWebsite : "LEADER.COM" : "LEADER.COM"}
                        value={props.quote ? props.quote.companyDetailsWebsite ? props.quote.companyDetailsWebsite : "" : ""}
                        className={classes.fieldTextStyle} />
                </> : <></>}

            </div>

            {props.managerComponent.cardStep === "importPdf" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#importPdfCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center fs08 marginR10L15">
                            <div class="textInOneRow">Type</div>
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>
                </>
                :

                <div onClick={() => { $("#importPdfCard").slideDown("fast"); props.changeCardStep("importPdf"); $("#contactDetailsCard").slideUp("fast"); $("#footerCard").slideUp("fast"); }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08">Type</div>
                    <KeyboardArrowRightIcon />

                </div>
            }
                <div id="importPdfCard" style={{ display: "none" }} >
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{ width: "30% !important" }}>
                    <FormControlLabel value="input" control={<Radio />} label="Input" style={{ width: "30% !important" }} />
                    <FormControlLabel value="pdfUp" control={<Radio />} label="File Uploading" style={{ width: "30% !important" }} />
                </RadioGroup>
       
            </div> 
        </>
    )
}

export default connect(
    (state) => {
        return {
            allContact: state.managerComponent.managerComponent.allContact,
            quote: state.quote.quote,
            quote2: state.quote,
            managerComponent: state.managerComponent.managerComponent,
        }
    },
    (dispatch) => {
        return {
            changeCardStep: (e) => dispatch(actions.setCardStep(e)),
            changeLastUpdateQuote: (e) => dispatch(actions.setLastUpdateQuote(e)),
            changeDate: () => dispatch(actions.setContactDetailsDate()),
            changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),
            changeFrom: (e) => dispatch(actions.setContactDetailsFrom(e)),
            changeContactDetailsDateYN: () => dispatch(actions.setContactDetailsDateYN()),
            changeContactDetailsToYN: () => dispatch(actions.setContactDetailsToYN()),
            changeContactDetailsFromYN: () => dispatch(actions.setContactDetailsFromYN()),
            changeCompanyDetailsCallYN: () => dispatch(actions.setCompanyDetailsCallYN()),
            changeCompanyDetailsMailYN: () => dispatch(actions.setCompanyDetailsMailYN()),
            changeCompanyDetailsWebsiteYN: () => dispatch(actions.setCompanyDetailsWebsiteYN()),
            changeCompanyDetailsCall: (companyDetails) => dispatch(actions.setCompanyDetailsCall(companyDetails)),
            changeCompanyDetailsMail2: (companyDetails) => dispatch(actions.setCompanyDetailsMail2(companyDetails)),
            changeCompanyDetailsWebsite: (companyDetails) => dispatch(actions.setCompanyDetailsWebsite(companyDetails)),
            changeQuillYOrN: () => dispatch(actions.setQuillYOrN()),
            setFormatDate: (e) => dispatch(actions.setFormatDate(e)),
        }
    }
)(withStyles(useStyles)(Production))
