function contentScreenSelector(num){
    let buttons = document.getElementsByClassName("option");
    let boxs = document.getElementsByClassName("box");
    if (num==1){
        Array.from(buttons).forEach(element => {
            element.classList.remove("active");
        });
        buttons[1].classList.add("active");

        Array.from(boxs).forEach(element => {
            element.classList.remove("active");
        });
        boxs[1].classList.add("active");
    }
    if (num==0){
        Array.from(buttons).forEach(element => {
            element.classList.remove("active");
        });
        buttons[0].classList.add("active");

        Array.from(boxs).forEach(element => {
            element.classList.remove("active");
        });
        boxs[0].classList.add("active");
    }
    if (num==2){
        Array.from(buttons).forEach(element => {
            element.classList.remove("active");
        });
        buttons[2].classList.add("active");

        Array.from(boxs).forEach(element => {
            element.classList.remove("active");
        });
        boxs[2].classList.add("active");
    }
    if (num==3){
        Array.from(buttons).forEach(element => {
            element.classList.remove("active");
        });
        buttons[3].classList.add("active");

        Array.from(boxs).forEach(element => {
            element.classList.remove("active");
        });
        boxs[3].classList.add("active");
    }

}

function autoAlign(){
    let boxs = document.getElementsByClassName("box");
    let sizeW = window.innerWidth*0.8
    let sizeH = ((window.innerHeight) - document.getElementsByClassName("selector")[0].offsetHeight);
    console.log({"sizeW":sizeW, "sizeH":sizeH,"selectorW":document.getElementsByClassName("selector")[0].offsetWidth, "selectorH":document.getElementsByClassName("selector")[0].offsetHeight})
    Array.from(boxs).forEach(element => {
        element.style.width = sizeW+"px";
        element.style.height = sizeH + "px";
        element.style.marginLeft = ((window.innerWidth) - sizeW) /2 + "px";
    })

    let first = document.getElementById("1");
    let second = document.getElementById("2");
    first.style.width = (sizeW*0.8)/2 + "px";
    first.style.height = (sizeH*0.8) + "px";
    second.style.width = (sizeW*0.8)/2 + "px";
    second.style.height = (sizeH*0.8) + "px";
}

function DoTheMathThing(num){
    let inputs = document.getElementsByClassName("input");
    let firstp = document.getElementById("0p");
    let firstV = document.getElementById("0V");
    let firstn = document.getElementById("0n");
    let firstT = document.getElementById("0T");
    let firstPa = document.getElementById("0Pa");
    let firstL = document.getElementById("0l");
    let firstm = document.getElementById("0m");
    let firstC = document.getElementById("0C");
    let second = document.getElementById("2");
    if(num==0){
        let p = 0;
        let V = 0;
        let n = 0;
        let T = 0;
        let R = 8.31;
        if(firstp.value != "?" || firstp.value != null || firstp.value != NaN || firstp.value != ''){
            if(firstPa.value == "Pa"){
                p = parseInt(firstp.value) * 1
            }
            if(firstPa.value == "kPa"){
                p = parseInt(firstp.value) * 1000
            }
        }

        if(firstV.value != "?" || firstV.value != null || firstV.value != NaN || firstV.value != '' ){
            if(firstL.value == "l"){
                V = parseInt(firstV.value)/1000
                
            }
            if(firstL.value == "dm3"){
                V = parseInt(firstL.value)/1000
            }
            if(firstL.value == "m3"){
                V = parseInt(firstL.value)
            }
        }

        if(firstn.value != "?" || firstn.value != null || firstn.value != NaN || firstn.value != ''){
            if(firstm.value == "mol"){
                n = parseInt(firstn.value);
            }
            
        }

        if(firstT.value != "?" || firstT.value != null || firstT.value != NaN || firstT.value != ''){
            if(firstC.value == "C"){
                T = parseInt(firstT.value)+273.15;
            }
            if(firstC.value == "K"){
                T = parseInt(firstT.value);
            }
            
        }

        let innerHTMLS = "Állandó tömegű gáz nyomásának és térfogatának aránya egyenesen arányos a kelvinben mért hőmérsékletével<br>"
        let formula = 0;

        if(firstT.value == "?" || firstT.value == null || firstT.value == NaN || firstT.value == ''){
            innerHTMLS = innerHTMLS + "T=?<br>"
            formula = (p*V)/(n*R)
        }
        else if(firstT.value != "?" || firstT.value != null || firstT.value != NaN || firstT.value != ''){
            innerHTMLS = innerHTMLS + "T=?" + T +"K<br>"
        }

        if(firstn.value == "?" || firstn.value == null || firstn.value == NaN || firstn.value == ''){
            innerHTMLS = innerHTMLS + "n=?<br>"
            formula = (p*V)/(R*T)
        }
        else if(firstn.value != "?" || firstn.value != null || firstn.value != NaN || firstn.value != ''){
            innerHTMLS = innerHTMLS + "n=?" + n +"mol<br>"
        }

        if(firstV.value == "?" || firstV.value == null || firstV.value == NaN || firstV.value == ''){
            innerHTMLS = innerHTMLS + "V=?<br>"
            formula = (n*R*T)/p
        }
        else if(firstV.value != "?" || firstV.value != null || firstV.value != NaN || firstV.value != ''){
            innerHTMLS = innerHTMLS + "V=" + V +"m3<br>"
        }

        if(firstp.value == "?" || firstp.value == null || firstp.value == NaN || firstp.value == ''){
            innerHTMLS = innerHTMLS + "p=?<br>"
            formula = (n*R*T)/V
        }
        else if(firstp.value != "?" || firstp.value != null || firstp.value != NaN || firstp.value != ''){
            innerHTMLS = innerHTMLS + "p=" + p +"Pa<br>"
        }


        if(firstT.value == "?" || firstT.value == null || firstT.value == NaN || firstT.value == ''){
            innerHTMLS = innerHTMLS + `<hr>T= ${formula.toFixed(2)} K <br>`
        }
        

        if(firstn.value == "?" || firstn.value == null || firstn.value == NaN || firstn.value == ''){
            innerHTMLS = innerHTMLS + `<hr>n= ${formula.toFixed(2)} mol <br>`
        }

        if(firstV.value == "?" || firstV.value == null || firstV.value == NaN || firstV.value == ''){
            innerHTMLS = innerHTMLS + `<hr>V= ${formula.toFixed(2)} m3 <br>`
        }

        if(firstp.value == "?" || firstp.value == null || firstp.value == NaN || firstp.value == ''){
            innerHTMLS = innerHTMLS + `<hr>p= ${formula.toFixed(2)} Pa <br>`
        }
        second.innerHTML = innerHTMLS 

        
    }
}

function startUp(){
    autoAlign()
}