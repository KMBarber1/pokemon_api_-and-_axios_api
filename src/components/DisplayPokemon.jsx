import React from 'react'

const DisplayPokemon = (props) => {


    return (
        <div>

                {props.pokemon.map((item, i) => {
                    return ( 
                    
                        <li key ={i}>{item.name}</li>
                            
                    )
                } 
                )}
                
        </div>
    )
}

export default DisplayPokemon