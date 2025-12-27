function Listrendering2(){
    const products=[{
        name:"trousers",
        price:"1500"
    },{
        name:"kurthaset",
        price:"2000"
    },{
        name:"handbags",
        price:"1500"
    }];
    return(
        <div>
            {
                products.map((product)=>(
                    <div>
                        <h2 style={{backgroundColor:"pink",color:'white',textAlign:"center"}}>{product.name}</h2>
                        <h2 style={{backgroundColor:'orange',color:'red',textAlign:"center"}}>{product.price}</h2>
                    </div>

                ))
            }
        </div>
    )
}
export default Listrendering2;