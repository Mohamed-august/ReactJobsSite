    import Hero from "../components/Hero";
    import HomeCards from "../components/HomeCards";
    import JobListings from "../components/JobListings";

    const HomePage = ({ jobs }) => {
    return (
        <>
        <Hero />
        <HomeCards />
        <JobListings jobs={jobs} isHome={true} />
        </>
    );
    };

    export default HomePage;

