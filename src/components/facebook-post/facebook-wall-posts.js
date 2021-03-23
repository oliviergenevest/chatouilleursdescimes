import React from 'react'
import styled from 'styled-components'
import {  Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { readableColor } from 'polished'
import { Box, Flex, Button } from '../elements'
import theme from '../../config/theme'
import siteConfig from '../../config'

const Left = styled(Box)`
  text-align: left; 
`

const FacebookWallPosts = () => {
return "plop"
  /*data = useStaticQuery(query)

  return (
<h1>{data.edges.node[0].message}</h1>
  )*/
}


export default FacebookWallPosts
/*
export const query = graphql`
  query Facebook {
    facebook: allFacebookPosts(filter:{ message:{ne: null}},limit:3) {
    edges {
      node {
        message 
        created_time
        description
        story
        from {
          id
        }
        name
        picture
        object_id
        link
      }
    }
  }
  }
`*/