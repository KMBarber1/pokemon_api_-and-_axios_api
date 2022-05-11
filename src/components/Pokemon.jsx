import React, { useState } from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from "axios";


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    //const [pokemon, setPokemon] = useState()


    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
        // fetch(`https://pokeapi.co/api/v2/pokemon/mew`)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log("fetch .then function")
                console.log(jsonResponse.results)
                setPokemon(jsonResponse.results)
                // console.log(jsonResponse)
                // setPokemon(jsonResponse)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAxios = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(response =>{
                console.log("axios function")
                console.log(response.data.results)
                setPokemon(response.data.results)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <button onClick={fetchPokemon}>Catch Pokemon</button>
            <button onClick={fetchPokemonAxios}> Fetch Pokemon AXIOS</button>

            {
            pokemon ?
                <div>
                    <h1>{pokemon.name}</h1>
                    {/* <img src={pokemon.sprites.front_default} />  */}

                </div>:
                <h3> Catch a Pokemon!</h3>   
            } 

            {
                pokemon?
                    <DisplayPokemon pokemon = {pokemon} />:
                <h1> Fetch a pokemon by clicking the button!</h1>
            }

        </div>
    )
}

export default Pokemon