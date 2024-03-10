import { Route,Routes } from 'react-router-dom';
import Nav from '../components/nav'
import Form from '../page/form';
function Main() {
  return (
    <>
    <Nav />
    <div>
    <Routes>        
      <Route path="/index" />
      <Route path="/form"  element={<Form />}/>
    </Routes>
    </div>
    </>
  )
}

export default Main