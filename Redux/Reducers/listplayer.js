import {AFF_LISTE_PLAYER} from '../Actions/types' ;

const initStateList = [] ;


const exemple = (state = initStateList, action) => {
    console.log("action", action)
    switch (action.type) {
        case AFF_LISTE_PLAYER:
            return action.payload ;
            break;
    
        default:
            return state ;
            break;
    }
}

export default exemple ;