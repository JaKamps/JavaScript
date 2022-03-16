let i = 1;
const contain = document.querySelector('.container')




    document.querySelector('.button').addEventListener('click', function() {
        while(i < 50){
            var div = document.createElement('div');
            div.id = 'container__item';
            div.innerHTML = i;
            div.className = 'container__item';
     
            contain.appendChild(div);
            i++;
        }
    });  
