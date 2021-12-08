import React, { useEffect, useState } from 'react'
import "./Layout.css"
import UploadBtn from "../components/UploadBtn/UploadBtn"
import { Row, Col } from 'antd';
import { fabric } from 'fabric';

const Layout = () => {

    const [croppedImg,setCroppedImg] = useState("");

    useEffect(() => {
        if(croppedImg){
            console.log(croppedImg)
            var canvas = new fabric.Canvas('c');
            console.log(canvas)
            fabric.Image.fromURL(croppedImg, function(oImg) {
                // canvas.add(oImg);
                oImg.scale(0.1);
                oImg.filters.push(new fabric.Image.filters.Grayscale());
                oImg.applyFilters();
                // add image onto canvas (it also re-render the canvas)
                canvas.add(oImg);
                // canvas.add(oImg);
                
              });
        }
    }, [croppedImg])

    return (
        <>
        <Row className="root">
            <Col span={12} className="col1">
                <UploadBtn setCroppedImg = {setCroppedImg}/>
            </Col> 

            <Col span={12} className="col2">
            <div style = {{height:500,width:500,background:"pink",position:"relative"}}>
            <canvas id="c" style={{border:"1px solid black",position:"absolute"}}></canvas>
            </div>
            {/* <img src={croppedImg} id="my-image" height = {400} width = {400}/> */}
            </Col>
        </Row>            
        </>
    )
}

export default Layout
