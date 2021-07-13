import {NAVIGATION} from '../Actions/types' ;

const initState = null;


const navigation = (state = initState, action) => {
    console.log("action", action)
    switch (action.type) {
        case NAVIGATION:
            return action.payload ;
            break;
    
        default:
            return state ;
            break;
    }
}

export default navigation ;