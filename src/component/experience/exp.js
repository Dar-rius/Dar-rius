import './exp.css'
import AOs from 'aos'
const Exp =()=>{
    AOs.init({
        duration:1200
    })
    return(
        <div className="comp" id="/competence" data-aos="fade-down">
            <h2>/ Experience</h2>
            <div className="para2">
                    <h3>Freelance as a Full-Stack developer</h3>
                    <p className='date'>May 2021 - currently</p>
                    <p>
                        Develop websites and mobile applications for clients.
                    </p>
                </div>

                <div className="para2">
                    <h3>Full-Stack developer at BuurGroup</h3>
                    <p className='date'> September 2022 - March 2022</p>
                    <p>
                        Develop web and mobile platforms for west africa in order 
                        to facilitate investment by individuals in companies located in 
                        the sub-region or to help project leaders, but also facilitate investment 
                        in the world of cryptocurrencies.
                    </p>
                </div>
        </div>
    )
}

export default Exp