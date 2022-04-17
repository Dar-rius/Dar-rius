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
                        <a href="#/home" style={{color:"#64ffda", textDecoration:"none"}}>
                            /Home
                        </a>
                    </div>
                    <div className="choix1">
                        <a href="#/about" style={{color:"#64ffda", textDecoration:"none"}}>
                            /About
                        </a>
                    </div>
                    <div className="choix2">
                        <a href="#/competence" style={{color:"#64ffda", textDecoration:"none"}}>
                            /Experience
                        </a>
                    </div>
                    <div className="choix3">
                        <a href="#/projets" style={{color:"#64ffda", textDecoration:"none"}}>
                            /Projects
                        </a>
                    </div>
                </div>
                <div className="me" data-aos="zoom-in" id="/home">
                    <img src={saly} alt="saly" className="Saly" />
                    <div className="h1">
                        <h1>
                            <TypeIt options={{speed:125}}>
                            Hi 👋, I'm <span style={{color:'#58D68D'}}>Mohamed</span>.
                            </TypeIt>
                            <div>
                                <span className="para"> I’m a software engineer based in Dakar.<br/> I am very interested in full-stack development, <br/> Artificial Intelligence, everything related to technology.</span> 
                            </div>
                            <a href="https://github.com/Dar-rius">
                                <GitHubIcon style={{fontSize:30, margin:2, color:"white"}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/mohamed-tine-515950214/">
                                <LinkedInIcon style={{fontSize:30, margin:2, color:"white"}}/>
                            </a>
                            <a href="mailto:mohamedtine17@gmail.com">
                                <EmailRoundedIcon style={{fontSize:30, margin:2, color:"white"}}/>
                            </a>
                        </h1>
                    </div>
                </div>

        </div>
    )
}

export default Home