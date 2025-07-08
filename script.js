function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteChar() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    alert("Invalid Expression!");
  }
}
