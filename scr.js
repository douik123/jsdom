var deletebuttons = document.querySelectorAll(".fa-xmark");
var heartbuttons = document.querySelectorAll(".fa-heart");
var plusbuttons = document.querySelectorAll(".fa-circle-plus");
var minusbuttons = document.querySelectorAll(".fa-circle-minus");
var total=document.querySelector(".total")

Array.from(deletebuttons).map((el)=>{
    el.addEventListener("click",()=>{
        el.parentElement.parentElement.remove();

    });
})
Array.from(heartbuttons).map((el)=>{
    el.addEventListener("click",()=>{
     el.classList.toggle("red");
    });
})
Array.from(plusbuttons).map((el)=>{
    el.addEventListener("click",()=>{
     el.nextElementSibling.innerHTML=parseInt(el.nextElementSibling.innerHTML)+1
     var price=el.parentElement.nextElementSibling.innerHTML.replace("$","");
     console.log(total);
     total.innerHTML= parseFloat(total.innerHTML.replace("$","")) + parseFloat(price) + "$";
    });
})
Array.from(minusbuttons).map((el)=>{
    el.addEventListener("click",()=>{
        if(el.previousElementSibling.innerHTML>0)
        {
     el.previousElementSibling.innerHTML=parseInt(el.previousElementSibling.innerHTML)-1
     var price=el.parentElement.nextElementSibling.innerHTML.replace("$","");
     console.log(total);
     total.innerHTML= (parseFloat(total.innerHTML.replace("$","")) - parseFloat(price)) + "$";
    }
     else
     {
        alert("error");
     }
    });
})