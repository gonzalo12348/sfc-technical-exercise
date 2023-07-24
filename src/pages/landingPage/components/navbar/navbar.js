import React from 'react';
import styles from './styles.module.css';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useDropdownMenu from './hooks/useDropdownMenu';
import { languages } from '../../../../constants/const';


const Navbar = () => {
  const resourceOptions = useDropdownMenu();
  const languageOptions = useDropdownMenu();

  return (
    <nav className={styles.navbar}>
      <h3 className={styles.navbarOption}>Sobre Nosotros</h3>
      <h3 className={styles.navbarOption}>Mapa</h3>
      <div
        className={styles.navbarOption}
        onClick={resourceOptions.toggleMenu}
      >
        <h3>Recursos</h3>
        <FaChevronDown
          className={`${styles.iconChevronNavbar} ${
            resourceOptions.showMenu ? styles.rotated : ''
          }`}
        />
        {resourceOptions.showMenu && (
          <div className={`${styles.dropdownMenu} ${styles.show}`}>
            <div className={styles.dropdownMenuItem}>
              <Link to="/odour-observatory" className={styles.linkToRedirect}>
                <h3>OdourObservatory</h3>
              </Link>
            </div>
            <div className={styles.dropdownMenuItem}>
              <h3>D-NOSES</h3>
            </div>
            <div className={styles.dropdownMenuItem}>
              <h3>Science for Change</h3>
            </div>
          </div>
        )}
      </div>
      <h3 className={styles.navbarOption}>Blog</h3>
      <div className={styles.buttonLanguageContainer}>
        <h3 className={styles.navbarOption} onClick={languageOptions.toggleMenu}>
          Castellano
        </h3>
        <FaChevronDown
          className={`${styles.iconChevronNavbar} ${
            languageOptions.showMenu ? styles.rotated : ''
          }`}
        />
        {languageOptions.showMenu && (
          <div className={`${styles.dropdownLanguageMenu} ${styles.show}`}>
            {languages.map((language) => (
              <div key={language.id} className={styles.dropdownMenuItem}>
                <h3>{language.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
