import { Route,Routes,Navigate } from 'react-router-dom'
import LoginPage from '../src/page/login';
import IndexPage from '../src/page/index';
import Form from '../src/page/form';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/index" element={<IndexPage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}
export default App;