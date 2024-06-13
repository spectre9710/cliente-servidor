import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Itemcard from "./Itemcard";

const Home = () => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3001/producto/productos');
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    useEffect(() => {
        fetchProductos();

        // Actualizar productos cada 10 segundos (ejemplo)
        const interval = setInterval(() => {
            fetchProductos();
        }, 10000); // 10 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1 className='text-center mt-3'>Carrito de compras</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {productos.map((item, index) => (
                        <Itemcard
                            key={item._id}
                            id={item._id}
                            img={item.img}
                            nombre={item.nombre}
                            descripcion={item.descripcion}
                            precio={item.precio}
                            cantidad={item.cantidad}
                            item={item}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
