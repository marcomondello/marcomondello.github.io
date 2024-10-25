let more = document.getElementById('more');
let description = document.getElementById('description');

more.onclick = function (){
    description_visibility();
}


function description_visibility(){
    if(description.style.display=="block"){
        description.style.display = "none"
    }else{
        description.style.display = "block";
    }
};