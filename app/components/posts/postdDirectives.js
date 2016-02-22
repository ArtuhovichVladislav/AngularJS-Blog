angular.module('blogApp').directive('newPostForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/postNew.html'
  };
})

.directive('postPage', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/postPage.html'
  };
})

.directive('commentNew', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/commentNew.html'
  };
})

.directive('posts', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/postsView.html'
  };
});
