import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} style={{width: 150, marginRight: '50px',marginTop: '10px'}} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Apple...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem;