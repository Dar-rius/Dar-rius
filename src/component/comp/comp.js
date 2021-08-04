import '../comp/comp.css'
import AOs from 'aos'
const Comp =()=>{
    AOs.init({
        duration:1200
    })
    return(
        <div className="comp" id="/competence" data-aos="fade-down">
            <h3>/Competences:</h3>
            <div className="dis"> 
                <div className="form">
                    <div className="lang">Langages:</div>
                    <div className="shies"><br/>
                        <p><span className="croix">{">"}</span> Python</p>
                        <p><span className="croix">{">"}</span> Java</p>
                        <p><span className="croix">{">"}</span> JavaScript</p>
                        <p><span className="croix">{">"}</span> HTML/CSS</p>
                    </div>
                </div>
                <div className="form1">
                    <div className="frame">Framework:</div>
                    <div className="shies1"><br/>
                        <p><span className="croix">{">"}</span> Angular</p>
                        <p><span className="croix">{">"}</span> Ionic</p>
                        <p><span className="croix">{">"}</span> React js</p>
                        <p><span className="croix">{">"}</span> React native</p>
                        <p><span className="croix">{">"}</span> Node Js</p>
                    </div>
                </div>
                <div className="form2">
                    <div className="frame">Autres:</div>
                    <div className="shies1"><br/>
                        <p><span className="croix">{">"}</span> Numpy</p>
                        <p><span className="croix">{">"}</span> Matplotlib</p>
                        <p><span className="croix">{">"}</span> Seaborn</p>
                        <p><span className="croix">{">"}</span> Pandas</p>
                        <p><span className="croix">{">"}</span> Scikit-Learn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp