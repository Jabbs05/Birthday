const btn = document.querySelector('#btn')
const btnn = document.querySelector('#btnn')
const btnnn = document.querySelector('#btnnn')
const main = document.querySelector('.main')
const para = document.querySelector('p')
const head = document.querySelector('h4')
console.log(para)

function showAlert() {
    alert ("HAPPY BIRTHDAY");
    main.classList.add('none')
    para.classList.add('show')
    head.innerText = "Happy Birthdayy 🥳🥳🎂🎂"
  }
btnnn.addEventListener('click', showAlert)