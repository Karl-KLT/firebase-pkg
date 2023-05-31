// imports //
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, get, set, push, onChildAdded,onChildChanged,onChildRemoved } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
// validations //

export default class firebase {
    constructor(Config = null){
        if(!Config){
            throw new Error('Config not found')
        }else{
            this.app = initializeApp(Config);
        }

        // start DB
        this.DB_CLASS = class DB
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

                    get(ref(this.db,url.toString())).then((data)=>{
                        if(data){
                            if(url == '/'){
                                return {
                                    'data':data.val(),
                                    'length':Object.keys(data.val()).length
                                };
                            }else{
                                return data.val()
                            }
                        }else{
                            return 'not found any data'
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
                throw new Error('Auth will be added Soon')
            }


        }
    }


    DB(){return new this.DB_CLASS();}
    AUTH(){return new this.AUTH_CLASS();}

}




