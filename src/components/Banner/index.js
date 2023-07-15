import styles from './Banner.module.css';
import React from 'react';
import minhaFoto from 'assets/minha_foto.jpg';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresencacao}>
            <h1 className={styles.titulo}> Olá, Mundo! </h1>
            <p className={styles.paragrafo}>
                Olá pessoal, bem vindos ao meu espaço pessoal. Sou Vinicius Webster, estudante de Front-End, e gostaria de compartilhar com voces meus projetos.
                Espero que gostem :)
            </p>
        </div>

        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                alt=''
            />

            <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt='Foto do Vinicius Webster'
            />

        </div>
    </div>
  )
}
