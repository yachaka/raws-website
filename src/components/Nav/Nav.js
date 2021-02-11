import React, { useRef, useState, useEffect } from 'react';
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import burgerMenuIcon from "../../assets/images/icons/burger.svg";
import s from "./Nav.module.scss";

export default function Nav({
  links,
}) {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "assets/images/logo-raws-beige.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  /*****
   Mobile show/hide overlay
  */
  const [isMobileOverlayVisible, setIsMobileOverlayVisible] = useState(false);
  const openMobileOverlay = () => setIsMobileOverlayVisible(true);
  const closeMobileOverlay = () => setIsMobileOverlayVisible(false);


  /*************/
  /* Show/hide */
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.toggleNav = () => setIsVisible(bool => !bool);
    
    function onScroll() {
      const top = window.document.scrollingElement.scrollTop;

      if (!isVisible && top > 400) {
        setIsVisible(true);
      } else if (isVisible && top <= 400) {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll, { passive: true });
  }, [isVisible]);


  /*************/
  /* Scroll follow */
  const navEl = useRef(null);
  const [currentLinkShown, setCurrentLinkShown] = useState(null);

  useEffect(() => {
    const elementsScrollTop = links.map(
      l => {
        const el = document.getElementById(l.elId);
        const top = el.offsetTop;

        return {
          top: top,
          bottom: top + el.offsetHeight,
        };
      },
    );
    const navHeight = navEl.current.offsetHeight;

    function followScroll() {
      const top = window.document.scrollingElement.scrollTop + navHeight;
      let found = null;

      for (let i = 0; i < elementsScrollTop.length; i++) {
        const curr = elementsScrollTop[i];

        if (top >= curr.top && top < curr.bottom) {
          found = i;
          break ;
        }
      }

      setCurrentLinkShown(found);
    }

    window.addEventListener('scroll', followScroll, { passive: true });

    return () => window.removeEventListener('scroll', followScroll, { passive: true });
  }, []);

  return (
    <nav ref={navEl} className={isVisible && s.visible}>
      <div id={s.logo}>
        <Img
          fixed={images.logo.childImageSharp.fixed}
        />
      </div>


      <div id={s.mobileMenuLink}>
        <button onClick={() => setIsMobileOverlayVisible(true)}>
          Menu <img src={burgerMenuIcon} alt="3 barres horizontales" />
        </button>
      </div>

      <ul id={s.desktopLinks}>
        {links.map((l, i) => (
          <li className={i === currentLinkShown && s.selected}>
            <a href={`#${l.elId}`}>{l.text}</a>
          </li>
        ))}
      </ul>

      <div id={s.mobileOverlayLinks} className={isMobileOverlayVisible && s.overlayVisible}>
        <button id={s.mobileLinksClose} onClick={closeMobileOverlay}>
          ← Fermer
        </button>

        <ul>
          {links.map((l, i) => (
            <li className={i === currentLinkShown && s.selected}>
              <a href={`#${l.elId}`} onClick={closeMobileOverlay}>{l.text}</a>
            </li>
          ))}
        </ul>        
      </div>
    </nav>
  );
}
