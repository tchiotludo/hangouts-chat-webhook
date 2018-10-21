"use strict";

/**
 * A link that opens a new window.
 */
export class OpenLink {
    /**
     * The URL to open.
     */
    private url?: string;

    getUrl(): string {
        return this.url;
    }

    setUrl(value: string): OpenLink {
        this.url = value;
        return this;
    }
}