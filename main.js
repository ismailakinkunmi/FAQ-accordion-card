const checkboxes = document.querySelectorAll(".input");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", renderAnswer);
});

function renderAnswer(e) {
  const clickQuestion = e.target;
  const questionIcon = clickQuestion.nextElementSibling;
  const clickQuestionParent = clickQuestion.parentElement;

  if (clickQuestion.checked) {
    clickQuestionParent.style.color = " hsl(238, 29%, 16%)";
    questionIcon.style.transform = "rotate(180deg)";
  } else {
    clickQuestionParent.style.color = "hsl(240, 6%, 50%)";
    questionIcon.style.transform = "rotate(0deg)";
  }

  const siblingElement = clickQuestionParent.nextElementSibling;
  siblingElement.classList.toggle("display-answer");
}
