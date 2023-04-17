let output=document.getElementById("inp")

function getDisplay(num) {
    output.value=output.value+num
}

function getClear() {
    output.value="";
    
}

function getDelete() {
    output.value=output.value.slice(0,-1)
}

function getEqualsto() {
    output.value= eval(output.value)
}