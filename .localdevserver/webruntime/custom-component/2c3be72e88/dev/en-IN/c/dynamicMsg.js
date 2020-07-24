Webruntime.define('lwc/dynamicMsg', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("p", {
        classMap: {
          "msg": true
        },
        key: 0
      }, [api_dynamic($cmp.msg)])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-dynamicMsg_dynamicMsg-host",
      shadowAttribute: "lwc-dynamicMsg_dynamicMsg"
    };

    class DynamicMsg extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.msg = 'mani<b>abc</b>';
      }

    }

    lwc.registerDecorators(DynamicMsg, {
      fields: ["msg"]
    });

    var dynamicMsg = lwc.registerComponent(DynamicMsg, {
      tmpl: _tmpl
    });

    return dynamicMsg;

});
