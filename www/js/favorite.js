favetab.addEventListener('click', fave);
addfave.addEventListener('click', addtolist);

function fave(result){
    homeName.classList.add('hide');
    resultdiv.classList.add('hide');
    resultpage.classList.add('hide');
    backbtn.classList.add("hide");
    addfave.classList.add("hide");
    mapArea.classList.add('hide');

}

function addtolist(){
    alert("Added to favorites!");
}