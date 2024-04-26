
type Props = {
    msg: string
}
const CardMensage = ({msg} : Props) => {
    return (
        <div className="container">
             <h1>{msg}</h1>
        </div>   
    );
}
export default CardMensage;