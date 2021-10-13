// import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { useState, useEffect } from 'react';
// import '../Components/design.css';
// import '../Components/style.css';
import '../Components/massageSuccessUpdate.css';
import { Modal } from 'react-bootstrap';

function MassageSuccessUpdate(props) {

    var successImage = require("../Components/assets/success.svg");

    var errorImage = require("../Components/assets/error.svg");

    const [show, setShow] = useState(true);
    // const R = (elem) => object(document.querySelector(elem));
    // const R = function(elem) {
    //     object(document.querySelector(elem))
    //   };
    useEffect(() => {
        handleShow()
    }        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        // }
    );
    // const handleShow = () => setShow(true);


    function handleShow() {
        setShow(true)

    }
    function handleClose() {
        props.updateQuoteYOrN(false)
        // setShow(false)

    }

    return (
        // <div class="d-flex align-items-end">


        <>
{/* show= {props.quote.updateQuoteYOrN} */}
            {/* quote.quote.massageSuccessOrError */}

            <div className="modal-content-warp" style={{height: '0'}}>
                < Modal style={{height: '20vh!important',marginTop: '80vh',height:'0!important'}} class="model container" className="massage" show={props.quote.updateQuoteYOrN}>
                    <div class="row">
                        <Modal.Body style={{
                            fontSize: '2vh'
                        }} >
                            <div class="col-9" style={{ display: 'inline',height:'5vh!important' }} >File succefully updated</div>
                            <button  onClick={handleClose} style={{ backgroundColor: 'white', width: '2vh', margin:"0 !important"}} >x</button>
                        </Modal.Body>

                    </div>
                </Modal>

            </div>


        </>
        //  </div>

    );
}



const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
    };
}

const mapDispatchToProps = (dispatch) => ({
    updateQuoteYOrN: (a) => dispatch(actions.setUpdateQuoteYOrN(a)),

})



export default connect(mapStateToProps, mapDispatchToProps)(MassageSuccessUpdate);











