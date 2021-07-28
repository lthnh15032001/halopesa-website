const path = require(`path`)
// const GetAllBlog  = require('./src/hooks/use-site-metadata')
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
    return graphql(`
        query SITE_METADATA_QUERY {
            allMdx {
                nodes {
                    frontmatter {
                    title
                    date
                    category
                    description
                    }
                    slug
                    timeToRead
                    mdxAST
                }
            }
        }  
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }
        console.log(result)
        result.data.allMdx.nodes.forEach(edge => {
            createPage({
                path: `/blog/${edge.slug}`,
                component: blogPostTemplate,
                context: {
                    title: edge.frontmatter.title,
                    date: edge.frontmatter.date,
                    category: edge.frontmatter.category,
                    description: edge.frontmatter.description,
                    image: edge.frontmatter.image,
                    mdxAST: edge.mdxAST,
                    timeToRead: edge.timeToRead
                },
            })
        })

    })


}