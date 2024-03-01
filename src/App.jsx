import './App.css'
import RandomUser from './RandomUser'

function App() {

  return (
    <>
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center '>
        <div style={{width:'700px',height:'600px'}} className='bg-light border rounded-5  '>
        <RandomUser/>
        </div>
     </div>
    </>
  )
}

export default App
