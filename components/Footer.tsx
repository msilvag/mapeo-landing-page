import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp, faFacebookF, faInstagram, faBehance, faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import CustomLink from './common/Link';

const Footer : FC = () => (
  <footer className="footer">
    <div className="section section footer__body">
      <div className="section__column">
        <div className="footer__contact">
          <div className="footer__contact-title">
            <h2>Contacto</h2>
          </div>
          <div className="footer__contact-info">
            <ul>
              <li id="email"><a href="mailto:hola@mapeo.pe">hola@mapeo.pe</a></li>
              <li id="phone"><a href="tel:+51981292611">+51 981 292 611</a></li>
              <li id="address1">
                Calle Los Jazmines 544,
                <span>Urbanización California, Trujillo.</span>
              </li>
              <li id="address2">
                Mz. H Alto De La Luna
                <span>Jose Luis Bustamante y Rivero, Arequipa.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section__column">
        <div className="footer__social-media">
          <div className="footer__question">
            <h2>
              ¿Aún tienes dudas?
              <span>Conversemos, es fácil y rápido</span>
            </h2>
          </div>
          <CustomLink href="/" className="appear_vibrate footer__whatsapp button">
            <div className="footer__whatsapp-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className="footer__whatsapp-link">
              <span>WhatsApp</span>
            </div>
          </CustomLink>
          <div className="footer__social-media-icons">
            <ul>
              <li id="facebook">
                <CustomLink href="/"><FontAwesomeIcon icon={faFacebookF} /></CustomLink>
              </li>
              <li id="instagram">
                <CustomLink href="/"><FontAwesomeIcon icon={faInstagram} /></CustomLink>
              </li>
              <li id="linkedin">
                <CustomLink href="/"><FontAwesomeIcon icon={faLinkedinIn} /></CustomLink>
              </li>
              <li id="behance">
                <CustomLink href="/"><FontAwesomeIcon icon={faBehance} /></CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      &copy; 2021 MAPEO, Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
