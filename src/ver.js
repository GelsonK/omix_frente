
function start() {

    var meno = document.querySelector("#meno")
    var mobil = document.getElementById("mobil")
    if (mobil.classList.contains("ver")) {

        mobil.classList.remove("ver")
        meno.src = '../icon/meno.png'
    }
    else {
        mobil.classList.add("ver")
        meno.src = '../icon/close.png'
    }
}

function rota(params) {

    if (params == 1) return window.location.href = './index.html'
    if (params == 2) return window.location.href = './cadastro.html'
    if (params == 3) return window.location.href = './sobre.html'
    if (params == 4) return window.location.href = './acompanha.html'
    if (params == 5) return window.location.href = './add.html'

}

function cadastrar() {

   window.location.href='./cadastro.html'
}

function omix(){
    
    window.location.href='./acompanha.html'
}
function home(){
    window.location.href='./index.html'
}