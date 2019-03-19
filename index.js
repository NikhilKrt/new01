let acc= document.getElementById("drop");
let i;
for(i=0; i < acc.length; i++){
    acc[i].addEventener("click", () => {
        this.classList.togggle("active");

        let panel= this.nextElementsibiling;
        if (panel.style.display ==="block"){
            panel.style.display= "none";
        } else{
            panel.style.display="block";
        }
    });
}