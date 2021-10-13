
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles'
import { actions } from '../Redux/Action';
class Signature extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    handleChangeSwitchFrom = () => {
        this.props.changeTrimmedDataURLYesOrNo()
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-1 d-flex justify-content-between align-items-center">
                        <label className="textInOneRow fs08">Digital signature</label>
                        {/* <FormLabel className={classes.textcontect}>Image</FormLabel> */}
                    </div>
                    <br />
                    <div className="col-1">
                        <div class="form-check form-switch" >
                            <input className={this.props.quote?this.props.quote.trimmedDataURLYesOrNo?"form-check-input flexSwitchCheckChecked2":"form-check-input flexSwitchCheckChecked3":"form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={this.props.quote ? this.props.quote.trimmedDataURLYesOrNo : true} onChange={this.handleChangeSwitchFrom} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>

                        {/* <AntSwitch checked={this.props.quote ? this.props.quote.trimmedDataURLYesOrNo : true} onChange={this.handleChangeSwitchFrom} /> */}
                    </div>
                </div>
            </>

        )
    }


}

const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeTrimmedDataURLYesOrNo: (s) => dispatch(actions.setTrimmedDataURLYesOrNo(s)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles()(Signature));
