/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
  const ref: string;
  export default ref;
}
declare module '*.bmp' {
  const ref: string;
  export default ref;
}
declare module '*.gif' {
  const ref: string;
  export default ref;
}
declare module '*.jpg' {
  const ref: string;
  export default ref;
}
declare module '*.jpeg' {
  const ref: string;
  export default ref;
}
declare module '*.png' {
  const ref: string;
  export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */
declare module '@elastic/eui/es/components/icon/icon';

declare module '@elastic/eui/es/components/icon/assets/apps';
declare module '@elastic/eui/es/components/icon/assets/app_lens';
declare module '@elastic/eui/es/components/icon/assets/app_dashboard';
declare module '@elastic/eui/es/components/icon/assets/arrow_down';
declare module '@elastic/eui/es/components/icon/assets/arrow_right';
declare module '@elastic/eui/es/components/icon/assets/arrow_up';
declare module '@elastic/eui/es/components/icon/assets/check';
declare module '@elastic/eui/es/components/icon/assets/cross';
declare module '@elastic/eui/es/components/icon/assets/documentEdit';
declare module '@elastic/eui/es/components/icon/assets/dot';
declare module '@elastic/eui/es/components/icon/assets/lockOpen';
declare module '@elastic/eui/es/components/icon/assets/user';
declare module '@elastic/eui/es/components/icon/assets/lock';
declare module '@elastic/eui/es/components/icon/assets/empty';
declare module '@elastic/eui/es/components/icon/assets/eye';
declare module '@elastic/eui/es/components/icon/assets/eye_closed';
declare module '@elastic/eui/es/components/icon/assets/home';
declare module '@elastic/eui/es/components/icon/assets/logo_azure_mono';
declare module '@elastic/eui/es/components/icon/assets/logo_aws_mono';
declare module '@elastic/eui/es/components/icon/assets/logo_kibana';
declare module '@elastic/eui/es/components/icon/assets/logo_google_g';
declare module '@elastic/eui/es/components/icon/assets/logo_security';
declare module '@elastic/eui/es/components/icon/assets/menu';
declare module '@elastic/eui/es/components/icon/assets/cheer';
declare module '@elastic/eui/es/components/icon/assets/search';
declare module '@elastic/eui/es/components/icon/assets/training';
declare module '@elastic/eui/es/components/icon/assets/trash';
