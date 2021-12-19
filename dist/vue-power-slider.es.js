var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { ref, computed, watchEffect, watch, defineComponent, onMounted, openBlock, createElementBlock, normalizeStyle, createVNode, Transition, withCtx, withDirectives, createElementVNode, renderSlot, createTextVNode, toDisplayString, vShow, normalizeClass } from "vue";
const lengthRegex = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%+)/i;
var validateLength = (val) => {
  const result = val.match(lengthRegex);
  return result !== null && result.length <= 3;
};
var props = {
  width: {
    type: String,
    default: "100%",
    validator: validateLength
  },
  height: {
    type: Number,
    default: 6
  },
  color: {
    type: String,
    default: "#FB2727"
  },
  trackColor: {
    type: String,
    default: "#f1f6f828"
  },
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1,
    validator(val) {
      if (val !== 0) {
        return true;
      } else {
        console.error("[Vue3Slider] Error: Step cannot be 0");
        return false;
      }
    }
  },
  tooltip: {
    type: String,
    default: "auto"
  },
  tooltipText: {
    type: String,
    default: "%v",
    validator(val) {
      if (!val.includes("%v")) {
        console.error("[Vue3Slider] Error: tooltip text must contain %v");
        return false;
      }
      return true;
    }
  },
  tooltipColor: {
    type: String,
    default: "#FFFFFF"
  },
  tooltipTextColor: {
    type: String,
    default: "#000000"
  },
  formatTooltip: {
    validator(val) {
      if (typeof val !== "function") {
        console.error("[Vue3Slider] Error: formatTooltip must be a function");
        return false;
      } else if (typeof val(0) !== "string") {
        console.error("[Vue3Slider] Error: formatTooltip must return a string");
        return false;
      }
      return true;
    }
  },
  orientation: {
    type: String,
    default: "horizontal",
    validator(val) {
      return val === "horizontal" || val === "vertical" || val === "circular";
    }
  },
  modelValue: {
    type: Number,
    default: 0,
    required: true
  },
  repeat: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  flip: {
    type: Boolean,
    default: false
  },
  circleOffset: {
    type: Number,
    default: 0,
    validator(val) {
      return val >= 0 && val <= 360;
    }
  }
};
function useStore(props2) {
  const slider = ref(document.createElement("div"));
  const modelValueUnrounded = ref(props2.modelValue);
  if (props2.min !== 0)
    modelValueUnrounded.value -= props2.min;
  const formattedSliderValue = ref(0);
  const sliderWidth = ref(0);
  const filledWidth = ref(0);
  const pixelsPerStep = ref(1);
  let sliderRange = computed(() => {
    let range = 0;
    if (props2.min < 0) {
      range = props2.max + Math.abs(props2.min);
    } else {
      range = props2.max - props2.min;
    }
    return range;
  });
  const sliderValueDegrees = computed(() => {
    if (props2.orientation !== "circular")
      return 0;
    const degrees = modelValueUnrounded.value / (sliderRange.value / 360);
    return props2.flip ? -degrees : degrees;
  });
  const holding = ref(false);
  const store = {
    slider,
    modelValueUnrounded,
    formattedSliderValue,
    filledWidth,
    pixelsPerStep,
    sliderRange,
    sliderValueDegrees,
    sliderWidth,
    holding
  };
  return store;
}
function useFilledWidthObserver(store, props2) {
  watchEffect(() => {
    store.filledWidth.value = getNewFilledWidth(store, props2);
  });
  const observer = new ResizeObserver((entries) => {
    store.filledWidth.value = getNewFilledWidth(store, props2);
    store.sliderWidth.value = store.slider.value ? props2.orientation === "vertical" ? store.slider.value.clientHeight : store.slider.value.clientWidth : 0;
    if (store.slider.value !== entries[0].target && store.slider.value instanceof Element) {
      observer.unobserve(entries[0].target);
      observer.observe(store.slider.value);
    }
  });
  if (store.slider.value)
    observer.observe(store.slider.value);
}
function getNewFilledWidth(store, props2) {
  const slider = store.slider;
  if (!slider.value)
    return 0;
  const sliderWidth = props2.orientation === "vertical" ? slider.value.clientHeight : slider.value.clientWidth;
  store.pixelsPerStep.value = sliderWidth / store.sliderRange.value;
  const clamped = Math.max(Math.min(store.modelValueUnrounded.value * store.pixelsPerStep.value, sliderWidth), 0);
  return clamped;
}
function useTooltipObserver(tooltip, tooltipWidth) {
  const observer = new ResizeObserver((entries) => {
    if (tooltip.value) {
      tooltipWidth.value = tooltip.value.clientWidth;
      if (tooltip.value !== entries[0].target) {
        observer.unobserve(entries[0].target);
        if (tooltip.value)
          observer.observe(tooltip.value);
      }
    }
  });
  if (tooltip.value)
    observer.observe(tooltip.value);
}
function useKeyBoardControls(store, props2, updateModelValue) {
  const calculateValueFromDiff = (diff) => {
    const newVal = store.modelValueUnrounded.value + diff;
    if (newVal <= 0) {
      updateModelValue(0);
    } else if (newVal >= store.sliderRange.value) {
      updateModelValue(store.sliderRange.value);
    } else {
      updateModelValue(newVal);
    }
  };
  const handleKeydown = (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        calculateValueFromDiff(props2.step);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        calculateValueFromDiff(-props2.step);
        break;
    }
  };
  return {
    handleKeydown
  };
}
function useModelValue(store, props2, emit) {
  const modelValueRef = ref(props2.modelValue);
  watchEffect(() => modelValueRef.value = props2.modelValue);
  watch(modelValueRef, (val) => {
    if (store.formattedSliderValue.value !== val) {
      let newValue = 0;
      if (props2.min < 0) {
        newValue = val + Math.abs(props2.min);
      } else {
        newValue = val - props2.min;
      }
      if (newValue > store.sliderRange.value)
        newValue = store.sliderRange.value;
      updateModelValue(newValue);
    }
  });
  const formatModelValue = (val) => {
    const step = props2.step;
    let roundedVal = 0;
    if (val > 0) {
      roundedVal = Math.round(val / step) * step;
    } else {
      roundedVal = 0;
    }
    return roundedVal + props2.min;
  };
  const updateModelValue = (val) => {
    store.formattedSliderValue.value = formatModelValue(val);
    if (props2.sticky) {
      store.modelValueUnrounded.value = store.formattedSliderValue.value - props2.min;
    } else {
      store.modelValueUnrounded.value = val;
    }
    emit("update:modelValue", store.formattedSliderValue.value);
    emit("change", store.formattedSliderValue.value);
  };
  return {
    formatModelValue,
    updateModelValue,
    modelValueRef
  };
}
function useDragHandler(store, props2, emit, updateModelValue) {
  let previousSliderValue = store.formattedSliderValue.value;
  const calcSliderValue = (mouseX, mouseY, dragging) => {
    const rect = store.slider.value.getBoundingClientRect();
    let value = 0;
    if (props2.orientation === "horizontal") {
      value = (mouseX - rect.x) / store.pixelsPerStep.value;
      if (props2.flip) {
        value = store.sliderRange.value - value;
      }
    } else if (props2.orientation === "vertical") {
      value = (rect.y + rect.height - mouseY) / store.pixelsPerStep.value;
      if (props2.flip) {
        value = store.sliderRange.value - value;
      }
    } else {
      const sliderX = mouseX - rect.x;
      const sliderY = mouseY - rect.y;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const gradient = (sliderY - centerY) / (sliderX - centerX);
      let angle = Math.atan(gradient) * 180 / Math.PI;
      if (sliderX >= centerX) {
        if (sliderY < centerY) {
          if (Math.ceil(angle) === 180) {
            angle = 0;
          } else {
            angle = 90 - Math.abs(angle);
          }
        } else {
          angle += 90;
        }
      } else {
        if (sliderY < centerY) {
          angle = 270 + angle;
        } else {
          angle = 270 + angle;
        }
      }
      const valPerDeg = store.sliderRange.value / 360;
      value = angle * valPerDeg - props2.circleOffset * valPerDeg;
      if (value < 0) {
        value += store.sliderRange.value;
      }
      if (props2.flip) {
        value = store.sliderRange.value - value;
      }
      if (!props2.repeat && dragging) {
        const diff = Math.abs(value - previousSliderValue);
        if (diff > valPerDeg * 30) {
          value = previousSliderValue;
        }
      }
    }
    previousSliderValue = value;
    return value;
  };
  const draggingHandler = (e) => {
    let tap;
    if (e.type === "mousemove") {
      e = e;
      tap = e;
    } else {
      e = e;
      if (e.touches.length > 1)
        return;
      tap = e.touches[0];
    }
    if (store.holding.value) {
      const rect = store.slider.value.getBoundingClientRect();
      const tapPosInsideSlider = props2.orientation === "vertical" ? rect.y + rect.height - tap.pageY : tap.pageX - rect.x;
      if (props2.orientation === "circular" || tapPosInsideSlider >= 0 && tapPosInsideSlider <= store.sliderWidth.value) {
        updateModelValue(calcSliderValue(tap.pageX, tap.pageY, true));
      }
      emit("dragging", store.formattedSliderValue.value, tap);
    }
  };
  const releaseDragHandler = (e) => {
    if (store.holding.value)
      store.holding.value = false;
    if (e.type === "mouseup") {
      window.removeEventListener("mouseup", releaseDragHandler);
      window.removeEventListener("mousemove", draggingHandler);
    } else {
      window.removeEventListener("touchend", releaseDragHandler);
      window.removeEventListener("touchmove", draggingHandler);
    }
    emit("drag-end", store.formattedSliderValue.value, e);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    store.holding.value = true;
    emit("drag-start", store.formattedSliderValue.value, e);
    if (e.type === "touchstart") {
      e = e;
      if (e.touches.length > 1)
        return;
      const t = e.touches[0];
      updateModelValue(calcSliderValue(t.pageX, t.pageY, false));
      window.addEventListener("touchend", releaseDragHandler);
      window.addEventListener("touchmove", draggingHandler);
    } else {
      e = e;
      updateModelValue(calcSliderValue(e.pageX, e.pageY, false));
      window.addEventListener("mouseup", releaseDragHandler);
      window.addEventListener("mousemove", draggingHandler);
    }
  };
  return {
    clickHandler
  };
}
var powerSlider_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "power-slider",
  props,
  setup(props2, { emit }) {
    if (props2.modelValue < props2.min || props2.modelValue > props2.max) {
      console.error("[Vue3Slider] Error: value exceeds limits of slider");
    }
    if (props2.max <= props2.min) {
      console.error("[Vue3Slider] Error: Max value cannot be less than or equal to the min value. This will cause unexpected errors to occur, please fix.");
    }
    const store = useStore(props2);
    const { updateModelValue, formatModelValue } = useModelValue(store, props2, emit);
    const { handleKeydown } = useKeyBoardControls(store, props2, updateModelValue);
    const { clickHandler } = useDragHandler(store, props2, emit, updateModelValue);
    const hovering = ref(false);
    const applyHandleHoverClass = computed(() => {
      if (store.holding.value) {
        return true;
      } else {
        return hovering.value;
      }
    });
    const tooltip = ref();
    const tooltipText = computed(() => {
      if (!props2.tooltip)
        return "";
      let stringValue = "";
      if (props2.formatTooltip !== null && typeof props2.formatTooltip === "function") {
        stringValue = props2.formatTooltip(store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value));
      } else {
        stringValue = (store.formattedSliderValue.value || formatModelValue(store.modelValueUnrounded.value)).toString();
      }
      return props2.tooltipText.replace("%v", stringValue);
    });
    const tooltipWidth = ref(0);
    const tooltipOffset = computed(() => {
      var _a;
      if (!props2.tooltip)
        return 0;
      let width = tooltipWidth.value;
      if (props2.orientation !== "horizontal") {
        width = (_a = tooltip.value) == null ? void 0 : _a.clientHeight;
        if (!width) {
          width = 20;
        }
        if (props2.orientation !== "vertical") {
          return width;
        }
      } else {
        if (!width) {
          width = 14 + store.formattedSliderValue.value.toString().length * 9;
        } else {
          width += props2.height / 3;
        }
      }
      return store.filledWidth.value - width / 2;
    });
    const circumference = computed(() => {
      if (!store.slider.value || props2.orientation !== "circular")
        return 1;
      return 2 * Math.PI * (store.sliderWidth.value / 2);
    });
    const strokeOffset = computed(() => {
      if (props2.orientation !== "circular")
        return 0;
      return (store.sliderRange.value - store.modelValueUnrounded.value) / store.sliderRange.value * circumference.value;
    });
    const vars = computed(() => {
      return {
        "--width": props2.width,
        "--height": props2.height + "px",
        "--color": props2.color,
        "--track-color": props2.trackColor,
        "--tooltip-color": props2.tooltipColor,
        "--tooltip-text-color": props2.tooltipTextColor
      };
    });
    onMounted(() => {
      useFilledWidthObserver(store, props2);
      useTooltipObserver(tooltip, tooltipWidth);
    });
    return {
      filledWidth: store.filledWidth,
      slider: store.slider,
      holding: store.holding,
      flip: computed(() => props2.flip),
      clickHandler,
      handleKeydown,
      applyHandleHoverClass,
      hovering,
      showTooltip: computed(() => props2.tooltip === "always" || (hovering || store.holding) && props2.tooltip === "auto"),
      tooltip,
      tooltipText,
      tooltipOffset,
      vars,
      circumference,
      strokeOffset,
      circleOffset: computed(() => props2.circleOffset),
      sliderValueDegrees: store.sliderValueDegrees
    };
  }
});
const _hoisted_1 = { class: "track" };
const _hoisted_2 = { class: "track" };
const _hoisted_3 = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 100 100",
  style: { "overflow": "visible" }
};
const _hoisted_4 = /* @__PURE__ */ createElementVNode("circle", {
  stroke: "var(--track-color)",
  "vector-effect": "non-scaling-stroke",
  fill: "none",
  "stroke-width": "var(--height)",
  r: "50%",
  cx: "50",
  cy: "50"
}, null, -1);
const _hoisted_5 = ["stroke-dasharray", "stroke-dashoffset"];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("div", { class: "handle round-end" }, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.orientation === "horizontal" ? (openBlock(), createElementBlock("div", {
    key: "horizontal",
    style: normalizeStyle(__spreadValues({}, _ctx.vars)),
    class: "vue-power-slider",
    tabindex: "0",
    ref: "slider",
    onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMouseenter: _cache[2] || (_cache[2] = ($event) => _ctx.hovering = true),
    onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.hovering = false),
    onKeydown: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "tooltip",
          ref: "tooltip",
          style: normalizeStyle({
            transform: _ctx.flip ? `translate(${-_ctx.tooltipOffset}px)` : `translate(${_ctx.tooltipOffset}px)`,
            right: _ctx.flip ? "0px" : void 0,
            left: _ctx.flip ? "auto" : void 0,
            bottom: `max(calc(var(--height, 6px) + 12px), calc(var(--height, 6px) * 1.35))`
          })
        }, [
          renderSlot(_ctx.$slots, "tooltip", {}, () => [
            createTextVNode(toDisplayString(_ctx.tooltipText), 1)
          ])
        ], 4), [
          [vShow, _ctx.showTooltip]
        ])
      ]),
      _: 3
    }),
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "track")
    ]),
    createElementVNode("div", {
      class: "track-filled",
      style: normalizeStyle({
        width: _ctx.filledWidth + "px",
        right: _ctx.flip ? "0px" : void 0,
        left: _ctx.flip ? "auto" : void 0
      })
    }, null, 4),
    createElementVNode("div", {
      class: normalizeClass(["handle", { hover: _ctx.applyHandleHoverClass }]),
      style: normalizeStyle({ [_ctx.flip ? "right" : "left"]: _ctx.filledWidth - _ctx.height * 1.35 / 2 + "px" })
    }, null, 6)
  ], 36)) : _ctx.orientation === "vertical" ? (openBlock(), createElementBlock("div", {
    key: "vertical",
    style: normalizeStyle(__spreadValues({}, _ctx.vars)),
    class: "vue-power-slider vertical",
    tabindex: "0",
    ref: "slider",
    onTouchstart: _cache[5] || (_cache[5] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMousedown: _cache[6] || (_cache[6] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMouseenter: _cache[7] || (_cache[7] = ($event) => _ctx.hovering = true),
    onMouseleave: _cache[8] || (_cache[8] = ($event) => _ctx.hovering = false),
    onKeydown: _cache[9] || (_cache[9] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "tooltip",
          ref: "tooltip",
          style: normalizeStyle({
            transform: _ctx.flip ? `translateY(${_ctx.tooltipOffset}px)` : `translateY(${-_ctx.tooltipOffset}px)`,
            top: _ctx.flip ? "0px" : void 0,
            bottom: _ctx.flip ? "auto" : void 0,
            left: `max(calc(var(--height, 6px) + 14px), calc(var(--height, 6px) * 1.35))`
          })
        }, [
          renderSlot(_ctx.$slots, "tooltip", {}, () => [
            createTextVNode(toDisplayString(_ctx.tooltipText), 1)
          ])
        ], 4), [
          [vShow, _ctx.showTooltip]
        ])
      ]),
      _: 3
    }),
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "track")
    ]),
    createElementVNode("div", {
      class: "track-filled",
      style: normalizeStyle({
        height: _ctx.filledWidth + "px",
        top: _ctx.flip ? "0px" : void 0,
        bottom: _ctx.flip ? "auto" : void 0
      })
    }, null, 4),
    createElementVNode("div", {
      class: normalizeClass(["handle", { hover: _ctx.applyHandleHoverClass }]),
      style: normalizeStyle({ [_ctx.flip ? "top" : "bottom"]: _ctx.filledWidth - _ctx.height * 1.35 / 2 + "px" })
    }, null, 6)
  ], 36)) : (openBlock(), createElementBlock("div", {
    key: "circular",
    class: "vue-power-slider circular",
    tabindex: "0",
    ref: "slider",
    style: normalizeStyle(__spreadValues({}, _ctx.vars)),
    onTouchstart: _cache[10] || (_cache[10] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMousedown: _cache[11] || (_cache[11] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMouseenter: _cache[12] || (_cache[12] = ($event) => _ctx.hovering = true),
    onMouseleave: _cache[13] || (_cache[13] = ($event) => _ctx.hovering = false),
    onKeydown: _cache[14] || (_cache[14] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    (openBlock(), createElementBlock("svg", _hoisted_3, [
      _hoisted_4,
      createElementVNode("circle", {
        style: normalizeStyle([{
          transform: `rotate(${-90 + _ctx.circleOffset}deg) ${_ctx.flip ? "scaleY(-1)" : ""}`
        }, { "transform-origin": "center" }]),
        stroke: "var(--color)",
        "vector-effect": "non-scaling-stroke",
        fill: "none",
        "stroke-width": "var(--height)",
        r: "50%",
        cx: "50",
        cy: "50",
        "stroke-dasharray": _ctx.circumference,
        "stroke-dashoffset": _ctx.strokeOffset
      }, null, 12, _hoisted_5)
    ])),
    createElementVNode("div", {
      class: "handle-container",
      style: normalizeStyle({ transform: `rotate(${_ctx.circleOffset}deg)` })
    }, _hoisted_7, 4),
    createElementVNode("div", {
      class: "handle-container",
      style: normalizeStyle({ transform: `rotate(${_ctx.sliderValueDegrees + _ctx.circleOffset}deg)` })
    }, [
      createElementVNode("div", {
        class: normalizeClass(["handle", { hover: _ctx.applyHandleHoverClass }])
      }, null, 2),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: "tooltip",
            ref: "tooltip",
            style: normalizeStyle({
              transform: `rotate(${-_ctx.sliderValueDegrees - _ctx.circleOffset}deg)`,
              top: `calc(max(calc(${_ctx.tooltipOffset}px + 34px), calc(${_ctx.tooltipOffset}px + var(--height) * 1.3)) * -1)`
            })
          }, [
            renderSlot(_ctx.$slots, "tooltip", {}, () => [
              createTextVNode(toDisplayString(_ctx.tooltipText), 1)
            ])
          ], 4), [
            [vShow, _ctx.showTooltip]
          ])
        ]),
        _: 3
      })
    ], 4)
  ], 36));
}
var powerSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { powerSlider as PowerSlider };
