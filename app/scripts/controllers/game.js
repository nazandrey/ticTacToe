'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
    .controller('GameCtrl', function ($scope, $location, $document, rules, loader, playerGenerator, checkVictoryFnStorage, shape) {
        //Задачи контроллера:
        // 1) Инициализация поля; 
        // 2) Создание игроков; 
        // 3) Начало игры;
        // 4) Управление ходом игры.
        
        loader.show();
        
        // 1) Инициализация поля -------------------------------------------
        //Получение и применение правил для поля
        $scope.field_rules = rules.getFieldRules();
        
        //Прорисовка поля
        
        
        
        // 2) Создание игроков; ---------------------------------------------
        // Получение и применение правил для игроков
        $scope.player_rules = rules.getPlayerRules(); 
        $scope.player_arr = playerGenerator.generate($scope.player_rules);
        $scope.getCurrPlayerShapeArr = getCurrPlayerShapeArr;
        
        function getCurrPlayerShapeArr(){
          //console.log('$scope.player_arr[$scope.active_player_idx].shapeArr: ', $scope.player_arr[$scope.active_player_idx].shapeArr);
          return $scope.player_arr[$scope.active_player_idx].shapeArr;
        }        
         
        //console.log("$scope.player_arr: ", $scope.player_arr);
        
        // 3) Начало игры ----------------------------------------------------
        // Получение и применение правил хода
        var turn_rules = rules.getTurnRules(),
          field_ctrl;
        // Передача хода первому игроку    
        $scope.$on('fieldready',function(){
          field_ctrl = $('#field').controller('field');
          startNewGame();
          // Убирание экрана загрузки
          loader.hide();
        })
        
        $scope.startNewGame = startNewGame;  
        
        function startNewGame(){
          $scope.show_victory_view = false;
          _initGame();
          field_ctrl.init();
        }
        
        function _initGame(){
          $scope.active_player_idx = 0;
          _updateCurrPlayerMainShape();
        }        
        // 4) Управление ходом игры -------------------------------------------
        // Ожидание хода текущего игрока
        // Проверка правильности хода      
        $scope.turn = function(row,col){
          if($scope.show_victory_view) return;
          
          var curr_player_shape_arr = $scope.getCurrPlayerShapeArr(),
            new_shape = null;
          if(curr_player_shape_arr.length === 1){
            new_shape = curr_player_shape_arr[0];
          } else {
            //Выбор доступных игроку фигур
          }
          var field = field_ctrl.getField();
          field[row][col].shape = new_shape;
          //Смена игрока
          if(!$scope.isVictory(row, col, field[row][col].shape, curr_player_shape_arr.length, field)){
            $scope.changeActivePlayer();
          } else {
            $scope.showVictory();
            console.log('victory!');
          }
        }
        
        $scope.changeActivePlayer = function(){          
          if($scope.player_arr[$scope.active_player_idx + 1]){
            $scope.active_player_idx += 1;
          } else {
            $scope.active_player_idx = 0;
          }
          _updateCurrPlayerMainShape();
        } 
        
        $scope.isVictory = checkVictoryFnStorage.getDefaultFn; 
        
        $scope.showVictory = function(){
          $scope.show_victory_view = true;
        }   
        
        function _updateCurrPlayerMainShape(){
          var curr_player_shape_arr = getCurrPlayerShapeArr();
          if(curr_player_shape_arr.length === 1){
            $scope.curr_player_main_shape = shape.getView(curr_player_shape_arr[0]);
          } else {
          
          }
        }
    });
