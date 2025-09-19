document.addEventListener('DOMContentLoaded', () => {
//BUTTON CLASSES
const IzMaker = document.getElementById('IZ');
const LzMaker = document.getElementById('LZ');
const AWMaker = document.getElementById('AW');
const TWMaker = document.getElementById('TW');
const NNMaker = document.getElementById('NN');
const CSMaker = document.getElementById('CS');
//FONT HAVERS
const ijoIlozellig = document.querySelectorAll('.Ilozellig'); // Selects elements by class
const ijoLukazellig = document.querySelectorAll('.Lukazellig'); // Selects elements by class
const ijoTowitela = document.querySelectorAll('.Towitela'); // Selects elements by class
const ijoAWT = document.querySelectorAll('.AWT'); // Selects elements by class
const ijoNSTAN = document.querySelectorAll('.NSTAN'); // Selects elements by class
const ijoConsolas = document.querySelectorAll('.Consolas'); // Selects elements by class
//ÞINGS TO CHANGE
const Entry = document.querySelectorAll('.Entry');
//ILOZELLIGER
  IzMaker.addEventListener('click', () => {
    Entry.forEach((element) => {
      element.classList.remove('Lukazellig');
      element.classList.remove('NSTAN');
      element.classList.remove('Consolas');
      element.classList.remove('AWT');
      element.classList.remove('Towitela');
      element.classList.add('Ilozellig');
    });
  });
//LUKAZELLIGER
  LzMaker.addEventListener('click', () => {
    Entry.forEach((element) => {
        Entry.classList.remove('Ilozellig');
        Entry.classList.remove('NSTAN');
        Entry.classList.remove('Consolas');
        Entry.classList.remove('AWT');
        Entry.classList.remove('Towitela');
        Entry.classList.add('Lukazellig');
    });
  });
//NSTANER
  NNMaker.addEventListener('click', () => {
    Entry.forEach((element) => {
        Entry.classList.remove('Ilozellig');
        Entry.classList.remove('Lukazellig');
        Entry.classList.remove('Consolas');
        Entry.classList.remove('AWT');
        Entry.classList.remove('Towitela');
        Entry.classList.add('NSTAN');
    });
  });
//CONSOLASER
  CSMaker.addEventListener('click', () => {
    Entry.forEach((element) => {
        Entry.classList.remove('Ilozellig');
        Entry.classList.remove('NSTAN');
        Entry.classList.remove('Lukazellig');
        Entry.classList.remove('AWT');
        Entry.classList.remove('Towitela');
        Entry.classList.add('Consolas');
    });
  });
//TOWITELAER
  TWMaker.addEventListener('click', () => {
    Entry.forEach((element) => {
        Entry.classList.remove('Ilozellig');
        Entry.classList.remove('NSTAN');
        Entry.classList.remove('Consolas');
        Entry.classList.remove('AWT');
        Entry.classList.remove('Lukazellig');
        Entry.classList.add('Towitela');
    });
  });
//AWTER
  AWMaker.addEventListener('click', () => {
    Entry.forEach((element) => {
        Entry.classList.remove('Ilozellig');
        Entry.classList.remove('NSTAN');
        Entry.classList.remove('Consolas');
        Entry.classList.remove('Towitela');
        Entry.classList.remove('Lukazellig');
        Entry.classList.add('AWT');
    });
  });
});
