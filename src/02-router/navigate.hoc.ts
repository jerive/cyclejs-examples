import xs from "xstream";

export const Navigate = (routes, Component, routerKey = "router", domKey = "DOM") => {
    return sources => {
        sources.pages$ = sources[routerKey].define(routes).map(({value, path}) => {
            return value(Object.assign({}, sources, {
                router: sources[routerKey].path(path)
            }));
        });

        const subPath$ = sources.pages$.map(page => page[routerKey]).filter(x => !!x).flatten();
        const path$ = sources[domKey].select("a").events("click").map(e => {
            e.preventDefault();
            return (e.currentTarget as HTMLAnchorElement).pathname;
        });

        const sinks = Component(sources);

        sinks.router = xs.merge(path$, subPath$);

        return sinks;
    };
};
