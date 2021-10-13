
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FontPicker from "font-picker-react";
import Box from '@material-ui/core/Box';
import { actions } from '../Redux/Action';
import Grid from '@material-ui/core/Grid';
import deputationSignature from '../Components/assets/deputationSignature.svg';
import { orange } from '@material-ui/core/colors';
const AntSwitch = withStyles((theme) => ({

    root: {
        padding: 0,
        overflow: "hidden !important",
        width: "2vw !important",
        height: "2.3vh !important",
        marginLeft: "10vw !important"
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            // transform: 'translateX(12px)',
            color:'#DB0E65  ' ,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},

}))(Switch);

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
        color: 'red',
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
        // '-webkit-appearance': 'none',
        // margin:0
    },
    inputNumberSliderColor:
    {
        width: '12vh',
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
        marginLeft: '-1.8vw'
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
    contctDetails: {
        color: '#b6b6c9 !important',
        fontSize: '13px',
        marginLeft: '1vw',
        marginTop: '10px'
    }
});



// function CustomizedSwitches() {
//     const [state, setState] = React.useState({
//         checkedC: true,
//     });

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     return (
//         <>
//             <FormGroup>
//                 <Typography component="div">
//                     <Grid component="label" container alignItems="center" spacing={1}>
//                         <Grid item>
//                             <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
//                         </Grid>
//                     </Grid>
//                 </Typography>
//             </FormGroup>
//         </>
//     );
// }
class ContactDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            // rivki 16.09.20
            checkedSwitch: false,
            IsCollapseCD: true,
            CDYN: true,


        }
    }


    // setInterval(this.props.changeDate(),1000);


    handleSliderChange = (event, newValue) => {
        ;
        this.props.changeContactDetailsTextsize(newValue);

    };
    onChangeHandlerBusinessSignature(event) {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.props.changeBusinessSignature(reader.result)
        }
        reader.readAsDataURL(event)
        this.props.onChangeHandlerProfileBusinessSignature(event);
    }



    handleInputChange = (event) => {
        ;
        this.props.changeContactDetailsTextsize(event.target.value);
    };

    handleSliderChangeLineHeight = (event, newValue) => {
        ;
        this.props.changeContactDetailsLineHeight(newValue);
    };
    handleInputChangeLineHeight = (event) => {
        ;
        this.props.changeContactDetailsLineHeight(event.target.value);
    };



    handleChangeSwitch = () => {
        // this.props.quote.logoYOrN = !this.props.quote.logoYOrN
        this.setState({ CDYN: !this.state.CDYN });
        this.props.changecontactDetailsYOrN()
    }

    IsOpenCollapseCD = () => {
        this.setState({
            IsCollapseCD: !this.state.IsCollapseCD
        })
    }


    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    handleChangeComplete = (color) => {
        this.setState({ bgcolrPNG: color.hex });
    };
    changeTextSizein = (e) => {
        ;
        this.props.changeContactDetailsTextsize(e)
    };


    changeLogoselectRdiuseView = (e) => {
        ;
        this.props.changeLogoselectRdiuseView(e)
    }
    changeContactDetailsColorText = (color) => {
        ;
        this.props.changeContactDetailsColorText(color)
    }
    onChangeHandlerImage(event) {



        let reader = new FileReader();
        //        var url = URL.createObjectURL(event)

        reader.onloadend = () => {

            // this.props.dispatch(setDetailsImagewUrl(url))
            // this.props.dispatch(editImage(reader.result))
            this.props.changeLogo(reader.result)
        }
        reader.readAsDataURL(event)

    }

    render() {
        const { classes } = this.props



        return (
            <>
                <div className={classes.root}>

                    <div style={{ width: 92 + "%", marginRight: 3 + "%", marginLeft: 3 + "%", overflow: "auto", overflowX: "hidden", height: "440px" }}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"

                        >


                            <br></br>


{/* 
                            <div className="row">
                                <div className="col-1">
                                    <FormLabel className={classes.textcontect}>Date</FormLabel>
                                </div>
                                <div className="col-1">
                                    <AntSwitch checked={this.props.quote ? this.props.quote.contactDetailsDateYN : true} onChange={() => this.props.changeContactDetailsDateYN()} />
                                </div>
                            </div>
                            <input type="text"
                                width={2}
                                InputProps={{ className: classes.multilineColor }}
                                onChange={(e) => this.props.changeDate()}
                                placeholder={this.props.quote ? this.props.quote.contactDetailsDate ? this.props.quote.contactDetailsDate : new Date().toLocaleString() : new Date().toLocaleString()}
                                value={this.props.quote ? this.props.quote.contactDetailsDate ? this.props.quote.contactDetailsDate : new Date().toLocaleString() : new Date().toLocaleString()}
                                //    placeholder={}
                                className={classes.fieldTextStyle} /> */}
                            <br></br>

                            <div className="row">
                                <div className="col-1">
                                    <FormLabel className={classes.textcontect}>To</FormLabel>
                                </div>
                                <div className="col-1">
                                    <AntSwitch checked={this.props.quote ? this.props.quote.contactDetailsToYN : true} onChange={() => this.props.changeContactDetailsToYN()} />
                                </div>
                            </div>
                            <input type="text"
                                width={2}
                                InputProps={{ className: classes.multilineColor }}
                                onChange={(e) => this.props.changeTo(e.target.value)}
                                placeholder="To"
                                value={this.props.quote ? this.props.quote.contactDetailsTo ? this.props.quote.contactDetailsTo : "" : ""}
                                className={classes.fieldTextStyle} />
                            <br></br>



                            <div className="row">
                                <div className="col-1">
                                    <FormLabel className={classes.textcontect}>From</FormLabel>
                                </div>
                                <div className="col-1">
                                    <AntSwitch checked={this.props.quote ? this.props.quote.contactDetailsFromYN : true} onChange={() => this.props.changeContactDetailsFromYN()} />
                                </div>
                            </div>
                            <input type="text"
                                width={2}
                                InputProps={{ className: classes.multilineColor }}
                                onChange={(e) => this.props.changeFrom(e.target.value)}
                                placeholder="From"
                                value={this.props.quote ? this.props.quote.contactDetailsFrom ? this.props.quote.contactDetailsFrom : window.location.pathname.split('/')[2] : window.location.pathname.split('/')[2]}
                                className={classes.fieldTextStyle} />


                            <br></br>






                            <div className="DivConfi">
                                <b className="minTitleConCon3">font</b>
                                <FontPicker
                                    apiKey="AIzaSyDak8Sv0dsaWx3jeKZlnLcFWYdJvMZr7Lc"
                                    class="form-control2" id="exampleFormControlSelect11"
                                    onChange={(e) => this.props.changeContactDetailsFont(e.target.value)}
                                    activeFontFamily={this.props.contactDetails.contactDetailsFont}
                                //  onChange={(nextFont) => (
                                //      setActiveFontFamily(nextFont.family),
                                //      setTitleFont(nextFont.family))}
                                />


                            </div>








                            <div className="DivConfi">
                                <b className="minTitleConCon3">Text weight</b>
                                <select class="form-control2" id="exampleFormControlSelect11" onChange={(e) => this.props.changeContactDetailsTextWeight(e.target.value)}>
                                    <option value={"normal"} selected={this.props.contactDetails ? this.props.contactDetails.contactDetailsTextWeight === 'normal' ? true : false : false}>Normal</option>
                                    <option value={"bold"} selected={this.props.contactDetails ? this.props.contactDetails.contactDetailsTextWeight === 'bold' ? true : false : false}>Bold</option>

                                </select>
                            </div>








                            <FormLabel className={classes.textcontect}>Text color</FormLabel>

                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >

                                <Box
                                    width={'200%'}
                                    alignSelf="center"
                                >
                                    {/* <HuePicker
                                        color={this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "#42454A" : "#42454A"}
                                        onChangeComplete={this.changeContactDetailsColorText}
                                        width={180}
                                        height={6}
                                    /> */}
                                    <input type="color" style={{ marginLeft: "1vw" }} onChange={(e) => { this.changeContactDetailsColorText(e.target.value) }} value={this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "#3A405E" : "#3A405E"} />

                                </Box>
                                <Box justifyContent="">
                                    <input
                                        textAlign="left"
                                        id="standard-number"
                                        type="number"

                                        onFocus={(e) => e.currentTarget.placeholder = ''}
                                        onBlur={(e) => e.currentTarget.placeholder = (this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "#3A405E" : "#3A405E")}
                                        placeholder={this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "#3A405E" : "#3A405E"}
                                        value={this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "#3A405E" : "#3A405E"}
                                        defaultValue={this.props.quote ? this.props.quote.contactDetailsColorText ? this.props.quote.contactDetailsColorText : "#3A405E" : "#3A405E"}

                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.inputNumberSliderColor}
                                    />
                                </Box>
                            </Box>












                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box
                                    width={'80%'}
                                >
                                    <FormLabel className={classes.textcontect}>Business Signature</FormLabel>

                                </Box>
                            </Box>

                            <Box
                                alignSelf="center">
                                <div className={classes.div}>

                                    <div class="image-upload">
                                        <label for="businessSignature">
                                            <img className="logoC" alt="" src={this.props.quote ? this.props.quote.businessSignature ? this.props.quote.businessSignature : deputationSignature : deputationSignature} />
                                        </label>
                                        <input
                                            type={"file"}
                                            id="businessSignature"
                                            htmlFor="myInput"
                                            accept="image/*"
                                            style={{
                                                display: 'none',
                                                cursor: 'pointer',
                                                //   width:this.props.quote?this.props.quote.logoWidth ? this.props.quote.logoWidth : '70':"70" 
                                            }}

                                            onChange={(e) => this.onChangeHandlerBusinessSignature(e.target.files[0])}
                                        />

                                    </div>
                                    <div id='lbError' class='warning'
                                        style={{
                                            position: 'relative',
                                            color: 'red',
                                            top: '-43px',
                                            right: '7x',
                                            left: '109px'
                                        }}
                                    >

                                    </div>
                                </div>

                            </Box>














                            <br></br>
                            <br></br>


                        </Grid>




                    </div>



                </div></>


        )
    }


}

const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        quote2: state.quote,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeDate: () => dispatch(actions.setContactDetailsDate()),
    changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),
    changeFrom: (e) => dispatch(actions.setContactDetailsFrom(e)),
    changeContactDetailsFont: (e) => dispatch(actions.setContactDetailsFont(e)),
    changeContactDetailsTextWeight: (e) => dispatch(actions.setContactDetailsTextWeight(e)),
    changeContactDetailsLineHeight: (e) => dispatch(actions.setContactDetailsLineHeight(e)),
    changeContactDetailsColorText: (e) => dispatch(actions.setContactDetailsColorText(e)),
    changeContactDetailsTextsize: (e) => dispatch(actions.setContactDetailsTextsize(e)),
    changecontactDetailsYOrN: (e) => dispatch(actions.setContactDetailsYOrN(e)),
    changeBusinessSignature: (image) => dispatch(actions.setBusinessSignature(image)),
    onChangeHandlerProfileBusinessSignature: (image) => dispatch(actions.addNewImageFromDbBusinessSignature(image)),
    changeContactDetailsDateYN: () => dispatch(actions.setContactDetailsDateYN()),
    changeContactDetailsToYN: () => dispatch(actions.setContactDetailsToYN()),
    changeContactDetailsFromYN: () => dispatch(actions.setContactDetailsFromYN()),


})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ContactDetails));
