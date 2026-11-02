function calculateExpense() {

    let product = document.getElementById("product").value;

    let kg = Number(document.getElementById("kg").value);

    let price = 0;

    if (product === "rice") {
        price = 2000;
    }

    else if (product === "beans") {
        price = 1800;
    }

    else if (product === "garri") {
        price = 1000;
    }

    else {
        price = 0;
    }

    let total = price * kg;

    document.getElementById("result").innerHTML =
        "Total Expense: ₦" + total;

}