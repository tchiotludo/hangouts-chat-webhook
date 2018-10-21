"use strict";

import { WidgetMarkup } from "./widgetMarkup";

/**
 * A section contains a collection of widgets that are rendered (vertically)
 * in the order that they are specified. Across all platforms, cards have a
 * narrow fixed width, so there is currently no need for layout properties
 * (e.g. float).
 */
export class Section {
    /**
     * The header of the section, text formatted supported.
     */
    private header?: string;

    /**
     * A section must contain at least 1 widget.
     */
    private widgets?: WidgetMarkup[];

    getHeader(): string {
        return this.header;
    }

    setHeader(value: string): Section {
        this.header = value;
        return this;
    }

    getWidgets(): WidgetMarkup[] {
        return this.widgets;
    }

    addWidget(value: WidgetMarkup): Section {
        if (!this.widgets) {
            this.widgets = [];
        }

        this.widgets.push(value);
        return this;
    }

    setWidgets(value: WidgetMarkup[]): Section {
        this.widgets = value;
        return this;
    }
}