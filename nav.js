const createNav = () => {
    let nav = document.querySelector('.barranav');

    nav.innerHTML= ` <div class="nav">
    <img class="logomarca" src="imagens/dark-logo.png" alt="" >
 <div class="itens-nav"> 
     <div class="pesquisar">
         <input type="text" class="caixapesquisa" placeholder="pesquisar marca ou produto">
         <a href="pesquisa.html"> <button class="btnpesquisar"> Pesquisar</button></a>

 </div>
 <a href="#"><img class ="user" src="imagens/user.png" alt=""></a>
 <a href="#"><img class="cart"src="imagens/cart.png" alt=""></a>
</div>
</div>
<ul class="caixa-links">
    <li class="link-item"><a href="index.html" class="link">inicio</a></li>
    <li class="link-item"><a href="pesquisa.html" class="link">Feminino</a></li>
    <li class="link-item"><a href="pesquisa.html" class="link">Masculino</a></li>
    <li class="link-item"><a href="pesquisa.html" class="link">Infantil</a></li>
    <li class="link-item"><a href="pesquisa.html" class="link">Acessórios</a></li>

`;

}

 createNav();
