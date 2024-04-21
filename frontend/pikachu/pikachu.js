//fetch(url);

const url = "https://pokeapi.co/api/v2/pokemon/";

// fetch(url).then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     return response.json();
// }).then(data => console.log(data));

const button = document.getElementById("pokemonButton");

button.onclick =  async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(url.concat(pokemonName));

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data =  await response.json();

        //src của ảnh
        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }

    catch(error){
        console.error(error);
    }
}
