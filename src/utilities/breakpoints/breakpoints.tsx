import { css, CSSObject, SimpleInterpolation } from 'styled-components';
import { typeBreakpoints } from '../interfaces/breakpoints';


const breakpoints: typeBreakpoints = {
  small: 576,
  medium: 768,
  large: 992,
};

const media = (Object.keys(breakpoints) as Array<keyof typeBreakpoints>).reduce(
  (acc, label) => {
    acc[label] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(first, ...interpolations)};
      }
    `;
    return acc;
  },
  {} as Record<keyof typeBreakpoints, (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => ReturnType<typeof css>>
);

export default media;
