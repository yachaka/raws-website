import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from '../../components/SEO';
import Btn from "../../components/Btn/Btn";
import Nav from "../../components/Nav/Nav";

// import augusta480p from '../../assets/videos/augusta-480p.mp4';
// import augusta720p from '../../assets/videos/augusta-720p.mp4';
// import augusta1080p from '../../assets/videos/augusta-1080p.mp4';

import s from './Sessions.module.scss';

const videos = [
    {
        url: 'https://www.youtube.com/embed/DLIh5pTnTtE',
        title: 'David & Augusta - The Old Whistle song',
        desc: '',
    },   
    {
        url: 'https://www.youtube.com/embed/eUVXOnAdCfg',
        title: 'Marty Went Back - Bushes',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/ISYLWUvP8rk',
        title: 'StanLei - Bright Blue',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/R74q_ITO4XU',
        title: 'Zitoune - The River (Aurora Cover)',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/EzPY_Ne0erw',
        title: 'Augusta - The Feeling\'s Gone',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/k6MYyJGcLU0',
        title: 'Tindaya - Words We Never Say',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/8cUG-oFeTfo',
        title: 'FLO - Comme Je Suis',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/i7bljfLBmW0',
        title: 'David William - Hold Me Down',
        desc: '',
    },
    {
        url: 'https://www.youtube.com/embed/Wt5O_3Ap9TQ',
        title: 'Augusta - The Birds',
        desc: '',
    },

];

const SessionsPage = () => {
    const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "assets/images/logo-raws-beige.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      heroBackground: file(relativePath: { eq: "assets/images/augusta-3000x2000.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2200, quality: 80, base64Width: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      headerOvalBckgd: file(relativePath: { eq: "assets/images/oval-bckgd-home-header.png" }) {
        childImageSharp {
          fixed(width: 1220, height: 259, quality: 100, base64Width: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      headerOvalBckgd2: file(relativePath: { eq: "assets/images/oval-shadow-2.png" }) {
        childImageSharp {
          fixed(width: 1220, height: 260, quality: 100, base64Width: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      musicalClip: file(relativePath: { eq: "assets/images/prise-son-video-ben-remi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90, base64Width: 42) {
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

    const title = 'RAWS - Sessions musicales intimistes';
    const image = 'https://rawssessions.com' + images.heroBackground.childImageSharp.src;

    const mainVideo = videos[0];
    const otherVideos = videos.slice(1);

    return (
        <>
            <SEO
                title={title}
                image={image}
                imageAlt="Guitariste chanteur, hangar désaffecté"
            />

            <Nav
                links={[
                    { elId: 'intro', text: 'Intro' },
                    { elId: 'extraits', text: 'Vidéos' },
                    { elId: 'clip-musical', text: 'Participer' },
                    { elId: 'supportez-nous', text: 'Nous soutenir' },
                    { elId: 'a-propos', text: 'À propos' },
                ]}
                switchBtn="pro"
            />

            <div id={s.hero}>
                <Img
                    fluid={images.heroBackground.childImageSharp.fluid}
                    style={{ height: '100%' }}
                />

                <div id={s.heroHeaderOvalBckgd}>
                    <Img
                        fixed={images.headerOvalBckgd2.childImageSharp.fixed}
                        alt="RAWS"
                    />
                </div>

                <Link
                    to="/professionnels"
                    id={s.heroSwitch}
                    className="recoleta"
                    title="Production audiovisuelle pour les professionnels"
                >
                    Pro
                </Link>

                <div id={s.heroHeader}>
                    

                    <div id={s.heroLogo}>
                        <Link to="/">
                            <Img
                                fixed={images.logo.childImageSharp.fixed}
                                alt="RAWS"
                            />
                        </Link>
                    </div>

                    <div id={s.heroHeaderRight}>
                        <p id={s.shortDesc}>
                            Sessions
                        </p>

                        {/*<FacebookPill className={s.pillMarged} />
                        <InstagramPill className={s.pillMarged} />
                        <YoutubePill className={s.pillMarged} />
                        <TwitterPill />*/}
                    </div>
                </div>
            </div>



            <div id="intro" className={s.intro}>
                <p>
                    <span className="recoleta">Raws &nbsp;Sessions</span> est une collection de vidéos musicales lives, acoustiques et intimistes, le plus souvent tournées en extérieur ou dans des lieux insolites.
                    <br/>
                    <br/>Inspiré par des chaînes comme Mahogany, Cardinal Sessions, Western AF ou encore GemsOnVHS, nous voulons faire vivre la musique folk en France, 
                    vous faire découvrir de nouveaux artistes au travers de sessions épurées et honnêtes.
                    <br/>
                    <br/>Nous filmons ce que nous aimons, quelle que soit la notoriété des artistes.
                </p>
            </div>


            <div id="extraits" className={`${s.videosExtracts} container`}>
                <h2>Nos Réalisations</h2>


                <div id={s.mainExtract}>
                    <div id={s.mainExtractVideo}>
                        <iframe
                            width="100%"
                            src={mainVideo.url}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>

                    <p id={s.mainExtractDesc}>
                        <span id={s.mainExtractTitle}>{mainVideo.title}</span>
                        <br />
                        {mainVideo.desc}
                    </p>
                </div>

                {otherVideos.map((video, index, array) => {
                    if (index % 2 !== 0) {
                        return null;
                    }

                    const v1 = video;
                    const v2 = array[index + 1];

                    return (
                        <div className={s.secondaryExtracts} key={v1.url}>
                            <div className={s.secondaryExtract}>
                                <div className={s.secondaryExtractVideo}>
                                    <iframe
                                        width="100%"
                                        src={v1.url}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div className={s.secondaryExtractInfos}>
                                    <p>
                                        <span className={s.secondaryExtractVideoTitle}>{v1.title}</span>
                                        <br />
                                        {v1.desc}
                                    </p>
                                </div>
                            </div>

                            {v2 && (
                                <div className={s.secondaryExtract}>
                                    <div className={s.secondaryExtractVideo}>
                                        <iframe
                                            width="100%"
                                            src={v2.url}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                            allowfullscreen
                                        ></iframe>
                                    </div>

                                    <div className={s.secondaryExtractInfos}>
                                        <p>
                                            <span className={s.secondaryExtractVideoTitle}>{v2.title}</span>
                                            <br />
                                            {v2.desc}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

            </div>





            <div id="clip-musical" className={`${s.musicalVideo} container`}>

                <div id={s.musicalVideoImage}>
                    <Img
                        fluid={{
                            ...images.musicalClip.childImageSharp.fluid,
                            sizes: "(max-width: 767px) 100vw, 65vw",
                        }}
                    />
                </div>

                <div id={s.musicalVideoInfos}>
                    <h2>Participez à une session Raws</h2>

                    <p>
                        Si vous êtes intéréssés pour tourner une session Raws, 
                        n'hésitez pas à nous contacter en nous envoyant une petite présentation de votre groupe / projet, 
                        et des liens pour écouter ce que vous faites.
                    </p>

                    <Btn Component={Link} to="/contact">
                        Nous contacter
                    </Btn>
                </div>
            </div>

            <div id="supportez-nous" className={s.supportUs}>
                <h2>Supportez Raws Sessions</h2>

                <div className={s.supportUsContent}>
                    <iframe id={s.patreonVideo} width="560" height="350" src="https://www.youtube.com/embed/lmVo-UoyGh8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p>
                        Raws sessions est une série de vidéos que nous auto-produisons.
                        Les vidéos sont et resteront gratuites pour les artistes et bien sur pour vous. 
                        Cependant, réaliser ces vidéos nous demande du temps et des ressources. 
                        <br/>
                        <br/>Patreon est un moyen pour nous de financer ce projet, vous pouvez nous aider et soutenir Raws en devenant contributeurs.
                    </p>
                </div>


                <Btn Component="a" href="https://www.patreon.com/rawssessions" className={s.patreonBtn} target="_blank" rel="noopener noreferrer">
                    Nous soutenir sur Patreon
                </Btn>
            </div>

            <div id="a-propos" className={s.aboutUs}>
                <h2>À propos de nous</h2>

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
                            Originaire de Revel, Benjamin a toujours été passionné par l'audiovisuel. Alors qu'il travaille comme cuisinier sur Paris, il se forme sur son temps libre, en auto didacte, aux techniques du son et s'exerce sur divers projets, en enregistrant plusieurs de ses amis musiciens. 
                            <br /><br />En 2017, il réalise son premier clip amateur pour un groupe Toulousain et se découvre une nouvelle passion pour la vidéo, la post-producion. C'est en novembre 2020 qu'il décide de créer une société et d'en faire son métier.
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
                            Né à Toulouse, Rémi a grandi à Revel où il passe une partie de sa scolarité. Passionné et attiré par l'univers de la photographie il entamera des études pour apprendre les techniques de cet art, par la suite il s’intéressera à la vidéo et peaufinera ses acquis de vidéaste au fil de ses expériences.
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
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </footer>
        </>
    );
}

export default SessionsPage;
