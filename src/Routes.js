import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrincipalPage from './pages/principal/views/principal';

export const RoutesApp = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrincipalPage />} />
                <Route path="/principal" element={<PrincipalPage />} />
            </Routes>
        </Router>
    );
}
