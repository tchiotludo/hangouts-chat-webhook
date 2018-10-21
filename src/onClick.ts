"use strict";

import { FormAction } from "./formAction";
import { OpenLink } from "./openLink";

/**
 * An onclick action (e.g. open a link).
 */
export class OnClick {
    /**
     * A form action will be trigger by this onclick if specified.
     */
    private action?: FormAction;

    /**
     * This onclick triggers an open link action if specified.
     */
    private openLink?: OpenLink;

    getAction(): FormAction {
        return this.action;
    }

    setAction(value: FormAction): OnClick {
        this.action = value;
        return this;
    }

    getOpenLink(): OpenLink {
        return this.openLink;
    }

    setOpenLink(value: OpenLink): OnClick {
        this.openLink = value;
        return this;
    }
}