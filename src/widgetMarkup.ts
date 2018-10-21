"use strict";

import { Button } from "./button";
import { TextParagraph } from "./textParagraph";
import { Image } from "./image";
import { KeyValue } from "./keyValue";

/**
 * A widget is a UI element that presents texts, images, etc.
 */
export class WidgetMarkup {
    /**
     * A list of buttons. Buttons is also oneof data and only one of these
     * fields should be set.
     */
    private buttons?: Button[];

    /**
     * Display an image in this widget.
     */
    private image?: Image;

    /**
     * Display a key value item in this widget.
     */
    private keyValue?: KeyValue;

    /**
     * Display a text paragraph in this widget.
     */
    private textParagraph?: TextParagraph;

    getButtons(): Button[] {
        return this.buttons;
    }

    addButton(value: Button): WidgetMarkup {
        if (!this.buttons) {
            this.buttons = [];
        }

        this.buttons.push(value);
        return this;
    }

    setButtons(value: Button[]): WidgetMarkup {
        this.buttons = value;
        return this;
    }

    getImage(): Image {
        return this.image;
    }

    setImage(value: Image): WidgetMarkup {
        this.image = value;
        return this;
    }

    getKeyValue(): KeyValue {
        return this.keyValue;
    }

    setKeyValue(value: KeyValue): WidgetMarkup {
        this.keyValue = value;
        return this;
    }

    getTextParagraph(): TextParagraph {
        return this.textParagraph;
    }

    setTextParagraph(value: TextParagraph): WidgetMarkup {
        this.textParagraph = value;
        return this;
    }
}