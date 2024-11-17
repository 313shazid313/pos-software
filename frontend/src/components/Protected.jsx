import Navigation from "./Navigation"
import Login from "./ui/Login"


const Protected = () => {

  const isAdmin = true


  return (

    <>{isAdmin ? <Navigation /> : <Login />}</>
    
  )
}

export default Protected
