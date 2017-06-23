import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { AppComponent } from './app.component';
import { AuthServerService } from './shared/auth-server.service';
import { DataService } from './shared/data.service';
import { NotificationComponent } from './notification/notification.component';
import { TasksComponent } from './tasks/tasks.component';
import { EnterTimeComponent } from './enter-time/enter-time.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NotificationComponent,
        TasksComponent,
        EnterTimeComponent,
        LoginComponent,
        UserDetailsComponent       
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NguiAutoCompleteModule
       
    ],
    providers: [AuthServerService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule {}