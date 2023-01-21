const boton = document.querySelector('.btn-inicio')
const portada = document.querySelector('.portada');

boton.addEventListener('click', () => {
    portada.style.animation = "animate_portada 2s linear";
    portada.style.padding = "0 0 110px 0";
    setTimeout(Redireccion_portafolio, 1500);  //1000 milisecundos === 1 segundo
})
function Redireccion_portafolio(){
    window.location.href = "/portafolio";
}