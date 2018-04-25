angular.module('D2DAPP')
  //=========================================================================
  //Configuring CitrixApp
  //=========================================================================
  .config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', 'growlProvider', '$httpProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider, growlProvider, $httpProvider, $locationProvider) {

      growlProvider.globalTimeToLive(3000);

      $locationProvider.html5Mode(true);

      /**
       * Routes definition for navigation
       */
      $stateProvider

        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/components/Dashboard/dashboard.view.html',
          controller: 'DashboardController',
          controllerAs: 'DashboardCtrl'
        })

        .state('dashboard.home', {
          url: '/home',
          templateUrl: 'app/components/Dashboard/Home/home.view.html',
          controller: 'HomeController',
          controllerAs: 'HomeCtrl'
        })

        .state('dashboard.about', {
          url: '/about',
          templateUrl: 'app/components/Dashboard/About/about.view.html'
        })

        .state('dashboard.contact', {
          url: '/contact',
          templateUrl: 'app/components/Dashboard/Contact/contact.view.html'
        })

        .state('dashboard.order', {
          url: '/order',
          templateUrl: 'app/components/Dashboard/Order/order.view.html',
          controller: 'OrderController',
          controllerAs: 'OrderCtrl'
        })

        .state('dashboard.review', {
          url: '/review',
          templateUrl: 'app/components/Dashboard/Review/review.view.html',
          controller: 'ReviewController',
          controllerAs: 'ReviewCtrl'
        })

        .state('dashboard.submit', {
          url: '/submit',
          templateUrl: 'app/components/Dashboard/Submit/submit.view.html',
          controller: 'SubmitController',
          controllerAs: 'SubmitCtrl'
        })

        .state('dashboard.confirm', {
          url: '/confirm',
          templateUrl: 'app/components/Dashboard/Confirm/confirm.view.html',
          controller: 'ConfirmController',
          controllerAs: 'ConfirmCtrl'
        })

        .state('admin', {
          url: '/admin',
          templateUrl: 'app/components/Admin/admin.view.html',
          controller: 'AdminController',
          controllerAs: 'AdminCtrl'
        })

        .state('admin.login', {
          url: '/login',
          templateUrl: 'app/components/Admin/Login/login.view.html',
          controller: 'LoginController',
          controllerAs: 'LoginCtrl'
        })
        
        .state('admin.orderlist', {
          url: '/orderlist',
          templateUrl: 'app/components/Admin/OrderList/orderList.view.html',
          controller: 'OrderListController',
          controllerAs: 'OrderListCtrl'
        })
        
        .state('admin.orderDetail', {
          url: '/orderdetail/:item',
          templateUrl: 'app/components/Admin/OrderDetail/orderDetail.view.html',
          controller: 'OrderDetailController',
          controllerAs: 'OrderDetailCtrl'
        });

        $urlRouterProvider.otherwise('/dashboard/home');
    }])
  /**
   * Run function of angularJS
   */
  .run(['$rootScope', '$state','localStorageService',
    function ($rootScope, $state, localStorageService) {
      $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

      });
    }])
