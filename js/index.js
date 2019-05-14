for (let i = 99; i >= 1; i--) {
    if (i % 2 ===1) {
        console.log(i);
        console.log()
    }
}

let submit = document.querySelector('#submit');
submit.addEventListener('click', func);
function func(){
    document.getElementById('smile').style.display = "none";
    submit.style.display = "none";
}