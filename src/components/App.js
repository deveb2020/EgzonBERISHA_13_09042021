import '../style/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './HomePage';
import Navbar from './HomePageNavbar'
import Footer from './HomePageFooter'
import LoginPage from './LoginPage';
import ProfilPage from './ProfilPage';



function App() {

    


    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/" component={Homepage} />
                    <Route exact pathe="/profil" component={ProfilPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
