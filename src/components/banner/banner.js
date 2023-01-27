import React from 'react';
import './banner.css'

export default function Banner(props) {

  return (
    <div className="hero-banner">
    <h1 className="hero-banner__title">{props.titulo}</h1>
    <p className="hero-banner__description">
    {props.subtitulo}
    </p>
  </div>
  );
}