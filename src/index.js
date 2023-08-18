import "./styles/main.scss";
import { Form } from "./js/form";
import { Cookies } from "./js/cookies";
import logo from "./assets/logo.png";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  //icons
  const logoImg = document.getElementById("logo");
  logoImg.src = logo;

  //form
  const form = document.querySelector("#contact-form");
  const fields = [
    "name",
    "phone",
    "email",
    "message",
    "acceptdata",
    "acceptpolicy",
  ];
  const loader = document.querySelector(".lds-ring");
  const submitBtn = document.querySelector(".submit-text")
  const validator = new Form(form, fields, loader, submitBtn);

// cookie banner
const cookieBanner = document.querySelector(".cookies");
const cookies = new Cookies(cookieBanner);

});
