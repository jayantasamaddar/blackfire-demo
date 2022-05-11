import { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Layout } from './components';
import { Home, HealthReport } from './pages';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/health-report"
          element={
            <Layout>
              <HealthReport />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
