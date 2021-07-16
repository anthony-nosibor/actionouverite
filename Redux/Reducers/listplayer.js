import { State } from 'react-native-gesture-handler';
import {AFF_LISTE_PLAYER} from '../Actions/types' ;

const initStateList = [] ;


const listPlayer = (state = initStateList, action) => {
    console.log("action", action)
    switch (action.type) {
        case AFF_LISTE_PLAYER:
            return [...state, action.payload] ;
            break;
    
        default:
            return state ;
            break;
    }
}

export default listPlayer ;