// App.js
import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import TextBlock from './components/TextBlock';
import ActionButton from './components/ActionButton';
import BackgroundImage from './components/BackgroundImage';
import ContentBlock from './components/ContentBlock'
import ButtonsBlock from './components/ButtonsBlock';
import ParallaxComponent from './components/ParallaxComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components/Header/header.css';
import './components/ImageCarousel/imageCarousel.css';

import ContainerComponent from "./components/ContainerComponent";
import {Parallax} from 'react-parallax';

// import './styles/global.css';

const images = [
    'https://d.furaffinity.net/art/zhurzh/1703637635/1703637635.zhurzh_img_2378.png',
    'https://d.furaffinity.net/art/zhurzh/1703548553/1703548553.zhurzh_print.png',
    'https://d.furaffinity.net/art/zhurzh/1695641846/1695641547.zhurzh_portrait_png.png',
    'https://d.furaffinity.net/art/zhurzh/1696610060/1696610060.zhurzh_img_0359.png',
    'https://d.furaffinity.net/art/zhurzh/1684860884/1684860884.zhurzh_spyro.jpg',
    'https://d.furaffinity.net/art/zhurzh/1685897979/1685897979.zhurzh_ss.png',
    'https://d.furaffinity.net/art/zhurzh/1685994656/1685994656.zhurzh_безымянный.png',
    'https://d.furaffinity.net/art/zhurzh/1689192961/1689192961.zhurzh_img_5420.png',
    'https://d.furaffinity.net/art/zhurzh/1696255321/1696255321.zhurzh_post_deviant_art.png',
    'https://d.furaffinity.net/art/zhurzh/1700480478/1700480478.zhurzh_img_1942.png',
    'https://d.furaffinity.net/art/zhurzh/1706743072/1706743072.zhurzh_two_scale_friends_art_by_zhurzh.png',
    'https://d.furaffinity.net/art/zhurzh/1682017610/1682017610.zhurzh_img_6316.png',
    'https://d.furaffinity.net/art/zhurzh/1683051689/1683051689.zhurzh_img_5395.png'

];

const firstHalfImages = images.slice(0, Math.ceil(images.length / 2));
const secondHalfImages = images.slice(Math.ceil(images.length / 2));
const buttonToTwitter = <ActionButton url="https://twitter.com/zhurzh_art">Twitter</ActionButton>;
const textAboutZhurzh = <TextBlock
    text="Меня зовут катя мне 23 года. Всю свою жизнь я занимаюсь творчеством в том или ином виде. Иллюстрации, коллажи, дизайн и драконы драконы драконы.  По образованию я педагог граф. Дизайнер, но в душе я ремесленник средневековья. Считаю, что мир нуждается в красивых картинках, это я ему и даю. А все мои персонажи и истории, которые я рисую, часть меня и моего мира и то как я вижу. "/>;
const buttons = <ButtonsBlock>
    <ActionButton url="https://twitter.com/zhurzh_art">Twitter</ActionButton>
    <ActionButton url="https://www.furaffinity.net/user/zhurzh">Furrafinity</ActionButton>
    <ActionButton url="https://www.patreon.com/ZHURZH_dragonartist">Patreon</ActionButton>
    <ActionButton url="https://www.deviantart.com/zhurzh-art">DeviantArt</ActionButton>
    {/*<ActionButton url="http://example5.com">Кнопка 5</ActionButton>*/}
</ButtonsBlock>

function App() {
    return (
        <div className="App">
            <Header/>
            <Parallax
                blur={{min: 0, max: 0}}
                bgImage='https://d.furaffinity.net/art/zhurzh/1695641846/1695641547.zhurzh_portrait_png.png'
                strength={-200}
                bgImageStyle={{width: '100%', height: 'auto'}}
            >
                <ContentBlock height={300}/>
                <ContentBlock
                    height={300}
                    leftContent={buttonToTwitter}
                    rightContent={textAboutZhurzh}
                />
                <ContentBlock height={500}/>
                <ContainerComponent
                    imageCarousel1={<ImageCarousel images={firstHalfImages}/>}
                    imageCarousel2={<ImageCarousel images={secondHalfImages}/>}
                    buttonsBlock={buttons}
                />
            </Parallax>
        </div>
    );
}

export default App;
