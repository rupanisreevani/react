// import { Counterapp } from "./components/counterapp"
// import { EventBinding } from "./components/eventBinding

import { Props } from "./props/props"

function App() {
  

  return (
    <>
      {/* <EventBinding></EventBinding> */}
      {/* <Counterapp></Counterapp> */}
      <Props eid="1234" ename="sai" esalary={25000}edepartment="python" eemail="sai123@gmail.com"></Props>
      <Props eid="1235" ename="saisree" esalary={25000}edepartment="python" eemail="saisree123@gmail.com"></Props>
      
    </>
  )
}

export default App
