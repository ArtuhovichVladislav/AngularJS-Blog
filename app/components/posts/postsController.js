(function(){
    var app = angular.module('blogApp',[]);

    app.controller('postsController',  ['$http', function($http){
      var blog = this;

      this.posts = {};
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

      this.newPost = {};
        this.addPost = function(){
            this.newPost.id = blog.posts.length;
            this.posts.push(this.newPost);
            this.newPost = {};
        };

      blog.deletePost = function(id){
          this.posts.splice(id, 1);
          for(var i = 0; i < this.posts.length; i++) {
              this.posts[i].id = i;
          }
      };
    }]);
})();
