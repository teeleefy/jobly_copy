import Search from "../navigation/Search.jsx"
import Job from "./Job";
import JoblyApi from "../Api.js";
import { useState, useEffect} from "react";
import { ListGroup } from "reactstrap";

function JobsList(){
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getJobsOnMount() {
          let jobs = await JoblyApi.getJobs();
          setJobs(jobs);
        }
        getJobsOnMount();
      }, []);

      if(!jobs) return <p>Loading &hellip;</p>;

    return(
        <>
            <Search/>
            <section className="col-md-6">
                <ListGroup>
                    {jobs.map(job => (
                    <Job job={job} key={job.id}/>
                    ))}
                </ListGroup> 
            </section>
        </>
     )
}

export default JobsList;