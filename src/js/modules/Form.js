class Form {
  constructor(formSelector) {
    this.forms = document.querySelectorAll(formSelector);
  }

  async postForm(url, data) {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      return await res.text();
    } else {
      return null;
    }
  }

  clearInputs(inputs) {
    inputs.forEach((inputItem) => (inputItem.value = ""));
  }

  handleForm(e, formItem) {
    e.preventDefault();

    const message = document.createElement("div");
    message.style.cssText = `
        font-size: 20px;
        color: #bb5757;
        padding-top: 10px;
      `;
    message.textContent = "Отправка...";
    formItem.parentNode.appendChild(message);

    let formData = new FormData(formItem);

    this.postForm("assets/question.php", formData).then((res) => {
      if (res !== null) {
        message.textContent = "Сообщение отправлено";
        const inputs = formItem.querySelectorAll("input");
        this.clearInputs(inputs);
      } else {
        message.textContent = "Что-то пошло не так";
      }
      setTimeout(() => {
        message.remove();
      }, 5000);
    });
  }

  init() {
    this.forms.forEach((formItem) => {
      formItem.addEventListener("submit", (e) => this.handleForm(e, formItem));
    });
  }
}

export default Form;
