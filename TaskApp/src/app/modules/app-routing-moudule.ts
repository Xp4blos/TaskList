import {NgModule} from '@angular/core';   
import {Routes} from '@angular/router';
import{RouterModule} from '@angular/router'
import { UserListComponent } from '../user-list/user-list.component';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { NewTaskComponent } from '../tasks/task-list/new-task/new-task.component';
import { NewUserComponent } from '../user-list/new-user/new-user.component';
import { TaskEditComponent } from '../tasks/task-edit/edit.component';
import { EditUserComponent } from '../user-list/edit-user/edit-user.component';
import { TaskMoveComponent } from '../tasks/task-move/task-move.component';
import { TreeComponent } from '../tree/tree.component';
import { KategoriesComponent } from '../kategories/kategories.component';
import { TaskDetailComponent } from '../tasks/task-detail/task-detail.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/list',pathMatch:'full'},
	{path: 'list', component: UserListComponent}, 
	{path: 'list/:id', component: TaskListComponent},
	{path: 'list/:id/edit/:task', component: TaskEditComponent},
	{path: 'list/:id/new', component: NewTaskComponent},
	{path: 'add', component: NewUserComponent},
	{path:'edit/:id',component: EditUserComponent},
	{path: 'move/:id/task/:task',component: TaskMoveComponent},
	{path: 'tree',component:TreeComponent},
	{path: 'kategories/:id',component: KategoriesComponent},
	{path: 'list/:id/details/:taskId', component: TaskDetailComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule{
}