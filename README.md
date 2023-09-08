# firebase-pkg ( first version (V0.1) ) -> docs

### welcome to "open-source firebase-pkg", this pkg makes the beginners use firebase tools by easier and more faster in (webSites (only)), u can use "database" and "authentication" for now and for free 😄



## let's started:
- to start u need to link script tag into ur project:
  - ``` 
      <script type="module" src="https://karl-klt.github.io/firebase-pkg/index.js">
        // 
      </script>
    ```

- for setting ur config ur can write ur config data as an object, u will find ur config data in ur project settings on firebase:

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

## link of docs pages . . .
- [RTDB (real-time database)](./docs/RTDB.md)
- [AUTH (auth)](./docs/AUTH.md)
   
