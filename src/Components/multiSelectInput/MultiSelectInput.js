import React, { useState, useEffect, useRef } from 'react';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';
import { defaultTheme } from 'react-select';
// import { stateOptions } from '../data';
import CreatableSelect from 'react-select/creatable';
import { actions } from '../../Redux/Action';
import { connect } from 'react-redux';
import '../style.css'
import '../viewNewOnePage.css';
import './MultiSelectInput.css'
import validator from 'validator';
/*888888888*/
const { colors } = defaultTheme;
// const components = {
//     DropdownIndicator: null,
// };

// const selectStyles = {
//     control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
//     menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
// };
const animatedComponents = makeAnimated();

function MultiSelectInput(props) {
    // const { name } = props;
    const [isOpen, setIsOpen] = useState();
    const [flag, setFlag] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [valus, setValue] = useState(null);
    // const [emailsIndex, setEmailsIndex] = useState(0);
    // const [show, setShow] = useState(false);
    // const [hasExtraValue, setHasExtraValue] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const inputEl = useRef(null);
    useEffect(() => {
        // if (props.type === "search") {
        props.getAllContact()
        // }
        // else if (props.props.placeholder === "companyDescribe" && flag === true) {
        //     setSelectedValue(null);
        // }
        setFlag(true)
    }, [selectedValue]);
    useEffect(() => {
        if (props.managerComponent.exportYN === "send") {
            sendAndClose()
        }
    }, [props.managerComponent.exportYN]);

    // const toggleOpen = () => {
    //     setIsOpen(!isOpen);
    // };

    const orderOptions = values => {
        return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
    };
    const blurCreatableSelect = () => {
        props.editQuote();
    }
    const onChange = async (value, { action, removedValue }) => {
        let r = inputEl
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue) {
                    if (removedValue.isFixed) {
                        return;
                    }
                }
                break;
            case 'clear':
                value = options.filter(v => v.isFixed);
                break;
        }
        let len = value.length;
        if (len > 0 && !validator.isEmail(value[len - 1].value)) {
            value.splice(len - 1, 1)
        }
        value = orderOptions(value);
        setValue(value)
        if (len > 0) {
            props.changeTo(value[0].label)
            for (let index = 1; index < value.length; index++) {
                props.changeTo(props.quote.contactDetailsTo + ", " + value[index].label)
            }
        }


    }





    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            // border: "1px dotted black",
            color: 'black',
            opacity: 0.8,

            // padding: 20,
        }),
        control: (provided) => ({
            ...provided,
            width: '95',
            background: "#F6F6FA",

        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: 'black',

        })
    }

    async function sendAndClose() {
        //  await valus.map((item, i) => (
        // props.massageToShowSuccesOrError("It is not possible to send an email without a destination")
        // props.massageSuccessOrError(true);
        // props.massageSuccessOrOops("Oops");
        if (valus) {
            await valus.map((item, i) => {
                props.changeEmailsToSendTemp({ index: i, value: item.value })
            })
            props.changeEmailsToSendIndexTemp(valus.length);
            let r = props.quote.emailsToSendIndexServer + valus.length;
            props.changeEmailsToSendIndexServer(r);
            await props.sendEmail(props.paperName);
            setValue(null);

        }
        props.changeExportYN("papers")
        // handleClose();
    }
    const toDelete = () => {
        alert(inputEl);
    }
    const { options } = props;
    // console.log("777777valus" + valus);
    return (
        <><div className="d-flex-sm p-2" style={{ marginTop: "1vh" }}>
            {/* <div style={{size:"22px"}}>
                <Button class="bkg" variant="primary" onClick={handleShow} style={{ margin: "2px !important" }}>export</Button>
            </div>
            <div class="d-flex align-items-end">
                <Modal class="model" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
              select contact to export
                    </Modal.Header>
                    <Modal.Body> */}

            <div className="d-none d-sm-block ">
                <div className="d-flex justify-content-center "> select contact to export</div>
            </div>
            <div className="d-block d-sm-none ">
                <div className="d-flex justify-content-left titel2" style={{ fontSize: 'large', fontWeight: "600", marginTop: "3vh !important", marginleft: "10vw !important" }}> Message content</div>
            </div>
            <CreatableSelect

                onChange={onChange}
                // defaultValue={{ value: props.quote.contactDetailsTo, label: props.quote.contactDetailsTo }}
                // ((e)=>e.target)
                onBlur={blurCreatableSelect}
                isMulti
                options={options}
                styles={customStyles}
                closeMenuOnSelect={false}
                components={animatedComponents}
                className="basic-multi-select "
                classNamePrefix="select"
                ref={inputEl}
            // placeholder={'Please select from the list or add you own'}
            />

            {/* <hr style={{ position: "relative" }} className="d-flex justify-content-center subjectAndBodyEmail"></hr> */}
            <input style={{ textAlign: 'left', backgroundColor: '#F5F5F5', position: "relative", marginTop: "3vh" }} className="d-flex justify-content-center subjectAndBodyEmail"
                onChange={(e) => { props.setSubjectMail(e.target.value) }} value={props.managerComponentR.subjectMail}
                onFocus={(e) => e.currentTarget.placeholder = ''}
                onBlur={(e) => e.currentTarget.placeholder = "Subject"}
                placeholder="Subject" />
            <textarea
                className="d-flex subjectAndBodyEmail bodyEmail"
                style={{ backgroundColor: '#F5F5F5', direction: "auto !important", resize: 'none', color: "black", position: "relative" }}
                onBlur={(e) => { props.setBodyMail(e.target.value) }}
                placeholder={"The Body Of The Message"}
                dir="auto"
            >{props.managerComponentR.bodyMail}</textarea>
            {/* <hr style={{ position: "relative" }} className="d-flex justify-content-center subjectAndBodyEmail"></hr> */}
        </div>
        </>
    );
}
export default connect(
    (state) => {
        return {
            managerComponent: state.managerComponent.managerComponent,
            managerComponentR: state.managerComponent,
            quote: state.quote.quote,
            quoteReducer: state.quote,
        }
    },
    (dispatch) => {
        return {
            getAllContact: (e) => dispatch(actions.getallContact()),
            changeEmailsToSendTemp: (e) => dispatch(actions.setEmailsToSendTemp(e)),
            changeEmailsToSendIndexTemp: (e) => dispatch(actions.setEmailsToSendIndexTemp(e)),
            changeEmailsToSendIndexServer: (e) => dispatch(actions.setEmailsToSendIndexServer(e)),
            sendEmail: (a) => dispatch(actions.sendEmail(a)),
            changeExportYN: (e) => dispatch(actions.setExportYN(e)),
            setBodyMail: (e) => dispatch(actions.setBodyMail(e)),
            setSubjectMail: (e) => dispatch(actions.setSubjectMail(e)),
            changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),
            editQuote: (a) => dispatch(actions.editQuote(a)),

        }
    })(MultiSelectInput)
// styled components

const Menu = props => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return (
        <div
            css={{
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
                marginTop: 8,
                position: 'absolute',
                zIndex: 2,

            }}
            {...props}
        />
    );
};
const Blanket = props => (
    <div
        css={{
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            position: 'fixed',
            zIndex: 1,
        }}
        {...props}
    />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div css={{ position: 'relative' }}>
        {target}
        {isOpen ? <Menu>{children}</Menu> : null}
        {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
);
const Svg = p => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...p}
    />
);
const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
        <Svg>
            <path
                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </Svg>
    </div>
);
const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
        <path
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </Svg>
);

