"use strict";

/**
 * A thread in Hangouts Chat.
 */
export class Thread {
    /**
     * Resource name, in the form "spaces/x/threads/*".  Example:
     * spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
     */
    private name?: string;

    getName(): string {
        return this.name;
    }

    setName(value: string): Thread {
        this.name = value;
        return this;
    }
}