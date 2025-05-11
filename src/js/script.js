

//esse while se baseia na raiz do login
while(true){
    let user = prompt("Usuário") //descobri agora que let não pode ser chamada no console de escopo global, não acho q seria útil chamar no console mesmo, aliás faria o código mais seguro se apropriada à questão de senha e login
    if(user!=""){
        let senha = prompt("senha")
        if(senha!=""){
            alert("Bem vindo(a), agora iniciaremos o cadastro de vinhos, senhor(a) "+user+".")
            console.log("Olá, senhor(a) "+user)
            break                       //momento do break, apenas quando realizado o login de user e senha
        }
        else{alert("Tente novamente")

        }
    }
    else{
        alert("Tente novamente")
    }
}
//os proximos momentos só poderão acontecer caso senha e user tiverem valor, caso não tenham, o while não será quebrado, ou seja, aqui não necessariamente precisa de uma condição pra acabar
//a unica condição precisa é q o while se quebre, se ele não se quebrar, nada aqui em baixo irá acontecer

var contador  = parseInt(0)

while(true){
    contador++
    var vinho = prompt("Qual é o nome do vinho?")
    console.log(contador+"º - "+vinho)
    var tipo = prompt("Qual o tipo do vinho?")
    console.log("Tipo: "+tipo)

    var carac //característica atríbuida relacionada à idade do vinho, sendo sua safra
    var idade = parseInt(prompt("Qual a idade do vinho? Caso não tenha colocado um número, será considerado um indefinido."))
    if (idade===NaN){ //caso não tenha nenhum número inteiro como idade, a idade será considerada 2025 - Juvenil
        var idade=2025
    }
    if ((idade<=2025)&&(idade>=2020)){
        carac = "Juvenil"
    }
    else if((idade<=2019)&&(idade>=2015)){
        carac = "Amadurecido"
    }
    else if(idade<=2015){
        carac = "Antigo"
    }
    console.log("Safra: "+idade+" -- "+carac)
    var estoque = parseInt(prompt("Quantos vinhos estão disponíveis no estoque? (Caso o número seja 5 ou menor, o estoque será considerado baixo. E caso não tenha número, será considerado indefinido.)"))
    if (estoque===NaN){ //não consigo fazer com que variáveis declaradas indefinidas se tornem em numeros
        var estoque = 30 //eu também tentei (estoque = 30), aí deixei (var estoque = 30)
    }
    if (estoque<=5){
        console.log("Estoque: "+estoque+" - Estoque baixo")
    }
    else{
        console.log("Estoque: "+estoque)
    }
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

    alert('LEIA COM ATENÇÃO. Aperte com o botão direito do mouse na página, vá em "Inspecionar" e logo depois "console", caso queira cadastrar outro vinho, digite qualquer coisa, caso não queira, digite "Não".')
    var loopbreak = prompt("Deseja cadastrar outro vinho? (Não ou vazio = Terminar cadastro)")

    if((loopbreak=="Não")||(loopbreak=="não")||(loopbreak=="Nao")||(loopbreak=="nao")){
        break
    }
}



//21:02 10/05/2025




