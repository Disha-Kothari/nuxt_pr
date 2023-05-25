import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-c856ee42.mjs';
import { ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "apicall",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref("");
    const page = ref(1);
    const { data: cafes, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://api.roastandbrew.coffee/api/v1/cafes", {
      params: {
        page: page.value
        // search:search.value
      },
      pick: ["id", "company_id", "company", "location_name"],
      watch: [page]
      //,search
    }, "$T9eel7zV9s")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><ul><!--[-->`);
      ssrRenderList(unref(cafes).data, (cafe) => {
        _push(`<li>${ssrInterpolate(cafe.company.name + " - " + cafe.location_name)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (unref(page) > 1) {
        _push(`<button>Previous</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(page) < unref(cafes).last_page) {
        _push(`<button>Next</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apicall.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=apicall-980dce4b.mjs.map
