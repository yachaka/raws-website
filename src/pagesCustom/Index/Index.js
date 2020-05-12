import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

import Btn from "../../components/Btn/Btn";
import Nav from "../../components/Nav/Nav";
import FacebookPill from '../../components/SocialPills/FacebookPill';
import InstagramPill from '../../components/SocialPills/InstagramPill';
import YoutubePill from '../../components/SocialPills/YoutubePill';

// TODO: SEO + favicon + audio qui joue en arrivant sur la page
import s from './Index.module.scss';

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "assets/images/logo-raws-beige.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      heroBackground: file(relativePath: { eq: "assets/images/ben-en-video.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      headerOvalBckgd: file(relativePath: { eq: "assets/images/oval-bckgd-home-header.png" }) {
        childImageSharp {
          fixed(width: 1259, height: 259, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      musicalClip: file(relativePath: { eq: "assets/images/ben-filmant-rocher.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      musicalClipTextGradient: file(relativePath: { eq: "assets/images/musical-clip-text-call-out.png" }) {
        childImageSharp {
          fluid(maxWidth: 703, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      remi: file(relativePath: { eq: "assets/images/remi.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 120, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      ben: file(relativePath: { eq: "assets/images/ben.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 120, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  function registerClassClickToggle(el) {
    if (el) {
      el.addEventListener('click', function () {
        if (el.classList.contains(s.clicked)) {
          el.classList.remove(s.clicked);
        } else {
          el.classList.add(s.clicked);
        }
      });
    }
  }

  const title = 'RAWS - Sessions - Production Audiovisuelle, autour de Toulouse';
  const description = 'RAWS est une boîte de production spécialisée dans la réalisation de vidéos musicales lives, acoustiques et intimistes, le plus souvent tournées en extérieur ou dans des lieux insolites. Afin de correspondre au mieux à leurs attentes et à leurs univers, nous invitons les artistes à participer au processus créatif et au choix du lieu de tournage.';
  const image = 'https://rawssessions.com' + images.heroBackground.childImageSharp.src;

  return (
    <>
      <Helmet>
        <meta charSet="utf8" />
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#101010" />
        <meta name="description" content={description} />

        <meta property="og:url" content="https://rawssessions.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />

        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="TO BE FILLED" />

        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="RAWS" />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>

      <Nav />

      <div id={s.hero}>
        <Img
          fluid={images.heroBackground.childImageSharp.fluid}
          style={{ height: '100%' }}
        />

        <div id={s.heroHeaderOvalBckgd}>
          <Img
            fixed={images.headerOvalBckgd.childImageSharp.fixed}
            alt="RAWS"
          />
        </div>
        
        <div id={s.heroHeader}>
          <div id={s.heroLogo}>
            <Img
              fixed={images.logo.childImageSharp.fixed}
              alt="RAWS"
            />
          </div>

          <div id={s.heroHeaderRight}>
            <p id={s.shortDesc}>
              Production Audiovisuelle
            </p>

            <FacebookPill className={s.pillMarged} />
            <InstagramPill className={s.pillMarged} />
            <YoutubePill />
          </div>
        </div>
      </div>



      <div id="intro" className={s.intro}>
        <p>
          <span className="recoleta">Raws</span> est une boîte de production spécialisée dans la réalisation de vidéos musicales lives, acoustiques et intimistes, le plus souvent tournées en extérieur ou dans des lieux insolites.
          <br /><br />
          Afin de correspondre au mieux à leurs attentes et à leurs univers, nous invitons les artistes à participer au processus créatif et au choix du lieu de tournage.
          <br /><br />
          Nous filmons ce que nous aimons, quelle que soit la notoriété des artistes. :)
        </p>
      </div>


      <div id="extraits" className={`${s.videosExtracts} container`}>
        <h1>Extraits de nos productions</h1>


        <div id={s.mainExtract}>
          <div id={s.mainExtractVideo} />

          <p id={s.mainExtractDesc}>
            Tourné à Grives-en-Maux, pour Ben Calza.
            <br /><br />
            Choix du lieux par l’artiste.
            <br /><br />
            Plan séquence suggéré par nous.
          </p>
        </div>

        <div id={s.secondaryExtracts}>
          <div className={s.secondaryExtract}>
            <div className={s.secondaryExtractVideo} />

            <div className={s.secondaryExtractInfos}>
              <p>
                <span className={s.secondaryExtractVideoTitle}>Makeba - Jain</span>
                <br/>
                Tourné à Toulouse
                Le 20/03/2019
              </p>
            </div>
          </div>

          <div className={s.secondaryExtract}>
            <div className={s.secondaryExtractVideo} />

            <div className={s.secondaryExtractInfos}>
              <p>
                <span className={s.secondaryExtractVideoTitle}>Makeba - Jain</span>
                <br/>
                Tourné à Toulouse
                Le 20/03/2019
              </p>
            </div>
          </div>
        </div>
      </div>





      <div id="clip-musical" className={`${s.musicalVideo} container`}>
        
        <div id={s.musicalVideoImage}>
          <div id={s.textWithGradient}>
            <Img
              fluid={images.musicalClipTextGradient.childImageSharp.fluid}
              alt="Nous réalisons votre clip musical"
            />
          </div>
          <Img
            fluid={images.musicalClip.childImageSharp.fluid}
          />
        </div>

        <div id={s.musicalVideoInfos}>
          <h1>Nous pouvons réaliser votre clip musical.</h1>

          <p>
            Afin de correspondre au mieux à leurs attentes et à leurs univers, nous invitons les artistes à participer au processus créatif et au choix du lieu de tournage.
            <br /><br />
            Nous réalisons aussi des services post-production.
            <br /><br />
            Tarification indicative : 1 000 euros pour un clip musical
            de 4 mn.
          </p>

          <Btn Component={Link} to="/contact">
            Nous contacter
          </Btn>
        </div>
      </div>






      <div id="savoir-faire" className={`${s.knowHow} container`}>
        <h1>
          Nous mettons à disposition
          <br/>notre savoir-faire Audiovisuel.
        </h1>

        <div id={s.knowHowBoxes}>
          <div className={s.knowHowBoxRow}>
            <div
              ref={registerClassClickToggle}
              id={s.oldCam}
              className={s.knowHowBox}
            >
              <div className={s.knowHowBoxInner}>
                <div className={s.front}>
                  <span className={s.infoBubble}>
                    i
                  </span>

                  <svg viewBox="0 0 116 124" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M64.668 54.749H20.3c-.8 0-1.45.65-1.45 1.453v25.826c0 .802.65 1.453 1.45 1.453h44.368c.801 0 1.45-.651 1.45-1.453V56.202c0-.803-.649-1.453-1.45-1.453zm-1.45 25.826H21.75v-22.92h41.468v22.92z"/><path d="M107.774 45.292L89.35 56.354v-7.227c0-4.11-3.333-7.453-7.428-7.453h-5.791c6.736-3.834 11.298-11.077 11.298-19.38C87.43 10.006 77.454.01 65.191.01c-11.165 0-20.41 8.3-21.977 19.062-2.944-4.573-8.063-7.615-13.885-7.615-9.114 0-16.528 7.43-16.528 16.562 0 5.664 2.855 10.668 7.195 13.656h-1.688c-4.095 0-7.427 3.344-7.427 7.453v10.32H5.436C2.439 59.448 0 61.895 0 64.902v8.428c0 3.007 2.44 5.454 5.436 5.454h5.445v10.32c0 4.109 3.332 7.453 7.427 7.453h19.377v4.746c0 2.937 2.384 5.328 5.317 5.328h3.978l-9.91 15.109a1.45 1.45 0 102.424 1.597l10.626-16.2 10.755 16.13a1.45 1.45 0 002.013.402 1.457 1.457 0 00.4-2.015L53.272 106.63h3.958c2.932 0 5.316-2.391 5.316-5.328v-4.746h19.377c4.095 0 7.428-3.344 7.428-7.454v-7.227l18.423 11.063c3.644 2.182 8.226-.458 8.226-4.68V49.971c0-4.232-4.592-6.856-8.226-4.68zM65.19 2.916c10.664 0 19.34 8.693 19.34 19.378 0 10.686-8.676 19.38-19.34 19.38-10.661 0-19.337-8.694-19.337-19.38 0-10.685 8.676-19.378 19.337-19.378zM54.253 41.674H38.66a16.602 16.602 0 006.64-9.476 22.392 22.392 0 008.953 9.476zM15.7 28.018c0-7.53 6.113-13.656 13.628-13.656 7.512 0 13.625 6.127 13.625 13.656 0 7.53-6.113 13.656-13.625 13.656-7.515 0-13.628-6.126-13.628-13.656zM5.436 75.877A2.544 2.544 0 012.9 73.329V64.9a2.544 2.544 0 012.536-2.547h5.445v13.523H5.436zm54.21 25.425a2.422 2.422 0 01-2.416 2.421H43.002a2.422 2.422 0 01-2.417-2.421v-4.746h19.061v4.746zm26.805-12.2c0 2.508-2.032 4.548-4.528 4.548H18.308c-2.496 0-4.527-2.04-4.527-4.548V49.127c0-2.507 2.031-4.547 4.527-4.547h63.615c2.496 0 4.528 2.04 4.528 4.547v39.975zm26.649-.845c0 1.982-2.147 3.2-3.835 2.187L89.351 78.487V59.743l19.914-11.957c1.687-1.011 3.835.202 3.835 2.186v38.285z"/><path d="M75.915 56.602c-3.013 0-5.464 2.46-5.464 5.483 0 3.023 2.451 5.482 5.464 5.482 3.014 0 5.466-2.46 5.466-5.482 0-3.023-2.452-5.483-5.466-5.483zm0 8.06a2.573 2.573 0 01-2.564-2.577 2.573 2.573 0 012.564-2.577 2.575 2.575 0 012.566 2.577 2.575 2.575 0 01-2.566 2.576zM75.915 70.662c-3.013 0-5.464 2.46-5.464 5.483 0 3.023 2.451 5.483 5.464 5.483 3.014 0 5.466-2.46 5.466-5.483 0-3.023-2.452-5.483-5.466-5.483zm0 8.06a2.573 2.573 0 01-2.564-2.577 2.573 2.573 0 012.564-2.577 2.575 2.575 0 012.566 2.577 2.575 2.575 0 01-2.566 2.576zM29.329 19.205c-4.849 0-8.795 3.953-8.795 8.813 0 4.859 3.946 8.812 8.795 8.812 4.848 0 8.792-3.953 8.792-8.812 0-4.86-3.944-8.813-8.792-8.813zm0 14.72c-3.25 0-5.895-2.65-5.895-5.907s2.645-5.907 5.895-5.907c3.249 0 5.892 2.65 5.892 5.907 0 3.256-2.643 5.906-5.892 5.906zM65.191 34.345c6.631 0 12.025-5.405 12.025-12.05 0-6.645-5.394-12.05-12.025-12.05-6.628 0-12.022 5.405-12.022 12.05 0 6.645 5.394 12.05 12.022 12.05zm0-21.194c5.032 0 9.125 4.102 9.125 9.144s-4.093 9.144-9.125 9.144c-5.03 0-9.122-4.102-9.122-9.144s4.093-9.144 9.122-9.144z"/></g></svg>
                  
                  <h4>Prise vidéo</h4>
                </div>

                <div className={s.back}>
                  À votre demande, nous assurons la mise en relation de la connectivité. À demain, et je remplis du texte en plus.
                </div>
              </div>
            </div>

            <div ref={registerClassClickToggle} id={s.microphone} className={s.knowHowBox}>
              <div className={s.knowHowBoxInner}>
                <div className={s.front}>
                  <span className={s.infoBubble}>
                    i
                  </span>

                  <svg viewBox="0 0 53 74" xmlns="http://www.w3.org/2000/svg"><path d="M26.6.839c-8.876 0-16.081 7.14-16.081 15.94v19.568c0 8.802 7.205 15.946 16.081 15.946 8.877 0 16.077-7.144 16.077-15.946V16.78c0-8.8-7.2-15.94-16.077-15.94zm-1.652 3.216v3.658c0 .717.544 1.269 1.248 1.269s1.252-.555 1.252-1.269V4.055l1.4.287c5.187 1.074 9.275 5.235 10.331 10.509l.283 1.423H31.03c-.705 0-1.248.552-1.248 1.268s.546 1.274 1.248 1.274h8.417V26.1H31.03c-.702 0-1.248.557-1.248 1.273 0 .716.543 1.269 1.248 1.269h8.417v7.284H31.03c-.702 0-1.248.558-1.248 1.274s.536 1.254 1.248 1.254h8.43l-.282 1.423c-1.056 5.273-5.14 9.447-10.331 10.52l-1.4.288v-3.659c0-.714-.548-1.269-1.252-1.269s-1.248.553-1.248 1.27v3.658l-1.399-.287c-5.187-1.074-9.277-5.233-10.336-10.51l-.282-1.422h8.43c.705 0 1.253-.555 1.253-1.269 0-.713-.55-1.273-1.253-1.273h-8.416V28.64h8.416c.705 0 1.253-.555 1.253-1.27 0-.713-.55-1.272-1.253-1.272h-8.416v-7.285h8.416c.702 0 1.253-.56 1.253-1.273 0-.714-.548-1.269-1.253-1.269h-8.43l.282-1.423C14.269 9.575 18.36 5.416 23.549 4.34l1.4-.284zM2.134 24.958c-.71 0-1.263.564-1.263 1.29v9.956c0 13.645 10.291 24.867 23.387 26.072l1.074.099v9.05H11.92c-.71 0-1.263.565-1.263 1.29 0 .725.55 1.285 1.263 1.285h29.356c.713 0 1.263-.56 1.263-1.285 0-.725-.552-1.29-1.263-1.29H27.864v-9.05l1.074-.099c13.096-1.205 23.387-12.43 23.387-26.072v-9.956c0-.723-.557-1.29-1.267-1.29-.71 0-1.268.567-1.268 1.29v9.956c0 13.003-10.412 23.606-23.193 23.606-12.782 0-23.198-10.6-23.198-23.606v-9.956c0-.723-.557-1.29-1.268-1.29h.003z" fill-rule="nonzero"/></svg>
                  <h4>Prise son</h4>
                </div>
                <div className={s.back}>
                  Hello
                </div>
              </div>
            </div>

            <div ref={registerClassClickToggle} id={s.audiograph} className={s.knowHowBox}>
              <div className={s.knowHowBoxInner}>
                <div className={s.front}>
                  <span className={s.infoBubble}>
                    i
                  </span>

                  <svg viewBox="0 0 128 122" xmlns="http://www.w3.org/2000/svg"><path d="M0 67.373h9.078V54.627H0v12.746zm11.801 20.94h9.078V32.776h-9.078v55.537zm11.802 16.388h9.078V16.388h-9.078v88.313zM35.404 122h9.078V0h-9.078v122zm23.603-41.88h9.078V40.97h-9.078v39.15zm12.71 8.193h9.077V33.687h-9.078v54.626zm11.8-4.552h9.079V38.24h-9.078V83.76zm11.802-9.104h9.078V46.433H95.32v28.224zm11.802-6.373h9.078V52.806h-9.078v15.478zm11.801-13.657v12.746H128V54.627h-9.078zM47.206 104.7h9.078V16.388h-9.078v88.313z" fill-rule="nonzero"/></svg>
                  <h4>Mastering son</h4>
                </div>

                <div className={s.back}>
                  Hello
                </div>
              </div>
            </div>
          </div>

          <div ref={registerClassClickToggle} className={`${s.second} ${s.knowHowBoxRow}`}>
            <div id={s.movieCut} className={s.knowHowBox}>
              <div className={s.knowHowBoxInner}>
                <div className={s.front}>
                  <span className={s.infoBubble}>
                    i
                  </span>

                  <svg viewBox="0 0 180 132" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M177.84 131.323h-25.096a1.867 1.867 0 110-3.733h25.097a1.867 1.867 0 110 3.733zm-43.785 0H88.133c-7.215 0-13.085-5.862-13.085-13.067V69.733c0-1.031.837-1.867 1.87-1.867 1.031 0 1.868.836 1.868 1.867v48.523c0 5.147 4.193 9.334 9.347 9.334h45.922a1.867 1.867 0 110 3.733zM76.917 52.935a1.868 1.868 0 01-1.869-1.866V39.871c0-1.03.837-1.866 1.87-1.866H177.84c1.032 0 1.869.835 1.869 1.866 0 1.03-.837 1.866-1.87 1.866H78.787v9.332c0 1.03-.837 1.866-1.869 1.866z" fill-rule="nonzero"/><path d="M121.772 41.737H82.524c-6.183 0-11.214-5.023-11.214-11.198 0-6.174 5.031-11.198 11.214-11.198H90c1.032 0 1.869.836 1.869 1.866 0 1.031-.837 1.867-1.869 1.867h-7.476c-4.122 0-7.476 3.349-7.476 7.465 0 4.117 3.354 7.466 7.476 7.466h39.248c1.033 0 1.87.835 1.87 1.866 0 1.03-.837 1.866-1.87 1.866z"/><path d="M73.18 93.995H58.761a1.868 1.868 0 01-1.869-1.866c0-1.03.837-1.866 1.869-1.866h14.417c1.032 0 1.87.835 1.87 1.866a1.868 1.868 0 01-1.87 1.866zm-33.108 0H2.16A1.868 1.868 0 01.29 92.13v-74.12c0-1.032.837-1.867 1.87-1.867 1.031 0 1.868.835 1.868 1.866v72.255h36.044c1.032 0 1.87.835 1.87 1.866a1.868 1.868 0 01-1.87 1.866zm48.059-70.921a1.868 1.868 0 01-1.869-1.867c0-1.03.837-1.866 1.869-1.866 4.122 0 7.476-3.349 7.476-7.465 0-4.117-3.354-7.466-7.476-7.466H5.363a1.868 1.868 0 01-1.869-1.866c0-1.03.837-1.867 1.869-1.867h82.768c6.183 0 11.214 5.024 11.214 11.199 0 6.174-5.03 11.198-11.214 11.198zM147.938 81.44c-5.153 0-9.345-3.882-9.345-8.654 0-4.771 4.192-8.652 9.345-8.652 5.152 0 9.344 3.881 9.344 8.653 0 4.771-4.192 8.653-9.345 8.653zm0-13.574c-3.092 0-5.607 2.208-5.607 4.92 0 2.714 2.515 4.921 5.607 4.921 3.091 0 5.606-2.207 5.606-4.92s-2.515-4.92-5.607-4.92z" fill-rule="nonzero"/><path d="M106.82 95.014a1.866 1.866 0 01-.586-3.639l41.117-13.574a1.87 1.87 0 012.36 1.187 1.865 1.865 0 01-1.187 2.358l-41.117 13.573a1.88 1.88 0 01-.587.095z"/><path d="M147.938 105.194c-5.153 0-9.345-3.882-9.345-8.654 0-4.771 4.192-8.653 9.345-8.653 5.152 0 9.344 3.882 9.344 8.653 0 4.772-4.192 8.654-9.345 8.654zm0-13.574c-3.092 0-5.607 2.207-5.607 4.92 0 2.714 2.515 4.92 5.607 4.92 3.091 0 5.606-2.206 5.606-4.92 0-2.713-2.515-4.92-5.607-4.92z" fill-rule="nonzero"/><path d="M147.938 91.621c-.195 0-.393-.03-.587-.095l-41.117-13.574a1.866 1.866 0 111.173-3.544l41.117 13.574a1.865 1.865 0 01-.586 3.639zM9.871 10.258h7.84v7.84H9.87zM20.322 10.258h7.84v7.84h-7.84zM31.645 10.258h7.84v7.84h-7.84zM42.967 10.258h7.84v7.84h-7.84zM54.29 10.258h7.84v7.84h-7.84zM65.613 10.258h7.84v7.84h-7.84zM9.871 77.322h7.84v7.84H9.87zM20.322 77.322h7.84v7.84h-7.84zM31.645 77.322h7.84v7.84h-7.84zM42.967 77.322h7.84v7.84h-7.84zM54.29 77.322h7.84v7.84h-7.84zM83.903 46.838h7.84v7.84h-7.84zM95.225 46.838h7.84v7.84h-7.84zM106.548 46.838h7.84v7.84h-7.84zM117.871 46.838h7.84v7.84h-7.84zM129.193 46.838h7.84v7.84h-7.84zM140.516 46.838h7.84v7.84h-7.84zM151.838 46.838h7.84v7.84h-7.84zM162.29 46.838h7.84v7.84h-7.84zM83.903 114.774h7.84v7.84h-7.84zM95.225 114.774h7.84v7.84h-7.84zM106.548 114.774h7.84v7.84h-7.84zM117.871 114.774h7.84v7.84h-7.84zM129.193 114.774h7.84v7.84h-7.84zM140.516 114.774h7.84v7.84h-7.84zM151.838 114.774h7.84v7.84h-7.84zM162.29 114.774h7.84v7.84h-7.84z"/></g></svg>
                  <h4>Mastering vidéo</h4>
                </div>

                <div className={s.back}>
                  Bjr
                </div>
              </div>
            </div>


            <div ref={registerClassClickToggle} id={s.colorPalette} className={s.knowHowBox}>
              <div className={s.knowHowBoxInner}>
                <div className={s.front}>
                  <span className={s.infoBubble}>
                    i
                  </span>

                  <svg viewBox="0 0 122 122" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M61 121.744c-20.408 0-39.356-10.215-50.684-27.325a2.563 2.563 0 114.274-2.83c10.376 15.673 27.726 25.03 46.41 25.03 30.667 0 55.618-24.951 55.618-55.619 0-11.883-3.723-23.233-10.767-32.823a2.563 2.563 0 114.131-3.034c7.695 10.476 11.762 22.875 11.762 35.857 0 33.495-27.25 60.744-60.744 60.744zM6.607 84.194a2.564 2.564 0 01-2.395-1.65l-.095-.252a2.563 2.563 0 014.798-1.804l.087.23a2.563 2.563 0 01-2.395 3.476zM3.365 71.558a2.564 2.564 0 01-2.536-2.212A61.077 61.077 0 01.256 61C.256 27.506 27.506.256 61 .256a60.664 60.664 0 0128.788 7.281 2.563 2.563 0 01-2.44 4.508A55.518 55.518 0 0061 5.382C30.332 5.382 5.382 30.332 5.382 61c0 2.556.177 5.128.525 7.643a2.563 2.563 0 01-2.542 2.915zM99.27 19.802a2.553 2.553 0 01-1.685-.633l-.19-.166a2.563 2.563 0 113.367-3.865l.196.17a2.563 2.563 0 01-1.688 4.494z"/><path d="M61 67.92A6.928 6.928 0 0154.08 61 6.928 6.928 0 0161 54.08 6.929 6.929 0 0167.92 61 6.929 6.929 0 0161 67.92zm0-8.714c-.99 0-1.794.805-1.794 1.794 0 .99.805 1.795 1.794 1.795.99 0 1.795-.805 1.795-1.795 0-.99-.805-1.794-1.795-1.794zM61 51.77a3.336 3.336 0 01-3.332-3.332A3.335 3.335 0 0161 45.106a3.335 3.335 0 013.331 3.332A3.335 3.335 0 0161 51.77zm0-5.127c-.99 0-1.794.806-1.794 1.795 0 .99.805 1.794 1.794 1.794.99 0 1.795-.805 1.795-1.794 0-.99-.805-1.795-1.795-1.795zM61 77.4a3.336 3.336 0 01-3.332-3.332A3.336 3.336 0 0161 70.736a3.335 3.335 0 013.331 3.332A3.335 3.335 0 0161 77.4zm0-5.126c-.99 0-1.794.805-1.794 1.794 0 .99.805 1.794 1.794 1.794.99 0 1.795-.805 1.795-1.794 0-.99-.805-1.794-1.795-1.794zM70.062 55.522a3.31 3.31 0 01-2.356-.974 3.312 3.312 0 01-.975-2.357c0-.889.346-1.725.973-2.354a3.31 3.31 0 012.358-.977c.89 0 1.728.347 2.357.977a3.31 3.31 0 01.973 2.354 3.31 3.31 0 01-.975 2.356 3.306 3.306 0 01-2.355.975zm0-5.126c-.473 0-.936.192-1.27.528a1.806 1.806 0 00-.526 1.267c0 .473.192.935.527 1.27.333.333.796.526 1.269.526.472 0 .935-.193 1.269-.527.335-.335.526-.797.526-1.269 0-.472-.192-.934-.526-1.269a1.807 1.807 0 00-1.27-.526z"/><path d="M51.938 73.646a3.31 3.31 0 01-2.355-.975 3.309 3.309 0 01-.975-2.356c0-.89.346-1.726.974-2.355a3.311 3.311 0 012.356-.976c.89 0 1.727.346 2.356.975.629.628.975 1.465.975 2.356a3.31 3.31 0 01-.975 2.356 3.312 3.312 0 01-2.356.975zm0-5.126c-.471 0-.934.191-1.268.525a1.809 1.809 0 00-.527 1.27c0 .472.193.935.527 1.27.334.333.797.525 1.268.525.472 0 .934-.192 1.269-.525.335-.336.527-.798.527-1.27 0-.473-.193-.935-.527-1.27a1.807 1.807 0 00-1.269-.525z" stroke="#979797"/><path d="M73.815 64.585a3.335 3.335 0 01-3.331-3.332 3.335 3.335 0 013.331-3.332 3.335 3.335 0 013.332 3.332 3.335 3.335 0 01-3.332 3.332zm0-5.126c-.99 0-1.795.805-1.795 1.794 0 .99.806 1.795 1.795 1.795.99 0 1.795-.805 1.795-1.795 0-.99-.805-1.794-1.795-1.794z"/><path d="M48.185 64.585a3.336 3.336 0 01-3.332-3.332 3.336 3.336 0 013.332-3.332 3.335 3.335 0 013.332 3.332 3.336 3.336 0 01-3.332 3.332zm0-5.126c-.99 0-1.795.805-1.795 1.794 0 .99.806 1.795 1.795 1.795.99 0 1.794-.805 1.794-1.795 0-.99-.805-1.794-1.794-1.794z" stroke="#979797"/><path d="M51.938 55.522c-.89 0-1.727-.346-2.355-.975a3.31 3.31 0 01-.975-2.356c0-.89.346-1.726.974-2.355a3.311 3.311 0 012.356-.976c.891 0 1.728.347 2.357.976.628.629.974 1.465.974 2.355 0 .89-.346 1.727-.975 2.356a3.31 3.31 0 01-2.356.975zm0-5.126c-.472 0-.934.192-1.269.526a1.807 1.807 0 00-.526 1.27c0 .472.192.934.526 1.268.334.335.797.527 1.27.527.471 0 .933-.192 1.268-.526.335-.336.527-.798.527-1.27s-.192-.934-.527-1.269a1.807 1.807 0 00-1.269-.526zM70.062 73.646c-.89 0-1.726-.347-2.356-.975a3.31 3.31 0 01-.975-2.356c0-.89.346-1.725.973-2.355a3.31 3.31 0 012.358-.976c.89 0 1.727.346 2.356.976.627.627.974 1.464.974 2.355a3.31 3.31 0 01-.975 2.355 3.309 3.309 0 01-2.355.976zm0-5.126c-.473 0-.935.192-1.27.527a1.808 1.808 0 00-.526 1.268c0 .472.192.935.527 1.27.334.333.796.525 1.269.525.472 0 .935-.192 1.269-.527.335-.335.526-.797.526-1.268 0-.473-.193-.935-.527-1.27a1.806 1.806 0 00-1.268-.525zM61 42.774c-9.887 0-17.93-8.041-17.93-17.925 0-9.887 8.043-17.93 17.93-17.93s17.93 8.043 17.93 17.93c0 9.884-8.043 17.925-17.93 17.925zm0-30.73c-7.06 0-12.805 5.744-12.805 12.805 0 7.057 5.744 12.799 12.805 12.799 7.06 0 12.805-5.742 12.805-12.799 0-7.06-5.745-12.805-12.805-12.805z"/><path d="M92.321 60.854a17.991 17.991 0 01-15.539-8.967 17.927 17.927 0 01-2.405-8.95 17.99 17.99 0 018.965-15.54 17.945 17.945 0 018.954-2.405c6.39 0 12.345 3.434 15.541 8.963a17.931 17.931 0 012.405 8.95 17.994 17.994 0 01-8.97 15.542 17.91 17.91 0 01-8.95 2.407zm-.025-30.736a12.81 12.81 0 00-6.392 1.718 12.85 12.85 0 00-6.4 11.1c0 2.232.593 4.441 1.717 6.388a12.85 12.85 0 0011.1 6.404c2.233 0 4.441-.595 6.387-1.72a12.855 12.855 0 006.408-11.103c0-2.232-.594-4.44-1.717-6.387a12.861 12.861 0 00-11.103-6.4zM92.295 97.008c-3.131 0-6.226-.831-8.953-2.404a17.99 17.99 0 01-8.965-15.54c0-3.131.832-6.226 2.405-8.951a17.997 17.997 0 0115.545-8.969c3.13 0 6.223.831 8.945 2.403a17.996 17.996 0 018.97 15.545c0 3.13-.832 6.223-2.404 8.946a18 18 0 01-15.543 8.97zm.032-30.738a12.857 12.857 0 00-11.105 6.406 12.796 12.796 0 00-1.718 6.388 12.85 12.85 0 006.401 11.1 12.806 12.806 0 006.39 1.718c4.566 0 8.821-2.455 11.104-6.407a12.782 12.782 0 001.717-6.383c0-4.568-2.455-8.824-6.406-11.105a12.78 12.78 0 00-6.383-1.717z"/><path d="M61 115.082c-9.887 0-17.93-8.044-17.93-17.93 0-9.885 8.043-17.926 17.93-17.926s17.93 8.041 17.93 17.925c0 9.887-8.043 17.93-17.93 17.93zm0-30.73c-7.06 0-12.805 5.742-12.805 12.8 0 7.06 5.744 12.804 12.805 12.804 7.06 0 12.805-5.744 12.805-12.805 0-7.057-5.745-12.799-12.805-12.799z"/><path d="M29.703 97.008a17.989 17.989 0 01-15.542-8.97 17.924 17.924 0 01-2.404-8.95 17.99 17.99 0 018.971-15.541 17.915 17.915 0 018.945-2.403c6.394 0 12.35 3.437 15.545 8.969a17.924 17.924 0 012.404 8.95 17.99 17.99 0 01-8.97 15.541 17.927 17.927 0 01-8.95 2.404zm-.03-30.738c-2.23 0-4.438.594-6.383 1.717a12.849 12.849 0 00-6.407 11.101c0 2.232.594 4.44 1.718 6.387a12.849 12.849 0 0011.102 6.407c2.231 0 4.44-.594 6.386-1.718a12.849 12.849 0 006.407-11.101c0-2.232-.594-4.44-1.718-6.387a12.857 12.857 0 00-11.105-6.406zM29.678 60.854a17.91 17.91 0 01-8.952-2.408 17.985 17.985 0 01-8.97-15.537c0-3.13.832-6.226 2.405-8.952a17.99 17.99 0 0115.54-8.965c3.132 0 6.227.832 8.951 2.405a17.988 17.988 0 018.97 15.54c0 3.131-.831 6.226-2.404 8.95a17.992 17.992 0 01-15.54 8.967zm.023-30.736a12.85 12.85 0 00-11.1 6.401 12.807 12.807 0 00-1.718 6.39c0 4.565 2.455 8.818 6.406 11.098a12.78 12.78 0 006.389 1.72c4.566 0 8.82-2.453 11.1-6.403a12.792 12.792 0 001.718-6.387c0-4.567-2.454-8.821-6.406-11.1a12.796 12.796 0 00-6.389-1.72z"/></g></svg>
                  <h4>Colorimétrie</h4>
                </div>

                <div className={s.back}>
                  Bjr
                </div>
              </div>
            </div>
          </div>

          <p id={s.stuffUsed}>
            Matériel utilisé :
            <br/><br/>
            Caméra : Panasonic GH5
            <br/>Objectif : Leica panasonic 18-55m
            <br/>Moniteur : Black Magic,
            <br/>Steady Cam : Feiyu A1000
            <br/><br/>
            Micros : Zoom H4n Pro, Shure SM58, Audio Technica 2020, Rode SmartLav +, Zoom H2, Shure SM57
            <br/><br/>
            Mix & Mastering : Cubase LE Al Elements 9.5
            <br/>Montage & Etalonnage : Adobe Première pro 2019
          </p>
        </div>
      </div>






      <div id="entreprises" className={s.enterprise}>
        <h1>Entreprise ? Nous vous aidons à capturer vos évènements.</h1>

        <p id={s.enterpriseFocusP} className="recoleta">
          Pour un séminaire, une soirée d’entreprise, ou une conférence, nous venons sur place et réalisons la prise vidéo et son.
          <br /><br />
          À votre demande, nous montons une vidéo finale et ajustons la colorimétrie.
        </p>

        <p id={s.enterpriseSmallP}>
          Tarification indicative : 1000 euros à 3000 euros pour une prise vidéo + montage.
          <br/>Tarification précise selon conditions de travail.
        </p>

        <Btn Component={Link} to="/contact">
          Nous contacter
        </Btn>
      </div>





      <div id="a-propos" className={s.aboutUs}>
        <h1>À propos de nous</h1>

        <div id={s.aboutUs_Us}>
          <div className={s.person}>
            <div className={s.image}>
              <Img
                fixed={images.ben.childImageSharp.fixed}
                alt="Homme avec un bonnet et une veste d'hiver, et fond de forêt"
              />
            </div>

            <h3 className="recoleta">Ben</h3>

            <p className={s.desc}>
              Monteur/cadreur,
              <br/>vivant à Revel,
              <br/>aime la nature
            </p>
          </div>

          <div className={s.person}>
            <div className={s.image}>
              <Img
                fixed={images.remi.childImageSharp.fixed}
                alt="Homme avec un bonnet, portant un appareil photo, et fond de nature"
              />
            </div>

            <h3 className="recoleta">Rémi</h3>

            <p className={s.desc}>
              Monteur/cadreur,
              <br/>vivant à Revel,
              <br/>aime la nature
            </p>
          </div>
        </div>
      </div>


      <footer className="recoleta">
        <ul>
          <li><a href="#">Légal</a></li>
          <li className={s.separator}>●</li>
          <li><a href="#">Crédits</a></li>
          <li className={s.separator}>●</li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </footer>
    </>
  );
}

export default IndexPage
