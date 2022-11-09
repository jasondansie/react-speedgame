import './Button.css'

const Button = (props) => {
    return(
        <button className='gameButton' onClick={props.buttonClick}>{props.button_name}</button>
    )
}

export default Button;