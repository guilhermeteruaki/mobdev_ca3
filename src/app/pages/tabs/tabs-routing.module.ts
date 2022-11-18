import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
          }
        ]
      },
      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          }
        ]
      },
      {
        path: 'death-count',
        children: [
          {
            path: '',
            loadChildren: () => import('../death-count/death-count.module').then( m => m.DeathCountPageModule)
          }
        ]
      },
      {
        path: 'episode',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          }
        ]
      },
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
