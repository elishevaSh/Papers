import React, { Component } from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles'
import '../Components/stepper2.css';
import { actions } from '../Redux/Action';

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



class Stepper2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            // rivki 16.09.20
            checkedSwitch: false,
            IsCollapse: false,
            testimonialTYOrN1: true,

        }

    }



    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    copyUrl = () => {
        let textToCopy = document.getElementById("valueToCopy")

        textToCopy.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);

        } catch (err) {
            console.log('Oops, unable to copy');
        }
    }
    render() {

        return (
            <>
                {/* <div className="d-flex justify-content-center align-items-center" style={{ display: "block" }}>
                    <div id='linkCopyUrl' class='d-flex bd-highlight'>
 
                        <div class="input-group mb-3" >
                            <input type="text" class="form-control" value={`${configData.SERVER_URL}${paperName}`}
                                id="valueToCopy"
                                aria-label="Recipient's username" aria-describedby="basic-addon2"
                                style={{ border: "2px solid #F7B500", borderRight: "none" }}
                            />
                            <div class="input-group-append">
                                <span data-toggle="tooltip" data-placement="left" title="Copy Link" style={{ cursor: "pointer", border: "2px solid #F7B500", borderLeft: "none", backgroundColor: "#DB0E65" }}
                                    class="input-group-text" onClick={() => this.copyUrl()} id="basic-addon2"><i class="fas fa-link fa-lg" ></i></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin:"4px", marginTop:"-10px"}}>
                    </div>
                </div> */}
            </>

        )
    }


}

const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        quote2: state.quote,
        allContact: state.managerComponent.managerComponent.allContact,
    };
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Stepper2));