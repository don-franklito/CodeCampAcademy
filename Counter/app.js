//Initial count
let count = 0;
const counter = document.getElementById('counter');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
   /*  console.info(btn); */
   btn.addEventListener('click', function (e) {
    const nameClass = e.currentTarget.classList;
    if ( nameClass.contains("decrease") ) {
        count = count - 1;
    } else if ( nameClass.contains("increase") ) {
        count = count + 1;
    } else {
        count = 0;
    }

    if (count > 0) 
        counter.style.color = 'green';
    else if (count < 0) 
        counter.style.color = 'red';
    else
        counter.style.color = 'black';
    
    counter.textContent = count;
   });
});






/*const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');

 btnIncrease.addEventListener('click', function() {
    count+= 1;
    counter.textContent = count;
});


btnDecrease.addEventListener('click', function() {
    count = count - 1;
    counter.textContent = count;
});


btnReset.addEventListener('click', function() {
    count = 0;   
    counter.textContent = count;
});
 */