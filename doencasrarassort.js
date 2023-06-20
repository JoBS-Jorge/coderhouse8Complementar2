const meuArrayDoencas = []

class DoencaRara {
    constructor (cid, nome, criticidade, temTratamento){
        this.cid = cid;
        this.nome = nome;
        this.criticidade = criticidade;
        this.temTratamento = temTratamento;
    }
}

const ordemCriticidadeAsc = (a,b) => a.criticidade - b.criticidade

meuArrayDoencas.push(new DoencaRara("1122" , "Lupus" , 2 , true))
meuArrayDoencas.push(new DoencaRara("2233" , "Angioedema" , 3 , true))
meuArrayDoencas.push(new DoencaRara("6644", "Esclerose Lateral Amiotrófica" , 1 , false))
meuArrayDoencas.push(new DoencaRara("884544", "HPTEC" , 1 , false))

function incluirDoenca(){
    let resposta = "Doença Incluída!"
    let novaDoenca = {
        cid: prompt("Digite o CID"),
        nome: prompt("Qual o nome da Doença Rara?"),
        criticidade: Number(prompt("Digite o nível de criticidade (1 a 5)")),
        temTratamento: prompt("Possui Tratamento? (Sim ou não)").toUpperCase()
    }

    let validacao = true
    if (novaDoenca.temTratamento == "SIM") {
        validacao = true
    } else {
        validacao = false
    }
    let newDoenca = new DoencaRara(novaDoenca.cid , novaDoenca.nome, novaDoenca.criticidade , validacao)
    
    meuArrayDoencas.push(newDoenca)

    return console.log(resposta)
}


const meuBotao = document.createElement("button");
meuBotao.innerHTML = "Incluir Doença";
meuBotao.addEventListener("click", () => {
    incluirDoenca();
    console.log(meuArrayDoencas.sort(ordemCriticidadeAsc))
});
document.body.appendChild(meuBotao);


console.log(meuArrayDoencas.sort(ordemCriticidadeAsc))