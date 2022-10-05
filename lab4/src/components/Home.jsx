import { Link } from "react-router-dom"

const Home = () => {
    
    return <>
        <div className="text-pink/80 text-4xl w-fit mx-auto shadow-sm">Welcome to Homepage</div>
        <div className="text-subtext0 my-2 w-fit mx-auto">Developed by Andrii Liashenko</div>
       <div className="text-subtext1 my-2 w-fit hover:bg-pink/50 text-lg mx-auto p-2 rounded-full"><Link to="/news">read news now</Link></div> 
    </>
}

export default Home