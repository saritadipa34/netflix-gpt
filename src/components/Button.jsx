
const Button=({text,className,onClick})=>{
    return(
        <button onClick={onClick} className={`cursor-pointer border  ${className}`}>
{text}
        </button>
    )
}
export default Button;