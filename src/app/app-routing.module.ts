import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/components/add-todo/add-todo.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'add',
    component: AddTodoComponent
  },
  {
    path: '**',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
