const lanceJet = document.getElementById("lancer-jet");
const paragraphe = document.getElementById("paragraphe")
const pourcentage = document.getElementById("pourcentage")
const imageChange = document.getElementById("image-qui-change")
const h2 = document.getElementById("phrase-h2")

lanceJet.addEventListener("click", function(){
    paragraphe.innerText = "";
    pourcentage.innerText = "";
    function randomNumber(){
        const random = Math.floor(Math.random() * 100) + 1;
        return random;
    }

    let number = randomNumber()

    const reussiteCritique = ["Tu as un bonus d'attaque de 10%", "Tu ne ressens pas de douleur pendant 2 tours", "Tu as un bonus d'intell de 10%"]
    const reussiteUnPourCent = ["Tu reussi t'es jets pendant 3 tours", "Tu arrive a mettre la main sur un artefact", "Tu arrive a detecter des pieges orales ou physiques"]
    const echecCritique = ["Tu es paralyser pendant 2 tours", "Tu as un maluce de 10% d'attaque", "Tu vois flou"]
    const echecCentPourCent = ["Tu perd l'usage d'un membre", "Tu t'evanoui", "Tu loupe t'es jets pendant 3 tours"]
    const normalJet = ["😂", "🙃​", "😡​", "​💩", "😵‍💫", "🙉​"]

    function randomPhrase(tableau){
        for(let i = 0; i < tableau.length; i++){
            let number = Math.floor(Math.random() * tableau.length);
            let phrase = tableau[number];
            return phrase;
        } 

    }

    if(number === 1){
        imageChange.src = "./img/unpourcent.gif";
        pourcentage.innerText = number + "%";
        paragraphe.innerText = randomPhrase(reussiteUnPourCent);
        h2.innerText = "Incroyabe !"
    } else if (number === 100){
        imageChange.src = "./img/centpourcent.gif";
        pourcentage.innerText = number + "%";
        paragraphe.innerText = randomPhrase(echecCentPourCent);
        h2.innerText = "Aie t'es foutu"

    } else if (number <= 5){
        imageChange.src = "./img/reussitecritique.gif";
        pourcentage.innerText = number + "%";
        paragraphe.innerText = randomPhrase(reussiteCritique);
        h2.innerText = "Ty es bien!"
    } else if (number >= 95){
        imageChange.src = "./img/echecritique.gif";
        pourcentage.innerText = number + "%";
        paragraphe.innerText = randomPhrase(echecCritique);
        h2.innerText = "T'es dans la mouise"

    } else {
        imageChange.src = "./img/normal.gif";
        pourcentage.innerText = number + "%";
        paragraphe.innerText = randomPhrase(normalJet);
        h2.innerText = "Alors reussi ou pas ?"
    }
})