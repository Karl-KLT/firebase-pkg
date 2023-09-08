// maded by karl :), open source firebase helper
// imports //
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, get, set, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
// validations //

export default class firebase{

    constructor(Config = null){
        if(!Config || typeof(Config) != "object"){
            if(!Config){
                throw new Error('Config not found')
            }else{
                throw new Error('Config must be an object')
            }
        }else{
            this.app = initializeApp(Config);
        }

        // start DB
        this.RTDB_CLASS = class DB
        {
            constructor(){
                this.db = getDatabase(this.app);
            }

            Promise(func){
                return Promise.resolve(func);
            }


            // main methods //
            get(url = '/'){
                return this.Promise(
                    get(ref(this.db, url.toString())).then((data)=>{

                        if(data.val()){
                            if(url == '/'){
                                return {
                                    'data': data.val(),
                                    'length': Object.keys(data.val()).length
                                };
                            }else{
                                return data.val()
                            }
                        }else{
                            return 'not found any data in this route'
                        }
                    })


                )
            }
        
            push(url = '/',data = {}){
                return this.Promise(

                    set(ref(this.db,url.toString()),data).then(()=>{
                        return {
                            'message':'successfully',
                            "ok":true
                        }
                    }).catch((err)=>{
                        return {
                            'message':'failed|error => ' + err,
                            "ok":false
                        }
                    })

                )
            }

            pushWithFakeKey(url = '/',data = {}){
                return this.Promise(

                    push(ref(this.db,url.toString()),data)
                    .then(()=>{
                        return {
                            'message':'successfully',
                            "ok":true
                        }
                    }).catch((err)=>{
                        return {
                            'message':'failed|error => ' + err,
                            "ok":false
                        }
                    })

                )
            }

            // events
            onAdded(url = '/',callback){
                onChildAdded(ref(this.db,url.toString()),(data)=>{
                    callback(data.val())
                })
            }

            onUpdated(url = '/',callback){
                onChildChanged(ref(this.db,url.toString()),(data)=>{
                    callback({
                        data:data.val(),
                        key:data.key
                    })
                })
            }

            onDeleted(url = '/',callback){
                onChildRemoved(ref(this.db,url.toString()),(data)=>{
                    callback({
                        data:data.val(),
                        key:data.key
                    })
                })
            }
            // end events

        }

        // end DB
        this.AUTH_CLASS = class AUTH
        {
            constructor(){
                this.auth = getAuth(this.app)
            }

            Promise(func){
                return Promise.resolve(func)
            }

            createCustomUser(email, password){

                return this.Promise(
                    createUserWithEmailAndPassword(this.auth, email, password).then((data)=>{
                        return {
                            'message':'successfully',
                            "ok":true
                        }
                    }).catch(({code})=>{

                        if(code == "auth/email-already-in-use"){
                            return 'email already exists, try another email'
                        }

                    })
                )

            } 

            login(email, password){
                return this.Promise(
                    signInWithEmailAndPassword(this.auth, email, password).then((data)=>{
                        return {
                            'message':'successfully',
                            "ok":true,
                            'user': {
                                name: data.user.displayName,
                                email: data.user.email,
                                photoURL: data.user.photoURL,
                                phoneNumber: data.user.phoneNumber,
                                emailVerified: data.user.emailVerified,
                                id: data.user.uid,
                                date: data.user.metadata
                            }
                        }
                    }).catch(({code})=>{

                        if(code == "auth/too-many-requests"){
                            return 'please wait, too many requests'
                        }

                        if(code == "auth/user-not-found"){
                            return 'user not found'
                        }

                        if(code == "auth/wrong-password"){
                            return 'wrong password'
                        }

                    })
                )
            }


        }
    }


    RTDB(){return new this.RTDB_CLASS();}
    AUTH(){return new this.AUTH_CLASS();}

}




