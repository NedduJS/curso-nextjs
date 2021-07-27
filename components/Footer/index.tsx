import React from 'react';
import Link from 'next/link';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.about}>
        <section className={styles.about__section}>
          <b>Nosotros</b>
          <p>
            <a href='#' className={styles.link}>
              Conoce más
            </a>
          </p>
        </section>
        <section className={styles.about__section}>
          <b>Servicios</b>
          <p>
            <Link href='/'>
              <a className={styles.link}>Todos los productos</a>
            </Link>
          </p>
        </section>
        <section className={styles.about__section}>
          <b>Hecho por</b>
          <p>
            <a
              target='_blank'
              className={styles.link}
              href='https://twitter.com/nestoredduardo'>
              @nestoredduardo
            </a>{' '}
            en el{' '}
            <a
              target='_blank'
              className={styles.link}
              href='https://platzi.com/'>
              curso de Next.JS
            </a>{' '}
            de Platzi
          </p>
          <div></div>
        </section>
      </div>
      <div className={styles.references}>
        <section>
          Icons made by{' '}
          <a
            target='_blank'
            href='https://www.flaticon.com/authors/freepik'
            className={styles.link}
            title='Freepik'>
            Freepik
          </a>{' '}
          from{' '}
          <a
            target='_blank'
            className={styles.link}
            href='https://www.flaticon.com/'
            title='Flaticon'>
            www.flaticon.com
          </a>
        </section>
        <section>
          Avocado images taken from{' '}
          <a
            target='_blank'
            href='https://www.californiaavocado.com/avocado101/avocado-varieties'
            title='California Avocado'
            className={styles.link}>
            Avocado 101
          </a>{' '}
          at{' '}
          <a
            target='_blank'
            href='https://www.californiaavocado.com'
            title='Flaticon'
            className={styles.link}>
            California Avocado
          </a>
        </section>
      </div>
    </div>
  );
};
export default Footer;
