import { useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
    const cheese = useLoaderData()
    console.log(cheese)

    return (
        <div className="cheese-container">
            <h2>{cheese.name}</h2>
            <h3>{cheese.countryOfOrigin}</h3>
            <img src={cheese.image} alt={cheese.name}/>

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method="post">
                <input defaultValue={cheese.name} type="input" name="name" placeholder="Cheese Name"/>
                <input defaultValue={cheese.countryOfOrigin} type="input" name="countryOfOrigin" placeholder="Cheese Origin"/>
                <input defaultValue={cheese.image} type="input" name="image" placeholder="Cheese Image"/>
                <input type="submit" value={`Update ${cheese.name}`}/>
            </Form>

            <h2>Delete {cheese.name}</h2>
            <Form action={`/delete/${cheese._id}`} method="post">
                <input type="submit" value={`Delete ${cheese.name}`}/>
            </Form>
        </div>
    )
}

export default Show