"use strict";

import { User } from "./user";

/**
 * Annotation metadata for user mentions (@).
 */
export class UserMentionMetadata {
    /**
     * The type of user mention.
     */
    private type?: string;

    /**
     * The user mentioned.
     */
    private user?: User;

    getType(): string {
        return this.type;
    }

    setType(value: string): UserMentionMetadata {
        this.type = value;
        return this;
    }

    getUser(): User {
        return this.user;
    }

    setUser(value: User): UserMentionMetadata {
        this.user = value;
        return this;
    }
}