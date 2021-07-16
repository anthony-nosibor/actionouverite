import {ADD_NUMB_PLAYER} from '../Actions/types' ;


initStateNumbPlayer = 0;

const nombreJoueurs = (state = initStateNumbPlayer, action) => {
   switch (action.type) {
       case ADD_NUMB_PLAYER:
           return  action.payload ;
           break;
          
   
       default:
           return state
           break;
   }
}

export default nombreJoueurs