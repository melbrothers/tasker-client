import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountRoutingModule } from 'app/modules/account/account-routing.module';
import { AccountComponent } from './account.component';
import { SideNavComponent } from 'app/modules/account/side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from '../../core/services/user.service';
import {StoreModule} from '@ngrx/store';
import {authReducer, getAuthFeatureState} from '../../store/reducers/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../../store/effects/auth.effects';
import {AuthComponent} from './auth/auth.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    MyTasksComponent,
    DashboardComponent,
    AccountComponent,
    SideNavComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [
    AuthComponent,
    DashboardComponent
  ],
  providers: [
    UserService
  ],
  entryComponents: [AuthComponent]
})
export class AccountModule { }
