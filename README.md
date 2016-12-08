# node-es7-babel-template

It is an node.js used ES7 template, compiled by babel 



## Install

```
$ git clone git@github.com:wahengchang/node-es7-babel-template.git
$ npm install
```


## Usage

Edit main.js (default file, could be changed in es7compiler)
```js
module.exports = function() {

    (async function() {
        var sleep = function(para) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    console.log('para: ', para)
                    resolve(para * para)
                }, 1000)
            })
        }

        var result = await sleep(2);
        console.log('result: ', result);
    }());

}
```

run the script 
```js
$ npm start
```