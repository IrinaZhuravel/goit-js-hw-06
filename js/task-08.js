
const form = document.querySelector('.login-form');

form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail === "" || password === "") {
    return alert("Заполнены не все поля ввода");
  }
  console.log({
    mail,
    password,
  });
  event.currentTarget.reset();
}