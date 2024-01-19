import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrincipalPage from './pages/principal/views/principal';

export const RoutesApp = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrincipalPage />} />
            </Routes>
        </Router>
    );
}
