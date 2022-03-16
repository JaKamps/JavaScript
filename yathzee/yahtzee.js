'strict mode'
//dice related things
let dobbles = [1,1,1,1,1]
let saved1 = false;
let saved2 = false;
let saved3 = false;
let saved4 = false;
let saved5 = false;
let worp = 0;
let ronde = 1;

//lock in the used scored
let onesLock = false;
let twosLock = false;
let threesLock = false;
let foursLock = false;
let fivesLock = false;
let sixsLock = false;
let threeOfaKindLock = false;
let fourOfaKindLock = false;
let fullhouseLock = false;
let smallStreetLock = false;
let largeStreetLock = false;
let chanceLock = false;
let yatzheeLock = false;
let canScore = false;
let togetherUsed = false;
let onesS = 0;
let twosS = 0;
let threesS = 0;
let foursS =0;
let fivesS = 0;
let sixsS = 0;
let threeKindS = 0;
let fourKindS = 0;
let fullS = 0;
let smallS = 0;
let largeS = 0;
let chanceS=0;
let yathzeeS = 0;
let bonusS = 0;

//can i score?
let canOneScore = false;
let canTwoScore = false;
let canThreeScore = false;
let canfourScore = false;
let canFiveScore = false;
let canSixScore = false;
let canThreeKindScore = false;
let canFourKindScore = false;
let canFullScore = false;
let canSmallScore = false;
let canLargeScore = false;
let canChanceScore = false
let canYatzheeScore = false;

document.querySelector('#reset').addEventListener('click', function() {
    unlockingDice();
    worp = 0;
    ronde = 1;
    onesLock = false;
    twosLock = false;
    threesLock = false;
    foursLock = false;
    fivesLock = false;
    sixsLock = false;
    threeOfaKindLock = false;
    fourOfaKindLock = false;
    fullhouseLock = false;
    smallStreetLock = false;
    largeStreetLock = false;
    chanceLock = false;
    yatzheeLock = false;
    canScore = false;
    togetherUsed = false;
    onesS = 0;
    twosS = 0;
    totalScore = 0;
    threesS = 0;
    foursS =0;
    fivesS = 0;
    sixsS = 0;
    threeKindS = 0;
    fourKindS = 0;
    fullS = 0;
    smallS = 0;
    largeS = 0;
    chanceS=0;
    yathzeeS = 0;
    bonusS = 0;
    resetScore();
    document.querySelector('.score-4').textContent = ' ';
    document.querySelector('.score-6').textContent = ' ';
    document.querySelector('.score-8').textContent = ' ';
    document.querySelector('.score-10').textContent = ' ';
    document.querySelector('.score-12').textContent = ' ';
    document.querySelector('.score-14').textContent = ' ';
    document.querySelector('.score-16').textContent = ' ';
    document.querySelector('.score-18').textContent = ' ';
    document.querySelector('.score-20').textContent = ' ';
    document.querySelector('.score-22').textContent = ' ';
    document.querySelector('.score-24').textContent = ' ';
    document.querySelector('.score-26').textContent = ' ';
    document.querySelector('.score-28').textContent = ' ';
    document.querySelector('.score-30').textContent = ' ';
    document.querySelector('.score-32').textContent = ' ';
    document.querySelector('.score-34').textContent = ' ';
    document.querySelector('.score-4').classList.remove("lock");
    document.querySelector('.score-6').classList.remove("lock");
    document.querySelector('.score-8').classList.remove("lock");
    document.querySelector('.score-10').classList.remove("lock");
    document.querySelector('.score-12').classList.remove("lock");
    document.querySelector('.score-14').classList.remove("lock");
    document.querySelector('.score-20').classList.remove("lock");
    document.querySelector('.score-22').classList.remove("lock");
    document.querySelector('.score-24').classList.remove("lock");
    document.querySelector('.score-26').classList.remove("lock");
    document.querySelector('.score-28').classList.remove("lock");
    document.querySelector('.score-30').classList.remove("lock");
    document.querySelector('.score-32').classList.remove("lock");
    notOnMYWatch();
    
});



/*gooi de dobbles*/
notOnMYWatch();
function randomD() {
    return Math.floor(Math.random() * 5 + 1);
    //return 5;
}

function notOnMYWatch(){
    for(let i = 0;i <5;i++){
        dobbles[i] = randomD();
    }
        worp = 0;
        checker();
}
document.querySelector('#submit').addEventListener('click', function() {
    if(worp <= 2){
        if(saved1 == false){
            dobbles[0] = randomD();
        }if(saved2 == false){
            dobbles[1] = randomD();
        }if(saved3 == false){
            dobbles[2] = randomD();
        }if(saved4 == false){
            dobbles[3] = randomD();
        }if(saved5 == false){
            dobbles[4] = randomD();
        }
        console.log(dobbles)
        checker();
    }
});


// function to activate checking
function checker(){
    if(worp <= 2){
        resetScore();
        onesC();
        twosC();
        threesC();
        foursC();
        fivesC();
        sixsC();
        together();
        threeOfaKindSearch();
        fourOfaKindSearch();
        fullHouseSearch();
        smallStreetSearch();
        largeStreetSearch();
        chanceSeach();
        yatzheeSearch();
        rollDobble();
        throwCheck();
        scoreCheck();
        endCheck();
    }
}


 //checking for ones
function onesC(){
    if(onesLock == false){
        let storeOnes = 0;
        for(let i = 0; i < 5; i++){
            if(dobbles[i] == 1){
                storeOnes++;
            }
        }
        if(storeOnes  >= 1){
            canScore = true;
            canOneScore = true;
            document.querySelector('.score-4').textContent = storeOnes;
            onesS = storeOnes;
        }
    }
}
//checking for twos
function twosC(){
    if(twosLock == false){
        let storeOnes = 0;
        for(let i = 0; i < 5; i++){
            if(dobbles[i] == 2){
                storeOnes++;
            }
        }
        if(storeOnes  >= 1){
            canScore = true;
            canTwoScore = true;
            document.querySelector('.score-6').textContent = storeOnes * 2;
            twosS = storeOnes * 2;
        }
    }
}
//checking for threes
function threesC(){
    if(threesLock == false){
        let storeOnes = 0;
        for(let i = 0; i < 5; i++){
            if(dobbles[i] == 3){
                storeOnes++;
            }
        }
        if(storeOnes  >= 1){
            canScore = true
            canThreeScore = true;
            document.querySelector('.score-8').textContent = storeOnes * 3;
            threesS = storeOnes * 3;
        }
    }
}
//checking for fours
function foursC(){
    if(foursLock == false){
        let storeOnes = 0;
        for(let i = 0; i < 5; i++){
            if(dobbles[i] == 4){
                storeOnes++;
            }
        }
        if(storeOnes  >= 1){
            canScore = true;
            canfourScore = true
            document.querySelector('.score-10').textContent = storeOnes * 4;
            foursS = storeOnes * 4;
        }
    }
}
//checking for fives
function fivesC(){
    if(fivesLock == false){
        let storeOnes = 0;
        for(let i = 0; i < 5; i++){
            if(dobbles[i] == 5){
                storeOnes++;
            }
        }
        if(storeOnes  >= 1){
            canScore = true
            canFiveScore = true;
            document.querySelector('.score-12').textContent = storeOnes * 5;
            fivesS = storeOnes * 5;
        }
    }
}
//checking for sixes
function sixsC(){
    if(sixsLock == false){
        let storeOnes = 0;
        for(let i = 0; i < 5; i++){
            if(dobbles[i] == 6){
                storeOnes++;
            }
        }
        if(storeOnes  >= 1){
            canScore = true;
            canSixScore = true;
            document.querySelector('.score-14').textContent = storeOnes * 6;
            sixsS = storeOnes * 6;
        }
    }
}
// three of a kind
function threeOfaKindSearch() {
    if(threeOfaKindLock == false){
        for(let j = 1; j <=6; j++){
            let sameAmount = 0;
            for(let i = 0;i <= 5;i++ ){
                if(j== dobbles[i]){
                    sameAmount++;
                }
            }
            if(sameAmount >= 3){
                canScore = true;
                canThreeKindScore = true;
                document.querySelector('.score-20').textContent = dobbles[0] + dobbles[1] + dobbles[2] + dobbles[3] + dobbles[4];
                threeKindS = dobbles[0] + dobbles[1] + dobbles[2] + dobbles[3] + dobbles[4];
 
            }
        }
    }
}
//four of a kind
function fourOfaKindSearch() {
    if(fourOfaKindLock == false){
        for(let j =1;j<=6;j++){
            let sameAmount =0;
            for(let i =0;i<=5;i++){
                if(j == dobbles[i] - 1){
                    sameAmount++;
                }
            }
            if(sameAmount >=4){
                canScore = true;
                canFourKindScore = true;
                document.querySelector('.score-22').textContent = dobbles[0] + dobbles[1] + dobbles[2] + dobbles[3] + dobbles[4];
                fourKindS = dobbles[0] + dobbles[1] + dobbles[2] + dobbles[3] + dobbles[4];
            }
        }
    }
}
//fullhouse
function fullHouseSearch() {
    if(fullhouseLock == false){
        let threeFound;
        let twoFound;
        for(let j = 1; j <=6; j++){
            let sameAmount = 0;
            for(let i = 0;i <= 5;i++ ){
                if(j== dobbles[i]){
                    sameAmount++;
                }
            }
            if(sameAmount == 3){
            threeFound = true;

            }
        }
        for(let j = 1; j <=6; j++){
            let sameAmount = 0;
            for(let i = 0;i <= 5;i++ ){
                if(j== dobbles[i]){
                    sameAmount++;
                }
            }
            if(sameAmount == 2){
            twoFound = true;

            }
        }
        if(twoFound == true && threeFound == true) {
            canScore = true;
            canFullScore = true;
            document.querySelector('.score-24').textContent = 25;
            fullS = 25;
        }
    }
}
//little street
function smallStreetSearch(){
    if(smallStreetLock == false){
        let selection = [0,0,0,0,0,0];
            for(let i = 0; i <5; i++){
                let waarde = dobbles[i];
                selection[waarde-1] = 1;
            }
        let amountonebehind = 0;
        for(let i = 0; i<6;i++){
            if(selection[i]==1){
            amountonebehind++;
            }else{
                amountonebehind = 0;
            }
            if(amountonebehind >=4){
                canScore = true;
                canSmallScore = true;
                document.querySelector('.score-26').textContent = 30;
                smallS = 30;
            }
        }
    }
}
//big street
function largeStreetSearch(){
        if(largeStreetLock == false){
        let selection = [0,0,0,0,0,0];
        for(let i = 0; i <5; i++){
            let waarde =dobbles[i];
            selection[waarde-1] = 1;
        }
        let amountonebehind = 0;
        for(let i = 0; i<6;i++){
            if(selection[i]==1){
                amountonebehind++;
            }else{
                amountonebehind = 0;
            }
            if(amountonebehind >=5){
                canScore = true;
                canLargeScore = true
                document.querySelector('.score-28').textContent = 40;
                largeS = 40;
            }
        }
    }
}
//chance

function chanceSeach(){
    if(chanceLock == false){
        let chanceAmount = dobbles[0] + dobbles[1] + dobbles[2] + dobbles[3] + dobbles[4]
        document.querySelector('.score-30').textContent = chanceAmount;
        canChanceScore = true;
        chanceS = dobbles[0] + dobbles[1] + dobbles[2] + dobbles[3] + dobbles[4];
    }
}

//yatzhee

function yatzheeSearch(){
    if(yatzheeLock == false){
        let waarde = dobbles[0];
        let totalWaarde = 0;
        for(let i = 0; i <5; i++){
            if(waarde == dobbles[i]){
                totalWaarde++
            }
        }if(totalWaarde == 5){
            document.querySelector('.score-32').textContent = 50;
            canScore = true;
            canYatzheeScore = true;
            yathzeeS = 50;
        }
    }
}


//roll the dice
function rollDobble(){
    for(let i = 0; i <5;i++){
        if(i == 0){
            if(dobbles[0] == 1 && saved1 == false){
                document.querySelector('.diceM-1').style.backgroundImage = "url('Dobbelsteen1pip.png')";
                document.querySelector('.dice-1B').style.backgroundImage = "url('Dobbelsteen1pip.png')";
            }else if(dobbles[0] == 2 && saved1 == false){
                document.querySelector('.diceM-1').style.backgroundImage = "url('Dobbelsteen2pip.png')";
                document.querySelector('.dice-1B').style.backgroundImage = "url('Dobbelsteen2pip.png')";
            }else if(dobbles[0] == 3 && saved1 == false){
                document.querySelector('.diceM-1').style.backgroundImage = "url('Dobbelsteen3pip.png')";
                document.querySelector('.dice-1B').style.backgroundImage = "url('Dobbelsteen3pip.png')";
            }else if(dobbles[0] == 4 && saved1 == false){
                document.querySelector('.diceM-1').style.backgroundImage = "url('Dobbelsteen4pip.png')";
                document.querySelector('.dice-1B').style.backgroundImage = "url('Dobbelsteen4pip.png')";
            }else if(dobbles[0] == 5 && saved1 == false){
                document.querySelector('.diceM-1').style.backgroundImage = "url('Dobbelsteen5pip.png')";
                document.querySelector('.dice-1B').style.backgroundImage = "url('Dobbelsteen5pip.png')";
            }else if(dobbles[0] == 6 && saved1 == false){
                document.querySelector('.diceM-1').style.backgroundImage = "url('Dobbelsteen6pip.png')";
                document.querySelector('.dice-1B').style.backgroundImage = "url('Dobbelsteen6pip.png')";
            }
        }if(i == 1){
            if(dobbles[1] == 1 && saved2 == false){
                document.querySelector('.diceM-2').style.backgroundImage = "url('Dobbelsteen1pip.png')";
                document.querySelector('.dice-2B').style.backgroundImage = "url('Dobbelsteen1pip.png')";
            }else if(dobbles[1] == 2 && saved2 == false){
                document.querySelector('.diceM-2').style.backgroundImage = "url('Dobbelsteen2pip.png')";
                document.querySelector('.dice-2B').style.backgroundImage = "url('Dobbelsteen2pip.png')";
            }else if(dobbles[1] == 3 && saved2 == false){
                document.querySelector('.diceM-2').style.backgroundImage = "url('Dobbelsteen3pip.png')";
                document.querySelector('.dice-2B').style.backgroundImage = "url('Dobbelsteen3pip.png')";
            }else if(dobbles[1] == 4 && saved2 == false){
                document.querySelector('.diceM-2').style.backgroundImage = "url('Dobbelsteen4pip.png')";
                document.querySelector('.dice-2B').style.backgroundImage = "url('Dobbelsteen4pip.png')";
            }else if(dobbles[1] == 5 && saved2 == false){
                document.querySelector('.diceM-2').style.backgroundImage = "url('Dobbelsteen5pip.png')";
                document.querySelector('.dice-2B').style.backgroundImage = "url('Dobbelsteen5pip.png')";
            }else if(dobbles[1] == 6 && saved2 == false){
                document.querySelector('.diceM-2').style.backgroundImage = "url('Dobbelsteen6pip.png')";
                document.querySelector('.dice-2B').style.backgroundImage = "url('Dobbelsteen6pip.png')";
            }

        }if(i == 2){
            if(dobbles[2] == 1 && saved3 == false){
                document.querySelector('.diceM-3').style.backgroundImage = "url('Dobbelsteen1pip.png')";
                document.querySelector('.dice-3B').style.backgroundImage = "url('Dobbelsteen1pip.png')";
            }else if(dobbles[2] == 2 && saved3 == false){
                document.querySelector('.diceM-3').style.backgroundImage = "url('Dobbelsteen2pip.png')";
                document.querySelector('.dice-3B').style.backgroundImage = "url('Dobbelsteen2pip.png')";
            }else if(dobbles[2] == 3 && saved3 == false){
                document.querySelector('.diceM-3').style.backgroundImage = "url('Dobbelsteen3pip.png')";
                document.querySelector('.dice-3B').style.backgroundImage = "url('Dobbelsteen3pip.png')";
            }else if(dobbles[2] == 4 && saved3 == false){
                document.querySelector('.diceM-3').style.backgroundImage = "url('Dobbelsteen4pip.png')";
                document.querySelector('.dice-3B').style.backgroundImage = "url('Dobbelsteen4pip.png')";
            }else if(dobbles[2] == 5 && saved3 == false){
                document.querySelector('.diceM-3').style.backgroundImage = "url('Dobbelsteen5pip.png')";
                document.querySelector('.dice-3B').style.backgroundImage = "url('Dobbelsteen5pip.png')";
            }else if(dobbles[2] == 6 && saved3 == false){
                document.querySelector('.diceM-3').style.backgroundImage = "url('Dobbelsteen6pip.png')";
                document.querySelector('.dice-3B').style.backgroundImage = "url('Dobbelsteen6pip.png')";
            }

        }if(i == 3){
            if(dobbles[3] == 1 && saved4){
                document.querySelector('.diceM-4').style.backgroundImage = "url('Dobbelsteen1pip.png')";
                document.querySelector('.dice-4B').style.backgroundImage = "url('Dobbelsteen1pip.png')";
            }else if(dobbles[3] == 2 && saved4 == false){
                document.querySelector('.diceM-4').style.backgroundImage = "url('Dobbelsteen2pip.png')";
                document.querySelector('.dice-4B').style.backgroundImage = "url('Dobbelsteen2pip.png')";
            }else if(dobbles[3] == 3 && saved4 == false){
                document.querySelector('.diceM-4').style.backgroundImage = "url('Dobbelsteen3pip.png')";
                document.querySelector('.dice-4B').style.backgroundImage = "url('Dobbelsteen3pip.png')";
            }else if(dobbles[3] == 4 && saved4 == false){
                document.querySelector('.diceM-4').style.backgroundImage = "url('Dobbelsteen4pip.png')";
                document.querySelector('.dice-4B').style.backgroundImage = "url('Dobbelsteen4pip.png')";
            }else if(dobbles[3] == 5 && saved4 == false){
                document.querySelector('.diceM-4').style.backgroundImage = "url('Dobbelsteen5pip.png')";
                document.querySelector('.dice-4B').style.backgroundImage = "url('Dobbelsteen5pip.png')";
            }else if(dobbles[3] == 6 && saved4 == false){
                document.querySelector('.diceM-4').style.backgroundImage = "url('Dobbelsteen6pip.png')";
                document.querySelector('.dice-4B').style.backgroundImage = "url('Dobbelsteen6pip.png')";
            }

        }if(i == 4){
            if(dobbles[4] == 1 && saved5 == false){
                document.querySelector('.diceM-5').style.backgroundImage = "url('Dobbelsteen1pip.png')";
                document.querySelector('.dice-5B').style.backgroundImage = "url('Dobbelsteen1pip.png')";
            }else if(dobbles[4] == 2 && saved5 == false){
                document.querySelector('.diceM-5').style.backgroundImage = "url('Dobbelsteen2pip.png')";
                document.querySelector('.dice-5B').style.backgroundImage = "url('Dobbelsteen2pip.png')";
            }else if(dobbles[4] == 3 && saved5 == false){
                document.querySelector('.diceM-5').style.backgroundImage = "url('Dobbelsteen3pip.png')";
                document.querySelector('.dice-5B').style.backgroundImage = "url('Dobbelsteen3pip.png')";
            }else if(dobbles[4] == 4 && saved5 == false){
                document.querySelector('.diceM-5').style.backgroundImage = "url('Dobbelsteen4pip.png')";
                document.querySelector('.dice-5B').style.backgroundImage = "url('Dobbelsteen4pip.png')";
            }else if(dobbles[4] == 5 && saved5 == false){
                document.querySelector('.diceM-5').style.backgroundImage = "url('Dobbelsteen5pip.png')";
                document.querySelector('.dice-5B').style.backgroundImage = "url('Dobbelsteen5pip.png')";
            }else if(dobbles[4] == 6 && saved5 == false){
                document.querySelector('.diceM-5').style.backgroundImage = "url('Dobbelsteen6pip.png')";
                document.querySelector('.dice-5B').style.backgroundImage = "url('Dobbelsteen6pip.png')";
            }

        }
    }
}


//throw count

function throwCheck(){
    worp++;
    if(worp == 1){
        document.querySelector('.throws').textContent = 'throw 1/3';
    }else if(worp == 2){
        document.querySelector('.throws').textContent = 'throw 2/3';
    }else if(worp == 3){
        document.querySelector('.throws').textContent = 'throw 3/3';
    }
}

function resetScore(){
    canScore = false;
    canOneScore = false;
    canTwoScore = false;
    canThreeScore = false;
    canfourScore = false;
    canFiveScore = false;
    canSixScore = false;
    canThreeKindScore = false;
    canFourKindScore = false;
    canSmallScore = false;
    canLargeScore = false;
    canChanceScore = false;
    canYatzheeScore = false;
    if(onesLock == false){
        document.querySelector('.score-4').textContent = ' ';
    }if(twosLock == false){
        document.querySelector('.score-6').textContent = ' ';
    }if(threesLock == false){
        document.querySelector('.score-8').textContent = ' ';
    }if(foursLock == false){
        document.querySelector('.score-10').textContent = ' ';
    }if(fivesLock == false){
        document.querySelector('.score-12').textContent = ' ';
    }if(sixsLock == false){
        document.querySelector('.score-14').textContent = ' ';
    }if(threeOfaKindLock == false){
        document.querySelector('.score-20').textContent = ' ';
    }if(fourOfaKindLock == false){
        document.querySelector('.score-22').textContent = ' ';
    }if(fullhouseLock == false){
        document.querySelector('.score-24').textContent = ' ';
    }if(smallStreetLock == false){
        document.querySelector('.score-26').textContent = ' ';
    }if(largeStreetLock == false){
        document.querySelector('.score-28').textContent = ' ';
    }if(chanceLock == false){
        document.querySelector('.score-30').textContent = ' ';
    }if(yatzheeLock == false){
        document.querySelector('.score-32').textContent = ' ';
    }
}



//selecting a score 
document.querySelector('.score-4').addEventListener('click', function() {
    if(onesLock == false && canOneScore == true ||onesLock == false && canScore == false){
        onesLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-4').classList.add("lock");
        resetScore()
        together();
        unlockingDice();
        notOnMYWatch()
        
    }
});
document.querySelector('.score-6').addEventListener('click', function() {
    if(twosLock == false && canTwoScore == true ||twosLock == false && canScore == false){
        twosLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-6').classList.add("lock");
        resetScore()
        together();
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-8').addEventListener('click', function() {
    if(threesLock == false && canThreeScore == true ||threesLock == false && canScore == false){
        threesLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-8').classList.add("lock");
        resetScore()
        together();
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-10').addEventListener('click', function() {
    if(foursLock == false && canfourScore == true ||foursLock == false && canScore == false){
        foursLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-10').classList.add("lock");
        resetScore()
        together();
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-12').addEventListener('click', function() {
    if(fivesLock == false && canFiveScore == true ||fivesLock == false && canScore == false){
        fivesLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-12').classList.add("lock");
        resetScore()
        together();
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-14').addEventListener('click', function() {
    if(sixsLock == false && canSixScore == true ||sixsLock == false && canScore == false){
        sixsLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-14').classList.add("lock");
        resetScore()
        together();
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-20').addEventListener('click', function() {
    if(threeOfaKindLock == false && canThreeKindScore == true ||threeOfaKindLock == false && canScore == false){
        threeOfaKindLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-20').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-22').addEventListener('click', function() {
    if(fourOfaKindLock == false && canfourScore == true ||fourOfaKindLock == false && canScore == false){
        fourOfaKindLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-22').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-24').addEventListener('click', function() {
    if(fullhouseLock == false && canFullScore == true ||fullhouseLock == false && canScore == false){
        fullhouseLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-24').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-26').addEventListener('click', function() {
    if(smallStreetLock == false && canSmallScore == true ||smallStreetLock == false && canScore == false){
        smallStreetLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-26').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-28').addEventListener('click', function() {
    if(largeStreetLock == false && canLargeScore == true ||largeStreetLock == false && canScore == false){
        largeStreetLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-28').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-30').addEventListener('click', function() {
    if(chanceLock == false && canChanceScore == true ||chanceLock == false && canScore == false){
        chanceLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-30').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});

document.querySelector('.score-32').addEventListener('click', function() {
    if(yatzheeLock == false && canYatzheeScore == true ||yatzheeLock == false && canScore == false){
        yatzheeLock = true;
        document.querySelector('.throws').textContent = 'throw 0/3';
        document.querySelector('.score-32').classList.add("lock");
        resetScore()
        unlockingDice();
        notOnMYWatch()
    }
});


// if you cant place a score
function scoreCheck(){
    if(canScore == false){
        if(onesLock == false){
            document.querySelector('.score-4').textContent = 0;
        }if(twosLock == false){
            document.querySelector('.score-6').textContent = 0;
        }if(threesLock == false){
            document.querySelector('.score-8').textContent = 0;
        }if(foursLock == false){
            document.querySelector('.score-10').textContent = 0;
        }if(fivesLock == false){
            document.querySelector('.score-12').textContent = 0;
        }if(sixsLock == false){
            document.querySelector('.score-14').textContent = 0;
        }if(threeOfaKindLock == false){
            document.querySelector('.score-20').textContent = 0;
        }if(fourOfaKindLock == false){
            document.querySelector('.score-22').textContent = 0;
        }if(fullhouseLock == false){
            document.querySelector('.score-24').textContent = 0;
        }if(smallStreetLock == false){
            document.querySelector('.score-26').textContent = 0;
        }if(largeStreetLock == false){
            document.querySelector('.score-28').textContent = 0;
        }if(yatzheeLock == false){
            document.querySelector('.score-32').textContent = 0;
        }
    }
}

// if you completed all the numbers
function together(){
    if(onesLock == true && twosLock == true && threesLock == true && foursLock == true && fivesLock == true && sixsLock == true && togetherUsed == false){
        let togetherNum = onesS += twosS += sixsS += threesS += foursS += fivesS;
        document.querySelector('.score-16').textContent = togetherNum;
        togetherUsed = true;
        if(togetherNum >= 63){
            document.querySelector('.score-18').textContent = 35;
            bonusS
        }else{
            document.querySelector('.score-18').textContent = 0;
        }
    }
}


// locking dobbelsteen

document.querySelector('.diceM-1').addEventListener('click', function() {
    saved1 = true;
    document.querySelector('.dice-1B').classList.remove('begone')
    document.querySelector('.diceM-1').classList.add('begone')
});
document.querySelector('.diceM-2').addEventListener('click', function() {
    saved2 = true;
    document.querySelector('.dice-2B').classList.remove('begone')
    document.querySelector('.diceM-2').classList.add('begone')
});
document.querySelector('.diceM-3').addEventListener('click', function() {
    saved3 = true;
    document.querySelector('.dice-3B').classList.remove('begone')
    document.querySelector('.diceM-3').classList.add('begone')
});
document.querySelector('.diceM-4').addEventListener('click', function() {
    saved4 = true;
    document.querySelector('.dice-4B').classList.remove('begone')
    document.querySelector('.diceM-4').classList.add('begone')
});
document.querySelector('.diceM-5').addEventListener('click', function() {
    saved5 = true;
    document.querySelector('.dice-5B').classList.remove('begone')
    document.querySelector('.diceM-5').classList.add('begone')
});



// unlocking dobbles

document.querySelector('.dice-1B').addEventListener('click', function() {
    saved1 = false;
    document.querySelector('.dice-1B').classList.add('begone')
    document.querySelector('.diceM-1').classList.remove('begone')
});
document.querySelector('.dice-2B').addEventListener('click', function() {
    saved2 = false;
    document.querySelector('.dice-2B').classList.add('begone')
    document.querySelector('.diceM-2').classList.remove('begone')
});
document.querySelector('.dice-3B').addEventListener('click', function() {
    saved3 = false;
    document.querySelector('.dice-3B').classList.add('begone')
    document.querySelector('.diceM-3').classList.remove('begone')
});
document.querySelector('.dice-4B').addEventListener('click', function() {
    saved4 = false;
    document.querySelector('.dice-4B').classList.add('begone')
    document.querySelector('.diceM-4').classList.remove('begone')
});
document.querySelector('.dice-5B').addEventListener('click', function() {
    saved5 = false;
    document.querySelector('.dice-5B').classList.add('begone')
    document.querySelector('.diceM-5').classList.remove('begone')
});


//unlocking the dice

function unlockingDice(){
    document.querySelector('.dice-1B').classList.add('begone')
    document.querySelector('.diceM-1').classList.remove('begone')
    document.querySelector('.dice-2B').classList.add('begone')
    document.querySelector('.diceM-2').classList.remove('begone')
    document.querySelector('.dice-3B').classList.add('begone')
    document.querySelector('.diceM-3').classList.remove('begone')
    document.querySelector('.dice-4B').classList.add('begone')
    document.querySelector('.diceM-4').classList.remove('begone')
    document.querySelector('.dice-5B').classList.add('begone')
    document.querySelector('.diceM-5').classList.remove('begone')
    saved1 = false;
    saved2 = false;
    saved3 = false;
    saved4 = false;
    saved5 = false;
}


// total score
function endCheck(){
    if(togetherUsed == true && threeOfaKindLock == true&&fourOfaKindLock == true && fullhouseLock == true&&smallStreetLock == true&&largeStreetLock == true && chanceLock == true && yatzheeLock == true){
        let totalScore = onesS + twosS + threesS + foursS + fivesS + sixsS + threeKindS + fourKindS + fullS +smallS + largeS + chanceS + yathzeeS + bonusS;
        console.log(totalScore)
        document.querySelector('.score-34').textContent = totalScore;
    }
}




document.querySelector('#reset').addEventListener('click', function() {
    
});