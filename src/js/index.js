const botaoPlataforma= document.querySelector('.btn-plataforma')
const listaPlataforma= document.querySelector('.btn-plataforma .plataformas')

botaoPlataforma.addEventListener("click", function(){
    console.log(listaPlataforma)
    listaPlataforma.classList.toggle("ativo")
})
