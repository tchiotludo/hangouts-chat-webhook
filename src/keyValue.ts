"use strict";

import { Button } from "./button";
import { OnClick } from "./onClick";
import { Icon } from "./icon";

/**
 * A UI element contains a key (label) and a value (content). And this element
 * may also contain some actions such as onclick button.
 */
export class KeyValue {
    /**
     * The text of the bottom label. Formatted text supported.
     */
    private bottomLabel?: string;

    /**
     * A button that can be clicked to trigger an action.
     */
    private button?: Button;

    /**
     * The text of the content. Formatted text supported and always required.
     */
    private content?: string;

    /**
     * If the content should be multiline.
     */
    private contentMultiline?: boolean;

    /**
     * An enum value that will be replaced by the Chat API with the
     * corresponding icon image.
     */
    private icon?: Icon;

    /**
     * The icon specified by a URL.
     */
    private iconUrl?: string;

    /**
     * The onclick action. Only the top label, bottom label and content region
     * are clickable.
     */
    private onClick?: OnClick;

    /**
     * The text of the top label. Formatted text supported.
     */
    private topLabel?: string;

    getBottomLabel(): string {
        return this.bottomLabel;
    }

    setBottomLabel(value: string): KeyValue {
        this.bottomLabel = String(value);
        return this;
    }

    getButton(): Button {
        return this.button;
    }

    setButton(value: Button): KeyValue {
        this.button = value;
        return this;
    }

    getContent(): string {
        return this.content;
    }

    setContent(value: string): KeyValue {
        this.content = String(value);
        return this;
    }

    getContentMultiline(): boolean {
        return this.contentMultiline;
    }

    setContentMultiline(value: boolean): KeyValue {
        this.contentMultiline = value;
        return this;
    }

    getIcon(): Icon {
        return this.icon;
    }

    setIcon(value: Icon): KeyValue {
        this.icon = value;
        return this;
    }

    getIconUrl(): string {
        return this.iconUrl;
    }

    setIconUrl(value: string): KeyValue {
        this.iconUrl = value;
        return this;
    }

    getOnClick(): OnClick {
        return this.onClick;
    }

    setOnClick(value: OnClick): KeyValue {
        this.onClick = value;
        return this;
    }

    getTopLabel(): string {
        return this.topLabel;
    }

    setTopLabel(value: string): KeyValue {
        this.topLabel = value;
        return this;
    }
}