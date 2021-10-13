import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux';
import FontPicker from "font-picker-react";
// import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { actions } from '../Redux/Action';
import logo2 from '../Components/assets/LogoLeader.svg';
import imageCompression from 'browser-image-compression';
import autumnForest from './assets/autumn-forest.jpg';
import '../Components/design.css';
import '../Components/style.css';
import '../Components/viewNewOnePage.css';
// import Massage from './massage';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import deputationSignature from '../Components/assets/deputationSignature.svg';
import $ from 'jquery';
import Cropper from './cropper'




// const AntSwitch = withStyles((theme) => ({
//     root: {
//         padding: 0,
//         overflow: "hidden !important",
//         width: "2vw !important",
//         height: "2.3vh !important",
//         marginLeft: "10vw !important"
//     },
//     // root: {
//     //     padding: 0,
//     //     overflow: "hidden !important",
//     //     width: "2.5vw !important",
//     //     height: "2.3vh !important",
//     //     marginLeft: "9vw !important",

//     //     // marginRight:"3vh",
//     // },
//     switchBase: {
//         padding: 2,
//         color: theme.palette.grey[500],
//         '&$checked': {
//             transform: 'translateX(12px)',
//             color: theme.palette.common.white,
//             '& + $track': {
//                 opacity: 1,
//                 backgroundColor: theme.palette.primary.main,
//                 borderColor: theme.palette.primary.main,
//             },
//         },
//     },
//     thumb: {
//         width: 12,
//         height: 12,
//         boxShadow: 'none',
//     },
//     track: {
//         border: `1px solid ${theme.palette.grey[500]}`,
//         borderRadius: 16 / 2,
//         opacity: 1,
//         backgroundColor: theme.palette.common.white,
//     },
//     checked: {},
// }))(Switch);
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
        _webkit_tap_highlight_color: 'transparent',
        // fontSize: '0.9vw'
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
        // borderBottom: '1px solid #75798e',
        opacity: 1,
    },

    textcontect: {
        color: 'white',
        margin: '1%',
        fontSize: '0.9vw'
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
        width: "100%",
        height: "100%",
        maxWidth: "200px !important",
        maxHeight: "110px !important"
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
        backgroundColor: '#A7A7A736',

        // borderBottom: '1px solid #75798e',
        opacity: 1,
        fontSize: '0.9vw'
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

function DesignTry(props) {
    // const { changeCardStep, managerComponent, changeDate, changeTo, changeEmail, changeFrom } = props;
    const { classes } = props;
    const { changeCardStep
        // , managerComponent, changeDate, changeTo, changeEmail, changeFrom 
    } = props;
    const [showCropper, setShowCropper] = React.useState(false)



    function onChangeHandlerProfile(event) {
        // 
        let reader = new FileReader();
        reader.onloadend = () => {
            props.changeLogo(reader.result)
        }
        reader.readAsDataURL(event)
        props.onChangeHandlerProfile(event);
    }

    const onChangeHandlerBusinessSignature=async(event)=> {
        let reader = new FileReader();
        reader.onloadend = () => {
            props.changeBusinessSignature(reader.result)
        }
        reader.readAsDataURL(event)
        const imageFile = event;
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        }
        try {
          const compressedFile = await imageCompression(imageFile, options);
          // await this.props.onChangeHandlerProfileBusinessSignature(compressedFile);
          await props.addImageFromDb({imageType:"businessSignature",file:compressedFile});
        } catch (error) {
          console.log(error);
        }
    
    
      }
    //background 
    const changeContactDetailsBackgroundColor = (color) => {
        props.changeContactDetailsColorText(color)
    };
    const handleSliderChangeLogoBorderRadiusLogo = (event, newValue) => {
        ;
        props.changeLogoBorderRadiusLogo(newValue);

    };
    const handleInputChangeLogoBorderRadiusLogo = (event) => {
        ;
        props.changeLogoBorderRadiusLogo(event.target.value);
    };
    async function openCropper1(event) {
        // setShowCropper(true)
        await props.changeImageSrc(event)
    };
    // const closeCropper = (event) => {
    //     props.changeImageSrc(null)
    //     // setShowCropper(false)
    // };






    //footer
    const changeContactDetailsColorText = (color) => {
        // 
        props.changeCompanyDetailsBackgroundColor(color)
    };
    // const handleSliderChange = (event, newValue) => {
    //     ;
    //     props.changeContactDetailsTextsize(newValue);

    // };
    // const handleInputChange = (event) => {
    //     ;
    //     props.changeContactDetailsTextsize(event.target.value);
    // };



    return (
        <>
            <p style={{ fontSize: "1vw", textAlign: "center" }}>Design</p>
            <hr style={{ height: "0.01vw" }} />
            {/* <div style={{ marginLeft: "15px", marginRight: "10px" }}> */}
            {props.managerComponent.cardStep === "image" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#imageCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08">Image</div>
                            <KeyboardArrowDownIcon id="keyBoard" />
                        </div>
                    </div>

                    {/* </div> */}

                </>
                :
                <div onClick={() => { $("#imageCard").slideDown("fast"); props.changeCardStep("image"); $("#logoCard").slideUp("fast"); $("#businessSignatureCard").slideUp("fast"); $("#footerColorCard").slideUp("fast"); $("#companyDetailsDesignCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08">Image</div>
                    <KeyboardArrowRightIcon />

                </div>

            }
            <div id="imageCard" style={{ display: "none" }} className="marginR10L15">
                <div className="row mt-1 mb-1">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}></FormLabel>
                    </div>
                    <div className="col-1">
                        <div class="form-check form-switch">
                            <input className={props.quote?props.quote.imageYN?"form-check-input flexSwitchCheckChecked2":"form-check-input flexSwitchCheckChecked3":"form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.imageYN : true} onChange={() => props.changeImageYN()} />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>

                        {/* <AntSwitch checked={props.quote ? props.quote.imageYN : true} onChange={() => props.changeImageYN()} /> */}
                    </div>

                </div>
                {props.quote.imageYN ? <>
                    <div className={classes.div} >
                        {/* rivki */}

                        <div class="image-upload" >
                            {/* <label for="fileInput"> */}
                            <img className="logoC" alt="" src={props.quote ? props.quote.imageImage ? props.quote.imageImage : <></> : <></>} onClick={() => openCropper1("backgroundImage")} />
                            {/* </label>
                            <input
                                type={"file"}
                                id="fileInput"
                                htmlFor="myInput"
                                accept="image/*"
                                style={{
                                    display: 'none',
                                    cursor: 'pointer',
                                    // width: this.props.quote.logoWidth,
                                }}
                                onChange={(e) => onChangeHandlerProfileBackgroundImage(e.target.files[0])}
                            /> */}

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
                </> : <></>}
                <div >
                    {props.quote2.imageSrc ?
                        props.quote2.imageSrc == "logo" ?
                            <Cropper cropperImage={props.quote.logo }  size={1}></Cropper> :
                            // <Cropper cropperImage={props.quote.imageImage} setCropperImage={props.changeImageImage} size={4} completeImageUrl={props.quote2.completeImageUrl} setCompleteImageUrl={props.changeCompleteImageUrl} rotationImage={props.quote2.rotationImage} setRotationImage={props.changeRotationImage} zoomImage={props.quote2.zoomImage} setZoomImage={props.changeZoomImage}></Cropper>
                            <Cropper cropperImage={props.quote.imageImage } setCropperImage={props.changeImageImage} size={4}></Cropper>
                        : <></>}
                </div>
                <br></br>
            </div>

            {props.managerComponent.cardStep === "logo" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#logoCard").slideUp("fast"); props.changeCardStep(""); }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08">Logo</div>
                            <KeyboardArrowDownIcon  />
                        </div>
                    </div>

                </>
                :
                <div onClick={() => { $("#logoCard").slideDown("fast"); props.changeCardStep("logo"); $("#imageCard").slideUp("fast"); $("#businessSignatureCard").slideUp("fast"); $("#footerColorCard").slideUp("fast"); $("#companyDetailsDesignCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08">Logo</div>
                    <KeyboardArrowRightIcon />

                </div>


            }
            <div style={{ display: "none" }} id="logoCard" className="marginR10L15">
                <div className="row mt-1 mb-1">
                    <div className="col-1">
                        <FormLabel className={classes.textcontect}></FormLabel>
                    </div>

                    <div className="col-1">
                        <div class="form-check form-switch">
                            <input className={props.quote?props.quote.LogoYOrN?"form-check-input flexSwitchCheckChecked2":"form-check-input flexSwitchCheckChecked3":"form-check-input flexSwitchCheckChecked3"} type="checkbox" id="flexSwitchCheckChecked" checked={props.quote ? props.quote.LogoYOrN : true} onChange={() => props.changeLogoYOrN()} />
                        </div>
                        {/* <AntSwitch class="bbb" checked={props.quote ? props.quote.LogoYOrN : true} onChange={() => props.changeLogoYOrN()} /> */}

                    </div>

                </div>
                {props.quote.LogoYOrN ? <>
                    <div className={classes.div}>
                        {/* rivki */}
                        <div class="image-upload">
                            <label for="logouug">
                                <img className="logoC" alt="" src={props.quote ? props.quote.logo ? props.quote.logo : logo2 : logo2} />
                            </label>
                            <input
                                type={"file"}
                                id="logouug"
                                htmlFor="myInput"
                                accept="image/*"
                                style={{
                                    display: 'none',
                                    cursor: 'pointer',
                                    //   width:this.props.quote?this.props.quote.logoWidth ? this.props.quote.logoWidth : '70':"70" 
                                }}
                                onChange={(e) => onChangeHandlerProfile(e.target.files[0])}
                            />

                        </div>

                        {/* <div class="image-upload">
                            <label for="logouug">
                                <img className="logoC" alt="" src={props.quote ? props.quote.logo ? props.quote.logo : logo2 : logo2} 
                                onClick={()=>openCropper1("logo")}
                                />
                            </label>

                        </div> */}
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

                    <FormLabel className={classes.textcontect}>Logo radius</FormLabel>
                    <Box flexDirection="row"
                        display="flex"
                        justifyContent="space-between"
                        width={'70%'}
                    >

                        <Box
                            width={'100%'}
                            alignSelf="center"
                        >

                            <Slider

                                value={props.quote ? props.quote.logoBorderRadiusLogo ? props.quote.logoBorderRadiusLogo : 0 : 0}
                                onChange={handleSliderChangeLogoBorderRadiusLogo}
                                aria-labelledby="input-slider"
                                className={classes.MuiSlider_root}
                                step={0.1}
                                marks
                                min={0}
                                max={300}
                                style={{ color: props.quote2.opacity ? "black" : "" }}
                            />
                        </Box>
                        <Box justifyContent="flex-end">
                            {/* </Grid> */}
                            {/* <Grid item> */}
                            <input
                                // className={classes.input}
                                defaultValue="0"
                                value={props.quote ? props.quote.logoBorderRadiusLogo ? props.quote.logoBorderRadiusLogo : 0 : 0}
                                margin="dense"
                                onChange={() => handleInputChangeLogoBorderRadiusLogo()}
                                inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: "150",
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                                className={classes.inputNumber}
                            />
                        </Box>
                    </Box>
                </> : <></>}
                <br></br>
            </div>


            {props.managerComponent.cardStep === "businessSignature" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#businessSignatureCard").slideUp("fast"); props.changeCardStep(""); }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08 ">Paper signature</div>
                            <KeyboardArrowDownIcon  />

                        </div>
                    </div>
                </>
                :
                <div onClick={() => { $("#businessSignatureCard").slideDown("fast"); props.changeCardStep("businessSignature"); $("#imageCard").slideUp("fast"); $("#logoCard").slideUp("fast"); $("#footerColorCard").slideUp("fast"); $("#companyDetailsDesignCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08 ">Paper signature</div>
                    <KeyboardArrowRightIcon />

                </div>


            }
            <div className="image" id="businessSignatureCard" style={{ display: "none" }} className="marginR10L15">
                <Box
                    alignSelf="center">
                    <div className={classes.div}>

                        <div class="image-upload mb-1 mt-2">
                            <label for="businessSignature">
                                <img className="logoC mb-1 mt-3" alt="" src={props.quote ? props.quote.businessSignature ? props.quote.businessSignature : deputationSignature : deputationSignature} />
                            </label>
                            <input
                                type={"file"}
                                id="businessSignature"
                                htmlFor="myInput"
                                accept="image/*"
                                style={{
                                    display: 'none',
                                    cursor: 'pointer',
                                    //   width:props.quote?props.quote.logoWidth ? props.quote.logoWidth : '70':"70" 
                                }}

                                onChange={(e) => onChangeHandlerBusinessSignature(e.target.files[0])}
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
            </div>


            {props.managerComponent.cardStep === "color footer" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#footerColorCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08">Footer color</div>
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>
                </>
                :
                <div onClick={() => { $("#footerColorCard").slideDown("fast"); props.changeCardStep("color footer"); $("#logoCard").slideUp("fast"); $("#businessSignatureCard").slideUp("fast"); $("#imageCard").slideUp("fast"); $("#companyDetailsDesignCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08">Footer color</div>
                    <KeyboardArrowRightIcon />

                </div>


            }
            <div className="marginR10L15" id="footerColorCard" style={{ display: "none" }} >
                <FormLabel className={classes.textcontect}>Footer color</FormLabel>

                <Box flexDirection="row"
                    display="flex"
                    justifyContent="space-between"
                >

                    <Box
                        width={'200%'}
                        alignSelf="center"
                    >
                        <input type="color" style={{ marginLeft: "1vw" }} onChange={(e) => { changeContactDetailsColorText(e.target.value) }} value={props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#DB0E65" : "#DB0E65"} />
                        {/* <HuePicker
                                        color={this.props.quote ? this.props.quote.companyDetailsBackgroundColor ? this.props.quote.companyDetailsBackgroundColor : "#42454A" : "#42454A"}
                                        onChangeComplete={this.changeContactDetailsColorText}
                                        width={180}
                                        height={6}
                                    /> */}


                    </Box>
                    {/* <Box justifyContent="">
                                <input
                                    id="standard-number"
                                    type="number"

                                    onFocus={(e) => e.currentTarget.placeholder = ''}
                                    onBlur={(e) => e.currentTarget.placeholder = (props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#DB0E65 " : "#DB0E65 ")}

                                    placeholder={props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#F7B500" : "#F7B500"}
                                    value={props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#F7B500" : "#F7B500"}
                                    defaultValue={props.quote ? props.quote.companyDetailsBackgroundColor ? props.quote.companyDetailsBackgroundColor : "#F7B500" : "#F7B500"}
                                    style={{ marginLeft: "-7vw" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    className={classes.inputNumberSliderColor}
                                />
                            </Box> */}

                </Box>
                <br></br>
            </div>


            {props.managerComponent.cardStep === "company details design" ?
                <>
                    <div className="bkgBl">
                        <div onClick={() => { $("#companyDetailsDesignCard").slideUp("fast"); props.changeCardStep("") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                            <div className="fs08">Company details</div>
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>



                    {/* <div className="DivConfi">
                            <b className="minTitleConCon3">font</b>
                            <select class="form-control2" id="exampleFormControlSelect11" onChange={(e) => props.changeContactDetailsFont(e.target.value)}>
                                <option value={"Cursive"} selected={props.contactDetails ? props.contactDetails.contactDetailsFont === 'Cursive' ? true : false : false}>Cursive</option>
                                <option value={"Fantasy"} selected={props.contactDetails ? props.contactDetails.contactDetailsFont === 'Fantasy' ? true : false : false}>Fantasy</option>
                                <option value={"Serif"} selected={props.contactDetails ? props.contactDetails.contactDetailsFont === 'Serif' ? true : false : false}>Serif</option>
                                <option value={"Monospace"} selected={props.contactDetails ? props.contactDetails.contactDetailsFont === 'Monospace' ? true : false : false}>Monospace</option>
                                <option value={"Sans-serif"} selected={props.contactDetails ? props.contactDetails.contactDetailsFont === 'Sans-serif' ? true : false : false}>Sans-serif</option>

                            </select>
                        </div> */}



                </>
                :
                <div onClick={() => { $("#companyDetailsDesignCard").slideDown("fast"); props.changeCardStep("company details design"); $("#logoCard").slideUp("fast"); $("#businessSignatureCard").slideUp("fast"); $("#imageCard").slideUp("fast"); $("#footerColorCard").slideUp("fast") }} className="configurationCard d-flex justify-content-between align-items-center marginR10L15">
                    <div className="fs08">Company details</div>
                    <KeyboardArrowRightIcon />
                </div>


            }
            <div className="marginR10L15" id="companyDetailsDesignCard" style={{ display: "none" }}>
                <div className="DivConfi">
                    <div> <b className="minTitleConCon3 fs08">font</b></div>
                    <FontPicker
                        apiKey="AIzaSyDak8Sv0dsaWx3jeKZlnLcFWYdJvMZr7Lc"
                        class="form-control2" id="exampleFormControlSelect11"
                        className="fonpicker1"
                        onChange={(e) => props.changeContactDetailsFont(e.family)}
                        activeFontFamily={props.quote ? props.quote.contactDetailsFont ? props.quote.contactDetailsFont : "" : ""
                        }

                    />


                </div>
                <div className="DivConfi">
                    <b className="minTitleConCon3 fs08">Text weight</b>
                    <select class="form-control2" id="exampleFormControlSelect11" onChange={(e) => props.changeContactDetailsTextWeight(e.target.value)}>
                        <option class="form-control3" value={"normal"} selected={props.contactDetails ? props.contactDetails.contactDetailsTextWeight === 'normal' ? true : false : false}>Normal</option>
                        <option class="form-control3" value={"bold"} selected={props.contactDetails ? props.contactDetails.contactDetailsTextWeight === 'bold' ? true : false : false}>Bold</option>

                    </select>
                </div>



                <>

                    <FormLabel className={classes.textcontect}>Text color</FormLabel>

                    <Box flexDirection="row"
                        display="flex"
                        justifyContent="space-between"
                    >

                        <Box
                            width={'200%'}
                            alignSelf="center"
                        >

                            <input type="color" style={{ marginLeft: "1vw" }} onChange={(e) => { changeContactDetailsBackgroundColor(e.target.value) }} value={props.quote ? props.quote.contactDetailsColorText ? props.quote.contactDetailsColorText : "#3A405E" : "#3A405E"} />

                        </Box>

                    </Box>
                    <br></br>
                </>
            </div>



        </>


    )
}


const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        quote2: state.quote,
        managerComponent: state.managerComponent.managerComponent,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeImageImage: (image) => dispatch(actions.setImageImage(image)),
    changeLogo: (image) => dispatch(actions.setLogo(image)),
    onChangeHandlerProfile: (image) => dispatch(actions.addNewImageFromDbLogo(image)),
    changeLogoYOrN: (image) => dispatch(actions.setLogoYOrN(image)),
    changeCardStep: (e) => dispatch(actions.setCardStep(e)),
    changeDate: () => dispatch(actions.setContactDetailsDate()),
    changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),
    changeFrom: (e) => dispatch(actions.setContactDetailsFrom(e)),
    changeContactDetailsFont: (e) => dispatch(actions.setContactDetailsFont(e)),
    changeContactDetailsTextWeight: (e) => dispatch(actions.setContactDetailsTextWeight(e)),
    changeContactDetailsColorText: (e) => dispatch(actions.setContactDetailsColorText(e)),
    changeContactDetailsTextsize: (e) => dispatch(actions.setContactDetailsTextsize(e)),
    changecontactDetailsYOrN: (e) => dispatch(actions.setContactDetailsYOrN(e)),
    changeCompanyDetailsBackgroundColor: (e) => dispatch(actions.setCompanyDetailsBackgroundColor(e)),
    changeBusinessSignature: (image) => dispatch(actions.setBusinessSignature(image)),
    onChangeHandlerProfileBusinessSignature: (image) => dispatch(actions.addNewImageFromDbBusinessSignature(image )),
    changeContactDetailsDateYN: () => dispatch(actions.setContactDetailsDateYN()),
    changeContactDetailsToYN: () => dispatch(actions.setContactDetailsToYN()),
    changeContactDetailsFromYN: () => dispatch(actions.setContactDetailsFromYN()),
    changeImageYN: (image) => dispatch(actions.setImageYN(image)),
    changeImageYOrN: (image) => dispatch(actions.setImageYOrN(image)),
    changeLogoWidth: (image) => dispatch(actions.setLogoWidth(image)),
    changeLogoHeight: (image) => dispatch(actions.setLogoHeight(image)),
    changeLogoBorderRadiusLogo: (image) => dispatch(actions.setLogoBorderRadiusLogo(image)),
    changeImageSrc: (image) => dispatch(actions.setImageSrc(image)),
    changeCompleteImageUrl: (image) => dispatch(actions.setCompleteImageUrl(image)),
    changeRotationImage: (image) => dispatch(actions.setRotationImage(image)),
    changeZoomImage: (image) => dispatch(actions.setZoomImage(image)),
    addImageFromDb: (image) => dispatch(actions.addImageFromDb(image)),









})

// export default connect(mapStateToProps, mapDispatchToProps)(DesignTry);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(DesignTry));

