"use strict";

import { CardAction } from "./cardAction";
import { CardHeader } from "./cardHeader";
import { Section } from "./section";

/**
 * A card is a UI element that can contain UI widgets such as texts, images.
 */
export class Card {
    /**
     * The actions of this card.
     */
    private cardActions?: CardAction[];

    /**
     * The header of the card. A header usually contains a title and an image.
     */
    private header?: CardHeader;

    /**
     * Name of the card.
     */
    private name?: string;

    /**
     * Sections are separated by a line divider.
     */
    private sections?: Section[];

    getCardActions(): CardAction[] {
        return this.cardActions;
    }

    addCardAction(value: CardAction): Card {
        if (!this.cardActions) {
            this.cardActions = [];
        }

        this.cardActions.push(value);
        return this;
    }

    setCardActions(value: CardAction[]): Card {
        this.cardActions = value;
        return this;
    }

    getHeader(): CardHeader {
        return this.header;
    }

    setHeader(value: CardHeader): Card {
        this.header = value;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string): Card {
        this.name = value;
        return this;
    }

    getSections(): Section[] {
        return this.sections;
    }

    addSection(value: Section): Card {
        if (!this.sections) {
            this.sections = [];
        }

        this.sections.push(value);
        return this;
    }

    setSections(value: Section[]): Card {
        this.sections = value;
        return this;
    }
}