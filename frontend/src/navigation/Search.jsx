import { Form, FormGroup, Input, Button } from "reactstrap";
import './Search.css'


function Search(){
    return(
        <>
            <Form>
                <FormGroup className="form">
                    <Input
                    id="searchBar"
                    name="search"
                    placeholder="Enter search term..."
                    type="text"
                    />
                </FormGroup>
                <Button className="btn">Submit</Button>
            </Form>
        </>
     )
}

export default Search;