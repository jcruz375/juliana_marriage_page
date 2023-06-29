import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import('../components/local/map_component'), { ssr: false });
import Image from "next/image"
import locationImage from "../../public/assets/clube_das_arabias.png";

export default function Address() {
  return (
    <main className='w-full mx-auto px-4 sm:px-16'>
      <section className="flex flex-col justify-start items-center min-h-screen">
        <p className='font-serif text-5xl'>
          Cerimônia e festa
        </p>
        <p className='font-serif text-2xl text-center sm:text-left mt-11'>
          Não percam nossa linda e emocionante cerimônia e aproveite para comemorar e compartilhar a felicidade neste dia tão especial. Contamos com você para ser ainda mais especial!
        </p>
        <article className="w-full mt-36 p-10 pb-0" style={{ backgroundColor: '#FDF2E6' }}>
          <header className="flex flex-col sm:flex-row justify-start items-center">
            <Image
              className="ml-8 sm:ml-0"
              src={locationImage}
              alt={'Foto da locação do casamento'}
            />
            <div className="flex flex-col justify-center items-center sm:items-start ml-10 mt-5 sm:mt-0">
              <p className="font-serif text-3xl">
                Clube das Arábias
              </p>
              <p className="font-serif text-base mt-1.5">
                16 de setembro de 2023 às 12:00
              </p>
            </div>
          </header>
          <section className="mt-11 w-full">
            <MapComponent latitude={-23.730152296254335} longitude={-46.66384000326153} />
          </section>
        </article>
      </section>
    </main>
  )
}
