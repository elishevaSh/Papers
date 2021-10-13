// import React from 'react';
// import data from '../data.json';
// import Home from './Home'
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// //import '../components/itemsList.css';
// import Button from '@material-ui/core/Button';
// import { blue, lime } from '@material-ui/core/colors';
// import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
// import Icon from '@material-ui/core/Icon';
// import EventIcon from '@material-ui/icons/Event';


// const List4= () => {
//     return (
//        <div>
//            <p>רשימת הצעות מחיר מעודכנות</p>
//     {data.priceOffer.map((item)=> <div>{item.id}</div>)}
//     <Home props={555}/>
//     <SvgIconsColor/>
//     <SimpleTable/>
//     <MyComponent/>

//        </div>
//     );
// }
// export default List4;
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   btnPaid: {
//     backgroundColor: 'green',
//   },
//   btnUnpaid: {
//     backgroundColor: 'blue',
//   }
// });

// function SimpleTable() {
//   const classes = useStyles();
//   return (
//     <><TableContainer component={Paper}>
//       <Table class="table" aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <EventIcon></EventIcon>
//             <TableCell >id</TableCell>
//             <TableCell align="right">offersId</TableCell>
//             <TableCell align="right">customerId</TableCell>
//             <TableCell align="right">startDate</TableCell>
//             <TableCell align="right">expirationDate</TableCell>
//             <TableCell align="right">finalPrice</TableCell>
//             <TableCell align="right">status</TableCell>
//             <TableCell align="right">image</TableCell>
//             <TableCell align="right">description</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.priceOffer.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell component="th" scope="row">
//                 {row.id}
//               </TableCell>
//               <TableCell align="right">{row.offersId}</TableCell>
//               <TableCell align="right">{row.customerId}</TableCell>
//               <TableCell align="right">{row.startDate}</TableCell>
//               <TableCell align="right">{row.expirationDate}</TableCell>
//               <TableCell align="right">{row.finalPrice}</TableCell>
//               <TableCell align="right">{row.status}</TableCell>
//               <TableCell align="right">{row.image}</TableCell>
//               <TableCell align="right">{row.description}</TableCell>
//               <Button variant="contained">Default</Button>{
//                 row.status == 'paid' ? <Button variant="contained" className={classes.btnPaid} color="primary">
//                   Paid
//               </Button> :
//                   <Button variant="contained" className={classes.btnUnpaid} color="primary">
//                     UnPaid</Button>
//               }
//               <Button variant="contained" color="secondary">
//                 Secondary
//       </Button>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
// </>
//   );
// }


// const useStylesIcon = makeStyles((theme) => ({
//   root: {
//     '& > svg': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

// function SvgIconsColor() {
//   const classes = useStylesIcon();

//   return (
//     <div className={classes.root}>
//       <HomeIcon />
//       <HomeIcon color="primary" />
//       <HomeIcon color="secondary" />
//       <HomeIcon color="action" />
//       <HomeIcon color="disabled" />
//       <HomeIcon style={{ color: green[500] }} />
//     </div>
//   );
// }



// const useStyles3 = makeStyles({
//   root: {
//     backgroundColor: 'red',
//     color: props => props.color,
//   },
// });

// function MyComponent(props) {
//   const classes = useStyles3(props);
//   return <div className={classes.root} placeholder="gygrstvs"/>;
// }

























import React, { Component } from 'react'
import { connect } from 'react-redux';
// import './Logo.css'
import { makeStyles } from '@material-ui/core/styles';
// import './sendEmail.css'

// import Switch from '@material-ui/core/Switch';
// import NumberInput from 'material-ui-number-input';

// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { withStyles } from '@material-ui/core/styles';

// import phone from './assets/phone2.png';
// import globe from './assets/globe2.png';
// import paper from './assets/paper2.png';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Slider from '@material-ui/core/Slider';
// import { HuePicker } from 'react-color';
// import Box from '@material-ui/core/Box';
import { actions } from '../Redux/Action';
// import hhhh from "./assets/align-left-solid.svg";
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
// import clsx from 'clsx';

// import Grid from '@material-ui/core/Grid';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import IconButton from '@material-ui/core/IconButton';
// import SettingsIcon from '@material-ui/icons/Settings';
// import Typography from '@material-ui/core/Typography';
// import { sendEmail } from '../Middleware/serverData';
// import $ from "jquery";
// import { isThisQuarter } from 'date-fns';
// import MultiSelectInput from './MultiSelectInput'

// const AntSwitch = withStyles((theme) => ({
//     root: {
//         padding: 0,
//         overflow: "hidden !important",
//         width: "2vw !important",
//         height: "2.3vh !important",
//         marginLeft: "10vw !important"
//     },
//     switchBase: {
//         padding: 2,
//         color: theme.palette.grey[500],
//         '&$checked': {
//             transform: 'translateX(12px)',
//             color: theme.palette.common.white,
//             '& + $track': {
//                 opacity: 1,
//                 backgroundColor: theme.palette.primary.main,
//                 borderColor: theme.palette.primary.main,
//             },
//         },
//     },
//     thumb: {
//         width: 12,
//         height: 12,
//         boxShadow: 'none',
//     },
//     track: {
//         border: `1px solid ${theme.palette.grey[500]}`,
//         borderRadius: 16 / 2,
//         opacity: 1,
//         backgroundColor: theme.palette.common.white,
//     },
//     checked: {},
// }))(Switch);

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden !important',

        '& .PrivateValueLabel-circle': {

            display: 'none'

        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },

    Logo_root_37: {
        background_color: '#4d5358'
    },

    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        // height: 19,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        // width: 100,
        height: 10,
        // textAlign: 'left',
        font: 'Bold 14px/19px Roboto',
        // letterSpacing: 0.17,
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
        //    width:13
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },

    RoundedUp: {

        borderRadius: ' 50px 0px 0px 0px '
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },

    textcontect: {
        color: 'white',
        margin: '1%'
    },
    toolbar: {
        paddingRight: '0px',

    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    textarea: {
        backgroundColor: '#3A405E'
    },

    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },

    inputNumber:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
    inputNumberSlider:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        // '-webkit-appearance': 'none',
        // margin:0
    },
    inputNumberSliderColor:
    {
        width: '60px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        marginLeft: '-1.5vw'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    row1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    createNewPage: {
        paddingRight: '5%',
        paddingLeft: '5%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contctDetails: {
        color: '#b6b6c9 !important',
        fontSize: '13px',
        marginLeft: '1vw',
        marginTop: '10px'
    }
});



// function CustomizedSwitches() {
//     const [state, setState] = React.useState({
//         checkedC: true,
//     });

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     return (
//         <>
//             <FormGroup>
//                 <Typography component="div">
//                     <Grid component="label" container alignItems="center" spacing={1}>
//                         <Grid item>
//                             <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
//                         </Grid>
//                     </Grid>
//                 </Typography>
//             </FormGroup>
//         </>
//     );
// }
class sendEmails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }



    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    changeEmailsToSendMulti = () => {
        // input = 0;
        // let num =
    }
    createInput() {
        this.setState({ index: this.state.index + 1 });
        const { classes } = this.props
        return (
            <>
                <input type="text"
                    width={2}
                    id={`email${this.state.index}`}
                    InputProps={{ className: classes.multilineColor }}
                    onChange={() => this.changeEmailsToSendMulti()}
                    className={classes.fieldTextStyle} />
            </>
        )
    }


    render() {
        const { classes } = this.props
        // const [arrToOver, setarrToOver] = useState(["a", 'a'])


        return (
            <>

                <div style={{ marginTop: "1vh" }}>{
                    this.props.quoteReducer.emailsToSendTemp.map((item, i) => (
                        <>
                            <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "1vh", backgroundColor: "#0A102E !important" }}>
                                <input type="text"
                                    style={{ backgroundColor: "#0A102E !important" }}
                                    width={2}
                                    id={`email${i}`}
                                    InputProps={{ className: classes.multilineColor }}
                                    onBlur={(e) => this.props.changeEmailsToSendTemp({ index: i, value: e.target.value })}
                                    defaultValue={this.props.quoteReducer.emailsToSendTemp[i]}
                                    className={classes.fieldTextStyle} />
                                <span onClick={(e) => this.props.deleteEmailsToSendTemp(i)}>x</span>
                            </div>
                        </>)
                    )}</div>
                <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "1vh" }}>
                    <div onClick={() => this.props.changeEmailsToSendIndexTemp()}>Add an email address +</div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    {this.props.quote._id ? <button onClick={() => this.props.sendEmail()}>send</button> : <button onClick={() =>
                    // alert("It is not possible to send an email to a paper that does not exist")
                    {
                        this.props.massageToShowSuccesOrError("It is not possible to send an email without a destination")
                        this.props.massageSuccessOrError(true);
                        this.props.massageSuccessOrOops("Oops");
                    }
                    }>send</button>}

                </div>

            </>
        )
    }


}

const mapStateToProps = (state) => {
    return {

        quote: state.quote.quote,
        quoteReducer: state.quote,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeEmailsToSendTemp: (e) => dispatch(actions.setEmailsToSendTemp(e)),
    changeEmailsToSendIndexTemp: () => dispatch(actions.setEmailsToSendIndexTemp()),
    sendEmail: (a) => dispatch(actions.sendEmail(a)),
    deleteEmailsToSendTemp: (e) => dispatch(actions.deleteEmailsToSendTemp(e)),
    massageToShowSuccesOrError: (e) => dispatch(actions.setMassageToShowSuccesOrError(e)),
    massageSuccessOrError: (e) => dispatch(actions.setMassageSuccessOrError(e)),
    massageSuccessOrOops: (e) => dispatch(actions.setMassageSuccessOrOops(e)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(sendEmails));
