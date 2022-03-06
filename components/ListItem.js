import Image from "next/image";
import { useRouter } from "next/router";
import { useRefs } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./ListItem.module.scss";

const ListItem = ({ name, index } = props) => {
	const router = useRouter();
	const controls = useAnimation();

	const handleClick = (e) => {
		console.log("clicked index" + index);
		e.preventDefault();

		controls.start({
			"z-index": 10,
			// position: "absolute",
			// top: "0",
			// left: "50%",
			y: "-100%",
			scale: 6,
			transition: { duration: 1 },
		});

		//z-index 10 this image
		//tell parent to show overlay
		//animate to top of screen

		// router.push(`/${name}`);
	};

	return (
		<div className={styles.list_item} onClick={handleClick}>
			<p>{name}</p>
			<motion.div animate={controls} className={styles.list_item__image}>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
						index + 1
					}.svg`}
					width="150"
					height="150"
				/>
			</motion.div>
		</div>
	);
};

export default ListItem;
