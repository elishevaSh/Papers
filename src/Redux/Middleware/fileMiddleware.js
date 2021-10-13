import { actions } from '../Action';
import keys from '../../config/env/keys';
import $ from 'jquery';
export const TokenToString = document.cookie && document.cookie.includes(keys.JWT) ? document.cookie.split(";")
    .filter(s => s.includes(keys.JWT))[0].split("=").pop() : null;
var url = window.location;
var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);

export const addImageFromDb = ({ dispatch, getState }) => next => action => {
    console.log("kkkkk");
    console.log(action.type);
    if (action.type === 'ADD_IMAGE_FROM_DB') {
        dispatch(actions.setUpdateEnabled(true));
        var myFile = new FormData()
        myFile.append("file", action.payload.file, action.payload.file.name)
        console.log("jjjjjjjjjj");
        $.ajax({
            xhr: () => {
                let xhr = new XMLHttpRequest();
                xhr.upload.onloadstart = function () {
                    console.log("Upload has started.");
                };

                xhr.upload.onprogress = (event) => {
                    let uploadedBytes = (event.loaded / event.total) * 100;
                    console.log(`Uploaded ${uploadedBytes} bytes`);
                    dispatch(actions.setLoadedAjax1(uploadedBytes));
                    dispatch(actions.setProgressColor("danger"));
                };

                xhr.upload.onload = () => {
                    console.log("Upload completed successfully.");
                };

                xhr.upload.onerror = function () {
                    console.log(`Error during the upload: ${xhr.status}.`);
                };
                return xhr;
            },

            type: "POST",
            url: keys.API_URL_FILES + userName + "/uploadMultipleFiles",
            headers: { Authorization: TokenToString },
            data: myFile,
            processData: false,
            contentType: false,
            success: function (response) {
                dispatch(actions.setUpdateEnabled(false));
                if (action.payload.imageType === "logo")
                    dispatch(actions.setLogoUrl(response.filesData.file.url));
                if (action.payload.imageType === "businessSignature")
                    dispatch(actions.setBusinessSignatureUrl(response.filesData.file.url));
                if (action.payload.imageType === "backgroundImage")
                    dispatch(actions.setImageUrl(response.filesData.file.url));

            },
            error: function (err) {
                dispatch(actions.setMassageToShowSuccesOrError("There was a problem uploading the file, please try again"));
                dispatch(actions.setMassageSuccessOrError(true));
                dispatch(actions.setMassageSuccessOrOops("Oops"));
            },
        });


    }
    return next(action)
}