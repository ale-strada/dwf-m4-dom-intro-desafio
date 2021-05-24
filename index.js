const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  let ulEl = document.querySelector(".lista");
  while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild);
  }

  cosasQueAprendimos.forEach((element) => {
    const newLiEl = document.createElement("li");
    var newContent = document.createTextNode(element.tema);
    newLiEl.className = element.class;
    newLiEl.appendChild(newContent);
    ulEl.appendChild(newLiEl);
    console.log(newLiEl);
  });

  console.log(ulEl);
}
main();
