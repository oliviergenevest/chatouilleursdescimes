import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Facebook from './facebook'
import Twitter from './twitter'

type Props = {} & typeof defaultProps

const defaultProps = {
  title: '',
  desc: '',
  banner: '',
  pathname: '',
  node: {
    modifiedTime: '',
    birthTime: '',
  },
  individual: false,
}

const SEO = ({ title, desc, banner, pathname, node, individual }: Props) => {
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2019-03-10T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Accueil',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/contact`,
        name: 'Contact',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/packs`,
        name: 'Nos formules',
      },
      position: 3,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/infos-pratiques`,
        name: 'Infos pratiques',
      },
      position: 4,
    },
  ]

  let schemaArticle = null

  if (individual) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${defaultBanner}`,
        },
      },
      datePublished: node ? node.birthTime : '2019-03-10T10:30:00+01:00',
      dateModified: node ? node.modifiedTime : '2019-03-10T10:30:00+01:00',
      description: seo.description,
      headline: seo.title,
      inLanguage: 'fr',
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 5,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!individual && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {individual && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
    {/*    <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={individual ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    </>
  )
}

export default SEO

SEO.defaultProps = defaultProps

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "DD-MM-YYYY")
      siteMetadata {
        siteUrl
        defaultTitle: titleAlt
        defaultDescription: description
        defaultBanner: logo
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`
