function numberR() {
   return Math.trunc(Math.random() * 100) + 1;
}
function operatorR() {
     return Math.trunc(Math.random() * 3) + 1;
 }

let number1 = numberR();
let number2 = numberR();
let operator = operatorR();
let sum = 0;
let answerT = 0;
let answer = 0;
let good = 0;
let wrong = 0;
let playerAnswer = 0;
let total = 0;
let score = 0;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
  
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

while(number2 > number1) {
        number2 = numberR();
        console.log('wrong');
}if(number2 <= number1) {
    console.log(number1, number2, operator)
    document.querySelector('#number-1').textContent = number1;
    document.querySelector('#number-2').textContent = number2;
    document.querySelector('#operator').textContent = operator;
}
if(operator == 1) {
    document.querySelector('#operator').textContent = '/';
    answerT = (number1 / number2);
    answer = Math.round(answerT * 100) / 100;
    console.log(answer);   
}if(operator == 2) {
    document.querySelector('#operator').textContent = '*';
    answerT = (number1 * number2);
    answer = Math.round(answerT * 100) / 100;
    console.log(answer);
}if(operator == 3) {
    document.querySelector('#operator').textContent = '+';
    answerT = (number1 + number2);
    answer = Math.round(answerT * 100) / 100;
    console.log(answer);
}
document.querySelector('#answerCheck').addEventListener('click', function () {
    playerAnswer = Number(document.querySelector('#answer').value);
    console.log(playerAnswer, typeof playerAnswer);

    if(playerAnswer == answer){
        good ++;
        total ++;
        console.log(good);
        number1 = numberR();
        number2 = numberR();
        operator = operatorR();
        while(number2 > number1) {
            number2 = numberR();
            console.log('wrong');
        }if(number2 <= number1) {
            console.log(number1, number2, operator)
            document.querySelector('#number-1').textContent = number1;
            document.querySelector('#number-2').textContent = number2;
            document.querySelector('#operator').textContent = operator;
            if(operator == 1) {
                document.querySelector('#operator').textContent = '/';
                answerT = (number1 / number2);
                answer = Math.round(answerT * 100) / 100;
                console.log(answer);   
            }if(operator == 2) {
                document.querySelector('#operator').textContent = '*';
                answerT = (number1 * number2);
                answer = Math.round(answerT * 100) / 100;
                console.log(answer);
            }if(operator == 3) {
                document.querySelector('#operator').textContent = '+';
                answerT = (number1 + number2);
                answer = Math.round(answerT * 100) / 100;
                console.log(answer);
            }
        }
    }if(playerAnswer !== answer) {
        wrong ++;
        total ++;
        console.log(wrong);
        number1 = numberR();
        number2 = numberR();
        operator = operatorR();
        while(number2 > number1) {
            number2 = numberR();
            console.log('wrong');
        }if(number2 <= number1) {
            console.log(number1, number2, operator)
            document.querySelector('#number-1').textContent = number1;
            document.querySelector('#number-2').textContent = number2;
            document.querySelector('#operator').textContent = operator;
            if(operator == 1) {
                document.querySelector('#operator').textContent = '/';
                answerT = (number1 / number2);
                answer = Math.round(answerT * 100) / 100;
                console.log(answer);   
            }if(operator == 2) {
                document.querySelector('#operator').textContent = '*';
                answerT = (number1 * number2);
                answer = Math.round(answerT * 100) / 100;
                console.log(answer);
            }if(operator == 3) {
                document.querySelector('#operator').textContent = '+';
                answerT = (number1 + number2);
                answer = Math.round(answerT * 100) / 100;
                console.log(answer);
            }
        }
    }
});

if(total == 10) {
    openModal();
}


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

