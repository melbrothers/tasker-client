import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coordinates} from '../../store/models/coordinates.model';

@Injectable({
  providedIn: 'root'
})
export class GooglePlaceService {

  constructor(private _http: HttpClient) { }

  getAddressFromLatLang(coordinates: Coordinates) {
    const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${environment.googleMapsAPIKey}`;
    return this._http.get(requestUrl);
  }
}
