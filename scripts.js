var inputField = document.getElementById("myInput");

inputField.addEventListener("keydown", function (event) {
  var keydownMessage = document.getElementById("keydownMessage");
  keydownMessage.textContent = `Key pressed: ${event.key}`;
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "/index1";
});