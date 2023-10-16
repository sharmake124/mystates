import PropTypes from 'prop-types';



function Pokemondcard(propsPokemond){
    console.log(propsPokemond)

    return(
        <>
       
        <div>
        
        <img src= {propsPokemond.image} />
       <figcaption>{propsPokemond.name}</figcaption> 
        </div>
        
        
        </>
       

        
    )
}



export default Pokemondcard