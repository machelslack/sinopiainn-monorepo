import * as React from 'react';
import { compose } from 'redux';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
         __INITIAL_DATA__: any;
      }
    namespace JSX {
        interface IntrinsicElements {
            'medium': any,
            'i ':any,
            'large':any
        }
    }
}
