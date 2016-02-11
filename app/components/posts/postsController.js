(function(){
    var app = angular.module('blogApp',[]);

    app.controller('postsController',  ['$http', function($http){
      var blog = this;

      blog.posts = {};
      $http.get('../../../storage/posts.json').success(function(data){
          blog.posts = data;
      });

      blog.tab = 'blog';

      blog.selectTab = function(setTab){
        blog.tab = setTab;
      };

      blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
      };

      blog.post = {};
      blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.posts.push(this.post);
        blog.tab = 0;
        blog.post ={};
      };

      blog.deletePost = function(id){
          blog.posts.splice(id, 1);
          for(var i = 0; i < blog.posts.length; i++) {
              blog.posts[i].id = i;
          }
      };
    }]);
})();
