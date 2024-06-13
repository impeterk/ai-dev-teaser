import { writable, type Writable } from "svelte/store";

export const drawer = writable<HTMLInputElement>()