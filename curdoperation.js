let inputs = document.querySelectorAll("input");
let table = document.querySelector("table");
let button = document.querySelector("button");
let row
function formHandle() {
    event.preventDefault();
    let userName = inputs[0].value;
    let lastname = inputs[1].value;
    let userPlace = inputs[2].value;
    

let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4= document.createElement("td");
let update = document.createElement("button");
let deletee = document.createElement("button");
if(button.innerText == "Submit") {
       
    update.innerText ="Update";
    deletee.innerText ="Delete";
    
    td1.innerText = userName;
    td2.innerText = lastname;
    td3.innerText = userPlace;
    td4.append(update,deletee);

    tr.append(td1, td2, td3,td4);
    table.appendChild(tr);

    inputs[0].value = ""
    inputs[1].value = ""
    inputs[2].value = ""

    update.addEventListener("click", ()=>{
        inputs[0].value = userName;
        inputs[1].value = lastname;
        inputs[2].value = userPlace;
        
        button.innerText ="Update";
        row = tr
    });

    deletee.addEventListener("click", ()=>{
        tr.remove();
    });
} else if(button.innerText == "Update") {
            row.cells[0].innerText = userName;
            row.cells[1].innerText = lastname;
            row.cells[2].innerText = userPlace;
    
            inputs[0].innerText = "";
            inputs[1].innerText = "";
            inputs[2].innerText = "";
    
            button.innerText = "Submit";
}
}
