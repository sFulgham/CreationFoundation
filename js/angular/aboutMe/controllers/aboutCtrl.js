define(function(require, exports){
   'use strict';

    var self = this;

    self.init = function(app){
        var innerSelf = this;

        innerSelf.aboutCtrl = function($scope, $rootScope){
            var ac = this;
            ac.scope = $scope;
            ac.model = {
                header: 'About Me',
                articleHeader: 'A little bit about me',
                paragraphItems: [
                    {
                        id: 1,
                        blob: 'In my 15+ years in the field, I have been able to learn both front end and back end programming. ' +
                        'Although I am an artist at heart, my creativeness has helped me innovate unique and' +
                        ' valuable solutions. ' +
                        'I have created facial recognition software and worked on large SaaS solutions. ' +
                        'My creative exploration has given me the knowledge, experience and ability to be successful. ' +
                        'I believe that my assets are good work ethics, the ability to be a team player and most of all,' +
                        ' that I am committed and goal oriented.'
                    },
                    {
                        id: 2,
                        blob: 'I have been an artist my whole life. ' +
                        'In highschool my passion for art led to art related software such as Photoshop and Illustrator. ' +
                        'Unfortunately, I had no idea how to use a computer. ' +
                        'So when I graduated I decided that my field of study in college would be computer related. ' +
                        'In 1998 I enrolled at DeVry Institute of Technology. ' +
                        'I was hoping to learn about computer related technology and I did. ' +
                        'Just not the applications that I was interested in at the time. ' +
                        'After completing my core courses, I decided it was time to move on. ' +
                        'I wanted to learn how to use a computer for art and design purposes. ' +
                        'So I transferred to the Art Institute of Atlanta in 2000.'
                    },
                    {
                        id: 3,
                        blob: 'At the Arts Institute I learned how to use Photoshop, Illustrator, 3d Studio' +
                        ' Max and Maya. ' +
                        'The only thing that was missing was the ability to present my work to others without carrying a' +
                        ' physical Portfolio. Because of that, I decided to minor in Web Design. ' +
                        'As time lapsed, I began to realize how fascinating programming languages are. ' +
                        'At that point, I knew that my career would be based around art and web technology. ' +
                        'Over the next three years I learned to build web pages, create flash sites and incorporate my 3d models and art into Macromedia Director Software and web sites. ' +
                        'However, something was missing and the only way I would be satisfied would be to obtain it.'
                    },
                    {
                        id: 4,
                        blob: 'After leaving the Arts Institute my work was pleasant to look at but it lacked the' +
                        ' ability to manage itself dynamically. ' +
                        'I wanted my solutions to run themselves based off data. ' +
                        'So in 2003 I went on to Southwest Florida College where I took some course work in SQL' +
                        ' Administration and Programming. ' +
                        'There I learned how to deploy SQL Server, manipulate data and feed that data back to my' +
                        ' applications. ' +
                        'I was content but I realized that my studies would never be complete. ' +
                        'Because of that I am always studying and learning new things on my own.'
                    }
                ]
            };
        };

        app.controller('aboutCtrl', ['$scope', '$rootScope', innerSelf.aboutCtrl]);
    };

    return {
        init: self.init
    }
});
