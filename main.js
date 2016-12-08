
///////////////////////////////////////
//  Module.exports will be the default 
//  entry from the compiler
///////////////////////////////////////
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