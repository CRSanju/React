import Greeting from "./Greeting"
import Aboutus from "./Aboutus"
import Name from "./Name"
import Count from "./Count"
import Memo from "./Memo"
import Callback from "./Callback"

function App() {
  const fname = "Sanju"
   return (
    <div>
      <h1>Welcome to the learning of React</h1>
       <Greeting name = {fname} age = "23"/>
       <Name />
       <Count />
       <Memo />
       <Callback />
    </div>
   )
}

export default App;