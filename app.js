// Inicio el contador en 0
let count = 0;

//Llamo mis propiedades del html (valor y los botones)
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//Aplico el metodo forEach ya que los 3 botones contienen la misma clase
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{ //Acada elemento le agrego el evento click
        const styles = e.currentTarget.classList; // Creo una constante para que cuando le de click a cada uno revise su clase
        styles.contains('decrease') ? count-- : count; // Si mi variable style con tiene la clase 'Decrease' ocurrira esto
        styles.contains('increase') ? count++ : count; //
        styles.contains('reset') ? count = 0 :  count; //

        value.textContent = count; // Cambio el valor en el documento de acuerdo al resultado del contador

        if(count > 0) {
            value.style.color = 'green'
        } else if ( count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
    })
})