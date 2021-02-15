const $ = (ele) => {
  return document.querySelector(ele);
};

$("#name1").addEventListener("click", (e) => {
  e.preventDefault;
  alert($("#name").value);
});

$("#phone1").addEventListener("click", (e) => {
  e.preventDefault;
  alert($("#phone").value);
});

$("#adresse1").addEventListener("click", (e) => {
  e.preventDefault;
  alert($("#adresse").value);
});

$("#envoyer").addEventListener("click", (e) => {
  e.preventDefault();
  let message =
    "<p>" +
    $("#name").value +
    "</p><br><p>" +
    $("#phone").value +
    "</p><br><p>" +
    $("#adresse").value +
    "</p>";
  $("#answer").innerHTML = "<p>" + message + "</p>";
});
