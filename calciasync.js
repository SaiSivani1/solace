const async = require("async");
function add(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    } ); 
} 
function sub(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a - b);
        }, 2000);
    } ); 
}  
function div(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a / b);
        }, 2000);
    } ); 
} 
function mult(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a * b);
        }, 2000);
    } ); 
} 
function perc(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((a / b) * 100);
        }, 2000);
    } ); 
} 
async function output(c, a, b) {
    switch(c){
        case "add":
            const ans =  await add(a, b);
            console.log(ans);
            break;
        case "sub":
             ans =  await sub(a, b);
            console.log(ans);
             break;
        case "mult":
             ans =  await mult(a, b);
            console.log(ans);
             break;
        case "div":
             ans =  await div(a, b);
            console.log(ans);
            break;
         case "perc":
             ans =  await perc((a / b) * 100);
            console.log(ans);
            break;  

    } 
}
output('add', 10, 20);

      
     
      
    
