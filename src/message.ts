"use strict";

import { User } from "./user";
import { Space } from "./space";
import { Thread } from "./thread";
import { ActionResponse } from "./actionResponse";
import { Card } from "./card";

/**
 * A message in Hangouts Chat.
 */
export class Message {
    /**
     * Input only. Parameters that a bot can use to configure how its response
     * is posted.
     */
    private actionResponse?: ActionResponse;

    /**
     * Plain-text body of the message with all bot mentions stripped out.
     */
    private argumentText?: string;

    /**
     * Rich, formatted and interactive cards that can be used to display UI
     * elements such as: formatted texts, buttons, clickable images. Cards are
     * normally displayed below the plain-text body of the message.
     */
    private cards?: Card[];

    /**
     * A plain-text description of the message'#39;s cards, used when the actual
     * cards cannot be displayed (e.g. mobile notifications).
     */
    private fallbackText?: string;

    /**
     * Text for generating preview chips. This text will not be displayed to the
     * user, but any links to images, web pages, videos, etc. included here will
     * generate preview chips.
     */
    private previewText?: string;

    /**
     * The user who created the message.
     */
    private sender?: User;

    /**
     * The space the message belongs to.
     */
    private space?: Space;

    /**
     * Plain-text body of the message.
     */
    private text?: string;

    /**
     * The thread the message belongs to.
     */
    private thread?: Thread;

    getActionResponse(): ActionResponse {
        return this.actionResponse;
    }

    setActionResponse(value: ActionResponse): Message {
        this.actionResponse = value;
        return this;
    }

    getArgumentText(): string {
        return this.argumentText;
    }

    setArgumentText(value: string): Message {
        this.argumentText = value;
        return this;
    }

    getCards(): Card[] {
        return this.cards;
    }

    addCard(value: Card): Message {
        if (!this.cards) {
            this.cards = [];
        }

        this.cards.push(value);
        return this;
    }

    setCards(value: Card[]): Message {
        this.cards = value;
        return this;
    }

    getFallbackText(): string {
        return this.fallbackText;
    }

    setFallbackText(value: string): Message {
        this.fallbackText = value;
        return this;
    }

    getPreviewText(): string {
        return this.previewText;
    }

    setPreviewText(value: string): Message {
        this.previewText = value;
        return this;
    }

    getSender(): User {
        return this.sender;
    }

    setSender(value: User): Message {
        this.sender = value;
        return this;
    }

    getSpace(): Space {
        return this.space;
    }

    setSpace(value: Space): Message {
        this.space = value;
        return this;
    }

    getText(): string {
        return this.text;
    }

    setText(value: string): Message {
        this.text = value;
        return this;
    }

    getThread(): Thread {
        return this.thread;
    }

    setThread(value: Thread): Message {
        this.thread = value;
        return this;
    }
}