export class Form {
  constructor(form, fields, loader, submitBtn) {
    this.form = form;
    this.fields = fields;
    this.loader = loader;
    this.submitBtn = submitBtn;
    this.formData = {};
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      let errors = 0;

      self.fields.forEach((field) => {
        const input = this.form[field];

        if (self.validateFields(input) === false) {
          errors++;
        }
      });

      if (errors === 0) {
        this.formData = new FormData(this.form);
        this.sendMail(this.formData);
        this.submitBtn.style.display = "none";
        this.loader.style.display = "block";
      }
    });
  }

  validateFields(field) {
    let emailValidRegEx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (field.name !== "message" && field.value.trim() === "") {
      this.setStatus(field, "Wypełnij to pole", "error");
      return false;
    }
    if (
      field.name === "phone" &&
      (field.value.length < 7 || !isFinite(field.value))
    ) {
      this.setStatus(field, "Podaj prawidłowy numer telefonu", "error");
      return false;
    }

    if (field.name === "email" && !field.value.match(emailValidRegEx)) {
      this.setStatus(field, "Podaj prawidłowy adres e-mail", "error");
      return false;
    }
    if (field.type === "checkbox" && !field.checked) {
      this.setStatus(field, "Zaznacz zgodę", "error");
      return false;
    }
    this.setStatus(field, null, "success");
    return true;
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message");
    if (status === "error") {
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
    if (status === "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("input-error");
    }
  }

  makeRequest(title, formData, endpoint) {
    return fetch(`https://formsubmit.co/ajax/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        name: `${formData.get("name")}`,
        email: `${formData.get("email")}`,
        phone: `${formData.get("phone")}`,
        message: `${formData.get("message")}`,
      }),
    }).then((response) => response.json());
  }

  sendMail(formData) {
    const request1 = this.makeRequest(
      "So white Clinic Contact Form",
      formData,
      "ca26f5ec6f466a4de7ad179895f5f8d8"
    );
    const request2 = this.makeRequest(
      "So white Clinic Contact Form",
      formData,
      "708204b20fd8f37dc286446700a680df"
    );

    Promise.all([request1, request2])
      .then(([data1, data2]) => {
        console.log(data1, data2);
        window.location.replace("/thankyou.html");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
