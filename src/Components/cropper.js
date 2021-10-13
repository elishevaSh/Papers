import React, { useState, useCallback, useEffect, } from 'react'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { getOrientation } from 'get-orientation/browser'
import ImgDialog from './ImgDialog'
import ImgDialogCropper from './ImgDialogCropper'
import { getCroppedImg, getRotatedImage } from './canvasUtils'
import { styles } from './styles'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import imageCompression from 'browser-image-compression';
import autumnForest from './assets/autumn-forest.jpg';
import { actions } from '../Redux/Action';
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import zoomIcon from './assets/zoom.svg';
import rotationIcon from './assets/rotation.svg';
import './cropper.css';


const ORIENTATION_TO_ANGLE = {
    '3': 180,
    '6': 90,
    '8': -90,
}
function Transition(props) {
    return <Slide direction="up" {...props} />
}
export const Demo = (props) => {
    const [imageSrc, setImageSrc] = React.useState(props.cropperImage)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [show, setShow] = useState(true);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)

            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }
            // changeImageSrc(imageDataUrl)

            props.setCropperImage(imageDataUrl)
        }
    }

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                props.cropperImage,
                croppedAreaPixels,
                rotation
            )
            await setCroppedImage(croppedImage);
            fetch(croppedImage).then(r => {
                return r.blob();
            }).then(async (blobFile) => {

                let name = 'defaultImgSrc.png';
                var fileToUpload = await new File([blobFile], name, {
                    lastModified: new Date().getTime(),
                    type: blobFile.type,
                });
                let imgUrl = await URL.createObjectURL(fileToUpload);
                await props.setCropperImage(imgUrl)
                // await props.onChangeHandlerProfileBackgroundImage(fileToUpload)
                await props.addImageFromDb({ imageType: "backgroundImage", file: fileToUpload });
                await props.changeImageSrc(null)
            })
        } catch (e) {
            console.error(e)
        }
        closeCropper()
    }, [props.cropperImage, croppedAreaPixels, rotation])


    const onClose = useCallback(() => {
        setCroppedImage(null)
        props.changeImageSrc(null)
    }, [])
    async function closeCropper() {
        await props.changeImageSrc(null)
        // setImageSrc(null)
    }

    useEffect(() => {
        setImageSrc(props.quote.imageImage ? props.quote.imageImage : "")
    }, [props.quote.imageImage, props.cropperImage])



    return (<>

        <Dialog
            fullScreen
            open={show}
            onClose={closeCropper}
            TransitionComponent={Transition}
        >
            <div ><>
                {/* <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={props.onClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                
                    </Toolbar>
                </AppBar> */}
                <IconButton
                    color="inherit"
                    onClick={closeCropper}
                    aria-label="Close"
                >
                    <CloseIcon />
                </IconButton>
                {show ?
                    <div
                    // className="container"
                    // className="d-flex justify-content-center align-items-center"
                    >
                        {/* props.quote ? props.quote.imageImage ? props.quote.imageImage : autumnForest : autumnForest */}
                        {props.cropperImage ? (
                            // {props.quote2.imageSrc ? (
                            //  { props.quote.imageImage ? (
                            <React.Fragment>
                                {/* <div className="container"> */}
                                <div style={{ fontSize: "2.5vh", fontWeight: "bold" }} className=" d-flex justify-content-center align-items-center">Image Editor</div>
                                <div
                                // className={classes.cropContainer}
                                >
                                    <Cropper
                                        // image={props.quote.imageImage}
                                        image={props.cropperImage}
                                        // image={props.quote2.imageSrc}
                                        crop={crop}
                                        rotation={rotation}
                                        zoom={zoom}
                                        aspect={props.size / 1}
                                        onCropChange={setCrop}
                                        onRotationChange={setRotation}
                                        onCropComplete={onCropComplete}
                                        onZoomChange={setZoom}
                                    />
                                </div>
                                <div className=" d-flex justify-content-center x">
                                    <div
                                        className=" d-flex justify-content-around bkgCrop"
                                    >
                                        <div className=" d-flex justify-content-center" style={{ width: "18vw", padding: "1vh" }}
                                        >
                                            <img src={zoomIcon} style={{ width: "2vh", height: "2vh", marginTop: "2vh" }}></img>
                                            <Typography style={{ padding: "1vh", marginRight: "2vw" }}
                                                variant="overline"
                                            >
                                                Zoom
                                            </Typography>
                                            <Slider
                                                value={zoom}
                                                min={1}
                                                max={3}
                                                step={0.1}
                                                aria-labelledby="Zoom"
                                                // classes={{ root: classes.slider }}
                                                onChange={(e, zoom) => setZoom(zoom)}
                                            />
                                        </div>
                                        <div className=" d-flex justify-content-center" style={{ width: "18vw", padding: "1vh" }}
                                        >
                                            <img src={rotationIcon} style={{ width: "2vh", height: "2vh", marginTop: "2vh" }}></img>
                                            <Typography style={{ padding: "1vh", marginRight: "2vw" }}
                                                variant="overline"
                                            >
                                                Rotation
                                            </Typography>
                                            <Slider
                                                value={rotation}
                                                min={0}
                                                max={360}
                                                step={1}
                                                aria-labelledby="Rotation"
                                                onChange={(e, rotation) => setRotation(rotation)}
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center">
                                    <label for="fileInput" className=" d-flex justify-content-center align-items-center bkgUploadBtn cropperBtn">Upload new</label>
                                    <input
                                        type={"file"}
                                        id="fileInput"
                                        htmlFor="myInput"
                                        accept="image/*"
                                        style={{
                                            display: 'none',
                                            cursor: 'pointer',
                                        }}
                                        onChange={onFileChange}
                                    />
                                    <button className=" bkgorange cropperBtn"
                                        onClick={showCroppedImage}>Apply</button>
                                </div>

                            </React.Fragment>
                        ) : (
                            <>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className="backgroundImage" alt="" src={props.cropperImage} />
                                </div>
                                <label for="fileInput" className=" bkgorange cropperBtn">upload new
                                </label>
                                <input
                                    type={"file"}
                                    id="fileInput"
                                    htmlFor="myInput"
                                    accept="image/*"
                                    style={{
                                        display: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onChange={(e) => { onFileChange(e, props.changeImageSrc) }}
                                />
                            </>
                        )}
                    </div> :
                    <></>}
            </>
            </div>
        </Dialog>

    </>
    )
}
const mapDispatchToProps = (dispatch) => ({
    onChangeHandlerProfileBackgroundImage: (image) => dispatch(actions.addNewImageFromDbImage(image)),
    changeImageSrc: (image) => dispatch(actions.setImageSrc(image)),
      addImageFromDb: (image) => dispatch(actions.addImageFromDb(image)),


})
const mapStateToProps = (state) => {
    return {

        quote2: state.quote,
        quote: state.quote.quote,
    };
}

// export default Demo;
function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

// const StyledDemo = withStyles(styles)(Demo)

// const rootElement = document.getElementById('root')
// ReactDOM.render(<StyledDemo />, rootElement)

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Demo));
export default connect(mapStateToProps, mapDispatchToProps)(Demo);

