
const form = document.querySelector('.login-form');

form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail === "" || password === "") {
    alert("Заполнены не все поля ввода");
//     form.reset();
    return;
  }
  const authorizationFormData = {
    site: location.href,
  };

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    authorizationFormData[name] = value;
  });
  console.log(authorizationFormData);

  form.reset;
}
