import {size} from "./size";

export const device = {
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    tablet2: `(max-width: ${size.laptopL} and (min-width: ${size.mobileL})`,
};