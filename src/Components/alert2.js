import React, {useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { actions } from '../Redux/Action';
function mapStateToProps(state) {

    return {
        alert2Statuse: state.managerComponent.managerComponent.alert,
        quote: state.quote.quote,
        managerComponent: state.managerComponent.currentComponent,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        deleteQuotes: (a) => dispatch(actions.deleteQuotes()),
        setAlert2Statuse: (a) => dispatch(actions.setAlert2Statuse(a)),
        setActive: (a) => dispatch(actions.setActive(false)),
        getAllQuote: (a) => dispatch(actions.getallQuote()),
        changeClearQuote: () => dispatch(actions.setClearQuote()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(function Alert2Delete(props) {
    const [open, setOpen] = React.useState(false);
    const { alert2Statuse, setAlert2Statuse, index, deleteCard, deleteQuotes, setActive, changeClearQuote } = props;
    return (

        <div>

            <Dialog

                open={alert2Statuse.alert2Statuse !== 0}
                onClose={alert2Statuse.alert2Statuse === 0}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {alert2Statuse.alert2Statuse === 1 ? "Do you want to delete the page?" : alert2Statuse.alert2Statuse === 2 ? "Sucsses" : "Are you sure you want to delete this paper?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => { e.preventDefault(); deleteQuotes() }} color="#DB0E65">
                        Ok
          </Button>
                    <Button onClick={(e) => { e.preventDefault(); setAlert2Statuse(0); changeClearQuote(); }} color="#DB0E65" autoFocus>
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});