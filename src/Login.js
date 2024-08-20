import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Producto } from './clases/Productos';
import { Usuario } from './clases/Usuarios';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUsername('');
        setPassword('');
        initializeData();
    }, []);
    const initializeData = () => {
        if (!localStorage.getItem("productos")) {
            let producto1 = new Producto("001", "Silla Moderna", 3, 27000, "silla1.jpg");
            let producto2 = new Producto("002", "Silla de madera", 10, 14000, "silla2.jpg");
            let producto3 = new Producto("003", "Silla Gamer", 2, 5000, "silla3.jpg");
            let producto4 = new Producto("004", "Silla Tapizada de madera", 7, 14000, "silla4.jpg");
            let producto5 = new Producto("005", "Silla Retro de Metal y Madera", 15, 9000, "silla5.jpg");
            let producto6 = new Producto("006", "Silla de Madera Negra", 9, 17000, "silla6.jpg");
            let producto7 = new Producto("007", "Silla Azul con Patas de Metal", 20, 10000, "silla7.jpg");
            let producto8 = new Producto("008", "Silla de Comedor de Madera", 13, 12000, "silla8.jpg");
            let producto9 = new Producto("009", "Silla de Oficina Ergonómica con Respaldo de Malla", 9, 28000, "silla9.jpg");
            let producto10 = new Producto("010", "Silla Mecedora para Bebé", 14, 25000, "silla10.jpg");
            let producto11 = new Producto("011", "Silla Plegable de Acero", 12, 8000, "silla11.jpg");
            let producto12 = new Producto("012", "Silla de Bar con Respaldo", 5, 15000, "silla12.jpg");
            let producto13 = new Producto("013", "Silla de Jardín de Plástico", 30, 6000, "silla13.jpg");
            let producto14 = new Producto("014", "Silla Alta para Niños", 8, 20000, "silla14.jpg");
            let producto15 = new Producto("015", "Silla de Oficina Ejecutiva", 4, 35000, "silla15.jpg");
            let producto16 = new Producto("016", "Silla de Conferencia Apilable", 18, 11000, "silla16.jpg");
            let producto17 = new Producto("017", "Silla de Director de Cine", 7, 18000, "silla17.jpg");
            let producto18 = new Producto("018", "Silla de Estudio Ajustable", 10, 22000, "silla18.jpg");
            let producto19 = new Producto("019", "Silla de Mimbre para Terraza", 6, 12000, "silla19.jpg");
            let producto20 = new Producto("020", "Silla de Espera con Brazos", 16, 16000, "silla20.jpg");

            let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10,producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20];
            localStorage.setItem("productos", JSON.stringify(productos));
        }

        if (!localStorage.getItem("usuarios")) {
            let usuario1= new Usuario("1-1","Ana","Gonzalez","Anita123","123abc");
            let usuario2= new Usuario("1-2","Mateo","Marin","juanito32","abc123");
            let usuario3= new Usuario("1-3","Jose","Soto","josoxx","456abc");
            let usuario4= new Usuario("1-4","Luis","Perez","luchito","1234");
            let usuario5= new Usuario("1-5","Pedro","Marin","pedrito","12345");
            let usuarios=[usuario1,usuario2,usuario3,usuario4,usuario5];
            localStorage.setItem("usuario", JSON.stringify(usuarios));
        }
        let carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));

        let ventas = [];
        localStorage.setItem("ventas", JSON.stringify(ventas));
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
        const usuario = usuarios.find(u => u.user === username && u.password === password);
        console.log('THIDSDKJFJKSJDNFI LOGINNAME')

        if (usuario) {
            localStorage.setItem('isAuthenticated', 'true');
            console.log('si')
            localStorage.setItem('loggedUser', usuario.nombre);
            navigate('/dashboard');
        } else {
            localStorage.setItem('isAuthenticated', 'false');
            setError(true);
            console.log('no')
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <fieldset className="cuerpoLogin">
                            <form onSubmit={handleLogin}>
                                {error && <div className="errores">Credenciales no corresponden</div>}
                                <div className="mb-3">
                                    <label className="form-label">Nombre de Usuario</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="new-password"
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}
