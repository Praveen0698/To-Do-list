const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector("#ul");
var val = "";
btn.disabled = true;
input.addEventListener("keydown", () => {
  val = input.value;
  btn.disabled = false;
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  var li = document.createElement("li");
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var ull = document.createElement("ul")
  btn1.textContent = "Done";
  btn1.style.borderRadius = '10px';
  btn1.style.margin = '10px';
  btn1.style.padding = '3px 7px';
  btn1.style.border = 'transparent';

  btn2.textContent = "Delete";
  btn2.style.borderRadius = '10px';
  btn2.style.padding = '3px 7px';
  btn2.style.border = 'transparent';
  
  li.innerHTML = input.value + "   ";
  li.style.listStyle = "none";
  li.appendChild(ull);
  ul.appendChild(li);
  ull.appendChild(btn1);
  ull.appendChild(btn2);
  reset();
  btn1.addEventListener('click', () => {
    li.style.textDecoration = "line-through";
  });

  btn2.addEventListener('click', () => {
    li.remove()
  });
  // ul.addEventListener("click", (e) => {
  //   if (e.target.innerText === "Delete") {
  //     e.target.parentNode.remove();
  //   } else if (e.target.innerText === "Done") {
  //     for (l of li) {
  //       l.style.textDecoration = "line-through";}
  //   }
  });


function reset() {
  input.value = "";
  btn.disabled = true;
}

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   li.innerHTML =
//     val +
//     " " +
//     "<button style=border-radius:15px;>Done</button>" +
//     " " +
//     "<button style=border-radius:15px;>Delete</button>";
//   // '<span style=background-color:green; color:white;>&#x2713;</span>' + '<i style= color:red; class="fa fa-trash"></i>'
//   ul.append(li);
//   reset();
// });
