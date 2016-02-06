'use strict';
let nodemailer = require('nodemailer');

var contactForm = {
  controller: ['$scope', '$http', '$mdToast', '$animate',
  function($scope, $http, $mdToast, $animate) {
    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };

    $scope.getToastPosition = function (){
      return Object.keys($scope.toastPosition)
        .filter(function (pos) {
          return $scope.toastPosition[pos];
        }).join(' ');
    };

    $scope.sendMail = function sendMail(){
      var data = ({
        contactName: this.contactName,
        contactEmail: this.contactEmail,
        contactMsg: this.contactMsg
      });

      $http.post('/contact-form', data).
      success(
        function(data){
          var mailOpts, smtpTrans;

          smtpTrans = nodemailer.createTransport('SMTP', {
            service: 'Gmail',
            auth: {
              user: "bhutson1@gmail.com",
              pass: "Italy252012"
            }
          });

          mailOpts = {
            from: data.contactName + ' &lt;' + data.contactEmail + '&gt;', //grab form data from the request body object
            to: 'bhutson1@gmail.com',
            subject: 'Contact Form',
            text: data.contactMsg
          };

          smtpTrans.sendMail(mailOpts)

          $mdToast.show(
            $mdToast.simple()
            .content('Thanks for your message ' + data.contactName + ', looking forward to speaking with you.')
            .position($scope.getToastPosition())
            .hideDelay(5000)
          );
        }).
        error(function(data){
          $mdToast.show(
            $mdToast.simple()
            .content('Error, message not sent')
            .position($scope.getToastPosition())
            .hideDelay(5000)
          );
          console.log('toast error!')
        });
    }
  }]
};

module.exports = contactForm;
