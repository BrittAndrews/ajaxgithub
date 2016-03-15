import $ from 'jquery';

var gh_url = "https://api.github.com/users/jisaacks/orgs";



$.ajax(gh_url).then(function(data){
	var visible=data.forEach(function({login, avatar_url}){
		$('.wrapper').append(`<div class="containers">
			<img class="avatar" src="${avatar_url}">
			<span>${login}</span>
			</div>`);
	})
})












