const GoogleMapEmbed: React.FC = () => {
  return (
    <section
      id="kart"
      className="bg-[#262626] bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] h-full relative overflow-hidden"
    >
      <div className="flex flex-wrap md:flex-nowrap max-w-7xl mx-auto sm:gap-12">
        <div className="w-full md:w-2/4">
          <div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative my-auto">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-4xl text-white">
                Besøk oss i Vitaminveien 14 i dag!
              </h1>
              <p className="mb-8 text-lg font-normal lg:text-xl  text-gray-200">
                Kom innom og nyt deilige smaker hos oss på Storo.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b to-transparent from-gray-800 w-full h-full absolute top-0 left-0 z-0"></div>
        </div>
        <div className="md:w-2/4 h-[272px] z-50 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.1381748903407!2d10.77009987715312!3d59.946441774919016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f6cb86bd1b7%3A0xc22e0f54e14e03d3!2sStoro%20Grill%20%26%20Cafe!5e0!3m2!1sno!2sno!4v1695564575521!5m2!1sno!2sno"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapEmbed;
