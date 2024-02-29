import { Typewriter } from 'react-simple-typewriter'

function Home(){

    return(<div className="homeDiv">
                <h1 className="name">I am Filip Ščerbík</h1>
                <h1 className="autoText">
                <Typewriter
                words={['Freelancer', 'Frontend', 'Developer']}
                loop={false}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            /></h1>
        </div>);
}
export default Home