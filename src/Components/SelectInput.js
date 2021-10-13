import React, { useState, useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import { defaultTheme } from 'react-select';
import { actions } from '../Redux/Action';
import { connect } from 'react-redux';
import CreatableSelect from 'react-select/creatable';

const { colors } = defaultTheme;
// const components = {
//   DropdownIndicator: null,
// };

// const selectStyles = {
//   control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
//   menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
// };
const animatedComponents = makeAnimated();

// export function AnimatedMulti() {

//   return (
//     <Select
// closeMenuOnSelect={false}
// components={animatedComponents}
// defaultValue={[colourOptions[4], colourOptions[5]]}
// isMulti
// options={props}
// />
//   );
// }
// const State = { isOpen: Boolean, value: Object };
function SelectInput(props) {
  const { name } = props;
  const [isOpen, setIsOpen] = useState();
  const [flag, setFlag] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

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
    if (props.type === "search") {
      props.getAllContact()
    }
    // else if (props.props.placeholder === "companyDescribe" && flag === true) {
    //     setSelectedValue(null);
    // }
    setFlag(true)
  }, []);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const onSelectChange = selectedOption => {
    setSelectedValue(selectedOption.value);
    props.changeTo(selectedOption.value)
    // this.props.changeTo(selectedOption.value)
    // let fieldNameAndContent = {};
    // fieldNameAndContent = { 
    // "name": props.props.placeholder,
    //  "content": selectedOption.value }
    // props.setCurrentField(fieldNameAndContent)
  };





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



  const { options } = props;
  console.log("op" + options);
  return (
    <>
      {/* <div style={{width:"10vw", zIndex:"5"}}> */}
      {/* {selectedValue} */}
      {/* {props.quote2.approachedToServerYesOrNo ?
        <Massage></Massage>
        :
        null
      } */}
      <CreatableSelect
        // value={options.filter((option) => {
        //   if (selectedValue)
        //     return option.value === selectedValue;
        //   else if (props.props && props.props.selectedValue && !selectedValue) {
        //     setSelectedValue(props.props.selectedValue);
        //     return option.value === props.props.selectedValue;
        //   }
        // })}
        onChange={onSelectChange}
        // isMulti
        defaultValue={{ value: props.quote.contactDetailsTo, label: props.quote.contactDetailsTo }}
                options={options}
        styles={customStyles}
        closeMenuOnSelect={false}
        components={animatedComponents}

        className="basic-multi-select"
        classNamePrefix="select"
      // isMulti
      />
      {/* </div> */}
    </>
  );
}
export default connect(
  (state) => {
    return {
      managerComponent: state.managerComponent.currentComponent,
      quote: state.quote.quote
    }
  },
  (dispatch) => {
    return {
      getAllContact: (e) => dispatch(actions.getallContact()),
      changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),
    }
  })(SelectInput)
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
const mapDispatchToProps = (dispatch) => ({
  changeTo: (e) => dispatch(actions.setContactDetailsTo(e)),

})