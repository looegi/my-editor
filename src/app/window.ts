import {inject, InjectionToken } from "@angular/core";
import {DOCUMENT} from '@angular/common';
//Special thanks to waterplea for solution.
//https://stackoverflow.com/questions/34177221/how-to-inject-window-into-a-service
export const WINDOW = new InjectionToken<Window>(
    'An abstraction over global window object',
    {
        factory: () => {
            const {defaultView} = inject(DOCUMENT);

            if (!defaultView) {
                throw new Error('Window is not available');
            }

            return defaultView;
        }
    });

export interface ElectronWindow extends Window {
    require(module:string): any;
}