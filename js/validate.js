const validateContact = () => {
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");

  if (inputName) {
    inputName.addEventListener("change", function () {
      this.value.length < 3
        ? this.classList.add("error")
        : this.classList.remove("error");
    });
  }
  if (inputEmail) {
    inputEmail.addEventListener("change", function () {
      emailAndDomen(this.value)
        ? this.classList.remove("error")
        : this.classList.add("error");
    });
  }
};

function emailAndDomen(value) {
  return (
    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) ||
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(
      value
    )
  );
}

validateContact();
