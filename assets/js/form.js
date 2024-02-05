const email = document.querySelector("#email");
const message = document.querySelector("#message");

function updateFeedback(el, type, msg) {
  el.parentNode.querySelector("label > span").className = type;
  el.parentNode.querySelector("label > span").innerHTML = msg;
}
// Email validation regex taken from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
function validateEmail(errors = []) {
  if (!email.value.endsWith("@stud.ntnu.no")) {
    updateFeedback(email, "error", "Email domain must be stud.ntnu.no");
    errors.push(email);
  } else if (
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    updateFeedback(email, "error", "Email must be valid");
    errors.push(email);
  } else updateFeedback(email, "success", "✔");
}
function validateMessage(errors = []) {
  if (message.value.length < 50) {
    updateFeedback(
      message,
      "error",
      "Message must be at least 50 characters long"
    );
    errors.push(message);
  } else updateFeedback(message, "success", "✔");
}

email.addEventListener("focusout", function (event) {
  validateEmail();
});
message.addEventListener("focusout", function (event) {
  validateMessage();
});
document.querySelector("form").addEventListener("submit", function (event) {
  const errors = [];

  validateEmail(errors);
  validateMessage(errors);

  if (errors.length === 0) {
    document.querySelector("dialog").showModal();
    document.querySelector("form").reset();
    updateFeedback(email, "", "");
    updateFeedback(message, "", "");
  } else {
    errors[0].focus();
  }

  event.preventDefault();
  return false;
});

document.querySelector("dialog > button").addEventListener("click", () => {
  document.querySelector("dialog").close();
  document.querySelector("input").focus();
});
