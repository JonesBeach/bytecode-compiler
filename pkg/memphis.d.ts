/* tslint:disable */
/* eslint-disable */
export function greet(): string;
export function evaluate(code: string): string;
export function compile(code: string): WasmCodeObject;
export class WasmCodeObject {
  private constructor();
  free(): void;
  readonly bytecode: any[];
  readonly varnames: any[];
  readonly freevars: any[];
  readonly names: any[];
  readonly constants: any[];
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly greet: () => [number, number];
  readonly evaluate: (a: number, b: number) => [number, number];
  readonly __wbg_wasmcodeobject_free: (a: number, b: number) => void;
  readonly wasmcodeobject_bytecode: (a: number) => [number, number];
  readonly wasmcodeobject_varnames: (a: number) => [number, number];
  readonly wasmcodeobject_freevars: (a: number) => [number, number];
  readonly wasmcodeobject_names: (a: number) => [number, number];
  readonly wasmcodeobject_constants: (a: number) => [number, number];
  readonly compile: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
