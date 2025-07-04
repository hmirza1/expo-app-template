// @ts-expect-error This file does not have type definitions.
import nativewindPreset from 'nativewind/dist/tailwind/index.js';
import type { Config } from 'tailwindcss';
import type { CSSRuleObject } from 'tailwindcss/types/config.d.ts';
import colors from './src/ui/colors.ts';

const variables: { [key: string]: string } = {};
const colorMap: { [key: string]: string } = {};

for (const [name, color] of Object.entries(colors)) {
  variables[`--${name}`] = color;
  colorMap[name] = `var(--${name})`;
}

export default {
  content: ['./src/**/*.{js,ts,tsx}'],
  plugins: [
    ({
      addBase,
    }: {
      addBase: (base: CSSRuleObject | Array<CSSRuleObject>) => void;
    }) =>
      addBase({
        ':root': variables,
      }),
  ],
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors: colorMap,
    },
  },
} satisfies Config;

// // @ts-expect-error This file does not have type definitions.
// import nativewindPreset from 'nativewind/dist/tailwind/index.js';
// import type { Config } from 'tailwindcss';

// export default {
//   content: ['./src/**/*.{js,ts,tsx}'],
//   presets: [nativewindPreset],
//   theme: {
//     extend: {
//       colors: {
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
