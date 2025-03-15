import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Pizza, Recipes } from '../models/pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }


}
