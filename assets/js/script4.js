       function calculateOil(price, barrels) {
            let total = price * barrels;
            return total;
        }

        function showResult() {

            let price = Number(document.getElementById("price").value);

            let barrels = Number(document.getElementById("barrels").value);

            let value = calculateOil(price, barrels);

            document.getElementById("result").innerHTML =
                "Total Crude Oil Value: $" + value;
        }
