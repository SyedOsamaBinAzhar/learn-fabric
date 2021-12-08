import React from 'react'
import "./Layout.css"
import UploadBtn from "../components/UploadBtn/UploadBtn"
import { Row, Col } from 'antd';

const Layout = () => {
    return (
        <>
        <Row className="root">
            <Col span={12} className="col1">
                <UploadBtn/>
            </Col> 
            <Col span={12} className="col2">col-2</Col>
        </Row>            
        </>
    )
}

export default Layout
