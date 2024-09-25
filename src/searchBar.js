import { useState } from "react";
import { Stats } from "./stats";
import { Info } from "./info";



export function SearchBar(){

    const [nameOrID, setNameOrId] = useState("")
    
    const [pName,setName] = useState("")
    const [pID,setId] = useState("")
    const [pHeight,setHeight] = useState("")
    const [pWeight,setWeight] = useState("")
    const [pImage,setImage] = useState("")
    const [pTypes,setTypes] = useState([])
    const [hp,setHp] = useState("")
    const [att,setAtt] = useState("")
    const [def,setDef] = useState("")
    const [spAtk,setSpAtk] = useState("")
    const [spDef,setSpDef] = useState("")
    const [spd,setSpeed] = useState("")




    async function searchPokemon(){

        try{
            const keyword = nameOrID.toLowerCase()
            const url= `https://pokeapi.co/api/v2/pokemon/${keyword}`

            const res = await fetch(url)
            const data = await res.json()
            setName(data.name.toUpperCase())
            setId(data.id)
            setHeight(data.height)
            setWeight(data.weight)
            setImage(data.sprites.front_default)
            setTypes(data.types)
            setHp(data.stats[0].base_stat)
            setAtt(data.stats[1].base_stat)
            setDef(data.stats[2].base_stat)
            setSpAtk(data.stats[3].base_stat)
            setSpDef(data.stats[4].base_stat)
            setSpeed(data.stats[5].base_stat)

            

            
            
        } catch(err){
            alert("Pokémon could not be found :(")
        }
        

    }   
    

    return(
        <>
        <div className="search-box">
            <label htmlFor="search" >Please enter the name or ID number of a Pokémon</label>
            <input id="search "type="text" value={nameOrID} onChange={e => setNameOrId(e.target.value)}></input>
            <button onClick={searchPokemon}>Search</button>
            <Info name={pName} id={pID} height={pHeight} weight={pWeight} imageUrl={pImage} types={pTypes}/>
            <Stats hp={hp} attack={att} defense={def} specialAttack={spAtk} specialDefense={spDef} speed={spd}/>
        </div>
        </>
    );
}