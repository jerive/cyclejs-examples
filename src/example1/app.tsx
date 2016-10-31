import "./../tsxSetup";

import { run } from "@cycle/xstream-run";
import { makeDOMDriver } from "@cycle/dom";

import xs from "xstream";

const main = ({DOM}) => {
    const seconds$: xs<number> = xs.periodic(1000);
    const clicks$: xs<MouseEvent> = DOM.select(".clicker").events("click").startWith(null);

    return {
        DOM: xs.combine(seconds$, clicks$).map(([seconds, e]) =>
            <div classNames="clicker">
                <div>{seconds} seconds elapsed</div>
                <span>ClientX: {e ? e.clientX : "None"}</span><br />
                <span>ClientY: {e ? e.clientY : "None"}</span>
            </div>
        ),
    };
};

run(main, {
    DOM: makeDOMDriver("#app"),
});
