resulttab.addEventListener('click', result)

function result(){
    document.body.style.height = '1400px';
    hometab.classList.remove('active');
    homeName.classList.add('hide');
    resultdiv.classList.remove('hide');
}