Webruntime.define('lwc/placeholder', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "\n" + (nativeShadow ? (":host > div" + shadowSelector + " {text-align: center;color: #c23335;}") : (hostSelector + " > div" + shadowSelector + " {text-align: center;color: #c23335;}")) + "\nimg" + shadowSelector + " {height: 70px;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element,
        d: api_dynamic
      } = $api;
      return [api_element("div", {
        classMap: {
          "slds-p-around_large": true
        },
        key: 2
      }, [api_element("img", {
        classMap: {
          "logo": true
        },
        attrs: {
          "src": $cmp.logoUrl,
          "alt": "Company logo"
        },
        key: 0
      }, []), api_element("p", {
        classMap: {
          "slds-p-around_small": true
        },
        key: 1
      }, [api_dynamic($cmp.message)])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-placeholder_placeholder-host",
      shadowAttribute: "lwc-placeholder_placeholder"
    };

    var BIKE_ASSETS_URL = '/assets/project/ac99665002/staticresources/bike_assets';

    class Placeholder extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.message = void 0;
        this.logoUrl = BIKE_ASSETS_URL + '/logo.svg';
      }

    }

    lwc.registerDecorators(Placeholder, {
      publicProps: {
        message: {
          config: 0
        }
      },
      track: {
        logoUrl: 1
      }
    });

    var placeholder = lwc.registerComponent(Placeholder, {
      tmpl: _tmpl
    });

    return placeholder;

});
