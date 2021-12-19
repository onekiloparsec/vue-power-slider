<template>
  <div
    v-if="orientation === 'horizontal'"
    key="horizontal"
    :style="{ ...vars }"
    class="vue-power-slider"
    tabindex="0"
    ref="slider"
    @touchstart="clickHandler"
    @mousedown="clickHandler"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @keydown="handleKeydown"
  >
    <transition name="fade">
      <div
        class="tooltip"
        ref="tooltip"
        v-show="showTooltip"
        :style="{
          transform: flip
            ? `translate(${-tooltipOffset}px)`
            : `translate(${tooltipOffset}px)`,
          right: flip ? '0px' : undefined,
          left: flip ? 'auto' : undefined,
          bottom: `max(calc(var(--height, 6px) + 12px), calc(var(--height, 6px) * var(--handle-scale, 1.4)))`,
        }"
      >
        <slot name="tooltip">
          {{ tooltipText }}
        </slot>
      </div>
    </transition>

    <div class="track">
      <slot name="track"></slot>
    </div>

    <div class="track-filled"
         :style="{
        width: filledWidth + 'px',
        right: flip ? '0px' : undefined,
        left: flip ? 'auto' : undefined,
      }"/>

    <div class="handle"
         :style="{[flip ? 'right' : 'left']: filledWidth - (height * handleScale) / 2 + 'px'}"
         :class="{ hover: applyHandleHoverClass }"/>
  </div>

  <div
    v-else-if="orientation === 'vertical'"
    key="vertical"
    :style="{ ...vars }"
    class="vue-power-slider vertical"
    tabindex="0"
    ref="slider"
    @touchstart="clickHandler"
    @mousedown="clickHandler"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @keydown="handleKeydown"
  >
    <transition name="fade">
      <div
        class="tooltip"
        ref="tooltip"
        v-show="showTooltip"
        :style="{
          transform: flip
            ? `translateY(${tooltipOffset}px)`
            : `translateY(${-tooltipOffset}px)`,
          top: flip ? '0px' : undefined,
          bottom: flip ? 'auto' : undefined,
          left: `max(calc(var(--height, 6px) + 14px), calc(var(--height, 6px) * 1.35))`,
        }"
      >
        <slot name="tooltip">
          {{ tooltipText }}
        </slot>
      </div>
    </transition>

    <div class="track">
      <slot name="track"></slot>
    </div>

    <div
      class="track-filled"
      :style="{
        height: filledWidth + 'px',
        top: flip ? '0px' : undefined,
        bottom: flip ? 'auto' : undefined,
      }"
    />

    <div
      class="handle"
      :style="{[flip ? 'top' : 'bottom']: filledWidth - (height * handleScale) / 2 + 'px'}"
      :class="{ hover: applyHandleHoverClass }"
    />
  </div>

  <div
    v-else
    key="circular"
    class="vue-power-slider circular"
    tabindex="0"
    ref="slider"
    :style="{ ...vars }"
    @touchstart="clickHandler"
    @mousedown="clickHandler"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @keydown="handleKeydown"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      style="overflow: visible"
    >
      <circle
        stroke="var(--track-color)"
        vector-effect="non-scaling-stroke"
        fill="none"
        stroke-width="var(--height)"
        r="50%"
        cx="50"
        cy="50"
      ></circle>

      <circle
        :style="{
          transform: `rotate(${-90 + circleOffset}deg) ${
            flip ? 'scaleY(-1)' : ''
          }`,
        }"
        style="transform-origin: center"
        stroke="var(--color)"
        vector-effect="non-scaling-stroke"
        fill="none"
        stroke-width="var(--height)"
        r="50%"
        cx="50"
        cy="50"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeOffset"
      ></circle>
    </svg>

    <div
      class="handle-container"
      :style="{ transform: `rotate(${circleOffset}deg)` }"
    >
      <div class="handle round-end"/>
    </div>

    <div
      class="handle-container"
      :style="{ transform: `rotate(${sliderValueDegrees + circleOffset}deg)` }"
    >
      <div class="handle" :class="{ hover: applyHandleHoverClass }"/>

      <transition name="fade">
        <div
          class="tooltip"
          ref="tooltip"
          v-show="showTooltip"
          :style="{
            transform: `rotate(${-sliderValueDegrees - circleOffset}deg)`,
            top: `calc(max(calc(${tooltipOffset}px + 34px), calc(${tooltipOffset}px + var(--height) * 1.3)) * -1)`,
          }"
        >
          <slot name="tooltip">
            {{ tooltipText }}
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue";

  import props from "./props";
  import { useStore } from "./store";

  import { useFilledWidthObserver, useTooltipObserver } from "./hooks/observers";
  import useKeyBoardControls from "./hooks/useKeyboardControls";
  import useModelValue from "./hooks/useModelValue";
  import useDragHandler from "./hooks/useDragHandler";

  export default defineComponent({
    name: "power-slider",
    props,
    setup (props, { emit }) {
      // error checking
      if (props.modelValue < props.min || props.modelValue > props.max) {
        console.error("[Vue3Slider] Error: value exceeds limits of slider");
      }

      // validate min and max
      if (props.max <= props.min) {
        console.error(
          "[Vue3Slider] Error: Max value cannot be less than or equal to the min value. This will cause unexpected errors to occur, please fix."
        );
      }

      // setup store values
      const store = useStore(props);

      // setup hooks
      const { updateModelValue, formatModelValue } = useModelValue(
        store,
        props,
        emit
      );
      const { handleKeydown } = useKeyBoardControls(
        store,
        props,
        updateModelValue
      );
      const { clickHandler } = useDragHandler(
        store,
        props,
        emit,
        updateModelValue
      );

      // Apply hover styles to handle
      const hovering = ref(false);

      const applyHandleHoverClass = computed((): boolean => {
        if (store.holding.value) {
          return true;
        } else {
          return hovering.value;
        }
      });

      // tooltip setup
      const tooltip = ref<HTMLDivElement>();

      // replace %v with sliders value in tooltip text
      const tooltipText = computed(() => {
        if (!props.tooltip || props.tooltip === 'none') return "";
        let stringValue = (store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value)).toString();
        return props.tooltipText.replace("%v", stringValue);
      });

      // watch tooltip width
      const tooltipWidth = ref(0);

      // calculate tooltip offset
      const tooltipOffset = computed(() => {
        if (props.tooltip === 'none') return 0;

        let width: number | undefined = tooltipWidth.value;
        width += 5
        return store.filledWidth.value - width / 2;
      });

      // calculate stroke offset for circular slider
      const circumference = computed(() => {
        if (!store.slider.value || props.orientation !== "circular") return 1;

        return 2 * Math.PI * (store.sliderWidth.value / 2);
      });

      const strokeOffset = computed(() => {
        if (props.orientation !== "circular") return 0;

        return (
          ((store.sliderRange.value - store.modelValueUnrounded.value) /
            store.sliderRange.value) *
          circumference.value
        );
      });

      const vars = computed(() => {
        return {
          "--width": props.width,
          "--height": props.height + "px",
          "--color": props.color,
          "--track-color": props.trackColor,
          "--tooltip-color": props.tooltipColor,
          "--tooltip-text-color": props.tooltipTextColor,
          "--handle-color": props.handleColor,
          "--handle-border-color": props.handleBorderColor,
          "--handle-scale": props.handleScale,
        };
      });

      // start observers when component loads
      onMounted(() => {
        useFilledWidthObserver(store, props);
        useTooltipObserver(tooltip, tooltipWidth);
      });

      return {
        filledWidth: store.filledWidth,
        slider: store.slider,
        holding: store.holding,
        flip: computed(() => props.flip),
        clickHandler,
        handleKeydown,
        applyHandleHoverClass,
        hovering,
        showTooltip: computed(() => (props.tooltip === 'always') || ((hovering || store.holding) && props.tooltip === 'auto')),
        tooltip,
        tooltipText,
        tooltipOffset,
        vars,
        circumference,
        strokeOffset,
        circleOffset: computed(() => props.circleOffset),
        sliderValueDegrees: store.sliderValueDegrees,
      };
    },
  });
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .vue-power-slider {
    box-sizing: border-box;
    width: var(--width, 100%);
    height: var(--height, 6px);
    position: relative;
    margin: 3px 0;
    cursor: pointer;
    font-family: inherit;

    &.vertical {
      width: var(--height, 6px);
      height: var(--width, 100%);

      .track-filled {
        width: 100%;
        bottom: 0;
        top: auto;
      }

      .handle {
        top: unset;
        bottom: 0;
        left: 0;
      }

      .tooltip {
        bottom: 0;
        top: auto;
      }
    }

    &.circular {
      height: var(--width, 100%);
      margin: 0;

      .round-end {
        position: absolute;
        margin: 0 auto;
        width: var(--height, 6px);
        height: var(--height, 6px);
        transform: scale(1);
        left: 0;
        right: 0;
        top: calc(var(--height, 6px) * -0.5);
      }

      .handle-container {
        user-select: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: center;
        display: flex;
        justify-content: center;
        align-items: center;

        .handle {
          top: calc(var(--height, 6px) * -0.5);
          width: var(--height, 6px);
          height: var(--height, 6px);
          transform: scale(1);

          &.hover {
            transform: scale(1.5);
          }
        }

        .tooltip {
          position: absolute;
          bottom: auto;
          left: unset;
        }
      }
    }

    & * {
      -webkit-user-drag: none;
      -webkit-app-region: no-drag;
    }

    .tooltip {
      position: absolute;
      left: 0;
      height: 25px;
      background-color: var(--tooltip-color);
      color: var(--tooltip-text-color);
      font-family: inherit;
      padding: 3px 7px;
      border-radius: 4px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    .track {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--track-color, #f1f6f828);
      width: 100%;
      height: 100%;
      border-radius: calc(var(--height, 6px) / 2);
    }

    .track-filled {
      @extend .track;

      position: absolute;
      left: 0;
      top: 0;
      width: auto;
      background-color: var(--color, #fb2727);
      opacity: 1;
    }

    .handle {
      position: absolute;
      top: calc(var(--height, 6px) / 2 * -1 + 1);
      width: var(--height, 6px);
      height: var(--height, 6px);
      border-radius: 50%;
      border: 3px solid;
      background-color: var(--handle-color, white);
      border-color: var(--handle-border-color, #aaaaaa);
      transform: scale(var(--handle-scale, 1.4));
      transition: transform 0.2s ease;
      user-select: none;
    }
  }
</style>
