import pokemonData from "./pokemonData";

const getAllNames = async () => {
	//return dummy data during dev to avoid getting IP banned for spamming api
	// return pokemonData.results;

	return await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.results);
			return data.results;
		});
};

export default getAllNames;
