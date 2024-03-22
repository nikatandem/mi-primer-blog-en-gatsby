import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
       alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
       src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
     />
     <hr/>
     <StaticImage
       alt="Un patito feliz"
       src="../images/duck-8615153_1280.jpg"
     />
    </Layout>
    

  )
}


export const Head = () => <title>Home Page</title>


export default IndexPage