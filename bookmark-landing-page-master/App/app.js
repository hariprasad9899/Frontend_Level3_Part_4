// Mobile Menu Button Animation & Mob Menu option
const wrapper = document.getElementsByClassName('wrapper')[0];
const line = document.getElementsByClassName("line")
const mobMenu = document.getElementsByClassName("mobMenu")[0];
const partOne = document.getElementsByClassName("partOne")[0];
const comLogo = document.getElementsByClassName("com-logo")[0];

wrapper.onclick = function() {
    line[1].classList.toggle('lineone-hide')
    line[0].classList.toggle('linezero');
    line[2].classList.toggle('linetwo');
    mobMenu.classList.toggle("show");
    line[0].classList.toggle("whiteLine");
    line[2].classList.toggle("whiteLine");
    partOne.classList.toggle("mobBg");
    comLogo.classList.toggle("switch");
    document.body.classList.toggle("stop-scrolling")
}

// Menu Active button click

const inBox = [...document.getElementsByClassName("inBox")];
for(let i of inBox) {
    i.addEventListener("click", ()=> {
        for(let j of inBox) { 
            j.classList.remove("active")
        }
        i.classList.add("active")
    })
}

// Feature box | Line Move | Content change

const box = [...document.getElementsByClassName("box")];
const animeLine =  document.getElementsByClassName("animeLine")[0];
const features = [...document.getElementsByClassName("features")];
const posVals = [0,37,67];

for (let i in box) {
    box[i].addEventListener("click",()=> {
        animeLine.style.left = `${posVals[i]}%`;
        for(let j in box) {
            box[j].classList.remove("active")
            features[j].classList.remove("active");
        }
        box[i].classList.add("active");
        features[i].classList.add("active");
    })
}


// FAQ

const qs = [...document.getElementsByClassName("qs")];

for(let i of qs) {
    i.addEventListener("click", () => {
        if(i.classList.contains("active")) { 
            i.classList.remove("active")
        } else {
            for(let j of qs) { 
                j.classList.remove("active") 
            }
            i.classList.add("active");
        }
    })
}

// Mail Validation

const inp = document.getElementById("inp");
const btn = document.getElementById("contact");
const err = document.getElementById("err");

btn.onclick = function() {
    if(inp.value.length < 1) {
        alert("Please enther a mail")
    } else {
        let result = validateEmail(inp.value) 
        if(!result) {
            inp.classList.add("error")
            err.classList.add("show")
        }
    }
}


function validateEmail(x) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.match(mailformat)) {
        return true
    } else {
        return false
    }
}

inp.addEventListener("input", () => {
    inp.classList.remove("error");
    err.classList.remove("show")
})