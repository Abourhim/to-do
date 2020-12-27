const btn = document.querySelector("#add");
const inpt = document.querySelector(".info-enter");
const infos = document.querySelector("#info");


btn.addEventListener("click", function() {
    let divo = document.createElement("p");
    let node = document.createTextNode(inpt.value);

    if (inpt.value.trim() == "") {
        //console.log("im working");
        return ;
    } else {
        divo.appendChild(node);
        infos.appendChild(divo);
    }
    infos.style = "display: list-item;"
    divo.style= "cursor:pointer";
    divo.addEventListener("click", function() {
        infos.removeChild(divo);
    })
})

