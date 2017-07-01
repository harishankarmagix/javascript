
<!DOCTYPE html>
<html ng-controller="appCtrl" ng-class="">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--        <script>document.write('<base href="' + document.location + '" />');</script>-->
        
        <title ng-bind="title">Online Booking</title>
        <link rel="icon" type="img/ico" href="favicon.ico">

        <link href="//fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        <link rel="stylesheet" type="text/css" href="">
        
    </head>
    <body>
        
        <script>
      </script>
        
        <div ui-view></div>
        
        <div ng-if="false" id="loader-wrapper">
            <div class="loader large"></div>
            <NOSCRIPT style="z-index: 1002;color:#ffffff;text-align: center;display: block;">
            This site requires javascript to function. <br> Please enable it to continue.
            </NOSCRIPT>
        </div>
        
        <script data-main="app/main" src="common/require.js"></script>
        <toasty></toasty>
    </body>
</html>