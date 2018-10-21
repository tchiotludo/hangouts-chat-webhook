"use strict";

import { OnClick } from "./onClick";

/**
 * An image that is specified by a URL and can have an onclick action.
 */
export class Image {
    /**
     * The aspect ratio of this image (width/height).
     */
    private aspectRatio?: number;

    /**
     * The URL of the image.
     */
    private imageUrl?: string;

    /**
     * The onclick action.
     */
    private onClick?: OnClick;

    getAspectRatio(): number {
        return this.aspectRatio;
    }

    setAspectRatio(value: number): Image {
        this.aspectRatio = value;
        return this;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    setImageUrl(value: string): Image {
        this.imageUrl = value;
        return this;
    }

    getOnClick(): OnClick {
        return this.onClick;
    }

    setOnClick(value: OnClick): Image {
        this.onClick = value;
        return this;
    }
}