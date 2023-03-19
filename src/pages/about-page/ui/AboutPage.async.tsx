import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // setTimeout нужен для иммитации задержки ответа. в реальных проектах так не делать!
    setTimeout(() => resolve(import('./AboutPage')), 2000);
}));
