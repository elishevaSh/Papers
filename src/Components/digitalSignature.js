import React, { Component } from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles'
import '../Components/stepper2.css';
import { actions } from '../Redux/Action';

// import ReactDOM from 'react-dom'
// import SignatureCanvas from 'react-signature-canvas'
import SignaturePad from 'react-signature-canvas'

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




});



class DigitalSignature extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     // displayY_N: false
        // }
    }

    send = false;

    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));

    sigPad = {}
    clear = () => {
        this.sigPad.clear();
        this.props.changeDisplayYN(false)
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

    // displayReset = () => {
    //     // alert(this.props.managerComponent.displayY_N)
    //     this.props.changeDisplayY_N(true)
    // }
    trim = () => {
        this.props.changeTrimmedDataURL(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))
        // reader.readAsDataURL(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))
        let d = this.dataURLtoFile(this.sigPad.getTrimmedCanvas().toDataURL('image/png'), `signature.jpg`)
        this.props.onChangeHandlerProfileDigitalSignature(d);
        // this.props.changeTrimmedDataURL(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))
    }

    render() {
        return (
            <>


                <div style={{ display: "inline", marginBottom: "1vh"}}>
                    <div onMouseUp={() => { this.props.changeDisplayYN(true); this.trim() }} >
                        <SignaturePad
                            canvasProps={{
                                className: "sigPad",
                            }}
                            style={{ width: "75vw", height: "15vh !important", border: "1px solid rgb(182, 182, 182) !important", marginTop: "1.9vh", display: "inline", marginLeft: "auto", marginRight: "auto" }}
                            ref={(ref) => { this.sigPad = ref }}


                        />
                    </div>

                    {this.props.quote._id != null && this.props.managerComponent.digitalSignatureConfirmation == false?
                        // && this.props.managerComponent.displayYN === true ?
                        <button disabled={!this.props.managerComponent.displayYN} className={this.props.managerComponent.displayYN === true?"btn btnX buttons d-flex justify-content-center align-items-center mt-xl-4vh btnXAble":"btn btnX buttons d-flex justify-content-center align-items-center mt-xl-4vh btnDisable"} onClick={this.clear} style={{ display: "inline !important", width: "6vw", height: "4vh", padding: "1px 2px", zIndex: "0 !important", fontSize:"1vw",zIndex:"0", position:"absolute", top:"3.8vh", left:"63.5vw"}}>
                            reset
                            </button>
                        : <></>}
                </div>

            </>

        )
    }


}
const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        managerComponent: state.managerComponent.managerComponent,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeTrimmedDataURL: (e) => dispatch(actions.setTrimmedDataURL(e)),
    // onChangeHandlerProfileDigitalSignature: (image) => dispatch({ type: 'ADD_NEW_IMAGE_FROM_DB_DIGITAL_SIGNATURE', payload: image }),
    onChangeHandlerProfileDigitalSignature: (image) => dispatch(actions.addNewImageFromDbDigitalSignature(image)),
    changedigitalSignatureConfirmation: (e) => dispatch(actions.setDigitalSignatureConfirmation(e)),
    changeDisplayYN: (e) => dispatch(actions.setDisplayYN(e)),

})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(DigitalSignature));