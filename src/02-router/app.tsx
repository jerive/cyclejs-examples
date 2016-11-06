import "./../tsxSetup";

import { run } from "@cycle/xstream-run";
import { makeDOMDriver } from "@cycle/dom";

import { makeRouterDriver } from "cyclic-router";
import { createHistory } from "history";
import switchPath from "switch-path";
import xs from "xstream";

import {Root} from "./root.component";

const main = Root;

run(main, {
    router: makeRouterDriver(createHistory(), switchPath),
    DOM: makeDOMDriver("#app"),
});
