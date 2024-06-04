import Job from "../jobs/Job";
import Search from "../navigation/Search"
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./CompaniesList.css";
import {ListGroup} from "reactstrap";
import JoblyApi from "../Api.js";

function CompanyJobs(){
    let { handle } = useParams();
    console.log(`handle: ${handle}`)
    const [company, setCompany] = useState(null);
    const [jobs, setJobs] = useState(null);

    // useEffect(function getCompanyAndJobs(){
    //     async function getCompany() {
    //       let company = await JoblyApi.getCompany(handle);
    //       setCompany(company);
    //       setJobs(company.jobs);
    //     }
    //     getCompany();
    //   }, [handle]);
    // let companyJobs = jobs.filter(job => job.companyHandle === name);

    return(
    <>
        <Search/> 
        <section className="col-md-6">
                {/* <ListGroup>
                    {jobs.map(job => (<Job job={job}/>))}
                </ListGroup> */}
                <h3>{handle}</h3>
        </section>
    </>
     )
}

export default CompanyJobs;
