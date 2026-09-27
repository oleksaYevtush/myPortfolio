'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, link, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{ backgroundColor: color, scale, translateY: `calc(-1vh + ${i * 12}px)` }} 
        className={styles.card}>        
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p className={styles.descriptionText}>{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certLink}>
                Verify Certificate ↗
              </a>
            )}
          </div>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}>
              <Image
                src={`/images/${src}`}
                alt={title || "Certificate"} 
                width={500}
                height={280}
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card