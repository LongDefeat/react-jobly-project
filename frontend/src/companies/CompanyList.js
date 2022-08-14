import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { isElementOfType } from "react-dom/test-utils";

/** Display page with list of companies.
 * 
 * On mount, loads companies from API.
 * 
 * Re-loads friltered companies on submit from search form.
 * 
 * Routed at /companies
 * 
 * Routes -> { CompanyCard, SearchForm } 
 */

function CompanyList(){
    console.debug("CompanyList");

    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount(){
        console.debug("CompanyList useEffect getCompaniesOnMount")
        search();
    })

    // Triggered by search form submission; reloads companies.

    async function search(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if(!companies) return <LoadingSpinner />;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
    );
}

export default CompanyList;