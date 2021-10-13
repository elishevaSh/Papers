
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { actions } from '../../Redux/actions/Action';
import { red } from '@material-ui/core/colors';

function mapStateToProps(state) {

  return {

    alertStatuse: state.alert.alertStatuse,
  };
}
function mapDispatchToProps(dispatch) {

  return {
    setAlertStatuse: (status) => dispatch(actions.setalertStatuse(status)),
    deleteCard: (insdex) => dispatch(actions.deleteCard(insdex)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(function AlertDelete(props) {
  const [open, setOpen] = React.useState(false);
  const { alertStatuse, setAlertStatuse, index, deleteCard } = props;

  useEffect(
    () => {
      setTimeout(() => alert("email:"), 800);
    }
  )[alertStatuse]



  return (
    <div>

      <Dialog

        open={alertStatuse.alertStatuse !== 0}
        onClose={alertStatuse.alertStatuse === 0}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {alertStatuse.alertStatuse === 5 ? "the email sent succses" : alertStatuse.alertStatuse === 6 ? "the email dont sent" : " "}
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={(e) => { e.preventDefault(); setAlertStatuse(0); setActive(); deleteContact() }} color="primary">
            Ok
          </Button>
          <Button onClick={(e) => { e.preventDefault(); setAlertStatuse(0) }} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});