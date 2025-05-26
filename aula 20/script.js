let mostrar = false;

function calcular() {
	const nmr1 = document.getElementById("nmr1").value;
	const nmr2 = document.getElementById("nmr2").value;
	const operador = document.getElementById("operador").value;
	let resultado;

	switch (operador) {
		case "+":
			resultado = Number(nmr1) + Number(Number(nmr2));
			break;
		case "-":
			resultado = Number(nmr1) - Number(nmr2);
			break;
		case "/":
			resultado = Number(nmr1) / Number(nmr2);
			break;
		case "*":
			resultado = Number(nmr1) * Number(nmr2);
			break;
		case "**":
			resultado = Number(nmr1) ** Number(nmr2);
			break;
	}

	document.getElementById("resultado").innerText = resultado;
}
