function mostrarTabla() {
    let i = 1;
    let tabla = "";
    let bass = 0;
    let buzz = 0;
    while (i <= 5){
        i++
        let n = 1;
        while (n <= 5){
            if(n%2==0){
                tabla += `${i} x ${n} = ${i * n} bass<br>`;
                bass++;
            }else{
                tabla += `${n} x ${i} = ${n * i} buzz<br>`;
                buzz++;
            }
            n++
        }
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
    document.getElementById('bass').innerHTML = "<strong> Cantidad de bass" + bass + "</strong>";
    document.getElementById('buzz').innerHTML = "<strong> Cantidad de buzz" + buzz + "</strong>";
}