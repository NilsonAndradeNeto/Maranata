import React from "react";

export default function Projetos() {
  return (
    <main className="text-gray-800">
      
      {/* HEADER DA PÁGINA */}
      <section className="h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576765607924-c2b7b3b4dc9f?auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="bg-black bg-opacity-60 p-6 rounded">
          <h1 className="text-4xl font-bold mb-2">Nossos Projetos</h1>
          <p className="text-lg">Ações que transformam vidas e renovam esperanças</p>
        </div>
      </section>

      {/* DESCRIÇÃO GERAL */}
      <section className="py-16 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <p className="text-lg text-gray-700">
          A Comunidade Maranata atua em diversas frentes de apoio à recuperação, inclusão social e dignidade de pessoas em situação de vulnerabilidade. Conheça abaixo algumas das nossas iniciativas mais importantes.
        </p>
      </section>

      {/* LISTA DE PROJETOS */}
      <section className="px-6 md:px-20 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Projeto 1 */}
        <div className="bg-white rounded shadow-md p-6">
          <img src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80" alt="Reabilitação" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">Programa de Reabilitação</h3>
          <p className="text-gray-700">
            Um plano terapêutico individualizado para dependentes químicos, com acolhimento, acompanhamento psicológico e espiritual.
          </p>
        </div>

        {/* Projeto 2 */}
        <div className="bg-white rounded shadow-md p-6">
          <img src="https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&w=800&q=80" alt="Capacitação" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">Capacitação Profissional</h3>
          <p className="text-gray-700">
            Oferecemos oficinas e cursos de capacitação para promover autonomia financeira e reinserção no mercado de trabalho.
          </p>
        </div>

        {/* Projeto 3 */}
        <div className="bg-white rounded shadow-md p-6">
          <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80" alt="Atividades" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">Atividades Terapêuticas e de Lazer</h3>
          <p className="text-gray-700">
            Realizamos atividades recreativas, espirituais e culturais que fortalecem os vínculos sociais e emocionais dos acolhidos.
          </p>
        </div>

        {/* Projeto 4 */}
        <div className="bg-white rounded shadow-md p-6">
          <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80" alt="Campanhas" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">Campanhas de Arrecadação</h3>
          <p className="text-gray-700">
            Promovemos ações solidárias para arrecadação de alimentos, roupas, produtos de higiene e fundos para manutenção da instituição.
          </p>
        </div>

      </section>
    </main>
  );
}
