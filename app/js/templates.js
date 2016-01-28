angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html><html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><title>Brittany Hutson</title><meta name=\"viewport\" content=\"width=device-width\"><link href=\"/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\"><link rel=\"stylesheet\" href=\"../css/main.css\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"><link rel=\"stylesheet\" href=\"http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\"></head><body class=\"mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base\"><div ui-view></div><!-- build:js scripts/scripts.js--><!-- <script type=\"text/javascript\" src=\"bower_components/angular/angular.min.js\"></script>--><!-- <script type=\"text/javascript\" src=\"bower_components/angular-animate/angular-animate.min.js\"></script>--><!-- <script type=\"text/javascript\" src=\"bower_components/angular-touch/angular-touch.min.js\"></script>--><script type=\"text/javascript\" src=\"../js/app.js\"></script></body></html>");
$templateCache.put("components/drawer.html","<div><span class=\"mdl-layout-title\">Title</span><nav class=\"mdl-navigation\"><a href=\"\" class=\"mdl-navigation__link\">Link</a><a href=\"\" class=\"mdl-navigation__link\">Link</a><a href=\"\" class=\"mdl-navigation__link\">Link</a><a href=\"\" class=\"mdl-navigation__link\">Link</a></nav></div>");
$templateCache.put("components/header.html","<div class=\"mdl-layout__header-row mdl-layout--large-screen-only\"></div><div class=\"mdl-layout__header-row mdl-layout--large-screen-only\"></div><div class=\"mdl-layout__header-row\"><h3 ui-sref=\"main.entries\">{{site.author}}</h3></div><div class=\"mdl-layout__header-row mdl-layout--large-screen-only\"></div><div class=\"mdl-layout__header-row mdl-layout--large-screen-only\"></div>");
$templateCache.put("pages/contents.html","<div ng-repeat=\"article in articles\" class=\"mdl-grid\"><div class=\"mdl-cell mdl-cell--2-col\"></div><div class=\"mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col\"><div class=\"mdl-card__title\"><h2 class=\"mdl-card__title-text\">{{article.articleId}}</h2></div><div class=\"mdl-card__supporting-text\"><span>{{article.content}}</span></div><div class=\"mdl-card__actions mdl-card--border\"><a ng-click=\"testClick(article.overview.partner)\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">Get Started</a></div><div class=\"mdl-card__menu\"><button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\"><i class=\"ion-android-share-alt\"></i></button></div></div><div class=\"mdl-cell mdl-cell--2-col\"></div></div>");
$templateCache.put("pages/entry.html","<div class=\"mdl-grid\"><div class=\"mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col\"><div class=\"mdl-card__media mdl-color-text--grey-50\"><h3> </h3></div><div class=\"mdl-color-text--grey-700 mdl-card__supporting-text meta\"><div class=\"logo\"></div><div><strong>The Newist</strong></div><div class=\"section-spacer\"></div></div><div class=\"mdl-color-text--grey-700 mdl-card__supporting-text\"><p>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.</p><p>Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo. Incididunt eu enim enim ipsum Lorem commodo tempor duis eu ullamco tempor elit occaecat sit. Culpa eu sit voluptate ullamco ad irure. Anim commodo aliquip cillum ea nostrud commodo id culpa eu irure ut proident. Incididunt cillum excepteur incididunt mollit exercitation fugiat in. Magna irure laborum amet non ullamco aliqua eu. Aliquip adipisicing dolore irure culpa aute enim. Ullamco quis eiusmod ipsum laboris quis qui.</p><p>Cillum ullamco eu cupidatat excepteur Lorem minim sint quis officia irure irure sint fugiat nostrud. Pariatur Lorem irure excepteur Lorem non irure ea fugiat adipisicing esse nisi ullamco proident sint. Consectetur qui quis cillum occaecat ullamco veniam et Lorem cupidatat pariatur. Labore officia ex aliqua et occaecat velit dolor deserunt minim velit mollit irure. Cillum cupidatat enim officia non velit officia labore. Ut esse nisi voluptate et deserunt enim laborum qui magna sint sunt cillum. Id exercitation labore sint ea labore adipisicing deserunt enim commodo consectetur reprehenderit enim. Est anim nostrud quis non fugiat duis cillum. Aliquip enim officia ad commodo id.</p></div></div></div>");
$templateCache.put("pages/main.html","<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\"><header ui-view=\"header\" class=\"mdl-layout__header mdl-layout__header--scroll mdl-layout__header--transparent\"></header><div ui-view=\"drawer\" class=\"mdl-layout__drawer mdl-layout--small-screen-only\"></div><main ui-view=\"content\" class=\"mdl-layout_content\"></main></div>");}]);