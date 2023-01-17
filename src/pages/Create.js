import { Form } from "react-router-dom"

const Create = (props) => {
    return (
        <div>
            <h2>Create A Cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Cheese Name"/>
                <input type="input" name="countryOfOrigin" placeholder="Cheese Origin"/>
                <input type="input" name="image" placeholder="Cheese Image"/>
                <input type="submit" value="Create Cheese"/>
            </Form>
        </div>
    )
}

export default Create