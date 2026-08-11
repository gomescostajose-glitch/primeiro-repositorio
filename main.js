const botoes = document.queryselectorA11("button");

botoes.forEach(function   (botao) {
    let curtiu = false
    botao.addEventlistener("clik", botaoclicado);
    function botaoclicado () {
        console.log("fui clicado");
        let texto = botao.queryselector("span");
        if (curtiu === false) {
            texto.textcontent++;
            curtiu = true;
            
        }
        
    }
    
})