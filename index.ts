/* eslint-disable @typescript-eslint/no-explicit-any */

import { EventEmitter } from 'events';
import { WriteStream } from 'fs';

declare class PluginLogger {
  private name;
  private stream;
  log(message: string): void;
  err(message: string): void;
  ok(message: string): void;
  warn(message: string): void;
  i(message: string): void;
  l(message: string): void;
  inf(message: string): void;
  info(message: string): void;
  m(message: string): void;
  msg(message: string): void;
  message(message: string): void;
  blue(message: string): void;
  b(message: string): void;
  error(message: string): void;
  e(message: string): void;
  fatal(message: string): void;
  stop(message: string): void;
  red(message: string): void;
  r(message: string): void;
  o(message: string): void;
  s(message: string): void;
  success(message: string): void;
  ready(message: string): void;
  green(message: string): void;
  g(message: string): void;
  wrn(message: string): void;
  w(message: string): void;
  warning(message: string): void;
  orange(message: string): void;
  yellow(message: string): void;
  constructor(name: string, stream: WriteStream);
}

declare class VkiQPluginOptions {
  channel: string;
  log: PluginLogger;
  debug: boolean;
  dispatch: EventEmitter;
  [K: string]: any;
}

export default function(options: VkiQPluginOptions): void {
  const log = options.log;
  log.warn('VkiQ 调试插件已加载：请在生产环境中移除此插件。');
  options.dispatch.on(options.channel, (data) => {
    log.i(`在 ${options.channel} 上接收到数据：`);
    for (const s of JSON.stringify(data).split('\n')) log.i(s);
  });
}
