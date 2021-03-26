import { Component, OnInit } from '@angular/core';
import { Headers } from '@angular/http';
import {AuthService} from '../services/auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {
  private response=null;

  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {
    let headers = new Headers({'Authorization': this.authService.getAuthorizationHeaderValue()});

    this.http.get("http://localhost/4200/api", { headers: headers}).subscribe(response => this.response = response);
  }

}
