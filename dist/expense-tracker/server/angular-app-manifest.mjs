
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/auth/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JMBZQKIA.js",
      "chunk-5LOB3TME.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JMBZQKIA.js",
      "chunk-5LOB3TME.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PB6QILLT.js",
      "chunk-5LOB3TME.js"
    ],
    "redirectTo": "/main/home",
    "route": "/main"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PB6QILLT.js",
      "chunk-5LOB3TME.js"
    ],
    "route": "/main/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PB6QILLT.js",
      "chunk-5LOB3TME.js"
    ],
    "route": "/main/add-expense"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PB6QILLT.js",
      "chunk-5LOB3TME.js"
    ],
    "route": "/main/view-expense"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1099, hash: '03b2257d6b851fbac5cd0fea29a938df2d288ecfaddc1d4efe1887b00df23a56', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1612, hash: '2bfe348a1d9d0318e0c3081440242089d477fe4e2ef8c314ed281f561357fa2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/home/index.html': {size: 3964, hash: '7a04dd8035e2f2fa6fd7878b447214e48fe644766674fda09692c98869fbec04', text: () => import('./assets-chunks/main_home_index_html.mjs').then(m => m.default)},
    'main/add-expense/index.html': {size: 3964, hash: '7a04dd8035e2f2fa6fd7878b447214e48fe644766674fda09692c98869fbec04', text: () => import('./assets-chunks/main_add-expense_index_html.mjs').then(m => m.default)},
    'main/view-expense/index.html': {size: 3964, hash: '7a04dd8035e2f2fa6fd7878b447214e48fe644766674fda09692c98869fbec04', text: () => import('./assets-chunks/main_view-expense_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 3964, hash: '7807d11368ae9b64219a477cb23cf4e549a3965a197c1649cbd0d434c0318ca7', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
