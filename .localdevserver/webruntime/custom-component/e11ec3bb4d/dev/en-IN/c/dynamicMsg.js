Webruntime.define('lwc/dynamicMsg', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        b: api_bind,
        h: api_element
      } = $api;
      const {
        _m0
      } = $ctx;
      return [api_element("span", {
        context: {
          lwc: {
            dom: "manual"
          }
        },
        key: 0,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
        }
      }, [])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-formattedRichText_formattedRichText-host",
      shadowAttribute: "lightning-formattedRichText_formattedRichText"
    };

    var _tmpl$1 = void 0;

    var freeze$1 = Object.freeze || function (x) {
      return x;
    };

    var html = freeze$1(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

    var svg = freeze$1(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);
    var svgFilters = freeze$1(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);
    var mathMl = freeze$1(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);
    var text = freeze$1(['#text']);

    var freeze$2 = Object.freeze || function (x) {
      return x;
    };

    var html$1 = freeze$2(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);
    var svg$1 = freeze$2(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
    var mathMl$1 = freeze$2(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
    var xml = freeze$2(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);
    var hasOwnProperty = Object.hasOwnProperty;
    var setPrototypeOf = Object.setPrototypeOf;

    var _ref$1 = typeof Reflect !== 'undefined' && Reflect;

    var apply$1 = _ref$1.apply;

    if (!apply$1) {
      apply$1 = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }
    /* Add properties to a lookup table */


    function addToSet(set, array) {
      if (setPrototypeOf) {
        // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
      }

      var l = array.length;

      while (l--) {
        var element = array[l];

        if (typeof element === 'string') {
          var lcElement = element.toLowerCase();

          if (lcElement !== element) {
            // Config presets (e.g. tags.js, attrs.js) are immutable.
            if (!Object.isFrozen(array)) {
              array[l] = lcElement;
            }

            element = lcElement;
          }
        }

        set[element] = true;
      }

      return set;
    }
    /* Shallow clone an object */


    function clone(object) {
      var newObject = {};
      var property = void 0;

      for (property in object) {
        if (apply$1(hasOwnProperty, object, [property])) {
          newObject[property] = object[property];
        }
      }

      return newObject;
    }

    var seal = Object.seal || function (x) {
      return x;
    };

    var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

    var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

    var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
    );

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      } else {
        return Array.from(arr);
      }
    }

    var _ref = typeof Reflect !== 'undefined' && Reflect;

    var apply = _ref.apply;
    var arraySlice = Array.prototype.slice;
    var freeze = Object.freeze;

    var getGlobal = function getGlobal() {
      return typeof window === 'undefined' ? null : window;
    };

    if (!apply) {
      apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }
    /**
     * Creates a no-op policy for internal use only.
     * Don't export this function outside this module!
     * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
     * @param {Document} document The document object (to determine policy name suffix)
     * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
     * are not supported).
     */


    var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
      if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
        return null;
      } // Allow the callers to control the unique policy name
      // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
      // Policy creation with duplicate names throws in Trusted Types.


      var suffix = null;
      var ATTR_NAME = 'data-tt-policy-suffix';

      if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
        suffix = document.currentScript.getAttribute(ATTR_NAME);
      }

      var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

      try {
        return trustedTypes.createPolicy(policyName, {
          createHTML: function createHTML(html$$1) {
            return html$$1;
          }
        });
      } catch (error) {
        // Policy creation failed (most likely another DOMPurify script has
        // already run). Skip creating the policy, as this will only cause errors
        // if TT are enforced.
        console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
        return null;
      }
    };

    function createDOMPurify() {
      var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

      var DOMPurify = function DOMPurify(root) {
        return createDOMPurify(root);
      };
      /**
       * Version label, exposed for easier checks
       * if DOMPurify is up to date or not
       */


      DOMPurify.version = '2.0.6';
      /**
       * Array of elements that DOMPurify removed during sanitation.
       * Empty if nothing was removed.
       */

      DOMPurify.removed = [];

      if (!window || !window.document || window.document.nodeType !== 9) {
        // Not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
      }

      var originalDocument = window.document;
      var useDOMParser = false;
      var removeTitle = false;
      var document = window.document;
      var DocumentFragment = window.DocumentFragment,
          HTMLTemplateElement = window.HTMLTemplateElement,
          Node = window.Node,
          NodeFilter = window.NodeFilter,
          _window$NamedNodeMap = window.NamedNodeMap,
          NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
          Text = window.Text,
          Comment = window.Comment,
          DOMParser = window.DOMParser,
          TrustedTypes = window.TrustedTypes; // As per issue #47, the web-components registry is inherited by a
      // new document created via createHTMLDocument. As per the spec
      // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
      // a new empty registry is used when creating a template contents owner
      // document, so we use that as our parent document to ensure nothing
      // is inherited.

      if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');

        if (template.content && template.content.ownerDocument) {
          document = template.content.ownerDocument;
        }
      }

      var trustedTypesPolicy = _createTrustedTypesPolicy(TrustedTypes, originalDocument);

      var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
      var _document = document,
          implementation = _document.implementation,
          createNodeIterator = _document.createNodeIterator,
          getElementsByTagName = _document.getElementsByTagName,
          createDocumentFragment = _document.createDocumentFragment;
      var importNode = originalDocument.importNode;
      var hooks = {};
      /**
       * Expose whether this browser supports running the full DOMPurify.
       */

      DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;
      var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
          ERB_EXPR$$1 = ERB_EXPR,
          DATA_ATTR$$1 = DATA_ATTR,
          ARIA_ATTR$$1 = ARIA_ATTR,
          IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
          ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
      var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
      /**
       * We consider the elements and attributes below to be safe. Ideally
       * don't add any new ones but feel free to remove unwanted ones.
       */

      /* allowed element names */

      var ALLOWED_TAGS = null;
      var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));
      /* Allowed attribute names */

      var ALLOWED_ATTR = null;
      var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));
      /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

      var FORBID_TAGS = null;
      /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

      var FORBID_ATTR = null;
      /* Decide if ARIA attributes are okay */

      var ALLOW_ARIA_ATTR = true;
      /* Decide if custom data attributes are okay */

      var ALLOW_DATA_ATTR = true;
      /* Decide if unknown protocols are okay */

      var ALLOW_UNKNOWN_PROTOCOLS = false;
      /* Output should be safe for jQuery's $() factory? */

      var SAFE_FOR_JQUERY = false;
      /* Output should be safe for common template engines.
       * This means, DOMPurify removes data attributes, mustaches and ERB
       */

      var SAFE_FOR_TEMPLATES = false;
      /* Decide if document with <html>... should be returned */

      var WHOLE_DOCUMENT = false;
      /* Track whether config is already set on this instance of DOMPurify. */

      var SET_CONFIG = false;
      /* Decide if all elements (e.g. style, script) must be children of
       * document.body. By default, browsers might move them to document.head */

      var FORCE_BODY = false;
      /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
       * string (or a TrustedHTML object if Trusted Types are supported).
       * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
       */

      var RETURN_DOM = false;
      /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
       * string  (or a TrustedHTML object if Trusted Types are supported) */

      var RETURN_DOM_FRAGMENT = false;
      /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
       * `Node` is imported into the current `Document`. If this flag is not enabled the
       * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
       * DOMPurify. */

      var RETURN_DOM_IMPORT = false;
      /* Try to return a Trusted Type object instead of a string, retrun a string in
       * case Trusted Types are not supported  */

      var RETURN_TRUSTED_TYPE = false;
      /* Output should be free from DOM clobbering attacks? */

      var SANITIZE_DOM = true;
      /* Keep element content when removing element? */

      var KEEP_CONTENT = true;
      /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
       * of importing it into a new Document and returning a sanitized copy */

      var IN_PLACE = false;
      /* Allow usage of profiles like html, svg and mathMl */

      var USE_PROFILES = {};
      /* Tags to ignore content of when KEEP_CONTENT is true */

      var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'script', 'style', 'template', 'thead', 'title', 'svg', 'video']);
      /* Tags that are safe for data: URIs */

      var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);
      /* Attributes safe for values like "javascript:" */

      var URI_SAFE_ATTRIBUTES = null;
      var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);
      /* Keep a reference to config to pass to hooks */

      var CONFIG = null;
      /* Ideally, do not touch anything below this line */

      /* ______________________________________________ */

      var formElement = document.createElement('form');
      /**
       * _parseConfig
       *
       * @param  {Object} cfg optional config literal
       */
      // eslint-disable-next-line complexity

      var _parseConfig = function _parseConfig(cfg) {
        if (CONFIG && CONFIG === cfg) {
          return;
        }
        /* Shield configuration object from tampering */


        if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
          cfg = {};
        }
        /* Set configuration parameters */


        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
        USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

        SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false

        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

        RETURN_DOM = cfg.RETURN_DOM || false; // Default false

        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

        RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false

        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

        FORCE_BODY = cfg.FORCE_BODY || false; // Default false

        SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

        KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

        IN_PLACE = cfg.IN_PLACE || false; // Default false

        IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

        if (SAFE_FOR_TEMPLATES) {
          ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
          RETURN_DOM = true;
        }
        /* Parse profile info */


        if (USE_PROFILES) {
          ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
          ALLOWED_ATTR = [];

          if (USE_PROFILES.html === true) {
            addToSet(ALLOWED_TAGS, html);
            addToSet(ALLOWED_ATTR, html$1);
          }

          if (USE_PROFILES.svg === true) {
            addToSet(ALLOWED_TAGS, svg);
            addToSet(ALLOWED_ATTR, svg$1);
            addToSet(ALLOWED_ATTR, xml);
          }

          if (USE_PROFILES.svgFilters === true) {
            addToSet(ALLOWED_TAGS, svgFilters);
            addToSet(ALLOWED_ATTR, svg$1);
            addToSet(ALLOWED_ATTR, xml);
          }

          if (USE_PROFILES.mathMl === true) {
            addToSet(ALLOWED_TAGS, mathMl);
            addToSet(ALLOWED_ATTR, mathMl$1);
            addToSet(ALLOWED_ATTR, xml);
          }
        }
        /* Merge configuration parameters */


        if (cfg.ADD_TAGS) {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone(ALLOWED_TAGS);
          }

          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }

        if (cfg.ADD_ATTR) {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone(ALLOWED_ATTR);
          }

          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }

        if (cfg.ADD_URI_SAFE_ATTR) {
          addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }
        /* Add #text in case KEEP_CONTENT is set to true */


        if (KEEP_CONTENT) {
          ALLOWED_TAGS['#text'] = true;
        }
        /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


        if (WHOLE_DOCUMENT) {
          addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
        }
        /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


        if (ALLOWED_TAGS.table) {
          addToSet(ALLOWED_TAGS, ['tbody']);
          delete FORBID_TAGS.tbody;
        } // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.


        if (freeze) {
          freeze(cfg);
        }

        CONFIG = cfg;
      };
      /**
       * _forceRemove
       *
       * @param  {Node} node a DOM node
       */


      var _forceRemove = function _forceRemove(node) {
        DOMPurify.removed.push({
          element: node
        });

        try {
          node.parentNode.removeChild(node);
        } catch (error) {
          node.outerHTML = emptyHTML;
        }
      };
      /**
       * _removeAttribute
       *
       * @param  {String} name an Attribute name
       * @param  {Node} node a DOM node
       */


      var _removeAttribute = function _removeAttribute(name, node) {
        try {
          DOMPurify.removed.push({
            attribute: node.getAttributeNode(name),
            from: node
          });
        } catch (error) {
          DOMPurify.removed.push({
            attribute: null,
            from: node
          });
        }

        node.removeAttribute(name);
      };
      /**
       * _initDocument
       *
       * @param  {String} dirty a string of dirty markup
       * @return {Document} a DOM, filled with the dirty markup
       */


      var _initDocument = function _initDocument(dirty) {
        /* Create a HTML document */
        var doc = void 0;
        var leadingWhitespace = void 0;

        if (FORCE_BODY) {
          dirty = '<remove></remove>' + dirty;
        } else {
          /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
          var matches = dirty.match(/^[\s]+/);
          leadingWhitespace = matches && matches[0];

          if (leadingWhitespace) {
            dirty = dirty.slice(leadingWhitespace.length);
          }
        }
        /* Use DOMParser to workaround Firefox bug (see comment below) */


        if (useDOMParser) {
          try {
            doc = new DOMParser().parseFromString(dirty, 'text/html');
          } catch (error) {}
        }
        /* Remove title to fix a mXSS bug in older MS Edge */


        if (removeTitle) {
          addToSet(FORBID_TAGS, ['title']);
        }
        /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
        Safari (see comment below) */


        if (!doc || !doc.documentElement) {
          doc = implementation.createHTMLDocument('');
          var _doc = doc,
              body = _doc.body;
          body.parentNode.removeChild(body.parentNode.firstElementChild);
          body.outerHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        if (leadingWhitespace) {
          doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
        }
        /* Work on whole document or just its body */


        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }; // Firefox uses a different parser for innerHTML rather than
      // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
      // which means that you *must* use DOMParser, otherwise the output may
      // not be safe if used in a document.write context later.
      //
      // So we feature detect the Firefox bug and use the DOMParser if necessary.
      //
      // Chrome 77 and other versions ship an mXSS bug that caused a bypass to
      // happen. We now check for the mXSS trigger and react accordingly.


      if (DOMPurify.isSupported) {
        (function () {
          try {
            var doc = _initDocument('<svg><p><textarea><img src="</textarea><img src=x abc=1//">');

            if (doc.querySelector('svg img')) {
              useDOMParser = true;
            }
          } catch (error) {}
        })();

        (function () {
          try {
            var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');

            if (/<\/title/.test(doc.querySelector('title').innerHTML)) {
              removeTitle = true;
            }
          } catch (error) {}
        })();
      }
      /**
       * _createIterator
       *
       * @param  {Document} root document/fragment to create iterator for
       * @return {Iterator} iterator instance
       */


      var _createIterator = function _createIterator(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
          return NodeFilter.FILTER_ACCEPT;
        }, false);
      };
      /**
       * _isClobbered
       *
       * @param  {Node} elm element to check for clobbering attacks
       * @return {Boolean} true if clobbered, false if safe
       */


      var _isClobbered = function _isClobbered(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
          return false;
        }

        if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
          return true;
        }

        return false;
      };
      /**
       * _isNode
       *
       * @param  {Node} obj object to check whether it's a DOM node
       * @return {Boolean} true is object is a DOM node
       */


      var _isNode = function _isNode(obj) {
        return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
      };
      /**
       * _executeHook
       * Execute user configurable hooks
       *
       * @param  {String} entryPoint  Name of the hook's entry point
       * @param  {Node} currentNode node to work on with the hook
       * @param  {Object} data additional hook parameters
       */


      var _executeHook = function _executeHook(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
          return;
        }

        hooks[entryPoint].forEach(function (hook) {
          hook.call(DOMPurify, currentNode, data, CONFIG);
        });
      };
      /**
       * _sanitizeElements
       *
       * @protect nodeName
       * @protect textContent
       * @protect removeChild
       *
       * @param   {Node} currentNode to check for permission to exist
       * @return  {Boolean} true if node was killed, false if left alive
       */
      // eslint-disable-next-line complexity


      var _sanitizeElements = function _sanitizeElements(currentNode) {
        var content = void 0;
        /* Execute a hook if present */

        _executeHook('beforeSanitizeElements', currentNode, null);
        /* Check if element is clobbered or can clobber */


        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);

          return true;
        }
        /* Now let's check the element's type and name */


        var tagName = currentNode.nodeName.toLowerCase();
        /* Execute a hook if present */

        _executeHook('uponSanitizeElement', currentNode, {
          tagName: tagName,
          allowedTags: ALLOWED_TAGS
        });
        /* Take care of an mXSS pattern using p, br inside svg, math */


        if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br').length !== 0) {
          _forceRemove(currentNode);

          return true;
        }
        /* Remove element if anything forbids its presence */


        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          /* Keep content except for black-listed elements */
          if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
            try {
              var htmlToInsert = currentNode.innerHTML;
              currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
            } catch (error) {}
          }

          _forceRemove(currentNode);

          return true;
        }
        /* Remove in case a noscript/noembed XSS is suspected */


        if (tagName === 'noscript' && /<\/noscript/i.test(currentNode.innerHTML)) {
          _forceRemove(currentNode);

          return true;
        }

        if (tagName === 'noembed' && /<\/noembed/i.test(currentNode.innerHTML)) {
          _forceRemove(currentNode);

          return true;
        }
        /* Convert markup to cover jQuery behavior */


        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
          DOMPurify.removed.push({
            element: currentNode.cloneNode()
          });

          if (currentNode.innerHTML) {
            currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
          } else {
            currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
          }
        }
        /* Sanitize element content to be template-safe */


        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
          /* Get the element's text content */
          content = currentNode.textContent;
          content = content.replace(MUSTACHE_EXPR$$1, ' ');
          content = content.replace(ERB_EXPR$$1, ' ');

          if (currentNode.textContent !== content) {
            DOMPurify.removed.push({
              element: currentNode.cloneNode()
            });
            currentNode.textContent = content;
          }
        }
        /* Execute a hook if present */


        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
      };
      /**
       * _isValidAttribute
       *
       * @param  {string} lcTag Lowercase tag name of containing element.
       * @param  {string} lcName Lowercase attribute name.
       * @param  {string} value Attribute value.
       * @return {Boolean} Returns true if `value` is valid, otherwise false.
       */
      // eslint-disable-next-line complexity


      var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
        /* Make sure attribute cannot clobber */
        if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
          return false;
        }
        /* Allow valid data-* attributes: At least one character after "-"
            (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
            XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
            We don't need to check the value; it's always URI safe. */


        if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) ; else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          return false;
          /* Check value is safe. First, is attr inert? If so, is safe */
        } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
          return false;
        }

        return true;
      };
      /**
       * _sanitizeAttributes
       *
       * @protect attributes
       * @protect nodeName
       * @protect removeAttribute
       * @protect setAttribute
       *
       * @param  {Node} currentNode to sanitize
       */


      var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        var attr = void 0;
        var value = void 0;
        var lcName = void 0;
        var idAttr = void 0;
        var l = void 0;
        /* Execute a hook if present */

        _executeHook('beforeSanitizeAttributes', currentNode, null);

        var attributes = currentNode.attributes;
        /* Check if we have attributes; if not we might have a text node */

        if (!attributes) {
          return;
        }

        var hookEvent = {
          attrName: '',
          attrValue: '',
          keepAttr: true,
          allowedAttributes: ALLOWED_ATTR
        };
        l = attributes.length;
        /* Go backwards over all attributes; safely remove bad ones */

        while (l--) {
          attr = attributes[l];
          var _attr = attr,
              name = _attr.name,
              namespaceURI = _attr.namespaceURI;
          value = attr.value.trim();
          lcName = name.toLowerCase();
          /* Execute a hook if present */

          hookEvent.attrName = lcName;
          hookEvent.attrValue = value;
          hookEvent.keepAttr = true;

          _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

          value = hookEvent.attrValue;
          /* Remove attribute */
          // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
          // remove a "name" attribute from an <img> tag that has an "id"
          // attribute at the time.

          if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
            idAttr = attributes.id;
            attributes = apply(arraySlice, attributes, []);

            _removeAttribute('id', currentNode);

            _removeAttribute(name, currentNode);

            if (attributes.indexOf(idAttr) > l) {
              currentNode.setAttribute('id', idAttr.value);
            }
          } else if ( // This works around a bug in Safari, where input[type=file]
          // cannot be dynamically set after type has been removed
          currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && hookEvent.keepAttr && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
            continue;
          } else {
            // This avoids a crash in Safari v9.0 with double-ids.
            // The trick is to first set the id to be empty and then to
            // remove the attribute
            if (name === 'id') {
              currentNode.setAttribute(name, '');
            }

            _removeAttribute(name, currentNode);
          }
          /* Did the hooks approve of the attribute? */


          if (!hookEvent.keepAttr) {
            continue;
          }
          /* Sanitize attribute content to be template-safe */


          if (SAFE_FOR_TEMPLATES) {
            value = value.replace(MUSTACHE_EXPR$$1, ' ');
            value = value.replace(ERB_EXPR$$1, ' ');
          }
          /* Is `value` valid for this attribute? */


          var lcTag = currentNode.nodeName.toLowerCase();

          if (!_isValidAttribute(lcTag, lcName, value)) {
            continue;
          }
          /* Handle invalid data-* attribute set by try-catching it */


          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
              currentNode.setAttribute(name, value);
            }

            DOMPurify.removed.pop();
          } catch (error) {}
        }
        /* Execute a hook if present */


        _executeHook('afterSanitizeAttributes', currentNode, null);
      };
      /**
       * _sanitizeShadowDOM
       *
       * @param  {DocumentFragment} fragment to iterate over recursively
       */


      var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
        var shadowNode = void 0;

        var shadowIterator = _createIterator(fragment);
        /* Execute a hook if present */


        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while (shadowNode = shadowIterator.nextNode()) {
          /* Execute a hook if present */
          _executeHook('uponSanitizeShadowNode', shadowNode, null);
          /* Sanitize tags and elements */


          if (_sanitizeElements(shadowNode)) {
            continue;
          }
          /* Deep shadow DOM detected */


          if (shadowNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(shadowNode.content);
          }
          /* Check attributes, sanitize if necessary */


          _sanitizeAttributes(shadowNode);
        }
        /* Execute a hook if present */


        _executeHook('afterSanitizeShadowDOM', fragment, null);
      };
      /**
       * Sanitize
       * Public method providing core sanitation functionality
       *
       * @param {String|Node} dirty string or DOM node
       * @param {Object} configuration object
       */
      // eslint-disable-next-line complexity


      DOMPurify.sanitize = function (dirty, cfg) {
        var body = void 0;
        var importedNode = void 0;
        var currentNode = void 0;
        var oldNode = void 0;
        var returnNode = void 0;
        /* Make sure we have a string to sanitize.
          DO NOT return early, as this will return the wrong type if
          the user has requested a DOM object rather than a string */

        if (!dirty) {
          dirty = '<!-->';
        }
        /* Stringify, in case dirty is an object */


        if (typeof dirty !== 'string' && !_isNode(dirty)) {
          // eslint-disable-next-line no-negated-condition
          if (typeof dirty.toString !== 'function') {
            throw new TypeError('toString is not a function');
          } else {
            dirty = dirty.toString();

            if (typeof dirty !== 'string') {
              throw new TypeError('dirty is not a string, aborting');
            }
          }
        }
        /* Check we can run. Otherwise fall back or ignore */


        if (!DOMPurify.isSupported) {
          if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
            if (typeof dirty === 'string') {
              return window.toStaticHTML(dirty);
            }

            if (_isNode(dirty)) {
              return window.toStaticHTML(dirty.outerHTML);
            }
          }

          return dirty;
        }
        /* Assign config vars */


        if (!SET_CONFIG) {
          _parseConfig(cfg);
        }
        /* Clean up removed elements */


        DOMPurify.removed = [];

        if (IN_PLACE) ; else if (dirty instanceof Node) {
          /* If dirty is a DOM element, append to an empty document to avoid
             elements being stripped by the parser */
          body = _initDocument('<!-->');
          importedNode = body.ownerDocument.importNode(dirty, true);

          if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
            /* Node is already a body, use as is */
            body = importedNode;
          } else if (importedNode.nodeName === 'HTML') {
            body = importedNode;
          } else {
            // eslint-disable-next-line unicorn/prefer-node-append
            body.appendChild(importedNode);
          }
        } else {
          /* Exit directly if we have nothing to do */
          if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && RETURN_TRUSTED_TYPE && dirty.indexOf('<') === -1) {
            return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
          }
          /* Initialize the document to work on */


          body = _initDocument(dirty);
          /* Check we have a DOM node from the data */

          if (!body) {
            return RETURN_DOM ? null : emptyHTML;
          }
        }
        /* Remove first element node (ours) if FORCE_BODY is set */


        if (body && FORCE_BODY) {
          _forceRemove(body.firstChild);
        }
        /* Get node iterator */


        var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
        /* Now start iterating over the created document */


        while (currentNode = nodeIterator.nextNode()) {
          /* Fix IE's strange behavior with manipulated textNodes #89 */
          if (currentNode.nodeType === 3 && currentNode === oldNode) {
            continue;
          }
          /* Sanitize tags and elements */


          if (_sanitizeElements(currentNode)) {
            continue;
          }
          /* Shadow DOM detected, sanitize it */


          if (currentNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(currentNode.content);
          }
          /* Check attributes, sanitize if necessary */


          _sanitizeAttributes(currentNode);

          oldNode = currentNode;
        }

        oldNode = null;
        /* If we sanitized `dirty` in-place, return it. */

        if (IN_PLACE) {
          return dirty;
        }
        /* Return sanitized string or DOM */


        if (RETURN_DOM) {
          if (RETURN_DOM_FRAGMENT) {
            returnNode = createDocumentFragment.call(body.ownerDocument);

            while (body.firstChild) {
              // eslint-disable-next-line unicorn/prefer-node-append
              returnNode.appendChild(body.firstChild);
            }
          } else {
            returnNode = body;
          }

          if (RETURN_DOM_IMPORT) {
            /* AdoptNode() is not used because internal state is not reset
                   (e.g. the past names map of a HTMLFormElement), this is safe
                   in theory but we would rather not risk another attack vector.
                   The state that is cloned by importNode() is explicitly defined
                   by the specs. */
            returnNode = importNode.call(originalDocument, returnNode, true);
          }

          return returnNode;
        }

        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        /* Sanitize final string template-safe */

        if (SAFE_FOR_TEMPLATES) {
          serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
          serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
        }

        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
      };
      /**
       * Public method to set the configuration once
       * setConfig
       *
       * @param {Object} cfg configuration object
       */


      DOMPurify.setConfig = function (cfg) {
        _parseConfig(cfg);

        SET_CONFIG = true;
      };
      /**
       * Public method to remove the configuration
       * clearConfig
       *
       */


      DOMPurify.clearConfig = function () {
        CONFIG = null;
        SET_CONFIG = false;
      };
      /**
       * Public method to check if an attribute value is valid.
       * Uses last set config, if any. Otherwise, uses config defaults.
       * isValidAttribute
       *
       * @param  {string} tag Tag name of containing element.
       * @param  {string} attr Attribute name.
       * @param  {string} value Attribute value.
       * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
       */


      DOMPurify.isValidAttribute = function (tag, attr, value) {
        /* Initialize shared config vars if necessary. */
        if (!CONFIG) {
          _parseConfig({});
        }

        var lcTag = tag.toLowerCase();
        var lcName = attr.toLowerCase();
        return _isValidAttribute(lcTag, lcName, value);
      };
      /**
       * AddHook
       * Public method to add DOMPurify hooks
       *
       * @param {String} entryPoint entry point for the hook to add
       * @param {Function} hookFunction function to execute
       */


      DOMPurify.addHook = function (entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') {
          return;
        }

        hooks[entryPoint] = hooks[entryPoint] || [];
        hooks[entryPoint].push(hookFunction);
      };
      /**
       * RemoveHook
       * Public method to remove a DOMPurify hook at a given entryPoint
       * (pops it from the stack of hooks if more are present)
       *
       * @param {String} entryPoint entry point for the hook to remove
       */


      DOMPurify.removeHook = function (entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint].pop();
        }
      };
      /**
       * RemoveHooks
       * Public method to remove all DOMPurify hooks at a given entryPoint
       *
       * @param  {String} entryPoint entry point for the hooks to remove
       */


      DOMPurify.removeHooks = function (entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint] = [];
        }
      };
      /**
       * RemoveAllHooks
       * Public method to remove all DOMPurify hooks
       *
       */


      DOMPurify.removeAllHooks = function () {
        hooks = {};
      };

      return DOMPurify;
    }

    var purify = createDOMPurify();
    var purify$1 = lwc.registerComponent(purify, {
      tmpl: _tmpl$1
    });

    /**
     * Sanitize method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     * @return {String} sanitized string
     */

    function sanitizeHTML(dirty, config) {
      return purify$1.sanitize(dirty, config);
    }

    const urlRegexString = "((?:(?:https?|ftp):\\/\\/(?:[\\w\\-\\|=%~#\\/+*@\\.,;:\\?!']|&){0,2047}(?:[\\(\\)\\.\\w=\\/+#-]*)[^\\s()\\.<>,;\\[\\]`'\"])|(?:\\b(?:[a-z0-9](?:[-a-z0-9]{0,62}[a-z0-9])?\\.)+(?:AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XN--0ZWM56D|XN--11B5BS3A9AJ6G|XN--80AKHBYKNJ4F|XN--9T4B11YI5A|XN--DEBA0AD|XN--FIQS8S|XN--FIQZ9S|XN--G6W251D|XN--HGBK6AJ7F53BBA|XN--HLCJ6AYA9ESC7A|XN--J6W193G|XN--JXALPDLP|XN--KGBECHTV|XN--KPRW13D|XN--KPRY57D|XN--MGBAAM7A8H|XN--MGBERP4A5D4AR|XN--P1AI|XN--WGBH1C|XN--ZCKZAH|YE|YT|ZA|ZM|ZW)(?!@(?:[a-z0-9](?:[-a-z0-9]{0,62}[a-z0-9])?\\.)+(?:AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XN--0ZWM56D|XN--11B5BS3A9AJ6G|XN--80AKHBYKNJ4F|XN--9T4B11YI5A|XN--DEBA0AD|XN--FIQS8S|XN--FIQZ9S|XN--G6W251D|XN--HGBK6AJ7F53BBA|XN--HLCJ6AYA9ESC7A|XN--J6W193G|XN--JXALPDLP|XN--KGBECHTV|XN--KPRW13D|XN--KPRY57D|XN--MGBAAM7A8H|XN--MGBERP4A5D4AR|XN--P1AI|XN--WGBH1C|XN--ZCKZAH|YE|YT|ZA|ZM|ZW))(?:/[\\w\\-=?/.&;:%~,+@#*]{0,2048}(?:[\\w=/+#-]|\\([^\\s()]*\\)))?(?:$|(?=\\.$)|(?=\\.\\s)|(?=[^\\w\\.]))))";
    const emailRegexString = '([\\w-\\.\\+_]{1,64}@(?:[\\w-]){1,255}(?:\\.[\\w-]{1,255}){1,10})';
    const newLineRegexString = '(\r\n|\r|\n)';
    const tagRegexString = '(<a[\\s]+[^>]+[^/]>[\\s\\S]*?</a>|<a[\\s]+[^>]+/>|' + '<i?frame[\\s]+[^>]+[^/]>[\\s\\S]*?</i?frame>|<i?frame[\\s]+[^>]+/>|' + '<area[\\s]+[^>]+[^/]>[\\s\\S]*?</area>|<area[\\s]+[^>]+/>|' + '<link[\\s]+[^>]+[^/]>[\\s\\S]*?</link>|<link[\\s]+[^>]+/>|' + '<img[\\s]+[^>]+[^/]>[\\s\\S]*?</img>|<img[\\s]+[^>]+>|' + '<form[\\s]+[^>]+[^/]>[\\s\\S]*?</form>|<form[\\s]+[^>]+/>|' + '<body[\\s]+[^>]+[^/]>[\\s\\S]*?</body>|<body[\\s]+[^>]+/>|' + '<head[\\s]+[^>]+[^/]>[\\s\\S]*?</head>|<head[\\s]+[^>]+/>|' + '<input[\\s]+[^>]+[^/]>[\\s\\S]*?</input>|<input[\\s]+[^>]+/>|' + '<button[\\s]+[^>]+[^/]>[\\s\\S]*?</button>|<button[\\s]+[^>]+/>|' + '<blockquote[\\s]+[^>]+[^/]>[\\s\\S]*?</blockquote>|<blockquote[\\s]+[^>]+/>|' + '<q[\\s]+[^>]+[^/]>[\\s\\S]*?</q>|<q[\\s]+[^>]+/>|' + '<del[\\s]+[^>]+[^/]>[\\s\\S]*?</del>|<del[\\s]+[^>]+/>|' + '<ins[\\s]+[^>]+[^/]>[\\s\\S]*?</ins>|<ins[\\s]+[^>]+/>)';
    const createHttpHref = function (url) {
      let href = url;

      if (url.toLowerCase().lastIndexOf('http', 0) !== 0 && url.toLowerCase().lastIndexOf('ftp', 0) !== 0) {
        href = `http://${href}`;
      }

      return href;
    };
    const createEmailHref = function (email) {
      return `mailto:${email}`;
    };

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
    /**
    A boolean normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/

    function normalizeBoolean(value) {
      return typeof value === 'string' || !!value;
    }

    const isIE11 = isIE11Test(navigator);
    const isChrome = isChromeTest(navigator);
    const isSafari = isSafariTest(navigator); // The following functions are for tests only

    function isIE11Test(navigator) {
      // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
      return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    function isChromeTest(navigator) {
      // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
    function isSafariTest(navigator) {
      // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    const ALLOWED_DOMAINS = new Set(['www.youtube.com', 'player.vimeo.com', 'play.vidyard.com', 'players.brightcove.net', 'bcove.video', 'player.cloudinary.com', 'fast.wistia.net', 'i1.adis.ws', 's1.adis.ws']);
    function hasOnlyAllowedVideoIframes(htmlString) {
      if (htmlString && htmlString.indexOf('<iframe') > -1) {
        const parsedHtml = new DOMParser().parseFromString(htmlString, 'text/html');
        const iframesList = Array.prototype.slice.call(parsedHtml.querySelectorAll('iframe'));
        return iframesList.length > 0 && !iframesList.some(iframe => !isUrlAllowed(iframe.src));
      }

      return false;
    }

    function isUrlAllowed(url) {
      const anchor = document.createElement('a');
      anchor.href = url;
      return anchor.protocol === 'https:' && ALLOWED_DOMAINS.has(anchor.hostname);
    }

    /*
     * Regex was taken from aura lib and refactored
     */

    const linkRegex = new RegExp(`(${newLineRegexString})|${urlRegexString}|${emailRegexString}`, 'gi');
    const linkRegexNoNewLine = new RegExp(`${urlRegexString}|${emailRegexString}`, 'gi');
    const emailRegex = new RegExp(emailRegexString, 'gi');
    const newLineRegex = new RegExp(newLineRegexString, 'gi');

    function getTextPart(text) {
      return {
        isText: true,
        value: text
      };
    }

    function getUrlPart(url, index) {
      return {
        isLink: true,
        value: url,
        href: createHttpHref(url),
        key: `${url}-${index}`
      };
    }

    function getEmailPart(email, index) {
      return {
        isLink: true,
        value: email,
        href: createEmailHref(email),
        key: `${email}-${index}`
      };
    }

    function getNewlinePart(index) {
      return {
        isNewline: true,
        key: index
      };
    }

    function getLinkPart(link, index, ignoreNewLines) {
      if (!ignoreNewLines && link.match(newLineRegex)) {
        return getNewlinePart(index);
      } else if (link.match(emailRegex)) {
        return getEmailPart(link, index);
      }

      return getUrlPart(link, index);
    }
    /**
     * Parse text into parts of text, links, emails, new lines
     * @param text {string} Text to parse into linkified parts
     * @param ignoreNewLines {boolean} Boolean indicating whether to return new line parts or not
     * if true new lines are included in text/url/email parts otherwise they are returned in their
     * own parts by default
     * @returns {[]}
     */


    function parseToFormattedLinkifiedParts(text, ignoreNewLines = false) {
      const parts = [];
      const re = ignoreNewLines ? linkRegexNoNewLine : linkRegex;
      let match;
      let index = 0;

      while ((match = re.exec(text)) !== null) {
        let link = match[0];
        const endsWithQuote = link && link.endsWith('&quot'); // If we found an email or url match, then create a text part for everything
        // up to the match and then create the part for the email or url

        if (match.index > 0) {
          parts.push(getTextPart(text.slice(0, match.index)));
        }

        if (endsWithQuote) {
          link = link.slice(0, link.lastIndexOf('&quot'));
        }

        parts.push(getLinkPart(link, index, ignoreNewLines));

        if (endsWithQuote) {
          parts.push(getTextPart('&quot'));
        }

        text = text.substring(re.lastIndex);
        re.lastIndex = 0;
        index = index + 1;
      }

      if (text != null && text !== '') {
        parts.push(getTextPart(text));
      }

      return parts;
    }
    /**
     * Parse text into parts of text and new lines
     * @param text {string} Text to parse into parts
     * @returns {[]}
     */

    function parseToFormattedParts(text) {
      return text.split(newLineRegex).map((part, index) => {
        return index % 2 === 0 ? getTextPart(part) : getNewlinePart();
      });
    }

    const linkRegex$1 = new RegExp(`${tagRegexString}|${urlRegexString}|${emailRegexString}`, 'gi');

    const createHttpLink = function (match) {
      const href = createHttpHref(match);
      return `<a href="${href}" target="_blank" rel="noopener">${match}</a>`;
    };

    const createEmailLink = function (match) {
      const href = createEmailHref(match);
      return `<a href="${href}">${match}</a>`;
    };

    const linkify = function (text) {
      if (typeof text !== 'string') {
        return '';
      }

      return text.replace(linkRegex$1, (match, tagMatch, hrefMatch, emailMatch) => {
        if (tagMatch) {
          return tagMatch;
        } else if (hrefMatch) {
          const endsWithQuote = hrefMatch.endsWith('&quot');
          let href = hrefMatch;

          if (endsWithQuote) {
            href = hrefMatch.slice(0, hrefMatch.lastIndexOf('&quot'));
          }

          return createHttpLink(href) + (endsWithQuote ? '&quot' : '');
        } else if (emailMatch) {
          return createEmailLink(emailMatch);
        }

        return match;
      });
    };

    const tagsWhitelist = Object.freeze(['a', 'abbr', 'acronym', 'address', 'b', 'br', 'big', 'blockquote', 'caption', 'cite', 'code', 'col', 'colgroup', 'del', 'div', 'dl', 'dd', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'ins', 'kbd', 'li', 'ol', 'mark', 'p', 'param', 'pre', 'q', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'tt', 'u', 'ul', 'var', 'strike', 'font']);
    const attrWhitelist = Object.freeze(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'span', 'srclang', 'start', 'src', 'step', 'style', 'summary', 'tabindex', 'target', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'data-fileid']);
    const richTextConfig = Object.freeze({
      ALLOWED_TAGS: tagsWhitelist,
      ALLOWED_ATTR: attrWhitelist,
      ALLOW_UNKNOWN_PROTOCOLS: false
    });

    const GET_LINK_INFO_EVENT = 'lightningroutingservicegetlinkinfo';
    const urlTypes = {
      standard: 'standard_webPage'
    };
    /*
     * Mock getLinkInfo
     *
     * @returns {Promise[LinkInfo]}
     */

    function getLinkInfo(element, stateRef) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line lightning-global/no-custom-event-identifier-arguments
        const getLinkInfoEvent = new CustomEvent(GET_LINK_INFO_EVENT, {
          detail: {
            stateRef,
            callback: (err, linkInfo) => {
              if (err) {
                reject(err);
              } else {
                resolve(linkInfo);
              }
            }
          },
          bubbles: true,
          composed: true,
          cancelable: true
        });
        element.dispatchEvent(getLinkInfoEvent);
      });
    }
    /**
     * Determines the route for the given url and updates the element
     * state with the correct url and dispatcher.
     *
     * @param {HTMLElement} element Element from which to dispatch the routing event
     * @param {Object} url Link to route, target Target of the link
     * @param {function} callback on the returned LinkInfo
     *
     * @returns {Promise} Promise[LinkInfo]
     */

    function updateRawLinkInfo(element, {
      url,
      target
    }) {
      if (url === undefined || url === null) {
        // eslint-disable-next-line no-console
        console.error('url must be specified');
      }

      if (target === '_blank') {
        // Have a no-op dispatcher if target is blank
        return new Promise(resolve => {
          resolve({
            url,
            dispatcher: () => {}
          });
        });
      }

      return getLinkInfo(element, {
        stateType: urlTypes.standard,
        attributes: {
          url,
          target
        }
      });
    }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    /**
     * Displays rich text that's formatted with whitelisted tags and attributes.
     * Other tags and attributes are removed and only their text content is displayed.
     */

    class LightningFormattedRichText extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.initialRender = true;
        this._value = '';
        this._disableLinkify = false;
        this.connected = false;
        this.clean = false;
      }

      /**
       * If present, the component does not create links in the rich text.
       * @type {boolean}
       * @default false
       */
      get disableLinkify() {
        return this._disableLinkify;
      }

      set disableLinkify(val) {
        this._disableLinkify = normalizeBoolean(val);
        this.renderRichText();
      }
      /**
       * Sets the rich text to display.
       * @type {string}
       *
       */


      get value() {
        return this._value;
      }

      set value(val) {
        this._value = val === undefined || val === null ? '' : String(val);
        this.renderRichText();
      }

      renderedCallback() {
        if (this.initialRender) {
          this.renderRichText();
          this.initialRender = false;
        }
      }

      connectedCallback() {
        this.classList.add('slds-rich-text-editor__output');
        this.connected = true;
      }

      disconnectedCallback() {
        this.connected = false;
      }

      handleClick(event) {
        const anchor = this.findNearestAnchor(event.target);

        if (anchor == null) {
          return;
        }

        const target = anchor.target;
        const url = anchor.href; // Grab the link info onclick and dispatch

        updateRawLinkInfo(this, {
          url,
          target
        }).then(linkInfo => {
          anchor.href = linkInfo.url;
          linkInfo.dispatcher(event);
        });
      }

      sanitize(value) {
        this.clean = false;
        let displayValue;
        let computedRichTextConfig = richTextConfig;

        if (hasOnlyAllowedVideoIframes(value)) {
          // richTextConfig is shared across all formatted-rich-text components;
          // so create and modify copy of richTextConfig to whitelist iframes for each component
          computedRichTextConfig = _objectSpread({}, richTextConfig, {
            ALLOWED_TAGS: richTextConfig.ALLOWED_TAGS.concat(['iframe'])
          });
        }

        try {
          displayValue = sanitizeHTML(value, computedRichTextConfig);
          this.clean = true;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn(`<lightning-formatted-rich-text> Exception caught when attempting to sanitize: `, e);
          displayValue = value;
          this.clean = false;
        }

        return displayValue;
      }

      renderRichText() {
        if (this.connected) {
          const richText = this.sanitize(this.disableLinkify ? this.value : linkify(this.value));
          const container = this.getContainer();

          if (this.clean) {
            // eslint-disable-next-line @lwc/lwc/no-inner-html
            container.innerHTML = richText;
          } else {
            const textNode = document.createTextNode(richText);

            while (container.hasChildNodes()) {
              container.removeChild(container.lastChild);
            }

            container.appendChild(textNode);
          }
        }
      }

      getContainer() {
        return this.template.querySelector('span');
      }

      findNearestAnchor(startingElement) {
        const container = this.getContainer();
        let element = startingElement;

        while (element !== null && element !== container) {
          if (element.tagName === 'A') {
            return element;
          }

          element = element.parentNode;
        }

        return null;
      }

    }

    lwc.registerDecorators(LightningFormattedRichText, {
      publicProps: {
        disableLinkify: {
          config: 3
        },
        value: {
          config: 3
        }
      },
      fields: ["initialRender", "_value", "_disableLinkify", "connected", "clean"]
    });

    var _lightningFormattedRichText = lwc.registerComponent(LightningFormattedRichText, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        k: api_key,
        h: api_element,
        i: api_iterator
      } = $api;
      return api_iterator($cmp.formattedParts, function (part) {
        return [part.isLink ? api_element("a", {
          attrs: {
            "target": "_blank",
            "href": part.href,
            "rel": "noopener"
          },
          key: api_key(0, part.key)
        }, [api_dynamic(part.value)]) : null, part.isText ? api_dynamic(part.value) : null, part.isNewline ? api_element("br", {
          key: api_key(1, part.key)
        }, []) : null];
      });
    }

    var _tmpl$2 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lightning-formattedText_formattedText-host",
      shadowAttribute: "lightning-formattedText_formattedText"
    };

    /**
     * Displays text, replaces newlines with line breaks, and linkifies if requested.
     */

    class FormattedText extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.value = '';
        this._linkify = false;
      }

      /**
       * If present, URLs and email addresses are displayed in anchor tags.
       * They are displayed in plain text by default.
       * @type {boolean}
       * @default false
       */
      get linkify() {
        return this._linkify;
      }

      set linkify(value) {
        this._linkify = normalizeBoolean(value);
      }

      get formattedParts() {
        if (!this.value || typeof this.value !== 'string') {
          return [];
        }

        return this.linkify ? parseToFormattedLinkifiedParts(this.value) : parseToFormattedParts(this.value);
      }

    }

    lwc.registerDecorators(FormattedText, {
      publicProps: {
        value: {
          config: 0
        },
        linkify: {
          config: 3
        }
      },
      track: {
        _linkify: 1
      }
    });

    var _lightningFormattedText = lwc.registerComponent(FormattedText, {
      tmpl: _tmpl$2
    });

    function tmpl$2($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element,
        c: api_custom_element
      } = $api;
      return [api_element("p", {
        classMap: {
          "msg": true
        },
        key: 0
      }, [api_dynamic($cmp.msg)]), api_custom_element("lightning-formatted-rich-text", _lightningFormattedRichText, {
        props: {
          "value": $cmp.richtext
        },
        key: 1
      }, []), api_element("p", {
        key: 3
      }, [api_custom_element("lightning-formatted-text", _lightningFormattedText, {
        props: {
          "value": "Email info@salesforce.com"
        },
        key: 2
      }, [])])];
    }

    var _tmpl$3 = lwc.registerTemplate(tmpl$2);
    tmpl$2.stylesheets = [];
    tmpl$2.stylesheetTokens = {
      hostAttribute: "lwc-dynamicMsg_dynamicMsg-host",
      shadowAttribute: "lwc-dynamicMsg_dynamicMsg"
    };

    class DynamicMsg extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.msg = 'mani<b>abc</b>';
        this.richtext = '<p>hello <b>bold</b></p>';
      }

    }

    lwc.registerDecorators(DynamicMsg, {
      fields: ["msg", "richtext"]
    });

    var dynamicMsg = lwc.registerComponent(DynamicMsg, {
      tmpl: _tmpl$3
    });

    return dynamicMsg;

});
