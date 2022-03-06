import Image from "next/image";
import { useRouter } from "next/router";
import { useRefs } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./ListItem.module.scss";

const ListItem = ({ name, index } = props) => {
	const router = useRouter();
	const controls = useAnimation();
	const bgcircleControls = useAnimation();

	const handleClick = (e) => {
		console.log("clicked index" + index);
		e.preventDefault();

		bgcircleControls.start({
			zIndex: 9999,
			scale: 10,
			transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
		});

		controls.start({
			opacity: 0,
			y: "10px",
			transition: { duration: 0.6, ease: "easeOut" },
		});

		// router.push(`/${name}`);
	};

	return (
		<motion.div className={styles.list_item} onClick={handleClick}>
			<motion.div
				animate={bgcircleControls}
				className={styles.list_item__bgcircle}
			></motion.div>
			<motion.div animate={controls} className={styles.list_item__content}>
				<p>{name}</p>
				<div className={styles.list_item__image}>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
							index + 1
						}.svg`}
						width="150"
						height="150"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ListItem;
