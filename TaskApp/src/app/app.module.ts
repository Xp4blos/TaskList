import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListElementComponent } from './user-list/user-list-element/user-list-element.component';
import { AppRoutingModule } from './modules/app-routing-moudule';
import { TaskListComponent } from './tasks/task-list/task-list.component';

import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './tasks/task-list/new-task/new-task.component';
import { TaskListItemComponent } from './tasks/task-list/task-list-item/task-list-item.component';
import { NewKatComponent } from './tasks/task-list/new-task/new-kat/new-kat.component';
import { NewUserComponent } from './user-list/new-user/new-user.component';
import { TaskEditComponent } from './tasks/task-edit/edit.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { TaskMoveComponent } from './tasks/task-move/task-move.component';
import { YellowHlDirective } from './shared/yellow-hl.directive';
import { FilterPipePipe } from './shared/filter-pipe.pipe';
import { TreeComponent } from './tree/tree.component';
import { KategoriesComponent } from './kategories/kategories.component';
import { DataStorageService } from './services/data-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserListElementComponent,
    TaskListComponent,
    TaskListItemComponent,
    NewTaskComponent,
    NewKatComponent,
    NewUserComponent,
    TaskEditComponent,
    EditUserComponent,
    TaskMoveComponent,
    YellowHlDirective,
    FilterPipePipe,
    TreeComponent,
    KategoriesComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
