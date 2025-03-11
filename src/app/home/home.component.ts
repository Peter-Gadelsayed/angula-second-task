import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Pizza, Recipes } from '../models/pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
