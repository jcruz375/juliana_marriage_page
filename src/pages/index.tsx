import Image from 'next/image';
import styles from '../styles/home.module.scss';
import julianaERicardoText from '../../public/assets/juliana_e_ricardo_text.png'
import julianaERicardoPhoto from '../../public/assets/juliana_e_ricardo_photo.png'
import { useEffect, useState } from 'react';
import { Countdown } from '@/components/home/countdown';

export default function Home() {
  return (
    <main className={`max-w-6xl mx-auto`}>
      <article className={styles.main_container}>
        <Image
          className={styles.bg_img}
          src={julianaERicardoPhoto}
          alt={'Foto de Juliana e Ricardo'}
        />
        <aside>
          <Image
            src={julianaERicardoText}
            alt={'Escrita em letra cursiva: Juliana e Ricardo'}
          />
          <p className='font-serif text-2xl'>
            16. 09. 2023
          </p>
        </aside>
      </article>
      <div className={`w-72 mx-auto`}>
        <div className="border-t border-black my-4 mt-20"></div>
      </div>
      <Countdown />
      <section className={`w-4/5 mx-auto mt-20 sm:mt-44 ${styles.footer_text_section}`}>
        <p className='font-serif text-5xl'>
          Sejam bem-vindos ao nosso site!
        </p>
        <p className='font-serif text-2xl mt-6 sm:mt-11'>
          A melhor forma de compartilhar esse momento com vocês é unindo sonhos.
        </p>
      </section>
      <section className={`w-fit mx-auto mt-8 sm:mt20 ${styles.footer_section}`}>
        <p className='font-serif text-center'>
          Vocês estão nos vendo solteiros pela última vez, casados pela primeira vez, e felizes para sempre.
          “Senhor, entregamos nossas vidas a ti. Dirija nossos passos e guia-nos no teu caminho de amor e união amém!”

          É muito importante para nós que confirmem sua presença. Para isto contamos com sua ajuda clicando no menu , Confirme sua Presença e preenchendo os dados necessários.
          Para nos presentear, escolha qualquer item da nossa Lista de Presentes.
          Fiquem à vontade!
          Aguardamos vocês no nosso grande dia!
        </p>
      </section>
    </main>
  )
}
