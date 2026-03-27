import { onRequestOptions as __api_create_order_js_onRequestOptions } from "/Users/icl/Downloads/icanlearn-landing/functions/api/create-order.js"
import { onRequestPost as __api_create_order_js_onRequestPost } from "/Users/icl/Downloads/icanlearn-landing/functions/api/create-order.js"

export const routes = [
    {
      routePath: "/api/create-order",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_create_order_js_onRequestOptions],
    },
  {
      routePath: "/api/create-order",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_create_order_js_onRequestPost],
    },
  ]