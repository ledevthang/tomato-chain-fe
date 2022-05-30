import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45569f3a = () => interopDefault(import('../pages/about-us/index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _6f6a3312 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _612ec2ba = () => interopDefault(import('../pages/create-product/index.vue' /* webpackChunkName: "pages/create-product/index" */))
const _8ae9b25e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _74e14bd0 = () => interopDefault(import('../pages/product-retrieval/index.vue' /* webpackChunkName: "pages/product-retrieval/index" */))
const _36a64ebf = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _7f7e1a9f = () => interopDefault(import('../pages/company/_id.vue' /* webpackChunkName: "pages/company/_id" */))
const _734e1911 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _47b82c89 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _45569f3a,
    name: "about-us"
  }, {
    path: "/company",
    component: _6f6a3312,
    name: "company"
  }, {
    path: "/create-product",
    component: _612ec2ba,
    name: "create-product"
  }, {
    path: "/inspire",
    component: _8ae9b25e,
    name: "inspire"
  }, {
    path: "/product-retrieval",
    component: _74e14bd0,
    name: "product-retrieval"
  }, {
    path: "/register",
    component: _36a64ebf,
    name: "register"
  }, {
    path: "/company/:id",
    component: _7f7e1a9f,
    name: "company-id"
  }, {
    path: "/product/:id?",
    component: _734e1911,
    name: "product-id"
  }, {
    path: "/",
    component: _47b82c89,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
