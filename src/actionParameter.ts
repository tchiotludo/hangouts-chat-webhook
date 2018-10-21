"use strict";

/**
 * List of string parameters to supply when the action method is invoked. For
 * example, consider three snooze buttons: snooze now, snooze 1 day, snooze
 * next week. You might use action method = snooze(), passing the snooze type
 * and snooze time in the list of string parameters.
 */
export class ActionParameter {
    /**
     * The name of the parameter for the action script.
     */
    private key?: string;

    /**
     * The value of the parameter.
     */
    private value?: string;

    getKey(): string {
        return this.key;
    }

    setKey(value: string): ActionParameter {
        this.key = value;
        return this;
    }

    getValue(): string {
        return this.value;
    }

    setValue(value: string): ActionParameter {
        this.value = value;
        return this;
    }
}