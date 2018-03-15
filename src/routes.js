import Vue from 'vue';
import Router from 'vue-router';

import index from '@/components/index';
import SingleFileComponent from '@/components/component/SingleFileComponent';
import TemplateLayout from '@/components/template/TemplateLayout';
import ComputedAndWatchLayout from '@/components/computed-and-watch/ComputedAndWatchLayout';
import ClassAndBindLayout from '@/components/class-and-bind/ClassAndBindLayout';
import ClassLayout from '@/components/class-and-bind/ClassLayout';
import BindLayout from '@/components/class-and-bind/BindLayout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/component',
      name: 'single-file-component',
      component: SingleFileComponent
    },
    {
      path: '/template-layout',
      name: 'template-layout',
      component: TemplateLayout
    },
    {
      path: '/computed-and-watch-layout',
      name: 'computed-and-watch-layout',
      component: ComputedAndWatchLayout
    },
    {
      path: '/class-and-bind-layout',
      name: 'class-and-bind-layout',
      component: ClassAndBindLayout,
      children: [
        {
          path: 'class-layout',
          component: ClassLayout
        },
        {
          path: 'bind-layout',
          component: BindLayout
        }
      ]
    }
  ]
});
