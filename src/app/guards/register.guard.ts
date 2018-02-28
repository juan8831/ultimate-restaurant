import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SettingsService} from '../services/settings.service';
import { Settings } from '../models/Settings';


@Injectable()
export class RegisterGuard implements CanActivate{
    constructor(
        private router: Router,
        private settingService: SettingsService
    )
    {}

    canActivate(): boolean {
        if(this.settingService.getSettings().allowRegistration){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }

        
    }
}