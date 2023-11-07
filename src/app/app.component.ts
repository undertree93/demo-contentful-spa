import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentful-spa';
  data: any;
  severity: string ='';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.data = data[0].fields.objectsReference[0].fields.englishContent;
      this.severity = data[0].fields.objectsReference[0].fields.severity;

    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/api.json');
  }
}
