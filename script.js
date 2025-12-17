

let colors1 = ["red", "blue", "green", "purple"];
let colors2 = ["orange", "black", "pink", "brown"];
let texts = ["Tag One", "Tag Two", "Tag Three", "Tag Four"];

let clickCount = 0; 


for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.id = "tag" + (i + 1);
    div.innerText = texts[i];

    div.style.margin = "10px";
    div.style.padding = "15px";
    div.style.border = "2px solid black";
    div.style.transition = "0.3s";

    document.body.appendChild(div);
}


function oneclick() {
    clickCount++; 

    for (let i = 0; i < 4; i++) {
        let el = document.getElementById("tag" + (i + 1));

       
        if (clickCount % 2 === 0) {
            el.style.backgroundColor = colors1[i];
            el.style.color = "white";
        } else {
            el.style.backgroundColor = colors2[i];
            el.style.color = "yellow";
        }

        el.style.fontSize = "20px";
        el.style.borderRadius = "10px";
    }
}
