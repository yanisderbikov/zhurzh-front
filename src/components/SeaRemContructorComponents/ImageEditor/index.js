import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Header from "../../Header";
import BackgroundImage from "../../BackgroundImage";
import ContentBlur from "../../ContentBlur";
import ContentBlock from "../../ContentBlock";
import ContainerComponent from "../../ContainerComponent";
import ImageCarousel from "../../ImageCarousel";
import {Parallax} from "react-parallax";

function ImageEditor({options}) {
    const [images, setImages] = useState({});
    const canvasRef = useRef(null);

    useEffect(() => {
        // Очистка и перерисовка канвы при изменении изображений
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Сортировка и отрисовка по слоям
        const layers = Object.values(images).sort((a, b) => a.layer - b.layer);
        layers.forEach(image => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        });
    }, [images]);

    const handleOptionClick = async (type, option) => {
        try {
            const response = await axios.post('http://localhost:8080/getimage', {type, option});
            const {layer, src} = response.data; // Предполагаем, что сервер возвращает слой и путь к изображению
            setImages(prev => ({...prev, [type]: {layer, src}}));
            console.log(`Выбран : ${option} для типа : ${type}`);
            console.log(`responce : ${response}`)
        } catch (error) {
            console.error('Error fetching image', error);
        }
    };

    const heightContent = "800";
    return (
        <div>
            <Header/>
            <Parallax
                blur={{min: 10, max: 10}}
                bgImage='https://d.furaffinity.net/art/zhurzh/1706743072/1706743072.zhurzh_two_scale_friends_art_by_zhurzh.png'
                strength={-200}
                bgImageStyle={{width: '100%', height: 'auto'}}
            >
                <ContentBlock
                    height={heightContent}
                    leftContent={
                        <div>
                            {options.map(({type, options}) => (
                                <div key={type}>
                                    <h3 style={{color: 'white'}}>{type}</h3>
                                    <select onChange={(e) => handleOptionClick(type, e.target.value)}>
                                        <option value="">Выберите опцию</option>
                                        {options.map(option => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    }
                    rightContent={
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <canvas ref={canvasRef} width={heightContent} height={heightContent}
                                    style={{border: '1px solid black',}}></canvas>
                        </div>
                    }
                />

            </Parallax>
        </div>
    );
}

export default ImageEditor;
