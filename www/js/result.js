resulttab.addEventListener('click', result)

function result(){
    document.body.style.height = '1190px';
    hometab.classList.remove('active');
    homeName.classList.add('hide');
    resultdiv.classList.remove('hide');
}