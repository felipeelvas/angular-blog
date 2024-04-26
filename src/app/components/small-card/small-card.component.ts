import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input()
  imageCover: string = ""
  @Input()
  cardTitle: string=""
  @Input()
  Id:string= "0"

  constructor(){}
  ngOnInit(): void {

  }

}
