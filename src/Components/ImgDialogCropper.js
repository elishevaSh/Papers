// import React from 'react'
// import { withStyles } from '@material-ui/core/styles'
// import Dialog from '@material-ui/core/Dialog'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
// import CloseIcon from '@material-ui/icons/Close'
// import Slide from '@material-ui/core/Slide'
// import Cropper from 'react-easy-crop'
// import Slider from '@material-ui/core/Slider'
// import Button from '@material-ui/core/Button'
// import { getOrientation } from 'get-orientation/browser'
// import ImgDialog from './ImgDialog'
// import { getCroppedImg, getRotatedImage } from './canvasUtils'
// import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
// import imageCompression from 'browser-image-compression';
// import autumnForest from './assets/autumn-forest.jpg';
// import { actions } from '../Redux/Actions/ContactAction';


// const styles = {
//   appBar: {
//     position: 'relative',
//   },
//   flex: {
//     flex: 1,
//   },
//   imgContainer: {
//     position: 'relative',
//     flex: 1,
//     padding: 16,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   img: {
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }

// function Transition(props) {
//   return <Slide direction="up" {...props} />
// }

// function ImgDialogCropper(props) {

//   handleClickOpen = () => {
//     this.setState({ open: true })
//   }

//   handleClose = () => {
//     this.setState({ open: false })
//   }

 
//     const { classes } = this.props
//     return (
//       <Dialog
//         fullScreen
//         open={!!props.img}
//         onClose={props.onClose}
//         TransitionComponent={Transition}
//       >
//         <div><>
//           <AppBar className={classes.appBar}>
//             <Toolbar>
//               <IconButton
//                 color="inherit"
//                 onClick={this.props.onClose}
//                 aria-label="Close"
//               >
//                 <CloseIcon />
//               </IconButton>
//               <Typography
//                 variant="title"
//                 color="inherit"
//                 className={classes.flex}
//               >
//                 Cropped image
//               </Typography>
//             </Toolbar>
//           </AppBar>
//           {/* <div className={classes.imgContainer}>
//             <img src={this.props.img} alt="Cropped" className={classes.img} />
//           </div> */}
//                 show ?
//             <div>
//             {/* props.quote ? props.quote.imageImage ? props.quote.imageImage : autumnForest : autumnForest */}
//             {this.props.quote2.imageSrc ? (
//               //  { props.quote.imageImage ? (
//               <React.Fragment>
//                 <div
//                 // className={classes.cropContainer}
//                 >
//                   <Cropper
//                     // image={props.quote.imageImage}
//                     image={this.props.quote2.imageSrc}
//                     crop={crop}
//                     rotation={rotation}
//                     zoom={zoom}
//                     aspect={4 / 1}
//                     onCropChange={setCrop}
//                     onRotationChange={setRotation}
//                     onCropComplete={onCropComplete}
//                     onZoomChange={setZoom}
//                   />
//                 </div>
//                 <div
//                 //  className={classes.controls}
//                 >
//                   <div
//                   //  className={classes.sliderContainer}
//                   >
//                     <Typography
//                       variant="overline"
//                     // classes={{ root: classes.sliderLabel }}
//                     >
//                       Zoom
//                             </Typography>
//                     <Slider
//                       value={zoom}
//                       min={1}
//                       max={3}
//                       step={0.1}
//                       aria-labelledby="Zoom"
//                       // classes={{ root: classes.slider }}
//                       onChange={(e, zoom) => setZoom(zoom)}
//                     />
//                   </div>
//                   <div
//                   // className={classes.sliderContainer}
//                   >
//                     <Typography
//                       variant="overline"
//                     // classes={{ root: classes.sliderLabel }}
//                     >
//                       Rotation
//                             </Typography>
//                     <Slider
//                       value={rotation}
//                       min={0}
//                       max={360}
//                       step={1}
//                       aria-labelledby="Rotation"
//                       // classes={{ root: classes.slider }}
//                       onChange={(e, rotation) => setRotation(rotation)}
//                     />
//                   </div>

//                   <Button
//                     onClick={showCroppedImage}
//                     variant="contained"
//                   // color="primary"
//                   >
//                     save
//                         </Button>
//                   <Button
//                     onClick={closeCropper}
//                     variant="contained"
//                   // color="primary"
//                   >
//                     close
//                         </Button>
//                 </div>
//                 {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
//                 <ImgDialogCropper img={this.props.quote2.imageSrc} onClose={onClose} />
//               </React.Fragment>
//             ) : (
//               <>
//                 <label for="fileInput">
//                   <img className="logoC" src={this.props.quote ? this.props.quote.imageImage ? this.props.quote.imageImage : autumnForest : autumnForest} />
//                 </label>
//                 <input
//                   type={"file"}
//                   id="fileInput"
//                   htmlFor="myInput"
//                   accept="image/*"
//                   style={{
//                     display: 'none',
//                     cursor: 'pointer',
//                     // width: this.props.quote.logoWidth,
//                   }}
//                   // onChange={(e)=>{saveImage(e)}}
//                   onChange={(e) => { onFileChange(e, this.props.changeImageSrc) }}
//                 />
//                 {/* <input type="file" onChange={onFileChange} accept="image/*" /> */}
//               </>
//               // <input  onChange={onFileChange} accept="image/*" />
//             )}
//           </div> :
//             <></>
//         </>
//         </div>
//       </Dialog>

//     )
  
// }

// const mapDispatchToProps = (dispatch) => ({
//   onChangeHandlerProfileBackgroundImage: (image) => dispatch({ type: 'ADD_NEW_IMAGE_FROM_DB_IMAGE', payload: image }),
//   changeImageImage: (image) => dispatch(actions.setImageImage(image)),
//   changeImageSrc: (image) => dispatch(actions.setImageSrc(image)),

// })
// const mapStateToProps = (state) => {
//   return {

//     quote2: state.quote,
//     quote: state.quote.quote,
//   };
// }


// export default withStyles(styles)(ImgDialogCropper)
