//import page from '//unpkg.com/page/page.mjs';
import { html, render } from './dom.js';
import { collectionList } from './editor/collection.js';
import { recordTable } from './editor/record.js';


function start() {
    const main = document.querySelector('main');
    editor(main);
}

async function editor(main) {
    let list = html`<div class="col">Loading&hellip;</div>`;
    let viewer = html`<div class="col">Select collection to view records</div>`;
    display();

    list = html`<div class="col">${await collectionList(onSelect)}</div>`;
    display();

    async function display() { 
        render(html`
        <section class="layout">
            ${list}
            ${viewer}
        </section>`, main);
    }

    async function onSelect(name) {
        viewer = html`<div class="col">${await recordTable(name)}</div>`;
        display();
    }
}

start();