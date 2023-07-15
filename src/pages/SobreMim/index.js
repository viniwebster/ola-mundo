import React from 'react';
import styles from './SobreMim.module.css';
import PostModelo from 'components/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/minha_foto.jpg';

export default function AboutMe() {
  return (
    <main>
      <PostModelo 
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
      >
        
        <h3 className={styles.subtitulo}>
          Olá, sou Vinicius!
        </h3>

        <img 
          src={fotoSobreMim}
          alt='Foto Vinicius'
          className={styles.fotoSobreMim}
        />

        <p className={styles.paragrafo}>
        Sed viverra accumsan neque quis scelerisque. Quisque tempus aliquam leo, quis varius lacus porta nec. Maecenas a venenatis nulla, vel vestibulum erat. Sed id auctor tortor, eu fringilla ipsum. Phasellus vulputate ac arcu vitae porttitor. Aliquam bibendum orci aliquam sagittis euismod. Vivamus a lectus a velit hendrerit aliquam facilisis fermentum est. In porta, lacus sit amet faucibus sodales, nunc arcu dignissim lorem, quis dignissim nibh odio eget est. Nunc eget nunc ipsum. Duis at rhoncus lacus. Morbi malesuada nulla sit amet massa feugiat pharetra. Maecenas tincidunt diam in tincidunt interdum. Quisque rutrum consectetur leo interdum aliquet. Sed malesuada, nibh tincidunt egestas pellentesque, ipsum leo gravida mauris, ut vestibulum velit quam non nibh.
        </p>

        <p className={styles.paragrafo}>
        Proin et diam quam. Aliquam odio elit, laoreet nec leo congue, sodales porta nisi. Donec eu feugiat metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla arcu in libero tempus, id blandit ipsum dignissim. Duis aliquet ex ut sodales dignissim. Pellentesque mattis mattis aliquet. Sed nunc elit, tempus id tellus et, vulputate finibus quam. Donec ultrices fermentum scelerisque. Nullam eget faucibus felis. Vestibulum pellentesque dignissim auctor. Praesent interdum massa sed mattis luctus. Aliquam fermentum posuere dapibus. Vestibulum ac efficitur nunc, sit amet tempus felis.
        </p>

        <p className={styles.paragrafo}>
        Sed viverra accumsan neque quis scelerisque. Quisque tempus aliquam leo, quis varius lacus porta nec. Maecenas a venenatis nulla, vel vestibulum erat. Sed id auctor tortor, eu fringilla ipsum. Phasellus vulputate ac arcu vitae porttitor. Aliquam bibendum orci aliquam sagittis euismod. Vivamus a lectus a velit hendrerit aliquam facilisis fermentum est. In porta, lacus sit amet faucibus sodales, nunc arcu dignissim lorem, quis dignissim nibh odio eget est. Nunc eget nunc ipsum. Duis at rhoncus lacus. Morbi malesuada nulla sit amet massa feugiat pharetra. Maecenas tincidunt diam in tincidunt interdum. Quisque rutrum consectetur leo interdum aliquet. Sed malesuada, nibh tincidunt egestas pellentesque, ipsum leo gravida mauris, ut vestibulum velit quam non nibh.
        </p>

        <p className={styles.paragrafo}>
        Proin et diam quam. Aliquam odio elit, laoreet nec leo congue, sodales porta nisi. Donec eu feugiat metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla arcu in libero tempus, id blandit ipsum dignissim. Duis aliquet ex ut sodales dignissim. Pellentesque mattis mattis aliquet. Sed nunc elit, tempus id tellus et, vulputate finibus quam. Donec ultrices fermentum scelerisque. Nullam eget faucibus felis. Vestibulum pellentesque dignissim auctor. Praesent interdum massa sed mattis luctus. Aliquam fermentum posuere dapibus. Vestibulum ac efficitur nunc, sit amet tempus felis.
        </p>

        <p className={styles.paragrafo}>
        Sed viverra accumsan neque quis scelerisque. Quisque tempus aliquam leo, quis varius lacus porta nec. Maecenas a venenatis nulla, vel vestibulum erat. Sed id auctor tortor, eu fringilla ipsum. Phasellus vulputate ac arcu vitae porttitor. Aliquam bibendum orci aliquam sagittis euismod. Vivamus a lectus a velit hendrerit aliquam facilisis fermentum est. In porta, lacus sit amet faucibus sodales, nunc arcu dignissim lorem, quis dignissim nibh odio eget est. Nunc eget nunc ipsum. Duis at rhoncus lacus. Morbi malesuada nulla sit amet massa feugiat pharetra. Maecenas tincidunt diam in tincidunt interdum. Quisque rutrum consectetur leo interdum aliquet. Sed malesuada, nibh tincidunt egestas pellentesque, ipsum leo gravida mauris, ut vestibulum velit quam non nibh.
        </p>

      </ PostModelo>
    </main>
  )
}
