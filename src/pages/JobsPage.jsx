    import JobListings from "../components/JobListings";

    const JobsPage = ({jobs}) => {
    return (
        <section className="px-4 py-10 min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
        <div className="container m-auto">
            <h2 className="text-white text-3xl font-bold mb-6">All Jobs</h2>
            <JobListings jobs={jobs}/>
        </div>
        </section>
    );
    };

    export default JobsPage;

    