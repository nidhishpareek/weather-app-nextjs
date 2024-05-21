import { css } from "styled-components";

export const COLORS = {
  white: "#f7f4f9",
  grey: "#eeebee",
  darkGrey: "#a4a2a7",
  borderGrey: "#ceccd1",
};

export const BORDER_RADIUS = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.5rem",
};

export const displaySizeRem = {
  desktop: 80, // lg 1280
  laptop: 68.25, // md 1092
  tablet: 48, // sm 768
  phone: 30, // xs 480
} as const;

type DisplaySizes = keyof typeof displaySizeRem;

type Media = { [key in DisplaySizes]: typeof css<object> };

export const media = Object.keys(displaySizeRem).reduce((acc, label) => {
  const remSize = displaySizeRem[label as keyof typeof displaySizeRem];
  acc[label as DisplaySizes] = (...args) => css`
    @media (max-width: ${remSize}rem) {
      ${css(...args)};
    }
  `;
  return acc;
}, {} as Media);
// export const media = mediaObj as { [key in MediaType]: typeof css };
