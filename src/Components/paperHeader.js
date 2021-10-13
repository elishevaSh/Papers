
// import React, { useState } from 'react';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import '../Components/design.css';
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import path from './assets/pathDropdown.svg';
import t from './assets/tttt.svg'
import logoPaper from './assets/newLogoPaper.svg'
import { actions } from '../Redux/Action';
import { BsFillGrid3X3GapFill, BsChevronDown } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import './paperHeader.css'
import managerComponents from './managerComponents';

function PaperHeader(props) {


    var url = window.location;
    var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
    const [show, setShow] = useState(true);

    useEffect(() => {

    }

    );
    function handleClose() {
        setShow(false)
        props.changeMassageSuccessOrError(false);
        console.log(props.quote.massageSuccessOrError)
        console.log(props.quote.MassageToShowSuccesOrError)
    }

    function changeCollapse() {

        props.isCollapsed(!props.managerComponent.isCollapsed)

    }

    return (
        <>
            <div className="d-none d-sm-block">
                <Navbar className="header" style={{ backgroundColor: 'white', height: '7vh', border: "1px solid #E5E6E5" }}>
                    <Navbar.Collapse className="justify-content-start" >
                        <bottun className="header-Btn-menu" onClick={() => changeCollapse()}><img src={path}></img></bottun>
                        <bottun className="header-Btn-logo"><img className="header-img" src={logoPaper}></img></bottun>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" >
                        <bottun className="header-Btn-name"><p>
                            {/* <MdKeyboardArrowDown style={{fill:"black"}}/> */}
                            {userName}</p></bottun>
                        <bottun className="header-Btn-menu"><BsFillGrid3X3GapFill /></bottun>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </>

    );
}



const mapStateToProps = (state) => {
    return {
        quote: state.quote.quote,
        allContact: state.managerComponent.managerComponent.allContact,
        managerComponent: state.managerComponent.managerComponent,
    };
}

const mapDispatchToProps = (dispatch) => ({
    isCollapsed: (e) => dispatch(actions.setIsCollapsed(e)),
})



export default connect(mapStateToProps, mapDispatchToProps)(PaperHeader);
