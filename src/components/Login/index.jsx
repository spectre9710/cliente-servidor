import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = () => {
		
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Ingrese a su cuenta</h1>
						<input
							type="email"
							placeholder="Correo Electróniico"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Iniciar sesión
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>¿Nuevo aquí?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Registrarse
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
