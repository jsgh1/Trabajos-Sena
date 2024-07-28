<?php

$empleados = [
    ['id' => 32545450, 'nombres' => 'Alejandro', 'apellidos' => 'Montealegre', 'cargo' => 'Aseador', 'valorDia' => 120000, 'diaTrabajo' => 45],
    ['id' => 32545450, 'nombres' => 'Alejandra', 'apellidos' => 'Hermosa', 'cargo' => 'Anesteciologa', 'valorDia' => 135000, 'diaTrabajo' => 36],
    ['id' => 32545450, 'nombres' => 'Luiz Eduardo', 'apellidos' => 'Carreño', 'cargo' => 'Enfermera', 'valorDia' => 244000, 'diaTrabajo' => 35],
    ['id' => 32545450, 'nombres' => 'Angela', 'apellidos' => 'Fierro', 'cargo' => 'Enfermera(jefe)', 'valorDia' => 320000, 'diaTrabajo' => 54],
    ['id' => 32545450, 'nombres' => 'Diego Fernandes', 'apellidos' => 'Castro', 'cargo' => 'Enfermero', 'valorDia' => 430000, 'diaTrabajo' => 55],
    ['id' => 32545450, 'nombres' => 'Lugo', 'apellidos' => 'Peña', 'cargo' => 'Cirujano Cardiovascular', 'valorDia' => 540000, 'diaTrabajo' => 23],
    ['id' => 32545450, 'nombres' => 'Francisco', 'apellidos' => 'Sosa', 'cargo' => 'Cardiologo', 'valorDia' => 230000, 'diaTrabajo' => 47],
    ['id' => 32545450, 'nombres' => 'Alejandro', 'apellidos' => 'Montealegre', 'cargo' => '', 'valorDia' => 130000, 'diaTrabajo' => 57],
    ['id' => 32545450, 'nombres' => 'Alejandro', 'apellidos' => 'Montealegre', 'cargo' => '', 'valorDia' => 150000, 'diaTrabajo' => 70],
    ['id' => 32545450, 'nombres' => 'Alejandro', 'apellidos' => 'Montealegre', 'cargo' => '', 'valorDia' => 240000, 'diaTrabajo' => 64]
];

function salario($valorDia, $diaTrabajo) {
    $totalSalario = $valorDia * $diaTrabajo;
    return $totalSalario;
}

function subTransporteP($valorDia, $diaTrabajo) {
    $salarioMin = 1300000;
    $salarioTrans = salario($valorDia, $diaTrabajo);
    if ($salarioTrans > 2 * $salarioMin) {
        $subTransporte = 120000;
    } else {
        $subTransporte = 0;
    }
    return $subTransporte;
}

function retencionP($valorDia, $diaTrabajo) {
    $salarioReten = salario($valorDia, $diaTrabajo);
    $salarioMin = 1300000;
    if ($salarioReten > 12 * $salarioMin) {
        $retencionPago = $salarioReten * 0.08;
    } elseif ($salarioReten > 8 * $salarioMin) {
        $retencionPago = $salarioReten * 0.04;
    } elseif ($salarioReten > 6 * $salarioMin) {
        $retencionPago = $salarioReten * 0.02;
    } else {
        $retencionPago = 0;
    }
    return $retencionPago;
}

function saludP($valorDia, $diaTrabajo) {
    $pagoSalud = retencionP($valorDia, $diaTrabajo) * 0.12;
    return $pagoSalud;
}

function pensionP($valorDia, $diaTrabajo) {
    $pagoPension = retencionP($valorDia, $diaTrabajo) * 0.16;
    return $pagoPension;
}

function arlP($valorDia, $diaTrabajo) {
    $pagoArl = retencionP($valorDia, $diaTrabajo) * 0.052;
    return $pagoArl;
}

function pagoTotalP($valorDia, $diaTrabajo) {
    $pagoTot = salario($valorDia, $diaTrabajo) + subTransporteP($valorDia, $diaTrabajo);
    return $pagoTot;
}

foreach ($empleados as &$empleado) {
    $empleado['salario'] = salario($empleado['valorDia'], $empleado['diaTrabajo']);
    $empleado['subTransporte'] = subTransporteP($empleado['valorDia'], $empleado['diaTrabajo']);
    $empleado['retencion'] = retencionP($empleado['valorDia'], $empleado['diaTrabajo']);
    $empleado['salud'] = saludP($empleado['valorDia'], $empleado['diaTrabajo']);
    $empleado['pension'] = pensionP($empleado['valorDia'], $empleado['diaTrabajo']);
    $empleado['arl'] = arlP($empleado['valorDia'], $empleado['diaTrabajo']);
    $empleado['TotalAPagar'] = pagoTotalP($empleado['valorDia'], $empleado['diaTrabajo']);
}

function sumarSalud($empleados) {
    $totalSalud = 0;
    foreach ($empleados as $empleado) {
        $totalSalud += $empleado['salud'];
    }
    return $totalSalud;
}

function sumarPension($empleados) {
    $totalPension = 0;
    foreach ($empleados as $empleado) {
        $totalPension += $empleado['pension'];
    }
    return $totalPension;
}

function sumarArl($empleados) {
    $totalArl = 0;
    foreach ($empleados as $empleado) {
        $totalArl += $empleado['arl'];
    }
    return $totalArl;
}

function sumarRetencion($empleados) {
    $totalRetencion = 0;
    foreach ($empleados as $empleado) {
        $totalRetencion += $empleado['retencion'];
    }
    return $totalRetencion;
}

function sumarPagoTotal($empleados) {
    $totalPagar = 0;
    foreach ($empleados as $empleado) {
        $totalPagar += $empleado['TotalAPagar'];
    }
}
?>