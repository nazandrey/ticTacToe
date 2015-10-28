'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
    .controller('GameCtrl', function ($scope, $location, rules, loader, playerGenerator) {
        //Задачи контроллера:
        // 1) Инициализация поля; 
        // 2) Создание игроков; 
        // 3) Начало игры;
        // 4) Управление ходом игры.
        
        loader.show();
        
        // 1) Инициализация поля
        //Получение и применение правил для поля
        $scope.field_rules = rules.getFieldRules();
        
        //Прорисовка поля

        
        // 2) Создание игроков;
        // Получение и применение правил для игроков
        $scope.player_rules = rules.getPlayerRules(); 
        $scope.playerArr = playerGenerator.generate($scope.player_rules);
        console.log("$scope.playerArr: ", $scope.playerArr);
        
        // 3) Начало игры
        // Получение и применение правил хода
        var turn_rules = rules.getTurnRules();
        // Передача хода первому игроку
        $scope.activePlayerIdx = 0;
        
        initGame();
        
        // Убирание экрана загрузки
        loader.hide();
        
        $scope.ctrl_turn = function(row, col){
          //console.log('turns: ', $event);
          console.log('turns: ', row, col);
          paintPlayerObj(row,col,$scope.player_rules);
        }
        
        $scope.getCurrPlayerShapeArr = function(){
          console.log('$scope.playerArr[$scope.activePlayerIdx].shapeArr: ', $scope.playerArr[$scope.activePlayerIdx].shapeArr);
          return $scope.playerArr[$scope.activePlayerIdx].shapeArr;
        }
        
        // 4) Управление ходом игры
        // Ожидание хода текущего игрока
        // Проверка правильности хода
        
        //$scope.$watch("field")
        $scope.$on("playerTurned",function(event){
            // Проверка победы
            if(isVictory()){
                //Завершение игры с победой одного из игроков
                $location.url("end_of_game");
            }
            // Передача хода
        });    

        function isVictory(){
          return false;
        }
        
        function initGame(){
          
        }
    });
