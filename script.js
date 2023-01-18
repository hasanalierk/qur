const button = document.getElementById("button");
const input = document.getElementById("input");
const par = document.getElementById("p");
const img = document.querySelector(".img");

// console.log(imgDiv);
// console.log(par);

// console.log(button);
// console.log(input);

button.addEventListener("click", kura);
window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    button.click();
  }
});

function kura(e) {
  // e.preventDefault();

  let value = input.value.split(",");
  let random = Math.floor(Math.random() * value.length);

  console.log(value);
  console.log(value.length);
  console.log(random);
  console.log(value[random]);

  // let arr = ["./kedi.jpeg","./göz.jpeg","./ronaldo.jpeg","teyze.jpeg"]
  // img.src = arr[[random]]
  par.innerHTML = value[random];
  if (value[random] == "oguz") {
    img.src = "./oguz.jpeg";
  } else if (value[random] == "fatih") {
    img.src = "./fatih.jpeg";
  } else if (value[random] == "haribo") {
    img.src = "./haribo.jpeg";
  } else if (value[random] == "kadir") {
    img.src = "./kadir.jpeg";
  } else if (value[random] == "cengiz") {
    img.src = "./cengiz.jpeg";
  } else if (value[random] == "ibo") {
    img.src = "./ibo.jpeg";
  } else if (value[random] == "hasi") {
    img.src = "./hasii.jpeg";
  } else if (value[random] == "taner") {
    img.src = "./taner.jpeg";
  } else if (value[random] == "yusuf") {
    img.src = "./yusuf.jpeg";
  }
  input.value = ``;
  // input.focus();
}
