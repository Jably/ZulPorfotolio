import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[50px] xl:top-[150px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            {/* Circle indicator */}
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />

            {/* Line indicator */}
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="ml-3">
            {/* Hero Title */}
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, Nama Saya{' '}
              <span className="sm:text-battleGray sm:text-[50px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">
                Muhammad Zulfian Hamzah
              </span>
            </h1>

            {/* Hero Subtitle */}
<p className={`${styles.heroSubText} mt-2 text-gray-500 font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[12px] lg:leading-[24px] md:leading-[20px] text-left`}>
  Hai, saya Muhammad Zulfian. Saya memiliki pengetahuan dasar dalam pengembangan web dan sedang belajar untuk meningkatkan keterampilan saya.
</p>

          </div>

          {/* Empty container */}
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[0rem] xxs:mt-4"></div>

          {/* Empty container */}
          <div></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Shaquille Image */}
        //<div>
          //<img
            //className="absolute bottom-0 ml-[50vw] lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw] sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            //src={shaq}
            //alt="shaquille"
          />
        //</div>
      </section>
    </>
  );
};

export default Hero;
