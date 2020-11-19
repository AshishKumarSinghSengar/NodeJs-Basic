var rect={
    perimeter: (x,y) => (2*(x+y)),
    area:(x,y) => (x*y)
};

function solveRect(l,b){
    console.log("Solving for rectange with l="+l+"and b"+b);
    if (l <= 0 || b<=0 )
    {
        console.log("Rectangle dimensions should be greater than 0");
    }
    else
    {
        console.log("the area of the rectange is "+rect.area(l,b));
        console.log("the perimeter of the rectangle is"+rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(2,5);
solveRect(-2,4);
solveRect(0,4);