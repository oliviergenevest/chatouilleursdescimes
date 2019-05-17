import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import {  Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { readableColor } from 'polished'
import { Box, Flex, Button } from '../../elements'
import theme from '../../../config/theme'
import siteConfig from '../../../config'

const Left = styled(Box)`
  text-align: left; 
`

const ImageWrapper = styled.div`
  width:100%;
  overflow:hidden;
`

const FacebookWallPosts = () => {

  const data = useStaticQuery(query)
console.log(data)
  return (
    <Box 
     px={[2,6, 6, 8, 10]}
     pb={[2]}
    >

      <p>{data.allFacebookPosts.edges[0].node.message}</p>
      <ImageWrapper><img width="100%" src={ `https://graph.facebook.com/${data.allFacebookPosts.edges[0].node.object_id}/picture/?type=normal`}/></ImageWrapper>
      <p>Publié le : <Moment format="DD/MM/YYYY">
                     {data.allFacebookPosts.edges[0].node.created_time}
                  </Moment></p>

    </Box>
  )
}


export default FacebookWallPosts

export const query = graphql`
  query FacebookQuery {
     allFacebookPosts(filter:{ message:{ne: null}},sort: { fields: [created_time], order: [DESC] }limit:3) {
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
`