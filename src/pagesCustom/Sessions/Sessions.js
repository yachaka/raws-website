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
import VideoGrid from "../../components/VideoGrid";

const videos = [ 
        {
        youtubeVideoID: 'e7kZ4O39WiU',
        title: 'Andreas Kyriakou - In The Pines',
        desc: '',
    },   
      {
        youtubeVideoID: 'idyNShfBoh8',
        title: 'Augusta - Give Me A Reason',
        desc: '',
    },   
    {
        youtubeVideoID: '6CZYZZAnMx8',
        title: 'Inaayah - Carousel',
        desc: '',
    },   
  {
        youtubeVideoID: 'i9YeJdYc5yw',
        title: 'Wildflower Union - One With Winter',
        desc: '',
    },   
   {
        youtubeVideoID: 'QYsQt9tuiL4',
        title: 'Dear & Dearer - Session',
        desc: '',
    },   
  {
        youtubeVideoID: 'BnfJm22BNjY',
        title: 'AM Higgins - Lower East Side',
        desc: '',
    },   
                        {
        youtubeVideoID: 'mrvcw1V2jL0',
        title: 'J.Aubertin - Mr. N.O.B.O.D.Y.',
        desc: '',
    },   
                    {
        youtubeVideoID: 'K3wdSzOVmqU',
        title: 'Gordie Chambers - Little Robin',
        desc: '',
    },   
                {
        youtubeVideoID: '57_aHsY7Iwg',
        title: 'Zitoune - Caravan Park Song',
        desc: '',
    },       
            {
        youtubeVideoID: 'z1yGIYXbrmw',
        title: 'Dear & Dearer - Cocaine',
        desc: '',
    },            
        {
        youtubeVideoID: 'sk6f2gIUsMo',
        title: 'J.Aubertin - The Key Of Every Dream',
        desc: '',
    },            
    {
        youtubeVideoID: 'SRU8ps4KD9k',
        title: 'Terry Russell - After The Rain',
        desc: '',
    },            
    {
        youtubeVideoID: 'jNkrRqofK1A',
        title: 'Orcival - Time is Coming',
        desc: '',
    },            
    {
        youtubeVideoID: 'wv8or7_2ai0',
        title: 'Jaw Droski - Twisted By Our Desires',
        desc: '',
    },            
        {
        youtubeVideoID: 'c2g_Z0wqYGQ',
        title: 'MaTThieu - L\'Histoire Des Vainqueurs',
        desc: '',
    },            
    {
        youtubeVideoID: 'NWkzXR-4PGg',
        title: 'Augusta - No Coward | Raws Sessions',
        desc: '',
    },
    {
        youtubeVideoID: 'Azs3l47BPZ8',
        title: 'Camille Bénâtre & Jessica Phan - Oh les sentiments ! | Raws Sessions',
        desc: '',
    },           
    {
        youtubeVideoID: '8if5-z1jvRc',
        title: 'Beavers - There Is A Time',
        desc: '',
    },        
    
    {
        youtubeVideoID: 'olcZjkRsmDo',
        title: 'Karl Socasau - Like I Do',
        desc: '',
    },        
    {
        youtubeVideoID: 't9V7GAXN8JA',
        title: 'Jell-oO - Thief',
        desc: '',
    },        
    {
        youtubeVideoID: 'mwVMTvi0tGc',
        title: 'Lilou - Mon Enfance',
        desc: '',
    },          
    {
        youtubeVideoID: 'xxZFzECwCnU',
        title: 'Sabotage - Wild Horses',
        desc: '',
    },       
    {
        youtubeVideoID: 'DlOcVrKLK1M',
        title: 'Laura Wild - Hovive',
        desc: '',
    },      
    {
        youtubeVideoID: 'Mar0nsoI-fs',
        title: 'Julian The Drifter - Deep River Blues',
        desc: '',
    },      
    {
        youtubeVideoID: 'zXrs-_1Wny4',
        title: 'Christopher Colletta & Fame Jane - The Price',
        desc: '',
    },      
    {
        youtubeVideoID: 'iJSaCBjEHBc',
        title: 'Anton - Song to Song',
        desc: '',
    },   
    {
        youtubeVideoID: 'DLIh5pTnTtE',
        title: 'David & Augusta - The Old Whistle song',
        desc: '',
    },   
    {
        youtubeVideoID: 'eUVXOnAdCfg',
        title: 'Marty Went Back - Bushes',
        desc: '',
    },
    {
        youtubeVideoID: 'ISYLWUvP8rk',
        title: 'StanLei - Bright Blue',
        desc: '',
    },
    {
        youtubeVideoID: 'R74q_ITO4XU',
        title: 'Zitoune - The River (Aurora Cover)',
        desc: '',
    },
    {
        youtubeVideoID: 'EzPY_Ne0erw',
        title: 'Augusta - The Feeling\'s Gone',
        desc: '',
    },
    {
        youtubeVideoID: 'k6MYyJGcLU0',
        title: 'Tindaya - Words We Never Say',
        desc: '',
    },
    {
        youtubeVideoID: '8cUG-oFeTfo',
        title: 'FLO - Comme Je Suis',
        desc: '',
    },
    {
        youtubeVideoID: 'i7bljfLBmW0',
        title: 'David William - Hold Me Down',
        desc: '',
    },
    {
        youtubeVideoID: 'Wt5O_3Ap9TQ',
        // url: 'https://www.youtube.com/embed/Wt5O_3Ap9TQ',
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
                    { url: '/', text: 'Production audiovisuelle' },
                ]}
                switchBtn="pro"
            />

            {/*<div id={s.hero}>
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

                {/*
                <Link
                    to="/professionnels"
                    id={s.heroSwitch}
                    className="recoleta"
                    title="Production audiovisuelle pour les professionnels"
                >
                    Pro
                </Link>
                

                <div id={s.heroHeader}>
                    

                    {/*<div id={s.heroLogo}>
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
                        <TwitterPill />
                    </div>
                </div>
            </div>*/}

            <h1 id={s.pageTitle}> Raws Sessions Musicales</h1>

            <VideoGrid
                videos={videos}
            />

            <div id="intro" className={s.intro}>
                <p>
                    <span className="recoleta">Raws &nbsp;Sessions</span> est une collection de vidéos musicales lives, acoustiques et intimistes, le plus souvent tournées en extérieur ou dans des lieux insolites.
                    <br/>
                    <br/>Inspirés par des chaînes comme Mahogany, Cardinal Sessions, Western AF ou encore GemsOnVHS, nous voulons faire vivre la musique folk en France, 
                    vous faire découvrir de nouveaux artistes au travers de sessions épurées et honnêtes.
                    <br/>
                    <br/>Nous filmons ce que nous aimons, quelle que soit la notoriété des artistes.
                </p>
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
                        Si vous êtes intéréssé pour tourner une session Raws, 
                        n'hésitez pas à nous contacter en nous envoyant une petite présentation de votre groupe / projet, 
                        ainsi que des liens pour écouter ce que vous faites.
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
                        Raws sessions est une collection de vidéos que nous auto-produisons.
                        Les vidéos sont et resteront gratuites pour les artistes et bien sûr pour vous. 
                        Cependant, réaliser ces vidéos nous demande du temps et des ressources. 
                        <br/>
                        <br/>Patreon est un moyen pour nous de financer ce projet, vous pouvez nous aider et soutenir Raws en devenant contributeurs.
                    </p>
                </div>


                <Btn Component="a" href="https://www.patreon.com/rawssessions" className={s.patreonBtn} target="_blank" rel="noopener noreferrer">
                    Nous soutenir sur Patreon
                </Btn>
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
