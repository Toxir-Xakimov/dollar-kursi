let mybody = document.querySelector('body');

let Toxir = document.querySelector('.col-bla');

let manyblow = document.querySelector('.col-blow');


 console.log(mybody, Toxir, manyblow);

 
let kurs = 12000
let wrapperForm = document.querySelector('.from')
let dollarin = document.querySelector('.input')
let onput = document.querySelector('.off')
let btnb = document.querySelector('.sumbit')

wrapperForm.addEventListener('submit',function(n){
    n.preventDefault()

    onput.value = (parseFloat(dollarin.value)*kurs).toFixed(2)
    dollarin.value = ''
})
