// hamburger menu
$(document).ready (function(){
$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});



var $blogbody = $(".blogbody");
var $gh_body = $(".gh_body");

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
    // console.log(allPosts[index]);
    $blogbody.append(allPosts[index].body);
    $blogbody.append("<hr></hr>");
  });
});

// github call for commits

var response;
$.ajax({
method:"GET",
url:"https://api.github.com/users/maksimgm/repos"
// data:{}
  }).done(function(data){
    response = data;
    var sortedResponses = _.sortBy(response, "pushed_at").reverse();
    // git.url
    sortedResponses.forEach(function(element,index){
      if(index < 8){
        var a = "<a href='"+"https://www.github.com/"+element.full_name+"'  target='_blank' >"+element.name+"</a>";
        console.log(element);
        console.log(a);
        $gh_body.append(a);
        // $gh_body.append(sortedResponses[index].name);
        $gh_body.append("<hr></hr>");
        // $gh_body.append
      }
    
    });
    console.log(response);
  });
});