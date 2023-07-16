const keys = document.querySelectorAll('.key');
const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('.display .output');
let input = "";
for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener('click',() => {
      //This clears the input and output of the screen
      if (value == "clear") {
        input = "";
        displayInput.innerHTML = "";
        displayOutput.innerHTML = "";
        console.log("clear")
      }
      //This deletes the last number on the input screen
      else if (value == "backspace") {
        input = input.slice(0, -1);
        displayInput.innerHTML = input;
      }
      //This converts the input number into a percentage
      else if (value == "%") {
        input = input / 100;
        displayInput.innerHTML = input;
        if ((displayInput.innerHTML = "")) {
          let tempOut = displayOutput.innerHTML;
          tempOut = tempOut / 100;
          displayOutput = tempOut;
        }
      }
      //This gives the result for the in put and
      //displays it to output
      else if (value == "=") {
        let result = eval(input);
        displayInput.innerHTML = "";
        displayOutput.innerHTML = result;
        input = ""
        console.log(result)
      } else if (value == "brackets") {
        if (
          input.indexOf("(") == -1 ||
          (input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") < input.lastIndexOf(")"))
        ) {
          input += "(";
          displayInput.innerHTML = input

        } else if (
          (input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
          (input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") > input.lastIndexOf(")"))
            
        ) {
          input += ")";
          displayInput.innerHTML = input
        }
      }
      else {
        input += value
        displayInput.innerHTML = input
      }
    })
}
