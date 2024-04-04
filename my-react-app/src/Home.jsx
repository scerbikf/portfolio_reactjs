import { Typewriter } from 'react-simple-typewriter'

function Home(){

    return(<div className="homeDiv">
        <img src="/public/background_mobile2.PNG" className="backgroundMobile"></img>
                <h1 className="name">I am Filip Ščerbík</h1>
                <h1 className="autoText">
                    <Typewriter
                    words={['Freelancer', 'Frontend Developer']}
                    loop={false}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={600}/>
                </h1>
        </div>);
}
export default Home