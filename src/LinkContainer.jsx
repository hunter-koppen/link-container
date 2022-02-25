import { createElement } from "react";

import "./ui/LinkContainer.css";

export function LinkContainer({ url, content, target }) {
    return (
        <a className="link-container" href={url.value} target={target}>
            <div className="link-container-content">{content}</div>
        </a>
    );
}
