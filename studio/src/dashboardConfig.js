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
                  buildHookId: '5fcf4db81b4b07a844e9229b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zun8o4vw',
                  apiId: '029c7f7c-0c3c-4d8d-9a18-534483f0894c'
                },
                {
                  buildHookId: '5fcf4db81b4b07b1e2e91093',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-npoxfsmm',
                  apiId: '02b5fe93-d0e4-46f2-8b16-5e3e6f15dc05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chorakchi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-npoxfsmm.netlify.app', category: 'apps' }
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
