/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.If it is a square, return its area. If it is a rectangle, return its perimeter.
area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16
*/
//P=2(l+w)=2·(6+10)=32
// A=wl=6·4=24
const areaOrPerimeter = (argX, argY) => (argX ===argY) ? argX * argY : 2* (argX+argY);


areaOrPerimeter(4,4);