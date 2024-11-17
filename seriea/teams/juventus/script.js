//variables
const main_page = document.querySelector('.main-page');
const more = document.getElementById('more');
const description = document.getElementById('description');
const squad_list_btn = document.getElementById('squad-list-btn');
const ranking_btn = document.getElementById('ranking-btn');
//card
const player_card = document.querySelector('.player-card');
const players = document.querySelectorAll('.squad-member');
const back_card = document.getElementById('back');


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
    squad_list_btn.style.borderBottom = "solid 2px var(--second-color)";

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

//card function
function showPlayerCard() {
    player_card.style.display = 'block'; // Mostra la card
    main_page.classList.add('blur');  
}
function closeCard(){
    player_card.style.display = 'none';
    main_page.classList.remove('blur');
}


//events
more.onclick = function (){
    showDescription();
}
squad_list_btn.addEventListener('click', showSquadList);
ranking_btn.addEventListener('click', showRanking);

//card event
players.forEach(players => {
    players.addEventListener('click', showPlayerCard);
});

back_card.addEventListener('click', closeCard);


//onload
showRanking();
closeCard();

