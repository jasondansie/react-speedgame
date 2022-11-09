import './Circle.css'

const Circle = (props) => {

    return (
        <div className='circle' onClick={props.circleClick}>{props.circle_id}</div>
    )
}

export default Circle;