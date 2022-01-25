import "./Home.css";
const Home = () => {

    const handleClick = () => {
        window.open('/quiz');
      };
    return( 
    <div className="app" style = {{ backgroundImage:"url(./quiz.png)" }}>
        <div className="header">
            <div>
                <button className="title" onClick={handleClick}> START QUIZ!</button>
            </div>
        </div>
    </div>        
    ); 
};
export default Home;