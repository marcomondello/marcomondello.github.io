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

    ranking_btn.style.color = "var(--grey-color)";
    ranking_btn.style.backgroundColor = "var(--box-color)";
    ranking_btn.style.border="none";

    squad_list_btn.style.color = "var(--second-color)";
    squad_list_btn.style.backgroundColor = "var(--box-color-dark)";
    squad_list_btn.style.borderBottom = "solid 2px var(--second-color)"

}
function showRanking(){
    document.getElementById('squad-list').style.display = "none";
    document.getElementById('ranking').style.display = "block";

    ranking_btn.style.color = "var(--second-color)";
    ranking_btn.style.backgroundColor = "var(--box-color-dark)";
    ranking_btn.style.borderBottom = "solid 2px var(--second-color)"

    squad_list_btn.style.color = "var(--grey-color)";
    squad_list_btn.style.backgroundColor = "var(--box-color)";
    squad_list_btn.style.border="none";
}


//events
more.onclick = function (){
    showDescription();
}
squad_list_btn.addEventListener('click', showSquadList);
ranking_btn.addEventListener('click', showRanking);


//onload
showRanking();