import imageContact from '@/Assets/Images/Pages/Contact/contactbanner-m.jpg';
import React from 'react';

const BannerContact = () => {


    return (
        <div className='bannerContact'>
            <div className='background'>
                <img src={imageContact} alt="banner image page Contact" />
            </div>
            <div className='formulaire'>
                <h1>Contactez-nous</h1>
                <form id="contact-form">
                    <div>
                        <label for="name">Nom</label><br />
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label for="email">E-mail</label><br />
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label for="message">Message</label><br />
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>

        </div>
    );
};

export default BannerContact;