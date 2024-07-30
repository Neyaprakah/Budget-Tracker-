function addto(){
    let type=document.getElementById("type").value;
    let name=document.getElementById("name").value;
    let amnt=document.getElementById("amount").value;
    document.getElementById("table1").innerHTML=type;
    document.getElementById("table2").innerHTML=name;
    document.getElementById("table3").innerHTML="$"+amnt;
    document.getElementById("table4").innerHTML="<button onclick='del()'>Delete</button>";
}
function del(){
    document.getElementById("table1").innerHTML="";
    document.getElementById("table2").innerHTML="";
    document.getElementById("table3").innerHTML="";
    document.getElementById("table4").innerHTML="";
}