import "antd-mobile/es/components/toast/toast.css";
import { clear, show, config } from 'antd-mobile/es/components/toast/methods';
export type { ToastShowProps, ToastHandler } from 'antd-mobile/es/components/toast/methods';

declare const Toast: {
    show: typeof show;
    clear: typeof clear;
    config: typeof config;
};
export default Toast;
