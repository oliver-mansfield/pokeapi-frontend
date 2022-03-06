import getAllNames from "../utility/getAllNames";
import getDataByName from "../utility/getDataByName";
import Image from "next/image";

const Pokemon = ({ pokemonPageData }) => {
	return (
		<>
			<h1>{pokemonPageData.name}</h1>
			<Image
				src={pokemonPageData.sprites.other.dream_world.front_default}
				width="200"
				height="200"
			/>
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
