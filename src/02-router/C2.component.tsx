import xs from "xstream";
import {Navigate} from "./navigate.hoc";
import {C21} from "./C21.component";
import {C22} from "./C22.component";

export const C2 = Navigate({
    "/": C21,
    "/c22": C22
}, ({DOM, router, pages$}) => ({
    DOM: pages$.map(page => page.DOM).flatten().map(page =>
        <div>Component 2<br />
            <a classNames="btn btn-outline-primary" href={router.createHref("/")}>Component 2-1</a>
            <a classNames="btn btn-outline-primary" href={router.createHref("/c22")}>Component 2-2</a>
            <div selector=".container">
                {page}
            </div>
        </div>
    )})
);
