import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent implements OnInit {
  @Input() public playlistThubmnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @ViewChild('scrollDiv') scroll!: ElementRef;

  constructor() {}

  ngOnInit() {}

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    const delta = Math.sign(event.deltaY);
    this.scroll.nativeElement.scrollLeft += delta * 50;
  }
}
