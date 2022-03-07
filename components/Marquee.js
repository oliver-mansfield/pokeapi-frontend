import React from "react";
import { motion } from "framer-motion";
import styles from "./Marquee.module.scss";

const Marquee = (props) => {
  const marqueeVariants = {
    animate: {
      opacity: [0, 1],
      //TODO - For smoother infinite scrolling, measure length of name, screen width, etc

      transition: {
        opacity: {
          duration: 0.4,
          delay: 1,
        },
      },
    },
  };

  return (
    <motion.div variants={marqueeVariants} animate="animate">
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
    // <div>
    //   <div className={styles.marquee}>
    //     <motion.div
    //       className={styles.marquee__track}
    //       variants={marqueeVariants}
    //       animate="animate"
    //     >
    //       <span className={styles.marquee__text}>
    //         {props.name} {props.name} {props.name} {props.name}
    //         {props.name} {props.name} {props.name} {props.name}
    //       </span>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default Marquee;
