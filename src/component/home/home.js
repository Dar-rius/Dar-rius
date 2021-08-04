import saly from '../home/assets/saly.png'
import TypeIt from "typeit-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './home.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'

const Home =()=>{
    AOS.init({
        duration : 1200
      });
    return(
        <div className="debut" >
                 <div className="opt">
                    <div className="choix">
                        <a href="/" style={{color:"#5DADE2", textDecoration:"none"}}>
                            /Home
                        </a>
                    </div>
                    <div className="choix1">
                        <a href="#/about" style={{color:"#5DADE2", textDecoration:"none"}}>
                            /About
                        </a>
                    </div>
                    <div className="choix2">
                        <a href="#/competence" style={{color:"#5DADE2", textDecoration:"none"}}>
                            /Competences
                        </a>
                    </div>
                    <div className="choix3">
                        <a href="#/projets" style={{color:"#5DADE2", textDecoration:"none"}}>
                            /Projets
                        </a>
                    </div>
                </div>
                <div className="me" data-aos="zoom-in">
                    <img src={saly} alt="saly" className="Saly" />
                    <div className="h1">
                        <h1>
                            Hi 👋, I'm Mohamed. <br/>
                            <TypeIt><span className="para"> Je suis un software engineer <br/>, pationne par l'IA et l'interaction  <br/>entre l'homme et la machine</span> 
                        </TypeIt>
                            <a href="https://github.com/Dar-rius">
                                <GitHubIcon style={{fontSize:22, margin:2, color:"white"}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/mohamed-tine-515950214/">
                                <LinkedInIcon style={{fontSize:22, margin:2, color:"white"}}/>
                            </a>
                            <a href="mailto:mohamedtine17@gmail.com">
                                <EmailRoundedIcon style={{fontSize:22, margin:2, color:"white"}}/>
                            </a>
                        </h1>
                    </div>
                </div>

        </div>
    )
}

export default Home