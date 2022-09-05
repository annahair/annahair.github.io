//EVENTO ABRIR E FECHAR MENU
document.querySelector('.hamburguer').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
});

// eventos para fechar o menu, ele basicamente faz o inverso do script anterior
//quando vc clicar no elemento .fechaMenu

document.querySelector('.fechaMenu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
});
/*ORÇAMENTO
 valor por páginas: R$ 100,00
script: 10% do custo das páginas  | preco = preco + (preco * 10/100) ou 1.1
layout: R$ 500,00
taxa de urgência: 10% do custo total por semana de urgência*/

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} pessoas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
     
    let preco = qtde * 5;
   
   
   
   
   
    document.querySelector("#preco").innerHTML = `${preco.toFixed()} doces para sua festa`
}




