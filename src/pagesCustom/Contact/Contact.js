import React, { useCallback, useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from '../../components/SEO';
import s from "./Contact.module.scss";
import Btn from "../../components/Btn/Btn";

const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

export default function Contact({ }) {
  function showPhone() {
    const el = document.getElementById('phone-placeholder');
    el.innerHTML = atob('dm90cmVAbWFpbC5jb20=');
  }

  function showEmail() {
    const el = document.getElementById('email-placeholder');
    el.innerHTML = atob('MDYgMTEgMTEgMTEgMTE=');
  }

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "assets/images/logo-raws-beige.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [
    hasSentMessageDataSerialized,
    setHasSentMessageDataSerialized,
  ] = useLocalStorage('hasSentMessageData');

  const hasSentMessageData = JSON.parse(hasSentMessageDataSerialized);

  const hasSentMessageDate = hasSentMessageData
    ? new Date(hasSentMessageData.sentAt)
    : null;

  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [sentMsgState, setSentMsgState] = useState(false);

  const fields = ['prenom', 'nom', 'email', 'telephone', 'message'];

  function onChangeFactory(key) {
    return function (e) {
      const v = e.target.value;

      setFormErrors(currData => ({
        ...currData,
        [key]: false,
      }));
      setFormData(currData => ({
        ...currData,
        [key]: v,
      }));
    };
  }

  function onSubmitForm(e) {
    e.preventDefault();

    const errors = {};
    fields.forEach(fieldName => {
      if (!formData[fieldName]) {
        errors[fieldName] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      const formEl = document.getElementById('contact-form');
      const data = new URLSearchParams(new FormData(formEl));

      setSentMsgState('loading');
      fetch(
        formEl.getAttribute('action'),
        {
          method: 'post',
          body: data,
        }
      ).then(() => {
        setSentMsgState(true);
        setFormData({});
        setFormErrors({});
        setHasSentMessageDataSerialized(JSON.stringify({
          sentAt: (new Date()).getTime(),
        }));
      }).catch(e => {
        alert('Une erreur est survenue lors de l\'envoi du message de contact. S\'il vous plait, contactez-nous via nos réseaux sociaux.');
      });
    }
  }

  function errorClass(fieldName) {
    if (formErrors[fieldName]) {
      return s.hasError;
    }

    return '';
  }

  function sendBtnClass() {
    if (Object.values(formErrors).some(v => v)) {
      return s.btnError;
    } else if (sentMsgState === true) {
      return s.btnSuccess;
    } else if (sentMsgState === 'loading') {
      return s.btnLoading;
    }

    return '';
  }

  return (
    <div id={s.contactPage}>
      <SEO
        title="Contact - RAWS Sessions"
      />

      <Link id={s.backBtn} to="/">
        ← Retour à l'accueil
      </Link>
        
      <div id={s.logo}>
        <Img
          fixed={images.logo.childImageSharp.fixed}
          alt="RAWS"
        />
      </div>

      <h1>Contact</h1>

      {hasSentMessageDate && (
        <p id={s.hasSentMessage}>
          Vous nous avez envoyé un message le{' '}
          {hasSentMessageDate.getDate()} {months[hasSentMessageDate.getMonth()]} {hasSentMessageDate.getFullYear()}.<br />
          On vous recontacte bientôt !
        </p>
      )}

      <div id={s.contactInfos}>
        <p id="email-placeholder">
          <button
            onClick={showEmail}
            className={s.showContactInfoBtn}
          >
            Voir l'email
          </button>
        </p>
        <p id="phone-placeholder">
          <button
            onClick={showPhone}
            className={s.showContactInfoBtn}
          >
            Voir le téléphone
          </button>
        </p>
      </div>

      <form
        id="contact-form"
        data-netlify="true"
        name="contact"
        method="POST"
        action="/contact"
        onSubmit={onSubmitForm}
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className={s.row}>
          <div className={`${s.col} ${errorClass('prenom')}`}>
            <label>Prénom</label>
            <input
              type="text"
              name="prenom"
              onChange={onChangeFactory('prenom')}
            />
          </div>

          <div className={`${s.col} ${errorClass('nom')}`}>
            <label>Nom</label>
            <input type="text" name="nom" onChange={onChangeFactory('nom')}  />
          </div>
        </div>

        <div className={s.row}>
          <div className={`${s.col} ${errorClass('email')}`}>
            <label>Courriel</label>
            <input
              type="text"
              name="email"
              placeholder="vous@votremail.com"
              onChange={onChangeFactory('email')}
            />
          </div>

          <div className={`${s.col} ${errorClass('telephone')}`}>
            <label>Téléphone</label>
            <input
              type="text"
              name="telephone"
              placeholder="06 11 22 33 44"
              onChange={onChangeFactory('telephone')}
            />
          </div>
        </div>

        <div className={s.row}>
          <div className={`${s.col} ${errorClass('message')}`}>
            <textarea
              name="message"
              placeholder="Votre message... Quel projet voulez-vous filmer ?"
              onChange={onChangeFactory('message')} 
            ></textarea>
          </div>
        </div>

        <Btn
          Component={`button`}
          className={`${s.submit} ${sendBtnClass()}`}
          type="submit"
        >
          {sentMsgState === false && 'Envoyer'}
          {sentMsgState === 'loading' && 'Envoi en cours...'}
          {sentMsgState === true && 'Envoyé ✅'}
        </Btn>
      </form>
    </div>
  );
}


function useLocalStorage(key) {
  const [value, setStateValue] = useState(null);

  useEffect(() => {
    setStateValue(window.localStorage.getItem(key));
  }, [key]);

  const setValueAndPersist = useCallback(
    function setValueAndPersist(newValue) {
      setStateValue(newValue);
      window.localStorage.setItem(key, newValue);
    },
    [key],
  );

  return [value, setValueAndPersist];
}