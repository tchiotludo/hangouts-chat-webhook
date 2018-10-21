"use strict";

export class Space {
    /**
     * Output only. The display name (only if the space is a room).
     */
    private displayName?: string;

    /**
     * Resource name of the space, in the form "spaces/*".  Example:
     * spaces/AAAAMpdlehYs
     */
    private name?: string;

    /**
     * Output only. The type of a space.
     */
    private type?: string;

    getDisplayName(): string {
        return this.displayName;
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }
}