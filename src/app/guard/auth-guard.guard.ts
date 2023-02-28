import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SparkService } from '../service/spark.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private api:SparkService,private router: Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :any{
      if(this.api.isLoggedInAdmin()) {
        return true;
      } else {
        this.router.navigate([''])
        this.toastr.warning('You must login first')
      }
    
  }
  
}
