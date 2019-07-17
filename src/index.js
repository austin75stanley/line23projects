let app = document.querySelector('#app')

app.innerHTML = '<h2 style="text-align: center;">Weight Conversion Tool</h2>'

document.getElementById('clear').onclick=function(event){
    event.preventDefault()
    document.getElementById("returnvalue").innerHTML="";
}

var button = document.getElementById('compute').onclick = function (event) {
    event.preventDefault()
    var weight = document.getElementById("weight").value;
    var selectedweight = document.getElementById("selectedweight").value;
    var convertweight = document.getElementById("weightselected").value;
    //convert kilograms to other measurement units
    if (selectedweight === "kilograms" && convertweight === "grams") {
        document.getElementById("returnvalue").innerHTML= parseFloat(weight) * 1000;
        
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
    ///convert grams to other measurement units
    else if (selectedweight === "grams" && convertweight === "kilograms") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) / 1000;
    }
    else if (selectedweight === "grams" && convertweight === "pounds") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.0022046;
    }
    else if (selectedweight === "grams" && convertweight === "ounces") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.035274;
    }
    else if (selectedweight === "grams" && convertweight === "stones") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.00015747;
    }
    //Convert ounces to other measurement units
    else if (selectedweight === "ounces" && convertweight === "pounds") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.0625;
    }
    else if (selectedweight === "ounces" && convertweight === "kilograms") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) / 35.274;
    }
    else if (selectedweight === "ounces" && convertweight === "grams") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) / 0.035274;
    }
    else if (selectedweight === "ounces" && convertweight === "stones") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.0044643;
    }
    //Convert pounds to other measurement units
    else if (selectedweight === "pounds" && convertweight === "ounces") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 16;
    }
    else if (selectedweight === "pounds" && convertweight === "kilograms") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) / 2.2046;
    }
    else if (selectedweight === "pounds" && convertweight === "grams") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) / 0.0022046;
    }
    else if (selectedweight === "pounds" && convertweight === "stones") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) * 0.071429;
    }
     //Convert stones to other measurement units
     else if (selectedweight === "stones" && convertweight === "ounces") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight)*224;
    }
    else if (selectedweight === "stones" && convertweight === "kilograms") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) /0.15747;
    }
    else if (selectedweight === "stones" && convertweight === "grams") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight)/0.00015747;
    }
    else if (selectedweight === "stones" && convertweight === "pounds") {
        document.getElementById("returnvalue").innerHTML = parseFloat(weight) *14;
    }
    

}

