import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from '../../components/SEO';
import FacebookPill from '../../components/SocialPills/FacebookPill';
import InstagramPill from '../../components/SocialPills/InstagramPill';
import YoutubePill from '../../components/SocialPills/YoutubePill';
import TwitterPill from '../../components/SocialPills/TwitterPill';

// import augusta480p from '../../assets/videos/augusta-480p.mp4';
// import augusta720p from '../../assets/videos/augusta-720p.mp4';
// import augusta1080p from '../../assets/videos/augusta-1080p.mp4';

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

      accueilSessions: file(relativePath: { eq: "assets/images/accueil-sessions.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      accueilPro: file(relativePath: { eq: "assets/images/accueil-professionnels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      headerOvalBckgd2: file(relativePath: { eq: "assets/images/oval-shadow-2.png" }) {
        childImageSharp {
          fixed(width: 1220, height: 260, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      ovalShadowSessionsText: file(relativePath: { eq: "assets/images/oval-shadow-sessions-text.png" }) {
        childImageSharp {
          fixed(width: 200, height: 60, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      ovalShadowProfessionnelsText: file(relativePath: { eq: "assets/images/oval-shadow-professionnels-text.png" }) {
        childImageSharp {
          fixed(width: 320, height: 60, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

    }
  `);

    const title = 'RAWS - Production Audiovisuelle';
    const image = 'https://rawssessions.com' + images.accueilSessions.childImageSharp.src;

    return (
        <>
          <SEO
              title={title}
              image={image}
              imageAlt="Prise de son, extérieur, scène, enregistrement vidéo"
          />

          <div id={s.hero}>
            <div className={`${s.heroImage} ${s.heroImage1}`}>
              <div className={s.partTitle}>
                <h2>
                  <div className={s.ovalShadow}>
                    <Img fixed={images.ovalShadowSessionsText.childImageSharp.fixed} />
                  </div>

                  <span className={s.text}>
                    Sessions
                  </span>
                </h2>
              </div>
              <Link to="/sessions">
                <Img
                  className={s.heroImage1}
                  fluid={images.accueilSessions.childImageSharp.fluid}
                  style={{ height: '50vh' }}
                />
              </Link>
            </div>

            <div className={`${s.heroImage} ${s.heroImage2}`}>
              <div className={s.partTitle}>
                <h2>
                  <div className={s.ovalShadow}>
                    <Img fixed={images.ovalShadowProfessionnelsText.childImageSharp.fixed} />
                  </div>

                  <span className={s.text}>
                    Professionnels
                  </span>
                </h2>
              </div>

              <Link to="/professionnels">
                <Img
                  className={s.heroImage2}
                  fluid={images.accueilPro.childImageSharp.fluid}
                  style={{ height: '50vh' }}
                />
              </Link>
            </div>

            <div id={s.heroHeaderOvalBckgd}>
                <Img
                    fixed={images.headerOvalBckgd2.childImageSharp.fixed}
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
                        Production<br />Audiovisuelle
                    </p>

                    <FacebookPill className={s.pillMarged} />
                    <InstagramPill className={s.pillMarged} /><br />
                    <YoutubePill className={s.pillMarged} />
                    <TwitterPill />
                </div>
            </div>
          </div>
        </>
    );
}

export default IndexPage
