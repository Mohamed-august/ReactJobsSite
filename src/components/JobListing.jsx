    import { Link } from "react-router-dom";
    import { FaMapMarker } from "react-icons/fa";
    import { useState } from "react";
    const JobListing = ({ job }) => {
        const [showFullDesc, setShowFullDesc] = useState(false);
        const isLong = job.company?.description?.length > 100;
        const companyDesc = job.company?.description || "";
    return (
        <div className="text-white bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-6 rounded-lg shadow-md">
        <div className="text-white mb-2">{job.type}</div>

        <h2 className="text-white text-xl font-bold mb-2">{job.title}</h2>

        <div className="text-white flex items-center mb-4">
            <FaMapMarker className="text-orange-700 mr-2" />
            <span className="text-orange-700">{job.location}</span>
        </div>

                {/* ✅ Job Description with toggle */}
            <p className="text-white mb-2">
                {job.description.length > 100 && !showFullDesc
                ? job.description.substring(0, 100) + "..."
                : job.description}
            </p>

            {/* ✅ Company Description with toggle */}
            {companyDesc && (
                <p className="text-white text-sm mb-4">
                <strong>Company:</strong>{" "}
                {isLong && !showFullDesc
                    ? companyDesc.substring(0, 100) + "..."
                    : companyDesc}
                </p>
            )}

            {isLong && (
                <button
                onClick={() => setShowFullDesc((prev) => !prev)}
                className="text-white font-semibold hover:underline mb-4"
                >
                {showFullDesc ? "View Less" : "View More"}
                </button>
            )}

                <Link
                    to={`/jobs/${job.id}`}
                    className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white font-bold py-2 px-4 rounded-full block text-center"
                >
                    View Details
                </Link>
                </div>
            );
            };

            export default JobListing;

            
