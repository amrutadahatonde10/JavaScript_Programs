var input = document.querySelector("input");

var data = [
    {name: "amruta", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2Q6NjX5Zjokvo9rmauZLA9xFouX0sT9GvqrUyGZEYMGFpnGnjL1C3ChhC_mtXeW7t_Q&usqp=CAU"},
    {name: "siddhi", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2Q6NjX5Zjokvo9rmauZLA9xFouX0sT9GvqrUyGZEYMGFpnGnjL1C3ChhC_mtXeW7t_Q&usqp=CAU"},
    {name: "anuja", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2Q6NjX5Zjokvo9rmauZLA9xFouX0sT9GvqrUyGZEYMGFpnGnjL1C3ChhC_mtXeW7t_Q&usqp=CAU"},
    {name: "amru", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2Q6NjX5Zjokvo9rmauZLA9xFouX0sT9GvqrUyGZEYMGFpnGnjL1C3ChhC_mtXeW7t_Q&usqp=CAU"}

]

var pers = ""; 
data.forEach(function (elem) {
     pers += `<div class="person">
     <div class="img">
        <img src="${elem.src}"
          alt="">
     </div>
    <h4>${elem.name}</h4>
</div>`
}) 

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newusers = "";
    matching.forEach(function (elem) {
        newusers += `<div class="person">
        <div class="img">
           <img src="${elem.src}"
             alt="">
        </div>
       <h4>${elem.name}</h4>
   </div>`;
}) 

document.querySelector(".people").innerHTML = newusers;

})