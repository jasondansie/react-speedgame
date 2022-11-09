import './Header.css'

const Header = (props) => {

    return(
        <div className="title_score">
        <h2>score: <span>{props.score}</span></h2> 
        <h1>Catch the Cow</h1>
        <h2>Misses: <span>{props.misses}</span></h2>
    </div>  
    );
}

export default Header;