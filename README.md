# firebase-pkg (first version)

### welcome to "firebase-pkg", the pkg makes the beginners use firebase tools by easier and more faster in (webSites (only)), u can use "database" and "authentication" for now 😄



## let's started:
- to start u need to link script tag into ur project header:
  - ``` 
    <script type="module" src="https://karl-klt.github.io/firebase-pkg/index.js"></script>
    ```
- to set ur config u need to set ur config here, like that . . . :
  - ``` 
     let FB = new firebase({
        apiKey: "xxxxxx.xxxxxx.xxxxxx",
        authDomain: "xxxxxx.xxxxxx.xxxxxx",
        databaseURL: "xxxxxx.xxxxxx.xxxxxx",
        projectId: "xxxxxx.xxxxxx.xxxxxx",
        storageBucket: "xxxxxx.xxxxxx.xxxxxx",
        messagingSenderId: "xxxxxx.xxxxxx.xxxxxx",
        appId: "xxxxxx.xxxxxx.xxxxxx",
    })
    ```
    
## now u can start:
- to write ur first code with pkg u need, that code will give u all in ur DB 👍: 
  - ``` 
    FB.DB().get(undefined).then((data)=>{
        console.log(data)
    }) 
    ```
   
