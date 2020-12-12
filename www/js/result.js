resulttab.addEventListener('click', result)

function businessId(id){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
        var result = JSON.parse(this.responseText)
        resultdiv.classList.remove('hide');
        displayResult(result);
    }
    });
    xhr.open("GET", "https://api.yelp.com/v3/businesses/"+id);
    xhr.setRequestHeader("Authorization", "Bearer GwlxjEcOFdrbZeohh6vRfDOZKBkLIx10cobFqOyHbXjTSxiPg5Ucys6KLIndZxuaJln3MPHgCtlRCAgXufwjv9eKPwmMmDlW660rEu31Kd8dYP8zNtXmpcSZW4HRX3Yx");
    xhr.send();
}

function displaResult(result){
    document.body.style.height = '1190px';
    hometab.classList.remove('active');
    homeName.classList.add('hide');
    resultdiv.classList.remove('hide');


}
