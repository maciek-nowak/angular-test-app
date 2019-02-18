import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = true;
  serverCreationStatus = 'No server created';

  constructor() { }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = 'Server created';
  }
}
