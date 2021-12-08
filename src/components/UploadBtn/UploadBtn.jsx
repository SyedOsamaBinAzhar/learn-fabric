import React, { useEffect, useState } from 'react'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import fabric from 'fabric'

const UploadBtn = ({setCroppedImg}) => {

    const [croppedLocalImg,setCroppedLocalImg] = useState("");

    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ]);
    
    
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };


      const onPreview = async file => {
          console.log("on prev")
        //   console.log(file.url)
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        // console.log(src)
        const image = new Image();
        image.src = src;
        setCroppedLocalImg(src)
        
      };

      useEffect(() => {
        setCroppedLocalImg(croppedLocalImg)
        setCroppedImg(croppedLocalImg)
      }, [croppedLocalImg])

    return (
      <>
      <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        // fileList={fileList}
        onChange={(e) => onChange(e)}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
    <div style = {{height :"50vh",width:"30vw",background:"orange"}}>
        <img src={croppedLocalImg} style = {{height :"45vh",width:"25vw",background:"pink"}} id = "img"></img>
    </div>
      </>
    )
}

export default UploadBtn
