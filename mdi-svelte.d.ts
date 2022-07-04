import { SvelteComponentTyped } from 'svelte';

export interface IconProps {
  path: string;
  size?: number | string;
  color?: string;
  flip?: boolean | string;
  rotate?: number;
  spin?: number | boolean;
}
export default class Icon extends SvelteComponentTyped<IconProps> { }