const button = document.getElementById("button")
const square = document.getElementById("square")
const circle = document.getElementById("circle")
const rectangle = document.getElementById("rectangle")

var numberInTheShape = 1
var oldValue = 0
button.onclick= () => {
    const box = document.getElementById("box")
    let n = document.getElementById("number").value

    n = Number(n) + Number(oldValue);
    for (let j=numberInTheShape; j<=n; j++) {
        var shape = document.createElement("div")
        shape.innerHTML += numberInTheShape;

        if(square.checked){
            shape.classList.add("square")
        }
        box.appendChild(shape);
        numberInTheShape++;
        oldValue = box.lastElementChild.innerHTML;
    }
}