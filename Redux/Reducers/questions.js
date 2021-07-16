import { State } from 'react-native-gesture-handler';
import {AFF_QUEST} from '../Actions/types' ;
import data from '../../Components/Questions/data' ;

const initStateList = data ;


const questions = (state = initStateList, action) => {
    console.log("action", action)
    return state
    }


export default questions ;