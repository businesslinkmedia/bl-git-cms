const { BLOG_URL, POSTS_URL } = process.env

module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/articles',
          destination: `${BLOG_URL}/articles`,
        },        
        {
          source: '/articles/:path*',
          destination: `${BLOG_URL}/articles/:path*`,
        },        {
          source: '/posts',
          destination: `${POSTS_URL}/posts`,
        },        
        {
          source: '/posts/:path*',
          destination: `${POSTS_URL}/posts/:path*`,
        },
      ]
    }
  },
  images: {
    //enter the domain or subdomain where you have WordPress installed 
    domains: ['businesslinkmedia.com', 'kavehhaddadian.files.wordpress.com', 'localhost:3005', 'wordpress.com'],
  },
}
