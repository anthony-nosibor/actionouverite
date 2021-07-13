import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

class Firebase{

    constructor(){
        this.auth = auth();
        this.db = firestore() ;
        this.storage = storage;
    }

    //all querys; "set" écrase et "update" met à jour

    queryUsers = () => firestore().collection("users") ;
    queryAddUser = (id, data) => firestore().collection("users").doc(id).set(data) ;
    queryUpdateUser = (id, data) => firestore().collection("users").doc(id).update(data) ;

    queryPlayer = () => firestore().collection("players") ;
    queryOnePlayer = (id) => firestore().collection("players").doc(`${id}`).get() ;
    queryAllPlayer = () => this.queryPlayer().orderBy('name', 'asc') ;
    queryAddPlayer = (player) => this.queryPlayer().add(player) ;
    queryDeletePlayer = (id) => firestore().collection("players").doc(`${id}`).delete() ;
    queryUpdatePlayer = (id, data) => firestore().collection("players").doc(id).update(data) ;
    

    storageImg = (id, name,uri) => storage().ref(`images/${id}/${name}`).putFile(uri);
    storageGetImg = (id, name) => storage().ref(`images/${id}/${name}`).getDownloadURL();
 




}
export default Firebase ;