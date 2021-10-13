import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


function AlertEWU(props) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(true)
        }, 3000)

        clearTimeout(timeId)
    }
    );
    function handleClose() {
        props.changeExitAlertWithoutUpdate(false);
    }
    const exportAndClose = async () => {
        await props.changeExportYN("export");
        props.changeExitAlertWithoutUpdate(false)
    }
    const viewAndClose = async () => {
        var url = window.location;
        const paperName = (url.pathname.split('/')[3]);
        const userName = (url.pathname.split('/')[2]);
        window.open(`/${userName}/${paperName ? paperName : "new"}?user`)
        await props.changeExitAlertWithoutUpdate(false)
        await props.setExitAlert(false);

    }
    const editAndClose = async () => {
        await props.editQuote()
        props.changeExitAlertWithoutUpdate(false)
    }
    return (
        <div class="d-md-flex align-items-end">
            <>
                < Modal class="model" className="modelAlertEWU" show={props.exitAlertWithoutUpdate} style={{ margin: "0 !important" }} onHide={handleClose}>
                    <Modal.Body>
                        <div className="d-flex justify-content-center">
                            <h6 style={{ color: "black", fontWeight: "bold" }} >Do you want to {props.exitType === "goToView"? "view":"exit"} withouot save the paper?</h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn m-1" style={{ backgroundColor: "#DB0E65", color: "white" }} onClick={() => props.changeExitAlertWithoutUpdate(false)}>cancel</button>
                            {props.exitType === "goToView" ?
                                <button className="btn m-1" style={{ backgroundColor: "#DB0E65", color: "white" }} onClick={() => viewAndClose()}>view</button>
                                : <button className="btn m-1" style={{ backgroundColor: "#DB0E65", color: "white" }} onClick={() => exportAndClose()}>export</button>

                            }
                            <button className="btn m-1" style={{ backgroundColor: "#DB0E65", color: "white" }} onClick={() => editAndClose()}>update</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        </div>

    );
}



const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        exitAlertWithoutUpdate: state.managerComponent.managerComponent.exitAlertWithoutUpdate,
        exitType:state.managerComponent.managerComponent.exitType,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeExitAlertWithoutUpdate: (e) => dispatch(actions.setExitAlertWithoutUpdate(e)),
    editQuote: () => dispatch(actions.editQuote()),
    changeExportYN: (e) => dispatch(actions.setExportYN(e)),
    setExitAlert: (bol) => dispatch(actions.setExitAlert(bol)),

})



export default connect(mapStateToProps, mapDispatchToProps)(AlertEWU);

