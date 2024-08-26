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
    let resultado = `<p>el peso del cuerpo es ${P} N</p>`;
    resultado += `<p>las componentes del peso son: Px = ${Px} N y Py = ${Py} N</p>`;
    resultado += `<p>la fuerza Normal tiene un valor de ${Py} N</p>`;   
    if (Fr >= Px) {
        resultado += `<p>la fuerza de rozamiento tiene un valor de ${Px} N</p>`;
        resultado += `<p>el cuerpo está en equilibrio</p>`;
    } else {
        resultado += `<p>la fuerza de Rozamiento tiene un valor de ${Fr} N</p>`;
        const a = Math.round((Px - Fr) / masa * 100) / 100;
        resultado += `<p>el cuerpo acelera a razón de ${a} m/s²</p>`;
    }

    document.getElementById('resultados').innerHTML = resultado;
}
