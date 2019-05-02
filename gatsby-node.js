// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const packTemplate = require.resolve('./src/templates/pack.tsx')

  const result = await wrapper(
    graphql(`
      {
        packs: allPacksYaml {
          edges {
            node {
              slug
              images
            }
          }
        }
      }
    `)
  )

  result.data.packs.edges.forEach(edge => {
    createPage({
      path: `/packs${edge.node.slug}`,
      component: packTemplate,
      context: {
        slug: edge.node.slug,
        images: `/${edge.node.images}/`,
      }
    })
  })
}