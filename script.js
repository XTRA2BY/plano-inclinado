function calcular() {
    const masa = parseFloat(document.getElementById('masa').value);
    const mu = parseFloat(document.getElementById('coeficiente').value);
    const theta = parseFloat(document.getElementById('angulo').value);
    const theta_rad = theta * Math.PI / 180;
    const g = 9.81;
    const P = Math.round(masa * g * 100) / 100;
    const Px = Math.round(P * Math.sin(theta_rad) * 100) / 100;
    const Py = Math.round(P * Math.cos(theta_rad) * 100) / 100;
    const Fr = Math.round(Py * mu * 100) / 100;
    
    let resultado = `
        <p>el peso del cuerpo es de <strong>${P} N</strong></p>
        <p>las componentes del peso son de: <strong>Px = ${Px} N y Py = ${Py} N</strong></p>
        <p>la fuerza normal tiene un valor de <strong> ${Py} N</strong></p>
    `;   
    
    if (Fr >= Px) {
        resultado += `
            <p>la fuerza de rozamiento tiene un valor de <strong> ${Px} N</strong></p>
            <p>ll cuerpo está en equilibrio</p>
        `;
    } else {
        resultado += `
            <p>la fuerza de rozamiento tiene un valor de <strong> ${Fr} N</strong></p>
        `;
        const a = Math.round((Px - Fr) / masa * 100) / 100;
        resultado += `
            <p>el cuerpo acelera a razón de <strong>${a} m/s²</strong></p>
        `;
    }

    document.getElementById('resultados').innerHTML = resultado;
}
