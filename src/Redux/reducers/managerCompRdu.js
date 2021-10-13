import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    managerComponent: {
        alertStatuse:0,
        alert2Statuse:0,
        allContact: [],
        isCollapsed:false,
        currentComponent: "",
        currentUserId: null,
        completed: new Set(),
        activeStep: 0,
        stateQ: false,
        isSubcribe: null,
        userId: null,
        userPhone: null,
        userEmail: null,
        userWebsite: null,
        contactIde: null,
        idquote: null,
        cardStep: "",
        digitalSignatureConfirmation: false,
        displayYN: false,
        allContact: [],
        exportYN: "papers",
        subjectMail:"",
        bodyMail:"",
        exitAlert:false,
        loadedAjax1: 0,
        progressColor:"danger",
        paperDidUpdate:false,
        exitAlertWithoutUpdate:false,
        exitType:"",
    },

};

const agent = {
    setExitType(state, action) {
        state.managerComponent.exitType = action.payload;  
    },
    setExitAlertWithoutUpdate(state, action) {
        state.managerComponent.exitAlertWithoutUpdate = action.payload;  
    },
    setAlertStatuse(state, action) {
        state.managerComponent.alertStatuse = action.payload;  
    },
    setAlert2Statuse(state, action) {
        ;
        state.managerComponent.alert2Statuse = action.payload;  
    },
       setLastcontact(state, action) {
        state.managerComponent.allContact = action.payload
    },
    setPaperDidUpdate(state, action) {
        state.managerComponent.paperDidUpdate = action.payload;  
    },
    setLoadedAjax1(state, action) {
        state.managerComponent.loadedAjax1 = action.payload
    },
   
    setProgressColor(state, action) {
        state.managerComponent.progressColor = action.payload
    },
    setExitAlert(state, action) {
        state.managerComponent.exitAlert = action.payload

    },
    setSubjectMail(state, action) {
        state.managerComponent.subjectMail = action.payload

    },
    setBodyMail(state, action) {
        state.managerComponent.bodyMail = action.payload

    },
    setCardStep(state, action) {
        state.managerComponent.cardStep = action.payload

    },
    setStepper(state, action) {

        state.managerComponent.currentComponent = action.payload

    },
    setQid(state, action) {

        state.managerComponent.idquote = action.payload

    },
    setUseridm(state, action) {
        ;
        state.managerComponent.userId = action.payload
            ;
    },
    setUserPhone(state, action) {
        ;
        state.managerComponent.userPhone = action.payload
            ;
    },
    setUserEmail(state, action) {
        ;
        state.managerComponent.userEmail = action.payload
            ;
    },
    setUserWebsite(state, action) {
        ;
        state.managerComponent.userWebsite = action.payload
            ;
    },
    setContactide(state, action) {
        ;
        state.managerComponent.contactIde = action.payload
            ;
    },
    setHandleStep(state, action) {


        // handleComplete()
        ;
        console.log("this.props")
        // console.log(managerComponent)
        // managerComponent.changeCurrentComponent(null)
        // managerComponent.loadPartOfData();

        const newCompleted = new Set(state.managerComponent.completed);
        newCompleted.add(state.managerComponent.activeStep);
        state.managerComponent.completed = newCompleted;


        state.managerComponent.activeStep = action.payload
        // const newCompleted = new Set(state.managerComponent.completed);
        // newCompleted.add(state.managerComponent.activeStep);
        // // setCompleted(newCompleted);
        // state.managerComponent.completed = state.managerComponent.completed.size

        // state.managerComponent.completed=new Set().add(action.payload)
        // browserHistory.location.pathname.replace("/");
        // browserHistory.replace(label);
        // browserHistory.listen("uuuuu");
        // const ff=browserHistory.location.pathname;
        // browserHistory.push(ff+"ggggg");
        // browserHistory.goForward("ggggg");
        // managerComponent.setActiveStep(step);
        //   setActiveStep(step);

        // if(managerComponent.managerComponent.stateQ)
        // {
        //    managerComponent.setCompleted(step)
        //    setCompleted(step)
        // }
        // 
    },
    setActiveStep(state, action) {

        state.managerComponent.activeStep = action.payload

    }, setCompleted(state, action) {

        state.managerComponent.completed = action.payload

    },
    setStateQ(state, action) {

        state.managerComponent.stateQ = action.payload

    },
    setCurrentuserid(state, action) {
        state.managerComponent.currentUserId = action.payload;
    },

    setDigitalSignatureConfirmation(state, action) {
        state.managerComponent.digitalSignatureConfirmation = action.payload;
    },
    setDisplayYN(state, action) {
        state.managerComponent.displayYN = action.payload;
    },
    setExportYN(state, action) {
        state.managerComponent.exportYN = action.payload;
    },
    setAllContact(state, action) {
        state.managerComponent.allContact = action.payload;
    },
    setIsCollapsed(state, action){
        state.managerComponent.isCollapsed = action.payload;
    }

};

export default produce((state, action) => createReducer(state, action, agent), initialState);

