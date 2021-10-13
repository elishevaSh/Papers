import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import '../Components/newOnePage.css';
import $ from 'jquery';
import loading from './assets/Papers.json';
import keys from '../config/env/keys'
import Lottie from "react-lottie";
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import './PdfContainer.css'

const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        quote2: state.quote,
        managerComponent: state.managerComponent.managerComponent,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changedigitalSignatureConfirmation: (e) => dispatch(actions.setDigitalSignatureConfirmation(e)),
    approachedToServerYesOrNo: () => dispatch(actions.setApproachedToServerYesOrNo()),
    massageToShowSuccesOrError: (e) => dispatch(actions.setMassageToShowSuccesOrError(e)),
    massageSuccessOrError: (e) => dispatch(actions.setMassageSuccessOrError(e)),
    massageSuccessOrOops: (e) => dispatch(actions.setMassageSuccessOrOops(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
    const bodyRef = React.createRef();
    const emailRef = React.createRef();
     const TokenToString = document.cookie && document.cookie.includes(keys.JWT) ? document.cookie.split(";")
    .filter(s => s.includes(keys.JWT))[0].split("=").pop() : null;
    let url = window.location;
    const paperName = (url.pathname.split('/')[2]);
    const userName = (url.pathname.split('/')[1]);
    const dataURLtoFile = (dataurl, filename) => {
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
    const createPdf = () => {
        props.approachedToServerYesOrNo();
        const html = bodyRef.current;
        const email = emailRef.current.value;
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
                const file = dataURLtoFile(dataUri, "paper.pdf")
                console.log(file)
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
                        return fetch(keys.API_URL_BASE_CLIENT + userName + '/papersPdf/' + paperName, {
                            method: 'POST',
                            headers: {
                                Authorization: jwt,
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },

                            body: JSON.stringify({
                                "html": "Thank you very much for signing the page, have a nice day!",
                                "to": email,
                                "from": "noreply@mail.leader.codes",
                                "subject": paperName ? paperName + " paper to sign" : "new paper to sign",
                                attachments: { filename: "paper.pdf", path: response.filesData.file.url },
                                "paperName": paperName,
                                "isSigned": true
                            }),
                        })
                            .then((res) => res.json()).then((resJson) => {
                                console.log(resJson)
                                props.approachedToServerYesOrNo();
                                props.massageSuccessOrError(true);
                                props.massageToShowSuccesOrError("The Mail Sent May Take A Few Minutes To Arrive")
                                props.massageSuccessOrOops("Success");
                                // kkkk
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }
                })

            })
    }
    // const createPdf = () => {
    //   // --begin kkk

    //   console.log(emailRef.current.value);
    //   props.createPdf(bodyRef.current, emailRef.current.value);

    //   console.log(bodyRef);
    // }
    const { quote, trimmedDataURLYesOrNo } = props
    // digitalSignatureConfirmation

    // const clickedV=()=>{
    //   props.changedigitalSignatureConfirmation(true);
    //   props.changeDisplayYN(false)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.getElementsByClassName("sendingPdf")[0].style.top = (parseInt($(".viewQuill .ql-toolbar.ql-snow+.ql-container.ql-snow").css("height").replace("px", "")) + 50) + 'px'
    //     }, 4000);

    // }, [])


    return (
        <section className="pdf-container">
            <>

                <div class="sendingPdf" style={{ position: "fixed", bottom: "0px",zIndex:1}} className="row">
                    {quote && trimmedDataURLYesOrNo ?
                        <>
                            <div>
                                {props.managerComponent.digitalSignatureConfirmation === false && quote._id !== null ?
                                    <button disabled={!props.managerComponent.displayYN} className={props.managerComponent.displayYN === true?"btn btnV btnAble buttons d-flex justify-content-center align-items-center":"btn  btnV btnDisable buttons d-flex justify-content-center align-items-center"} style={{ display: "inline !important", height: "4vh", width: "6vw !important", zIndex: 0, position:"absolute",top:"-10vh", left:"81.5vw", fontSize:"1vw", padding:"1px 2px" }} onClick={() => props.changedigitalSignatureConfirmation(true)}>
                                        ok
                                    </button>
                                    : <></>}
                            </div>
                            <div className="col-10" style={{ backgroundColor: "#F5F5F5", }}>
                                {props.managerComponent.digitalSignatureConfirmation === true ?
                                    <div style={{ textAlign: "center", bottom: "0vh", zIndex: 10, position: "absolute", width: "100vw", height: "16vh", zIndex: "999999 !important", backgroundColor: "#F5F5F5"}} className="d-flex justify-content-center align-items-center mb0">
                                        <label style={{ textAlign: "center", fontSize: "1.3vw", marginTop: "1.8vh", marginRight: "1vw" }}>  Customer email:  </label>
                                        <div style={{ marginTop: "10px" }}>
                                            <input type="text" ref={emailRef} style={{ top: "934px", width: "20vw", marginRight: "1vw", height: "4vh", background: " #FFFFFF 0% 0% no-repeat padding-box", border: "0.30000001192092896px solid #707070", borderRadius: "5px", opacity: "1"}} />
                                        </div>
                                        <button  type="button" class="btn" onClick={(email) => { createPdf('ruth109476@gmail.com') }} style={{ top: "934px", left: "1140px", width: "6vw", height: "4vh", background: "#DB0E65  0% 0% no-repeat padding-box", borderRadius: "5px", opacity: "1", padding: "1px 2px", marginTop: "10px", fontSize:"1vw" , color:"white" }}>
                                            Send</button>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </>
                        : null}
                </div></>
            {props.quote2.approachedToServerYesOrNo ?
                <div class="d-flex justify-content-center" style={{marginBottom:"0"}}>

                    <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: loading,
                    }} height={300} width={300} style={{
                        width: "200px",
                        position: "fixed",
                        top: "20vh"
                    }} 
                    />
                </div>

                 : null
             }


            <section className="pdf-body" ref={bodyRef}>
                {props.children}
            </section>
        </section>
    )
})
