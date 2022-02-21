const imagemProduto = document.querySelectorAll(".imagens-produtos img");
const slideProduto = document.querySelector(".slider");

let slideAtivo = 0;

imagemProduto.forEach((item, i) => {
    item.addEventListener('click', ()=> {   
        imagemProduto[slideAtivo].classList.remove('ativo');
        item.classList.add('ativo');
        slideProduto.style.backgroundImage = `url('${item.src}')`; 
        slideAtivo = i;
    })
})

const tamanhoBtn = document.querySelectorAll('.tamanho-btn');
let btnPressionado = 0;

tamanhoBtn.forEach((item,i)=>{
    item.addEventListener('click',() =>{
        tamanhoBtn[btnPressionado].classList.remove('check');
        item.classList.add('check');
        btnPressionado = i;




    })




})