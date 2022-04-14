import './about.css'
import AOS from 'aos'

const About =()=>{
    AOS.init({
        duration : 1700
      });
    return(
            <div className="about" id="/about" data-aos="fade-down">
                <h2>/A propos:</h2>
                <div className="info">
                    <p className="para1">
                    Je suis un étudiant en informatique mais j'ai de bonnes connaissances en developpement web et en Python. <br/> <br/>
                    Je maîtrise les technologies comme HTML5/CSS3 , JavaScript, Python et java, mais également avec les outils permettant 
                    de developper des modèles de machine learning avec des outils comme Scikit-learn et Tensoflow.<br/> <br/>
                    Je maitrise les frameworks JavaScript pour le développement web tels que: React , Angular, Ionic, aussi avec nodeJs. 
                    Je suis très autodidacte, et j'aime travailler en équipe où je peux mettre en œuvre toutes mes compétences.
                    </p>
                </div>
            </div>

    )
}

export default About