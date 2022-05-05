let NamasteBtn = document.getElementById('But');

NamasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Your Contact');

NamasteBtn.textContent = 'Thank you we will Contact You soon';

}
