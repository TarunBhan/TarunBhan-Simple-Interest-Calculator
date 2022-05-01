 var i=0; 
 var ans=0;  
 show= document.createElement('p');
function updateValue(value)
{
   ans=value;
   i= "<div class='user-input'> "+ value+"</div>";
    document.getElementById("interest").innerHTML=value+'%';
}

function compute()
{
    var p =document.getElementById('principal').value;
    if(p == "")
    {
        alert('Enter a positive number');document.getElementById("principal").focus();
        return false;
    }
    else{
        if (p <= 0) { //Here check is a positive number
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }
    var time= document.getElementById("years").value;
    var HDB = new Date().getFullYear(); 
    
    var future= parseInt(HDB,10)+parseInt(time,10);
   var sol= (ans* time * p)/100;

    document.getElementById('text').innerHTML="If You Deposit <mark>"+p+" </mark>  <br>   at an interest rate of<mark> " +ans+"</mark> <br>You will receive an amount of <mark> "+ sol+"</mark> <br>in the year<mark>"+future+"</mark>";
}       

        