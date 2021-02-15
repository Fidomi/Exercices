const $ = (ele) => {
  return document.querySelector(ele);
};

//Création d'un objet Questionnaire et de ses méthodes
function Questionnaire(quest, rep1, rep2, rep3, rep4) {
  //Où rep sont des objets {texte:énoncé réponse,valeur:booléen}
  this.quest = quest;
  this.rep1 = rep1;
  this.rep2 = rep2;
  this.rep3 = rep3;
  this.rep4 = rep4;
}
Questionnaire.prototype.createQuestionnaire = function () {
  html = `<h3>${this.quest}</h3>
      <label for="${this.rep1.id}+1">${this.rep1.texte}</label>
      <input type="checkbox" id="${this.rep1.id}" name="${this.rep1.id}">
      <label for="${this}+2">${this.rep2.texte}</label>
      <input type="checkbox" id="${this}+2" name="${this}+2">
      <label for="${this}+3">${this.rep3.texte}</label>
      <input type="checkbox" id="${this}+3" name="${this}+3">
      <label for="${this}+4">${this.rep4.texte}</label>
      <input type="checkbox" id="${this}+4" name="${this}+4">`;
  $("#monQuestionnaire").innerHTML += html;
};

let questA = "Quelle est la couleur du cheval blanc d'Henri IV?";
let repA1 = { texte: "blanc", valeur: true, id: "repA1" };
let repA2 = { texte: "noir", valeur: false, id: "repA2" };
let repA3 = { texte: "rose", valeur: false, id: "repA3" };
let repA4 = { texte: "gris", valeur: false, id: "repA4" };

const questionnaireA = new Questionnaire(questA, repA1, repA2, repA3, repA4);
questionnaireA.createQuestionnaire();
