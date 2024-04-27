var dis=document.getElementById("display")
function getbtn(val)
{
    console.log(val);
    dis.value += val
}
function ans(){
    var val1=dis.value
    var ans=eval(val1)
    dis.value=ans
    console.log(dis);
}
function clr(){
    dis.value = ""
}