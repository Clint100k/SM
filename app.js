const One = document.getElementById('drop-btn')
One.addEventListener("click", dropiT)
let dro = false
function dropiT() {
    switch (dro) {
        case true:
            document.getElementById("sbm").className = "sub-menu";
            document.getElementById("dropOneRot").className = "nRot";
            dro = false;
            break;
        case false:
            document.getElementById("sbm").className = "sub-menu show";
            document.getElementById("dropOneRot").className = "drpRot";

            document.getElementById("toGg").className = "nRot";
            document.getElementById("sidebar").className = "opeN";
            document.getElementById("loGs").className = "logo";
            dro = true;
            break;
    }
}
const Two = document.getElementById('drop-btn-Two')
Two.addEventListener("click", dropiTTwo)
let droTwo = false
function dropiTTwo() {
    switch (droTwo) {
        case true:
            document.getElementById("sbmTwo").className = "sub-menu";
            document.getElementById("dropTwoRot").className = "nRot";
            droTwo = false;
            break;
        case false:
            document.getElementById("sbmTwo").className = "sub-menu showTwo";
            document.getElementById("dropTwoRot").className = "drpRot";

            document.getElementById("toGg").className = "nRot";
            document.getElementById("sidebar").className = "opeN";
            document.getElementById("loGs").className = "logo";
            droTwo = true;
            break;
    }
}
const Three = document.getElementById("toggle-btn")
Three.addEventListener("click", hiDe)
let nyHide = false
function hiDe(){
    switch (nyHide) {
        case true:
            document.getElementById("toGg").className = "nRot";
            document.getElementById("sidebar").className = "opeN";
            document.getElementById("loGs").className = "logo";
            nyHide = false;
            break;
        case false:
            document.getElementById("toGg").className = "drpRot";
            document.getElementById("sidebar").className = "closE";

            document.getElementById("loGs").className = "zer";
            document.getElementById("sbm").className = "sub-menu";
            document.getElementById("sbmTwo").className = "sub-menu";
            nyHide = true;
            break;
    }
}

var reS = window.matchMedia('(max-width: 800px)')
rHide(reS);
reS.addEventListener('change', rHide);
function rHide(rNav) {
    if (rNav.matches) {
        document.getElementById("toGg").className = "drpRot";
        document.getElementById("sidebar").className = "closE";

        document.getElementById("loGs").className = "zer";
        document.getElementById("sbm").className = "sub-menu";
        document.getElementById("sbmTwo").className = "sub-menu";
    } else {
        document.getElementById("toGg").className = "nRot";
        document.getElementById("sidebar").className = "opeN";
        document.getElementById("loGs").className = "logo";
    }
}
