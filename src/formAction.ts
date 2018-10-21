"use strict";

import { ActionParameter } from "./actionParameter";

/**
 * A form action describes the behavior when the form is submitted. For
 * example, an Apps Script can be invoked to handle the form.
 */
export class FormAction {
    /**
     * Apps Script function to invoke when the containing element is
     * clicked/activated.
     */
    private actionMethodName?: string;

    /**
     * List of action parameters.
     */
    private parameters?: ActionParameter[];

    getActionMethodName(): string {
        return this.actionMethodName;
    }

    setActionMethodName(value: string): FormAction {
        this.actionMethodName = value;
        return this;
    }

    getParameters(): ActionParameter[] {
        return this.parameters;
    }

    addParameter(value: ActionParameter): FormAction {
        if (!this.parameters) {
            this.parameters = [];
        }

        this.parameters.push(value);
        return this;
    }

    setParameters(value: ActionParameter[]): FormAction {
        this.parameters = value;
        return this;
    }
}