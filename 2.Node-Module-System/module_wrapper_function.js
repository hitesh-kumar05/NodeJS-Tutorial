
/*Module Wrapper Function: Under the hood, NodeJS does not run our code directly, 
it wraps the entire code inside a function before execution. This function is termed as Module Wrapper Function.*/
//  (function(exports,require,module,__filename,dirname){
    console.log(__filename);
    console.log(__dirname);
    var url='http://mylogger.io/log';
    function log(message){
        console.log(message);
    }
    module.exports=log;
//  });

// (function (exports,require,module,__filename,__dirname){
//     var name ="hitesh";
//     console.log(name);
  
//   })();
  
