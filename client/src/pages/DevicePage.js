import React from "react";
import {Container, Col, Image, Row, Card, Button} from "react-bootstrap"
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://zm61.ru/upload/iblock/84b/srjklt20apje627nhctsvp8voy5oxppg.jpg' }
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '4000'},
    ]
    
    return (
        <Container className="mt-3 d-flex">
            <Row className="d-flex justify-content-between" style={{width: '100%'}}>
                <Col md={4} style={{width: 300, height: 300}}>
                    <Image width="100%" height="100%" src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign: "center"}}>{device.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}    
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
                <Row className="d-flex flex-column mt-3">
                    <h1>Xарактеристики:</h1>
                    {description.map((info, index) => 
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            </Row>
        </Container>
    )
}

export default DevicePage;