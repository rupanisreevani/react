import './Jscode.css'
// var name="sreevani";
// var age= 22;
// var city="hyd"
function Jscode(){
    // var name="nani";
    // var age= 22;
    // var city="kphb"
    var person={
        name:"sai",
        age:22,
        city:"hyd"

    }
    return(
    
        <div>
            <h1 className="header1">hello everyone</h1>
            
            <p className="para1">{person.name} is {person.age},staying i {person.city}</p>
        <div>
            <h2 style={{color:'blue',background:'purple',textAlign:'center'}}>Today is monday</h2>
            <h2 style={{color:'read',background:'blue',textAlign:'center'}}>Tomorrow is Tuesday</h2>
        </div>
        </div>
        
        
    )

}
export default Jscode;