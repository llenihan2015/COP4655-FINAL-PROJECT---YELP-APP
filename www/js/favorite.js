var navi = document.querySelector('#nav');
var loginbtn = document.querySelector('#loginbtn');
var appName = document.querySelector('#appName');
var studname = document.querySelector('#studname');
var homeName = document.querySelector('#homeName');
var logoutbtn = document.querySelector('#logoutbtn');
var searchbtn = document.querySelector('#searchbtn');
var gpsbtn = document.querySelector('#gpsbtn');
var resulttab = document.querySelector('#resulttab');
var resname = document.getElementById('resname');
var locationname = document.getElementById('locationname');
var favetab = document.querySelector('#favetab');

favetab.addEventListener('click', fave)

function fave(){
    homeName.classList.add('hide');
}