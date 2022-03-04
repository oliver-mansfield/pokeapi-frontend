const getAllNames = async () => {
	//getAllPokemon json
	//query each additional endpoint eg https://pokeapi.co/api/v2/pokemon/1/
	//store 'species.name' for name eg 'bulbasaur'
	// store 'sprites.other.dream_world.front_default' for SVG url
	//return array of pokemon [{name: 'bulbasaur', thumbnailImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"}]

	//query https://pokeapi.co/api/v2/pokemon?limit=151

	//"results": [
	// { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
	// { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" },
	// { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" },
	//]

	//loop results array
	//query

	//or https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png
	//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png

	// return [];

	return await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.results);
			return data.results;
		});
};

export default getAllNames;
