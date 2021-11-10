import { useEffect, useState, useRef } from 'react';
import './Produtos.css';
import { Modal } from 'react-bootstrap';

function Produtos() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(null)
    const carousel = useRef(null);

    useEffect(() => {
        fetch('../static/shoes.json')
            .then((response) => response.json())
            .then(setData);
    }, []);
    const handleModal = (hasModal) => {
        setModal(hasModal)
    }
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) return null;

    return (
        <div className="container">
            <div className="logo">
                <img src="/static/images/logo.png" alt="MakeUp Logo" />
            </div>
            <h1>
                <u>
                    <b>
                        Consulte nossos produtos:
                    </b>
                </u>
            </h1>
            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const { id, name, price, oldPrice, image, description } = item;
                    return (
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="info">
                                <span className="name">{name}</span>
                                <span className="oldPrice">R$ {oldPrice}</span>
                                <button className="price" onClick={() => handleModal(id)}>R$ {price}</button>
                                <Modal show={modal === id} onHide={() => handleModal(null)}>
                                    <Modal.Header closeButton>{name}</Modal.Header>
                                    <Modal.Body>
                                        <img src={image} alt={name} />
                                        <b>{description}</b>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className="comprar" onClick={() => handleModal(null)}>
                                            Comprar Produto
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={handleLeftClick}>
                    <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
                </button>
                <button onClick={handleRightClick}>
                    <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
                </button>
            </div>
            <footer>
                <i>
                    <center>
                        © Criado em 2021 por Elimar Santos.
                    </center>
                </i>
            </footer>
        </div>
    );
}

export default Produtos;