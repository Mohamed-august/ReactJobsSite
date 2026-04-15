    import JobCard from "../components/JobListing";

    const JobListings = ({ jobs = [], isHome = false }) => {
    if (!jobs || jobs.length === 0) {
        return <p className="text-center text-white">No jobs available.</p>;
    }

    const displayedJobs = isHome ? jobs.slice(0, 3) : jobs;

    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
        {displayedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
        ))}
        </div>
    );
    };

    export default JobListings;
