const prompt = require('prompt-sync')(); //declara o prompt
console.clear()
console.log("A JORNADA DO HEROI");

console.log();

console.log("Trasgo era um gigante que vivia na floresta com seu irmão, tudo era tranquilo, até um terrivel dia, em que a floresta , que sempre foi tranquila, foi invadida por um monstro apavorante chamado Aragog, e estava com os seus 300 filhos, famintas por qualquer coisa que aparecesse na frente de seus olhos (O que não era difícil de acontecer pois cada um tinham 8 deles). Trasgo estava apavorado, pois apesar de ser um gigante com cara de malvado, ele não passava de um bom garoto. Pensou em todas as chances de escapar antes que elas pudessem chegar até onde ficava seu vilarejo e foi ai onde tudo começou ...");
console.log();

let respostaSim = 0;

let primeiraPergunta = prompt("Trasgo estava com um lança chamas? (Responda com sim ou não) ").toUpperCase();
console.log();
console.log(primeiraPergunta + " ESTAVA.");
console.log();
    if  (primeiraPergunta == "SIM") {
    console.log("Ele se armou com o lança-chamas e caso elas o encontrem, ele estará preparado.")
    respostaSim++ 
    } else {
        console.log("Ele se escondeu atrás de uma rocha, pedindo aos céus que não seja encontrado.")
    }
    console.log();

let segundaPergunta = prompt("Trasgo estava proximo da capa da invisibilidade? (Responda com sim ou não) ").toUpperCase();
console.log();
console.log(segundaPergunta + " ESTAVA.");
console.log();
    if  (segundaPergunta == "SIM") {
    console.log("Ele conseguiu vestir a capa rapidamente, antes que a mamãe monstra o visse e chamasse seus filhotes.")
    respostaSim++    
} else {
        console.log("A mamãe monstra viu o gigante e chamou suas filhinhas para irem até aquele banquete.")
    }
    console.log();

let terceiraPergunta = prompt("Trasgo estava com um celular? (Responda com sim ou não) ").toUpperCase();
console.log();
console.log(terceiraPergunta + " ESTAVA.");
console.log();
    if  (terceiraPergunta == "SIM") {
    console.log("Ele mandou um SMS alertando seu irmão que estava em perigo, para que ele trouxesse ajuda, tomara que ele leia a tempo.")
    respostaSim++    
} else {
        console.log("Sem chances de chamar ajuda.")
    }
    console.log();

let quartaPergunta = prompt("Trasgo estava com uma varinha mágica? (Responda com sim ou não) ").toUpperCase();
console.log();
console.log(quartaPergunta + " ESTAVA.");
console.log();
    if  (quartaPergunta == "SIM") {
    console.log("Apesar de não poder fazer magia, por causa de algumas tretas antigas, ele está disposto a qualquer coisa para salvar sua vida.")
    respostaSim++    
} else {
        console.log("Ele já está imaginando seu triste fim.")
    }
    console.log();

let quintaPergunta = prompt("Trasgo estava com um animal voador? (Responda com sim ou não) ").toUpperCase();
console.log();
console.log(quintaPergunta + " ESTAVA.");
console.log();
    if  (quintaPergunta == "SIM") {
    console.log("Ele está tentando chegar até o animal sem causar mais alardes e tomara que as patinhas do animal aguente o peso do gigante.")
    respostaSim++    
} else {
        console.log("As chanches do Trasgo estão se esgotando.")
    }

    console.log();
if (respostaSim == 0) {
  console.log("Infelizmente Trasgo foi devorado por centenas de aranhas monstruosas, que fim mais trágico :(");
} else if (respostaSim == 1 || respostaSim == 2) {
  console.log("Quando as aranhas chegaram próximo a ele parece que sorriam, seus olhos malvados brilhavam, começaram a subir pelo seu corpo até que ele sente seu corpo desmaiando de dor... Abre os olhos e está em uma cabana bem simples... Opa quem me tirou de lá?");
} else if (respostaSim == 3) {
  console.log("Você estava conseguindo se esconder muito bem, até que vem uma vontade incontrolavél de espirrar...Porque isso tinha que acontecer??? Aragog te ouve e quase que imediatamente seu corpo já está sendo tomado por centenas de aranhas. Adeus mundo cruel.");
} else if (respostaSim == 4) {
  console.log("Trasgo ficou escondido por horas atras de uma enorme rocha, chegou a ver a vida passar diante de seus olhos, mas depois de atacar alguns pobres animais, as monstrinhas foram embora e Trasgo pode voltar a sua vida normal.");
} else if (respostaSim == 5) {
  console.log("Trasgo tentou passar pela saída da floresta com a capa de invisibilidade sem ser notado, mas acabou esbarrando em uma pedra bem em frente a uma das filhas da megéra mas antes dele conseguir ter certeza do que estava acontecendo ele saiu da capa junto com seu lança-chamas...")
  console.log("Começou a botar fogo em todas que via pela frente, mas elas continuavam vindo, vez ou outra enquanto corria, virava para traz elançava um feitiço para afastar os animais (mesmo não sendo nada bom nisso), conseguiu chegar em um hipogrifo, e montou em suas costas...")
  console.log("O animal amigo, vendo seu desespero para sair dali, mesmo sem entender o que estava acontecendo, bateu suas asas e voou o mais rápido que pode, permitindo que o gigante saisse dali, são e salvo.")
}
