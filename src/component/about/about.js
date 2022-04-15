import './about.css'
import AOS from 'aos'

const About =()=>{
    AOS.init({
        duration : 1700
      });
    return(
            <div className="about" id="/about" data-aos="fade-down">
                <h2>/ About</h2>
                <div className="info">
                    <div className="para1">
                    <p className='parat'>I am currently studying computer management at UCAO but I have good knowledge
                    in development in the design of website, web and mobile application. <br/><br/>
                    I use many technologies: <br/><br/></p>

                    <div style={{display:'flex', flexWrap:'wrap'}} className='compe'>
                        <div style={{marginRight:'10%'}} className="langage">
                            {">"}<span className="croix"> Python </span><br/>
                            {">"}<span className="croix"> Java </span><br/>
                            {">"}<span className="croix"> JavaScript </span><br/>
                            {">"}<span className="croix"> HTML/CSS </span><br/>
                            {">"}<span className="croix"> Solidity </span><br/>
                            {">"}<span className="croix"> Golang </span><br/><br/>
                        </div>

                        <div className="techno">
                            {">"}<span className="croix"> React Js </span><br/>
                            {">"}<span className="croix"> React Native </span>  <br/>
                            {">"}<span className="croix"> Node Js </span>  <br/>
                            {">"}<span className="croix"> Next Js </span>  <br/>
                            {">"}<span className="croix"> Django </span>  <br/>
                            {">"}<span className="croix"> Flask </span>  <br/><br/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

    )
}

export default About