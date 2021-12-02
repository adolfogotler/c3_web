function coresInit() {
            
        
    var cores = new Map();
    cores.set("aqua", "#00FFFF");
    cores.set("cyan", "#00FFFF");
    cores.set("forestgreen", "#228B22");
    cores.set("lightblue", "#ADD8E6");
    cores.set("mediumspringgreen", "#00FA9A");
    cores.set("olivedrab", "#6B8E23");
    cores.set("purple", "#800080");
    cores.set("sandybrown", "#F4A460");
    cores.set("teal", "#008080");
    cores.set("turquoise", "#40E0D0");

    var vetorCores=["aqua","cyan","forestgreen","lightblue","mediumspringgreen","olivedrab","purple","sandybrown","teal","turquoise"];
    var numAle = Math.floor(10* Math.random() + 1);
    let cor = prompt("Selecione uma cor \n (aqua, cyan, forestgreen, lightblue, mediumspringgreen, olivedrab, purple, sandybrown, teal, turquoise) e veja se acerta: ");
    if (cor != null && cor != "") {

        if (cor != vetorCores[numAle]) {
            alert("Você não conseguiu acertar ")
            document.body.style.backgroundColor = cores.get(vetorCores[numAle])  ;
        }else{
            alert("Você conseguiu acertar ")
            document.body.style.backgroundColor = cores.get(vetorCores[numAle]) ;
        }
    }
}

coresInit();
