import getAllNames from "../utility/getAllNames";
import getDataByName from "../utility/getDataByName";
import Image from "next/image";
import styles from "../components/pokemonPage.module.scss";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";

const Pokemon = ({ pokemonPageData }) => {
	return (
		<>
			<section className={styles.hero}>
				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
					className={`${styles.background} ${pokemonPageData.types[0].type.name}`}
				>
					<Marquee name={pokemonPageData.name} />
				</motion.div>
				<motion.div
					className={styles.hero__image_outer}
					initial={{ y: "10%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
				>
					<div className={styles.hero__image}>
						<Image
							src={pokemonPageData.sprites.other.dream_world.front_default}
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</motion.div>
			</section>

			<h1>{pokemonPageData.name}</h1>

			<ul>
				{pokemonPageData.types.map((type, index) => {
					return <li key={index}>{type.type.name}</li>;
				})}
			</ul>
			<p>Weight {pokemonPageData.weight}</p>
			<p>Height {pokemonPageData.height}</p>
			<p>Number (ID) {pokemonPageData.id}</p>
			<ul>
				{pokemonPageData.stats.map((stat, index) => {
					return (
						<li key={index}>
							<p>{stat.stat.name}</p>
							<p>{stat.base_stat}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export async function getStaticPaths() {
	const pokemonPagePaths = await getAllNames().then((res) => {
		return res.map((pokemon) => {
			return {
				params: {
					pokemonPage: pokemon.name,
				},
			};
		});
	});

	return {
		paths: pokemonPagePaths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const pokemonPageData = await getDataByName(context.params.pokemonPage);
	return {
		props: { pokemonPageData },
	};
}

export default Pokemon;
