import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {Object.values(routes).map((route, key) => {
          const Component = route.component;
          return <Route key={key} element={<Component />} path={route.path} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
