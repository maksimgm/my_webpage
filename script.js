// hamburger menu
$(document).ready (function(){
  $('button').click(function() {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
  });

var $blogbody = $(".blogbody");

// tumblr call for blog
$.ajax({
  method: "GET",
  url: "https://api.tumblr.com/v2/blog/eagercoder.tumblr.com/posts/text",
  jsonp:"callback",
  dataType: "jsonp",
  data:{"api_key": "K12MDiQTwWQuiMdrUiFjEwX6Qn1UmRT8f0X3EepEMp5ueJbDB9"},
  }).done(function(data){
    // $blogbody.html("<p>'Hello'</p>");
    var allPosts = data.response.posts;
    // console.log(data.response.posts[0].body);

    allPosts.forEach(function(element, index){
      console.log(allPosts[index]);
      $blogbody.append(allPosts[index].body);
      $blogbody.append("<hr></hr>");
    });
  });
});