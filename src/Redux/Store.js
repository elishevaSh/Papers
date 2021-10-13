import { createStore, combineReducers, applyMiddleware } from 'redux';
import quote from './reducers/paper.reducer';
import managerComponent from './reducers/managerCompRdu';
import { changePaperName,addNewImageFromDbPdf,addNewImageFromDbDigitalSignature, extractJwt,duplicate, font,sendEmailPdf,changeNumOfViews,addNewImageFromDb,chechIsSubcribe,getQuoteFromServer,editQuoteFromServer,createQuoteToServer,sendEmail,changeFromUNToUID,getAllQuoteFromServer,deleteQuotesFromCient,getAllContactFromServer } 
from './Middleware/serverData';
import {addImageFromDb} from './Middleware/fileMiddleware'; 
import { enableMapSet } from 'immer'
// import { createDevTools } from 'redux-devtools'
enableMapSet()
const reducer = combineReducers({ managerComponent, quote });
const store = createStore(reducer, applyMiddleware(addImageFromDb,getAllQuoteFromServer, font, sendEmailPdf, addNewImageFromDbDigitalSignature, addNewImageFromDb, createQuoteToServer, sendEmail
        , duplicate, addNewImageFromDbPdf, extractJwt, getQuoteFromServer, editQuoteFromServer, chechIsSubcribe, deleteQuotesFromCient, getAllContactFromServer, changeFromUNToUID, changePaperName, changeNumOfViews));
store.dispatch({ type: 'EXTRACT_JWT' });
store.dispatch({ type: 'FONT' });
store.dispatch({ type: 'CHANGE_UMTOUID' });
// store.dispatch({type:'CHECK_SUBCRIBE'});
window.store = store;
export default store;