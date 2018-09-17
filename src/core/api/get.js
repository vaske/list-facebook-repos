import { ajax } from "rxjs/observable/dom/ajax";
import { map } from "rxjs/operators";

export function get(url) {
    return ajax.get(url).pipe(
        map(response => ({
            content: response.response,
            next: next(response)
        }))
    );
}

function next(response){
    let url = null;
    const link = response.xhr.getResponseHeader("Link");
    if (link) {
        const match = link.match(/<([^>]+)>;\s*rel="next"/);
        if (match) {
            [, url] = match;
        }
    }
    return url;
}
