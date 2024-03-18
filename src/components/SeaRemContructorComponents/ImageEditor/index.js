import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from "../../Header";

function ImageEditor({ options }) {
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
            const response = await axios.post('http://localhost:8080/getimage', { type, option });
            const { layer, src } = response.data; // Предполагаем, что сервер возвращает слой и путь к изображению
            setImages(prev => ({ ...prev, [type]: { layer, src } }));
        } catch (error) {
            console.error('Error fetching image', error);
        }
    };

    return (
        <div>
            <Header/>
            {options.map(({ type, options, layer }) => (
                <div key={type}>
                    <h3>{type}</h3>
                    {options.map(option => (
                        <button key={option} onClick={() => handleOptionClick(type, option)}>
                            {option}
                        </button>
                    ))}
                </div>
            ))}
            <canvas ref={canvasRef} width="1000" height="1000" style={{ border: '1px solid black' }}></canvas>
        </div>
    );
}

export default ImageEditor;
