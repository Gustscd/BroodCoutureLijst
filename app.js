const broodLijst = document.getElementById("BroodLijst")

fetch('https://api.npoint.io/2c2d93ddb28cfce03291')
    .then((response) => response.json())
    .then((data) => {
        data.brood.forEach(brood => {
            broodLijst.innerHTML += "<div class='BroodKader'><div class='broodNaam'><h1>"+ brood["naam"] +"</h1></div><div class='broodDagen'><h4>"+brood["dagen"]+"</h4></div><div class='broodFoto'><img src="+brood["img"]+"></div><div class='KoopKnop'><button>Bestel Nu!</button></div></div>"
            console.log(brood);
        });
        
    });