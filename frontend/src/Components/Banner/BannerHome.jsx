
import React from 'react';
import { useEffect, useState } from 'react';

const BannerHome = () => {

    
    const images = [
        '/images/carousel-image1-m.jpg',
        '/images/carousel-image2-m.jpg',
        '/images/carousel-image3-m.jpg',
    ];

    const [image, setImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            setImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [image]);

    return (
        
        <section className='sectionHomeTop'>
            <img src={images[image]} alt="image Banner Home" />
            <h1>Bienvenue !</h1>
            <p>chez</p>
            <h2><span className='first'>F</span><span>I</span><span>T</span></h2>
            <h3>Vous dépasser et vous sentir bien dans votre peau !</h3>
        </section>
        
    );
};

export default BannerHome;