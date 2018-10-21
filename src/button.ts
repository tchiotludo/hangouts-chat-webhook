"use strict";

import { ImageButton } from "./imageButton";
import { TextButton } from "./textButton";

/**
 * A button. Can be a text button or an image button.
 */
export class Button {
    /**
     * A button with image and onclick action.
     */
    private imageButton?: ImageButton;

    /**
     * A button with text and onclick action.
     */
    private textButton?: TextButton;

    getImageButton(): ImageButton {
        return this.imageButton;
    }

    setImageButton(value: ImageButton): Button {
        this.imageButton = value;
        return this;
    }

    getTextButton(): TextButton {
        return this.textButton;
    }

    setTextButton(value: TextButton): Button {
        this.textButton = value;
        return this;
    }
}