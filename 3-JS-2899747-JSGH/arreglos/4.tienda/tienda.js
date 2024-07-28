/**
 * Tienda con un arreglo de sus productos 
 * Martin Stiben Narvaez
 * Martes 30 de Abril del 2024
 */

let tienda=[];
let numero_registro;
let iteracion;
let nuevo_producto;
let listaBusqueda=[];

tienda=[
    {producto:'Arroz',tipoProducto:'granos',tipoUnidad:'gramos',cantidad:'1000',precio:'2450'},
    {producto:'Papa',tipoProducto:'fruver',tipoUnidad:'gramos',cantidad:'500',precio:'1000'},
    {producto:'Mora',tipoProducto:'fruver',tipoUnidad:'gramos',cantidad:'500',precio:'1500'},
    {producto:'Trucha',tipoProducto:'carnes',tipoUnidad:'gramos',cantidad:'1000',precio:'9000'},
    {producto:'Pollo entero',tipoProducto:'carnes',tipoUnidad:'gramos',cantidad:'1000',precio:'4500'},
];

numero_registro=tienda.length;

nuevo_producto= {producto:'Res',tipoProducto:'carnes',tipoUnidad:'gramos',cantidad:'1000',precio:'7500'};

tienda.push(nuevo_producto);

for(iteracion=0;iteracion<numero_registro;iteracion++){
    console.log(tienda[iteracion]);
    if(tienda[iteracion].tipoProducto === 'fruver'){
        listaBusqueda.push(tienda[iteracion]);
    }else{
        console.log("??");
    }
}

console.log(listaBusqueda);
