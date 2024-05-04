import { Link } from "react-router-dom"


function ErrowPage() {
  return (
    <div className="h-screen flex items-center justify-center">
       <h1>Page is Not found 404</h1>
       <br />
       <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}

export default ErrowPage
