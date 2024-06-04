import Search from "../navigation/Search"
import {useState, useEffect} from "react";
import JoblyApi from "../Api.js";
import "./CompaniesList.css";
import {
  ListGroup
} from "reactstrap";
import Company from "./Company";

function CompaniesList(){
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        async function getCompaniesOnMount() {
          let companies = await JoblyApi.getCompanies();
          setCompanies(companies);
        }
        getCompaniesOnMount();
      }, []);

      if(!companies) return <p>Loading &hellip;</p>;


    return(
    <>
        <Search/> 
        <section className="col-md-6">
                <ListGroup>
                    {companies.map(company => (<Company company={company} key={company.handle}/>))}
                </ListGroup>
        </section>
    </>
     )
}

export default CompaniesList;
