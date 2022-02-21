const caixasProdutos = document.querySelectorAll('.caixa-produtos');
const btnProx = document.querySelectorAll('.nxt-btn');
const btnVoltar = document.querySelectorAll('.pre-btn');

caixasProdutos.forEach((item, i) => {
    let dimensoesCaixa = item.getBoundingClientRect();
    let tamanhoCaixa = dimensoesCaixa.width;

    btnProx[i].addEventListener('click',() => {
        item.scrollLeft += tamanhoCaixa;
    } );
    btnVoltar[i].addEventListener('click',() => {
        item.scrollLeft -= tamanhoCaixa;
    } )
    
})