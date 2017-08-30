function isGreaterThanZero(x)
{
	return x>=0;
}

function getTriangleArea(a,h)
{
	if(!isGreaterThanZero(a) || !isGreaterThanZero(h))
	{
		return "Nieprawid³owe dane";
	}
	return a*h/2;
}
console.log( getTriangleArea(10,6) )
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-10, 15);
var triangle3Area = getTriangleArea(7, 8);