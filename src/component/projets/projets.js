
import '../projets/projets.css'
import {Card} from 'react-bootstrap'
import AOS from 'aos'
import GitHubIcon from '@material-ui/icons/GitHub';

const Projet = ()=>{
    AOS.init({
        duration: 1200
    })
    //boxShadow: '10px 5px 5px #85929E'
    return(
        <div id="/projets" data-aos="fade-down">
            <h4>/Projets</h4>
            <div className="card" >
                <Card style={{ width: '18rem', border: '1px solid #34495E ', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/Yoda_Bot" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Yoda Bot</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python, Discord py</Card.Subtitle>
                        <Card.Text>
                        Un bot discord qui a pour objectif d'apprendre aux membres d'un serveur discord l'informatique
                         particulièrement, le développement web, mobile et le design.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/tkin_game" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>TkinGame</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python</Card.Subtitle>
                        <Card.Text>
                            Un jeu dont l'objectif est d'arriver a deviné le nombre que le machine
                            donnera. vous êtes 4 joueurs et chacun a une certaine somme d'argent.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>UCAO app</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>React native</Card.Subtitle>
                        <Card.Text>
                        Une application mobile dont le but est de remplacer les plateformes: classroom , kairos et google 
                        meet par une appli qui regroupe toutes les fonctionnalités de ces derniers.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/trade_track" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold',marginBottom:'10%', fontSize:"140%"}}>Trade track</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}} >HTML, CSS</Card.Subtitle>
                        <Card.Text>
                            Un site permettant de convertir une crypto monnaie en monnaie physique
                            avec les valeurs de ses crypto en temps réel.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/AI_Titanic" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>AI Titanic</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python, Numpy, Pandas, Scklearn, Matplotlib</Card.Subtitle>
                        <Card.Text>
                        Un modèle de machin learning qui a été entraîné sur le dataset du titanic afin de prédire si une personne a survécu au naufrage du titanic.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E ', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/Analyse_corona" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Analyze Corona</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python, Numpy, Pandas, Scklearn, Matplotlib, Seaborn, MlXtend</Card.Subtitle>
                        <Card.Text>
                        Un modèle de machin learning qui a été entrainer sur le dataset du coronavirus de kaggle afin de prédire si une personne est positif au coronavirus
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/Analyze_School" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Analyze School</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>Python, Numpy, Pandas, Matplotlib, Seaborn</Card.Subtitle>
                        <Card.Text>
                        Un algorithme utilise toutes les données des étudiants pour ensuite les enregistrer dans un tableau                             
                        et va ensuite visualiser les données en présentant le rang des étudiant selon leur moyenne, le nombre des meilleurs étudiants , les tranches tranches d'âges qui existent au sein de l'établissement.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', border: '1px solid #34495E', background:'#1C2833'  }} className="carte">
                    <Card.Body>
                        <a href="https://github.com/Dar-rius/Host" className='git'>
                            <GitHubIcon style={{fontSize:27, margin:1, color:"white"}}/>
                        </a>
                        <Card.Title style={{fontWeight:'bold', marginBottom:'10%', fontSize:"140%"}}>Host</Card.Title>
                        <Card.Subtitle style={{fontSize:'90%', color:'#2ECC71'}}>HTML, CSS, Jquery mobile</Card.Subtitle>
                        <Card.Text>
                        Une application mobile de guide sur tous les hôpitaux et cliniques des différents départements de Dakar.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projet