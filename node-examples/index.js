const rectangle = require('./rectangle');
var rect=require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectange with l="+l+"and b"+b);

    rect(l,b, (err,rectangle) => {
        if(err)
        {
            console.log("ERROR", err.message);
        }
        else{
            console.log("the area of the rectangle of dimensions = "+rectangle.area());
            console.log("the perimeter of rectangle is = "+rectangle.perimeter())
        }
        console.log("This statement is after the call to rect()")
    });
}

solveRect(2,4);
solveRect(2,5);
solveRect(-2,4);

solveRect(0,4);