import React from 'react'
import { Typography, CssBaseline, Container,} from '@material-ui/core'



const About = () => {
    return (
        <div className="aboutSection">
            <CssBaseline />
            <Container maxWidth="sm">
                <h1 className="aboutHeader"> About The App</h1>
                {/* <p className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt quo molestiae nemo error alias ipsa, officiis aspernatur blanditiis pariatur, aliquam rem quaerat exercitationem excepturi. Praesentium, ad quam illo animi magnam fuga asperiores voluptatum pariatur officiis incidunt, laboriosam deserunt numquam.</p> */}
                {/* <Typography variant="h3" color="textPrimary" className="aboutHeader">About The App</Typography> */}
                <Typography className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt quo molestiae nemo error alias ipsa, officiis aspernatur blanditiis pariatur, aliquam rem quaerat exercitationem excepturi. Praesentium, ad quam illo animi magnam fuga asperiores voluptatum pariatur officiis incidunt, laboriosam deserunt numquam.</Typography>
            </Container>
        </div>
    )
}

export default About
