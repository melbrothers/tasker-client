import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  // @Input() color: string;
  // @Input() mode: string;
  // @Input() value: number;
  // @Input() strokeWidth: number;
  // @Input() diameter: number;
  @Input() isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
