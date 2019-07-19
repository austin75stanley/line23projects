
document.getElementById('clear').onclick = function (event) {
    event.preventDefault()
    document.getElementById("returnvalue").value = "";
}

// var kiloType = document.getElementsByClassName("selectedweight").value;
// if (kiloType === "kilogram") {
//     document.getElementById("kgs").disabled = true;
// } else {
//     document.getElementById("kgs").disabled = false;
// }

var convertKilograms = function (weight, convertweight) {
    const k1 = 1000
    const k2 = 2.2046
    const k3 = 35.274
    const k4 = 0.1574
    if (convertweight === "grams") {

        document.getElementById('returnvalue').value = parseFloat(weight) * k1;
    } else if (convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(weight) * k2;
    } else if (convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(weight) * k3;
    } else if (convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(weight) * k4;
    }
}
var convertGrams = function (weight, convertweight) {

    const g1 = 1000
    const g2 = 0.0022046
    const g3 = 0.03527
    const g4 = 0.00015747

    if (convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(weight) / g1;
    }
    else if (convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(weight) * g2;
    }
    else if (convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(weight) * g3;
    }
    else if (convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(weight) * g4;
    }

}
var convertPounds = function (weight, convertweight) {

    const p1 = 16
    const p2 = 2.2046
    const p3 = 0.0022046
    const p4 = 0.071429
    if (convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(weight) * p1;
    }
    else if (convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(weight) / p2;
    }
    else if (convertweight === "grams") {
        document.getElementById("returnvalue").value = parseFloat(weight) / p3;
    }
    else if (convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(weight) * p4;
    }
}
var convertOunces = function (weight, convertweight) {

    const o1 = 0.0625
    const o2 = 35.274
    const o3 = 0.035274
    const o4 = 0.0044643
    if (convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(weight) * o1;
    }
    else if (convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(weight) / o2;
    }
    else if (convertweight === "grams") {
        document.getElementById("returnvalue").value = parseFloat(weight) / o3;
    }
    else if (convertweight === "stones") {
        document.getElementById("returnvalue").value = parseFloat(weight) * o4;
    }
}
var convertStones = function (weight, convertweight) {
    const s1 = 224
    const s2 = 0.15747
    const s3 = 0.00015747
    const s4 = 14
    if (convertweight === "ounces") {
        document.getElementById("returnvalue").value = parseFloat(weight) * s1;
    }
    else if (convertweight === "kilograms") {
        document.getElementById("returnvalue").value = parseFloat(weight) / s2;
    }
    else if (convertweight === "grams") {
        document.getElementById("returnvalue").value = parseFloat(weight) / s3;
    }
    else if (convertweight === "pounds") {
        document.getElementById("returnvalue").value = parseFloat(weight) * s4;
    }

}

var button = document.getElementById('compute').onclick = function (event) {
    event.preventDefault();
    var weight = document.getElementById("weight").value;
    var convertweight = document.getElementById("weightselected").value;
    var selectedweight = document.getElementById("selectedweight").value;
    if (selectedweight === "kilograms") {

        convertKilograms(weight, convertweight);

    }
    else if (selectedweight === "grams") {
        convertGrams(weight, convertweight);
    }
    else if (selectedweight === "pounds") {
        convertPounds(weight, convertweight);
    }
    else if (selectedweight === "ounces") {
        convertOunces(weight, convertweight);
    }
    else if (selectedweight === "stones") {
        convertStones(weight, convertweight);
    }
}
