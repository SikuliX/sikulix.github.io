
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','c84'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','8bd'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','65f'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8fd'),
  exact: true,
},
{
  path: '/docs/api/appclass',
  component: ComponentCreator('/docs/api/appclass','79d'),
  exact: true,
},
{
  path: '/docs/api/finder',
  component: ComponentCreator('/docs/api/finder','5b3'),
  exact: true,
},
{
  path: '/docs/api/global',
  component: ComponentCreator('/docs/api/global','3ea'),
  exact: true,
},
{
  path: '/docs/api/interacting',
  component: ComponentCreator('/docs/api/interacting','05e'),
  exact: true,
},
{
  path: '/docs/api/keys',
  component: ComponentCreator('/docs/api/keys','706'),
  exact: true,
},
{
  path: '/docs/api/location',
  component: ComponentCreator('/docs/api/location','d9d'),
  exact: true,
},
{
  path: '/docs/api/match',
  component: ComponentCreator('/docs/api/match','d34'),
  exact: true,
},
{
  path: '/docs/api/ocr',
  component: ComponentCreator('/docs/api/ocr','15d'),
  exact: true,
},
{
  path: '/docs/api/pattern',
  component: ComponentCreator('/docs/api/pattern','17f'),
  exact: true,
},
{
  path: '/docs/api/region',
  component: ComponentCreator('/docs/api/region','01a'),
  exact: true,
},
{
  path: '/docs/api/screen',
  component: ComponentCreator('/docs/api/screen','020'),
  exact: true,
},
{
  path: '/docs/api/scripting',
  component: ComponentCreator('/docs/api/scripting','668'),
  exact: true,
},
{
  path: '/docs/contribution',
  component: ComponentCreator('/docs/contribution','7c7'),
  exact: true,
},
{
  path: '/docs/faq',
  component: ComponentCreator('/docs/faq','e60'),
  exact: true,
},
{
  path: '/docs/ide/ide',
  component: ComponentCreator('/docs/ide/ide','4a1'),
  exact: true,
},
{
  path: '/docs/installation',
  component: ComponentCreator('/docs/installation','b2a'),
  exact: true,
},
{
  path: '/docs/questions',
  component: ComponentCreator('/docs/questions','fe3'),
  exact: true,
},
{
  path: '/docs/scripts/about-scripts',
  component: ComponentCreator('/docs/scripts/about-scripts','0e0'),
  exact: true,
},
{
  path: '/docs/scripts/java',
  component: ComponentCreator('/docs/scripts/java','9e2'),
  exact: true,
},
{
  path: '/docs/scripts/js',
  component: ComponentCreator('/docs/scripts/js','57c'),
  exact: true,
},
{
  path: '/docs/scripts/python',
  component: ComponentCreator('/docs/scripts/python','502'),
  exact: true,
},
{
  path: '/docs/scripts/robotframework',
  component: ComponentCreator('/docs/scripts/robotframework','de1'),
  exact: true,
},
{
  path: '/docs/scripts/running-scripts',
  component: ComponentCreator('/docs/scripts/running-scripts','b16'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
