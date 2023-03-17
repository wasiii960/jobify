import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Dashboard,Landing,Register,Error} from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route
          path="/landing"
          exact
          element={
            <div>
              <Landing />
            </div>
          }
        />
        <Route path="*" exact element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
