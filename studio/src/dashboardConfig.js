export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e85e5544041f52b9b0ea1d4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zrqwbod1',
                  apiId: 'ab9ed94d-b383-48c3-9808-34c1b4a54ff1'
                },
                {
                  buildHookId: '5e85e554b140abbec58ce498',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-y135cu87',
                  apiId: '4990b4fc-86a0-40f3-99bd-f4b61db1b2f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vittorbraga/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-y135cu87.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
