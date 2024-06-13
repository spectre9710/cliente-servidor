// Itemcard.js
import React from 'react';
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        const item = {
            ...props.item,
            id: props.id, // Añadir el id al item
            price: props.precio // Añadir el precio al item
        };
        addItem(item);
    };

    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" alt={props.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.nombre}</h5>
                    <h5 className="card-title">$ {props.precio}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">Cantidad disponible: {props.cantidad}</p>
                    <button className="btn btn-success"
                        onClick={handleAddToCart}
                    >Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Itemcard;
