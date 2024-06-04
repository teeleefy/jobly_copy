import {
    Card,
    CardBody,
    CardText,
    ListGroupItem
  } from "reactstrap";
  import { NavLink } from "react-router-dom";
import './Company.css'

function Company({company}){
    return(
        <>
            <Card className="Company-card">
                <CardBody>
                <CardText>
                <NavLink to={`/companies/${company.handle}`} key={company.handle}>
                        <p className="Company-name">{company.name}</p>
                        
                    </NavLink>
                    <p>{company.description}</p>
                </CardText>
                </CardBody>
            </Card>
        </>
     )
}

export default Company;