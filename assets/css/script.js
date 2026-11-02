function checkValue() {
    let value = document.getElementById("answer").value;
    let result = document.getElementById("result");

    if (value === "" || isNaN(value)) {
        result.innerHTML = "Wrong value! Try again.";
        result.style.color = "red";
    } else {
        result.innerHTML = "Correct value! Well done.";
        result.style.color = "green";
    }
}