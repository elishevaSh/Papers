
// import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { useState, useEffect } from 'react';
// import '../Components/design.css';
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

function SelectMassage(props) {

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
    function handleClose() {
        setShow(false)
        props.changeMassageSuccessOrError(false);
    }

    return (
        <div class="d-md-flex align-items-end">


            <>

                {/* quote.quote.massageSuccessOrError */}
               

                < Modal class="model" show={props.quote.massageSuccessOrError} style={{margin:"0 !important"}} onHide={handleClose}>

                    {/* < img src={require("../Components/assets/Img.png")}></img> */}

                    {/* <img src="../Components/assets/newLogoLeader.png"></img> */}
                    <div class="d-flex justify-content-center align-items-start m0" >

                        {props.quote.MassageSuccessOrOops === "Oops" ?
                            < img id="imgSuccess" src={errorImage} />
                            :
                            < img id="imgSuccess" src={successImage} />
                        }




                        {/* <Modal.Title 

                        ></Modal.Title> */}
                        {/* <div class="d-flex justify-content-center -items-center"> */}

                        {/* </div> */}
                        {/* </Modal.Header> */}
                    </div>

                    <Modal.Body>
                        <h5 id="successOrOops">{props.quote.MassageSuccessOrOops}  </h5>
                        <input type="text" value={props.quote.MassageToShowSuccesOrError} style={{
                            width: '100%',
                            textAlign: 'center'
                        }} />
                    </Modal.Body>
                    {/* <Modal.Footer> */}
                    {/* <div class="d-flex justify-content-center d-flex align-items-end">
                        <Button style={{marginBottom:'2vh'}} onClick={handleClose}>
                            Close
          </Button>
                    </div> */}
                    {/* </Modal.Footer> */}

                </Modal>


            </>   </div>
           
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

})



export default connect(mapStateToProps, mapDispatchToProps)(SelectMassage);
