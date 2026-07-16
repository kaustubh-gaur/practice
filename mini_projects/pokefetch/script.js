const poketag = document.getElementById("poketag");
const search = document.getElementById("search");
const img = document.getElementById("pokeimg");

async function fetchData(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      img.src = "image.png";
      poketag.textContent = "Could not find that pokemon";
      throw new Error("Could not fetch the resource.");
    } else {
      const data = await response.json();
      poketag.textContent = data.name;
      img.src = data.sprites.front_default;
    }
  } catch (error) {
    console.error(error);
  }
}

search.addEventListener("click", searchPokemon);

function searchPokemon() {
  const name = document.getElementById("pokename").value.toLowerCase().trim();

  if (name) {
    fetchData(name);
  } else {
    poketag.textContent = "Please enter a name";
  }
}
