"use strict";

import { OnClick } from "./onClick";

/**
 * A card action is the action associated with the card. For an invoice card,
 * a typical action would be: delete invoice, email invoice or open the
 * invoice in browser.
 */
export class CardAction {
    /**
     * The label used to be displayed in the action menu item.
     */
    private actionLabel?: string;

    /**
     * The onclick action for this action item.
     */
    private onClick?: OnClick;

    getActionLabel(): string {
        return this.actionLabel;
    }

    setActionLabel(value: string): CardAction {
        this.actionLabel = value;
        return this;
    }

    getOnClick(): OnClick {
        return this.onClick;
    }

    setOnClick(value: OnClick): CardAction {
        this.onClick = value;
        return this;
    }
}