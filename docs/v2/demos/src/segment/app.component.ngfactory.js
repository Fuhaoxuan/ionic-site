var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from '@angular/forms/src/directives/ng_model';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from 'ionic-angular/components/segment/segment';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from 'ionic-angular/components/list/list';
import * as import19 from 'ionic-angular/components/item/item';
import * as import20 from 'ionic-angular/components/list/list-header';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from 'ionic-angular/components/card/card';
import * as import23 from 'ionic-angular/components/icon/icon';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/navigation/nav-controller';
import * as import30 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import32 from '../../node_modules/ionic-angular/components/segment/segment.ngfactory';
import * as import33 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import34 from 'ionic-angular/util/keyboard';
import * as import35 from '@angular/core/src/zone/ng_zone';
import * as import36 from 'ionic-angular/components/tabs/tabs';
import * as import37 from 'ionic-angular/gestures/gesture-controller';
import * as import38 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import39 from 'ionic-angular/util/form';
import * as import40 from '@angular/core/src/linker/template_ref';
import * as import41 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import42 from '@angular/forms/src/directives/ng_control';
import * as import43 from 'ionic-angular/components/button/button';
import * as import44 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import45 from 'ionic-angular/components/nav/nav';
import * as import46 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import47 from 'ionic-angular/navigation/nav-controller-base';
import * as import48 from '@angular/core/src/linker/component_factory_resolver';
import * as import49 from 'ionic-angular/transitions/transition-controller';
import * as import50 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
var styles_ApiDemoPage = [];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'no-border-bottom', '');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import27.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import29.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Segment', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_8, 'no-border-top', '');
        this._appEl_8 = new import2.AppElement(8, 0, this, this._el_8);
        var compView_8 = import31.viewFactory_Toolbar0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Toolbar_8_4 = new import10.Toolbar(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_8), this.renderer);
        this._appEl_8.initComponent(this._Toolbar_8_4, [], compView_8);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-segment', null);
        this._NgModel_10_3 = new import13.NgModel(null, null, null, null);
        this._NgControl_10_4 = this._NgModel_10_3;
        this._NgControlStatus_10_5 = new import14.NgControlStatus(this._NgControl_10_4);
        this._Segment_10_6 = new import15.Segment(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_10), this.renderer, this._NgControl_10_4);
        this._query_SegmentButton_10_0 = new import16.QueryList();
        this._text_11 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_12, 'role', 'button');
        this.renderer.setElementAttribute(this._el_12, 'tappable', '');
        this.renderer.setElementAttribute(this._el_12, 'value', 'Paid');
        this._appEl_12 = new import2.AppElement(12, 10, this, this._el_12);
        var compView_12 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(12), this._appEl_12);
        this._SegmentButton_12_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_12));
        this._appEl_12.initComponent(this._SegmentButton_12_4, [], compView_12);
        this._text_13 = this.renderer.createText(null, '\n        Paid\n      ', null);
        compView_12.create(this._SegmentButton_12_4, [[].concat([this._text_13])], null);
        this._text_14 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_10, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_15, 'role', 'button');
        this.renderer.setElementAttribute(this._el_15, 'tappable', '');
        this.renderer.setElementAttribute(this._el_15, 'value', 'Free');
        this._appEl_15 = new import2.AppElement(15, 10, this, this._el_15);
        var compView_15 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(15), this._appEl_15);
        this._SegmentButton_15_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_15));
        this._appEl_15.initComponent(this._SegmentButton_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n        Free\n      ', null);
        compView_15.create(this._SegmentButton_15_4, [[].concat([this._text_16])], null);
        this._text_17 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_18 = this.renderer.createElement(this._el_10, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_18, 'role', 'button');
        this.renderer.setElementAttribute(this._el_18, 'tappable', '');
        this.renderer.setElementAttribute(this._el_18, 'value', 'Top');
        this._appEl_18 = new import2.AppElement(18, 10, this, this._el_18);
        var compView_18 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(18), this._appEl_18);
        this._SegmentButton_18_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_18));
        this._appEl_18.initComponent(this._SegmentButton_18_4, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n        Top\n      ', null);
        compView_18.create(this._SegmentButton_18_4, [[].concat([this._text_19])], null);
        this._text_20 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_21 = this.renderer.createText(null, '\n  ', null);
        compView_8.create(this._Toolbar_8_4, [
            [],
            [],
            [],
            [].concat([
                this._text_9,
                this._el_10,
                this._text_21
            ])
        ], null);
        this._text_22 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_23 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_24 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'outer-content');
        this._appEl_24 = new import2.AppElement(24, null, this, this._el_24);
        var compView_24 = import33.viewFactory_Content0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Content_24_4 = new import17.Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_24), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import34.Keyboard), this.parentInjector.get(import35.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import36.Tabs, null));
        this._appEl_24.initComponent(this._Content_24_4, [], compView_24);
        this._text_25 = this.renderer.createText(null, '\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-list', null);
        this._List_26_3 = new import18.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_26), this.renderer, this.parentInjector.get(import37.GestureController));
        this._text_27 = this.renderer.createText(this._el_26, '\n    ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'item');
        this._appEl_28 = new import2.AppElement(28, 26, this, this._el_28);
        var compView_28 = import38.viewFactory_Item0(this.viewUtils, this.injector(28), this._appEl_28);
        this._Item_28_4 = new import19.Item(this.parentInjector.get(import39.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_28), this.renderer);
        this._ListHeader_28_5 = new import20.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_28), null);
        this._query_Label_28_0 = new import16.QueryList();
        this._query_Button_28_1 = new import16.QueryList();
        this._query_Icon_28_2 = new import16.QueryList();
        this._appEl_28.initComponent(this._Item_28_4, [], compView_28);
        this._text_29 = this.renderer.createText(null, '', null);
        this._query_Label_28_0.reset([]);
        this._Item_28_4.contentLabel = this._query_Label_28_0.first;
        compView_28.create(this._Item_28_4, [
            [],
            [],
            [].concat([this._text_29]),
            [],
            []
        ], null);
        this._text_30 = this.renderer.createText(this._el_26, '\n    ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._appEl_31 = new import2.AppElement(31, 26, this, this._anchor_31);
        this._TemplateRef_31_5 = new import40.TemplateRef_(this._appEl_31, viewFactory_ApiDemoPage1);
        this._NgFor_31_6 = new import21.NgFor(this._appEl_31.vcRef, this._TemplateRef_31_5, this.parentInjector.get(import41.IterableDiffers), this.ref);
        this._text_32 = this.renderer.createText(this._el_26, '\n  ', null);
        this._text_33 = this.renderer.createText(null, '\n\n  ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-card', null);
        this._Card_34_3 = new import22.Card(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_34), this.renderer);
        this._text_35 = this.renderer.createText(this._el_34, '\n    ', null);
        this._el_36 = this.renderer.createElement(this._el_34, 'ion-card-header', null);
        this._CardHeader_36_3 = new import22.CardHeader();
        this._text_37 = this.renderer.createText(this._el_36, '', null);
        this._text_38 = this.renderer.createText(this._el_34, '\n    ', null);
        this._el_39 = this.renderer.createElement(this._el_34, 'ion-card-content', null);
        this._CardContent_39_3 = new import22.CardContent();
        this._text_40 = this.renderer.createText(this._el_39, '\n      ', null);
        this._el_41 = this.renderer.createElement(this._el_39, 'ion-segment', null);
        this.renderer.setElementAttribute(this._el_41, 'color', 'dark');
        this._NgModel_41_3 = new import13.NgModel(null, null, null, null);
        this._NgControl_41_4 = this._NgModel_41_3;
        this._NgControlStatus_41_5 = new import14.NgControlStatus(this._NgControl_41_4);
        this._Segment_41_6 = new import15.Segment(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_41), this.renderer, this._NgControl_41_4);
        this._query_SegmentButton_41_0 = new import16.QueryList();
        this._text_42 = this.renderer.createText(this._el_41, '\n        ', null);
        this._el_43 = this.renderer.createElement(this._el_41, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_43, 'role', 'button');
        this.renderer.setElementAttribute(this._el_43, 'tappable', '');
        this.renderer.setElementAttribute(this._el_43, 'value', 'Bookmarks');
        this._appEl_43 = new import2.AppElement(43, 41, this, this._el_43);
        var compView_43 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(43), this._appEl_43);
        this._SegmentButton_43_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_43));
        this._appEl_43.initComponent(this._SegmentButton_43_4, [], compView_43);
        this._text_44 = this.renderer.createText(null, '\n          ', null);
        this._el_45 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_45, 'name', 'book');
        this.renderer.setElementAttribute(this._el_45, 'role', 'img');
        this._Icon_45_3 = new import23.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_45), this.renderer);
        this._text_46 = this.renderer.createText(null, '\n        ', null);
        compView_43.create(this._SegmentButton_43_4, [[].concat([
                this._text_44,
                this._el_45,
                this._text_46
            ])], null);
        this._text_47 = this.renderer.createText(this._el_41, '\n        ', null);
        this._el_48 = this.renderer.createElement(this._el_41, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_48, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_48, 'role', 'button');
        this.renderer.setElementAttribute(this._el_48, 'tappable', '');
        this.renderer.setElementAttribute(this._el_48, 'value', 'Reading List');
        this._appEl_48 = new import2.AppElement(48, 41, this, this._el_48);
        var compView_48 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(48), this._appEl_48);
        this._SegmentButton_48_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_48));
        this._appEl_48.initComponent(this._SegmentButton_48_4, [], compView_48);
        this._text_49 = this.renderer.createText(null, '\n          ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_50, 'ios', 'ios-glasses-outline');
        this.renderer.setElementAttribute(this._el_50, 'md', 'md-glasses');
        this.renderer.setElementAttribute(this._el_50, 'role', 'img');
        this._Icon_50_3 = new import23.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_50), this.renderer);
        this._text_51 = this.renderer.createText(null, '\n        ', null);
        compView_48.create(this._SegmentButton_48_4, [[].concat([
                this._text_49,
                this._el_50,
                this._text_51
            ])], null);
        this._text_52 = this.renderer.createText(this._el_41, '\n        ', null);
        this._el_53 = this.renderer.createElement(this._el_41, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_53, 'role', 'button');
        this.renderer.setElementAttribute(this._el_53, 'tappable', '');
        this.renderer.setElementAttribute(this._el_53, 'value', 'Shared Links');
        this._appEl_53 = new import2.AppElement(53, 41, this, this._el_53);
        var compView_53 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(53), this._appEl_53);
        this._SegmentButton_53_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_53));
        this._appEl_53.initComponent(this._SegmentButton_53_4, [], compView_53);
        this._text_54 = this.renderer.createText(null, '\n          ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_55, 'ios', 'ios-at-outline');
        this.renderer.setElementAttribute(this._el_55, 'md', 'md-at');
        this.renderer.setElementAttribute(this._el_55, 'role', 'img');
        this._Icon_55_3 = new import23.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_55), this.renderer);
        this._text_56 = this.renderer.createText(null, '\n        ', null);
        compView_53.create(this._SegmentButton_53_4, [[].concat([
                this._text_54,
                this._el_55,
                this._text_56
            ])], null);
        this._text_57 = this.renderer.createText(this._el_41, '\n      ', null);
        this._text_58 = this.renderer.createText(this._el_39, '\n      ', null);
        this._el_59 = this.renderer.createElement(this._el_39, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_59, 'inset', '');
        this.renderer.setElementAttribute(this._el_59, 'style', 'margin: 0');
        this._List_59_3 = new import18.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_59), this.renderer, this.parentInjector.get(import37.GestureController));
        this._text_60 = this.renderer.createText(this._el_59, '\n        ', null);
        this._anchor_61 = this.renderer.createTemplateAnchor(this._el_59, null);
        this._appEl_61 = new import2.AppElement(61, 59, this, this._anchor_61);
        this._TemplateRef_61_5 = new import40.TemplateRef_(this._appEl_61, viewFactory_ApiDemoPage2);
        this._NgFor_61_6 = new import21.NgFor(this._appEl_61.vcRef, this._TemplateRef_61_5, this.parentInjector.get(import41.IterableDiffers), this.ref);
        this._text_62 = this.renderer.createText(this._el_59, '\n      ', null);
        this._text_63 = this.renderer.createText(this._el_39, '\n    ', null);
        this._text_64 = this.renderer.createText(this._el_34, '\n  ', null);
        this._text_65 = this.renderer.createText(null, '\n', null);
        compView_24.create(this._Content_24_4, [
            [],
            [].concat([
                this._text_25,
                this._el_26,
                this._text_33,
                this._el_34,
                this._text_65
            ]),
            []
        ], null);
        this._text_66 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_67 = this.renderer.createElement(parentRenderNode, 'ion-footer', null);
        this._Footer_67_3 = new import10.Footer(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_67), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_68 = this.renderer.createText(this._el_67, '\n  ', null);
        this._el_69 = this.renderer.createElement(this._el_67, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_69, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_69, 'no-border-bottom', '');
        this._appEl_69 = new import2.AppElement(69, 67, this, this._el_69);
        var compView_69 = import31.viewFactory_Toolbar0(this.viewUtils, this.injector(69), this._appEl_69);
        this._Toolbar_69_4 = new import10.Toolbar(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_69), this.renderer);
        this._appEl_69.initComponent(this._Toolbar_69_4, [], compView_69);
        this._text_70 = this.renderer.createText(null, '\n    ', null);
        this._el_71 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_71 = new import2.AppElement(71, 69, this, this._el_71);
        var compView_71 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(71), this._appEl_71);
        this._ToolbarTitle_71_4 = new import12.ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_71), this.renderer, this._Toolbar_69_4, this.parentInjector.get(import11.Navbar, null));
        this._appEl_71.initComponent(this._ToolbarTitle_71_4, [], compView_71);
        this._text_72 = this.renderer.createText(null, '', null);
        this._el_73 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_73, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_73, 'role', 'img');
        this._Icon_73_3 = new import23.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_73), this.renderer);
        this._text_74 = this.renderer.createText(null, '\n    ', null);
        compView_71.create(this._ToolbarTitle_71_4, [[].concat([
                this._text_72,
                this._el_73,
                this._text_74
            ])], null);
        this._text_75 = this.renderer.createText(null, '\n  ', null);
        compView_69.create(this._Toolbar_69_4, [
            [],
            [],
            [],
            [].concat([
                this._text_70,
                this._el_71,
                this._text_75
            ])
        ], null);
        this._text_76 = this.renderer.createText(this._el_67, '\n  ', null);
        this._el_77 = this.renderer.createElement(this._el_67, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_77, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_77, 'no-border-bottom', '');
        this.renderer.setElementAttribute(this._el_77, 'no-border-top', '');
        this._appEl_77 = new import2.AppElement(77, 67, this, this._el_77);
        var compView_77 = import31.viewFactory_Toolbar0(this.viewUtils, this.injector(77), this._appEl_77);
        this._Toolbar_77_4 = new import10.Toolbar(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_77), this.renderer);
        this._appEl_77.initComponent(this._Toolbar_77_4, [], compView_77);
        this._text_78 = this.renderer.createText(null, '\n    ', null);
        this._el_79 = this.renderer.createElement(null, 'ion-segment', null);
        this.renderer.setElementAttribute(this._el_79, 'color', 'danger');
        this._NgModel_79_3 = new import13.NgModel(null, null, null, null);
        this._NgControl_79_4 = this._NgModel_79_3;
        this._NgControlStatus_79_5 = new import14.NgControlStatus(this._NgControl_79_4);
        this._Segment_79_6 = new import15.Segment(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_79), this.renderer, this._NgControl_79_4);
        this._query_SegmentButton_79_0 = new import16.QueryList();
        this._text_80 = this.renderer.createText(this._el_79, '\n      ', null);
        this._el_81 = this.renderer.createElement(this._el_79, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_81, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_81, 'role', 'button');
        this.renderer.setElementAttribute(this._el_81, 'tappable', '');
        this.renderer.setElementAttribute(this._el_81, 'value', 'sunny');
        this._appEl_81 = new import2.AppElement(81, 79, this, this._el_81);
        var compView_81 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(81), this._appEl_81);
        this._SegmentButton_81_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_81));
        this._appEl_81.initComponent(this._SegmentButton_81_4, [], compView_81);
        this._text_82 = this.renderer.createText(null, '\n        Sunny\n      ', null);
        compView_81.create(this._SegmentButton_81_4, [[].concat([this._text_82])], null);
        this._text_83 = this.renderer.createText(this._el_79, '\n      ', null);
        this._el_84 = this.renderer.createElement(this._el_79, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_84, 'checked', '');
        this.renderer.setElementAttribute(this._el_84, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_84, 'role', 'button');
        this.renderer.setElementAttribute(this._el_84, 'tappable', '');
        this.renderer.setElementAttribute(this._el_84, 'value', 'rainy');
        this._appEl_84 = new import2.AppElement(84, 79, this, this._el_84);
        var compView_84 = import32.viewFactory_SegmentButton0(this.viewUtils, this.injector(84), this._appEl_84);
        this._SegmentButton_84_4 = new import15.SegmentButton(this.renderer, new import25.ElementRef(this._el_84));
        this._appEl_84.initComponent(this._SegmentButton_84_4, [], compView_84);
        this._text_85 = this.renderer.createText(null, '\n        Rainy\n      ', null);
        compView_84.create(this._SegmentButton_84_4, [[].concat([this._text_85])], null);
        this._text_86 = this.renderer.createText(this._el_79, '\n    ', null);
        this._text_87 = this.renderer.createText(null, '\n  ', null);
        compView_77.create(this._Toolbar_77_4, [
            [],
            [],
            [],
            [].concat([
                this._text_78,
                this._el_79,
                this._text_87
            ])
        ], null);
        this._text_88 = this.renderer.createText(this._el_67, '\n', null);
        this._text_89 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_10, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_10_3.update.subscribe(this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_18, 'click', this.eventHandler(this._handle_click_18_0.bind(this)));
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_41, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_41_0.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_41_3.update.subscribe(this.eventHandler(this._handle_ngModelChange_41_0.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_43, 'click', this.eventHandler(this._handle_click_43_0.bind(this)));
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_48, 'click', this.eventHandler(this._handle_click_48_0.bind(this)));
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_53, 'click', this.eventHandler(this._handle_click_53_0.bind(this)));
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_79, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_79_0.bind(this)));
        this._expr_52 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_79_3.update.subscribe(this.eventHandler(this._handle_ngModelChange_79_0.bind(this)));
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_81, 'click', this.eventHandler(this._handle_click_81_0.bind(this)));
        this._expr_61 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_84, 'click', this.eventHandler(this._handle_click_84_0.bind(this)));
        this._expr_63 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._anchor_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._text_87,
            this._text_88,
            this._text_89
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10
        ], [
            subscription_0,
            subscription_1,
            subscription_2
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import15.SegmentButton) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._SegmentButton_12_4;
        }
        if (((token === import15.SegmentButton) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._SegmentButton_15_4;
        }
        if (((token === import15.SegmentButton) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._SegmentButton_18_4;
        }
        if (((token === import13.NgModel) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgModel_10_3;
        }
        if (((token === import42.NgControl) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgControl_10_4;
        }
        if (((token === import14.NgControlStatus) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgControlStatus_10_5;
        }
        if (((token === import15.Segment) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Segment_10_6;
        }
        if (((token === import10.Toolbar) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Toolbar_8_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Header_0_3;
        }
        if (((token === import19.Item) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Item_28_4;
        }
        if (((token === import20.ListHeader) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._ListHeader_28_5;
        }
        if (((token === import40.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import21.NgFor) && (31 === requestNodeIndex))) {
            return this._NgFor_31_6;
        }
        if (((token === import18.List) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._List_26_3;
        }
        if (((token === import22.CardHeader) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._CardHeader_36_3;
        }
        if (((token === import23.Icon) && (45 === requestNodeIndex))) {
            return this._Icon_45_3;
        }
        if (((token === import15.SegmentButton) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._SegmentButton_43_4;
        }
        if (((token === import23.Icon) && (50 === requestNodeIndex))) {
            return this._Icon_50_3;
        }
        if (((token === import15.SegmentButton) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._SegmentButton_48_4;
        }
        if (((token === import23.Icon) && (55 === requestNodeIndex))) {
            return this._Icon_55_3;
        }
        if (((token === import15.SegmentButton) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._SegmentButton_53_4;
        }
        if (((token === import13.NgModel) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._NgModel_41_3;
        }
        if (((token === import42.NgControl) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._NgControl_41_4;
        }
        if (((token === import14.NgControlStatus) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._NgControlStatus_41_5;
        }
        if (((token === import15.Segment) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Segment_41_6;
        }
        if (((token === import40.TemplateRef) && (61 === requestNodeIndex))) {
            return this._TemplateRef_61_5;
        }
        if (((token === import21.NgFor) && (61 === requestNodeIndex))) {
            return this._NgFor_61_6;
        }
        if (((token === import18.List) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._List_59_3;
        }
        if (((token === import22.CardContent) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._CardContent_39_3;
        }
        if (((token === import22.Card) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Card_34_3;
        }
        if (((token === import17.Content) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Content_24_4;
        }
        if (((token === import23.Icon) && (73 === requestNodeIndex))) {
            return this._Icon_73_3;
        }
        if (((token === import12.ToolbarTitle) && ((71 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._ToolbarTitle_71_4;
        }
        if (((token === import10.Toolbar) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Toolbar_69_4;
        }
        if (((token === import15.SegmentButton) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
            return this._SegmentButton_81_4;
        }
        if (((token === import15.SegmentButton) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 85)))) {
            return this._SegmentButton_84_4;
        }
        if (((token === import13.NgModel) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._NgModel_79_3;
        }
        if (((token === import42.NgControl) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._NgControl_79_4;
        }
        if (((token === import14.NgControlStatus) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._NgControlStatus_79_5;
        }
        if (((token === import15.Segment) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Segment_79_6;
        }
        if (((token === import10.Toolbar) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._Toolbar_77_4;
        }
        if (((token === import10.Footer) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._Footer_67_3;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_4 = this.context.appType;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgModel_10_3.model = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgModel_10_3.ngOnChanges(changes);
        }
        var currVal_12 = 'Paid';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._SegmentButton_12_4.value = currVal_12;
            this._expr_12 = currVal_12;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_12_4.ngOnInit();
        }
        var currVal_14 = 'Free';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._SegmentButton_15_4.value = currVal_14;
            this._expr_14 = currVal_14;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_15_4.ngOnInit();
        }
        var currVal_16 = 'Top';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._SegmentButton_18_4.value = currVal_16;
            this._expr_16 = currVal_16;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_18_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_24_4.ngOnInit();
        }
        changes = null;
        var currVal_19 = this.context.getItems(this.context.appType);
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._NgFor_31_6.ngForOf = currVal_19;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_19, currVal_19);
            this._expr_19 = currVal_19;
        }
        if ((changes !== null)) {
            this._NgFor_31_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_31_6.ngDoCheck();
        }
        changes = null;
        var currVal_22 = this.context.safari;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._NgModel_41_3.model = currVal_22;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_22, currVal_22);
            this._expr_22 = currVal_22;
        }
        if ((changes !== null)) {
            this._NgModel_41_3.ngOnChanges(changes);
        }
        var currVal_29 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._Segment_41_6.color = currVal_29;
            this._expr_29 = currVal_29;
        }
        var currVal_31 = 'Bookmarks';
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this._SegmentButton_43_4.value = currVal_31;
            this._expr_31 = currVal_31;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_43_4.ngOnInit();
        }
        var currVal_32 = 'book';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._Icon_45_3.name = currVal_32;
            this._expr_32 = currVal_32;
        }
        var currVal_35 = 'Reading List';
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._SegmentButton_48_4.value = currVal_35;
            this._expr_35 = currVal_35;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_48_4.ngOnInit();
        }
        var currVal_36 = 'ios-glasses-outline';
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this._Icon_50_3.ios = currVal_36;
            this._expr_36 = currVal_36;
        }
        var currVal_37 = 'md-glasses';
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this._Icon_50_3.md = currVal_37;
            this._expr_37 = currVal_37;
        }
        var currVal_40 = 'Shared Links';
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this._SegmentButton_53_4.value = currVal_40;
            this._expr_40 = currVal_40;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_53_4.ngOnInit();
        }
        var currVal_41 = 'ios-at-outline';
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this._Icon_55_3.ios = currVal_41;
            this._expr_41 = currVal_41;
        }
        var currVal_42 = 'md-at';
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this._Icon_55_3.md = currVal_42;
            this._expr_42 = currVal_42;
        }
        changes = null;
        var currVal_44 = this.context.getSafariItems(this.context.safari);
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this._NgFor_61_6.ngForOf = currVal_44;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_44, currVal_44);
            this._expr_44 = currVal_44;
        }
        if ((changes !== null)) {
            this._NgFor_61_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_61_6.ngDoCheck();
        }
        var currVal_47 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this._Icon_73_3.color = currVal_47;
            this._expr_47 = currVal_47;
        }
        var currVal_48 = this.context.weather;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this._Icon_73_3.name = currVal_48;
            this._expr_48 = currVal_48;
        }
        changes = null;
        var currVal_52 = this.context.weather;
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this._NgModel_79_3.model = currVal_52;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_52, currVal_52);
            this._expr_52 = currVal_52;
        }
        if ((changes !== null)) {
            this._NgModel_79_3.ngOnChanges(changes);
        }
        var currVal_59 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this._Segment_79_6.color = currVal_59;
            this._expr_59 = currVal_59;
        }
        var currVal_61 = 'sunny';
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this._SegmentButton_81_4.value = currVal_61;
            this._expr_61 = currVal_61;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_81_4.ngOnInit();
        }
        var currVal_63 = 'rainy';
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this._SegmentButton_84_4.value = currVal_63;
            this._expr_63 = currVal_63;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SegmentButton_84_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_SegmentButton_10_0.dirty) {
                this._query_SegmentButton_10_0.reset([
                    this._SegmentButton_12_4,
                    this._SegmentButton_15_4,
                    this._SegmentButton_18_4
                ]);
                this._Segment_10_6._buttons = this._query_SegmentButton_10_0;
                this._query_SegmentButton_10_0.notifyOnChanges();
            }
            if (this._query_Button_28_1.dirty) {
                this._query_Button_28_1.reset([]);
                this._Item_28_4._buttons = this._query_Button_28_1;
                this._query_Button_28_1.notifyOnChanges();
            }
            if (this._query_Icon_28_2.dirty) {
                this._query_Icon_28_2.reset([]);
                this._Item_28_4._icons = this._query_Icon_28_2;
                this._query_Icon_28_2.notifyOnChanges();
            }
            if (this._query_SegmentButton_41_0.dirty) {
                this._query_SegmentButton_41_0.reset([
                    this._SegmentButton_43_4,
                    this._SegmentButton_48_4,
                    this._SegmentButton_53_4
                ]);
                this._Segment_41_6._buttons = this._query_SegmentButton_41_0;
                this._query_SegmentButton_41_0.notifyOnChanges();
            }
            if (this._query_SegmentButton_79_0.dirty) {
                this._query_SegmentButton_79_0.reset([
                    this._SegmentButton_81_4,
                    this._SegmentButton_84_4
                ]);
                this._Segment_79_6._buttons = this._query_SegmentButton_79_0;
                this._query_SegmentButton_79_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_28_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Toolbar_8_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_8, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._NgControlStatus_10_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_10, 'ng-untouched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_10_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_10, 'ng-touched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_10_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_10, 'ng-pristine', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_10_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_10, 'ng-dirty', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_10_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_10, 'ng-valid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_10_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_10, 'ng-invalid', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_17 = this._Content_24_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_24, 'statusbar-padding', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = import4.interpolate(1, '', this.context.appType, '');
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_29, currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_20 = import4.interpolate(1, '\n      ', this.context.safari, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_37, currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_23 = this._NgControlStatus_41_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_41, 'ng-untouched', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this._NgControlStatus_41_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_41, 'ng-touched', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_41_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_41, 'ng-pristine', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_41_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_41, 'ng-dirty', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_41_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_41, 'ng-valid', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_41_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_41, 'ng-invalid', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_33 = this._Icon_45_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_45, 'hide', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_38 = this._Icon_50_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_50, 'hide', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_43 = this._Icon_55_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_55, 'hide', currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_45 = this._Toolbar_69_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_69, 'statusbar-padding', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_46 = import4.interpolate(1, '\n      Weather: ', ((this.context.weather == 'sunny') ? '96' : '77'), '°\n      ');
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setText(this._text_72, currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_49 = this._Icon_73_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_73, 'hide', currVal_49);
            this._expr_49 = currVal_49;
        }
        var currVal_50 = this._Toolbar_77_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementClass(this._el_77, 'statusbar-padding', currVal_50);
            this._expr_50 = currVal_50;
        }
        var currVal_53 = this._NgControlStatus_79_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementClass(this._el_79, 'ng-untouched', currVal_53);
            this._expr_53 = currVal_53;
        }
        var currVal_54 = this._NgControlStatus_79_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementClass(this._el_79, 'ng-touched', currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_55 = this._NgControlStatus_79_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementClass(this._el_79, 'ng-pristine', currVal_55);
            this._expr_55 = currVal_55;
        }
        var currVal_56 = this._NgControlStatus_79_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_79, 'ng-dirty', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_57 = this._NgControlStatus_79_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setElementClass(this._el_79, 'ng-valid', currVal_57);
            this._expr_57 = currVal_57;
        }
        var currVal_58 = this._NgControlStatus_79_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setElementClass(this._el_79, 'ng-invalid', currVal_58);
            this._expr_58 = currVal_58;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Segment_10_6.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Segment_41_6.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Segment_79_6.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._NgModel_10_3.ngOnDestroy();
        this._Icon_45_3.ngOnDestroy();
        this._Icon_50_3.ngOnDestroy();
        this._Icon_55_3.ngOnDestroy();
        this._NgModel_41_3.ngOnDestroy();
        this._Content_24_4.ngOnDestroy();
        this._Icon_73_3.ngOnDestroy();
        this._NgModel_79_3.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.appType = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_12_0 = function ($event) {
        this._appEl_12.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_12_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_15_0 = function ($event) {
        this._appEl_15.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_15_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_18_0 = function ($event) {
        this._appEl_18.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_18_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_41_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.safari = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_43_0 = function ($event) {
        this._appEl_43.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_43_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_48_0 = function ($event) {
        this._appEl_48.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_48_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_53_0 = function ($event) {
        this._appEl_53.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_53_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_79_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.weather = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_81_0 = function ($event) {
        this._appEl_81.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_81_4.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_84_0 = function ($event) {
        this._appEl_84.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_84_4.onClick() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/segment/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import38.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import19.Item(this.parent.parentInjector.get(import39.Form), this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import19.ItemContent();
        this._query_Label_0_0 = new import16.QueryList();
        this._query_Button_0_1 = new import16.QueryList();
        this._query_Icon_0_2 = new import16.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '', null);
        this._el_2 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_2, 'item-right', '');
        this.renderer.setElementAttribute(this._el_2, 'outline', '');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import44.viewFactory_Button0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Button_2_4 = new import43.Button(null, '', this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Button_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '', null);
        compView_2.create(this._Button_2_4, [[].concat([this._text_3])], null);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [],
            [],
            [].concat([
                this._text_1,
                this._text_4
            ]),
            [],
            [].concat([this._el_2])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import43.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Button_2_4;
        }
        if (((token === import19.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._Item_0_4;
        }
        if (((token === import19.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        changed = false;
        var currVal_1 = '';
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Button_2_4.outline = currVal_1;
            changed = true;
            this._expr_1 = currVal_1;
        }
        if (changed) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([this._Button_2_4]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_2_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, '\n      ', this.context.$implicit.name, '\n      ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.price, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_3, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ApiDemoPage1;
}(import1.AppView));
function viewFactory_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage2 = (function (_super) {
    __extends(_View_ApiDemoPage2, _super);
    function _View_ApiDemoPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage2, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import38.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import19.Item(this.parent.parentInjector.get(import39.Form), this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import19.ItemContent();
        this._query_Label_0_0 = new import16.QueryList();
        this._query_Button_0_1 = new import16.QueryList();
        this._query_Icon_0_2 = new import16.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n          ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_2, 'item-left', '');
        this.renderer.setElementAttribute(this._el_2, 'role', 'img');
        this._Icon_2_3 = new import23.Icon(this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(null, '', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [].concat([this._el_2]),
            [],
            [].concat([
                this._text_1,
                this._text_3
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ApiDemoPage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.Icon) && (2 === requestNodeIndex))) {
            return this._Icon_2_3;
        }
        if (((token === import19.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Item_0_4;
        }
        if (((token === import19.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Icon_2_3.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.$implicit.icon;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Icon_2_3.name = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([this._Icon_2_3]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_2 = this._Icon_2_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'hide', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '\n          ', this.context.$implicit.name, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoPage2.prototype.destroyInternal = function () {
        this._Icon_2_3.ngOnDestroy();
    };
    return _View_ApiDemoPage2;
}(import1.AppView));
function viewFactory_ApiDemoPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage2(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import46.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import45.Nav(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import47.NavControllerBase, null), this.parentInjector.get(import28.App), this.parentInjector.get(import24.Config), this.parentInjector.get(import34.Keyboard), new import25.ElementRef(this._el_0), this.parentInjector.get(import35.NgZone), this.renderer, this.parentInjector.get(import48.ComponentFactoryResolver), this.parentInjector.get(import37.GestureController), this.parentInjector.get(import49.TransitionController), this.parentInjector.get(import50.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import45.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/segment/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
