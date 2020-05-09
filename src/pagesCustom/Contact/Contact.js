import React, { useCallback, useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import s from "./Contact.scss";
import Btn from "../../components/Btn/Btn";

const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

export default function Contact({ }) {
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

  function onSendClick() {
    const errors = {};
    fields.forEach(fieldName => {
      if (!formData[fieldName]) {
        errors[fieldName] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // TODO: Send request to netlify
      setSentMsgState('loading');
      setTimeout(() => setSentMsgState(true), 2000);
      setFormData({});
      setFormErrors({});
      setHasSentMessageDataSerialized(JSON.stringify({
        sentAt: (new Date()).getTime(),
      }));
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
            placeholder="Votre message... Quel projet voulez-vous filmer ?"
            onChange={onChangeFactory('message')} 
          ></textarea>
        </div>
      </div>

      <Btn onClick={onSendClick} className={sendBtnClass()}>
        {sentMsgState === false && 'Envoyer'}
        {sentMsgState === 'loading' && 'Envoi en cours...'}
        {sentMsgState === true && 'Envoyé ✅'}
      </Btn>
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