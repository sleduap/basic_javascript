const ul = document.querySelector(".people")
const person = ["ram", "shyam", "sudarshan", "hari"];

let html =``;
person.forEach(people => {
    html+=`<li style="color:purple">${people}</li>`
    
    
});
console.log(html)
ul.innerHTML = html