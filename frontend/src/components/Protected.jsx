import Navigation from "./Navigation"
import Login from "./ui/Login"


const Protected = () => {

  // const isAdmin = false

  const token = localStorage.getItem("token")

  console.log(token);

  return (

    <>{token ? <Navigation /> : <Login />}</>

  )
}

export default Protected
