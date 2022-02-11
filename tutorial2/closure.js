var a=1;
var lorem= function()
{
    var a=2;
    return function()
    {
        return a+=1;
    }
}
var a=95;
var ipsum=lorem();
//ipsum=closure yapısı
ipsum();
ipsum();
console.log(ipsum());