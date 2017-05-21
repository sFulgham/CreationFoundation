define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');

    self.portfolio = self.common.bb.Model.extend({
        defaults: {
            header: 'Portfolio',
            imgSrc: './css/images/portfolioImages/',
            imgExt: '.png',
            selectedCategory: 'home',
            categoryItems: [
                {
                    id: 1,
                    category: 'Creation Foundation',
                    subCategory: {
                        category: [
                            {
                                name: 'Art',
                                images: ['cfArt1', 'cfArt2', 'cfArt3', 'cfArt4', 'cfArt5', 'cfArt6', 'cfArt7', 'cfArt8', 'cfArt9', 'cfArt10', 'cfArt11', 'cfArt12', 'cfArt13', 'cfArt14', 'cfArt15', 'cfArt16', 'cfArt17', 'cfArt18', 'cfArt19', 'cfArt20', 'cfArt21', 'cfArt22', 'cfArt23', 'cfArt24', 'cfArt25', 'cfArt26', 'cfArt27', 'cfArt28', 'cfArt29', 'cfArt30', 'cfArt31', 'cfArt32', 'cfArt33', 'cfArt34', 'cfArt35', 'cfArt36', 'cfArt37', 'cfArt38', 'cfArt39', 'cfArt40', 'cfArt41', 'cfArt42', 'cfArt43', 'cfArt44', 'cfArt45', 'cfArt46', 'cfArt47', 'cfArt48']
                            },
                            {
                                name: 'Web',
                                images: ['cfWeb1', 'cfWeb2', 'cfWeb3', 'cfWeb4', 'cfWeb5', 'cfWeb6', 'cfWeb7', 'cfWeb8', 'cfWeb9', 'cfWeb10', 'cfWeb11', 'cfWeb12', 'cfWeb13', 'cfWeb14', 'cfWeb15', 'cfWeb16', 'cfWeb17', 'cfWeb18', 'cfWeb19', 'cfWeb20', 'cfWeb21', 'cfWeb22', 'cfWeb23']
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    category: 'Membersuite',
                    subCategory: {
                        category: [
                            {
                                name: 'Web',
                                images: ['membersuiteWeb1', 'membersuiteWeb2', 'membersuiteWeb3', 'membersuiteWeb4', 'membersuiteWeb5', 'membersuiteWeb6', 'membersuiteWeb7', 'membersuiteWeb8', 'membersuiteWeb9', 'membersuiteWeb10', 'membersuiteWeb11']
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    category: 'Peoplenet',
                    subCategory: {
                        category: [
                            {
                                name: 'Web',
                                images: ['peoplenetWeb1', 'peoplenetWeb2', 'peoplenetWeb3', 'peoplenetWeb4', 'peoplenetWeb5', 'peoplenetWeb6']
                            },
                            {
                                name: 'Software',
                                images: ['peoplenetSoftware1', 'peoplenetSoftware2', 'peoplenetSoftware3', 'peoplenetSoftware4', 'peoplenetSoftware5', 'peoplenetSoftware6', 'peoplenetSoftware7', 'peoplenetSoftware8', 'peoplenetSoftware9']
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    category: 'Mission Communications',
                    subCategory: {
                        category: [
                            {
                                name: 'Web',
                                images: ['missionWeb1', 'missionWeb2']
                            },
                            {
                                name: 'Mobile',
                                images: ['missionMobile1', 'missionMobile2', 'missionMobile3', 'missionMobile4', 'missionMobile5', 'missionMobile6']
                            },
                            {
                                name: 'Highcharts',
                                images: ['missionChart1', 'missionChart2', 'missionChart3', 'missionChart4']
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    category: 'Camille Flawless',
                    subCategory: {
                        category: [
                            {
                                name: 'Art',
                                images: ['camilleArt1']
                            },
                            {
                                name: 'Web',
                                images: ['camilleWeb1', 'camilleWeb2', 'camilleWeb3', 'camilleWeb4', 'camilleWeb5', 'camilleWeb6','camilleWeb7', 'camilleWeb8', 'camilleWeb9', 'camilleWeb10', 'camilleWeb11', 'camilleWeb12']
                            }
                        ]
                    }
                },
                {
                    id: 6,
                    category: 'Response Mail',
                    subCategory: {
                        category: [
                            {
                                name: 'Web',
                                images: ['rmeWeb1', 'rmeWeb2', 'rmeWeb3', 'rmeWeb4', 'rmeWeb5', 'rmeWeb6', 'rmeWeb7', 'rmeWeb8', 'rmeWeb9', 'rmeWeb10', 'rmeWeb11']
                            },
                            {
                                name: 'Art',
                                images: ['rmeArt1', 'rmeArt2', 'rmeArt3', 'rmeArt4', 'rmeArt5', 'rmeArt6', 'rmeArt7', 'rmeArt8']
                            }
                        ]
                    }
                }
            ]
        }
    });

    return {
        init: self.portfolio
    };
});
