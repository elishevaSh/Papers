import produce from 'immer';
import createReducer from "./reducerUtils";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { actions } from '../Action';
import $ from 'jquery';
import { Paper } from '../../models/paper'

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today = year + "-" + month + "-" + day;

const initialState = {
    allQuote: [],
    quote:Paper(),
    approachedToServerYesOrNo: false,
    currentName: "",
    emailsToSendTemp: [],
    emailsToSendIndexTemp: 0,
    logoUrl: '',
    pdfUrl: '',
    imageUrl: 'https://files.codes/uploads/tamar-c/img/1626171235815__defaultImgSrc.png',
    completeImageUrl: 'https://files.codes/uploads/tamar-c/img/1626171235815__defaultImgSrc.png',
    rotationImage: 0,
    zoomImage: 1,
    businessSignatureUrl: '',
    digitalSignatureUrl: "",
    indexUrls: 0,
    alert2Statuse: false,
    imageYOrN: true,
    imageSrc: null,
    contactDetailsYOrN: true,
    opacity: false,
    numStep: "1",
    btnX: true,
    emailsToSendPdf: "",
    right: true,
    prevNamePaper: "",
    haveChangesBeenMade: false,
    firstEntry: true,
    updateEnabled: false,
};

const agent = {
    // onChangeHandlerProfile(state, action) {
    //     let e = action.payload
    //     console.log(e)
    //     const reader1 = new FileReader()
    //     const file = e
    //     reader1.onloadend = () => {
    //         // state.quote.logo = reader1.result;
    //         // store.getState().reducerName
    //     };
    //     reader1.readAsDataURL(file)
    //     var fileToUpload = e
    //     var myFile = new FormData()
    //     myFile.append("file", fileToUpload)
    //     // if (!this.props.rowToEdit)
    //     applyMiddleware(store.addNewImageFromDbLogo(myFile))
    //     applyMiddleware({ type: 'ADD_NEW_IMAGE_FROM_DB_LOGO', payload: myFile })


    // },
    setFormatDate(state, action) {
        state.quote.formatDate = action.payload;
    },
    setUpdateEnabled(state, action) {
        state.updateEnabled = action.payload;
    },
    setFirstEntry(state, action) {
        state.firstEntry = action.payload;
    },
    setPrevNamePaper(state, action) {
        state.prevNamePaper = action.payload;
    },
    setEmailsToSendIndexServer(state, action) {
        state.quote.emailsToSendIndexServer = action.payload;
    },
    setRight(state, action) {
        state.right = !state.right;
    },
    setEmailsToSendPdf(state, action) {
        state.emailsToSendPdf = action.payload;
    },
    setBtnX(state, action) {
        state.btnX = !state.btnX;
    },
    clearEmailsToSendTemp(state, action) {
        state.emailsToSendTemp = [];
        state.emailsToSendIndexTemp = 0;
        state.emailsToSendI = 0;
    },
    setEmailsToSendIndexTemp(state, action) {
        // state.emailsToSendTemp[state.emailsToSendIndexTemp] = ""
        state.emailsToSendIndexTemp = action.payload;
        // state.quote.emailsToSendIndex++;
    },
    setCurrentName(state, action) {
        state.currentName = action.payload;
    },

    setApproachedToServerYesOrNo(state, action) {
        state.approachedToServerYesOrNo = !state.approachedToServerYesOrNo;
    },
    setEmailsToSendTemp(state, action) {
        state.emailsToSendTemp[action.payload.index] = action.payload.value;
        state.quote.emailsToSend[action.payload.index + state.quote.emailsToSendIndexServer] = { email: action.payload.value, isSigned: false }
    },
    emailsToSendIsSigned(state, action) {
        state.quote.emailsToSend = action.payload
    },
    setEmailsToSend(state, action) {
        state.emailsToSendTemp.forEach(element => {
            state.quote.emailsToSend[state.quote.emailsToSendI - 1] = element;
            state.quote.emailsToSendI++;
        });
        state.quote.emailsToSend[state.quote.emailsToSendI - 1] = { email: action.payload.value, isSigned: false }
    },
    deleteEmailsToSendTemp(state, action) {
        state.emailsToSendTemp.splice(action.payload, 1);
        state.quote.emailsToSendI--;
        state.quote.emailsToSend.splice((state.quote.emailsToSendI - state.emailsToSendTemp.length + action.payload), 1);
        for (let index = 0; index < state.emailsToSendTemp.length; index++) {
            $("#email" + action.payload).val(state.emailsToSendTemp[index])
        }
    },

    setNumStep(state, action) {
        state.numStep = action.payload;
    },
    setOpacity(state, action) {
        state.opacity = !state.opacity;
    },
    setAlert2Statuse(state, action) {
        state.alert2Statuse = action.payload
    },
    setLastquote(state, action) {
        state.allQuote = action.payload;
    },
    editQuote2(state, action) {
        state.quote = action.payload;
    },
    editQuote4(state, action) {
        state.quote = action.payload;
    },
    setQuote(state, action) {
        state.quote = action.payload;
    },
    setId(state, action) {
        state.quote._id = action.payload;
    },
    setNameQ(state, action) {
        // state.currentPaper=action.payload;
        state.quote.name = action.payload;
    },
    setNameYOrN(state, action) {

        state.quote.nameYOrN = !state.quote.nameYOrN;
    },
    setLogo(state, action) {
        state.quote.logo = action.payload;
    },

    setPdfToImage(state, action) {
        state.quote.pdfToImage = action.payload;
    },
    setPdf(state, action) {
        state.quote.pdf = action.payload;
    },
    setLogoYOrN(state, action) {
        state.quote.LogoYOrN = !state.quote.LogoYOrN;
    },
    setQuillYOrN(state, action) {
        state.quote.quillYOrN = !state.quote.quillYOrN;
    },
    setCustomerSignatureText(state, action) {
        state.quote.customerSignatureText = action.payload;
    },
    setImageYOrN(state, action) {
        state.quote.ImageYOrN = !state.quote.ImageYOrN;
    },

    setlogoCNYOrN(state, action) {
        state.quote.logoCNYOrN = !state.quote.logoCNYOrN;
    },
    setContactDetailsYOrN(state, action) {
        state.contactDetailsYOrN = !state.contactDetailsYOrN;
    },
    setImageYOrN(state, action) {
        state.imageYOrN = !state.imageYOrN;
    },
    setImageSrc(state, action) {
        state.imageSrc = action.payload;
    },
    setLogoCompanyName(state, action) {
        state.quote.logoCompanyName = action.payload;
    },
    setLogoBorderRadiusLogo(state, action) {
        state.quote.logoBorderRadiusLogo = action.payload;
    },
    sendEmail(state, action) {
        // state= store.ContactDetails.contactDetails
        // console.log(state.contactDetails.contact.name);
        state.quote.message = action.payload;
        // console.log(state.contactDetails.contactDetails)
    }, setLogoBackgroundOnlyPng(state, action) {
        state.quote.logoBackgroundOnlyPng = action.payload;
    },
    setContactDetailsDateYN(state, action) {
        state.quote.contactDetailsDateYN = !state.quote.contactDetailsDateYN;
    }, setContactDetailsToYN(state, action) {

        state.quote.contactDetailsToYN = !state.quote.contactDetailsToYN;
    }, setContactDetailsEmailYN(state, action) {
        state.quote.contactDetailsEmailYN = !state.quote.contactDetailsEmailYN;
    }, setContactDetailsFromYN(state, action) {
        state.quote.contactDetailsFromYN = !state.quote.contactDetailsFromYN;
    }, setContactDetailsDate(state, action) {
        state.contactDetailsDate = new Date().toLocaleString();
    }, setContactDetailsTo(state, action) {
        state.quote.contactDetailsTo = action.payload;;
        // state.quote.quillStyle = "<label>Date: </label> <input type='date'>" + state.contactDetailsDate + "</><br/><label>To: </label> <input type='text'>" + action.payload + "</><br/><label>From: </label> <input type='text'>" + state.quote.contactDetailsFrom + "</>";
    }, setContactDetailsFrom(state, action) {
        state.quote.contactDetailsFrom = action.payload;
        // state.quote.quillStyle = "<label>Date: </label> <input type='date'>" + state.contactDetailsDate + "</><br/><label>To: </label> <input type='text'>" + state.quote.contactDetailsTo + "</><br/><label>From: </label> <input type='text'>" + action.payload + "</>";
    }, setContactDetailsProposalName(state, action) {
        ;
        state.quote.contactDetailsProposalName = action.payload;;
    }, setContactDetailsFont(state, action) {
        state.quote.contactDetailsFont = action.payload;
    }, setContactDetailsTextWeight(state, action) {
        state.quote.contactDetailsTextWeight = action.payload;
    }, setContactDetailsTextsize(state, action) {
        state.quote.contactDetailsTextsize = action.payload;
    }, setContactDetailsColorText(state, action) {
        state.quote.contactDetailsColorText = action.payload;
    }, setContactDetailsLineHeight(state, action) {
        state.quote.contactDetailsLineHeight = action.payload;
    }, setTitleYOrN(state, action) {
        state.quote.titleYOrN = !state.quote.titleYOrN;
    }, setTestimonialIYOrN1(state, action) {
        state.quote.testimonialIYOrN1 = !state.quote.testimonialIYOrN;
    }, setTestimonialTYOrN(state, action) {
        state.quote.testimonialTYOrN = !state.quote.testimonialTYOrN;
    },
    setTesTimonialPRYOrN(state, action) {
        state.quote.testimonialPRYOrN = !state.quote.testimonialPRYOrN;
    }, setTestimonialPAYOrN(state, action) {
        state.quote.testimonialPAYOrN = !state.quote.testimonialPAYOrN;
    },
    setTitleTextTitle(state, action) {

        state.quote.titleTextTitle = action.payload;
    }, setTitleFont(state, action) {
        state.quote.titleFont = action.payload;
    }, setTitleTextWeight(state, action) {
        state.quote.titleTextWeight = action.payload;
    }, setTitleTextSize(state, action) {
        state.quote.titleTextSize = action.payload;
    },  setTitleColorText(state, action) {
        state.quote.titleColorText = action.payload;
    }, setImageImage(state, action) {
        state.quote.imageImage = action.payload;
    }, setImageBackgroundOnlyPng(state, action) {
        state.quote.imageBackgroundOnlyPng = action.payload;
    }, setImageRectanglesWidth(state, action) {
        state.quote.imageRectanglesWidth = action.payload;
    }, setImageRectanglesHeight(state, action) {
        state.quote.imageRectanglesHeight = action.payload;
    }, setImageBorderRadiusRectangles(state, action) {
        state.quote.imageBorderRadiusRectangles = action.payload;
    }, setImageRectanglesColor(state, action) {
        state.quote.imageRectanglesColor = action.payload;
    }, setImageYN(state, action) {
        state.quote.imageYN = !state.quote.imageYN;
    }, setCompanyDetailsTitleCall(state, action) {
        state.quote.companyDetailsTitleCall = action.payload;
    }, setCompanyDetailsCall(state, action) {
        state.quote.companyDetailsCall = action.payload;
    }, setCompanyDetailsTitleMail(state, action) {
        state.quote.companyDetailsTitleMail = action.payload;
    },
    setCompanyDetailsMail2(state, action) {
        state.quote.companyDetailsMail2 = action.payload;
    },
    cccc(state, action) {
        state.quote.cccc = action.payload;
    },
    setCompanyDetailsMail(state, action) {
        state.quote.companyDetailsMail = action.payload;
    },
    setCompanyDetailsTitleWebsite(state, action) {
        state.quote.companyDetailsTitleWebsite = action.payload;
    }, setCompanyDetailsWebsite(state, action) {
        state.quote.companyDetailsWebsite = action.payload;
    }, setCompanyDetailsBackgroundColor(state, action) {
        state.quote.companyDetailsBackgroundColor = action.payload;
    }, setCompanyDetailsCallYN(state, action) {
        state.quote.companyDetailsCallYN = !state.quote.companyDetailsCallYN;
    }, setCompanyDetailsMailYN(state, action) {
        state.quote.companyDetailsMailYN = !state.quote.companyDetailsMailYN;
    }, setCompanyDetailsWebsiteYN(state, action) {
        state.quote.companyDetailsWebsiteYN = !state.quote.companyDetailsWebsiteYN;
    },

    setLogoSelect(state, action) {
        state.quote.logoSelect = action.payload;
    }, setTitleSelect(state, action) {
        state.quote.titleSelect = action.payload;
    },
    setImageSelect(state, action) {
        state.quote.imageSelect = action.payload;
    }, setOurProductsSelect(state, action) {
        state.quote.ourProductsSelect = action.payload;
    }, setTestimonialSelect(state, action) {
        state.quote.testimonialSelect = action.payload;
    }, setTimesAndPricesSelect(state, action) {
        state.quote.timesAndPricesSelect = action.payload;
    }, setCompanyDetailsSelect(state, action) {
        state.quote.companyDetailsSelect = action.payload;
    },
    setNameSelect(state, action) {
        state.quote.nameSelect = action.payload;
    },
     setNumOfViews(state, action) {
        state.quote.numOfViews = state.quote.numOfViews + 1;
    }, c(state, action) {
        state.quote = {
            lastUpdateQuote:today,
            name: "",//null
            logo: "",
            LogoYOrN: true,
            logoCNYOrN: false,
            logoCompanyName: "",
            logoBorderRadiusLogo: "",
            logoBackgroundOnlyPng: "",
            logoSelect: false,
            contactDetailsTo: "",
            contactDetailsEmail: "",
            contactDetailsFrom: "",
            contactDetailsDateYN: true,
            contactDetailsToYN: true,
            contactDetailsEmailYN: true,
            contactDetailsFromYN: true,
            contactDetailsProposalName: "",
            contactDetailsFont: "",
            contactDetailsTextWeight: "",
            contactDetailsTextsize: "",
            contactDetailsLineHeight: "",
            contactDetailsColorText: "",
            titleYOrN: true,
            titleTextTitle: "",
            titleFont: "",
            titleTextWeight: "",
            titleTextSize: 50,
            titleColorText: "",
            titleSelect: false,
            ImageYOrN: true,
            imageSrc: null,
            imageImage: "",
            imageBackgroundOnlyPng: "",
            imageRectanglesWidth: "",
            imageRectanglesHeight: "",
            imageBorderRadiusRectangles: "",
            imageRectanglesColor: "",
            imageSelect: false,
            imageYN: true,
            companyDetailsTitleCall: "",
            companyDetailsCall: "",
            companyDetailsTitleMail: "",
            companyDetailsMail: "",
            companyDetailsMail2: "",
            companyDetailsTitleWebsite: "",
            companyDetailsWebsite: "",
            companyDetailsBackgroundColor: "",
            companyDetailsSelect: false,
            companyDetailsCallYN: true,
            companyDetailsMailYN: true,
            companyDetailsWebsiteYN: true,
            message: "רבקה אין עלייך!!!",
            businessSignature: "",
            trimmedDataURL: "",
            trimmedDataURLYesOrNo: true,
            quillText: "",
            quillStyle:"",
            formatDate:'dd/MM/yyyy',
            // quillStyle:"<label>Date: </label> <input type='date'>" + today + "</><br/><label>To: </label> <input type='text'>" + state.quote.contactDetailsTo + "</><br/><label>From: </label> <input type='text'>" + state.contactDetailsFrom + "</>",
            // _id:null,

        }
    },
    setClearQuote(state, action) {
        // let empty = "empty_paper" + "_" + new Date().toLocaleString().replace("/", ".").replace(" ", "")
        // empty = empty.replace("/", ".").replace(" ", "_")

        state.quote = {
            emailsToSendIndexServer: 0,
            name: "",
            updateQuoteYOrN: false,
            logo: "",
            LogoYOrN: true,
            ImageYOrN: true,
            imageSrc: null,
            nameYOrN: true,
            // lastUpdateQuote: new Date().getDate()+'/'+(new Date().getMonth())+'/'+new Date().getFullYear(),
            lastUpdateQuote:today,
            logoCNYOrN: false,
            logoCompanyName: "",
            logoBorderRadiusLogo: "",
            logoBackgroundOnlyPng: "",
            logoSelect: false,
            contactDetailsTo: "",
            contactDetailsEmail: "",
            contactDetailsFrom: "",
            contactDetailsDateYN: true,
            contactDetailsToYN: true,
            contactDetailsEmailYN: true,
            contactDetailsFromYN: true,
            contactDetailsProposalName: "",
            contactDetailsFont: "",
            contactDetailsTextWeight: "",
            contactDetailsTextsize: "",
            contactDetailsLineHeight: "",
            contactDetailsColorText: "",
            titleYOrN: true,
            titleTextTitle: "",
            titleFont: "",
            titleTextWeight: "",
            titleTextSize: 50,
            titleColorText: "",
            titleSelect: false,
            imageImage: "https://files.codes/uploads/tamar-c/img/1626171235815__defaultImgSrc.png",
            imageBackgroundOnlyPng: "",
            imageRectanglesWidth: "",
            imageRectanglesHeight: "",
            imageBorderRadiusRectangles: "",
            imageRectanglesColor: "",
            imageSelect: false,
            imageYN: true,
            companyDetailsTitleCall: "",
            companyDetailsCall: "",
            companyDetailsTitleMail: "",
            companyDetailsMail: "",
            companyDetailsMail2: "",
            companyDetailsTitleWebsite: "",
            companyDetailsWebsite: "",
            companyDetailsBackgroundColor: "",
            companyDetailsSelect: false,
            companyDetailsCallYN: true,
            companyDetailsMailYN: true,
            companyDetailsWebsiteYN: true,
            message: "רבקה אין עלייך!!!",
            businessSignature: "",
            trimmedDataURL: "",
            trimmedDataURLYesOrNo: true,
            // _id: null,
            quillText: "",
            // quillStyle:"<label>Date: </label> <input type='date'>" + today + "</><br/><label>To: </label> <input type='text'>" + state.quote.contactDetailsTo + "</><br/><label>From: </label> <input type='text'>" + state.contactDetailsFrom + "</>",
            quillStyle:"",
            pdf: "",
            pdfToImage: "",
            quillYOrN: true,
            customerSignatureText: "Customer Signature",
            formatDate:'dd/MM/yyyy'

        };
        state.imageUrl = 'https://files.codes/uploads/tamar-c/img/1626171235815__defaultImgSrc.png';
        state.completeImageUrl = 'https://files.codes/uploads/tamar-c/img/1626171235815__defaultImgSrc.png';
        state.rotationImage = 0;
        state.zoomImage = 1;
        state.businessSignatureUrl = '';
        state.businessSignatureUrl = '';
        state.digitalSignatureUrl = "";
        state.indexUrls = 0;
        state.alert2Statuse = false;
        state.imageYOrN = true;
        state.imageSrc = null;
        state.contactDetailsYOrN = true;
        state.opacity = false;
        state.numStep = "1";
        state.urls = [];
        state.logoUrl = "";
        state.pdfUrl = "";
        state.updateEnabled = false;


        // let r = window.location.href.split('/')[2];
        // `/${userName}/${paperName}`

        // window.location.href = `/admin/${window.location.pathname.split("/")[2]}`;
    },
    setHaveChangesBeenMade(state, action) {
        state.haveChangesBeenMade = action.payload;
    },
    setTrimmedDataURLYesOrNo(state) {
        state.quote.trimmedDataURLYesOrNo = !state.quote.trimmedDataURLYesOrNo;
    },
    setTrimmedDataURL(state, action) {
        state.quote.trimmedDataURL = action.payload;
    },
    setBusinessSignature(state, action) {
        state.quote.businessSignature = action.payload;
    },
    setQuillText(state, action) {

        state.quote.quillText = action.payload;
    },
    setQuillStyle(state, action) {
        state.quote.quillStyle = action.payload;
    },
    setFile2(state, action) {
        state.quote.file2 = action.payload;
    },
    addUrls(state, action) {

        //  var files = state.quote.quillStyle.querySelectorAll(".ql-editor img")
        // for(let i=0;i<files.length;i++)
        // {
        //     files[i].src=action.payload;
        // }


        // state.urls[0]=action.payload;
    },
    setIndexUrls(state, action) {
        state.indexUrls = action.payload;
    },
    setLogoUrl(state, action) {
        state.logoUrl = action.payload;
    },
    setPdfUrl(state, action) {
        state.pdfUrl = action.payload;
    },
    setImageUrl(state, action) {
        state.imageUrl = action.payload;
    },
    setCompleteImageUrl(state, action) {
        state.completeImageUrl = action.payload;
    },
    setRotationImage(state, action) {
        state.rotationImage = action.payload;
    },
    setZoomImage(state, action) {
        state.zoomImage = action.payload;
    },
    setBusinessSignatureUrl(state, action) {
        state.businessSignatureUrl = action.payload;
    },
    setDigitalSignatureUrl(state, action) {
        state.digitalSignatureUrl = action.payload;
    }, setNameYOrN(state, action) {
        state.quote.nameYOrN = !state.quote.nameYOrN;
    },
    setMassageSuccessOrError(state, action) {
        state.quote.massageSuccessOrError = action.payload;
    },
    setMassageToShowSuccesOrError(state, action) {
        state.quote.MassageToShowSuccesOrError = action.payload;
    },
    setMassageSuccessOrOops(state, action) {
        state.quote.MassageSuccessOrOops = action.payload;
    },
    setUpdateQuoteYOrN(state, action) {
        state.quote.updateQuoteYOrN = action.payload;
    },
    setCurrentPaper(state, action) {
        state.quote.currentPaper = action.payload;
    },
    setIsPdf(state, action) {
        state.quote.isPdf = action.payload;
    },
    setLastUpdateQuote(state, action) {
        state.quote.lastUpdateQuote = action.payload;
    }
};
export default produce((state, action) => createReducer(state, action, agent), initialState);

