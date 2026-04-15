    import { useLoaderData, useNavigate } from "react-router-dom";
    import { toast } from "react-toastify";

    const JobPage = ({ deleteJob }) => {
    const job = useLoaderData();
    const navigate = useNavigate();

    if (!job) {
        return (
        <div className="text-center py-12 text-gray-500 text-xl">
            Job not found.
        </div>
        );
    }

            const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            try {
            await deleteJob(job.id);
            navigate("/jobs"); 
            } catch (error) {
            console.error("Error deleting job:", error);
            toast.error("❌ Failed to delete job. Please try again.");
            }
        }
        };

    return (
        <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
        <div className="container m-auto py-10">
            <div className="shadow-md rounded-md p-6 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
            <h1 className="text-3xl font-bold mb-4 text-white">{job.title}</h1>
            <p className="text-white mb-2">
                <span className="font-semibold text-white">Type:</span> {job.type}
            </p>
            <p className="text-white mb-2">
                <span className="font-semibold">Salary:</span> {job.salary}
            </p>
            <p className="text-white mb-4">
                <span className="font-semibold">Location:</span> {job.location}
            </p>

            <h2 className="text-xl text-white font-semibold mb-2">Description</h2>
            <p className="mb-4 text-white">{job.description}</p>

            <h2 className="text-xl font-semibold text-white mb-2">Company</h2>
            <p className="mb-1 font-semibold text-white">{job.company.name}</p>
            <p className="mb-1 text-white">{job.company.description}</p>
            <p className="mb-1 text-sm text-white">
                📧 {job.company.contactEmail}
            </p>
            {job.company.contactPhone && (
                <p className="mb-4 text-sm text-white">
                📞 {job.company.contactPhone}
                </p>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
                <button
                onClick={() => navigate(`/edit-job/${job.id}`)}
                className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white font-bold py-2 px-4 rounded-full"
                >
                Edit
                </button>
                <button
                onClick={handleDelete}
                className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white font-bold py-2 px-4 rounded-full"
                >
                Delete
                </button>
                <button
                onClick={() => navigate("/jobs")}
                className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white font-bold py-2 px-4 rounded-full"
                >
                Back to Jobs
                </button>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default JobPage;

    