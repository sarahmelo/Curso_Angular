import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Injectable()
export class PhotoListResolve implements Resolve <Observable<Photo[]>>{

  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

    const userName = route.params.userName;
    return this.photoService.listFromUserForPage(userName, 1)
  }
}
