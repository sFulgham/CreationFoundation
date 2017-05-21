define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.layoutTpl = require('text!configTemplates/layout.html');
    self.mainMenuModel = require('root/mainMenu/model');
    self.navBarModel = require('root/navBar/model');
    self.aboutMeModel = require('root/aboutMe/model');
    self.portfolioModel = require('root/portfolio/model');
    self.privacyModel = require('root/privacy/model');
    self.contactModel = require('root/contact/model');
    self.navWidgetView = require('root/navWidget/view');
    self.mainMenuView = require('root/mainMenu/view');
    self.navBarView = require('root/navBar/view');
    self.jumboTronView = require('root/jumboTron/view');
    self.aboutMeView = require('root/aboutMe/view');
    self.portfolioView = require('root/portfolio/view');
    self.contactView = require('root/contact/view');
    self.privacyView = require('root/privacy/view');

    self.layoutView = self.common.mn.LayoutView.extend({
        el: '.backbone-app',
        template: self.common._.template(self.layoutTpl),
        navWidgetView: new self.navWidgetView.init(),
        mainMenuView: new self.mainMenuView.init({model: new self.mainMenuModel.init()}),
        navBarView: new self.navBarView.init({model: new self.navBarModel.init()}),
        jumboTronView: new self.jumboTronView.init(),
        aboutMeView: new self.aboutMeView.init({model: new self.aboutMeModel.init()}),
        portfolioView: new self.portfolioView.init({model: new self.portfolioModel.init()}),
        contactView: new self.contactView.init({model: new self.contactModel.init()}),
        privacyView: new self.privacyView.init({model: new self.privacyModel.init()}),
        regions: {
            navWidgetRegion: '#nav-widget',
            mainMenuRegion: '#main-menu',
            navBarRegion: '#content-section #navbar-section',
            jumboTronRegion: '#content-section #jumboTron',
            aboutMeRegion: '#content-section #about',
            portfolioRegion: '#content-section #portfolio',
            contactRegion: '#content-section #contact',
            privacyRegion: '#content-section #privacy-statement'
        },
        initialize: function() {
            this.render();
            this.navWidgetRegion.show(this.navWidgetView);
            this.mainMenuRegion.show(this.mainMenuView);
            this.navBarRegion.show(this.navBarView);
            this.jumboTronRegion.show(this.jumboTronView);
            this.aboutMeRegion.show(this.aboutMeView);
            this.portfolioRegion.show(this.portfolioView);
            this.contactRegion.show(this.contactView);
            this.privacyRegion.show(this.privacyView);
        },
        render: function() {
            this.$el.append(this.template());
        }
    });

    return {
        init: self.layoutView
    }
});
