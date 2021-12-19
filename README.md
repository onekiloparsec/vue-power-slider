# Vue Slider (Vue3) 

Horizontal, vertical and circular sliders! Fully responsive, touch screen and keyboard control support!

## Installation

```bash
# with npm
npm install vue-power-slider
```

```bash
# with yarn
yarn add vue-power-slider
```

## Getting Started 👍

### Import component

```js
import VuePowerSlider from "vue-power-slider"

export default {
  ...
  components: {
    VuePowerSlider
  }
  ...
}
```

### How to use

```html
<vue-power-slider v-model="myNumber" color="#FB278D" track-color="#FEFEFE" />
```

## Props

| Name             | Type     | Required | Default    | Rules                                                         |
| ---------------- | -------- | -------- | ---------- | ------------------------------------------------------------- |
| v-model          | Number   | ✔️       |            |                                                               |
| width            | String   |          | 100%       | must be valid css length                                      |
| height           | Number   |          | 6          |                                                               |
| color            | String   |          | #FB2727    | must be a valid hex, rgb, rgba or html color value            |
| trackColor       | String   |          | #F1F6F8    | ^^^                                                           |
| max              | Number   |          | 100        | cannot be less than min                                       |
| min              | Number   |          | 0          | cannot be greater than max                                    |
| step             | Number   |          | 1          |                                                               |
| tooltip          | Boolean  |          | false      |                                                               |
| tooltipColor     | String   |          | #FFFFFF    | must be a valid hex, rgb, rgba or html color value            |
| tooltipTextColor | String   |          | #000000    | ^^^                                                           |
| orientation      | String   |          | horizontal | restricted choice (horizontal, vertical, circular)            |
| repeat           | Boolean  |          | false      |                                                               |
| sticky           | Boolean  |          | false      |                                                               |
| flip             | Boolean  |          | false      |                                                               |
| circleOffset     | Number   |          | 0          | must be between 0 and 360 (inclusive)                         |

**NOTE: When using the circular slider width is the diameter of the circle and height is the stroke width**

**NOTE: When using the circular slider it is advised to use absolute units for width to avoid issues**

**NOTE: circleOffset is calculated in degrees clockwise from the top of the circle (anti-clockwise with flip set to true)**

## Slots:

- default: default slot will render the tooltip text

## Events

#### change

- Arguments: `(value: number)`
- Usage: The event is fired when the slider value changes

#### drag-start

- Arguments: `(value: number, event: MouseEvent | TouchEvent)`
- Usage: The event is fired when the user presses the slider

#### drag-end

- Arguments: `(value: number, event: MouseEvent | TouchEvent)`
- Usage: The event is fired when the user releases the slider

#### dragging

- Arguments: `(value: number, event: MouseEvent | TouchEvent)`
- Usage: The event is fired when the user drags the slider

## Contributing

### Prerequisites

- node (latest version)
- yarn (1.^22.10)

### Setup

```bash
# clone repo
git clone https://github.com/freddie-nelson/vue-power-slider
cd vue-power-slider

# install deps
npm i
# with yarn
yarn

# start dev server
npm run serve
# with yarn
yarn serve
```

## License

[MIT](https://opensource.org/licenses/MIT)

Initially based on https://github.com/freddie-nelson/vue-power-slider by Freddie Nelson
