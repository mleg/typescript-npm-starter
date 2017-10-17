import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';

const button = document.querySelector('button');

function showCount(count: number) {
    (button as HTMLElement).innerText = `Button (clicked ${count})`;
}

if (button) {
    Observable.fromEvent(button, 'click')
        .scan((count: number) => count + 1, 0)
        .subscribe(showCount);
}
