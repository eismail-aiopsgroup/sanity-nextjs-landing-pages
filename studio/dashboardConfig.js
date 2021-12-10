export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61b3091463cfc0e4bec7a153',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j919pmk7',
                  apiId: 'c2cbf66a-42bb-424b-92e9-36a3182fb267'
                },
                {
                  buildHookId: '61b30915de7b69d104061dbb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y6m68i4x',
                  apiId: '324a10de-044b-4cee-9d53-89a8f7f048b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eismail-aiopsgroup/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y6m68i4x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
