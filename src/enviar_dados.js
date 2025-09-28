const form = document.getElementById("meuForm");
const preview = document.getElementById("preview");
const fotoInput = document.getElementById("foto");
var pro = document.querySelector(".pro")
// Pré-visualização da imagem
fotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
    preview.style.maxWidth = "120px";
    preview.style.borderRadius = "8px";
  }
});

// Capturar e enviar o formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  pro.classList.add("ver_c")

  const formData = new FormData(form); // pega todos os campos inclusive file


  try {
    const response = await fetch("https://omix-front.onrender.com/cad", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(resposta => {
        console.log(resposta.dados.omix);
        localStorage.setItem("omix",resposta.dados.omix)

        form.reset();
        pro.classList.remove("ver_c")
        preview.src = "../icon/person.png";
        window.location.href='../omix.html'
      })


  } catch (err) {
    console.error("Erro na requisição:", err);
  }
});


function al() {

  var alerta = document.querySelector('.alerta')

  alerta.classList.add("all")

  setTimeout(nao(), 3000)

  var alerta = document.querySelector('.alerta')

}

function nao() {

  var alerta = document.querySelector('.alerta')
  alerta.classList.remove('all')

}