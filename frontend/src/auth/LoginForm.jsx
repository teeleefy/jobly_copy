import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import './Login.css'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";


function LoginForm({login}){
    const INITIAL_STATE = { username: "", password: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();
    /** Send { name, description, recipe, serve } to parent
     *    & clear form. */
  
    async function handleSubmit(evt){
        evt.preventDefault();
        // console.log(formData);
        let result = await login(formData);
        if(result.success){
            setFormData(INITIAL_STATE);
            navigate('/');
        }
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value }= evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    };

    return(
        <>
            
            <Form className="Login-Form" onSubmit={handleSubmit}>
            <h1 className="Login-h1">Login</h1>
            <FormGroup>
                <Label for="username" >
                    <b>Username</b>
                </Label>
                <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={ handleChange }
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">
                    <b>Password</b>
                </Label>
                <Input
                id="password"
                name="password"
                value={formData.password}
                type="password"
                onChange={ handleChange }
                />
                </FormGroup>
                <Button className="btn">Submit</Button>
            </Form>
        </>
     )
}

export default LoginForm;