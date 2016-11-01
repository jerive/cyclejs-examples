import "./../tsxSetup";

import { run } from "@cycle/xstream-run";
import { makeDOMDriver } from "@cycle/dom";

import xs from "xstream";

const main = ({ DOM }) => {
    const seconds$: xs<number> = xs.periodic(1000);
    const clicks$: xs<MouseEvent> = DOM.select(".clicker").events("click").startWith(null);

    return {
        DOM: xs.combine(seconds$, clicks$).map(([seconds, event]) =>
            <div classNames="clicker">
                <div>{seconds} seconds elapsed</div>
                <span>ClientX: {event ? event.clientX : "None"}</span><br />
                <span>ClientY: {event ? event.clientY : "None"}</span>
            </div>
        ),
    };
};

run(main, {
    DOM: makeDOMDriver("#app"),
});
