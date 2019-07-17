let app = document.querySelector('#app')

app.innerHTML = '<h2 style="text-align: center;">Weight Conversion Tool</h2>'



var button = document.getElementById('compute').onclick = function (event) {
    event.preventDefault()
    var weight = document.getElementById("weight").value;
    var selectedweight = document.getElementById("selectedweight").value;
    var convertweight = document.getElementById("weightselected").value;
    if (selectedweight === "kilograms" && convertweight === "grams") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 1000;
    }

    else if (selectedweight === "kilograms" && convertweight === "pounds") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 2.2046;
    }
    else if (selectedweight === "kilograms" && convertweight === "ounces") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 35.274;
    }
    else if (selectedweight === "kilograms" && convertweight === "stones") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.1574;
    }
    else if (selectedweight === "grams" && convertweight === "kilograms") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) /1000;
    }

}

