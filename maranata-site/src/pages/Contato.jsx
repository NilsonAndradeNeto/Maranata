import React from "react";

export default function Contato() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Fale Conosco</h2>
      <form className="space-y-4">
        <input className="w-full p-3 border border-gray-300 rounded" type="text" placeholder="Seu nome" required />
        <input className="w-full p-3 border border-gray-300 rounded" type="email" placeholder="Seu e-mail" required />
        <textarea className="w-full p-3 border border-gray-300 rounded" placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">Enviar</button>
      </form>
    </section>
  );
}