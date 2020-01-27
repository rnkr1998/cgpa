

function load()
{
    var option=`<table>
    <tr>
                <th>COURSE CODE</th> 
                 <th>SUBJECT</th>
                 <th>GRADE</th> 
                 <th>CREDITS</th>
        </tr>`;
    var x=new XMLHttpRequest();
    x.open("GET","https://raw.githubusercontent.com/rnkr1998/cgpa/master/cgpa.json",true);
x.onreadystatechange=function()
{
    if(x.readyState==4)
    {
      console.log("server response genereated") ;
    }
  
    
}
x.send();
x.onload=function()
{
    var data=JSON.parse(x.responseText);
    
    console.log(data);

    
    for(k in data)
    {
      
        option +=
      
       `<tr>
                  <td>`+data[k].Code+`</td>
                  <td>`+data[k].Name+`</td>
                  <td>`+data[k].Grade+`</td>
                  <td>`+data[k].Credits+`</td>
        <tr>`



    }
    
    
    option += `</table>`
    document.getElementById("content").innerHTML=option;       
       
  }
}

function myfun()
{
  var a=document.getElementById("content").innerHTML=" ";
}