
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Production from './production'
import { withStyles } from '@material-ui/styles';
import { actions } from '../Redux/Action';
import Desi from './designTry'
import Content from './content/content';
import Massage from './massage';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import eye from './assets/eye-regular (1).svg';
import $ from 'jquery';



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

    Logo_root_37: {
        background_color: '#4d5358'
    },

    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        // height: 19,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        // width: 100,
        height: 10,
        // textAlign: 'left',
        font: 'Bold 14px/19px Roboto',
        // letterSpacing: 0.17,
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
        //    width:13
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },

    RoundedUp: {

        borderRadius: ' 50px 0px 0px 0px '
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },

    textcontect: {
        color: 'white',
        margin: '1%'
    },
    toolbar: {
        paddingRight: '0px',

    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    textarea: {
        backgroundColor: '#3A405E'
    },

    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },

    inputNumber:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
    inputNumberSlider:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'center',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        // '-webkit-appearance': 'none',
        // margin:0
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    row1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    createNewPage: {
        paddingRight: '5%',
        paddingLeft: '5%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageDetails: {
        color: '#b6b6c9',
        fontSize: '13px',
        paddingLeft: '10%',
        marginTop: '10px'
    },
    inputNumberSliderColor:
    {
        width: '60px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        marginLeft: '-1.5vw'
    },
    tit: {
        color: '#b6b6c9',
        fontSize: '13px',
        marginLeft: '1vw',
    }

});


class ManagerComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            // rivki 16.09.20
            checkedSwitch: false,
            IsCollapseM: false

        }
    }
    
    handleChangeSwitch = () => {
        // this.props.quote.logoYOrN = !this.props.quote.logoYOrN
        ;
        this.props.changeImageYOrN()
    }
    handleChangeSwitchCN = () => {
        // this.props.quote.logoYOrN = !this.props.quote.logoYOrN
        ;
        this.props.changeLogoCNYOrN()
    }

    // IsOpenCollapse = () => {
    //     this.setState({
    //         IsCollapse: !this.state.IsCollapse
    //     })
    // }




    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));


    IsOpenCollapseM() {
        ;
        if (this.state.IsCollapseM)
            this.setState({ IsCollapseM: false })
        else
            this.setState({ IsCollapseM: true })
    }
    askPaperDidUpdate =async()=>{
        if (this.props.managerComponent.paperDidUpdate) {
         await this.props.changeExitType("goToView")
          this.props.changeExitAlertWithoutUpdate(true)
        }
        else{
        var url = window.location;
        const paperName = (url.pathname.split('/')[3]);
        const userName = (url.pathname.split('/')[2]);
        this.props.setExitAlert(false); 
        window.open(`/${userName}/${paperName ? paperName : "new"}?user`) 
        }

    }
    handleClickOpen() {

        if ($('.crud').hasClass('crudOposite') == false) {
            var v = document.getElementById("crud");
            v.className += " crudOposite";
        }
        if (this.props.quote.name) {
            if (this.props.quote != null & this.props.quote._id != null)
                this.props.editQuote();
            else
                this.props.createQuote();
        }
        else {
            var parser = new DOMParser();
            var doc = parser.parseFromString(this.props.quote.quillStyle, 'text/html');
            if (!doc.body.innerText) {
                this.props.createQuote();
            }
        }
    }

    render() {
        const { classes } = this.props
        const defaultProps3 = {
            // width: 300,
            color: 'white'

        }
     

        return (
            <>
                <>

                    <div class="d-flex justify-content-center ">
                        <Massage ></Massage>
                    </div>


                    {/* {this.props.quote2.numStep === "1" ? <><div className="step" onClick={() => { $("#production").slideToggle("fast"); this.props.changeNumStep(""); }}>Create<KeyboardArrowUpIcon /></div><Production id="production" /></> : <div className="step" onClick={() => this.props.changeNumStep("1")}>Create <KeyboardArrowDownIcon /></div>} */}


                    {/* <div className="step" onClick={() => { this.props.changeNumStep("1"); $("#production").slideToggle("fast"); }}>Create</div><div id="production" style={{ display: "none" }} ><Production /></div><br />
                    <div className="step" onClick={() => { this.props.changeNumStep("2"); $("#desi").slideToggle("fast") }}>Design</div><div id="desi" style={{ display: "none" }} ><Desi /></div><br />
                    <div className="step" onClick={() => { this.props.changeNumStep("3"); $("#content").slideToggle("fast") }}>Content</div><div id="content" style={{ display: "none" }} ><Content /></div><br /> */}
                    {this.props.quote2.numStep === "1" ? <Production /> : <></>}
                    {this.props.quote2.numStep === "2" ? <Desi /> : <></>}
                    {this.props.quote2.numStep === "3" ? <Content /> : <></>}
                    <div style={{ position: "fixed", bottom: "1%" }} >
                        <div className="d-flex">
                            {/* <div className="crud" id="crud" onClick={() => this.handleClickOpen()} style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: "2vh", borderRadius: '3px',fontWeight:'bold'
                            }}>
                                <span>{this.props.quote ? this.props.quote._id ? <span>update</span> : <span>save</span> : <span>save</span>}</span>
                            </div>
                            className="btn bkgstyle" */}
                            {/* <button class="btn bkgstyle" ><span>export</span></button> */}
                             <button 
                            className="crud managerComponent_update"
                              id="crud" onClick={() => this.handleClickOpen()} style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center' , borderRadius: '3px',
                            }}
                            disabled={this.props.quote2?this.props.quote2.updateEnabled:false} 
                            >
                                <span>{this.props.quote ? this.props.quote._id ? <span>update</span> : <span>save</span> : <span>save</span>}</span>
                            </button>
                            <Link onClick={() =>  this.askPaperDidUpdate()} style={{ marginLeft: "2vh" }}>
                                <img className="eye" alt="" src={eye}></img>
                            </Link>
                        </div>
                    </div>


                </>
                {/* } */}

            </>

        )

    }



}
const mapStateToProps = (state) => {
    return {
        allContact: state.managerComponent.managerComponent.allContact,
        quote: state.quote.quote,
        quote2: state.quote,
        managerComponent: state.managerComponent.managerComponent,
    };
}

const mapDispatchToProps = (dispatch) => ({

    changeCurrentComponent: (e) => dispatch(actions.setStepper(e)),
    changeNumStep: (name) => dispatch(actions.setNumStep(name)),
    setExitAlert: (bol) => dispatch(actions.setExitAlert(bol)),
    createQuote: (a) => dispatch(actions.createQuote()),
    editQuote: (a) => dispatch(actions.editQuote()),
    changeExitAlertWithoutUpdate: (e) => dispatch(actions.setExitAlertWithoutUpdate(e)),
    changeExitType: (e) => dispatch(actions.setExitType(e)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ManagerComponents));