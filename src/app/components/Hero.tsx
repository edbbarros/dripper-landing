const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 text-center lg:text-left max-w-7xl mx-auto gap-12">
      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight max-w-3xl mx-auto lg:mx-0">
          Clientes não caem do céu. Mas com a Dripper,{" "}
          <span className="text-blue-500">parece mágica.</span>
        </h1>

        <div className="mt-6 max-w-xl space-y-4 text-base sm:text-lg md:text-xl text-gray-500 font-medium mx-auto lg:mx-0">
          <p>
            Transforme dados em vendas e recupere até os clientes que você
            achava perdidos.
          </p>
          <p>🚀 Comece agora e veja suas vendas decolarem.</p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white text-base sm:text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            Quero vender mais
          </a>
        </div>
      </div>

      <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto mx-auto lg:mx-0">
        <img src="/background.svg" alt="Home da Dripper" />
      </div>
    </section>
  );
};

export default Hero;
