import {
    Card,
    CardBody,
    CardText,
    ListGroupItem
  } from "reactstrap";
  import { NavLink } from "react-router-dom";
import './Job.css'

function Job({job}){
    return(
        <>
            <Card className="Job-card">
                <ListGroupItem>
                <CardBody>
                <CardText className="Job-text">
                    <p className="Job-name">{job.title}</p> 
                    <p className="Job-company">{job.companyName}</p>
                    <p>Salary: {job.salary ? `$${job.salary}` : "N/A"}</p>
                    <p>Equity: {job.equity || 0}</p>
                </CardText>
                </CardBody>
                </ListGroupItem>
            </Card>
        </>
     )
}

export default Job;