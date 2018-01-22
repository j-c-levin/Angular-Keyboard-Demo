import { AreaPressed } from './area-pressed';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text = '';
  highlightBoxTop = '145';
  highlightBoxLeft = '13';
  isBoxHidden = true;

  onAreaPressed(value: AreaPressed) {
    console.log(value);
    if (value.key === 'BACKSPACE') {
      this.text = this.text.slice(0, this.text.length - 1);
    } else {
      this.text += value.key;
    }

    this.highlightBoxLeft = `${value.left}`;
    this.highlightBoxTop = `${value.top - 5}`;
    this.isBoxHidden = false;
    setTimeout(() => {
      this.isBoxHidden = true;
    }, 100);
  }
}
