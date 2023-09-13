import "./styles/main.scss";
import { Form } from "./js/form";
import { Cookies } from "./js/cookies";
import { ScrollToTop } from "./js/scrollToTop";
import logo from "./assets/logo.svg";
import fb from "./assets/icons/icon-fb.svg";
import insta from "./assets/icons/icon-insta.svg";
import phone from "./assets/icons/icon-phone.svg";
import home from "./assets/icons/icon-home.svg";
import mail from "./assets/icons/icon-mail.svg";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

 // icons
  const logoImg = document.getElementById("logo");
  logoImg.src = logo;
  const fbImg = document.getElementById("fb");
  fbImg.src = fb;
  const inImg = document.getElementById("in");
  inImg.src = insta;
  const phoneImg = document.getElementById("callus");
  phoneImg.src = phone;
  const phone1Img = document.getElementById("phone1");
  phone1Img.src = phone;
  const homeImg = document.getElementById("home");
  homeImg.src = home;
  const mailImg = document.getElementById("mail");
  mailImg.src = mail;

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
  const submitBtn = document.querySelector(".submit-text");
  const validator = new Form(form, fields, loader, submitBtn);

  // cookie banner
  const cookieBanner = document.querySelector(".cookies");
  const cookies = new Cookies(cookieBanner);
});

//scroll to top button
const scrollToTopBtn = document.querySelector("#scrollToTop");
const top = new ScrollToTop(scrollToTopBtn);