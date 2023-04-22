function enter()
{
    document.getElementById('text').innerHTML="I am Jithin Reji";
    
}
function leave()
{
    document.getElementById('text').innerHTML="Hi";
}



var time=new Date();
var today=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()+"  "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
// var date=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear();
// document.getElementById('date').innerHTML=date;
document.getElementById('time').innerHTML=today;
function refresh()
{
    var time=new Date();
    var ap,hrs,min,sec;
    hrs=time.getHours();
    min=time.getMinutes()
    sec=time.getSeconds()
    if(hrs>12)
    {
        hrs-=12;
        ap="PM";
    }
    else
    {
        ap="AM";
    }
    if(min<10)
    "0"+min;
    
    var today=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()+"       "+hrs+":"+min+":"+sec+" "+ap;
    document.getElementById('time').innerHTML=today;
    setTimeout(function(){refresh()},1);
        
    
}