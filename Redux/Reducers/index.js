import {combineReducers} from "redux" ;
import listPlayer from "./listplayer" ;
import modal from "./modal" ;
import nombreJoueurs from './nombreJoueurs' ;
import navigation from './navigation' ;
import questions from './questions' ;


export default combineReducers({listPlayer, modal, nombreJoueurs,navigation, questions }) ;
