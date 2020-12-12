resulttab.addEventListener('click', displayResult);
backbtn.addEventListener('click', goback);

function businessId(id){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
        let result = JSON.parse(this.responseText)
        displayResult(result);
    }
    });
    xhr.open("GET", "https://api.yelp.com/v3/businesses/"+id);
    xhr.setRequestHeader("Authorization", "Bearer GwlxjEcOFdrbZeohh6vRfDOZKBkLIx10cobFqOyHbXjTSxiPg5Ucys6KLIndZxuaJln3MPHgCtlRCAgXufwjv9eKPwmMmDlW660rEu31Kd8dYP8zNtXmpcSZW4HRX3Yx");
    xhr.send();
}

function displayResult(result){
    resultpage.innerHTML=" ";
    document.body.style.height = '1190px';
    hometab.classList.remove('active');
    homeName.classList.add('hide');
    resultdiv.classList.add('hide');
    resultpage.classList.remove('hide');
    backbtn.classList.remove('hide');

    let store_is = "Closed";
            if (result.is_closed == false){
                store_is = "Open";
            }
    let claimed = "Claimed (✓)";
            if (result.is_claimed == false){
                claimed = "Unclaimed (✗)";
            }

    let restoName = document.createElement('h2');
    restoName.style.fontFamily="Nunito";
    restoName.style.color="#DAA500";
    restoName.style.textAlign="center";
    restoName.appendChild(document.createTextNode(result.name));
    
    let hr = document.createElement('hr');
    hr.style.border="1px solid white";
    hr.style.marginLeft="15px";

    let titleInfo = document.createElement('h6');
    titleInfo.style.fontFamily ="Nunito";
    titleInfo.style.fontWeight="bold";
    titleInfo.style.color="white";
    titleInfo.style.textAlign="center";
    titleInfo.appendChild(document.createTextNode(
             result.price + " • " + result.categories[0].title + ", " + result.categories[1].title));

    let otherInfo = document.createElement('h6');
    otherInfo.style.fontFamily ="Nunito";
    otherInfo.style.fontWeight="bold";
    otherInfo.style.color="white";
    otherInfo.style.textAlign="center";
    otherInfo.appendChild(document.createTextNode(
        store_is +" "+ " • " + " Rating: " + result.rating +" " + " • " + " Reviews: " + result.review_count));
    
    let if_claimed = document.createElement('p');
    if_claimed.style.fontFamily ="Nunito";
    if_claimed.style.fontSize = "10px";
    if_claimed.style.color="white";
    if_claimed.style.textAlign="left";
    if_claimed.style.marginLeft="15px";
    if_claimed.appendChild(document.createTextNode(claimed))
    
    let phoneNum = document.createElement('p');
    phoneNum.style.fontFamily ="Nunito";
    phoneNum.style.fontSize = "10px";
    phoneNum.style.color="white";
    phoneNum.style.textAlign="left";
    phoneNum.style.paddingLeft="2px";
    phoneNum.style.marginLeft="15px";
    phoneNum.appendChild(document.createTextNode("Phone Number: "+result.display_phone))

    resultpage.appendChild(restoName);
    resultpage.appendChild(hr);
    resultpage.appendChild(titleInfo);
    resultpage.appendChild(otherInfo);
    resultpage.appendChild(phoneNum);
    resultpage.appendChild(if_claimed);
}

function goback(){
    document.body.style.height = '1190px';
    resultdiv.classList.remove('hide');
    homeName.classList.add('hide');
    resultpage.classList.add('hide');
    resulttab.classList.add('active');
    hometab.classList.remove('active');
    
}
