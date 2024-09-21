
/* eslint-disable react/prop-types */
const Card=({title,brand,price,children})=>{
    const {model,manufacture} = children
    console.log(children)
    return(
        <>
            <h1>Hey this is {brand} {title} of model {model} manufactured by {manufacture} at price {price}</h1>

        </>
    )
}
export default Card