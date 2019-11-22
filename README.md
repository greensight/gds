# GDS

**GDS** is a design system in [Greensight](https://greensight.pro/) company.

⚠️ This system is supposed to use only inside our company, at least for now.

⚠️⚠️ GDS in early development stage, so probably everything is broken.

⚠️⚠️⚠️ We don't search at outsource contributors at the moment.

## Install

```bash
yarn add @greensight/gds
```

## Usage

```js
import React from 'react';
import '@greensight/gds/esm/index.css';
import { Button } from '@greensight/gds';

const MyComponent = () => {
    return (
        <div>
            <h1>Some title</h1>
            <Button>Click me</Button>
        </div>
    );
};
```

## Development

| `yarn <command>`  | Description                                     |
| ----------------- | ----------------------------------------------- |
| `build`           | Build package                                   |
| `storybook`       | Starts a Storybook in dev mode                  |
| `storybook:build` | Build static Storybook version in `docs` folder |
| `storybook:serve` | Starts a static server for `docs` browsing      |
| `eslint`          | Lint all `.js`, `.jsx`, `.ts` and `.tsx` files  |
| `stylelint`       | Lint all `.css` files                           |
