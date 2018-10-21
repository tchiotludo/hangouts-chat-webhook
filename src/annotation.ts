"use strict";

import { UserMentionMetadata } from "./userMentionMetadata";

/**
 * Annotations associated with the plain-text body of the message.  Example
 * plain-text message body: ``` Hello @FooBot how are you!" ```  The
 * corresponding annotations metadata: ``` "annotations":[{
 * "type":"USER_MENTION",   "startIndex":6,
 * "length":7,   "userMention": {     "user": {
 * "name":"users/107946847022116401880",
 * "displayName":"FooBot",
 * "avatarUrl":"https://goo.gl/aeDtrS",
 * "type":"BOT"     },
 * "type":"MENTION"    } }] ```
 */
export class Annotation {
    /**
     * Length of the substring in the plain-text message body this annotation
     * corresponds to.
     */
    private length?: number;

    /**
     * Start index (0-based, inclusive) in the plain-text message body this
     * annotation corresponds to.
     */
    private startIndex?: number;

    /**
     * The type of this annotation.
     */
    private type?: string;

    /**
     * The metadata of user mention.
     */
    private userMention?: UserMentionMetadata;

    getLength(): number {
        return this.length;
    }

    setLength(value: number): Annotation {
        this.length = value;
        return this;
    }

    getStartIndex(): number {
        return this.startIndex;
    }

    setStartIndex(value: number): Annotation {
        this.startIndex = value;
        return this;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string): Annotation {
        this.type = value;
        return this;
    }

    getUserMention(): UserMentionMetadata {
        return this.userMention;
    }

    setUserMention(value: UserMentionMetadata): Annotation {
        this.userMention = value;
        return this;
    }
}