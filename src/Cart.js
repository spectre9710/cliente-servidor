// Cart.js
import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const Cart = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const handleCloseConfirmModal = () => setShowConfirmModal(false);
    const handleShowConfirmModal = () => setShowConfirmModal(true);

    const handleConfirmPurchase = async () => {
        handleCloseConfirmModal();
        try {
            const purchases = items.map(item => ({
                productId: item.id,
                quantity: item.quantity
            }));

            await axios.post('http://localhost:3001/compra/compras', { purchases });

            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error al realizar la compra:', error);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        emptyCart(); // Limpia el carrito después de una compra exitosa
    };

    if (isEmpty) return <h1 className='text-center'>Tu carrito esta vacío</h1>;

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Productos ({totalUniqueItems}) Total de artículos: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{ height: "6rem" }} alt={item.nombre} />
                                    </td>
                                    <td>{item.nombre}</td>
                                    <td>{item.precio}</td>
                                    <td>Cantidad ({item.quantity})</td>
                                    <td>
                                        <button
                                            className='btn btn-info ms-2'
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >-</button>
                                        <button
                                            className='btn btn-info ms-2'
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >+</button>
                                        <button
                                            className='btn btn-danger ms-2'
                                            onClick={() => removeItem(item.id)}
                                        >Eliminar producto</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total a pagar: ${cartTotal}</h2>
                </div>
                <div className='col-auto'>
                    <button
                        className='btn btn-danger m-2'
                        onClick={() => emptyCart()}
                    >Limpiar carrito</button>
                    <button
                        className='btn btn-primary m-2'
                        onClick={handleShowConfirmModal}
                    >Pagar ahora</button>
                </div>
            </div>

            {/* Modal de confirmación */}
            <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas realizar la compra?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirmPurchase}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de éxito */}
            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra realizada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¡Tu compra ha sido realizada con éxito!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseSuccessModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Cart;
