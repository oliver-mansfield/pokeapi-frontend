const ListItem = (props) => {
	return (
		<>
			<p>{props.name}</p>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					props.index + 1
				}.svg`}
			/>
		</>
	);
};

export default ListItem;
