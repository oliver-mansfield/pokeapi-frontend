import Head from "next/head";
import Image from "next/image";
import styles from "../components/Home.module.scss";
import List from "../components/List";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className={styles.page}>
			<Head>
				<title>Poke Frontend</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<motion.div
				className={styles.logo}
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					duration: 0.5,
					delay: 1,
				}}
			>
				<Image src="/pokemon-logo.svg" width="300" height="150" />
			</motion.div>

			<main>
				<List />
			</main>
		</div>
	);
}
