import { createElement } from "react";

export function LinkContainer({ url, content, target }) {
    return <a className="link-container" href={url.value} target={target}>
        <div className="link-container-content">{content}</div>
    </a>;
}
