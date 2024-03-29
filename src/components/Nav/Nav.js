import React, { useRef, useState, useEffect } from 'react';
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import burgerMenuIcon from "../../assets/images/icons/burger.svg";
import s from "./Nav.module.scss";
import Btn from '../Btn/Btn';

export default function Nav({
  links,
  switchBtn,
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
  const [isVisible, setIsVisible] = useState(true);
  // Show on Scroll
  // useEffect(() => {
  //   window.toggleNav = () => setIsVisible(bool => !bool);
    
  //   function onScroll() {
  //     const top = window.document.scrollingElement.scrollTop;

  //     if (!isVisible && top > 400) {
  //       setIsVisible(true);
  //     } else if (isVisible && top <= 400) {
  //       setIsVisible(false);
  //     }
  //   }

  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   onScroll();

  //   return () => window.removeEventListener('scroll', onScroll, { passive: true });
  // }, [isVisible]);


  /*************/
  /* Scroll follow */
  const navEl = useRef(null);
  const [currentLinkShown, setCurrentLinkShown] = useState(null);

  useEffect(() => {
    const elementsScrollTop = links
      .filter(l => !!l.elId)
      .map(
        l => {
          const el = document.getElementById(l.elId);
          const top = el.offsetTop;

          return {
            elId: l.elId,
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
          found = curr.elId;
          break ;
        }
      }

      setCurrentLinkShown(found);
    }

    window.addEventListener('scroll', followScroll, { passive: true });

    return () => window.removeEventListener('scroll', followScroll, { passive: true });
  }, []);

  let switchBtnTxt;
  let switchBtnUrl;
  let switchBtnTitle;

  if (switchBtn === 'pro') {
    switchBtnTxt = 'Pro';
    switchBtnUrl = '/professionnels';
    switchBtnTitle = 'Production audiovisuelle pour les professionnels';
  } else {
    switchBtnTxt = 'Sessions';
    switchBtnUrl = '/sessions';
    switchBtnTitle = 'Sessions musicales intimistes';
  }

  return (
    <nav ref={navEl} className={isVisible && s.visible}>
      <div id={s.logo}>
        <Link to="/">
          <Img
            fixed={images.logo.childImageSharp.fixed}
          />
        </Link>
      </div>


      <div id={s.mobileMenuLink}>
        <button onClick={() => setIsMobileOverlayVisible(true)}>
          Menu <img src={burgerMenuIcon} alt="3 barres horizontales" />
        </button>
      </div>

      <ul id={s.desktopLinks}>
        {links.map((l, i) => (
          l.elId !== undefined
            ? (
              <li className={l.elId === currentLinkShown && s.selected}>
                <a href={`#${l.elId}`}>{l.text}</a>
              </li>
            )
            : (
              <li>
                <Link to={l.url}>{l.text}</Link>
              </li>
            )
        ))}
      </ul>

      <Btn
        id={s.navContactBtn}
        Component={Link}
        to="/contact"
      >
        Contact
      </Btn>

      {/*<Link
        to={switchBtnUrl}
        className={`${s.partSwitch} recoleta ${s.partSwitchDesktop}`}
        title="Production audiovisuelle pour les professionnels"
      >
        {switchBtnTxt}
      </Link>*/}

      <div id={s.mobileOverlayLinks} className={isMobileOverlayVisible && s.overlayVisible}>
        <button id={s.mobileLinksClose} onClick={closeMobileOverlay}>
          ← Fermer
        </button>

        <ul>
          {links.map((l, i) => (
            l.elId !== undefined
              ? (
                <li className={l.elId === currentLinkShown && s.selected} key={l.elId}>
                  <a href={`#${l.elId}`} onClick={closeMobileOverlay}>{l.text}</a>
                </li>
              )
              : (
                <li>
                  <Link to={l.url}>{l.text}</Link>
                </li>
              )
            
          ))}
        </ul>

        {/*<Link
          to={switchBtnUrl}
          className={`${s.partSwitch} recoleta`}
          title="Production audiovisuelle pour les professionnels"
        >
          {switchBtnTxt}
        </Link>*/}
      </div>
    </nav>
  );
}
