window.onload = function main() {
  let inputField1 = document.createElement("input");
  inputField1.type = "text";
  let inputField2 = document.createElement("input");
  inputField2.type = "text";
  let plusText = document.createElement("span");
  plusText.innerHTML = "+";
  let resultButton = document.createElement("input");
  resultButton.type = "button";
  resultButton.value = "Calculate";

  resultButton.onclick = function getResult() {
	  
    if (document.getElementById("error1") != null)
      document.getElementById("error1").remove();
    if (document.getElementById("error2") != null)
      document.getElementById("error2").remove();
    if (document.getElementById("resultText") != null)
      document.getElementById("resultText").remove();

    let input1 = inputField1.value.trim();
    let input2 = inputField2.value.trim();
    let operand1 = parseInt(input1, 10);
    let operand2 = parseInt(input2, 10);

    let validation1 =
      Number.isNaN(operand1) || operand1 != input1;
    let validation2 =
      Number.isNaN(operand2) || operand2 != input2;

    if (validation1) {
      let errorMessage = document.createElement("div");
      errorMessage.id = "error1";
      errorMessage.innerHTML = "NaN";
      inputField1.after(errorMessage);
    }
    if (validation2) {
      let errorMessage = document.createElement("div");
      errorMessage.id = "error2";
      errorMessage.innerHTML = "NaN";
      inputField2.after(errorMessage);
    }
    if (validation2 + validation1 === 0) {
      let result = document.createElement("div");
      result.id = "resultText";
      result.innerHTML = operand1 + operand2;
      resultButton.after(result);
    }
  };

  document.body.appendChild(inputField1);
  document.body.appendChild(plusText);
  document.body.appendChild(inputField2);
  document.body.appendChild(resultButton);
};