import { motion } from 'framer-motion';;
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Hubungi Saya</p>
        <h3 className={styles.sectionHeadTextLight}>kontak.</h3>

        <div className="mt-10">
          <p className="text-timberWolf font-medium mb-4">Sosial Media Saya:</p>
          <ul className="flex gap-4">
            <li>
              <a href="https://www.linkedin.com/in/zulfian-hamzah-912941201" target="_blank" rel="noopener noreferrer" className="text-timberWolf hover:text-eerieBlack transition duration-[0.2s] ease-in-out">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:trainzfans02@gmail.com" target="_blank" rel="noopener noreferrer" className="text-timberWolf hover:text-eerieBlack transition duration-[0.2s] ease-in-out">
                Email
              </a>
            </li>
            <li>
              <a href="https://instagram.com/zulfiaanhamzah?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="text-timberWolf hover:text-eerieBlack transition duration-[0.2s] ease-in-out">
                Instagram
              </a>
            </li>
            {/* Add more social media links here */}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

