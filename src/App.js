import React, { useState }from 'react'
import Axios from 'axios'
import Dog from './components/Dog.jsx'
import { Button, Typography, CssBaseline, Container,} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';




// URL =  "https://dog.ceo/api/breeds/image/random";



function App() {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(true);

  const getImage = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response);
      setImage(response.data.message);
      setLoading(false);
    })
  }

  return (
    <Router>
    <div>
      <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Container className="container" maxWidth="md">
              <Button
                variant="contained"
                color="secondary"
                className="button"
                endIcon={<SearchIcon />}
                onClick={getImage}
              > 
                <Typography className="text">Generate Image</Typography>
              </Button>
            </Container>
            { loading ? <Typography className="text heroText" variant="h6"  color="textPrimary">Click the button above to see images of dogs</Typography> : <Dog image={image}/>}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App

