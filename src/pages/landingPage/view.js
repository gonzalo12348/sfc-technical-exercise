import React from 'react';
import Navbar from './components/navbar';
import styles from './styles.module.css';
import OdourCollectLogo from '../../assets/OdourCollectLogo.svg';
import Iphone from '../../assets/IPhone.png';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={OdourCollectLogo} alt="logo" width="180" height="100" />
        </div>
        <div className={styles.navbarContainer}>
          <Navbar />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.sectionAboutAppContainer}>
          <h1>Ponemos tu sentido del olfato al servicio de la ciencia ciudadana.</h1>
          <p>Mide el olor y genera datos científicos para mejorar la calidad de vida de tu comunidad. ¡Descárgate la App y siente el poder de la ciencia colaborativa!</p>
          <div className={styles.appImagesContainer}>
            <img 
              src="https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/632c8bab0e22dd6961a28c0f_Play%20Store.webp" 
              loading="lazy" 
              width="156" 
              height="50" 
              srcSet="https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/632c8bab0e22dd6961a28c0f_Play%20Store-p-500.webp 500w, https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/632c8bab0e22dd6961a28c0f_Play%20Store.webp 623w" 
              sizes="(max-width: 991px) 100vw, 162.234375px" 
              alt="Available on Play Store" 
            />
            <img 
              src="https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/632c8babf59abc31ef6b4662_App%20Store.webp" 
              loading="lazy" 
              width="149" 
              height="50" 
              alt="Available on App Store"
            />
          </div>
        </div>

        <div className={styles.sectionPhoneImageContainer}>
          <img src={Iphone} alt='phone illustration'/>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
