import {combineReducers} from "redux" ;
import listplayer from "./listplayer" ;
import modal from "./modal" ;
import nombreJoueurs from './nombreJoueurs' ;
import navigation from './navigation' ;

export default combineReducers({listplayer, modal, nombreJoueurs,navigation }) ;
