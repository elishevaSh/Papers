let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today = year + "-" + month + "-" + day;
export const Paper = () => {
    return (
        {
            lastUpdateQuote:today,
            updateQuoteYOrN: false,
            id: null,
            name: "",
            isPdf: false,
            nameSelect: false,
            nameYOrN: true,
            logo: "",
            LogoYOrN: true,
            logoCNYOrN: false,
            logoCompanyName: "",
            logoBorderRadiusLogo: "",
            logoBackgroundOnlyPng: "",
            logoSelect: false,
            contactDetailsTo: "",
            contactDetailsEmail: "",
            contactDetailsFrom: window.location.pathname.split('/')[2],
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
            massageSuccessOrError: false,
            MassageSuccessOrOops: "",
            MassageToShowSuccesOrError: "",
            updateQuoteYOrN: false,
            currentPaper: "",
            imageImage: "https://files.codes/uploads/tamar-c/img/1626171235815__defaultImgSrc.png",
            imageBackgroundOnlyPng: "",
            imageRectanglesWidth: "",
            imageRectanglesHeight: "",
            imageBorderRadiusRectangles: "",
            imageRectanglesColor: "",
            imageSelect: false,
            // ImageYOrN: true,
            imageYN: true,
            companyDetailsTitleCall: "",
            companyDetailsCall: "",
            companyDetailsTitleMail: "",
            companyDetailsMail: "",
            companyDetailsMail2: "",
            cccc: "",
            companyDetailsTitleWebsite: "",
            companyDetailsWebsite: "",
            companyDetailsBackgroundColor: "",
            companyDetailsSelect: false,
            companyDetailsCallYN: true,
            companyDetailsMailYN: true,
            companyDetailsWebsiteYN: true,
            message: "רבקה אין עלייך!!!",
            quillText: "",
            quillStyle: "",
            file2: "",
            businessSignature: "",
            trimmedDataURL: "",
            trimmedDataURLYesOrNo: true,
            emailsToSend: [],
            emailsToSendIndex: 0,
            emailsToSendI: 0,
            emailsToSendIndexServer: 0,
            numOfViews: 0,
            pdf: "",
            pdfToImage: "",
            quillYOrN: true,
            customerSignatureText: "Customer Signature",
            createdDate: new Date(),
            formatDate:'dd/MM/yyyy'
        }
    )
}