var page = 1;
function fetchCharacters(){
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json()) 
    .then(chars => {
        var charsObj = chars.results;
        var container=document.getElementById("characters");
        container.innerHTML="";
        for(var char of charsObj){
            container.innerHTML+=` 
            <div>
                <img src="${char.image}"/>
                <div>
                  <span>${char.name}</span>
                </div>
            </div>
            `
        }
    })
}

function fetchCharactersByName(){
    var elem=document.getElementById("mytext");
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${elem.value.toLowerCase()}`)
    .then(res => res.json())
    .then(chars => {
        var charsObj = chars.results;
        var container=document.getElementById("characters");
        container.innerHTML="";
        for(var char of charsObj){
          container.innerHTML+=`
          <div>
              <img src="${char.image}"/>
              <div>
                <span>${char.name}</span>
              </div>
          </div>
          `
      }
    })
}

function fetchCharactersNext(){
         var elem=document.getElementById("mytext");
         page++;
         if(elem.value === ''){
            fetchCharacters();
         }else{
            fetchCharactersByName();
         }
}

function fetchCharactersPrevious(){
         var elem=document.getElementById("mytext");
         page--;
         if(elem.value === ''){
           fetchCharacters();
         }else{
           fetchCharactersByName();
         }
}

window.onload = fetchCharacters();

