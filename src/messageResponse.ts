"use strict";

import { Message } from "./message";
import { Annotation } from "./annotation";

export class MessageResponse extends Message {
    /**
     * Output only. Annotations associated with the text in this message.
     */
    private readonly annotations?: Annotation[];

    /**
     * Output only. The time at which the message was created in Hangouts Chat
     * server.
     */
    private readonly createTime?: string;

    /**
     * Resource name, in the form "spaces/x/messages/*".  Example:
     * spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
     */
    private name?: string;

    getAnnotations(): Annotation[] {
        return this.annotations;
    }

    getCreateTime(): string {
        return this.createTime;
    }

    getName(): string {
        return this.name;
    }
}