# TypoAnimated

[![npm version](https://badge.fury.io/js/%40hansolbangul%2Fanimated-typo.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/%40hansolbangul%2Fanimated-typo.svg)][npm_url]
[![license](https://img.shields.io/npm/l/%40hansolbangul%2Fanimated-typo.svg)][npm_url]

A customizable React typing animation component for displaying dynamic typing and deleting effects. Perfect for adding interactive typewriter animations to your project.

[npm_url]: https://www.npmjs.com/package/@hansolbangul/animated-typo

## Installation

```bash
# Using npm
npm install @hansolbangul/animated-typo

# Using Yarn
yarn add @hansolbangul/animated-typo

# Using pnpm
pnpm add @hansolbangul/animated-typo
```

This library requires `react` and `react-dom` version `^17.0.0` or higher.

## Live Demo

Visit the live demo and explore examples here: [https://hansolbangul.github.io/typing-animated](https://hansolbangul.github.io/typing-animated)

## Usage

Use `TypoAnimated` to create dynamic typewriter animations with customizable speed, delay, loop counts, and more.

### Example Usage

Here's an example of a typewriter animation that cycles through words and stops on the last one.

```jsx
import { TypoAnimated } from '@hansolbangul/animated-typo';

const ExampleComponent = () => {
  return (
    <TypoAnimated
      text={['Hello', 'World', 'React Typing Animation']}
      ms={100}
      wait={1000}
      loop={2}
    />
  );
};

export default ExampleComponent;
```

## Documentation

For detailed documentation, available props, and more usage examples, please visit the documentation page: [https://hansolbangul.github.io/typing-animated/docs](https://hansolbangul.github.io/typing-animated/docs).

## Props

Here are the available props for the `TypoAnimated` component:

| Prop       | Required | Type                   | Description                                                                 | Default  |
|------------|----------|------------------------|-----------------------------------------------------------------------------|----------|
| `text`     | yes      | `string` or `string[]` | Text or array of text strings to display in typing animation                | `-`      |
| `ms`       | yes      | `number`               | Typing and deleting speed in milliseconds per character                     | `-`      |
| `wait`     | yes      | `number`               | Waiting time in milliseconds before deleting or moving to the next text     | `-`      |
| `loop`     | no       | `number`               | Number of times to repeat the animation; `-1` for infinite                  | `-1`     |

## Usage Notes

### Loop Control

- When `loop` is set to a specific number (e.g., `loop={2}`), the animation will repeat that many times and stop on the last string in `text` without deleting it.

### Compatibility

- This component supports React v17 and above.
- Hot reloading is not fully supported due to the component's memoized nature, so you may need to refresh your page after making changes to `TypoAnimated` component properties.

## License

This project is licensed under the ISC License.

## Links

- [npm](https://www.npmjs.com/package/@hansolbangul/animated-typo)
- [GitHub](https://github.com/hansolbangul/typing-animated)
