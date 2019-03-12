import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountRoutingModule } from 'app/modules/account/account-routing.module';
import { AccountComponent } from './account.component';
import { SideNavComponent } from 'app/modules/account/side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from '../../core/services/user.service';
import {StoreModule} from '@ngrx/store';
import {authReducer} from '../../store/reducers/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../../store/effects/auth.effects';
import {AuthComponent} from './auth/auth.component';
import {SharedModule} from '../../shared/shared.module';
import {PostTaskComponent} from './post-task/post-task.component';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {MyTasksDataResolver} from '../tasks/resolver/my-tasks-resolver.service';

@NgModule({
  declarations: [
    AuthComponent,
    DashboardComponent,
    AccountComponent,
    SideNavComponent,
    ProfileComponent,
    PostTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    MatGoogleMapsAutocompleteModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [
    MatGoogleMapsAutocompleteModule,
    AuthComponent,
    DashboardComponent
  ],
  providers: [
    UserService,
    MyTasksDataResolver
  ],
  entryComponents: [AuthComponent]
})
export class AccountModule { }
