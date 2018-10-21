"use strict";

import { OnClick } from "./onClick";

/**
 * An image button with an onclick action.
 */
export class ImageButton {
    /**
     * The icon specified by an enum that indices to an icon provided by Chat
     * API.
     */
    private icon?: string;

    /**
     * The icon specified by a URL.
     */
    private iconUrl?: string;

    /**
     * The name of this image_button which will be used for accessibility.
     * Default value will be provided if developers don'#39;t specify.
     */
    private name?: string;

    /**
     * The onclick action.
     */
    private onClick?: OnClick;

    getIcon(): string {
        return this.icon;
    }

    setIcon(value: string): ImageButton {
        this.icon = value;
        return this;
    }

    getIconUrl(): string {
        return this.iconUrl;
    }

    setIconUrl(value: string): ImageButton {
        this.iconUrl = value;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string): ImageButton {
        this.name = value;
        return this;
    }

    getOnClick(): OnClick {
        return this.onClick;
    }

    setOnClick(value: OnClick): ImageButton {
        this.onClick = value;
        return this;
    }
}