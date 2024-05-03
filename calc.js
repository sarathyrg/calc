let output = document.getElementById("output");

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }

    catch(err){
        alert("invalid")
    }
}

function cl(){
    output.value = "0";
}

function del(){
    output.value = output.value.slice(0,-2)
}