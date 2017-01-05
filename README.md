# node-es7-babel-template

It is an node.js used ES7 template, compiled by babel 

Medium story: [[Nodejs] BBB, Babel Burger Boilerplate](https://hackernoon.com/nodejs-bbb-babel-burger-boilerplate-b74107eff049 "[Nodejs] BBB, Babel Burger Boilerplate").

[](https://hackernoon.com/nodejs-bbb-babel-burger-boilerplate-b74107eff049)


## Install

```
$ git clone git@github.com:wahengchang/node-es7-babel-template.git
$ npm install
```


## Usage

Edit main.js (default file, could be changed in es7compiler)
```js
module.exports = function() {

    //write ES7 code here
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
