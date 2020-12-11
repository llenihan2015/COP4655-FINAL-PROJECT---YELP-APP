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
    logoutbtn.classList.remove('hide');
    resulttab.classList.remove('active');
    resultdiv.classList.add('hide');
    resname.value = "";
    locationname.value ="";
    document.body.style.height = '600px';
    
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
    navigator.geolocation.getCurrentPosition(position => {
        var long = position.coords.longitude;
        var lati = position.coords.latitude;

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

    xhr.open("GET", "https://api.yelp.com/v3/businesses/search?term="+resname.value+"&latitude="+lati+"&longitude="+long);
    xhr.setRequestHeader("Authorization", "Bearer GwlxjEcOFdrbZeohh6vRfDOZKBkLIx10cobFqOyHbXjTSxiPg5Ucys6KLIndZxuaJln3MPHgCtlRCAgXufwjv9eKPwmMmDlW660rEu31Kd8dYP8zNtXmpcSZW4HRX3Yx");
    xhr.send();
});
}

function display(data){
    document.body.style.height = '1400px';
    resultdiv.classList.remove('hide');
    resulttab.classList.add('active');
    homeName.classList.add('hide');
    hometab.classList.remove('active');
    resultdiv.innerHTML=" ";

    var table = document.createElement('TABLE');
    table.style.margin = "auto";

    var tbody = document.createElement('TBODY');
    tbody.style.fontFamily ="Fredoka One";
    tbody.style.fontSize = "16px";
    tbody.style.textAlign = "center";
    //tbody.style.width = "300px"
    
    table.appendChild(tbody);

        for (var i=0; i<10; i++){
        var store_is;
        if (data.businesses[i].is_closed == true){
            store_is = "Open"
        }
        else{
            store_is = "Closed"
        } 

        var tr = document.createElement('TR');
        var td1 = document.createElement('TD');
        var td2 = document.createElement('TD');
        var td3 = document.createElement('TD');

        var img = document.createElement("img");
        img.src = data.businesses[i].image_url;
        img.style.width = "120px";
        img.style.height="120px";
        

        td1.appendChild(img);
        td2.appendChild(document.createTextNode(data.businesses[i].name));
        td3.appendChild(document.createTextNode(store_is));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        //resultdiv.innerHTML +="<tr><td><img src='"+data.businesses[i].image_url+"' width='100' height='100'>"+
          //                    "</td><td>"+data.businesses[i].name+"</td><td>"+store_is+"</td></tr>";
    }
    resultdiv.appendChild(table);
}
