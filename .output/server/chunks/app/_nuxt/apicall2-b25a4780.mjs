import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch, a as useAsyncData } from './fetch-c856ee42.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'ohash';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "apicall2",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: credits } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/v1/titles/ts236033/credits",
      {
        baseURL: "http://10.0.17.15:3000"
      },
      "$QJfJAqIHrv"
    )), __temp = await __temp, __restore(), __temp);
    const { data: titles, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "titles",
      () => $fetch(`/api/v1/titles`, {
        baseURL: "http://10.0.17.15:3000"
        // params: {
        //   page: page.value,
        //   search: search.value,
        // }
      })
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p><!--[-->`);
      ssrRenderList(unref(titles).data.title, (title) => {
        _push(`<div><p>${ssrInterpolate(title.id)}|${ssrInterpolate(title.title)}</p></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(credits).data, (credit) => {
        _push(`<div>${ssrInterpolate(credit.name)}</div>`);
      });
      _push(`<!--]--></p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apicall2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=apicall2-b25a4780.mjs.map
