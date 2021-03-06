import React from "react";
import { motion } from "framer-motion";
import styles from "./Marquee.module.scss";

const Marquee = (props) => {
  const variants = {
    animate: {
      opacity: [0, 1],

      transition: {
        opacity: {
          duration: 0.4,
          delay: 1,
        },
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="animate"
      className={styles.marqueewrapper}
    >
      <div className={styles.marquee}>
        <div className={styles.marquee__slideslow}>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
        </div>
        <div className={styles.marquee__slideslow}>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.marquee__slidemid}>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
        </div>
        <div className={styles.marquee__slidemid}>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.marquee__slidefast}>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
        </div>
        <div className={styles.marquee__slidefast}>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
          <span className={styles.marquee__text}>{props.name}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Marquee;
