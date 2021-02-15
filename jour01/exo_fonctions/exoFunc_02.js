/*Exercice 2

Créer un objet membre avec les attributs 'id', 'nom' et 'grade' 
et une méthode 'toString' personnalisée. 
Créer un objet 'équipe' qui contient des membres. 
Créer une instance de 'équipe' et y ajouter des membres. 
Afficher les membres de 'équipe' en utilisant la fonction 'toString' de 'membre'.
*/

function membre(id, nom, grade) {
  this.id = id;
  this.nom = nom;
  this.grade = grade;
}
membre.prototype.toString = function () {
  html = `id: ${this.id} // nom : ${this.nom} // grade : ${this.grade}`;
  return html;
};

function equipe() {
  this.members = new Array();
  this.addMember = function (membre) {
    var i = this.members.length;
    this.members[i] = membre;
    return i;
  };
  this.toString = function () {
    return this.members.join(" \n");
  };
}

var monEquipe = new equipe();

monEquipe.addMember(new membre(0, "Flaviu", "A"));
monEquipe.addMember(new membre(1, "Kamal", "A+"));
monEquipe.addMember(new membre(2, "Leo", "A"));
monEquipe.addMember(new membre(3, "Tiago", "B"));
monEquipe.addMember(new membre(4, "Paulo", "A"));

console.log(monEquipe.toString());
