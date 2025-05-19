const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let corIndex = 0;
let intervalId = null;

function mudaCor(event) {
  pararAuto();
  ligar[event.target.id]();
}

const proximoIndex = () => {
  corIndex = corIndex < 2 ? ++corIndex : 0;
};

const semaforoAuto = () => {
  const cores = ['red', 'yellow', 'green'];
  const cor = cores[corIndex];
  ligar[cor]();
  proximoIndex();
};

const pararAuto = () => {
  clearInterval(intervalId);
}

const ligar = {
  red: () => {
    (img.src = 'img/vermelho.png'), (img.alt = 'Semáforo vermelho');
  },
  yellow: () => {
    (img.src = 'img/amarelo.png'), (img.alt = 'Semáforo amarelo');
  },
  green: () => {
    (img.src = 'img/verde.png'), (img.alt = 'Semáforo verde');
  },
  auto: () => intervalId = setInterval(semaforoAuto, 1000),
};

buttons.addEventListener('click', mudaCor);