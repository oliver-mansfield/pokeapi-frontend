import getAllNames from "../utility/getAllNames";
import getDataByName from "../utility/getDataByName";
import Image from "next/image";
import styles from "../components/pokemonPage.module.scss";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";

const Pokemon = ({ pokemonPageData }) => {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { y: "100%" },
		show: {
			y: 0,
			transition: {
				duration: 0.2,
				ease: "easeOut",
			},
		},
	};

	return (
		<>
			<section className={styles.hero}>
				<motion.div
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					transition={{ ease: "anticipate", duration: 0.8, delay: 0.2 }}
					className={`${styles.background} ${pokemonPageData.types[0].type.name}`}
				>
					<Marquee name={pokemonPageData.name} />
				</motion.div>
				<motion.div
					className={styles.hero__image_outer}
					initial={{ y: "30%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 150,
						duration: 0.8,
						delay: 0.4,
					}}
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

			<section className={styles.intro}>
				<motion.div
					className={styles.intro__numberouter}
					initial={{ y: "30%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 150,
						duration: 0.8,
						delay: 1,
					}}
				>
					<span className={styles.intro__number}>#{pokemonPageData.id}</span>
				</motion.div>
				<span className={styles.intro__label}>NAME</span>

				<div className={styles.textcontainer}>
					<motion.h1
						className={styles.intro__name}
						initial={{ y: "100%" }}
						whileInView={{ y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: 0.1,
							duration: 0.3,
							ease: "easeOut",
						}}
					>
						{pokemonPageData.name}
					</motion.h1>
				</div>

				<span className={styles.intro__label}>TYPE</span>
				<motion.ul
					className={styles.intro__types}
					variants={container}
					initial="hidden"
					whileInView="show"
				>
					{pokemonPageData.types.map((type, index) => {
						return (
							<div className={styles.textcontainer}>
								<motion.li
									className={type.type.name}
									key={index}
									variants={item}
								>
									{type.type.name}
								</motion.li>
							</div>
						);
					})}
				</motion.ul>
			</section>
			<section className={styles.statsone}>
				<motion.div
					variants={container}
					variants={container}
					initial="hidden"
					whileInView="show"
					className={styles.statsone__inner}
				>
					<div className={styles.statsone__stat}>
						<span className={styles.statsone__label}>WEIGHT</span>

						<div className={styles.textcontainer}>
							<motion.h1 className={styles.statsone__value} variants={item}>
								{pokemonPageData.weight} kg
							</motion.h1>
						</div>
					</div>

					<div className={styles.statsone__stat}>
						<span className={styles.statsone__label}>HEIGHT</span>

						<div className={styles.textcontainer}>
							<motion.h1 className={styles.statsone__value} variants={item}>
								{pokemonPageData.height} inch
							</motion.h1>
						</div>
					</div>
				</motion.div>
			</section>

			<section className={styles.statstwo}>
				<motion.div
					variants={container}
					variants={container}
					initial="hidden"
					whileInView="show"
					className={styles.statstwo__inner}
				>
					{pokemonPageData.stats.map((stat, index) => {
						return (
							<div key={index} className={styles.statstwo__stat}>
								<span className={styles.statstwo__label}>{stat.stat.name}</span>
								<div className={styles.textcontainer}>
									<motion.p className={styles.statstwo__value} variants={item}>
										{stat.base_stat}
									</motion.p>
								</div>
							</div>
						);
					})}
				</motion.div>
			</section>
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
