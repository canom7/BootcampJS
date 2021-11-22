document.getElementById("avatar").src="/img/avatar.jpg";
document.getElementById("name").value = "Mi nombre";

var lastname= document.getElementById("lastname").value = "Mi apellido";

document.querySelector("#update").addEventListener('click', function(event){
    console.log(lastname);
})
