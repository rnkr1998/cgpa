var s;

function load()
{
    var option="<table>";
    
    $.getJSON("cgpa.json", function(json)
    {
      console.log(json);
    })
    
    /*
    for(k in data)
    {
        console.log(data[0]);
        option +=
        `<tr>`+data.Code+`<td>`+data.Code[k]+`<td></tr>
        <tr>`+data.Name+`<td>`+data.Name[k]+`<td></tr>
        <tr>`+data.Grade+`<td>`+data.Grade[k]+`<td></tr>
        <tr>`+data.Credits+`<td>`+data.Credits[k]+`<td></tr>`
         
    }
    option += "</table>"
    document.getElementById("content").innerHTML=option;       
       
*/
}