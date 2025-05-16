let token;

async function logar() {
	const user = {
		username: document.getElementById("user").value,
		password: document.getElementById("senha").value,
	};

	try {
		const response = await fetch("http://localhost:3000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		if (response.ok) {
			const data = await response.json();
			token = data.token;
			alert(token);
		} else {
			alert(err);
		}
	} catch {
		alert("Ocorreu algum problema durante a tentativa de login");
	}
}
