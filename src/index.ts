import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

function clickHandler() {
    let counter = 0;
    return function handleClick(event: MouseEvent) {
        counter += 1;
        const btn = event.target as HTMLElement;
        btn.innerText = `Button (clicked ${counter})`;
    };
}

const button = document.querySelector('button');
if (button) {
    Observable.fromEvent(button, 'click').subscribe(clickHandler());
}
