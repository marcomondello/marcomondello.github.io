//variables
const more = document.getElementById('more');
const description = document.getElementById('description');
const squad_list_btn = document.getElementById('squad-list-btn');
const ranking_btn = document.getElementById('ranking-btn');

//function
function showDescription(){
    if(description.style.display=="block"){
        description.style.display = "none"
    }else{
        description.style.display = "block";
    }
};

function showSquadList(){
    document.getElementById('squad-list').style.display = "block";
    document.getElementById('ranking').style.display = "none";
    ranking_btn.style.backgroundColor = "var(--second-color)";
    ranking_btn.style.paddingTop = "2px";
    ranking_btn.style.color = "var(--white-color)";
    squad_list_btn.style.backgroundColor = "var(--white-color)";
    squad_list_btn.style.paddingTop = "0px";
    squad_list_btn.style.color = "var(--first-color)";
}
function showRanking(){
    document.getElementById('squad-list').style.display = "none";
    document.getElementById('ranking').style.display = "block";
    squad_list_btn.style.backgroundColor = "var(--second-color)";
    squad_list_btn.style.paddingTop = "2px";
    squad_list_btn.style.color = "var(--white-color)";
    ranking_btn.style.backgroundColor= "var(--white-color)";
    ranking_btn.style.paddingTop = "0px";
    ranking_btn.style.color = "var(--first-color)";
}


//events
more.onclick = function (){
    showDescription();
}
squad_list_btn.addEventListener('click', showSquadList);
ranking_btn.addEventListener('click', showRanking);


//onload
showRanking();