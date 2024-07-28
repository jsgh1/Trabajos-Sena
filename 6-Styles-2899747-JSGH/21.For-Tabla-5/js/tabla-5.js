function mostrarTabla(n) {
    let tabla = "";
    for (let i = 1; i <= 5; i++) {
        tabla += `${n} x ${i} = ${n * i}<br>`;
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
}