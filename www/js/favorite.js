favetab.addEventListener('click', fave);

function fave(){
    hometab.classList.remove('active');
    homeName.classList.add('hide');
    resultdiv.classList.add('hide');
    resultpage.classList.add('hide');
    backbtn.classList.add("hide");
    mapArea.classList.add('hide');
    favelist.classList.remove('hide');
}

function addtolist(faveId, faveName){
    hometab.classList.remove('active');
    resulttab.classList.remove('active');
    favetab.classList.add('active');
    homeName.classList.add('hide');
    resultdiv.classList.add('hide');
    resultpage.classList.add('hide');
    backbtn.classList.add("hide");
    mapArea.classList.add('hide');
    favelist.classList.remove('hide');

    var database= firebase.database();
    var ref = database.ref('Favorites');

    var insertInfo = {
        id: faveId,
        name: faveName
    }
        ref.push(insertInfo);  
    

        ref.on("value", function(snapshot){
            favediv.innerHTML=" ";
            snapshot.forEach(function(childSnapshot){
    
                var data = childSnapshot.val();

                let info = document.createElement('h6');
                info.style.fontFamily = "Nunito";
                info.style.fontSize = "16px";
                info.style.color="#DAA500";
                info.style.marginLeft="25px";
                info.style.marginTop="1px";
                info.style.marginBotton="2px";
                info.appendChild(document.createTextNode(data.name));
                
                let btn = document.createElement('button');
                btn.innerHTML = "<i class='fas fa-trash' style='color:white; font-size: 16px;'></i>";
                btn.style.backgroundColor="transparent";
                btn.style.border="0";
                btn.style.marginTop="0";
                btn.style.marginBottom="0";
                //btn.addEventListener("click", function(){
                  //  alert(faveName + " is deleted!");
                //})
                favediv.appendChild(info);
                favediv.appendChild(btn);
        })
        
        
    
    })
}