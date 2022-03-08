import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import styles from "./ListItem.module.scss";

const ListItem = ({ name, index } = props) => {
	const router = useRouter();
	const controls = useAnimation();
	const bgcircleControls = useAnimation();

	const item = {
		hidden: { y: "20px", opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.2,
				ease: "easeOut",
			},
		},
	};

	const handleClick = (e) => {
		console.log("clicked index" + index);
		e.preventDefault();

		bgcircleControls.start({
			zIndex: 9999,
			scale: 25,
			transition: { delay: 0.2, duration: 1, ease: "anticipate" },
		});

		controls.start({
			opacity: 0,
			y: "10px",
			transition: { duration: 0.2, ease: "easeIn" },
		});

		setTimeout(() => {
			router.push(`/${name}`);
		}, 500);
	};

	return (
		<motion.div
			className={styles.list_item}
			onClick={handleClick}
			whileTap={{ scale: 0.9 }}
			variants={item}
			//transition={{
			//     delay: 0.1,
			//     duration: 0.2,
			//     ease: "easeIn",
			//   }}
			//   initial={{ scale: 0.5 }}
			//   whileInView={{ scale: 1 }}
			//   viewport={{ once: true }}
		>
			<div className={styles.list_item__bgcircle_container}>
				<motion.div
					animate={bgcircleControls}
					className={styles.list_item__bgcircle}
				></motion.div>
			</div>
			<motion.div animate={controls} className={styles.list_item__content}>
				<div className={styles.list_item__image}>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
							index + 1
						}.svg`}
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ListItem;
