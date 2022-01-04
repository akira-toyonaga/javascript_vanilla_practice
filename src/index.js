import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  const div = document.createElement("div");
  div.className = "list_row";

  const li = document.createElement("li");
  li.innerText = inputText;

  console.log(div);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    removeElement(deleteTarget);
  });

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    removeElement(completeTarget);

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete_list").removeChild(backTarget);

      backTarget.textContent = null;
      backTarget.appendChild(li);
      backTarget.appendChild(completeButton);
      backTarget.appendChild(deleteButton);

      document.getElementById("incomplete_list").appendChild(backTarget);
    });

    const addText = completeTarget.firstElementChild.innerText;

    completeTarget.textContent = null;

    const li2 = document.createElement("li");
    li2.innerText = addText;

    completeTarget.appendChild(li2);
    completeTarget.appendChild(backButton);

    document.getElementById("complete_list").appendChild(div);
  });

  const removeElement = (target) => {
    document.getElementById("incomplete_list").removeChild(target);
  };

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete_list").appendChild(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
