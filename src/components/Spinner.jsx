import ClipLoader from 'react-spinners/ClipLoader';

const override =
{
    display:'block',
    margin:'100px auto'
};

const Spinner = ({loading}) => {
    return (
        <ClipLoader 
        color='bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900'
        loading={loading}
        cssOverride={override}
        size={150}
        />
    );
};

export default Spinner;

