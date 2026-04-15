const Card = ({children, bg='bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900'}) => {
    return (
        <div className={` ${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card;

