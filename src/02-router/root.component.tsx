import {C1} from "./C1.component";
import {C2} from "./C2.component";
import {Navigate} from "./navigate.hoc";
import {Link} from "./Link";

export const Root = Navigate({
    "/": C1,
    "/c2": C2
}, ({router, pages$}) => ({
    DOM: pages$.map(page => page.DOM).flatten().map(page =>
        <div selector=".container">
            <Link classNames="btn btn-outline-primary" router={router} href="">Component 1</Link>
            <Link classNames="btn btn-outline-primary" router={router} href="c2">Component 2</Link>
            <div selector=".container">{page}</div>
        </div>
    )
}));
