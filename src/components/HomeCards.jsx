import {Link} from 'react-router-dom';
import Card from '../components/Card';

const HomeCards = () => {
    return (
        <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 py-4">
            <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card>
            <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-6 rounded-lg shadow-md">
                <h2 className="text-white text-2xl font-bold">For Developers</h2>
                <p className="text-white mt-2 mb-4">
                Browse our React jobs and start your career today
                </p>
                <Link
                to ="/jobs"
                className="inline-block bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white rounded-lg px-4 py-2"
                >
                Browse Jobs
                </Link>
            </div>
            </Card>
        
                <Card bg='bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900'>
                    <h2 className="text-white text-2xl font-bold">For Employers</h2>
                <p className="text-white mt-2 mb-4">
                List your job to find the perfect developer for the role
                </p>
                <Link
                to="/add-job"
                className="inline-block bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white rounded-lg px-4 py-2"
                >
                Add Job
                </Link>
                </Card>
        </div>
        </div>
        </section>
    )
    }

    export default HomeCards;


    