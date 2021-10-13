import { height, width } from '@material-ui/system';
import React, { useState, useEffect } from 'react';
import arrowBack from './assets/arrowBack.svg'
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import { createBrowserHistory } from 'history'
import overlayFactory from 'react-bootstrap-table2-overlay';
import $ from 'jquery';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import './mobailPaperList.css'
import MultiSelectInput from './multiSelectInput/MultiSelectInput';
import deleteD from './assets/deleteDropdown.svg';
import edit from './assets/editDropdown.svg';
import arrowDown from './assets/arrowDown.svg';
import rectangle from './assets/Rectangle.svg';
import plus from './assets/plusw.svg';
import link from './assets/linkDropdown.svg';
import exportD from './assets/exportDropdown.svg';
import detailsSvg from './assets/detailsDropdown.svg';
import copy from './assets/copyDropdown.svg';
import points from './assets/Group 22343.png';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const { SearchBar } = Search;
const historyRefresh = createBrowserHistory({ forceRefresh: true })


export const getEmailsContacts = (contacts) => {
    let emailsContacts = [];
    if (contacts && contacts.length) {
        contacts.map((contact) => {
            emailsContacts.push({ value: contact.email, label: contact.email })
        })
    }
    return emailsContacts;
}

const mapStateToProps = (state) => {
    return {

        allquote: state.quote.allQuote,
        quote: state.quote.quote,
        quote2: state.quote,
        allContact: state.managerComponent.managerComponent.allContact,

    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllQuote: (a) => dispatch(actions.getallQuote()),
    changeNameQ: (email) => dispatch(actions.setNameQ(email)),
    getQuote: (a) => dispatch(actions.getQuote()),
    currentName: (a) => dispatch(actions.setCurrentName(a)),
    clearQuote: () => dispatch(actions.setClearQuote()),
    editQuote: (a) => dispatch(actions.editQuote(a)),
    createQuote: (a) => dispatch(actions.createQuote()),
    aaa: (a) => dispatch(actions.numViews()),    
    setClearQuote: (name) => dispatch(actions.setClearQuote(name)),
    changePaperName: (a) => dispatch(actions.paperName()),
    approachedToServerYesOrNo: () => dispatch(actions.setApproachedToServerYesOrNo()),
    massageToShowSuccesOrError: (e) => dispatch(actions.setMassageToShowSuccesOrError(e)),
    massageSuccessOrError: (e) => dispatch(actions.setMassageSuccessOrError(e)),
    massageSuccessOrOops: (e) => dispatch(actions.setMassageSuccessOrOops(e)),
    changeExportYN: (e) => dispatch(actions.setExportYN(e)),
    duplicate: (a) => dispatch(actions.duplicate(a)),
    updateQuote: (currentContact) => dispatch(actions.editQuote4(currentContact)),
    setAlert2Statuse: (a) => dispatch(actions.setAlert2Statuse(a)),
    setQuote: (a) => dispatch(actions.setQuote(a)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function MobailPaperList(props) {

    let url = window.location;
    var userName = (url.pathname.split('/')[1]);
    const isIframe = new URLSearchParams(url.search).get('iframe') ? "iframe=true&" : ""
    let { history } = props;
    history = createBrowserHistory({ forceRefresh: true })
    let event = null;
    const [paperName, setPaperName1] = useState("");
    const [exportYN, setExportYorN] = useState(false);
    const [propsTemp, setPropsTemp] = useState({});
    const [emailList, setEmailList] = useState({});

    let count = 1;
    var a;
    const historyPush = (url) => {
        history.push(`/${userName}/${url}`)
    }

    const mydata = [];
    const options = {
        sizePerPage: 10,
    };
    const columns = [
        {
            events: {
                onDoubleClick: (e) => {
                    e.currentTarget.contentEditable = 'true';
                },
                onClick: (e) => {
                    e.stopPropagation();
                },
                onBlur: async (e) => {
                    if (props.quote2.currentName != e.currentTarget.innerText) {
                        await props.changeNameQ(e.currentTarget.innerText);
                        await props.changePaperName();
                        await props.getAllQuote();
                    }
                },
            },

            dataField: "name",
            title: "name",
            text: "name",
            // align: "center",
            headerAlign: "center",
            sort: true,
            style: { width: '80%', verticalAlign: "middle", height: mydata.length !== count ? "9vh" : "15vh" },
            formatter: s => s.length > 20 ? s.substring(0, 20) + "..." : s,
            headerStyle: {
                backgroundColor: '#F5F5FA', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh'
            },


        },
        {
            events: {

                onClick: (e) => {
                    e.stopPropagation();
                },

            },
            dataField: "link",
            text: "N",
            align: "center",
            csvExport: false,
            headerAlign: "center",
            style: { width: '9% !important' },
            headerStyle: {
                backgroundColor: '#F5F5FA', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh'

            },
            sort: true,

            formatter: (c, e) => {
                return (
                    <>
                        <i style={{ float: "right", paddingTop: "2vh" }}><Menu direction={"left"} style={{ width: "5vw", margin: "1vh" }} menuButton={<MenuButton><img src={points}></img></MenuButton>}>

                            <MenuItem onClick={() => deleteQuote(e)}><img src={deleteD} style={{ paddingRight: "3vw", font: "icon" }}></img>Delete</MenuItem>
                            <MenuItem onClick={() => duplicate(e)}><img src={copy} style={{ paddingRight: "3vw" }}></img> Copy </MenuItem>
                            <MenuItem onClick={() => moveToEdit(e)}><img src={edit} style={{ paddingRight: "3vw" }}></img> Edit  </MenuItem>
                            <MenuItem onClick={() => copyUrl(e)}><img src={link} style={{ paddingRight: "3vw" }} ></img> Copy link</MenuItem>
                            <MenuItem onClick={() => exportBtn(e)}><img src={exportD} style={{ paddingRight: "3vw", fontStyle: "normal" }}></img>   Export</MenuItem>
                            <MenuItem onClick={() => details(e)}><img src={detailsSvg} style={{ paddingRight: "3vw" }}></img>   Details</MenuItem>
                        </Menu> </i>

                    </>
                )
            }
        },

    ];


    function details(e) {
        console.log(e);
        setPropsTemp(e);
        $(".title").css("display", "none")
        $(".details").css("display", "block")
        $(".MobailTableList").css("display", "none")
        $(".daetails_Mobail").css("display", "block")
        setEmailList(propsTemp.emailsToSend);
    }
    function exportBtn(ev) {

        setPaperName1(ev.name)
        setExportYorN(true)
        $(".title").css("display", "none")
        $(".exportTitle").css("display", "block")
        $(".MobailTableList").css("display", "none")
        $(".sendEmailFromList_Mobail").css("display", "block")


    }
    const showEmailList = (e) =>{
        $(".arrowRight").css("display", "none")
        $(".arrowDown").css("display", "block")
         $(".emailList").css("display", "block")

    }
    const hideEmailList = (e) =>{
        $(".arrowRight").css("display", "block")
        $(".arrowDown").css("display", "none")
         $(".emailList").css("display", "none")

    }
    const duplicate = async (e) => {
        await props.duplicate(e._id);
        await props.getAllQuote();
    }

    const moveToEdit = (e) => {
        userName = (url.pathname.split('/')[2]);
        history.push(`/admin/${userName}/${e.name}`)

    }

    const deleteQuote = (e) => {
        props.updateQuote(e._id);
        props.setAlert2Statuse(true);
    }

    const copyUrl = (e) => {
        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = window.location.href + `/${e.name}`;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    const rowEvents = {

        onClick: (e, c) => {
            userName = (url.pathname.split('/')[2]);
            history.push(`/admin/${userName}/${c}`)
        },
        onMouseEnter: (e, row, rowIndex) => {
            // showIcons(rowIndex)
        }

    };

    const rowClasses = (row, rowIndex) => {
        return '';
    };
    const createDefaultPaper = () => {
        if (props.quote._id)
            props.clearQuote()
        var parser = new DOMParser();
        var doc = parser.parseFromString(props.quote.quillStyle, 'text/html');
        props.createQuote();
        userName = (url.pathname.split('/')[2]);
    };
    const backToListPapers = () => {
        let url = window.location;
        var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
        historyRefresh.push(`/admin/${userName}`);
    }
    return (
        <>
            <div className="container" id="MobailPaperList_container" >
                <div className="MobailPaperList_header" >
                    <label className=" title" style={{ color: 'white', fontSize: 'large', fontWeight: "600", paddingTop: "4vh", position: "fixed", right: "38vw" }}>
                        Paper's List</label>

                    <div className=" exportTitle" style={{ display: "none" }}>
                        <div className="d-flex justify-content-between hd" style={{ paddingTop: "4vh !important" }}>
                            <bottun className=" titleb" onClick={() => backToListPapers()} style={{ paddingLeft: "5vw", width: "10vw !important" }}><img src={arrowBack}></img></bottun>
                            <label className=" lablet" > Select contact to export </label>
                        </div>
                    </div>

                    <div className=" details" style={{ display: "none" }}>
                        <div className="d-flex justify-content-between hd" style={{ paddingTop: "4vh !important" }}>
                            <bottun className=" titleb" onClick={() => backToListPapers()} style={{ paddingLeft: "5vw", width: "10vw !important" }}><img src={arrowBack}></img></bottun>
                            <label className=" lablet" > Some recipients </label>
                        </div>
                    </div>

                </div>
                <div className="MobailTableList" >
                    <ToolkitProvider
                        style={{ "marginTop": "0px" }}
                        keyField="id"
                        data={props ? props.allquote ? props.allquote.quotes || mydata : mydata : mydata}
                        columns={columns}
                        search >
                        {
                            props => (
                                <div className="mobailPaperList_div">
                                    <div className="d-flex justify-content-center" style={{ paddingTop: "0vw", zIndex: "1" }}>
                                        <div className="mt-2 px-0 d-flex justify-content-between"
                                            style={{ zIndex: "1", position: "fixed", top: "10vh", left: "6vw" }}>
                                            <div className="fas fa-search searchIcon " >  </div>
                                            <SearchBar {...props.searchProps}
                                                className="searhBtn"
                                                placeholder="Search"
                                                color="#BDBDC9"
                                                style={{ width: "89vw", color: "gray", minWidth: "100%", paddingLeft: "2.375rem", border: '0', backgroundColor: '#FFFFFF', boxShadow: "0px 1px 6px #00000026" }} >

                                            </SearchBar>
                                        </div></div>
                                    <div style={{ height: "inherit", top: "20vh!important", position: "fixed", width: " 95%" }}>

                                        <BootstrapTable
                                            loading={false}  //only loading is true, react-bootstrap-table will render overlay
                                            overlay={overlayFactory()}
                                            rowStyle={{ overfolw: "hidden" }}
                                            bodyStyle={{
                                                tableLayout: "fixed !important",
                                                borderBottomColor: 'currentColor',
                                            }}
                                            //noDataIndication={indication}
                                            bordered={false}
                                            classes="table-hover contactTable mt-2"
                                            rowClasses={rowClasses}
                                            rowEvents={rowEvents}
                                            //pagination={paginationFactory(options)}
                                            {...props.baseProps} />
                                        <div className="button " id="plusMobail" onClick={createDefaultPaper} ><lable className="plusLable" >+</lable></div>

                                    </div>
                                </div>

                            )
                        }

                    </ToolkitProvider>
                </div>

                <div className="sendEmailFromList_Mobail col" style={{ width: exportYN ? "100%" : "0" }}>
                    {props.allContact &&
                        <MultiSelectInput options={getEmailsContacts(props.allContact)} style={{ backgroundColor: '#F6F6FA', border: 'aliceblue', zIndex: "10", width: '20vw !important', zIndex: "10" }} paperName={paperName}></MultiSelectInput>
                    }
                    <div className="d-flex justify-content-center align-items-center" style={{width:"35vw" ,bottom: "10vh !important", left:"35vw",position: "fixed",bottom:"8vh"}}>
                        <button className="btn w-100 bkgstyle sendMobail"
                            onClick={() => { props.changeExportYN("send") }}>Send</button>
                    </div>
                </div>
                {propsTemp ?
                    <div className="daetails_Mobail" style={{ display: "none", height: "86vh" }}>
                        <div classNmae="grid-container" style={{ padding: "5vh", height: "86vh" }}>
                            <div className="grid detail" style={{ padding: "3vh 0vh !important" }}><lable className="lableDetails" >Name:</lable> <lable className="lableProps">{propsTemp.name} </lable></div>
                            <div className="grid detail" style={{ padding: "2vh !important" }}><lable className="lableDetails">Link:</lable><a  className="lableProps" href={window.location.href + `/${propsTemp.name}`} style={{ color: "black" }}>{window.location.href + `/${propsTemp.name}`}</a></div>
                            <div className="grid detail" style={{ padding: "2vh !important" }}><lable className="lableDetails">Production Date: </lable><lable  className="lableProps">{propsTemp.createdDate}</lable></div>
                                <div className="d-flex justify-content-left grid detail" style={{ padding: "2vh !important" }}>
                                    <lable className="lableDetails">Contact: </lable>
                                    <lable className="lableContant">{propsTemp.emailsToSendIndexServer} Content </lable>
                                    <div className="arrowRight" style={{  padding: "0.3vh 0.5vh" }} onClick={() => showEmailList()}><img src={arrowDown} style={{ paddingRight: "3vw" }}></img></div>
                                    <div className="arrowDown" style={{  padding: "1vh 0.5vh" ,transform: "rotate(90deg)",display:"none"}} onClick={() => hideEmailList()}><img src={arrowDown} style={{ paddingRight: "3vw" }}></img></div>
                                </div>
                            

                            <span className="emailList" style={{display:"none"}}>
                                <ul class="navbar-nav mr-auto">
                                    {console.log("kjikj", propsTemp.emailsToSend)}
                                    {propsTemp.emailsToSend ? propsTemp.emailsToSend.map((arrayRecipients) => (
                                        <>
                                            <li className="d-flex justify-content-between" style={{ padding:" 2vh 0vh",margin: "0" }}>
                                                <lable>{arrayRecipients.email}</lable>
                                                <span>

                                                    {arrayRecipients ? arrayRecipients.isSigned ?
                                                        <div><img id="rectangle" src={rectangle} ></img><lable style={{ color: "#DB0E65", position: "fixed", left: "68vw" }}>Sign</lable></div>
                                                        : <div><img id="rectangle" src={rectangle} ></img><lable style={{ color: "#F70000", position: "fixed", left: "65vw" }}>Didn't sign</lable></div>
                                                        : ""}
                                                </span>
                                            </li>
                                        </>

                                    ))
                                        : <></>}

                                </ul>
                            </span>
                        </div>
                    </div>

                    : <></>}
            </div>
        </>
    )
})