import './Modal.css'

const Modal = (props) =>{
    return(
        <div className="overlay">
            <div className="modal">
                <h2>Game Over</h2>
                <p><span>{props.modalText}</span></p>          
                <button className='btnClose' onClick={props.closeModal}>X</button>           
            </div>
        </div>
    )
}

export default Modal