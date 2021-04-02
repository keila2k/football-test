function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kanban-kanban-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
    \************************************************************************/

  /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
      return MAT_DIALOG_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
      return MAT_DIALOG_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
      return MatDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
      return MatDialogActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
      return MatDialogClose;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
      return MatDialogConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
      return MatDialogContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
      return MatDialogContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
      return MatDialogModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
      return MatDialogRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
      return MatDialogTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
      return matDialogAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
      return throwMatDialogContentAlreadyAttachedError;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Possible overrides for a dialog's position.
     * @record
     */


    function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

    function DialogPosition() {}

    if (false) {}
    /**
     * Configuration for opening a modal dialog with the MatDialog service.
     * @template D
     */


    var MatDialogConfig = function MatDialogConfig() {
      _classCallCheck(this, MatDialogConfig);

      /**
       * The ARIA role of the dialog element.
       */
      this.role = 'dialog';
      /**
       * Custom class for the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the dialog has a backdrop.
       */

      this.hasBackdrop = true;
      /**
       * Custom class for the backdrop.
       */

      this.backdropClass = '';
      /**
       * Whether the user can use escape or clicking on the backdrop to close the modal.
       */

      this.disableClose = false;
      /**
       * Width of the dialog.
       */

      this.width = '';
      /**
       * Height of the dialog.
       */

      this.height = '';
      /**
       * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
       */

      this.maxWidth = '80vw';
      /**
       * Data being injected into the child component.
       */

      this.data = null;
      /**
       * ID of the element that describes the dialog.
       */

      this.ariaDescribedBy = null;
      /**
       * ID of the element that labels the dialog.
       */

      this.ariaLabelledBy = null;
      /**
       * Aria label to assign to the dialog element.
       */

      this.ariaLabel = null;
      /**
       * Whether the dialog should focus the first focusable element on open.
       */

      this.autoFocus = true;
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatDialog.
     * \@docs-private
     * @type {?}
     */


    var matDialogAnimations = {
      /**
       * Animation that is applied on the dialog container by defalt.
       */
      dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
      // specifying the transform explicitly, causes IE both to blur the dialog content and
      // decimate the animation performance. Leaving it as `none` solves both issues.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'scale(0.7)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'none',
        opacity: 1
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception for the case when a ComponentPortal is
     * attached to a DomPortalOutlet without an origin.
     * \@docs-private
     * @return {?}
     */

    function throwMatDialogContentAlreadyAttachedError() {
      throw Error('Attempting to attach dialog content after content is already attached');
    }
    /**
     * Internal component that wraps user-provided dialog content.
     * Animation is based on https://material.io/guidelines/motion/choreography.html.
     * \@docs-private
     */


    var MatDialogContainer =
    /*#__PURE__*/
    function (_angular_cdk_portal__) {
      _inherits(MatDialogContainer, _angular_cdk_portal__);

      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _changeDetectorRef
       * @param {?} _document
       * @param {?} _config
       */
      function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        var _this;

        _classCallCheck(this, MatDialogContainer);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MatDialogContainer).call(this));
        _this._elementRef = _elementRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */

        _this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */

        _this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */

        _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          if (_this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          _this._savePreviouslyFocusedElement();

          return _this._portalOutlet.attachDomPortal(portal);
        };

        _this._ariaLabelledBy = _config.ariaLabelledBy || null;
        _this._document = _document;
        return _this;
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @template T
       * @param {?} portal Portal to be attached as the dialog content.
       * @return {?}
       */


      _createClass(MatDialogContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a TemplatePortal as content to this dialog container.
         * @template C
         * @param {?} portal Portal to be attached as the dialog content.
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Moves the focus inside the focus trap.
         * @private
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;

          if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(element);
          } // If we were to attempt to focus immediately, then the content of the dialog would not yet be
          // ready in instances where change detection has to run first. To deal with this, we simply
          // wait for the microtask queue to be empty.


          if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
          } else {
            /** @type {?} */
            var activeElement = this._document.activeElement; // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.

            if (activeElement !== element && !element.contains(activeElement)) {
              element.focus();
            }
          }
        }
        /**
         * Restores focus to the element that was focused before the dialog opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          /** @type {?} */
          var toFocus = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            var activeElement = this._document.activeElement;
            /** @type {?} */

            var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.

            if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
              toFocus.focus();
            }
          }

          if (this._focusTrap) {
            this._focusTrap.destroy();
          }
        }
        /**
         * Saves a reference to the element that was focused before the dialog was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_savePreviouslyFocusedElement",
        value: function _savePreviouslyFocusedElement() {
          var _this2 = this;

          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened =
            /** @type {?} */
            this._document.activeElement; // Note that there is no focus method when rendering on the server.

            if (this._elementRef.nativeElement.focus) {
              // Move focus onto the dialog immediately in order to prevent the user from accidentally
              // opening multiple dialogs at the same time. Needs to be async, because the element
              // may not be focusable immediately.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2._elementRef.nativeElement.focus();
              });
            }
          }
        }
        /**
         * Callback, invoked whenever an animation on the host completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'enter') {
            this._trapFocus();
          } else if (event.toState === 'exit') {
            this._restoreFocus();
          }

          this._animationStateChanged.emit(event);
        }
        /**
         * Callback, invoked when an animation on the host starts.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._animationStateChanged.emit(event);
        }
        /**
         * Starts the dialog exit animation.
         * @return {?}
         */

      }, {
        key: "_startExitAnimation",
        value: function _startExitAnimation() {
          this._state = 'exit'; // Mark the container for check so it can react if the
          // view container is using OnPush change detection.

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return MatDialogContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

    MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
      return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatDialogConfig));
    };

    MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      viewQuery: function MatDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
      hostVars: 6,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
            return ctx._onAnimationStart($event);
          })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
            return ctx._onAnimationDone($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx._id)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@dialogContainer", ctx._state);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      data: {
        animation: [matDialogAnimations.dialogContainer]
      }
    });
    /** @nocollapse */

    MatDialogContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: MatDialogConfig
      }];
    };

    MatDialogContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
          static: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-dialog-container',
          template: "<ng-template cdkPortalOutlet></ng-template>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          animations: [matDialogAnimations.dialogContainer],
          host: {
            'class': 'mat-dialog-container',
            'tabindex': '-1',
            'aria-modal': 'true',
            '[attr.id]': '_id',
            '[attr.role]': '_config.role',
            '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
            '[attr.aria-label]': '_config.ariaLabel',
            '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
            '[@dialogContainer]': '_state',
            '(@dialogContainer.start)': '_onAnimationStart($event)',
            '(@dialogContainer.done)': '_onAnimationDone($event)'
          },
          styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }];
      }, {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            static: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(jelbourn): resizing
    // Counter for unique dialog ids.

    /** @type {?} */


    var uniqueId = 0;
    /** @enum {number} */

    var MatDialogState = {
      OPEN: 0,
      CLOSING: 1,
      CLOSED: 2
    };
    /**
     * Reference to a dialog opened via the MatDialog service.
     * @template T, R
     */

    var MatDialogRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlayRef
       * @param {?} _containerInstance
       * @param {?=} id
       */
      function MatDialogRef(_overlayRef, _containerInstance) {
        var _this3 = this;

        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

        _classCallCheck(this, MatDialogRef);

        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */

        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */

        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */

        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Current state of the dialog.
         */

        this._state = 0
        /* OPEN */
        ; // Pass the id along to the container.

        _containerInstance._id = id; // Emit when opening animation completes

        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'enter';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this3._afterOpened.next();

          _this3._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'exit';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this3._closeFallbackTimeout);

          _this3._overlayRef.dispose();
        });

        _overlayRef.detachments().subscribe(
        /**
        * @return {?}
        */
        function () {
          _this3._beforeClosed.next(_this3._result);

          _this3._beforeClosed.complete();

          _this3._afterClosed.next(_this3._result);

          _this3._afterClosed.complete();

          _this3.componentInstance =
          /** @type {?} */
          null;

          _this3._overlayRef.dispose();
        });

        _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          event.preventDefault();

          _this3.close();
        });
      }
      /**
       * Close the dialog.
       * @param {?=} dialogResult Optional result to return to the dialog opener.
       * @return {?}
       */


      _createClass(MatDialogRef, [{
        key: "close",
        value: function close(dialogResult) {
          var _this4 = this;

          this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

          this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.phaseName === 'start';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this4._beforeClosed.next(dialogResult);

            _this4._beforeClosed.complete();

            _this4._state = 2
            /* CLOSED */
            ;

            _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.


            _this4._closeFallbackTimeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this4._overlayRef.dispose();
            }, event.totalTime + 100);
          });

          this._containerInstance._startExitAnimation();

          this._state = 1
          /* CLOSING */
          ;
        }
        /**
         * Gets an observable that is notified when the dialog is finished opening.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog is finished closing.
         * @return {?}
         */

      }, {
        key: "afterClosed",
        value: function afterClosed() {
          return this._afterClosed.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog has started closing.
         * @return {?}
         */

      }, {
        key: "beforeClosed",
        value: function beforeClosed() {
          return this._beforeClosed.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
        /**
         * Updates the dialog's position.
         * @template THIS
         * @this {THIS}
         * @param {?=} position New dialog position.
         * @return {THIS}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition(position) {
          /** @type {?} */
          var strategy =
          /** @type {?} */
          this._getPositionStrategy();

          if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
          } else {
            strategy.centerHorizontally();
          }

          if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
          } else {
            strategy.centerVertically();
          }

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the dialog's width and height.
         * @template THIS
         * @this {THIS}
         * @param {?=} width New width of the dialog.
         * @param {?=} height New height of the dialog.
         * @return {THIS}
         */

      }, {
        key: "updateSize",
        value: function updateSize() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          /** @type {?} */
          this._getPositionStrategy().width(width).height(height);

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          /** @type {?} */
          this._overlayRef.addPanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          /** @type {?} */
          this._overlayRef.removePanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the current state of the dialog's lifecycle.
         * @return {?}
         */

      }, {
        key: "getState",
        value: function getState() {
          return this._state;
        }
        /**
         * Fetches the position strategy object from the overlay ref.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy() {
          return (
            /** @type {?} */
            this._overlayRef.getConfig().positionStrategy
          );
        }
      }]);

      return MatDialogRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to access the data that was passed in to a dialog.
     * @type {?}
     */


    var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatDialogData');
    /**
     * Injection token that can be used to specify default dialog options.
     * @type {?}
     */

    var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-dialog-default-options');
    /**
     * Injection token that determines the scroll handling while the dialog is open.
     * @type {?}
     */

    var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-dialog-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_DIALOG_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Service to open Material Design modal dialogs.
     */

    var MatDialog =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _injector
       * @param {?} _location
       * @param {?} _defaultOptions
       * @param {?} scrollStrategy
       * @param {?} _parentDialog
       * @param {?} _overlayContainer
       */
      function MatDialog(_overlay, _injector,
      /**
       * @deprecated `_location` parameter to be removed.
       * @breaking-change 10.0.0
       */
      _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        var _this5 = this;

        _classCallCheck(this, MatDialog);

        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */

        this.afterAllClosed =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(
        /**
        * @return {?}
        */
        function () {
          return _this5.openDialogs.length ? _this5._afterAllClosed : _this5._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Keeps track of the currently-open dialogs.
       * @return {?}
       */


      _createClass(MatDialog, [{
        key: "open",

        /**
         * Opens a modal dialog containing the given component.
         * @template T, D, R
         * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
         *     or a TemplateRef to instantiate as the dialog content.
         * @param {?=} config Extra configuration options.
         * @return {?} Reference to the newly-opened dialog.
         */
        value: function open(componentOrTemplateRef, config) {
          var _this6 = this;

          config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

          if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
          }
          /** @type {?} */


          var overlayRef = this._createOverlay(config);
          /** @type {?} */


          var dialogContainer = this._attachDialogContainer(overlayRef, config);
          /** @type {?} */


          var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


          if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
          }

          this.openDialogs.push(dialogRef);
          dialogRef.afterClosed().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this6._removeOpenDialog(dialogRef);
          });
          this.afterOpened.next(dialogRef);
          return dialogRef;
        }
        /**
         * Closes all of the currently-open dialogs.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._closeDialogs(this.openDialogs);
        }
        /**
         * Finds an open dialog by its id.
         * @param {?} id ID to use when looking up the dialog.
         * @return {?}
         */

      }, {
        key: "getDialogById",
        value: function getDialogById(id) {
          return this.openDialogs.find(
          /**
          * @param {?} dialog
          * @return {?}
          */
          function (dialog) {
            return dialog.id === id;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Only close the dialogs at this level on destroy
          // since the parent service may still be active.
          this._closeDialogs(this._openDialogsAtThisLevel);

          this._afterAllClosedAtThisLevel.complete();

          this._afterOpenedAtThisLevel.complete();
        }
        /**
         * Creates the overlay into which the dialog will be loaded.
         * @private
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the OverlayRef for the created overlay.
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = this._getOverlayConfig(config);

          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an overlay config from a dialog config.
         * @private
         * @param {?} dialogConfig The dialog configuration.
         * @return {?} The overlay configuration.
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig(dialogConfig) {
          /** @type {?} */
          var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
          });

          if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
          }

          return state;
        }
        /**
         * Attaches an MatDialogContainer to a dialog's already-created overlay.
         * @private
         * @param {?} overlay Reference to the dialog's underlying overlay.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to a ComponentRef for the attached container.
         */

      }, {
        key: "_attachDialogContainer",
        value: function _attachDialogContainer(overlay, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatDialogConfig, config]]));
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
          /** @type {?} */

          var containerRef = overlay.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * Attaches the user-provided component to the already-created MatDialogContainer.
         * @private
         * @template T, R
         * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
         * @param {?} overlayRef Reference to the overlay in which the dialog resides.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
         */

      }, {
        key: "_attachDialogContent",
        value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
          // Create a reference to the dialog we're creating in order to give the user a handle
          // to modify and close it.

          /** @type {?} */
          var dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id); // When the dialog backdrop is clicked, we want to close it.

          if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(
            /**
            * @return {?}
            */
            function () {
              if (!dialogRef.disableClose) {
                dialogRef.close();
              }
            });
          }

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.data,
              dialogRef: dialogRef
            }));
          } else {
            /** @type {?} */
            var injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */


            var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
          }

          dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
          return dialogRef;
        }
        /**
         * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
         * of a dialog to close itself and, optionally, to return a value.
         * @private
         * @template T
         * @param {?} config Config object that is used to construct the dialog.
         * @param {?} dialogRef Reference to the dialog.
         * @param {?} dialogContainer
         * @return {?} The custom injector that can be used inside the dialog.
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, dialogRef, dialogContainer) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
          // content are created out of the same ViewContainerRef and as such, are siblings for injector
          // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
          // added to the injection tokens.

          /** @type {?} */

          var injectionTokens = new WeakMap([[MatDialogContainer, dialogContainer], [MAT_DIALOG_DATA, config.data], [MatDialogRef, dialogRef]]);

          if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], {
              value: config.direction,
              change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
            });
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, injectionTokens);
        }
        /**
         * Removes a dialog from the array of open dialogs.
         * @private
         * @param {?} dialogRef Dialog to be removed.
         * @return {?}
         */

      }, {
        key: "_removeOpenDialog",
        value: function _removeOpenDialog(dialogRef) {
          /** @type {?} */
          var index = this.openDialogs.indexOf(dialogRef);

          if (index > -1) {
            this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.

            if (!this.openDialogs.length) {
              this._ariaHiddenElements.forEach(
              /**
              * @param {?} previousValue
              * @param {?} element
              * @return {?}
              */
              function (previousValue, element) {
                if (previousValue) {
                  element.setAttribute('aria-hidden', previousValue);
                } else {
                  element.removeAttribute('aria-hidden');
                }
              });

              this._ariaHiddenElements.clear();

              this._afterAllClosed.next();
            }
          }
        }
        /**
         * Hides all of the content that isn't an overlay from assistive technology.
         * @private
         * @return {?}
         */

      }, {
        key: "_hideNonDialogContentFromAssistiveTechnology",
        value: function _hideNonDialogContentFromAssistiveTechnology() {
          /** @type {?} */
          var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


          if (overlayContainer.parentElement) {
            /** @type {?} */
            var siblings = overlayContainer.parentElement.children;

            for (var i = siblings.length - 1; i > -1; i--) {
              /** @type {?} */
              var sibling = siblings[i];

              if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                sibling.setAttribute('aria-hidden', 'true');
              }
            }
          }
        }
        /**
         * Closes all of the dialogs in an array.
         * @private
         * @param {?} dialogs
         * @return {?}
         */

      }, {
        key: "_closeDialogs",
        value: function _closeDialogs(dialogs) {
          /** @type {?} */
          var i = dialogs.length;

          while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
          }
        }
      }, {
        key: "openDialogs",
        get: function get() {
          return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        }
        /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        get: function get() {
          return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_afterAllClosed",
        get: function get() {
          /** @type {?} */
          var parent = this._parentDialog;
          return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        }
      }]);

      return MatDialog;
    }();

    MatDialog.ɵfac = function MatDialog_Factory(t) {
      return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
    };

    MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: MatDialog,
      factory: MatDialog.ɵfac
    });
    /** @nocollapse */

    MatDialog.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: MatDialogConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_DIALOG_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_DIALOG_SCROLL_STRATEGY]
        }]
      }, {
        type: MatDialog,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Applies default options to the dialog config.
     * @param {?=} config Config to be modified.
     * @param {?=} defaultOptions Default options provided.
     * @return {?} The new configuration object.
     */


    function _applyConfigDefaults(config, defaultOptions) {
      return Object.assign(Object.assign({}, defaultOptions), config);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-content-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique IDs for dialog elements.
     * @type {?}
     */


    var dialogElementUid = 0;
    /**
     * Button that will close the current dialog.
     */

    var MatDialogClose =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogClose(dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogClose);

        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */

        this.type = 'button';
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogClose, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

          if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
          }
        }
      }]);

      return MatDialogClose;
    }();

    MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
      return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatDialog));
    };

    MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
            return ctx.dialogRef.close(ctx.dialogResult);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        type: "type",
        dialogResult: ["mat-dialog-close", "dialogResult"],
        ariaLabel: ["aria-label", "ariaLabel"],
        _matDialogClose: ["matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    MatDialogClose.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogClose.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-label']
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dialogResult: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['mat-dialog-close']
      }],
      _matDialogClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matDialogClose']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mat-dialog-close], [matDialogClose]',
          exportAs: 'matDialogClose',
          host: {
            '(click)': 'dialogRef.close(dialogResult)',
            '[attr.aria-label]': 'ariaLabel || null',
            '[attr.type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: MatDialog
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['mat-dialog-close']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matDialogClose']
        }]
      });
    })();

    if (false) {}
    /**
     * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
     */


    var MatDialogTitle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogTitle);

        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-".concat(dialogElementUid++);
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogTitle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (!this._dialogRef) {
            this._dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }

          if (this._dialogRef) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var container = _this7._dialogRef._containerInstance;

              if (container && !container._ariaLabelledBy) {
                container._ariaLabelledBy = _this7.id;
              }
            });
          }
        }
      }]);

      return MatDialogTitle;
    }();

    MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
      return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatDialog));
    };

    MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-dialog-title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"]
    });
    /** @nocollapse */

    MatDialogTitle.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogTitle.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mat-dialog-title], [matDialogTitle]',
          exportAs: 'matDialogTitle',
          host: {
            'class': 'mat-dialog-title',
            '[id]': 'id'
          }
        }]
      }], function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: MatDialog
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Scrollable content container of a dialog.
     */


    var MatDialogContent = function MatDialogContent() {
      _classCallCheck(this, MatDialogContent);
    };

    MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
      return new (t || MatDialogContent)();
    };

    MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-dialog-content"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
          host: {
            'class': 'mat-dialog-content'
          }
        }]
      }], null, null);
    })();
    /**
     * Container for the bottom action buttons in a dialog.
     * Stays fixed to the bottom when scrolling.
     */


    var MatDialogActions = function MatDialogActions() {
      _classCallCheck(this, MatDialogActions);
    };

    MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
      return new (t || MatDialogActions)();
    };

    MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-dialog-actions"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
          host: {
            'class': 'mat-dialog-actions'
          }
        }]
      }], null, null);
    })();
    /**
     * Finds the closest MatDialogRef to an element by looking at the DOM.
     * @param {?} element Element relative to which to look for a dialog.
     * @param {?} openDialogs References to the currently-open dialogs.
     * @return {?}
     */


    function getClosestDialog(element, openDialogs) {
      /** @type {?} */
      var parent = element.nativeElement.parentElement;

      while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
      }

      return parent ? openDialogs.find(
      /**
      * @param {?} dialog
      * @return {?}
      */
      function (dialog) {
        return dialog.id ===
        /** @type {?} */
        parent.id;
      }) : null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDialogModule = function MatDialogModule() {
      _classCallCheck(this, MatDialogModule);
    };

    MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatDialogModule
    });
    MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatDialogModule_Factory(t) {
        return new (t || MatDialogModule)();
      },
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatDialogModule, {
        declarations: function declarations() {
          return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
          exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
          declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
          providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
          entryComponents: [MatDialogContainer]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=dialog.js.map

    /***/

  },

  /***/
  "./src/app/kanban/board.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/kanban/board.service.ts ***!
    \*****************************************/

  /*! exports provided: BoardService */

  /***/
  function srcAppKanbanBoardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardService", function () {
      return BoardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");

    var BoardService =
    /*#__PURE__*/
    function () {
      function BoardService(afAuth, db) {
        _classCallCheck(this, BoardService);

        this.afAuth = afAuth;
        this.db = db;
      }
      /**
       * Creates a new board for the current user
       */


      _createClass(BoardService, [{
        key: "createBoard",
        value: function createBoard(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afAuth.auth.currentUser;

                  case 2:
                    user = _context.sent;
                    return _context.abrupt("return", this.db.collection('boards').add(Object.assign(Object.assign({}, data), {
                      uid: user.uid,
                      tasks: [{
                        description: 'Hello!',
                        label: 'yellow'
                      }]
                    })));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * Get all boards owned by current user
         */

      }, {
        key: "getUserBoards",
        value: function getUserBoards() {
          var _this8 = this;

          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (user) {
              return _this8.db.collection('boards', function (ref) {
                return ref.where('uid', '==', user.uid).orderBy('priority');
              }).valueChanges({
                idField: 'id'
              });
            } else {
              return [];
            }
          }));
        }
        /**
         * Run a batch write to change the priority of each board for sorting
         */

      }, {
        key: "sortBoards",
        value: function sortBoards(boards) {
          var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
          var batch = db.batch();
          var refs = boards.map(function (b) {
            return db.collection('boards').doc(b.id);
          });
          refs.forEach(function (ref, idx) {
            return batch.update(ref, {
              priority: idx
            });
          });
          batch.commit();
        }
        /**
         * Delete board
         */

      }, {
        key: "deleteBoard",
        value: function deleteBoard(boardId) {
          return this.db.collection('boards').doc(boardId).delete();
        }
        /**
         * Updates the tasks on board
         */

      }, {
        key: "updateTasks",
        value: function updateTasks(boardId, tasks) {
          return this.db.collection('boards').doc(boardId).update({
            tasks: tasks
          });
        }
        /**
         * Remove a specifc task from the board
         */

      }, {
        key: "removeTask",
        value: function removeTask(boardId, task) {
          return this.db.collection('boards').doc(boardId).update({
            tasks: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(task)
          });
        }
      }]);

      return BoardService;
    }();

    BoardService.ɵfac = function BoardService_Factory(t) {
      return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]));
    };

    BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BoardService,
      factory: BoardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kanban/board/board.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/kanban/board/board.component.ts ***!
    \*************************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppKanbanBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _dialogs_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dialogs/task-dialog.component */
    "./src/app/kanban/dialogs/task-dialog.component.ts");
    /* harmony import */


    var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../board.service */
    "./src/app/kanban/board.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/delete-button/delete-button.component */
    "./src/app/shared/delete-button/delete-button.component.ts");

    function BoardComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_8_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var task_r50 = ctx.$implicit;
          var i_r51 = ctx.index;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.openDialog(task_r50, i_r51);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", task_r50.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r50.description, " ");
      }
    }

    var _c0 = ["*"];

    var BoardComponent =
    /*#__PURE__*/
    function () {
      function BoardComponent(boardService, dialog) {
        _classCallCheck(this, BoardComponent);

        this.boardService = boardService;
        this.dialog = dialog;
      }

      _createClass(BoardComponent, [{
        key: "taskDrop",
        value: function taskDrop(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.board.tasks, event.previousIndex, event.currentIndex);
          this.boardService.updateTasks(this.board.id, this.board.tasks);
        }
      }, {
        key: "openDialog",
        value: function openDialog(task, idx) {
          var _this9 = this;

          var newTask = {
            label: 'purple'
          };
          var dialogRef = this.dialog.open(_dialogs_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__["TaskDialogComponent"], {
            width: '500px',
            data: task ? {
              task: Object.assign({}, task),
              isNew: false,
              boardId: this.board.id,
              idx: idx
            } : {
              task: newTask,
              isNew: true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (result.isNew) {
                _this9.boardService.updateTasks(_this9.board.id, [].concat(_toConsumableArray(_this9.board.tasks), [result.task]));
              } else {
                var update = _this9.board.tasks;
                update.splice(result.idx, 1, result.task);

                _this9.boardService.updateTasks(_this9.board.id, _this9.board.tasks);
              }
            }
          });
        }
      }, {
        key: "handleDelete",
        value: function handleDelete() {
          this.boardService.deleteBoard(this.board.id);
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["app-board"]],
      inputs: {
        board: "board"
      },
      ngContentSelectors: _c0,
      decls: 13,
      vars: 3,
      consts: [[1, "outer-card"], ["cdkDropList", "", "cdkDropListOrientation", "vertical", 1, "tasks", 3, "cdkDropListDropped"], ["class", "inner-card", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 3, "click"], [3, "delete"], ["cdkDrag", "", 1, "inner-card", 3, "click"], [3, "ngClass"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BoardComponent_Template_div_cdkDropListDropped_7_listener($event) {
            return ctx.taskDrop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BoardComponent_div_8_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_9_listener($event) {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-delete-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function BoardComponent_Template_app_delete_button_delete_12_listener($event) {
            return ctx.handleDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.board.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.board.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.board.tasks);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _shared_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_9__["DeleteButtonComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: [".outer-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  min-width: 300px;\n  max-width: 300px;\n  padding: 10px;\n  background: #212121;\n}\n\n.inner-card[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  cursor: pointer;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.tasks.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.blue[_ngcontent-%COMP%] {\n  background: #71deff;\n  color: black;\n}\n\n.green[_ngcontent-%COMP%] {\n  background: #36e9b6;\n  color: black;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background: #ffcf44;\n  color: black;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background: #b15cff;\n}\n\n.red[_ngcontent-%COMP%] {\n  background: #e74a4a;\n}\n\n.gray[_ngcontent-%COMP%] {\n  background: gray;\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuL2JvYXJkL0M6XFxVc2Vyc1xcb2tlaWxhXFxXZWJzdG9ybVByb2plY3RzXFxmb290YmFsbC10ZXN0L3NyY1xcYXBwXFxrYW5iYW5cXGJvYXJkXFxib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2FuYmFuL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDQ047O0FERUU7RUFDRSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSw4REFBQTtBQ0NKOztBREVFO0VBQ0UsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQUEsOERBQUE7QUNDSjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUFRLG1CQUFBO0VBQXFCLFlBQUE7QUNHN0I7O0FERkE7RUFBUyxtQkFBQTtFQUFxQixZQUFBO0FDTzlCOztBRE5BO0VBQVUsbUJBQUE7RUFBcUIsWUFBQTtBQ1cvQjs7QURWQTtFQUFVLG1CQUFBO0FDY1Y7O0FEYkE7RUFBTyxtQkFBQTtBQ2lCUDs7QURmQTtFQUFRLGdCQUFBO0VBQWtCLDZCQUFBO0FDb0IxQiIsImZpbGUiOiJzcmMvYXBwL2thbmJhbi9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jYXJkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbm5lci1jYXJkIHtcclxuICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2tzLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gIH1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uYmx1ZSB7IGJhY2tncm91bmQ6ICM3MWRlZmY7IGNvbG9yOiBibGFjazsgfVxyXG4uZ3JlZW4geyBiYWNrZ3JvdW5kOiAjMzZlOWI2OyBjb2xvcjogYmxhY2s7ICB9XHJcbi55ZWxsb3cgeyBiYWNrZ3JvdW5kOiAjZmZjZjQ0OyBjb2xvcjogYmxhY2s7IH1cclxuLnB1cnBsZSB7IGJhY2tncm91bmQ6ICNiMTVjZmY7IH1cclxuLnJlZCB7IGJhY2tncm91bmQ6ICNlNzRhNGE7IH1cclxuXHJcbi5ncmF5IHsgYmFja2dyb3VuZDogZ3JheTsgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH0iLCIub3V0ZXItY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcbn1cblxuLmlubmVyLWNhcmQge1xuICBtYXJnaW46IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbn1cblxuLnRhc2tzLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kOiAjNzFkZWZmO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMzNmU5YjY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmNmNDQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICNiMTVjZmY7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiAjZTc0YTRhO1xufVxuXG4uZ3JheSB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.scss']
        }]
      }], function () {
        return [{
          type: _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        board: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/kanban/boards-list/boards-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/kanban/boards-list/boards-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: BoardsListComponent */

  /***/
  function srcAppKanbanBoardsListBoardsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardsListComponent", function () {
      return BoardsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _dialogs_board_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dialogs/board-dialog.component */
    "./src/app/kanban/dialogs/board-dialog.component.ts");
    /* harmony import */


    var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../board.service */
    "./src/app/kanban/board.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../board/board.component */
    "./src/app/kanban/board/board.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function BoardsListComponent_app_board_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-board", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "drag_indicator");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var board_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("board", board_r42);
      }
    }

    var BoardsListComponent =
    /*#__PURE__*/
    function () {
      function BoardsListComponent(boardService, dialog) {
        _classCallCheck(this, BoardsListComponent);

        this.boardService = boardService;
        this.dialog = dialog;
      }

      _createClass(BoardsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.sub = this.boardService.getUserBoards().subscribe(function (boards) {
            return _this10.boards = boards;
          });
        }
      }, {
        key: "drop",
        value: function drop(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.boards, event.previousIndex, event.currentIndex);
          this.boardService.sortBoards(this.boards);
        }
      }, {
        key: "openBoardDialog",
        value: function openBoardDialog() {
          var _this11 = this;

          var dialogRef = this.dialog.open(_dialogs_board_dialog_component__WEBPACK_IMPORTED_MODULE_2__["BoardDialogComponent"], {
            width: '400px',
            data: {}
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this11.boardService.createBoard({
                title: result,
                priority: _this11.boards.length
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return BoardsListComponent;
    }();

    BoardsListComponent.ɵfac = function BoardsListComponent_Factory(t) {
      return new (t || BoardsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    BoardsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardsListComponent,
      selectors: [["app-boards-list"]],
      decls: 5,
      vars: 1,
      consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "boards", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "board", 4, "ngFor", "ngForOf"], [1, "board-button"], ["mat-raised-button", "", "color", "accent", "cdkDragDisabled", "", 3, "click"], ["cdkDrag", "", 3, "board"], ["cdkDragHandle", "", 1, "handle"]],
      template: function BoardsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BoardsListComponent_Template_div_cdkDropListDropped_0_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardsListComponent_app_board_1_Template, 3, 1, "app-board", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardsListComponent_Template_button_click_3_listener($event) {
            return ctx.openBoardDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New Board ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boards);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"]],
      styles: [".boards[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  overflow-x: scroll;\n}\n.boards[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n  width: 4px;\n}\n.boards[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #000;\n}\n.boards[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  background-color: #000;\n}\n.boards[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #f5f5f5;\n  border: 2px solid #555555;\n}\n.boards[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  left: 0;\n  cursor: move;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  width: 350px;\n  border: 5px dashed gray;\n  margin: 0 10px;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n.boards.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n.board-button[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: 5px gray dashed;\n  width: 300px;\n  padding: 32px;\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuL2JvYXJkcy1saXN0L0M6XFxVc2Vyc1xcb2tlaWxhXFxXZWJzdG9ybVByb2plY3RzXFxmb290YmFsbC10ZXN0L3NyY1xcYXBwXFxrYW5iYW5cXGJvYXJkcy1saXN0XFxib2FyZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2FuYmFuL2JvYXJkcy1saXN0L2JvYXJkcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQUU7RUFFRSxzQkFBQTtBQ0NKO0FEQ0U7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0RKO0FETUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0hGO0FET0E7RUFDRSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSw4REFBQTtBQ0pGO0FET0E7RUFDRSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSw4REFBQTtBQ0pGO0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9rYW5iYW4vYm9hcmRzLWxpc3QvYm9hcmRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmRzIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogNHB4XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuLy8gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xyXG4gIH1cclxuICBcclxuICAuaGFuZGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYm9yZGVyOiA1cHggZGFzaGVkIGdyYXk7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uYm9hcmRzLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuXHJcbi5ib2FyZC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogNXB4IGdyYXkgZGFzaGVkO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn0iLCIuYm9hcmRzIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5ib2FyZHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0cHg7XG59XG4uYm9hcmRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uYm9hcmRzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uYm9hcmRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XG59XG4uYm9hcmRzIC5oYW5kbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAwO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXI6IDVweCBkYXNoZWQgZ3JheTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbn1cblxuLmJvYXJkcy5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xufVxuXG4uYm9hcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogNXB4IGdyYXkgZGFzaGVkO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGhlaWdodDogMzUwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-boards-list',
          templateUrl: './boards-list.component.html',
          styleUrls: ['./boards-list.component.scss']
        }]
      }], function () {
        return [{
          type: _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kanban/dialogs/board-dialog.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/kanban/dialogs/board-dialog.component.ts ***!
    \**********************************************************/

  /*! exports provided: BoardDialogComponent */

  /***/
  function srcAppKanbanDialogsBoardDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardDialogComponent", function () {
      return BoardDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var BoardDialogComponent =
    /*#__PURE__*/
    function () {
      function BoardDialogComponent(dialogRef, data) {
        _classCallCheck(this, BoardDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(BoardDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return BoardDialogComponent;
    }();

    BoardDialogComponent.ɵfac = function BoardDialogComponent_Factory(t) {
      return new (t || BoardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    BoardDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardDialogComponent,
      selectors: [["app-board-dialog"]],
      decls: 12,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["placeholder", "title", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function BoardDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Board");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What shall we call this board?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardDialogComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.data.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardDialogComponent_Template_button_click_8_listener($event) {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.title);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board-dialog',
          template: "\n    <h1 mat-dialog-title>Board</h1>\n    <div mat-dialog-content>\n    <p>What shall we call this board?</p>\n      <mat-form-field>\n        <input placeholder=\"title\" matInput [(ngModel)]=\"data.title\" />\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Cancel</button>\n      <button mat-button [mat-dialog-close]=\"data.title\" cdkFocusInitial>\n        Create\n      </button>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kanban/dialogs/task-dialog.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/kanban/dialogs/task-dialog.component.ts ***!
    \*********************************************************/

  /*! exports provided: TaskDialogComponent */

  /***/
  function srcAppKanbanDialogsTaskDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function () {
      return TaskDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../board.service */
    "./src/app/kanban/board.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/delete-button/delete-button.component */
    "./src/app/shared/delete-button/delete-button.component.ts");

    function TaskDialogComponent_mat_button_toggle_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var opt_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", opt_r46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r46 === "gray" ? "check_circle" : "lens");
      }
    }

    function TaskDialogComponent_app_delete_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function TaskDialogComponent_app_delete_button_12_Template_app_delete_button_delete_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.handleTaskDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TaskDialogComponent =
    /*#__PURE__*/
    function () {
      function TaskDialogComponent(dialogRef, boardService, data) {
        _classCallCheck(this, TaskDialogComponent);

        this.dialogRef = dialogRef;
        this.boardService = boardService;
        this.data = data;
        this.labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];
      }

      _createClass(TaskDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "handleTaskDelete",
        value: function handleTaskDelete() {
          this.boardService.removeTask(this.data.boardId, this.data.task);
          this.dialogRef.close();
        }
      }]);

      return TaskDialogComponent;
    }();

    TaskDialogComponent.ɵfac = function TaskDialogComponent_Factory(t) {
      return new (t || TaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    TaskDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskDialogComponent,
      selectors: [["app-task-dialog"]],
      decls: 13,
      vars: 6,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "content"], ["placeholder", "Task description", "matInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["group", "matButtonToggleGroup"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], [3, "delete", 4, "ngIf"], [3, "value"], [3, "ngClass"], [3, "delete"]],
      template: function TaskDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDialogComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.data.task.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle-group", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDialogComponent_Template_mat_button_toggle_group_ngModelChange_6_listener($event) {
            return ctx.data.task.label = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskDialogComponent_mat_button_toggle_8_Template, 3, 3, "mat-button-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskDialogComponent_app_delete_button_12_Template, 1, 0, "app-delete-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.task.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.task.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labelOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.isNew ? "Add Task" : "Update Task", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.isNew);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_10__["DeleteButtonComponent"]],
      styles: [".content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: auto;\n  padding: 20px;\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: #71deff;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: #36e9b6;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  color: #ffcf44;\n}\n\n.purple[_ngcontent-%COMP%] {\n  color: #b15cff;\n}\n\n.gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #e74a4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuL2RpYWxvZ3MvQzpcXFVzZXJzXFxva2VpbGFcXFdlYnN0b3JtUHJvamVjdHNcXGZvb3RiYWxsLXRlc3Qvc3JjXFxhcHBcXGthbmJhblxcZGlhbG9nc1xcZGlhbG9nLnNjc3MiLCJzcmMvYXBwL2thbmJhbi9kaWFsb2dzL2RpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUFXLGNBQUE7RUFBZ0IsV0FBQTtBQ0czQjs7QUREQTtFQUFRLGNBQUE7QUNLUjs7QURKQTtFQUFTLGNBQUE7QUNRVDs7QURQQTtFQUFVLGNBQUE7QUNXVjs7QURWQTtFQUFVLGNBQUE7QUNjVjs7QURiQTtFQUFRLFdBQUE7QUNpQlI7O0FEaEJBO0VBQU8sY0FBQTtBQ29CUCIsImZpbGUiOiJzcmMvYXBwL2thbmJhbi9kaWFsb2dzL2RpYWxvZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxudGV4dGFyZWEgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cclxuXHJcbi5ibHVlIHsgY29sb3I6ICM3MWRlZmY7IH1cclxuLmdyZWVuIHsgY29sb3I6ICMzNmU5YjY7IH1cclxuLnllbGxvdyB7IGNvbG9yOiAjZmZjZjQ0OyB9XHJcbi5wdXJwbGUgeyBjb2xvcjogI2IxNWNmZjsgfVxyXG4uZ3JheSB7IGNvbG9yOiBncmF5OyB9XHJcbi5yZWQgeyBjb2xvcjogI2U3NGE0YTsgfSIsIi5jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICM3MWRlZmY7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjMzZlOWI2O1xufVxuXG4ueWVsbG93IHtcbiAgY29sb3I6ICNmZmNmNDQ7XG59XG5cbi5wdXJwbGUge1xuICBjb2xvcjogI2IxNWNmZjtcbn1cblxuLmdyYXkge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZTc0YTRhO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task-dialog',
          styleUrls: ['./dialog.scss'],
          template: "\n    <h1 mat-dialog-title>Task</h1>\n    <div mat-dialog-content class=\"content\">\n      <mat-form-field>\n        <textarea\n          placeholder=\"Task description\"\n          matInput\n          [(ngModel)]=\"data.task.description\"\n        ></textarea>\n      </mat-form-field>\n      <br />\n      <mat-button-toggle-group\n        #group=\"matButtonToggleGroup\"\n        [(ngModel)]=\"data.task.label\"\n      >\n        <mat-button-toggle *ngFor=\"let opt of labelOptions\" [value]=\"opt\">\n          <mat-icon [ngClass]=\"opt\">{{\n            opt === 'gray' ? 'check_circle' : 'lens'\n          }}</mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>\n        {{ data.isNew ? 'Add Task' : 'Update Task' }}\n      </button>\n\n      <app-delete-button\n        (delete)=\"handleTaskDelete()\"\n        *ngIf=\"!data.isNew\"\n      ></app-delete-button>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kanban/kanban-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/kanban/kanban-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: KanbanRoutingModule */

  /***/
  function srcAppKanbanKanbanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KanbanRoutingModule", function () {
      return KanbanRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _boards_list_boards_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./boards-list/boards-list.component */
    "./src/app/kanban/boards-list/boards-list.component.ts");

    var routes = [{
      path: '',
      component: _boards_list_boards_list_component__WEBPACK_IMPORTED_MODULE_2__["BoardsListComponent"]
    }];

    var KanbanRoutingModule = function KanbanRoutingModule() {
      _classCallCheck(this, KanbanRoutingModule);
    };

    KanbanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: KanbanRoutingModule
    });
    KanbanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function KanbanRoutingModule_Factory(t) {
        return new (t || KanbanRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KanbanRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KanbanRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/kanban/kanban.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/kanban/kanban.module.ts ***!
    \*****************************************/

  /*! exports provided: KanbanModule */

  /***/
  function srcAppKanbanKanbanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KanbanModule", function () {
      return KanbanModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _kanban_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kanban-routing.module */
    "./src/app/kanban/kanban-routing.module.ts");
    /* harmony import */


    var _boards_list_boards_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./boards-list/boards-list.component */
    "./src/app/kanban/boards-list/boards-list.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/kanban/board/board.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dialogs_board_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dialogs/board-dialog.component */
    "./src/app/kanban/dialogs/board-dialog.component.ts");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _dialogs_task_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dialogs/task-dialog.component */
    "./src/app/kanban/dialogs/task-dialog.component.ts");

    var KanbanModule = function KanbanModule() {
      _classCallCheck(this, KanbanModule);
    };

    KanbanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: KanbanModule
    });
    KanbanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function KanbanModule_Factory(t) {
        return new (t || KanbanModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _kanban_routing_module__WEBPACK_IMPORTED_MODULE_2__["KanbanRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KanbanModule, {
        declarations: [_boards_list_boards_list_component__WEBPACK_IMPORTED_MODULE_3__["BoardsListComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"], _dialogs_board_dialog_component__WEBPACK_IMPORTED_MODULE_10__["BoardDialogComponent"], _dialogs_task_dialog_component__WEBPACK_IMPORTED_MODULE_12__["TaskDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _kanban_routing_module__WEBPACK_IMPORTED_MODULE_2__["KanbanRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KanbanModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_boards_list_boards_list_component__WEBPACK_IMPORTED_MODULE_3__["BoardsListComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"], _dialogs_board_dialog_component__WEBPACK_IMPORTED_MODULE_10__["BoardDialogComponent"], _dialogs_task_dialog_component__WEBPACK_IMPORTED_MODULE_12__["TaskDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _kanban_routing_module__WEBPACK_IMPORTED_MODULE_2__["KanbanRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"]],
          entryComponents: [_dialogs_board_dialog_component__WEBPACK_IMPORTED_MODULE_10__["BoardDialogComponent"], _dialogs_task_dialog_component__WEBPACK_IMPORTED_MODULE_12__["TaskDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=kanban-kanban-module-es5.js.map