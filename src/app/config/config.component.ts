import { Component, OnInit } from '@angular/core';
import {ConfigService} from './config.service';
import {Config} from './config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  private error: any;
  private headers: string[];
  private config: Config;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
  }

  showConfig1() {
    this.configService.getConfig().subscribe((data: Config) => this.config = {
      heroesUrl: data['heroesUrl'],
      textfile: data['textfile']
    });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }

}
