const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Clientes não caem do céu. Mas com a Dripper,{" "}
        <span className="text-blue-500">parece mágica.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg font-medium text-gray-500 sm:text-xl">
        Transforme dados em vendas e recupere até os clientes que você achava
        perdidos.
      </p>
      <p className="mt-6 max-w-xl text-lg font-medium text-gray-500 sm:text-xl">
        🚀 Comece agora e veja suas vendas decolarem
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
        >
          Quero vender mais
        </a>
      </div>
    </section>
  );
};

export default Hero;
