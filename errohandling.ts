function sub(a: Number, b:Number, c: Number): Number{
    dif: Number= a - b - c ;

    return dif
} 
try 
{
    sub(23, 30, 45)
} 
 catch(error) {
    console.log(error)
}