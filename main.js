const form = document.querySelector(".form");
// console.log(form);

const input = document.querySelector(".input-tasks");

const addButton = document.querySelector(".button-submit");
// console.log(addButton);

const ul = document.querySelector(".tasks");
// console.log(ul);

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(e);
  const text = input.value;
  // console.log(text);

  if (!text) {
    alert("please add task");
    return;
  } else {
    const div = document.createElement("div");
    console.log(div);
    div.classList.add("div-tasks");

    const el = document.createElement("li");
    el.classList.add("task");

    const elInput = document.createElement("input");

    const editButton = document.createElement("button");
    editButton.classList.add("edit");

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    editButton.textContent = "Edit";

    const completeButton = document.createElement("button");
    completeButton.textContent = "Completed";
    completeButton.classList.add("complete");

    elInput.classList.add("input-task");

    elInput.value = text;
    console.log(elInput.value);

    // console.log(text);
    ul.appendChild(div);
    div.appendChild(el);
    el.appendChild(elInput);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    div.appendChild(completeButton);

    input.value = "";

    deleteButton.addEventListener("click", function (e) {
      e.preventDefault(e);
      div.remove();
    });

    editButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (editButton.textContent === "Edit") {
        elInput.removeAttribute("readonly");
        elInput.focus();
        editButton.textContent = "Save";
      } else {
        elInput.setAttribute("readonly", "readonly");
        editButton.textContent = "Edit";
      }
      return;
    });
    completeButton.addEventListener("click", function (e) {
      e.preventDefault(e);
      elInput.classList.add("completed");
    });

    // function updatesLS() {
    //   const div = document.querySelectorAll("div");

    //   const divs = [];

    //   div.forEach((input) => {
    //     divs.push({
    //       text: "my name",
    //       // completed: div,
    //     });
    //   });
    // }
    // //       localStorage.setItem("inputs", JSON.stringify(divs));
    // //     }
    // updatesLS();
    // const inputsL = JSON.parse(localStorage.getItem("inputs"));
    // console.log(inputsL);

    // inputsL.forEach((e) => {});
  }
});
