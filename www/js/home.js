loginbtn.addEventListener('click' , login);
logoutbtn.addEventListener('click', logout);
searchbtn.addEventListener('click', search);
gpsbtn.addEventListener('click', gps);
hometab.addEventListener('click', login);


//show navbar and the elements of the home when logged in
function login(){
    navi.classList.remove('hide');
    loginbtn.classList.add('hide')
    appName.classList.add('hide');
    studname.classList.add('hide');
    homeName.classList.remove('hide');
    logoutbtn.classList.remove('hide')
    resultdiv.innerHTML=" ";
    resulttab.classList.remove('active');
    resname.value = "";
    locationname.value ="";

}

 //hide elements of the home tab
function logout(){
    navi.classList.add('hide');
    loginbtn.classList.remove('hide')
    appName.classList.remove('hide');
    studname.classList.remove('hide');
    homeName.classList.add('hide'); 
    logoutbtn.classList.add('hide');
    resultdiv.innerHTML=" ";
    resname.value = "";
    locationname.value ="";
    
}


function search(){

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
        var data = JSON.parse(this.responseText)
        resultdiv.classList.remove('hide');
        display(data);
    }
    });

    xhr.open("GET", "https://api.yelp.com/v3/businesses/search?term="+resname.value+"&location="+locationname.value);
    xhr.setRequestHeader("Authorization", "Bearer GwlxjEcOFdrbZeohh6vRfDOZKBkLIx10cobFqOyHbXjTSxiPg5Ucys6KLIndZxuaJln3MPHgCtlRCAgXufwjv9eKPwmMmDlW660rEu31Kd8dYP8zNtXmpcSZW4HRX3Yx");

    xhr.send();

}

function gps(){
    
 
}



function display(data){
    alert("printing results");
    resultdiv.classList.remove('hide');
    resulttab.classList.add('active');
    homeName.classList.add('hide');
    hometab.classList.remove('active');
    
    resultdiv.innerHTML=data.businesses[1].name;
    resultdiv.innerHTML=data.businesses[2].name;
    resultdiv.innerHTML=data.businesses[1].name;
    resultdiv.innerHTML=data.businesses[2].name;
    resultdiv.innerHTML=data.businesses[1].name;
    resultdiv.innerHTML=data.businesses[2].name;
}
