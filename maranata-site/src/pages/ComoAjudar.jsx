import React from "react";
import { Link } from "react-router-dom";

export default function ComoAjudar() {
  return (
    <main className="text-gray-800">

      {/* CAPA */}
      <section className="h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573261524301-18663f4231a9?auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="bg-black bg-opacity-60 p-6 rounded text-center">
          <h1 className="text-4xl font-bold">Como Ajudar</h1>
        </div>
      </section>

      {/* TEXTO INICIAL */}
      <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto text-center">
        <p className="text-lg mb-6">
          Acreditamos que cada gesto de solidariedade tem o poder de transformar vidas. Seja com tempo, recursos ou doações, você pode ser parte dessa missão de amor e acolhimento.
        </p>
        <p className="text-lg">
          Descubra como você pode contribuir com a Comunidade Terapêutica Maranata.
        </p>
      </section>

      {/* FORMAS DE AJUDAR */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Doações Financeiras</h3>
            <p>Ajude a manter nossas atividades com uma contribuição. Toda ajuda faz a diferença!</p>
            <p className="mt-4 text-sm text-gray-600">PIX: 00.000.000/0000-00 (CNPJ)</p>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Doações de Materiais</h3>
            <p>Roupas, alimentos, produtos de higiene e limpeza são sempre bem-vindos.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Voluntariado</h3>
            <p>Doe seu tempo e talentos. Precisamos de pessoas para oficinas, acolhimento e muito mais.</p>
          </div>

        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Quer fazer parte disso?</h2>
          <p className="mb-6">
            Entre em contato conosco ou clique no botão abaixo para fazer sua doação. Juntos, podemos transformar ainda mais vidas!
          </p>
          <Link to="/contato">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded font-semibold">
              Entrar em contato
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}
