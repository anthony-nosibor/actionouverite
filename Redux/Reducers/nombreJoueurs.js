import {ADD_NUMB_PLAYER} from '../Actions/types' ;


initStateNumbPlayer = "";

const numbplayers = (state = initStateNumbPlayer, action) => {
   switch (action.type) {
       case ADD_NUMB_PLAYER:
           return  action.payload ;
           break;
          
   
       default:
           return state
           break;
   }
}

export default numbplayers