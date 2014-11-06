/**
 * @author Bluekiss
 */

'use strict';
var controllers = angular.module('controllers',[]);

controllers.controller('HomeCtrl',['$scope',function($scope){
	$scope.hi="hik";
	
	   var sys = arbor.ParticleSystem(1000, 400,1);
            sys.parameters({gravity:true});
            sys.renderer = Renderer("#viewport") ;
            var data = {
               nodes:{
                 animals:{'color':'red','shape':'dot','label':'Animals'},
                 dog:{'color':'green','shape':'dot','label':'dog'},
                 cat:{'color':'blue','shape':'dot','label':'cat'}
               }, 
               edges:{
                 animals:{ dog:{}, cat:{} }
               }
             };
            sys.graft(data);alert("hi");
            setTimeout(function(){
                        var postLoadData = {
                           nodes:{
                             joe:{'color':'orange','shape':'dot','label':'joe'},
                             fido:{'color':'green','shape':'dot','label':'fido'},
                             fluffy:{'color':'blue','shape':'dot','label':'fluffy'}
                           }, 
                           edges:{
                                dog:{ fido:{} },
                                cat:{ fluffy:{} },
                                joe:{ fluffy:{},fido:{} }
                           }
                         };
                         sys.graft(postLoadData);
                    },10000);
}]);
