import { ThemeProvider, StyleReset } from "react-atomize";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './AOS';
import theme from './theme';

import Container from './components/Container';
import Navbar from './components/Navbar';
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <StyleReset />

        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <Router>
          <Navbar />
          <Container>
            <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products/new-product' component={NewProduct} />
            <Route exact path='/products/edit/:id' component={EditProduct} />
            </Switch>
          </Container>
        </Router>
        
      </StyletronProvider>
    </ThemeProvider>
  );
}

export default App;
