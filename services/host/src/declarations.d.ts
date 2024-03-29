declare module "*.module.scss" {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare const __PLATFORM__: 'mobile' | 'desktop';

declare module "shop/Router";
declare module "admin/Router";
declare module "shop/Shop";