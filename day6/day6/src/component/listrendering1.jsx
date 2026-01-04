function Listrendering1(){
    const movies=["hii nana","og","salar"]
    return(
        <>
        <ul type="none">{
            movies.map((name,index)=>(
                <li key={index}>{name}</li>

            ))
            }

        </ul>
        </>
    )
}
export default Listrendering1