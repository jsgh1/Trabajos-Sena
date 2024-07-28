function mostrarTabla() {
    let tabla = "";
    let bass = 0;
    let buzz = 0;
    for (let i = 1; i <= 5; i+1){
        for (let n = 1; i <= 5; n+1){
            if(n%2==0){
                tabla += `${i} x ${n} = ${i * n} bass<br>`;
                bass++;
            }else{
                tabla += `${n} x ${i} = ${n * i} buzz<br>`;
                buzz++;
            }
        }
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
    document.getElementById('bass').innerHTML = "<strong> Cantidad de bass" + bass + "</strong>";
    document.getElementById('buzz').innerHTML = "<strong> Cantidad de buzz" + buzz + "</strong>";
}