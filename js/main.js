
const enter = document.getElementById("enter");

const audio = new Audio("assets/ambient.mp3");
audio.loop = true;

enter.addEventListener("click", () => {
    audio.play();
    document.getElementById("ui").classList.add("fade");
    document.getElementById("panel").classList.remove("hidden");
});

let code = "";
window.addEventListener("keydown", e => {
    code += e.key;
    if (code.includes("portal")) {
        alert("SECRET PORTAL ACTIVATED");
    }
});

function toggleStats(){
    document.getElementById("stats").classList.toggle("hidden");
}
