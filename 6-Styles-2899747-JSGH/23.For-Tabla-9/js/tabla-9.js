function mostrarTabla(n) {
    let tabla = "";
    for (let i = 1; i <= 5; i++) {
        if (i%2==0){
            tabla += `${n} x ${i} = ${n * i} par<br>`;
        }else{
            tabla += `${n} x ${i} = ${n * i} impar<br>`;
        }
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
}