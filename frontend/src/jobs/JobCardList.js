import React from "react";
import JobCard from "./JobCard";

/** Display list of job cards.
 * 
 * Use by both JobList and CompanyDetail to list jobs. 
 * Receives an apply function prop, which is called on JobCard to apply.
 * 
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 * 
 */

function JobCardList({ jobs, apply }){
    console.debug("JobCardList", "jobs=", jobs);

    return (
        <div>
            {jobs.map(job => (
                <JobCard 
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                />
            ))}
        </div>
    )
}

export default JobCardList;