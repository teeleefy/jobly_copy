import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import './Signup.css'

function SignupForm({signup}){
    return(
        <>
            
            <Form className="Signup-Form">
            <h1 className="Signup-h1">Sign up</h1>
            <FormGroup>
                <Label for="username" >
                    <b>Username</b>
                </Label>
                <Input
                id="username"
                name="username"
                placeholder=""
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">
                    <b>Password</b>
                </Label>
                <Input
                id="password"
                name="password"
                placeholder=""
                type="password"
                />
                </FormGroup>
                <FormGroup>
                <Label for="first">
                    <b>First Name</b>
                </Label>
                <Input
                id="first"
                name="first"
                placeholder=""
                type="text"
                />
                </FormGroup>
            <FormGroup>
                <Label for="last">
                    <b>Last Name</b>
                </Label>
                <Input
                id="last"
                name="last"
                placeholder=""
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">
                    <b>Email</b>
                </Label>
                <Input
                id="email"
                name="email"
                placeholder=""
                type="email"
                />
                </FormGroup>
                <Button className="btn">Submit</Button>
            </Form>
        </>
     )
}

export default SignupForm;