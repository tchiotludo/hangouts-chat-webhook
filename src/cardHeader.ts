"use strict";

export class CardHeader {
    /**
     * The image'#39;s type (e.g. square border or circular border).
     */
    private imageStyle?: string;

    /**
     * The URL of the image in the card header.
     */
    private imageUrl?: string;

    /**
     * The subtitle of the card header.
     */
    private subtitle?: string;

    /**
     * The title must be specified. The header has a fixed height: if both a
     * title and subtitle is specified, each will take up 1 line. If only the
     * title is specified, it will take up both lines.
     */
    private title?: string;

    getImageStyle(): string {
        return this.imageStyle;
    }

    setImageStyle(value: string): CardHeader {
        this.imageStyle = value;
        return this;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    setImageUrl(value: string): CardHeader {
        this.imageUrl = value;
        return this;
    }

    getSubtitle(): string {
        return this.subtitle;
    }

    setSubtitle(value: string): CardHeader {
        this.subtitle = value;
        return this;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(value: string): CardHeader {
        this.title = value;
        return this;
    }
}