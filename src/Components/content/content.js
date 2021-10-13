import React from 'react'
import { connect } from 'react-redux';
// import Signature from './signature'
import { actions } from '../../Redux/Action';
import Signature from '../../Components/signature'
import { withStyles } from '@material-ui/styles';
import FormLabel from '@material-ui/core/FormLabel';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import $ from 'jquery';
import './content.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// import RadioButton from '@material-ui/core/RadioButton';




const useStyles = ((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
        },
    },
    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    textcontect: {
        color: 'white',
        margin: '1%',
        fontSize: '0.8vw'
    },
    multilineColor: {
        color: 'white'
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
        backgroundColor: '#A7A7A736',
        opacity: 1,
        fontSize: '0.9vw',
        marginBottom: "1.8vh",
        backgroundColor: "#A7A7A736 !important",
        height: "3.5vh",
        width: '95%',

    },
    // ---

}));

function Content(props) {

    // async function onChangeHandlerProfilePdf(event) {
    //     let reader = new FileReader();
    //     reader.onloadend = () => {
    //       this.props.changePdf(reader.result)
    //     }
    //     reader.readAsDataURL(event);
    //     // const imageFile = event;
    //     // const options = {
    //     //   maxSizeMB: 1,
    //     //   maxWidthOrHeight: 1920,
    //     //   useWebWorker: true
    //     // }
    //     // try {
    //     //   const compressedFile = await imageCompression(imageFile, options);
    //     await this.props.onChangeHandlerProfilePdf(event);
    //     // } catch (error) {
    //     //   console.log(error);
    //     // }
    //   }
    const [value, setValue] = React.useState('input');
    const { classes } = props
    const handleChange = (event) => {
        setValue(event.target.value)
        props.changeQuillYOrN()
    };

    return (
        <>
            <p style={{ fontSize: "1vw", textAlign: "center" }}>Content</p>
            <hr style={{ height: "0.01vw" }} />
            {props.managerComponent.cardStep === "digitalSignature" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#digitalSignatureCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15 mb0" style={{ marginBottom: "0vh !important" }}>
                            <div className="fs08 mb0">Digital signature</div>
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>
                </>
                :
                <div onClick={() => { $("#digitalSignatureCard").slideDown("fast"); props.changeCardStep("digitalSignature"); $("#paperNameCard").slideUp("fast"); $("#importPdfCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="textInOneRow fs08 ">Digital signature</div>
                    <KeyboardArrowRightIcon />
                </div>

            }
            <div id="digitalSignatureCard" style={{ display: "none" }} className="marginR10L15 mt-2">
                <Signature></Signature>
                {props.quote.trimmedDataURLYesOrNo ?
                    <><input type="text"
                        style={{ width: "95%" }}
                        InputProps={{ className: classes.multilineColor }}
                        onChange={(e) => props.changeCustomerSignatureText(e.target.value)}
                        placeholder="Customer signature"
                        value={props.quote ? props.quote.customerSignatureText ? props.quote.customerSignatureText : "Customer Signature" : "Customer Signature"}
                        className={classes.fieldTextStyle} />
                        {/* <br></br> */}
                    </>
                    : <></>}
                <br></br>
            </div>


            {props.managerComponent.cardStep === "paperName" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#paperNameCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center fs08 marginR10L15">
                            <div>Paper name</div>
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>
                </>
                :
                <div onClick={() => { $("#paperNameCard").slideDown("fast"); props.changeCardStep("paperName"); $("#digitalSignatureCard").slideUp("fast"); $("#importPdfCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08">Paper name</div>
                    <KeyboardArrowRightIcon />

                </div>
            }
            <div className="marginR10L15 mb-1 mt-2" id="paperNameCard" style={{ display: "none" }} >
                <div className="row">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect} class="textInOneRow fs08 " >Hide title </FormLabel>
                    </div>
                    <div class="col form-check form-switch ">
                        <input className={props.quote ? props.quote.nameYOrN ? "form-check-input flexSwitchCheckChecked2" : "form-check-input flexSwitchCheckChecked3" : "form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked aaa" checked={props.quote ? props.quote.nameYOrN : true} onChange={() => props.changeNameYOrN()} />
                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                    </div>
                    {/* <div className="col-1">
                                    <AntSwitch checked={props.quote ? props.quote.nameYOrN : true} onChange={() => props.changeNameYOrN()} />
                                </div> */}
                </div>
                {props.quote.nameYOrN ? <>
                    <input type="text"
                        style={{ width: "95%" }}
                        InputProps={{ className: classes.multilineColor }}
                        onChange={(e) => props.changeNameQ(e.target.value)}
                        placeholder="Paper name"
                        value={props.quote ? props.quote.name ? props.quote.name : "" : ""}
                        className={classes.fieldTextStyle} />
                    {/* <br></br> */}

                    {/* <br></br> */}
                </> : <></>}
                <br></br>
            </div>

            {props.managerComponent.cardStep === "importPdf" ?
                <>
                    <div className="bkgBl ">
                        <div onClick={() => { $("#importPdfCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center fs08 marginR10L15">
                            <div class="textInOneRow">Type</div>
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>
                </>
                :
                <div onClick={() => { $("#importPdfCard").slideDown("fast"); props.changeCardStep("importPdf"); $("#digitalSignatureCard").slideUp("fast"); $("#paperNameCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08 ">Type</div>
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

const mapDispatchToProps = (dispatch) => ({
                            changeNameQ: (a) => dispatch(actions.setNameQ(a)),
    changeCardStep: (e) => dispatch(actions.setCardStep(e)),
    changeNameYOrN: (name) => dispatch(actions.setNameYOrN(name)),
    changeCustomerSignatureText: (name) => dispatch(actions.setCustomerSignatureText(name)),
    changeQuillYOrN: () => dispatch(actions.setQuillYOrN()),
})

const mapStateToProps = (state) => {
    return {
                            managerComponent: state.managerComponent.managerComponent,
                        quote: state.quote.quote,
    };
}

                        export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Content));