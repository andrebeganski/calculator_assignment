const input1 = document.querySelectorAll("[name='qty1']")

input1.forEach(function (input1) {
    input1.addEventListener("change", function (e) {
        const this_input1 = e.target;
            const qty1 = parseFloat(e.target.value);
            const this_row1 = this_input1.closest(".row");

            const data = this_row1.querySelector(".data");
            const data_span = data.querySelector("span");
            const data_price = parseFloat(data.dataset.price);
            const data_cost = qty1
            
            data_span.innerHTML = round_number(data_cost);
        }
    );
});

const input2 = document.querySelectorAll("[name='qty2']")

input2.forEach(function (input2) {
    input2.addEventListener("change", function (e) {
        const this_input2 = e.target;
            const qty2 = parseFloat(e.target.value);
            const this_row2 = this_input2.closest(".row");

            const data = this_row2.querySelector(".data");
            const data_span = data.querySelector("span");
            const data_price = parseFloat(data.dataset.price);
            const data_cost = qty2
            
            data_span.innerHTML = round_number(data_cost);
        }
    );
});

const input3 = document.querySelectorAll("[name='qty3']")

input3.forEach(function (input3) {
    input3.addEventListener("change", function (e) {
        const this_input3 = e.target;
            const qty3 = parseFloat(e.target.value);
            const this_row3 = this_input3.closest(".row");

            const data = this_row3.querySelector(".data");
            const data_span = data.querySelector("span");
            const data_price = parseFloat(data.dataset.price);
            const data_cost = qty3
            
            data_span.innerHTML = round_number(data_cost);
        }
    );
});

const input4 = document.querySelectorAll("[name='qty4']")

input4.forEach(function (input4) {
    input4.addEventListener("change", function (e) {
        const this_input4 = e.target;
            const qty4 = parseFloat(e.target.value);
            const this_row4 = this_input4.closest(".row");

            const data = this_row4.querySelector(".data");
            const data_span = data.querySelector("span");
            const data_price = parseFloat(data.dataset.price);
            const data_cost = qty4;
            
            data_span.innerHTML = round_number(data_cost);
        }
    );
});

/* I got inspiration for this code here: https://stackoverflow.com/questions/21223164/multiplying-two-inputs-with-javascript-displaying-in-text-box */

function calculate() {
    var myBox1 = document.getElementById('box1').value; 
    var myBox2 = document.getElementById('box2').value;
    var myBox3 = document.getElementById('box3').value;
    var myBox4 = document.getElementById('box4').value;
    var result = document.getElementById('result'); 
    var myResult = (((myBox3/myBox2)*myBox4)/myBox1)*100;
        myResult = myResult * 100;
        myResult = Math.round(myResult);
        myResult = myResult / 100;
        myResult = myResult.toFixed(2);
    document.getElementById('result').value = myResult;
}