function userPokemon(){
    let pokemon = document.getElementById("input-here").value;

    const pokeapidata = async () => {
    
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    console.log(data)

    const image = document.createElement('img')
    image.setAttribute('src', data['sprites']['front_default'])
    const pokemon_card = document.querySelector('.pokemon-card')
    pokemon_card.append(image)

    const name = document.createElement('h1')
    name.innerText = data['forms'][0]['name']
    pokemon_card.append(name)

    // const ability = document.createElement('span')
    // name.innerText = data['abilities'][0]['ability']['name']
    // pokemon_card.append(ability)


}
pokeapidata()

}
