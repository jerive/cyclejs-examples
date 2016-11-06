export const Link = (props, children) => {
    const href = props.router.createHref(props.href);
    return <a
        classNames={props.classNames}
        href={href}
        class={{active: true }}
    >{children}</a>;
};