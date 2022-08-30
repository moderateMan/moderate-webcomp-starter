/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ModerateInfo {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ModerateSlot {
    }
}
declare global {
    interface HTMLModerateInfoElement extends Components.ModerateInfo, HTMLStencilElement {
    }
    var HTMLModerateInfoElement: {
        prototype: HTMLModerateInfoElement;
        new (): HTMLModerateInfoElement;
    };
    interface HTMLModerateSlotElement extends Components.ModerateSlot, HTMLStencilElement {
    }
    var HTMLModerateSlotElement: {
        prototype: HTMLModerateSlotElement;
        new (): HTMLModerateSlotElement;
    };
    interface HTMLElementTagNameMap {
        "moderate-info": HTMLModerateInfoElement;
        "moderate-slot": HTMLModerateSlotElement;
    }
}
declare namespace LocalJSX {
    interface ModerateInfo {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ModerateSlot {
    }
    interface IntrinsicElements {
        "moderate-info": ModerateInfo;
        "moderate-slot": ModerateSlot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "moderate-info": LocalJSX.ModerateInfo & JSXBase.HTMLAttributes<HTMLModerateInfoElement>;
            "moderate-slot": LocalJSX.ModerateSlot & JSXBase.HTMLAttributes<HTMLModerateSlotElement>;
        }
    }
}
