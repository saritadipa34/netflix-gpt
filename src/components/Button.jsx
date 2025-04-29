
const Button=({text,className})=>{
    return(
        <button className={`cursor-pointer border  ${className}`}>
{text}
        </button>
    )
}
export default Button;