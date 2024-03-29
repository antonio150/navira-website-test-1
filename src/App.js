import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
    <Router>
      <link href='https://fonts.googleapis.com/css?family=Goldman' rel='stylesheet'></link>
      <GlobalStyle />
      <ScrollToTop />
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
     </Switch>

     <Footer />
    </Router>
  );
}

export default App;
