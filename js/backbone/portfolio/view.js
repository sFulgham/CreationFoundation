define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.portfolioTpl = require('text!portfolioTemplates/portfolio.html');
    self.portfolioMenu = require('utils/animatePortfolioMenu');
    self.gallery = require('utils/gallery');
    self.model = {};

    self.portfolioView = self.common.mn.ItemView.extend({
        className: 'container-fluid',
        tagName: 'div',
        template: self.common._.template(self.portfolioTpl),
        render: function() {
            self.model = this.model.toJSON();
            this.$el.append(this.template(self.model));
        },
        initialize: function() {
            self.common._.bindAll(this, 'nextBtnHandler', 'menuNavHandler', 'menuItemHandler', 'menuSubItemHandler', 'prevBtnHandler');
        },
        events: {
            'click #next-btn': 'nextBtnHandler',
            'click #prev-btn': 'prevBtnHandler',
            'click #portfolio-menu-nav': 'menuNavHandler',
            'click .trigger-sub': 'menuItemHandler',
            'click .trigger-sub-menu': 'menuSubItemHandler'
        },
        menuSubItemHandler: function(evt) {
            evt.preventDefault();
            $('#portfolio .select-text').hide();
            var $currentTarget = $(evt.currentTarget);
            var $subMenu = $currentTarget.parents('.item-sub-menu');
            var $selectedList = $currentTarget.parents('.selected');
            var category = $currentTarget.attr('data-category');
            var subCategory = $currentTarget.attr('data-subCategory');
            var categoryImages = [];

            self.common._.each(self.model.categoryItems, function(model) {
                if(model.category === category) {
                    self.common._.each(model.subCategory.category, function(sub) {
                        if(sub.name === subCategory) {
                            categoryImages = sub.images;
                        }
                    });
                }
            });

            var galleryParms = {
                images: categoryImages,
                path: self.model.imgSrc,
                ext: self.model.imgExt
            };

            self.gallery.add(galleryParms);

            var parms = {
                elem: $selectedList,
                subMenu: $subMenu,
                isIntro: false
            };
            self.portfolioMenu.menuSubItem(parms);
        },
        menuItemHandler: function(evt) {
            evt.preventDefault();
            $('.item-menu li.selected').removeClass('selected');
            var $thisElem = $(evt.currentTarget);
            var $selectedList = $thisElem.parent('li');
            $selectedList.addClass('selected');
            var parms = {
                elem: $('ul.item-sub-menu', $selectedList),
                isIntro: true
            };
            self.portfolioMenu.menuItem(parms);
        },
        menuNavHandler: function(evt) {
            var $thisElem = $(evt.currentTarget);
            var parms = {
                elem: $thisElem,
                isIntro: $thisElem.hasClass('open-nav')
            };
            self.portfolioMenu.menuNav(parms);
        },
        nextBtnHandler: function(evt) {
            evt.preventDefault();
            self.gallery.next();
        },
        prevBtnHandler: function(evt) {
            evt.preventDefault();
            self.gallery.prev();
        }
    });

    return {
        init: self.portfolioView
    }
});
