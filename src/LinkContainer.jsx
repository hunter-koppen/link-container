import { createElement } from "react";

import "./ui/LinkContainer.css";

export function LinkContainer({ url, content, target }) {
    const handleClick = e => {
        e.stopPropagation();
    };

    return (
        <a className="link-container" href={url.value} target={target} onclick={handleClick}>
            <div className="link-container-content">{content}</div>
        </a>
    );
}
