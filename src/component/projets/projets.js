
import '../projets/projets.css'
import {Card} from 'react-bootstrap'
import AOS from 'aos'
import GitHubIcon from '@material-ui/icons/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';

const Projet = ()=>{
    AOS.init({
        duration: 1200
    })
    //boxShadow: '10px 5px 5px #85929E'
    return(
        <div id="/projets" data-aos="fade-down">
            <h2>/ Projects</h2>
            <div className="card" >
                <Card style={{ width: '18rem', border: '1px solid #34495E ', background:'#233554'  }} className="carte">
                    <Card.Body>
                        <div className='git'>
                            <a href="https://github.com/Dar-rius/digits" target='_blank'>
                                <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                            </a>
                        </div>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Digits</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python Tensorflow SKlearn Numpy</Card.Subtitle>
                        <Card.Text>
                             a neural network capable of recognizing a number which is displayed on a 2D image 
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#233554'  }} className="carte">
                    <Card.Body>
                        <div className='git'>
                            <a href="https://github.com/Dar-rius/casino" target='_blank'>
                                <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                            </a>
                            <a href="https://dar-rius.github.io/casino/" target='_blank'>
                                <IosShareIcon style={{fontSize:27, margin:1, color:"white"}}/>
                            </a>
                        </div>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Casino</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>React Js</Card.Subtitle>
                        <Card.Text>
                            You are 4 players and your objective is to find the number that the machine will spawn in order to win all the loot that the other players have bet.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#233554'  }} className="carte">
                    <Card.Body>
                        <div className='git'>
                            <a href="https://github.com/Dar-rius/PopulationAnalyze" target='_blank'>
                                <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                            </a>
                        </div>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Population Analyzis</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python SKlearn Pandas Numpy Matplotlib</Card.Subtitle>
                        <Card.Text>
                        Analyze population growth from the 1950s to 2100 to train a machine learning model that can predict the number of people on earth in years greater than 2100.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#233554'  }} className="carte">
                    <Card.Body>
                        <div className='git'>
                            <a href="https://github.com/freelansDev/stateProjects" target='_blank'>
                                <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                            </a>
                            <a href="" target='_blank'>
                                    <IosShareIcon style={{fontSize:27, margin:1, color:"white"}}/>
                            </a>
                        </div>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>State Project</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python(Django) HTML/CSS</Card.Subtitle>
                        <Card.Text>
                        A site allowing customers to view the progress of their site or application under development.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E ', background:'#233554'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/Analyse_corona" target='_blank' className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Corona Analyzis</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python, Numpy, Pandas, SKlearn, Matplotlib, Seaborn, MlXtend</Card.Subtitle>
                        <Card.Text>
                        A machine model that has been trained to identify people with corona
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#233554' }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/Host-V2" target='_blank' className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Hosto</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>React Native</Card.Subtitle>
                        <Card.Text>
                        A mobile guide application on all the hospitals and clinics of the different departments of Dakar.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projet