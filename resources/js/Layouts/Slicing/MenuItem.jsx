import { Link } from "@inertiajs/inertia-react";
export default function MenuItem({href, icon, name, isActive, method = 'get'}) {
    return (
        <Link 
            href={href && route(href)} 
            className={`side-link ${isActive && 'active'}`}
            method={method}
            as='button'
            >
            {icon}
            {name}
        </Link>
    );
}