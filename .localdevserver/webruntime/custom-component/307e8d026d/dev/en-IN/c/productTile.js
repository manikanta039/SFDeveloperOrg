Webruntime.define('lwc/productTile', ['lwc', 'lightning/configProvider'], function (lwc, configProvider) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".content" + shadowSelector + " {padding: 8px;background-color: #ffffff;border-radius: 0.25rem;}\na" + shadowSelector + " {color: inherit;}\nimg.product" + shadowSelector + " {height: 120px;max-width: initial;pointer-events: none;}\n.title" + shadowSelector + " {font-weight: bold;text-transform: uppercase;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
      return "\n" + (nativeShadow ? ("[dir=\"rtl\"] :host {direction: ltr;unicode-bidi: embed;}") : ("[dir=\"rtl\"] " + hostSelector + " {direction: ltr;unicode-bidi: embed;}")) + "\n";
    }
    var _implicitStylesheets$1 = [stylesheet$1];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic
      } = $api;
      return [api_dynamic($cmp.formattedNumber)];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets$1) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-formattedNumber_formattedNumber-host",
      shadowAttribute: "lightning-formattedNumber_formattedNumber"
    };

    // This is a library built from Globalization's repo
    /**
     * Define address format patterns.
     */

    var AddressFormatPattern = Object.freeze({
      /**
       *
       * N: Name (The formatting of names for this field is outside of the scope of the address elements.)
       * O: Organization
       * A: Address Lines (2 or 3 lines address)
       * D: District (Sub-locality): smaller than a city, and could be a neighborhood, suburb or dependent locality.
       * C: City (Locality)
       * S: State (Administrative Area)
       * K: Country
       * Z: ZIP Code / Postal Code
       * X: Sorting code, for example, CEDEX as used in France
       * n: newline
       */
      A: Symbol('Address Lines'),
      C: Symbol('City'),
      S: Symbol('State'),
      K: Symbol('Country'),
      Z: Symbol('Zip Code'),
      n: Symbol('New Line'),
      fromPlaceHolder: function fromPlaceHolder(placeHolder) {
        switch (placeHolder) {
          case 'A':
            return AddressFormatPattern.A;

          case 'C':
            return AddressFormatPattern.C;

          case 'S':
            return AddressFormatPattern.S;

          case 'K':
            return AddressFormatPattern.K;

          case 'Z':
            return AddressFormatPattern.Z;

          case 'n':
            return AddressFormatPattern.n;
        }

        return null;
      },
      getPlaceHolder: function getPlaceHolder(pattern) {
        switch (pattern) {
          case AddressFormatPattern.A:
            return 'A';

          case AddressFormatPattern.C:
            return 'C';

          case AddressFormatPattern.S:
            return 'S';

          case AddressFormatPattern.K:
            return 'K';

          case AddressFormatPattern.Z:
            return 'Z';

          case AddressFormatPattern.n:
            return 'n';
        }

        return null;
      },
      getData: function getData(pattern, data) {
        if (data) {
          switch (pattern) {
            case AddressFormatPattern.A:
              return data.address;

            case AddressFormatPattern.C:
              return data.city;

            case AddressFormatPattern.S:
              return data.state;

            case AddressFormatPattern.K:
              return data.country;

            case AddressFormatPattern.Z:
              return data.zipCode;

            case AddressFormatPattern.n:
              return data.newLine;
          }
        }

        return null;
      }
    });

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    /**
     * Address token types enum
     *
     * @private
     */


    var AddressTokenTypes = Object.freeze({
      DATA: Symbol('data'),
      STRING: Symbol('string'),
      NEWLINE: Symbol('newline'),
      GROUP: Symbol('group')
    });
    /**
     * AddressToken class
     *
     * @private
     */

    var AddressToken = function () {
      /**
       *
       * @param {AddressTokenTypes} type
       * @param {string} string
       * @param {*} pattern
       */
      function AddressToken(type, string, pattern) {
        classCallCheck(this, AddressToken);
        this.type = type;
        this.string = string;
        this.pattern = pattern;
      }
      /**
       * Construct a string type token
       *
       * @param {string} string String
       * @return {AddressToken} Address Token
       */


      createClass(AddressToken, null, [{
        key: 'string',
        value: function string(_string) {
          return new AddressToken(AddressTokenTypes.STRING, _string);
        }
        /**
         * Construct a data type token
         *
         * @param {pattern} pattern Address Format Pattern
         * @return {AddressToken} Address Token
         */

      }, {
        key: 'data',
        value: function data(pattern) {
          return new AddressToken(AddressTokenTypes.DATA, undefined, pattern);
        }
        /**
         * Construct a new line type token
         *
         * @return {AddressToken} Address Token
         */

      }, {
        key: 'newLine',
        value: function newLine() {
          return new AddressToken(AddressTokenTypes.NEWLINE);
        }
      }]);
      return AddressToken;
    }();

    // This is a library built from Globalization's repo

    /**
     S: Salutation
     F: First Name(givenName)
     M: Middle Name
     L: Last Name(familyName)
     X: Suffix
     I: Informal Name
     */

    var fieldConstants = {
      SALUTATION: Symbol('Salutation'),
      FIRST: Symbol('First Name'),
      MIDDLE: Symbol('Middle Name'),
      LAST: Symbol('Last Name'),
      SUFFIX: Symbol('Suffix'),
      INFORMAL: Symbol('Informal Name')
    };

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }

    var Format = function Format(parts) {
      _classCallCheck(this, Format);

      this.parts = Object.freeze(parts);
      Object.freeze(this);
    };
    /**
     * Represents a field within the format
     */


    var FieldFormatPart = function FieldFormatPart(field) {
      _classCallCheck(this, FieldFormatPart);

      this.field = field;
      this.type = 'field';
      Object.freeze(this);
    };
    /**
     * Represents text to be output directly
     */


    var TextFormatPart = function TextFormatPart(text) {
      _classCallCheck(this, TextFormatPart);

      this.type = 'text';
      this.text = text;
      Object.freeze(this);
    };

    var fieldFormatParts = Object.freeze({
      SALUTATION: new FieldFormatPart(fieldConstants.SALUTATION),
      FIRST: new FieldFormatPart(fieldConstants.FIRST),
      MIDDLE: new FieldFormatPart(fieldConstants.MIDDLE),
      LAST: new FieldFormatPart(fieldConstants.LAST),
      SUFFIX: new FieldFormatPart(fieldConstants.SUFFIX),
      INFORMAL: new FieldFormatPart(fieldConstants.INFORMAL)
    });

    var FormatParser = function () {
      function FormatParser() {
        _classCallCheck(this, FormatParser);
      }

      _createClass(FormatParser, [{
        key: 'parse',

        /**
         * Parses the format
         * @param {string} fmt the format to be parsed
         * @returns {Format}
         */
        value: function parse(fmt) {
          var nodes = [];
          var textBuffer = ''; // parse the format string

          for (var i = 0; i < fmt.length; i = i + 1) {
            if (fmt[i] === '%') {
              i = i + 1; // move to the next character after %
              // end the last text buffer

              if (textBuffer.length > 0) {
                nodes.push(Object.freeze(new TextFormatPart(textBuffer)));
                textBuffer = '';
              }

              if (i >= fmt.length) {
                throw new Error('Unexpected end of format. Symbol at ' + (i - 1) + ' should be followed by a valid field code');
              }

              var code = fmt[i];

              switch (code) {
                case 'S':
                  nodes.push(fieldFormatParts.SALUTATION);
                  break;

                case 'F':
                  nodes.push(fieldFormatParts.FIRST);
                  break;

                case 'M':
                  nodes.push(fieldFormatParts.MIDDLE);
                  break;

                case 'L':
                  nodes.push(fieldFormatParts.LAST);
                  break;

                case 'X':
                  nodes.push(fieldFormatParts.SUFFIX);
                  break;

                case 'I':
                  nodes.push(fieldFormatParts.INFORMAL);
                  break;
              }
            } else {
              // if it wasn't a symbol, then just output the value directly
              textBuffer += fmt[i];
            }
          }

          if (textBuffer.length > 0) {
            nodes.push(new TextFormatPart(textBuffer));
          }

          return new Format(nodes);
        }
      }]);

      return FormatParser;
    }();

    var formatParser = new FormatParser();

    var numberFormat = '#,##0.###';

    var percentFormat = '#,##0%';

    var currencyFormat = '¤#,##0.00;(¤#,##0.00)';

    var currency = 'USD';

    var salesforceLocale = 'en-US';

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters

    const POSSIBLE_OPTS = {
      style: true,
      currency: true,
      currencyDisplay: true,
      useGrouping: true,
      minimumIntegerDigits: true,
      minimumFractionDigits: true,
      maximumFractionDigits: true,
      minimumSignificantDigits: true,
      maximumSignificantDigits: true
    };
    const STYLE = {
      DECIMAL: 'decimal',
      CURRENCY: 'currency',
      PERCENT: 'percent'
    };
    const CURRENCY_DISPLAY = {
      CODE: 'code',
      // USD
      SYMBOL: 'symbol',
      // $
      NAME: 'name' // US Dollars

    };
    const SAFE_NUM_LENGTH = 15;
    const numberFormatInstancesCache = {};

    function getStringOfChar(char, amount) {
      return new Array(amount + 1).join(char);
    }

    function getGroupingCount(skeleton) {
      const match = skeleton.match(/,[#0]*\./);
      return match ? match[0].length - 2 : 0;
    }

    function getOptionsUniqueKey(options) {
      return Object.keys(options).sort().reduce((prev, optionName) => {
        if (POSSIBLE_OPTS[optionName]) {
          return prev + optionName + options[optionName] + '';
        }

        return prev;
      }, '');
    }

    function toNumber(value, defaultValue) {
      const number = parseInt(value, 10);

      if (isNaN(number)) {
        return defaultValue;
      }

      return number;
    }

    function getFractionPart(options) {
      const minimumDigits = toNumber(options.minimumFractionDigits, 0);
      const maximumDigits = Math.max(toNumber(options.maximumFractionDigits, 0), minimumDigits);
      return '.' + new Array(minimumDigits + 1).join('0') + new Array(maximumDigits - minimumDigits + 1).join('#');
    }

    function updateFractionPart(skeleton, options) {
      const fractionPart = getFractionPart(options);
      return addFractionsToPattern(skeleton, fractionPart);
    }

    function addFractionsToPattern(pattern, fractionPart) {
      if (!fractionPart) {
        return pattern;
      } // if pattern has two formats (one for positive and one for negative numbers), add fractions to both patterns


      if (pattern.indexOf(';') > 0) {
        const [positivePattern, negativePattern] = pattern.split(';');
        return `${addFractionsToPattern(positivePattern, fractionPart)};${addFractionsToPattern(negativePattern, fractionPart)}`;
      } // If the pattern already has a fraction part, replace it with the fractions calculated from the options


      if (pattern.indexOf('.') > 0) {
        return pattern.replace(/\.(0|#)*/, fractionPart);
      } // If the pattern doesn't have a fraction part, we need to add it to the pattern
      // We need to add the fraction part after the last digit (represented by '0' or '#')


      const position = Math.max(pattern.lastIndexOf('0'), pattern.lastIndexOf('#')) + 1;
      return [pattern.slice(0, position), fractionPart, pattern.slice(position)].join('');
    }

    function updateCurrencySymbol(skeleton, currencyCode, options) {
      const symbol = String.fromCharCode(164);

      if (options.currencyDisplay === CURRENCY_DISPLAY.NAME) {
        // append the currency code at the end.
        return skeleton.replace(symbol, '') + currencyCode;
      }

      return skeleton.replace(symbol, currencyCode);
    }

    function updateIntegerPart(skeleton, options) {
      const minimumIntegerDigits = options.minimumIntegerDigits;
      const groupingCount = getGroupingCount(skeleton);

      if (!minimumIntegerDigits) {
        return skeleton;
      }

      if (minimumIntegerDigits <= groupingCount) {
        return skeleton.replace(/,[#0]*\./, ',' + getStringOfChar('#', groupingCount - minimumIntegerDigits) + getStringOfChar('0', minimumIntegerDigits) + '.');
      }

      return skeleton.replace(/[#0]*\./, getStringOfChar('0', minimumIntegerDigits - groupingCount) + ',' + getStringOfChar('0', groupingCount) + '.');
    }

    function getBestMatchCurrencySymbol(code, currencyDisplay) {
      if (!('Intl' in window)) {
        return code; // fail gracefully.
      }

      const opts = {
        style: 'currency',
        currency: code,
        minimumFractionDigits: 0
      };

      if (currencyDisplay) {
        opts.currencyDisplay = currencyDisplay;
      }

      const nf = getFromCache(opts);
      return nf.format(2).replace(/2/g, '');
    }

    function getCurrency(options) {
      const currencyDisplay = options.currencyDisplay || CURRENCY_DISPLAY.SYMBOL;

      if (currencyDisplay === CURRENCY_DISPLAY.SYMBOL || currencyDisplay === CURRENCY_DISPLAY.NAME) {
        return getBestMatchCurrencySymbol(options.currency, currencyDisplay);
      }

      return options.currency;
    }

    function getFromCache(options) {
      const optionsUniqueKey = getOptionsUniqueKey(options);
      let numberFormatInstance = numberFormatInstancesCache[optionsUniqueKey];

      if (numberFormatInstance) {
        return numberFormatInstance;
      }

      numberFormatInstance = new Intl.NumberFormat(salesforceLocale, options);
      numberFormatInstancesCache[optionsUniqueKey] = numberFormatInstance;
      return numberFormatInstance;
    }

    function exceedsSafeLength(value) {
      const numberAsString = value.toString().replace('.', '');
      return numberAsString.length >= SAFE_NUM_LENGTH;
    }

    function normalizedMinimumFractionDigits(options) {
      const fractionSkeleton = getFallbackFractionSkeleton(options.style);
      const fractionDigits = fractionSkeleton.replace(/[^0]/g, '');
      return fractionDigits.length;
    }

    function normalizedMaximumFractionDigits(options) {
      const fractionSkeleton = getFallbackFractionSkeleton(options.style);
      const fractionDigits = fractionSkeleton.replace(/[^0#]/g, '');
      return Math.max(options.minimumFractionDigits, fractionDigits.length);
    }

    function getFallbackFractionSkeleton(style) {
      let styleFormat = numberFormat;

      if (style === STYLE.CURRENCY) {
        styleFormat = currencyFormat;
      } else if (style === STYLE.PERCENT) {
        styleFormat = percentFormat;
      }

      const format = styleFormat.split(';')[0];
      return format.split('.')[1] || '';
    }

    function normalizeOptions(options) {
      const normalizedOpts = Object.assign({}, options);
      normalizedOpts.currency = normalizedOpts.currency || currency;

      if (normalizedOpts.minimumFractionDigits === undefined) {
        normalizedOpts.minimumFractionDigits = normalizedMinimumFractionDigits(normalizedOpts);
      }

      if (normalizedOpts.maximumFractionDigits === undefined || normalizedOpts.maximumFractionDigits < normalizedOpts.minimumFractionDigits) {
        normalizedOpts.maximumFractionDigits = normalizedMaximumFractionDigits(normalizedOpts);
      }

      return normalizedOpts;
    }

    function NumberOptions(options) {
      this.options = options || {};
    }

    NumberOptions.prototype.isCurrency = function () {
      return this.options.style === 'currency';
    };

    NumberOptions.prototype.isPercent = function () {
      return this.options.style === 'percent';
    };

    NumberOptions.prototype.isDefaultCurrency = function () {
      return !this.options.currency || currency === this.options.currency;
    };

    NumberOptions.prototype.getDefaultSkeleton = function () {
      return this.isCurrency() ? currencyFormat : this.isPercent() ? percentFormat : numberFormat;
    };

    NumberOptions.prototype.getSkeleton = function () {
      const options = this.options;
      const defaultSkeleton = this.getDefaultSkeleton();
      let skeleton = updateFractionPart(defaultSkeleton, options);
      skeleton = updateIntegerPart(skeleton, options);

      if (!this.isDefaultCurrency()) {
        skeleton = updateCurrencySymbol(skeleton, getCurrency(options), options);
      }

      return skeleton;
    };

    // This is a library for all calls to the aura localizationService.

    function getNumberFormat(format) {
      return configProvider.getLocalizationService().getNumberFormat(format);
    }

    function numberFormatFallback(options) {
      const skeleton = new NumberOptions(options).getSkeleton();
      return {
        format: value => {
          return getNumberFormat(skeleton).format(value);
        }
      };
    }

    function numberFormat$1(options) {
      const normalizedOpts = Object.assign({}, normalizeOptions(options));

      if (!('Intl' in window)) {
        return numberFormatFallback(normalizedOpts);
      }

      return {
        format: value => {
          if (value && exceedsSafeLength(value)) {
            return numberFormatFallback(normalizedOpts).format(value);
          }

          const numberFormatInstance = getFromCache(normalizedOpts);
          return numberFormatInstance.format(value);
        }
      };
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

    const isTimeZonesSupported = function () {
      try {
        // IE11 only supports the UTC time zone and throws when given anything else
        // eslint-disable-next-line new-cap
        Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles'
        });
      } catch (err) {
        return false;
      }

      return true;
    }();

    /**
     * Displays formatted numbers for decimals, currency, and percentages.
     */

    class LightningFormattedNumber extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.value = void 0;
        this.formatStyle = 'decimal';
        this.currencyCode = void 0;
        this.currencyDisplayAs = 'symbol';
        this.minimumIntegerDigits = void 0;
        this.minimumFractionDigits = void 0;
        this.maximumFractionDigits = void 0;
        this.minimumSignificantDigits = void 0;
        this.maximumSignificantDigits = void 0;
      }

      get formattedNumber() {
        const value = this.value;
        const options = {
          style: this.formatStyle,
          currency: this.currencyCode,
          currencyDisplay: this.currencyDisplayAs,
          minimumIntegerDigits: this.minimumIntegerDigits,
          minimumFractionDigits: this.minimumFractionDigits,
          maximumFractionDigits: this.maximumFractionDigits,
          minimumSignificantDigits: this.minimumSignificantDigits,
          maximumSignificantDigits: this.maximumSignificantDigits
        };
        const canReturnValue = value !== undefined && value !== null && value !== '' && isFinite(value);

        if (canReturnValue) {
          const valueAsString = value.toString();
          let valueToFormat = valueAsString; // percent-fixed just divides the value by 100
          // before passing to the library, this is to deal with the
          // fact that percentages in salesforce are 0-100, not 0-1

          if (this.formatStyle === 'percent-fixed') {
            options.style = 'percent';
            valueToFormat = parseFloat(value) / 100; // If the number contains fraction digits and is not in an exponent format

            if (valueAsString.indexOf('.') > 0 && valueAsString.indexOf('e') < 0) {
              // Depending on the input number, division by 100 may lead to rounding errors
              // (e.g 0.785 / 100 is 0.007850000000000001), so we need to round back
              // to the correct precision, that is - existing number of fractional digits
              // plus extra 2 for division by 100.
              valueToFormat = valueToFormat.toFixed(valueAsString.split('.')[1].length + 2);
            }
          }

          return numberFormat$1(options).format(valueToFormat);
        }

        return '';
      }

    }

    lwc.registerDecorators(LightningFormattedNumber, {
      publicProps: {
        value: {
          config: 0
        },
        formatStyle: {
          config: 0
        },
        currencyCode: {
          config: 0
        },
        currencyDisplayAs: {
          config: 0
        },
        minimumIntegerDigits: {
          config: 0
        },
        minimumFractionDigits: {
          config: 0
        },
        maximumFractionDigits: {
          config: 0
        },
        minimumSignificantDigits: {
          config: 0
        },
        maximumSignificantDigits: {
          config: 0
        }
      }
    });

    var _lightningFormattedNumber = lwc.registerComponent(LightningFormattedNumber, {
      tmpl: _tmpl
    });
    LightningFormattedNumber.interopMap = {
      props: {
        formatStyle: 'style'
      }
    };

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element,
        d: api_dynamic,
        t: api_text,
        c: api_custom_element,
        b: api_bind
      } = $api;
      const {
        _m0,
        _m1
      } = $ctx;
      return [api_element("div", {
        attrs: {
          "draggable": $cmp.draggable
        },
        key: 7,
        on: {
          "dragstart": _m1 || ($ctx._m1 = api_bind($cmp.handleDragStart))
        }
      }, [api_element("a", {
        key: 6,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
        }
      }, [api_element("div", {
        classMap: {
          "content": true
        },
        key: 5
      }, [api_element("img", {
        classMap: {
          "product": true,
          "slds-align_absolute-center": true
        },
        attrs: {
          "src": $cmp.pictureUrl,
          "alt": "Product picture"
        },
        key: 0
      }, []), api_element("div", {
        key: 4
      }, [api_element("p", {
        classMap: {
          "title": true,
          "slds-align_absolute-center": true
        },
        key: 1
      }, [api_dynamic($cmp.name)]), api_element("p", {
        classMap: {
          "slds-align_absolute-center": true
        },
        key: 3
      }, [api_text("MSRP:\xA0"), api_custom_element("lightning-formatted-number", _lightningFormattedNumber, {
        classMap: {
          "price": true
        },
        props: {
          "formatStyle": "currency",
          "currencyCode": "USD",
          "value": $cmp.msrp,
          "maximumFractionDigits": "0"
        },
        key: 2
      }, [])])])])])])];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
    }
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lwc-productTile_productTile-host",
      shadowAttribute: "lwc-productTile_productTile"
    };

    /**
     * A presentation component to display a Product__c sObject. The provided
     * Product__c data must contain all fields used by this component.
     */

    class ProductTile extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.draggable = void 0;
        this._product = void 0;
        this.pictureUrl = void 0;
        this.name = void 0;
        this.msrp = void 0;
      }

      /** Product__c to display. */
      get product() {
        return this._product;
      }

      set product(value) {
        this._product = value;
        this.pictureUrl = value.Picture_URL__c;
        this.name = value.Name;
        this.msrp = value.MSRP__c;
      }
      /** Product__c field values to display. */


      handleClick() {
        const selectedEvent = new CustomEvent('selected', {
          detail: this.product.Id
        });
        this.dispatchEvent(selectedEvent);
      }

      handleDragStart(event) {
        event.dataTransfer.setData('product', JSON.stringify(this.product));
      }

    }

    lwc.registerDecorators(ProductTile, {
      publicProps: {
        draggable: {
          config: 0
        },
        product: {
          config: 3
        }
      },
      track: {
        pictureUrl: 1,
        name: 1,
        msrp: 1
      },
      fields: ["_product"]
    });

    var productTile = lwc.registerComponent(ProductTile, {
      tmpl: _tmpl$1
    });

    return productTile;

});
