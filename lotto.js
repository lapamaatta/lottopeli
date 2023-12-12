let chosenNumbers = [];
let ranNumbers = [];
let numsRight;
let allRight = false;

let timeTakenWeeks = 0;
let timeTakenYears = 0;

let money = 0;
let moneySpent = 0;
let moneyWon = 0;
let moneyTotal = 0;

let auto = false;

showMoneyBool = true;
showTimeBool = true;
timeBetween = 10;

chooseNum = (i, button) => {
    if(chosenNumbers.length < 6){
        if (!chosenNumbers.includes(i)){
            chosenNumbers.push(i);
            ownNums = document.getElementById("ownNums");
            let numToPush = i;
            let entry = document.createElement('li');
            entry.appendChild(document.createTextNode(numToPush));
            ownNums.appendChild(entry);
            button.style.backgroundColor = "grey";
        }
    }
    else if(chosenNumbers.length == 6){
        if (!chosenNumbers.includes(i)){
            chosenNumbers.push(i);
            ownNums = document.getElementById("ownNums");
            let numToPush = i;
            let entry = document.createElement('li');
            entry.appendChild(document.createTextNode(numToPush));
            ownNums.appendChild(entry);
            button.style.backgroundColor = "grey";
        }
        rightNumbers();
    }
}

rightNumbers = () => {
    if(chosenNumbers.length == 7){
        money--;
        moneySpent++;
        moneyTotal = moneyWon - moneySpent;
        if(moneyTotal > 0){
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: +" + moneyTotal + "€";
        }
        else{
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: " + moneyTotal + "€";
        }
        document.getElementById("usedMoney").innerHTML = "Rahaa käytetty: " + moneySpent + "€";
        ranNumbers = [];
        document.getElementById("rightNums").innerHTML = "";
        while(ranNumbers.length != 7){
            let numToPush = getRandomIntInclusive(1, 40);
            if(!ranNumbers.includes(numToPush)){
                ranNumbers.push(numToPush);
            }
        }
        revealNumbers();
        compareNumbers();
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

revealNumbers = () => {
    rightNums = document.getElementById("rightNums");
    ranNumbers.sort();
    for(i = 0; i < ranNumbers.length; i++){
        let numToPush = ranNumbers[i];
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(numToPush));
        rightNums.appendChild(entry);
    }
}

compareNumbers = () => {
    let intersection = ranNumbers.filter(element => chosenNumbers.includes(element));
    let result = document.getElementById("result");
    if(intersection.length == 0){
        result.innerHTML = "Ei yhtään numeroa oikein :("
    }
    else if (intersection.length == 1){
        result.innerHTML = "1 numero oikein."
    }
    else if (intersection.length < 7){
        result.innerHTML = intersection.length + " numeroa oikein.";
    }
    else if (intersection.length == 7){
        result.innerHTML = "Kaikki 7 numeroa oikein!!"
    }

    if(intersection.length == 4){
        money += 10;
        moneyWon += 10;
        document.getElementById("wonMoney").innerHTML = "Rahaa voitettu: " + moneyWon + "€";
        moneyTotal = moneyWon - moneySpent;
        if(moneyTotal > 0){
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: +" + moneyTotal + "€";
        }
        else{
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: " + moneyTotal + "€";
        }
    }
    if(intersection.length == 5){
        money += 55;
        moneyWon += 55;
        document.getElementById("wonMoney").innerHTML = "Rahaa voitettu: " + moneyWon + "€";
        moneyTotal = moneyWon - moneySpent;
        if(moneyTotal > 0){
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: +" + moneyTotal + "€";
        }
        else{
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: " + moneyTotal + "€";
        }
    }
    if(intersection.length == 6){
        money += 2500;
        moneyWon += 2500;
        document.getElementById("wonMoney").innerHTML = "Rahaa voitettu: " + moneyWon + "€";
        moneyTotal = moneyWon - moneySpent;
        if(moneyTotal > 0){
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: +" + moneyTotal + "€";
        }
        else{
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: " + moneyTotal + "€";
        }
    }
    if(intersection.length == 7){
        money += 1000000;
        moneyWon += 1000000;
        document.getElementById("wonMoney").innerHTML = "Rahaa voitettu: " + moneyWon + "€";
        moneyTotal = moneyWon - moneySpent;
        if(moneyTotal > 0){
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: +" + moneyTotal + "€";
        }
        else{
            document.getElementById("totalMoney").innerHTML = "Rahaa yhteensä: " + moneyTotal + "€";
        }
    }
}

checkForAuto = () => {
    if(!auto){
        auto = true
        untilRight();
    }
    else if (auto){
        auto = false;
    }
}

untilRight = () => {
    if(chosenNumbers.length == 7){
        if(!allRight && auto){
            rightNumbers();
            timeTakenWeeks++;
            if(timeTakenWeeks == 52){
                timeTakenYears++;
                timeTakenWeeks = 0;
            }
            if(timeTakenYears == 0){
                document.getElementById("timeSpent").innerHTML = "Aikaa kulunut: " + timeTakenWeeks + " viikkoa";
            }
            else{
                document.getElementById("timeSpent").innerHTML = "Aikaa kulunut: " + timeTakenYears + " vuotta ja " + timeTakenWeeks + " viikkoa";
            }
            setTimeout(function() {
                i++;
                if (i < 10) {
                  untilRight();
                }
            }, timeBetween)
        }
    }
}

openModal = () => {
    document.getElementById("settingsModal").style.display = "block";
}

closeModal = () => {
    document.getElementById("settingsModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("settingsModal")) {
    document.getElementById("settingsModal").style.display = "none";
  }
}

showMoney = () => {
    if(showMoneyBool){
        showMoneyBool = false;
        document.getElementById("showMoney").style.backgroundColor = "whitesmoke";
        document.getElementById("moneys").style.display = "none";
    }
    else{
        showMoneyBool = true;
        document.getElementById("showMoney").style.backgroundColor = "grey";
        document.getElementById("moneys").style.display = "flex";
    }
}

showTime = () => {
    if(showTimeBool){
        showTimeBool = false;
        document.getElementById("showTime").style.backgroundColor = "whitesmoke";
        document.getElementById("timeSpent").style.display = "none";
    }
    else{
        showTimeBool = true;
        document.getElementById("showTime").style.backgroundColor = "grey";
        document.getElementById("timeSpent").style.display = "flex";
    }
}

changeTimeBetween = () => {
    timeBetween = document.getElementById("timeBetween").value * 1000;
}