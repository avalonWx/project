/*
 * @Author: 王潇
 * @Date: 2020-04-21 16:43:13
 * @LastEditTime: 2020-04-21 22:16:05
 * @LastEditors: Please set LastEditors
 * @Description: react添加事件支持的npm包插件，因为umi中的发布和订阅事件的耦合度过高，且只能在tsx中使用，故最后决定使用此插件，新添加的事件可以像第一个实例一样，生成一个symbol就可以了
 * @FilePath: /workspace/sie/github/src/utils/ev.ts
 */
import { EventEmitter } from 'events';
export const targetStoreEvent = Symbol('search');
export default new EventEmitter();
