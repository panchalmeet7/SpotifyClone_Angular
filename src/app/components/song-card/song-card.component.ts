import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent implements OnInit {
  @Input() public playlistThubmnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @ViewChild('abc') scroll!: ElementRef;
  @ViewChild('abcd') scrolls!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    const delta = Math.sign(event.deltaY);
    this.scroll.nativeElement.scrollLeft += delta * 50;
    this.scrolls.nativeElement.scrollLeft += delta * 50;
  }
}
