"use strict";

/**
 * A user in Hangouts Chat.
 */
export class User {
    /**
     * The user'#39;s display name.
     */
    private displayName?: string;

    /**
     * Resource name, in the format "users/*".
     */
    private name?: string;

    /**
     * User type.
     */
    private type?: string;

    getDisplayName(): string {
        return this.displayName;
    }

    setDisplayName(value: string): User {
        this.displayName = value;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string): User {
        this.name = value;
        return this;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string): User {
        this.type = value;
        return this;
    }
}