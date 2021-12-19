import { DefineComponent, Plugin } from 'vue';

declare const VuePowerSlider: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default VuePowerSlider;
