angular.module('blogApp').directive('newPostForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/postNew.html'
  };
})

.directive('postForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/postView.html'
  };
})

.directive('posts', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/posts/views/postsView.html'
  };
});
