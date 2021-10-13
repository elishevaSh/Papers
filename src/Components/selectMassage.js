import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
import React, { useState, useEffect } from 'react';
import '../Components/style.css';
import '../Components/viewNewOnePage.css';
import { Modal } from 'react-bootstrap';
import MultiSelectInput from './multiSelectInput/MultiSelectInput'


export const getEmailsContacts = (contacts) => {
    let emailsContacts = [];
    if (contacts && contacts.length) {
        contacts.map((contact) => {
            emailsContacts.push({ value: contact.email, label: contact.email })
        })
    }
    return emailsContacts;
}

function Massage(props) {

    var successImage = require("../Components/assets/success.svg");

    var errorImage = require("../Components/assets/error.svg");


    const [show, setShow] = useState(true);
    // const R = (elem) => object(document.querySelector(elem));
    // const R = function(elem) {
    //     object(document.querySelector(elem))
    //   };
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(true)
        }, 3000)

        clearTimeout(timeId)
    }


        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        // }
    );
    // useEffect(() => {
    //     $('.modal-content').addClass("height70");

    // }, []);
    function handleClose() {
        setShow(false)
        props.changeMassageSuccessOrError(false);
    }
    function sendAndClose() {
        handleClose()
        props.changeExportYN("send");
    }

    return (
        <div class="d-flex align-items-end">


            <>

                {/* quote.quote.massageSuccessOrError */}
                <div className="modal-content-warp">

                    < Modal class="selectModel" style={{ innerHeight: '50vh !important' }} className="TheHeight70" show={props.quote.massageSuccessOrError} onHide={handleClose}>
                        <Modal.Body>
                            <div class="d-flex justify-content-end">

                                <div className="btn" style={{ borderRadius: "4px", margintop: '1vh !important', cursor:"pointer", fontSize:"2.8vh" }} onClick={handleClose}>
                                    x
</div>
                            </div>
                            <div style={{ height: '50vh !important' }} class="d-flex justify-content-center d-flex align-items-start">
                                {props.allContact &&
                                    <MultiSelectInput options={getEmailsContacts(props.allContact)} style={{ backgroundColor: '#F6F6FA', border: 'aliceblue', zIndex: "10", width: '20vw !important', zIndex: "10" }} paperName={props.paperName}></MultiSelectInput>
                                }
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div class="d-flex justify-content-around">
                                <button onClick={sendAndClose} className="btn bkgG" style={{ borderRadius: "4px", color: "#FFFFFF", marginBottom: '2vh', fontSize: "1vw" }}>
                                    send
                           </button>
                            </div>

                        </Modal.Footer>

                    </Modal>
                </div>

            </>
        </div>

    );
}



const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        allContact: state.managerComponent.managerComponent.allContact,

    };
}

const mapDispatchToProps = (dispatch) => ({
    changeMassageSuccessOrError: () => dispatch(actions.setMassageSuccessOrError(false)),
    changeExportYN: (e) => dispatch(actions.setExportYN(e)),
})



export default connect(mapStateToProps, mapDispatchToProps)(Massage);
