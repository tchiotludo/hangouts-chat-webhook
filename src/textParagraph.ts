"use strict";

/**
 * A paragraph of text. Formatted text supported.
 */
export class TextParagraph {
    private text?: string;

    getText(): string {
        return this.text;
    }

    setText(value: string): TextParagraph {
        this.text = value;
        return this;
    }
}