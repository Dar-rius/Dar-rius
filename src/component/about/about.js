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
                    Actuellement étudiant en informatique à l'université UCAO saint michel et passionné <br/>
                    avec d'énormes intérêts dans le milieu du développement web et l'intelligence artificielle.<br/><br/> <br/> 
                    Je suis une personne très autodidacte, grâce à ma curiosité et ma soif de progresser pour toujours aller plus loin, 
                    j'ai acquis de nombreuses compétences personnelle, ces com Actuellement étudiant en informatique à l'université UCAO 
                    saint michel et passionné <br/>avec d'énormes intérêts dans le milieu du développement web et l'intelligence 
                    artificielle.<br/><br/> <br/> Je suis une personne très autodidacte, grâce à ma curiosité et ma soif de progresser 
                    pour toujours aller plus loin, j'ai acquis de nombreuses compétences personnelle, ces compétences comprennent la 
                    programmation avec python, Java et le JavaScript, mais aussi le développement web avec HTML5/CSS3 et les frameworks 
                    JavaScript.pétences comprennent la programmation avec python, Java et le JavaScript, mais aussi le développement web 
                    avec HTML5/CSS3 et les frameworks JavaScript.
                    </p>
                </div>
            </div>

    )
}

export default About