"use strict";

import { OnClick } from "./onClick";

/**
 * A button with text and onclick action.
 */
export class TextButton {
    /**
     * The onclick action of the button.
     */
    private onClick?: OnClick;

    /**
     * The text of the button.
     */
    private text?: string;

    getOnClick(): OnClick {
        return this.onClick;
    }

    setOnClick(value: OnClick): TextButton {
        this.onClick = value;
        return this;
    }

    getText(): string {
        return this.text;
    }

    setText(value: string): TextButton {
        this.text = value;
        return this;
    }
}