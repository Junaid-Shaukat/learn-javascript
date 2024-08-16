// Immediately Invoked Function Expressions ( IIFE )

(function DB(){
    //Named IIFE
    console.log(`DB Connected`);
})();
// ()()  // the first () is the function definition and the second () is the execution of the function


// this gives error because we do not end the first function by putting semicolon ;
((name)=>{
    //Unnamed IIFE with parameters
    console.log(`DB Connected 2 ${name}`);
    
})('junaid')