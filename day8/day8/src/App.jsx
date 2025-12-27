import MObile,{Acwo, Apple, Boat, Galaxy, One, Oneplus, Truke} from "./components/mobile"

function App() {
  

  return (
         

    
    <div>
        <div className="products-container">
      <MObile></MObile>
      <Galaxy></Galaxy>
      <Oneplus></Oneplus>
      <Apple></Apple>
      </div>
      <div className="products-container1">
        <Truke></Truke>
        <Boat></Boat>
        <One></One>
        <Acwo></Acwo>
      </div>
    </div>
      
  
  )
}

export default App
