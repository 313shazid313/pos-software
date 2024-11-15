import Login from './components/sections/Login';
import { MultiLevelSidebar } from './components/MultiLevelSidebar';

const Protected = () => {

  const isAdmin = true;

  return (

    <>{isAdmin ? <MultiLevelSidebar /> : <Login />}</>
    
  )
}

export default Protected
