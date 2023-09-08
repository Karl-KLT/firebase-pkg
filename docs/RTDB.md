# firebase-pkg ( first version (V0.1) ) -> real-time database

### welcome to "open-source firebase-pkg", this pkg makes the beginners use firebase tools by easier and more faster in (webSites (only)), u can use "database" and "authentication" for now and for free 😄



## how can i use real-time database?

- ### we can start with how can i push some data . . .
  - #### first we need to set ur config firebase . . .
    - ```
        <script type="module" src="https://karl-klt.github.io/firebase-pkg/index.js">
            let fb = new firebase({
                apiKey: "xxxxxx.xxxxxx.xxxxxx",
                authDomain: "xxxxxx.xxxxxx.xxxxxx",
                databaseURL: "xxxxxx.xxxxxx.xxxxxx",
                projectId: "xxxxxx.xxxxxx.xxxxxx",
                storageBucket: "xxxxxx.xxxxxx.xxxxxx",
                messagingSenderId: "xxxxxx.xxxxxx.xxxxxx",
                appId: "xxxxxx.xxxxxx.xxxxxx",
            })
        </script>
        ``` 
- ### now we can start, to push some data u can write this code.
    - ```
        fb.RTDB().push('/',{
            'key': 'value'
        }).then((res)=>{console.log(res)})
      ``` 

    - #### this code will be send 'key' and 'value' when u write this code, just write url for link that be save data.

- ### to set random child before data, u can write this code.

    - ```
        fb.RTDB().pushWithFakeKey('/',{
            'key': 'value'
        }).then((res)=>{console.log(res)})
      ```

    - #### this code will be send 'key' and 'value' after random child key, just write url for link that be save data.




- #### to get new data, u can write this code.
    - ```
        fb.RTDB().get('/').then((data)=>{console.log(data)})
      ```

    - #### this code will be get all data in ur route (url), just write url for link.


# real-time will be show in docs soon . . .



## link of docs pages . . .
- [go back](../README.md)
- [AUTH (auth)](./docs/AUTH.md)
   