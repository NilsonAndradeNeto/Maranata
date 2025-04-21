import React from "react";
import { Link } from "react-router-dom";
import BannerDesktop from "../assets/img/ImagemPrincipalHomeDescktop.png";
import BannerMobile from "../assets/img/ImagemPrincipalHomeMobile.png";
import VideoQuemSomos from "../assets/video/QuemSomosVideo.mp4";
import Depoimento01 from "../assets/video/Depoimento01.mp4";
import Depoimento02 from "../assets/video/Depoimento02.mp4";



export default function Home() {
  return (
    <main className="text-gray-800">

    {/* BANNER PRINCIPAL */}
    <section className="w-full h-[800px] relative">
      <img
        src={BannerDesktop}
        alt="Banner Maranata"
        className="hidden md:block w-full h-full object-cover"
      />
      <img
        src={BannerMobile}
        alt="Banner Maranata Mobile"
        className="block md:hidden w-full h-full object-cover"
      />
    </section>


      {/* QUEM SOMOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Quem somos?</h2>
            <p className="text-gray-700 text-lg">
              A Comunidade Terapêutica Maranata é uma entidade sem fins lucrativos que atua no acolhimento e reabilitação de pessoas em situação de vulnerabilidade, com foco na recuperação de dependentes químicos. Trabalhamos com amor, fé e dedicação para promover transformação social e dignidade.
            </p>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <video
              className="w-full h-64 rounded-lg object-cover shadow"
              src={VideoQuemSomos}
              controls
              preload="metadata">
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
          
        </div>
      </section>

      {/* COMO AJUDAR */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Como ajudar?</h3>
          <p className="text-gray-700 mb-6">
            Sua contribuição pode transformar vidas. Através de doações financeiras ou materiais, você nos ajuda a manter nossa missão de acolhimento e reabilitação.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded font-semibold">
            APOIAR
          </button>
        </div>
      </section>

      {/* GALERIA DA SEDE */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Sede</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-gray-300 h-40 rounded flex items-center justify-center text-gray-500">
                Imagem
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Depoimentos</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
              
            <video
              className="w-full md:w-1/2 h-64 rounded-lg object-cover shadow"
              src={Depoimento01}
              controls
              preload="metadata"
            >
              Seu navegador não suporta vídeo HTML5.
            </video>

            <video
              className="w-full md:w-1/2 h-64 rounded-lg object-cover shadow"
              src={Depoimento02}
              controls
              preload="metadata"
            >
              Seu navegador não suporta vídeo HTML5.
            </video>

            
            
          </div>
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded font-semibold">
            APOIAR
          </button>
        </div>
      </section>

      {/* CONTATO */}
      <footer className="bg-gray-200 text-center py-10 px-4 text-sm text-gray-700">
        <div className="max-w-4xl mx-auto">
          <p><strong>CONTATO</strong></p>
          <p>comunidademaranata@ong.org.br</p>
          <p>(47) 99999-9999</p>
          <p>Rua Esperança, 123 – Bairro da Fé – SC</p>
        </div>
      </footer>

    </main>
  );
}
