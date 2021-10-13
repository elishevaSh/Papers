

import { actions } from '../Action';
import keys from '../../config/env/keys'
import $ from 'jquery';
import { history } from "../../App";
import configData from '../../config.json'
import { createBrowserHistory } from 'history'
const historyRefresh = createBrowserHistory({ forceRefresh: true })

var url = window.location;
var contactId = url.pathname.split('/')[2];
let isDevOrLocal = window.location.href.includes('dev') ? window.location.href.includes('dev') : window.location.href.includes('localhost') ? window.location.href.includes('localhost') : null
let urlAccounts = `https://${isDevOrLocal ? 'dev.' : ''}accounts.codes`
let urlContacts = `https://api.${isDevOrLocal ? 'dev.' : '.'}leader.codes`
var userId;
var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
var paperName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[3]) : (url.pathname.split('/')[2]);
// export const TokenToString = document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
//     .filter(s => s.includes('devJwt'))[0].split("=").pop() : null;
export const TokenToString = document.cookie && document.cookie.includes(keys.JWT) ? document.cookie.split(";")
    .filter(s => s.includes(keys.JWT))[0].split("=").pop() : null;
function checkPermission(result) {
    return new Promise((resolve, reject) => {
        if (result && result.status && result.status === 401) {
            window.location.href = result.routes ?
                `${urlAccounts}/papers/login?routes=${result.routes}` :
                `${urlAccounts}/papers/login`;
            reject(false)

        }
        resolve(true)

    })
}

export const extractJwt = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EXTRACT_JWT') {
        // let params = (new URL(document.location)).searchParams;
        // let jwtGlobal = params.get('jwt');
        var urls = document.location.href;
        var myurls = urls.split("?jwt=");
        var mylasturls = myurls[1];
        if (mylasturls) {
            var mynexturls = mylasturls.split("&");
            var jwtGlobal = mynexturls[0];
        }
        if (jwtGlobal) {
            let newUrl = window.location.href
            newUrl = newUrl.split('?jwt=')
            newUrl = newUrl[0]
            let date = new Date(Date.now() + 86400e3);
            date = date.toUTCString();
            var expires = "expires=" + date;
            if (!(document.cookie.split(";").filter(s => s.includes(`${keys.JWT}`))[0]) || document.cookie.split(";").filter(s => s.includes(`${keys.JWT}`))[0] === '')
                document.cookie = `${keys.JWT}` + "=" + jwtGlobal + ";";
            // document.cookie = `${keys.JWT}` + "=" + jwtGlobal + ";" + expires + `;domain=.dev.accounts.codes;path=/`;
            // document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";domain=.dev.leader.codes;path=/";
            window.location.replace(newUrl)
        }
        // https://localhost:3000/admin/moriya?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJNcGZVeWZ6TndzTU1JSTNIQldBQldtYXpGUHkyIiwiZW1haWwiOiJtb3JpeWEubmFkYXYuMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE2MjcyMTU1OTd9.IMNGPToowvULdUuEIOBmH-eglU2T-G-H6gYBBepzKNc
        // https://papers.dev.leader.codes/admin/moriya/?includesConversations=false?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJNcGZVeWZ6TndzTU1JSTNIQldBQldtYXpGUHkyIiwiZW1haWwiOiJtb3JpeWEubmFkYXYuMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE2MjcyMTA1MDJ9.XGbdtbq_9fucBe95AVJlYUDTLYJpQMtihVEc7gLHiRU
        // https://papers.dev.leader.codes/admin/moriya
        else {
            dispatch({ type: 'CHANGE_UMTOUID' });
        }
    }
    return next(action);

}
function limitToPay() {
    return new Promise((resolve, reject) => {

        fetch(`${keys.API_URL_PAY}/premium`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                appName: "Papers",
                userName: userName
            })
        }).then(resp => resp.json()).then(data => {
            if (data.premium === true)
                resolve(true)
            resolve(false)
        }).catch((err) => {
            reject(err)
        })


    })
}

export const changeFromUNToUID = ({ dispatch, getState }) => next => action => {

    if (action.type === 'CHANGE_UMTOUID') {
        $.ajax({
            url: keys.API_URL_BASE_CLIENT + "getUser/" + userName,
            method: "GET",
            withCradentials: true,
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                checkPermission(data.user.uid).then((ifOk) => {
                })
                userId = data.user.uid;
                dispatch({ type: "SET_USERIDM", payload: userId });
                dispatch({ type: "SET_COMPANY_DETAILS_CALL", payload: data.user.phone ? data.user.phone : "" });
                dispatch({ type: "SET_COMPANY_DETAILS_MAIL2", payload: data.user.email ? data.user.email : "" });
                dispatch({ type: "SET_COMPANY_DETAILS_WEBSITE", payload: data.user.socialmedias ? data.user.socialmedias.websitedata ? data.user.socialmedias.website : "" : "" })
                dispatch({ type: "SET_USER", payload: data });
                dispatch({ type: "CCCC", payload: "jjjjjjjjjj" });
            },
            error: function (err) { console.log(err) }
        });
    }
    return next(action);
}



export const sendEmaillast = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SEND_EMAILLAST') {
        // var  jwtFromCookie ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJaWFVCemdNUGxmVzR2TEREbHZpZklpN0ZuNGsyIiwiZW1haWwiOiJhdGFyYUBsZWFkZXIuY29kZXMiLCJpcCI6IjIxMi43Ni4xMDEuMjQ5IiwiaWF0IjoxNjAxMzcwNjc2fQ.k6vKX4m_SNzhMq97QhO7Ox-knonS7mI3QfJccUo-Tr8"
        console.log(action.payload)

        // var mailTo = ().contactDetails.contactDetails.email
        // var mailTo = getState().quote.quote.contactDetailsTo;
        var mailTo = getState().quote.emailsToSendTemp;
        var url = window.location;
        const paperName = (url.href.split('/')[5]);
        const userName = (url.href.split('/')[4]);
        var url2 = window.location.href.split('/')[2];
        var urlView = `http://${url2}/${userName}/${paperName ? paperName : "new"}`
        fetch(keys.API_URL_BASE_CLIENT + userName + '/sendEmaillast', {
            method: 'POST',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ "body": window.location.href.replace("/admin/", "/"), "list": mailTo, "from": userName + "@mail.leader.codes", "subject": paperName ? paperName + "paper to sign" : "new paper to sign" }),
        })
            .then((res) => res.json()).then((resJson) => {

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return next(action);
}
export const sendEmail = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SEND_EMAIL') {
        dispatch(actions.setApproachedToServerYesOrNo());
        console.log(action.payload)
        var mailTo = getState().quote.emailsToSendTemp;
        var url = window.location;
        var paperName1 = action.payload
        var urlView = `${url.origin}/${userName}/${paperName1 ? paperName1 : paperName ? paperName : "new"}`
        var paperName2 = paperName1 ? paperName1 : paperName;
        fetch(keys.API_URL_BASE_CLIENT + userName + '/papersToList/' + paperName2, {
            method: 'POST',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ "html": getState().managerComponent.managerComponent.bodyMail + "<br/>" + urlView, "emailsToSend": getState().quote.quote.emailsToSend, "to": mailTo, "from": getState().quote.quote.companyDetailsMail2, "subject": getState().managerComponent.managerComponent.subjectMail }),
        })
            .then((res) => res.json()).then((resJson) => {
                dispatch(actions.clearEmailsToSendTemp());
                dispatch(actions.setMassageSuccessOrError(true));
                dispatch(actions.setMassageSuccessOrOops("Success"));
                dispatch(actions.setMassageToShowSuccesOrError("The email sent succefully!"));
                dispatch(actions.setApproachedToServerYesOrNo());
                checkPermission(resJson).then((ifOk) => {
                    dispatch(actions.setUser(resJson))
                })
                console.log(resJson)
                console.log("resJson")

                dispatch({ type: "SET_ALERTSTATUSE", payload: 5 });
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });

            })
    }
    return next(action);
}
export const sendEmailPdf = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SEND_EMAIL_PDF') {
        var mailTo = getState().quote.emailsToSendPdf;
        var url = window.location;
        var url2 = window.location.href.split('/')[2];
        var urlView = `${url2} / ${userName} / ${paperName ? paperName : "new"}`
        fetch(keys.API_URL_BASE_CLIENT + userName + '/papersPdf/' + paperName, {
            method: 'POST',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "html": urlView, "to": mailTo, "from": "noreply@mail.leader.codes", "subject": paperName ? paperName + "paper to sign" : "new paper to sign" }),
        })
            .then((res) => res.json()).then((resJson) => {
                // dispatch(actions.setApproachedToServerYesOrNo());
                // dispatch(actions.setMassageSuccessOrError(true));
                // dispatch(actions.setMassageSuccessOrOops("Success"));
                // dispatch(actions.setMassageToShowSuccesOrError("The email sent succefully!"));

                checkPermission(resJson).then((ifOk) => {
                    dispatch(actions.setUser(resJson))
                })
                console.log(resJson)
                console.log("resJson")
                dispatch({ type: "SET_ALERTSTATUSE", payload: 5 });
                // -----here...
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });

            })
    }
    return next(action);
}

export const getAllQuoteFromServer = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GETALL_QUOTE') {

        userId = getState().managerComponent.managerComponent.userId

        return fetch(keys.API_URL_BASE_CLIENT + userName + '/getAllQuote', {
            method: 'GET',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((resJson) => {
            checkPermission(resJson).then((ifOk) => {
                dispatch(actions.setUser(resJson))
            })
            console.log("allQuote!!!", resJson);
            dispatch(actions.setLastquote(resJson));


        }).catch((err) => {
            console.log(err)
        })

    }
    return next(action);
}

export const editQuoteFromServer = ({ dispatch, getState }) => next => action => {

    if (action.type === 'EDIT_QUOTE') {
        let quote = Object.assign({}, getState().quote.quote);
        if(getState().quote.logoUrl)
        quote.logo = getState().quote.logoUrl;
        if(getState().quote.businessSignatureUrl)
        quote.businessSignature = getState().quote.businessSignatureUrl;
        if(getState().quote.pdfUrl)
        quote.pdf = getState().quote.pdfUrl;
        if(getState().quote.imageUrl)
        quote.imageImage = getState().quote.imageUrl;
        if(getState().quote.digitalSignatureUrl)
        quote.trimmedDataURL = getState().quote.digitalSignatureUrl;

        if (getState().quote.currentName != getState().quote.quote.name) {
            dispatch(actions.setNameQ(getState().quote.quote.currentname));
            return fetch(keys.API_URL_BASE_CLIENT + userName + '/editQuote', {
                method: 'POST',
                headers: {
                    Authorization: TokenToString,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body:
                    JSON.stringify(quote)

            }).then((res) => {
                if (res.status == 409) {
                    return { status: res.status }
                }
                else {
                    return res.json();

                }
            }

            ).then((resJson) => {
                dispatch(actions.setPrevNamePaper(resJson.result.name));
                // dispatch(actions.setCurrentName(resJson.result.name));
                if (resJson.status == 409) {
                    // dispatch(actions.setMassageToShowSuccesOrError("Paper already exist!"));
                    // dispatch(actions.setMassageSuccessOrError(true));
                    // dispatch(actions.setMassageSuccessOrOops("Oops"));

                }
                dispatch(actions.setPaperDidUpdate(false));
                if (getState().quote.currentName == resJson.result.name) {
                    history.replace(`/admin/${userName}/${resJson.result.name}`)
                }
                else {
                    historyRefresh.replace(`/admin/${userName}/${resJson.result.name}`)

                }
                dispatch(actions.setUpdateQuoteYOrN(true));
                setTimeout(function () {
                    dispatch(actions.setUpdateQuoteYOrN(false));
                    dispatch(actions.setPaperDidUpdate(false));

                }, 3000);
                checkPermission(resJson).then((ifOk) => {
                    // history.replace(`/admin/${userName}/${resJson.result.name}`)
                })
                dispatch(actions.setPaperDidUpdate(false));
            }).catch((err) => {
                console.log(err)
            })

        }

        else {
            dispatch(actions.setIndexUrls(0));
            let quill = document.querySelectorAll(".ql-editor");
            if (quill[0])
                dispatch(actions.setQuillStyle(quill[0].innerHTML));
            // let quote = Object.assign({}, getState().quote.quote);
            console.log("getState().quote", getState().quote);

            console.log(quote);

            uploadMultiFiles(getState()).then((quill) => {
                if (quill)
                    quote.quillStyle = quill.join('')
                return fetch(keys.API_URL_BASE_CLIENT + userName + '/editQuote', {
                    method: 'POST',
                    headers: {
                        Authorization: TokenToString,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:
                        JSON.stringify(quote)

                }).then((res) => {
                    if (res.status == 409) {
                        return { status: res.status }
                    }
                    else {
                        return res.json();

                    }
                }

                ).then((resJson) => {
                    dispatch(actions.setPrevNamePaper(resJson.result.name));
                    dispatch(actions.setLastUpdateQuote());
                    if (resJson.status == 409) {
                        // dispatch(actions.setMassageToShowSuccesOrError("Paper already exist!"));
                        // dispatch(actions.setMassageSuccessOrError(true));
                        // dispatch(actions.setMassageSuccessOrOops("Oops"));

                    }
                    if (getState().quote.currentName == resJson.result.name) {
                        history.replace(`/admin/${userName}/${resJson.result.name}`)
                    }
                    else {
                        historyRefresh.replace(`/admin/${userName}/${resJson.result.name}`)

                    }
                    dispatch(actions.setUpdateQuoteYOrN(true));
                    setTimeout(function () {
                        dispatch(actions.setUpdateQuoteYOrN(false));
                        dispatch(actions.setPaperDidUpdate(false));

                    }, 3000);
                    checkPermission(resJson).then((ifOk) => {
                        // history.replace(`/admin/${userName}/${resJson.result.name}`)
                    })
                    dispatch(actions.setPaperDidUpdate(false));
                }).catch((err) => {
                    console.log(err)
                })
            })


        }
    }
    return next(action);
}
export const duplicate = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DUPLICATE') {
        var quote = getState().quote.quote
        console.log(quote);
        let degel = 0;
        let d = new Date();
        if (getState().quote.allQuote.quotes) {
            if (getState().quote.allQuote.quotes.length) {
                let allQ = getState().quote.allQuote.quotes;
                let lengthQ = getState().quote.allQuote.quotes.length;
                for (let index = 1; index <= 5; index++) {
                    if (lengthQ - index >= 0) {
                        if (allQ[lengthQ - index].createdDate) {
                            {
                                let currentD = new Date(allQ[lengthQ - index].createdDate);
                                if (currentD.getDate() == d.getDate() && currentD.getMonth() == d.getMonth() && currentD.getFullYear() == d.getFullYear())
                                    degel++;
                            }
                        }
                    }
                }
            }
        }
        limitToPay().then((premium) => {
            if ((!premium && degel < 5) || premium) {
                return fetch(keys.API_URL_BASE_CLIENT + userName + '/duplicateQuote', {
                    method: 'POST',
                    headers: {
                        Authorization: TokenToString,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:
                        JSON.stringify({ 'quoteId': action.action }),

                })
                    .then((res) => res.json()).then((resJson) => {
                        checkPermission(resJson).then((ifOk) => {
                            dispatch(actions.setUser(resJson))
                            console.log(resJson);
                        })
                        dispatch({ type: "GETALL_QUOTE" });

                    }).catch((err) => {
                        dispatch(actions.setMassageToShowSuccesOrError("Not Success"));
                        dispatch(actions.setMassageSuccessOrError(true));
                        dispatch(actions.setMassageSuccessOrOops("Oops"));
                        // alert("הצליח לא");
                        console.log(err)
                    })
            }
            else
                alert("You can create up to 5 papers per day, if you want to create another document you have to pay");
        })

    }
    return next(action);
}
export const getQuoteFromServer = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_QUOTE') {
        var quote = getState().quote
        console.log(quote);
        if (!paperName)
            paperName = quote.quote.name
        return fetch(keys.API_URL_BASE_CLIENT + userName + "/" + paperName + '/getQuote', {
            method: 'GET',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

        }).then((res) => res.json()).then((resJson) => {
            dispatch(actions.setCurrentName(resJson.quote.name))
            checkPermission(resJson).then((ifOk) => {
                dispatch(actions.setUser(resJson))
            })
            console.log(resJson);
            if (resJson.quote)
                dispatch({ type: "SET_QUOTE", payload: resJson.quote });
            dispatch(actions.setPrevNamePaper(resJson.quote.name));

        }).catch((err) => {
            console.log(err)

        })

    }
    return next(action);
}


function uploadMultiFiles(store) {
    return new Promise((resolve, reject) => {
        const formData = new FormData()
        let files = document.querySelectorAll(".ql-editor img")
        let bool = false;
        if (files.length) {
            files.forEach((file, index) => {
                if (file.src.substring(0, 6) != "https:") {
                    const objectFile = dataURLtoFile(file.src, "image" + index + ".png");
                    // const imageFile = objectFile;
                    // const options = {
                    //     maxSizeMB: 1,
                    //     maxWidthOrHeight: 1920,
                    //     useWebWorker: true
                    // }
                    bool = true;
                    // imageCompression(imageFile, options)
                    //     .then((compressedFile) => {
                    //         formData.append("image" + index, compressedFile, compressedFile.name);
                    //     })
                    //     .catch((error) => {
                    //         console.log(error.message);
                    //     });
                    formData.append("image" + index, objectFile);

                }
            })
            if (bool) {
                $.ajax({
                    type: "POST",
                    url: keys.API_URL_FILES + userName + "/uploadMultipleFiles",
                    headers: { Authorization: TokenToString },
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        // checkPermission(response).then((ifOk) => {
                        console.log(response)
                        let numImg = 0;
                        let array = store.quote.quote.quillStyle.split("<img");
                        let quillArray = [...array];
                        let num = 0;
                        array.forEach((img, index) => {

                            const typeImgBase64 = img.includes("data:image");
                            const typeImgFiles = img.includes('src="https://');
                            if (typeImgBase64) {
                                const url = response.filesData["image" + numImg++].url;
                                quillArray[num] = `<img src="${url}"></img>`;
                                console.log(typeImgBase64);
                                if (img.split(">").length > 1)
                                    quillArray.splice(++num, 0, img.slice(img.indexOf(">") + 1, img.length));
                            }
                            else if (typeImgFiles) {
                                numImg++
                                quillArray[num] = "<img " + quillArray[num]
                            }
                            num++

                        })
                        resolve(quillArray)
                    },
                    error: function (err) {
                        // dispatch(actions.setMassageToShowSuccesOrError("Please try again later"));
                        // dispatch(actions.setMassageSuccessOrError(true));
                        // dispatch(actions.setMassageSuccessOrOops("Oops"));

                        // alert('please try again later');
                    },
                });
            }
            else {
                resolve(false)

            }

        }
        else {
            resolve(false)
        }
    })

}
export const createQuoteToServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_QUOTE') {

        let degel = 0;
        let d = new Date();
        if (getState().quote.allQuote) {
            if (getState().quote.allQuote.quotes) {
                if (getState().quote.allQuote.quotes.length) {
                    let allQ = getState().quote.allQuote.quotes;
                    let lengthQ = getState().quote.allQuote.quotes.length;
                    for (let index = 1; index <= 5; index++) {
                        if (lengthQ - index >= 0) {
                            if (allQ[lengthQ - index].createdDate) {
                                {
                                    let currentD = new Date(allQ[lengthQ - index].createdDate);
                                    if (currentD.getDate() == d.getDate() && currentD.getMonth() == d.getMonth() && currentD.getFullYear() == d.getFullYear())
                                        degel++;
                                }
                            }
                        }
                    }
                }
            }
        }


        limitToPay().then((premium) => {
            if ((!premium && degel < 5) || premium) {
                $.ajax({
                    url: keys.API_URL_BASE_CLIENT + "getUser/" + userName,
                    method: "GET",
                    withCradentials: true,
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        checkPermission(data.user.uid).then((ifOk) => {
                        })
                        userId = data.user.uid;
                        dispatch({ type: "SET_USERIDM", payload: userId });
                        // dispatch({ type: "SET_USER_PHONE", payload: data.user.phone });
                        // dispatch({ type: "SET_USER_EMAIL", payload: data.user.email });
                        // dispatch({ type: "SET_USER_WEBSITE", payload: data.user.socialmedias.website });
                        dispatch({ type: "SET_COMPANY_DETAILS_CALL", payload: data.user.phone ? data.user.phone : "" });
                        dispatch({ type: "SET_COMPANY_DETAILS_MAIL2", payload: data.user.email ? data.user.email : "" });
                        dispatch({ type: "SET_COMPANY_DETAILS_WEBSITE", payload: data.user.socialmedias ? data.user.socialmedias.websitedata ? data.user.socialmedias.website : "" : "" })
                        dispatch({ type: "SET_USER", payload: data });
                        dispatch({ type: "CCCC", payload: "jjjjjjjjjj" });
                        var userName = (url.pathname.split('/')[2]);
                        if (!getState().quote.quote.contactDetailsFrom) {
                            dispatch({ type: "SET_CONTACT_DETAILS_FROM", payload: userName });
                        }
                        var quote = getState().quote
                        userId = getState().managerComponent.managerComponent.userId;
                        var bodyA = `<a href=${window.location.href}></a>`
                        var email = { subject: "create a paper", body: bodyA, to: quote.quote.contactDetailsTo ? quote.quote.contactDetailsTo : 'Unknown', from: quote.quote.contactDetailsFrom ? quote.quote.contactDetailsFrom : "Unknown", source: "papers" }
                        quote = Object.assign({}, getState().quote.quote);


                        var urlLogo = getState().quote.logoUrl;
                        quote.logo = urlLogo;
                        var urlbusinessSignature = getState().quote.businessSignatureUrl;
                        quote.businessSignature = urlbusinessSignature;
                        var urlPdf = getState().quote.logoPdf;
                        quote.pdf = urlPdf;
                        var urlImage = getState().quote.imageUrl;
                        quote.imageImage = urlImage;
                        var urldigitalSignature = getState().quote.digitalSignatureUrl;
                        quote.trimmedDataURL = urldigitalSignature;
                        uploadMultiFiles(getState()).then((quill) => {
                            if (quill)
                                quote.quillStyle = quill.join('')
                            return fetch(keys.API_URL_BASE_CLIENT + userName + '/createQuote', {
                                method: 'POST',
                                headers: {
                                    Authorization: TokenToString,
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    'quote': quote,
                                    'email': email
                                })

                            })

                        })
                            .then((res) => {

                                if (res.status == 409) {
                                    return { status: res.status }
                                }
                                else {
                                    return res.json();

                                }
                            }

                            )
                            .then((resJson) => {

                                if (resJson.status == 409) {
                                    dispatch(actions.setMassageToShowSuccesOrError("Paper already exist!"));
                                    dispatch(actions.setMassageSuccessOrError(true));
                                    dispatch(actions.setMassageSuccessOrOops("Oops"));
                                    dispatch(actions.setPaperDidUpdate(false));

                                    
                                }
                                else {

                                    checkPermission(resJson).then((ifOk) => {
                                        dispatch(actions.setQuote(resJson.result));
                                        dispatch(actions.setCurrentName(resJson.result.name));
                                        dispatch(actions.setPaperDidUpdate(false));
                                        historyRefresh.replace(`/admin/${userName}/${resJson.result.name}`)
                                    })
                                }

                            })

                    },
                    error: function (err) { console.log(err); }
                });
            }
            else
                alert("You can create up to 5 papers per day, if you want to create another document you have to pay");
        })



    }

    return next(action);
}
export const font = ({ dispatch, getState }) => next => action => {
    if (action.type === 'FONT') {
        try {
            const allFonts = fetch.get('https://www.googleapis.com/webfonts/v1/webfonts?key=API_KEY&sort=date')
            console.log("allFonts" + allFonts);
        }
        catch (error) {
            console.log("errorerrorerrorerror" + error);
        }

    }
    return next(action);
}

export const chechIsSubcribe = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CHECK_SUBCRIBE') {
        return fetch(keys.API_URL_PAY + '/getUserPurchase/' + userName, {
            method: 'GET',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

        }).then((res) => res.json()).then((resJson) => {
            checkPermission(resJson).then((ifOk) => {
                dispatch(actions.setUser(resJson))
            })
            console.log(resJson);
            dispatch(actions.setId(resJson.result._id))
        }).catch((err) => {
            console.log(err)
        })
    }
    return next(action);
}

export const deleteQuotesFromCient = ({ dispatch, getState }) => next => action => {
    ;
    if (action.type === 'DELETE_QUOTES') {

        var quote = getState().quote.quote
        var id = getState().quote.quote._id;
        console.log(id);

        return fetch(keys.API_URL_BASE_CLIENT + userName + '/deleteQuote', {
            method: 'POST',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({ 'idQuote': quote }),
        })
            .then((res) => res.json()).then((resJson) => {
                checkPermission(resJson).then((ifOk) => {
                    dispatch(actions.setUser(resJson))
                })
                console.log(resJson);
                dispatch(actions.setAlert2Statuse(0));
                dispatch({ type: 'GETALL_QUOTE' });
                dispatch(actions.setClearQuote());
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action);
}


export const addNewImageFromDb = ({ dispatch, getState }) => next => action => {

    if (action.type === "ADD_NEW_IMAGE_FROM_DB") {
        // $.ajax({

        //     type: "POST",
        //     url: "https://files.codes/api/" + userName + "/upload",

        //     headers: { Authorization: TokenToString },
        //     data: action.payload,
        //     processData: false,
        //     contentType: false,
        //     success: function (response) {
        //         checkPermission(response).then((ifOk) => {
        //             dispatch(actions.setUser(response))
        //         })
        //         dispatch(actions.addUrls(response.data.url));

        //     },
        //     error: function (err) {
        //         alert('please try again later');
        //     },
        // });



        $.ajax({
            url: keys.API_URL_BASE_CLIENT + getState().managerComponent.managerComponent.userId,
            method: 'post',
            contentType: false,
            processData: false,
            headers: { "authorization": TokenToString },
            data: action.payload,
            success: function (data) {
                // jsonToPost.logoImage = data.files.logoImage.url;
                // jsonToPost.backgroundImage = data.files.backgroundImage.url;
                $.ajax({
                    url: keys.API_URL_BASE_CLIENT + getState().managerComponent.managerComponent.userId + '/savedMultiFilesDB',
                    method: 'POST',
                    processData: false,
                    withCradentials: true,
                    dataType: "json",
                    contentType: "application/json",
                    headers: {
                        "authorization": TokenToString
                    },
                    data: JSON.stringify({ files: action.payload, post: "" }),
                    success: function (data) {
                        console.log("data", data);
                        dispatch(actions.setMassageToShowSuccesOrError("Succssefuly created post"));
                        dispatch(actions.setMassageSuccessOrError(true));
                        dispatch(actions.setMassageSuccessOrOops("Success"));
                        // alert("succssefuly created post");
                        // getPostsOver()
                        console.log("succssefuly created post", data)
                        localStorage.postId = data.postId
                        localStorage.new = 0
                    }
                })
            }
        });
    }


    return next(action)
}

function dataURLtoFile(dataurl, filename) {
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

export const addNewImageFromDbPdf = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_NEW_IMAGE_FROM_DB_PDF') {
        dispatch(actions.setUpdateEnabled(true));

        var myFile = new FormData()
        myFile.append("file", action.payload)
        $.ajax({
            xhr: () => {
                let xhr = new XMLHttpRequest();
                xhr.upload.onloadstart = function () {
                    console.log("Upload has started.");
                };

                xhr.upload.onprogress = (event) => {
                    let uploadedBytes = (event.loaded / event.total) * 100;
                    console.log(`Uploaded ${uploadedBytes} bytes`);
                    dispatch(actions.setLoadedAjax1(uploadedBytes));
                    dispatch(actions.setProgressColor("danger"));
                };

                xhr.upload.onload = () => {
                    console.log("Upload completed successfully.");
                };

                xhr.upload.onerror = function () {
                    console.log(`Error during the upload: ${xhr.status}.`);
                };
                return xhr;
            },
            type: "POST",
            url: keys.API_URL_FILES + userName + "/uploadMultipleFiles",
            headers: { Authorization: TokenToString },
            data: myFile,
            processData: false,
            contentType: false,
            success: function (response) {
                var typeFile = response.filesData.file.name.substring(response.filesData.file.name.length - 3)
                dispatch(actions.setPdfUrl(response.filesData.file.url));
                if (typeFile == "pdf") {
                    return fetch(keys.API_URL_FILES + userName + "/pdfToImg", {
                        method: 'POST',
                        headers: {
                            Authorization: TokenToString,
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },

                        body: JSON.stringify({
                            "url": response.filesData.file.url,
                        })
                    })

                        .then((res) => res.json()).then((resJson) => {
                            dispatch(actions.setPdfToImage(resJson.message[0].path));

                            dispatch(actions.setUpdateEnabled(false));
                            console.log("convert success!!");

                        })
                        .catch((err) => {
                            console.log("err with convert");
                        })
                }
                else {
                    dispatch(actions.setUpdateEnabled(false));
                    dispatch(actions.setPdfToImage(response.filesData.file.url));
                }
            },
            error: function (err) {
                dispatch(actions.setMassageToShowSuccesOrError("Please try again later"));
                dispatch(actions.setMassageSuccessOrError(true));
                dispatch(actions.setMassageSuccessOrOops("Oops"));
                // alert('please try again later');
            },
        });

        dispatch(actions.setLoadedAjax1(0));
    }
    return next(action)
}
export const addNewImageFromDbDigitalSignature = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_NEW_IMAGE_FROM_DB_DIGITAL_SIGNATURE') {
        var myFile = new FormData()
        myFile.append("file", action.payload)
        $.ajax({

            type: "POST",
            url: keys.API_URL_FILES + userName + "/uploadMultipleFiles",

            headers: { Authorization: TokenToString },
            data: myFile,
            processData: false,
            contentType: false,
            success: function (response) {
                checkPermission(response).then((ifOk) => {

                })
                dispatch(actions.setDigitalSignatureUrl(response.filesData.file.url));
            },
            error: function (err) {
                dispatch(actions.setMassageToShowSuccesOrError("There was a problem uploading the file, please try again"));
                dispatch(actions.setMassageSuccessOrError(true));
                dispatch(actions.setMassageSuccessOrOops("Oops"));
                // alert('please try again later');
            },
        });


    }
    return next(action)
}

export const getAllContactFromServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GETALL_CONTACT') {
        userId = getState().managerComponent.managerComponent.userId
        console.log(userId);
        return fetch(`${urlContacts}/${userName}/getContacts/?includesConversations=false`, {
            method: 'GET',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((resJson) => {
            checkPermission(resJson).then((ifOk) => {
                dispatch(actions.setUser(resJson))
                dispatch(actions.setLastcontact(resJson))
                console.log(resJson + "ressssssssssss");
            })
            dispatch({ type: "SET_LASTCONTACT", payload: resJson });
        }).catch((err) => {
            console.log(err)
        })

    }
    return next(action);
}

export const changePaperName = ({ dispatch, getState }) => next => action => {
    if (action.type === 'PAPER_NAME') {
        let quote = Object.assign({}, getState().quote.quote);
        var currentName = getState().quote.currentName
        return fetch(keys.API_URL_BASE_CLIENT + userName + "/" + currentName + '/changePaperName', {
            method: 'POST',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(quote)

        }).then((res) => {
            if (res.status === 409) {
                return { status: res.status }
            }
            else {
                return res.json();

            }
        }

        ).then((resJson) => {
            dispatch(actions.setCurrentName(resJson.result.name));

        })
    }
    return next(action)
}

export const changeNumOfViews = ({ dispatch, getState }) => next => action => {

    if (action.type === 'NUM_VIEWS') {
        var currentName = getState().quote.currentName
        return fetch(keys.API_URL_BASE_CLIENT + userName + "/" + currentName + '/changeNumOfViews', {
            method: 'POST',
            headers: {
                Authorization: TokenToString,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            // body: {
            //     name: quote.name
            // }


        }).then((res) => {
            if (res.status === 409) {
                return { status: res.status }
            }
            else {
                return res.json();

            }
        }

        )
    }
    return next(action)
}


