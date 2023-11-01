var inputField = document.getElementById("myInput");

inputField.addEventListener("keydown", function (event) {
  var keydownMessage = document.getElementById("keydownMessage");
  keydownMessage.textContent = `Key pressed: ${event.key}`;
});
