# Fetchly's Interview Challenge

## My Pokémon List

Objectives:
- Let user type the name of the pokemon
- Make an API request using the user input
- Display Pokémon Card if info is found

========================================================

## INSTRUCTIONS

1 - Create a pokémon search and display a Pokémon Card with data fetched from [PokeAPI](https://pokeapi.co/)

This is how the data looks like:

```
{
  "id":35
  "name":"pikachu",
  "height": 50,
  "weight": 30,
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  "sprites": {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  }
}
```
endpoint: `https://pokeapi.co/api/v2/pokemon/{id or name}/`

2 - Display the pokemon card with returned data.

This is how the card should look like:

![Pokémon Card](https://raw.githubusercontent.com/ramonfragoso/create-react-app/master/card.png)

#### Example: 


![Example](https://raw.githubusercontent.com/ramonfragoso/create-react-app/master/pokemoncard.gif)

========================================================

#### Click here to start:
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ramonfragoso/create-react-app)
