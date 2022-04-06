console.clear();
const prompt = require('prompt-sync')();
let hora = 3;

const rotas = ["onibus", "bicicleta", "uber"];
let momento = {
    vida: 5,
    fome: 0,
    umidade: 0,
    sono: 0,
    reputacao: 4,


    aumentoFome: function (){
            if (this.fome == 2){
        this.vida--;
        console.log(`Você está ficando com fome, melhor ir comprar um lanchinho.`);
    } else if (this.fome >= 4 && this.fome <= 3){
        this.vida--;
        console.log(`${nome} sua vista está ficando um pouco embassada, alguem tem um sal pra pressão?`);
    } else if (this.fome >= 5){
        this.vida-- ;
        console.log(`${nome} você desmaiou no caminho, alguem está chamando a ambulância.`);
    };

    if (this.sono == 3){
        this.sono++;
        this.reputacao--
        console.log('Aaarh que sono... nossa acho que você precisa de um café.');
    } else if (this.sono == 5){
        this.sono++;
        this.reputacao--;
        console.log('Opa, acho que não tenho mais foraças para abrir os olhos. E se eu tirasse um cochilo no banheiro?');
    }
    }
};


function qualReputacao(){
    if (momento.reputacao <= 1) {
        reputacao -= 0;
        console.log(`${nome}, você falhou e o Jõao foi demitido.`)
    }
};


function horario() {
    if (hora == 0){
        console.log(`${nome}, você falhou e o Jõao foi demitido.`)
   
    };
};

function mostrarTudo(){
    console.log(`
        Você ainda tem ${hora} horas para poder chegar ao trabalho.
        Você está ${momento.umidade}/5 molhado.
        Está ${momento.fome}/5 faminto..
        E sua reputação no emprego é de ${momento.reputacao}/5.
        `);
};

// Eventos aleatórios para o meio do caminho.
function obstaculosCaminho(){
    const obstaculosCaminho = ['Chuva', 'Carro na poça', 'Sol de 40 graus', 'Você é assaltada'];

    let evento = Math.floor(Math.random() * 5);
    let eventoaleatorio;

    if (evento == 0) {
        eventoaleatorio = obstaculosCaminho[0];
        console.log('Assim que você saiu de casa, começou a chover e você se deu conta de que esqueceu de levar o guarda chuva (bem que sua mãe avisou), agora vai chegar ensopada no trabalho.\n');
        momento.umidade++;
        momento.reputacao--;
        hora--;
        mostrarTudo();
console.log();
        console.log("Agora Jõao pode fazer algumas escolhas." )
            obstaculosChuva();
    } else if (evento == 1) {
        eventoaleatorio = obstaculosCaminho[1];
        console.log('\n Você estava caminhando  e um carro passou bem em cima da poça dágua, agora você está todo(a) encharcado(a)... Tenho quase certeza que ele saiu rindo.\n ');
        momento.umidade++;
        momento.umidade++;
        momento.reputacao--;
        hora--;
        mostrarTudo();
        obstaculosChuva()
    } else if (evento == 2) {
        eventoaleatorio = obstaculosCaminho[2];
        console.log('Como pode já ter um sol para cada um, essa hora da manhã? Você segue pensando enquanto o suor escorre pelo seu corpo todo enquanto anda.');
        momento.umidade++;
        momento.reputacao++;
        hora--;
        mostrarTudo();
        obstaculosSol();
    } else if (evento == 3) {
        eventoaleatorio = obstaculosCaminho[3];
        console.log('Você está atravessando a rua destraida ouvindo um áudio no whatsapp quando nota dois caras em uma moto se aproximando, você até pensa em correr mas lá seu foi sua bolsa. Levaram até seu bilhete unico');
        momento.reputacao--;
        hora--;
        mostrarTudo();
        }
};

// Eventos específicos para random Sol
function obstaculosSol(){
    const obstaculosSol = ['Parar para tomar uma água', 'Desistir e ir para casa'];

    let sorteioSol = Math.floor(Math.random() * 3);
    let eventoSol;

    if (sorteioSol == 0) {
        eventoSol = obstaculosSol[0];
        console.log('Você parou em uma banca de jornal e comprou uma água, pagou um real e ela não fez creck para abrir, mas pelo menos o calor diminuiu.');
        momento.umidade--;
        momento.reputacao++;
        mostrarTudo();
    } else if (sorteioSol == 1) {
        eventoSol = obstaculosSol[1];
        console.log('Eu não sou obrigado a nada, vou voltar pra casa antes que eu desmaie.');
        momento.umidade++;
        momento.reputacao--;
                mostrarTudo();
                qualReputacao()
    } 
};

// Eventos específicos para random chuva
function obstaculosChuva(){
    const obstaculosChuva = ['Voltar para casa para trocar de roupa', 'Ir todo molhado', 'Ligar para a chefe para informar o ocorrido'];

    let sorteioChuva = Math.floor(Math.random() * 4);
    let eventoChuva;

    if (sorteioChuva == 0) {
        eventoaChuva = obstaculosChuva[0];
        console.log('Você decidiu voltar para casa para trocar de roupa, não achou necessário avisar para ninguem, afinal ninguem paga suas contas, ou será que pagam...');
        momento.umidade--;
        momento.reputacao--;
        momento.reputacao--;
        momento.reputacao--;
        mostrarTudo();
    } else if (sorteioChuva == 1) {
        eventoaChuva = obstaculosChuva[1];
        console.log('Você pensou e pensou de novo, mas decidiu ir molhado mesmo, melhor pegar uma gripe do que não ter emprego, né..');
        momento.umidade++;
        momento.umidade++;
        momento.umidade++;
        momento.reputacao++;
        momento.reputacao++;
        mostrarTudo();
    } else if (sorteioChuva == 2) {
        eventoaChuva = obstaculosChuva[2];
        console.log('A sua escolha depois desta tragédia foi a de ligar para a chefe para informar o ocorrido, porque mesmo ela sendo uó, o melhor é fazer uma média.');
        console.log('Ela te autorizou a ir para casa trocar de roupas, e disse que ficou feliz por você ter avisado desta vez.\n')
        momento.umidade--;
        momento.umidade--;
        momento.reputacao++;
        momento.reputacao++;
        momento.reputacao++;
        mostrarTudo();
}
};


let jogar = 'sim';

const nome = prompt('Olá, esse é o JOGO DA VIDA, para iniciar, digite seu nome: \n');

while (jogar == 'sim'){
    console.log(`Olá ${nome} seja bem vindo(a) á sua própria vida!\n
    Sim, você não leu errado, nada melhor que viver a mesma vida online e ofline não é mesmo? Então para que isso seja possivel, criei uma réplica da vida real de um morador da cidade de São Paulo, tentando chegar ao seu local de trabalho. (Isso sim vai ser uma verdadeira aventura!)\n `);

    console.log(`A história é a seguinte, Jõao é morador do bairro do Vila Aurora na zona norte de São Paulo e trabalha em uma empresa de telemarketing no bairro do Bela Vista. Jõao não tem sido tão produtivo assim no trabalho, tem chegado atrasado vários dias na semana e essa segunda feira faltou porque estava de ressaca. Sua chefe te deu uma última chance, disse que se Jõao atrasar mais algum dia, estará demitido, sua missão no dia de hoje é que Jõao chegue no horário.`);


    let locomocao;
    prompt('Vamos nessa mano. (Aperte ENTER para continuar.)');
    console.log();



    
    principal: for (i = 0; i < 4; i++){
        direcao = prompt('Você acorda no susto em cima do horário que deveria estar saindo, come um pão com margarina rápido e pensa se vai de Onibus ou Bicicleta?\n').toLowerCase();
        console.log();

        while (direcao != 'onibus' && direcao != 'bicicleta'){
            direcao = prompt('Este caminho não dá né! Você deve escolher Onibus ou Bicicleta.\n');
        }
        if (direcao == 'onibus'){
            hora--;
            momento.aumentoFome();
                obstaculosCaminho();
        } else if (direcao == 'bicicleta'){
            hora--;
            momento.fome +4;
                obstaculosCaminho();
                momento.aumentoFome();
        }                break principal;

            
        }
        mostrarTudo();
        qualReputacao();
        

    };


           let final = prompt(`${nome} você deseja saber qual foi o final do Jõao?\n`).toLowerCase


         if (momento.reputacao == 0){
        console.log('Infelizmente é um preguiçoso e foi demitido. ');
    } else if (reputacao >= 1 && reputacao <=3 ){
        console.log('Você está por um fio neste emprego, amanhã chegue na hora!');
    } else {
        console.log(`
        Parabéns! Você fez tudo certo, não vai ser mandado embora ainda. Mas estamos de olho.
        `);
    };

   

    jogar = prompt('Deseja jogar novamente? ');
