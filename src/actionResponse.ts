"use strict";

/**
 * Parameters that a bot can use to configure how it'#39;s response is posted.
 */
export class ActionResponse {
    /**
     * The type of bot response.
     */
    private type?: string;

    /**
     * URL for users to auth or config. (Only for REQUEST_CONFIG response
     * types.)
     */
    private url?: string;

    getType(): string {
        return this.type;
    }

    setType(value: string): ActionResponse {
        this.type = value;
        return this;
    }

    getUrl(): string {
        return this.url;
    }

    setUrl(value: string): ActionResponse {
        this.url = value;
        return this;
    }
}