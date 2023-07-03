import Image from 'next/image';
import photo_1 from '../../public/assets/photo_1.png'
import photo_2 from '../../public/assets/photo_2.png'
import photo_3 from '../../public/assets/photo_3.png'
import photo_4 from '../../public/assets/photo_4.png'
import photo_5 from '../../public/assets/photo_5.png'
import photo_6 from '../../public/assets/photo_6.png'
import photo_7 from '../../public/assets/photo_7.png'
import photo_8 from '../../public/assets/photo_8.png'
import photo_9 from '../../public/assets/photo_9.png'
import photo_10 from '../../public/assets/photo_10.png'
import photo_11 from '../../public/assets/photo_11.png'
import photo_12 from '../../public/assets/photo_12.png'
import photo_13 from '../../public/assets/photo_13.png'
import photo_14 from '../../public/assets/photo_14.png'
import photo_15 from '../../public/assets/photo_15.png'
import photo_16 from '../../public/assets/photo_16.png'
import photo_17 from '../../public/assets/photo_17.png'
import photo_18 from '../../public/assets/photo_18.png'

export default function OurHistory() {
  return (
    <main className='w-full mx-auto px-4 sm:px-16'>
      <section className="flex flex-col justify-start items-center min-h-screen">
        <p className='font-serif text-5xl'>
          Padrinhos
        </p>
        <p className='font-serif text-2xl text-center sm:text-left mt-11'>
          Aos nossos queridos padrinhos e madrinhas
        </p>
        <p className='font-serif text-xl text-center mt-16'>
          Um casamento bem-sucedido exige que se apaixone muitas vezes, sempre pela mesma pessoa.
          Casamento é como colocar a mão em um saco de cobras na esperança de arrancar uma enguia.
          Para obter o valor total da alegria, você deve ter alguém com quem dividi-la.
          O amor é cego – o casamento abre os olhos.
          Se eu me casar, quero ser muito casado. Quanto mais você investe em um casamento, mais valioso ele se torna, obrigada por serem nossos padrinhos
        </p>
        <p className='font-serif text-xl text-center mt-16'>
          Se eu me casar, quero ser muito casado. Quanto mais você investe em um casamento, mais valioso ele se torna, obrigada por serem nossos padrinhos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-11 w-full">
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_1}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_2}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_3}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_4}
              alt="foto de claudia e eduardo"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_5}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_6}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_7}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_8}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_9}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_10}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_11}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_12}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_13}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_14}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_15}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_16}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_17}
              alt="foto dos padrinhos"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              className={`w-3/5 sm:w-full`}
              src={photo_18}
              alt="foto dos padrinhos"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
