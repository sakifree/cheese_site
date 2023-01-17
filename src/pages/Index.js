import { Link, useLoaderData } from "react-router-dom"

const Index = (props) => {
    const cheeses = useLoaderData()
    console.log(cheeses)
    
    return (
        <div>
            <div className="cheeses-container">
                {cheeses.map(cheese => (
                    <div className="card" key={cheese._id}>
                        <Link to={`/${cheese._id}`}>
                            <img src={cheese.image} alt={cheese.name}/>
                        </Link>   
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default Index