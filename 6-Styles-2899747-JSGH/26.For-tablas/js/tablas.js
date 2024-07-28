function mostrarTabla(n) {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${n} x ${i} = ${n * i}<br>`;
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
}