import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Perkenalan</p>
        <h2 className={styles.sectionHeadText}>Tentang Saya.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify"
>
  Saat ini, saya memiliki pemahaman dasar tentang HTML, CSS, dan JavaScript yang merupakan fondasi dalam pembuatan situs web. Saya juga sedang mempelajari framework ReactJS untuk mengembangkan situs web yang lebih interaktif dan dinamis.
</motion.p>
<motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify"
>
  Saya percaya bahwa dengan latihan dan pengalaman praktis, saya akan terus mengasah keterampilan web saya. Saya tertarik untuk mempelajari konsep-konsep yang lebih canggih seperti responsive design, animasi, manajemen state, dan integrasi dengan backend. Selain itu, saya juga memiliki kemampuan dalam menggunakan alat-alat pengembangan seperti Visual Studio Code, Git, dan npm.
</motion.p>
<motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify"
>
  Saya senang bekerja dalam tim dan terbuka untuk belajar dari orang lain. Saya sangat antusias untuk terus mengembangkan keterampilan web saya dan berkontribusi dalam proyek-proyek yang menantang di masa depan. Saya berharap dapat terus belajar dan menjadi seorang pengembang web yang lebih terampil dan terampil di masa mendatang. Terima kasih!
</motion.p>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
