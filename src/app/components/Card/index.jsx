'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer} id="certificate">
      <motion.div 
        style={{ backgroundColor: color, scale, translateY: `calc(-5vh + ${i * 25}px)` }} 
        className={styles.card}>        
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p className={styles.descriptionText}>{description}</p>
          </div>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}>
              <Image
                src={`/images/${src}`}
                alt="image" 
                width={500}
                height={250}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card