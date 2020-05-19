import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet"

export default function SEO({
  title,
  description = 'RAWS est une boîte de production spécialisée dans la réalisation de vidéos musicales lives, acoustiques et intimistes, le plus souvent tournées en extérieur ou dans des lieux insolites. Afin de correspondre au mieux à leurs attentes et à leurs univers, nous invitons les artistes à participer au processus créatif et au choix du lieu de tournage.',
  image,
  imageAlt,
}) {
  return (
    <Helmet>
      <meta charSet="utf8" />
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#101010" />
      <meta name="description" content={description} />

      <meta property="og:url" content="https://rawssessions.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />

      {image && <meta property="og:image" content={image} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}

      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="RAWS" />
      <meta property="og:locale" content="fr_FR" />
    </Helmet>
  );
}
