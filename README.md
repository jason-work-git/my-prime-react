# YTG-REUSABLE_COMPONENT

PrimeReact is a rich set of open source UI Components for React. See [PrimeReact homepage](https://primereact.org/) for live showcase and documentation.

## Download

PrimeReact is available at [npm](https://www.npmjs.com/package/primereact).

```
# Using npm
npm install ytg-reusable-component

# Using yarn
yarn add ytg-reusable-component
```

## Import

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
//import { ComponentName } from 'primereact/{componentname}';
import { Button } from 'ytg-reusable-component/button';

export default function MyComponent() {
  return (
    <Button label="PrimeReact" />
  )
}
```

## Theming

PrimeReact has two theming modes; styled or unstyled.

**Styled Mode**

Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the [Themes](https://primereact.org/theming) section for the complete list of available themes to choose from.

```javascript
// theme
import 'primereact/resources/themes/lara-light-cyan/theme.css';
```

**Unstyled Mode**

Unstyled mode is disabled by default for all components. Using the PrimeReact context, set `unstyled` as true to enable it globally. Visit the [Unstyled mode](https://primereact.org/unstyled) documentation for more information and examples.

