import { actions } from '../Redux/Action';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Lottie from "react-lottie";
import '@szhsin/react-menu/dist/index.css';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { createBrowserHistory } from 'history'
import overlayFactory from 'react-bootstrap-table2-overlay';
import './listPapers.css'
import Massage from './massage';
import MobaiPaperlList from './mobailPaperList';
import $ from 'jquery';
import MultiSelectInput from './multiSelectInput/MultiSelectInput';
import exportIcon from './assets/exportIcon.svg';
import deleteIcon from './assets/deleteIcon.svg';
import duplicateIcon from './assets/duplicateIcon.svg';
import loadings from './assets/Papers.json';
import Alert2 from './alert2'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const { SearchBar } = Search;
const mapStateToProps = (state) => {
    return {
        allquote: state.quote.allQuote,
        quote2: state.quote,
        quote: state.quote.quote,
        allContact: state.managerComponent.managerComponent.allContact,
    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllQuote: (a) => dispatch(actions.getallQuote()),
    changeNameQ: (email) => dispatch(actions.setNameQ(email)),
    currentName: (a) => dispatch(actions.setCurrentName(a)),
    clearQuote: () => dispatch(actions.setClearQuote()),
    editQuote: (a) => dispatch(actions.editQuote()),
    createQuote: (a) => dispatch(actions.createQuote()),
    aaa: (a) => dispatch(actions.numViews()),
    setClearQuote: (name) => dispatch(actions.setClearQuote(name)),
    changePaperName: (a) => dispatch(actions.paperName()),
    changeQuillText: (q) => dispatch(actions.setQuillText(q)),
    approachedToServerYesOrNo: () => dispatch(actions.setApproachedToServerYesOrNo()),
    massageToShowSuccesOrError: (e) => dispatch(actions.setMassageToShowSuccesOrError(e)),
    massageSuccessOrError: (e) => dispatch(actions.setMassageSuccessOrError(e)),
    massageSuccessOrOops: (e) => dispatch(actions.setMassageSuccessOrOops(e)),
    changeExportYN: (e) => dispatch(actions.setExportYN(e)),
    duplicate: (a) => dispatch({ type: 'DUPLICATE', action: a }),
    updateQuote: (currentContact) => dispatch(actions.editQuote4(currentContact)),
    setAlert2Statuse: (a) => dispatch(actions.setAlert2Statuse(a)),
    changeQuillStyle: (q) => dispatch(actions.setQuillStyle(q)),
})


export const getEmailsContacts = (contacts) => {
    let emailsContacts = [];
    if (contacts && contacts.length) {
        contacts.map((contact) => {
            emailsContacts.push({ value: contact.email, label: contact.email })
        })
    }
    return emailsContacts;
}

export default connect(mapStateToProps, mapDispatchToProps)(function ListPapers(props) {
    useEffect(async () => {

        // לא למחוק בשביל ההדר של תהילה
        // var paperName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[3]) : (url.pathname.split('/')[2]);
        // if (paperName === "add") {
        //     await props.getAllQuote()
        //     await createDefaultPaper();
        // }
        // await props.clearQuote()
        await props.getAllQuote()
        //dont delete - default paper!
        // if (!props.allquote)
        //     noPapers()
        setAaa(true);

    }, []);



    const defaultAnimationOptions = {
        loop: true,
        autoplay: true,
        animationData: loadings,
        // rendererSettings: {
        //   preserveAspectRatio: "xMidYMid slice",
        // },
    };
    const arrayOfRowes = React.useRef([]);
    const [isHover, setIsHover] = useState(true);
    const [aaa, setAaa] = useState(true);
    const [paperName, setPaperName1] = useState("");
    const [exportYN, setExportYorN] = useState(false);


    const statusClrs = { 'Open': 'green', 'Deal': '#d93025', 'In Progress': '#FFA756', 'New': '#00B69B', 'Connected': '#6226EF', 'Unqualified': '#EF3826' }
    const statusLeft = { 'Open': '22px', 'Deal': '20px', 'In Progress': '17px', 'New': '47px', 'Connected': '27px', 'Unqualified': '25px' }
    let url = window.location;
    var userName = (url.pathname.split('/')[1]);
    const isIframe = new URLSearchParams(url.search).get('iframe') ? "iframe=true&" : ""
    let { history } = props;
    history = createBrowserHistory({ forceRefresh: true })



    const handleClick = () => {

        var parser = new DOMParser();
        var doc = parser.parseFromString(props.quote.quillStyle, 'text/html');
        if (!doc.body.innerText) {
            props.createQuote();
        }
        // e.preventDefault();
        // onPageChange(page);
    };
    const changeArrow = (e, numRecipients) => {
        if (numRecipients > 0) {
            e.target.style.display = "none";
            let t = $(e.target).siblings()[1];
            if (t) {
                $(t).show();
                $(e.target).parent().siblings().first().slideToggle('fast')
            }
        }
    }

    // const refCallback = (item) => {
    //     item.onclick = function (item) {
    //         $(item).removeClass("navbar-toggler-icon");
    //         $(item).addClass("navbar-toggler-iconn");

    //       }

    // }

    // const refCallback = (item) => {

    //     $(item).removeClass("crudOposite");
    //     $(item).addClass("crudOposite");
    // ‏
    // };

    const pageButtonRenderer = ({ page, active, disable, title, onPageChange }) => {
        const handleClick = (e) => {
            e.preventDefault();
            onPageChange(page);
        };
        const activeStyle = {};
        if (active) {
            activeStyle.backgroundColor = 'gray';
            activeStyle.color = 'white';
        } else {
            activeStyle.backgroundColor = 'white';
            activeStyle.color = 'black';
        }
        if (typeof page === 'string') {
            activeStyle.backgroundColor = 'white';
            activeStyle.color = 'black';
        }
        return (
            <li className="page-item mb-0 px-1 " >
                <button className="btn btn-outline-secondary" onClick={(e) => handleClick(e)} style={activeStyle}>{page}</button>
            </li>
        );
    };
    //   pagination

    let sizePerPageListTemp = [];
    if (props.allquote.quotes) {
        if (props.allquote.quotes.length > 5)//הערה חשובה מאוד - לא מציג את התנאי הראשון כאשר יש רק עמודה אחת בטבלה
            sizePerPageListTemp = [{ text: '5', value: 5 }];
        if (props.allquote.quotes.length > 10)
            sizePerPageListTemp.push({ text: '10', value: 10 },);
        if (props.allquote.quotes.length > 20)
            sizePerPageListTemp.push({ text: '25', value: 25 },);
        if (props.allquote.quotes.length > 30)
            sizePerPageListTemp.push({ text: '30', value: 30 },);
        if (props.allquote.quotes.length > 50)
            sizePerPageListTemp.push({ text: '50', value: 50 },);
    }
    const options = {
        sizePerPage: 5,
        sizePerPageList: sizePerPageListTemp,
        pageButtonRenderer
    };






    const columns = [
        {
            events: {
                /////////////////able to change the name of the paper
                // onDoubleClick: (e) => {
                //     e.currentTarget.contentEditable = 'true';
                // },
                // onClick: (e) => {
                //     e.stopPropagation();
                // },
                /////////////////able to change the name of the paper
                // onBlur: async (e) => {
                //     if (props.quote2.currentName != e.currentTarget.innerText) {
                //         await props.changeNameQ(e.currentTarget.innerText);
                //         await props.changePaperName();
                //         await props.getAllQuote();
                //     }

                // },
            },
            dataField: "name",
            title: "name",
            text: "NAME",
            sort: true,
            style: { width: '20%', paddingTop: '5vh!important' },
            formatter: s => s.length > 40 ? s.substring(0, 40) + "..." : s,
            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh', color: "#8D8DAE"
            },

        },
        {

            dataField: "createdDate",
            // לשאול
            formatter:

                ((date) => {
                    var date = date.replace("T", " ").substr(0, 16);
                    var year = date.substr(0, 4)
                    var month = date.substr(5, 2)
                    var day = date.substr(8, 2)
                    var time = date.substr(11, 5)

                    var finishDate = day + "." + month + "." + year + ', ' + time;

                    return (finishDate)

                }),



            style: {
                width: '13% !important',
                overfolw: "hidden",
                paddingTop: '2.7vh!important'
            },
            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh', color: "#8D8DAE", color: "#8D8DAE"
            },
            sort: true,
            text: "PRODUCTION DATE",
        },
        {

            dataField: "lastUpdateQuote",
            // align: "center",
            // headerAlign: "center",
            style: { width: '9% !important', overfolw: "inherit", padding: '3vh!important' },
            formatter: s => s ? s.substr(0, 20) : "",
            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh', color: "#8D8DAE"
            },
            text: "LAST OPENING DATE"
        },

        {
            events: {

                onClick: (e) => {
                    e.stopPropagation();
                },

            },
            dataField: "emailsToSend",
            // align: "center",
            // headerAlign: "center",
            style: { top: '0', paddingTop: '2.7vh!important' },

            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh', zIndex: "300", color: "#8D8DAE"
            },
            text: "SOME RECIPIENTS",
            sort: true,
            formatter: (c, id) => {

                return (
                    <span>
                        <div className="d-flex justify-content-between">
                            <span>
                                <a>{c.length}</a>
                            </span>

                            <KeyboardArrowRightIcon style={{ width: "3vh !important" }} onClick={(e) => changeArrow(e, c.length)} type="button" data-toggle="collapse" data-target={"#t" + id._id}
                                aria-controls={"t" + id._id} aria-expanded="false" aria-label="Toggle navigation">
                            </KeyboardArrowRightIcon>
                            <KeyboardArrowDownIcon style={{ display: "none", width: "3vh !important" }} onClick={(e) => changeArrow(e, c.length)} type="button" data-toggle="collapse" data-target={"#t" + id._id}
                                aria-controls={"t" + id._id} aria-expanded="false" aria-label="Toggle navigation">
                            </KeyboardArrowDownIcon>

                        </div>
                        <span style={{ display: "none" }}>
                            <ul class="navbar-nav mr-auto">
                                {c.map((arrayRecipients) => (
                                    <>
                                        <li className="d-flex justify-content-between" >
                                            <button type="text" class="btn" style={{ direction: "rtl" }}>{arrayRecipients ? arrayRecipients.email : ""}</button>
                                            <span>
                                                {arrayRecipients ? arrayRecipients.isSigned ?
                                                    <button type="text"
                                                        class="btn isSignT">Sign</button>
                                                    : <button type="text"
                                                        class="btn isSignF" >Didn't Sign</button>
                                                    : ""}
                                            </span>
                                        </li>
                                    </>

                                ))
                                }
                            </ul>
                        </span>
                    </span>

                )
            },

        },

        {

            dataField: "numOfViews",
            text: "NUMBER OF VIEWS",
            // align: "center",
            csvExport: false,
            // headerAlign: "center",
            style: { width: '4% !important', height: '8vh', paddingTop: '2.7vh!important', textAlign: "center" },
            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '4vh', padding: '2vh', color: "#8D8DAE", textAlign: "center"
            },
            sort: true,
        },
        {
            events: {

                onClick: (e) => {
                    e.stopPropagation();
                },

            },

            dataField: "emailsToSend",
            // dataField: "_id",

            style: { width: '0.6% !important', paddingTop: '2.7vh!important', textAlign: "center" },
            // align: "center",
            // headerAlign: "center",
            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh', color: "#8D8DAE", textAlign: "center"
            },
            // לשאול איך מראים הכל*

            formatter: (e, id) => {
                if (e) {
                    let count = 0;
                    e.forEach(e => {
                        if (e) {
                            if (e.isSigned) {
                                count++
                            }
                        }

                    })
                    return (
                        count
                    )
                }
            },
            sort: true,
            text: "NUMBER OF SIGNATURE",
        },
        {


            events: {

                onClick: (e) => {
                    e.stopPropagation();
                },

            },
            dataField: "link",
            text: "",
            // align: "center",
            csvExport: false,
            // headerAlign: "center",
            style: { width: '7% !important' },
            headerStyle: {
                backgroundColor: '#F8F8F8', fontSize: '1.4vh', position: 'sticky',
                top: '0', height: '5vh', padding: '2vh', color: "#8D8DAE"

            },
            sort: true,

            formatter: (c, e) => {
                return (
                    <span>
                        {/* <button className="btn bkg" style={{ borderRadius: "4px", position: "fixed", bottom: "4vh", color: "#FFFFFF", right: "5.7vw", width: "10%", fontSize: "1vw", marginRight: "-2vw" }}>export</button> */}
                        <i onClick={() => exportBtn(e)} style={{ margin: "1vh" }}><img src={exportIcon}></img></i>
                        <i onClick={() => deleteQuote(e)} style={{ margin: "1vh" }}><img src={deleteIcon}></img></i>
                        <i onClick={() => duplicate(e)} style={{ margin: "1vh" }}><img src={duplicateIcon}></img></i>
                    </span>
                )
            }
        },

    ];



    function exportBtn(ev) {

        setPaperName1(ev.name)
        setExportYorN(true)
        // $(".containerDivList").css("width", "70vw")
        $(".sendEmailFromList").css("display", "block")
        // props.approachedToServerYesOrNo();
        // props.massageSuccessOrError(true);
        // ev.stopPropagation();
        // ev.preventDefault();
    }
    const duplicate = async (e) => {
        await props.duplicate(e._id);
        await props.getAllQuote();
    }

    const deleteQuote = (e) => {

        // let qoute = props.allquote.quotes.find(x => x.name = e.currentTarget.parentElement.parentElement.firstChild.innerText)

        // const paper_name = e.currentTarget.parentElement.parentElement.firstChild.innerText;
        // let paper = 0;
        // for (let index = 0; index < props.allquote.quotes.length; index++) {
        //     if (props.allquote.quotes) {
        //         if (props.allquote.quotes[index]) {
        //             if (props.allquote.quotes[index].name) {
        //                 if (props.allquote.quotes[index].name == paper_name)
        //                     paper = props.allquote.quotes[index]
        //             }
        //         }
        //     }
        // }
        // props.updateQuote(paper);
        props.updateQuote(e._id);
        props.setAlert2Statuse(true);

    }

    const noPapers = async () => {
        $(".container-fixed-width").removeClass("cursorP")
        await props.changeQuillStyle("<p>כאן תוכלו לחתום חוזים בצורה קלה ומהירות באמצעות טכנולוגיות מתקדמות ביותר!</p>")
        await props.changeNameQ("Papers")
        await props.createQuote();

    }

    const showIcons = (rowIndex) => {
        setIsHover(true)
        arrayOfRowes["current"][rowIndex].childNodes[0].childNodes[0].style.color = 'black'
    }
    const hideIcons = (rowIndex) => {
        setIsHover(true)

        arrayOfRowes["current"][rowIndex].childNodes[0].childNodes[0].style.color = 'transparent'
    }
    // PaperName
    const rowEvents = {
        onClick: (e, c) => {
            userName = (url.pathname.split('/')[2]);
            history.push(`/admin/${userName}/${c.name}`)
        },
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
    const AddDifaultPaper = async () => {
        await createDefaultPaper()
        await props.changePaperName("Papers")
        await props.changeQuillStyle("<p>כאן תוכלו לחתום חוזים בצורה קלה ומהירות באמצעות טכנולוגיות מתקדמות ביותר!</p>")
    };
    const MyExportCSV = () => {
        return (
            // <div className="row d-flex mt-1 btnDiv">
            <div className="col-2 " style={{ "justify-content": "end" }} >
                <button className="btn w-100  "
                    style={{
                        backgroundColor: "#DB0E65",
                        width: "80%",
                        color: "white",
                        fontWeight: "bold"
                    }}
                    // onClick={handleClick}>Download to CSV</button>
                    onClick={createDefaultPaper}>New Paper +</button>

            </div>
            // </div>
        );
    };
    const mydata = [];

    const indication = () => {
        return (

            // props ?          
            props.quote2.approachedToServerYesOrNo || props?.allquote ?
                "oopsss...   no papers found 😞"
                : <Lottie options={defaultAnimationOptions} height={200} width={200} />
            // props.quote2.approachedToServerYesOrNo || props?.allquote ? noPapers()
            //     : <></>
            //     :
            // <div className="indicationAnimate">
            //     {/* <img src={animate} style={{ width: '30%' }}></img> */}
            //     <Lottie options={defaultAnimationOptions} height={200} width={200} />
            // </div >
            //   

            // <Lottie> options={defaultAnimationOptions} height={300} width={300} </Lottie>
        )


        // return (

        //     props ? props.allquote? "oopsss...   no papers found 😞" :
        //         <div className="indicationAnimate d-flex justify-content-center align-items-center" >
        //             {/* <img src={animate} style={{ width: '30%' }}></img> */}
        //             <Lottie options={defaultAnimationOptions} height={300} width={300} />

        //         </div>
        //         :
        //         <div className="indicationAnimate">
        //             {/* <img src={animate} style={{ width: '30%' }}></img> */}
        //             <Lottie options={defaultAnimationOptions} height={300} width={300} />

        //         </div >
        // )
        // return (

        //     props ? props.allquote? "oopsss...   no papers found 😞" :
        //         <div className="indicationAnimate d-flex justify-content-center align-items-center" >
        //             <img src={animate} style={{ width: '30%' }}></img>
        //         </div>
        //         :
        //         <div className="indicationAnimate">
        //             <img src={animate} style={{ width: '30%' }}></img>
        //         </div >
        // )
    }
    return (
        <>
            <Massage image={"rrr"} text={"sss"} ></Massage>
            {props.quote2.alert2Statuse ?
                <Alert2></Alert2> : ""}
            <div className="d-none d-sm-block">

                <div className={"containerDivList "} style={{
                    marginTop: "100vh-5vh-5px", float: "left", width: exportYN ? "80vw" : "98vw",    /* margin-top: 6vh; */
                    paddingBottom: '85vh!important',
                    marginLeft: '1vw',
                    marginBottom: '2.5vh',
                    marginRight: '1vw',
                    marginTop: '2.5vh',
                }}>
                    <div class="animateSendEmail d-flex justify-content-center align-items-center w-100 ">{props.quote2.approachedToServerYesOrNo ?
                        <Lottie options={defaultAnimationOptions} height={200} width={200} />
                        : null
                    }
                    </div>
                    <div className="d-none d-sm-block">
                        <div class="d-flex justify-content-start align-items-center" style={{
                            fontWeight: 'bold',
                            fontSize: 'x-large',
                            marginLeft: "-0.9vw"
                        }}>
                            Paper's List
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center " >
                        <div className="col-12 container-fixed-width px-0 d-none d-sm-block cursorP"
                            style={{ "z-index": 0 }}>
                            <ToolkitProvider
                                style={{ "marginTop": "0px" }}
                                keyField="id"
                                data={props ? props.allquote ? props.allquote.quotes || mydata : mydata : mydata}
                                columns={columns}
                                search >
                                {
                                    props => (
                                        <div>
                                            <div className="d-flex justify-content-between"
                                                style={{ marginBottom: "0" }}>
                                                <div className="fas fa-search searchIcon"  >  </div>
                                                <SearchBar {...props.searchProps}
                                                    className="searhBtn"
                                                    placeholder="search..."
                                                    style={{
                                                        "width": "25vw",
                                                        "color": "gray",
                                                        "min-width": "100%",
                                                        "padding-left": "2.375rem",
                                                        'border': '0',
                                                        'backgroundColor': '#FBFBFD',
                                                    }} >
                                                </SearchBar>
                                                <MyExportCSV
                                                    {...props.csvProps}>Export CSV</MyExportCSV>
                                                {/* {<ClearSearchButton  {...props.searchProps} />} */}
                                            </div>

                                            <div>
                                                <BootstrapTable
                                                    loading={false}  //only loading is true, react-bootstrap-table will render overlay
                                                    overlay={overlayFactory()}
                                                    rowStyle={{ overfolw: "hidden" }}
                                                    bodyStyle={{
                                                        tableLayout: "fixed !important",
                                                        borderBottomColor: 'currentColor',
                                                    }}
                                                    noDataIndication={indication}
                                                    bordered={false}
                                                    classes="table-hover contactTable mt-2"
                                                    rowClasses={rowClasses}
                                                    rowEvents={rowEvents}
                                                    pagination={paginationFactory(options)}

                                                    {...props.baseProps} />
                                                {console.log(JSON.stringify(props))}
                                            </div>
                                        </div>
                                    )
                                }
                            </ToolkitProvider>

                        </div >
                    </div>
                </div >

                <div className="sendEmailFromList col" style={{ width: exportYN ? "15%" : "0", float: "right", display: "none", marginTop: "10vh", marginRight: "1.2%", margin: "2.5vh 1vh" }}>
                    <div className="d-flex justify-content-end align-items-center">
                        <button onClick={() => { setExportYorN(false); $(".sendEmailFromList").css("display", "none") }} style={{ background: "white", justifyContent: 'flex-end !important' }}
                        >x</button>
                    </div>
                    {props.allContact &&
                        <MultiSelectInput options={getEmailsContacts(props.allContact)} style={{ backgroundColor: '#F6F6FA', border: 'aliceblue', zIndex: "10", width: '20vw !important', zIndex: "10" }} paperName={paperName}></MultiSelectInput>
                    }
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn  bkgstyle sendd"
                            style={{ border: '1px solid #DB0E65', fontWeight: 'bold', position: "fixed", width: "10vw !important" }}
                            // onClick={handleClick}>Download to CSV</button>
                            onClick={() => { props.changeExportYN("send") }}>Send</button>
                    </div>
                </div>

            </div >

            <div className=" d-block d-sm-none">
                <MobaiPaperlList></MobaiPaperlList>
            </div>
        </>
    )
})
