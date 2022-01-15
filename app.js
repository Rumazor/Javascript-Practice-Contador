let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


// Utilizo el metodo forEach

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        styles.contains('decrease') ? count-- : count;
        styles.contains('decrease2') ? count-= 2 : count;
        styles.contains('increase') ? count++ : count;
        styles.contains('increase2') ? count+= 2 : count;
        styles.contains('reset') ? count = 0  : count;
        styles.contains('random') ? count = numAleatorio()  : count;

        value.textContent = count;

        if(count > 0) {
            value.style.color = 'green'
        } else if ( count < 0 ) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black'
        }

    })
})

function numAleatorio(){
    
    return Math.floor(Math.random()*100)
}


