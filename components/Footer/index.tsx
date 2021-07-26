import React from 'react';
import Link from 'next/link';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <section>
          <b>Nosotros</b>
          <p>
            <Link href='/about'>
              <a>Conoce más</a>
            </Link>
          </p>
        </section>
        <section>
          <b>Servicios</b>
          <p>
            <Link href='/'>
              <a>Todos los productos</a>
            </Link>
          </p>
        </section>
        <section>
          <b>Hecho por</b>
          <p>
            <a target='_blank' href='https://twitter.com/nestoredduardo'>
              @nestoredduardo
            </a>{' '}
            en el{' '}
            <a target='_blank' href='https://platzi.com/'>
              curso de Next.JS
            </a>{' '}
            de Platzi
          </p>
          <div></div>
        </section>
      </div>
      <div>
        <section>
          Icons made by{' '}
          <a
            target='_blank'
            href='https://www.flaticon.com/authors/freepik'
            title='Freepik'>
            Freepik
          </a>{' '}
          from{' '}
          <a target='_blank' href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </section>
        <section>
          Avocado images taken from{' '}
          <a
            target='_blank'
            href='https://www.californiaavocado.com/avocado101/avocado-varieties'
            title='California Avocado'>
            Avocado 101
          </a>{' '}
          at{' '}
          <a
            target='_blank'
            href='https://www.californiaavocado.com'
            title='Flaticon'>
            California Avocado
          </a>
        </section>
      </div>
    </div>
  );
};
export default Footer;
