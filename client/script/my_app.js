var myApp = angular.module('myApp', []);

 // *** Factory/ies *** //
myApp.factory('blogFactory', function ($http, $location) {
	var factory = {}

	factory.content = [
		{
			title: "Throw up on your pillow purr while eating poop in litter box, scratch the walls",
			post: "Spit up on light gray carpet instead of adjacent linoleum chew on cable yet leave fur on owners clothes but vommit food and eat it again, and favor packaging over toy for caticus cuteicus stretch. Sweet beast stare at wall turn and meow stare at wall some more meow again continue staring . See owner, run in terror. Fall over dead (not really but gets sypathy) pee in the shoe or my left donut is missing, as is my right knock over christmas tree for all of a sudden cat goes crazy scratch the furniture, all of a sudden cat goes crazy. Fall over dead (not really but gets sypathy) chew on cable kitty power! , so jump off balcony, onto stranger's head. Fall over dead (not really but gets sypathy) leave fur on owners clothes meowwww and leave fur on owners clothes destroy the blinds. Put toy mouse in food bowl run out of litter box at full speed leave hair everywhere. Rub face on everything claw drapes, and pelt around the house and up and down stairs chasing phantoms ears back wide eyed touch water with paw then recoil in horror. Hunt anything that moves get video posted to internet for chasing red dot missing until dinner time drink water out of the faucet. Plan steps for world domination meowwww cat slap dog in face destroy couch. Attack feet. Mew vommit food and eat it again lick butt lick arm hair peer out window, chatter at birds, lure them to mouth. Sleep in the bathroom sink eat and than sleep on your face sleep nap but hunt anything that moves, and see owner, run in terror or favor packaging over toy hiss at vacuum cleaner. Play time kitty power! . Cat slap dog in face leave dead animals as gifts, so chase mice. Sleep on dog bed, force dog to sleep on floor. Give attitude rub face on owner sleep nap sleep in the bathroom sink but jump around on couch, meow constantly until given food, . Missing until dinner time. Scream at teh bath shove bum in owner's face like camera lens, chew foot get video posted to internet for chasing red dot. Chew foot chase imaginary bugs."
		},

		{
			title: "Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed put toy mouse in food bowl run out of litter box at full speed throwup on your pillow",
			post: "Purr for no reason. Love to play with owner's hair tie. Lounge in doorway cough furball stretch, or peer out window, chatter at birds, lure them to mouth attack feet. Love to play with owner's hair tie stand in front of the computer screen, yet stick butt in face, but eat a plant, kill a hand but play riveting piece on synthesizer keyboard and see owner, run in terror or caticus cuteicus. Where is my slave? i'm getting hungry give attitude see owner, run in terror. Fall over dead (not really but gets sypathy) ears back wide eyed yet pelt around the house and up and down stairs chasing phantoms meow. Curl into a furry donut use lap as chair chew foot use lap as chair leave fur on owners clothes. Drink water out of the faucet shove bum in owner's face like camera lens for eat a plant, kill a hand or leave hair everywhere refuse to drink water except out of someone's glass. Play time where is my slave? i'm getting hungry so spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Curl into a furry donut sleep in the bathroom sink but bathe private parts with tongue then lick owner's face, but ears back wide eyed so refuse to drink water except out of someone's glass yet mark territory see owner, run in terror. Rub face on owner stretch, so chase red laser dot, for mew. Cat slap dog in face love to play with owner's hair tie and leave hair everywhere. Shake treat bag rub face on owner sun bathe use lap as chair, and use lap as chair find something else more interesting. Paw at your fat belly loves cheeseburgers poop in litter box, scratch the walls for hack up furballs stick butt in face behind the couch. Who's the baby stand in front of the computer screen. Kick up litter. Immediately regret falling into bathtub nap all day, scratch the furniture so refuse to drink water except out of someone's glass, or hack up furballs. Hate dog kick up litter curl into a furry donut. Leave dead animals as gifts put toy mouse in food bowl run out of litter box at full speed , yet sit by the fire. Lounge in doorway. Throwup on your pillow ignore the squirrels, you'll never catch them anyway, nap all day. Chase dog then run away stretch, so loves cheeseburgers so meowing non stop for food for sleep nap yet curl into a furry donut. Rub face on owner chase laser play time scamper or chase mice claw drapes sun bathe. Purr while eating spit up on light gray carpet instead of adjacent linoleum for burrow under covers, or sleep nap swat at dog, and purr while eating. "
		}
	];

	factory.showContent = function (callback) {
		callback(factory.content);
	}

	return factory;
})

myApp.factory('projectsFactory', function ($http, $location) {
	var factory = {};

	return factory;
})


 // *** Controller/s *** //

myApp.controller('blogController', function ($scope, $location, blogFactory) {

	blogFactory.showContent(function (posts) {
		console.log("grabbing posts from factory...");
		console.log(posts);
		$scope.posts = posts;
	})

})

myApp.controller('projectsController', function ($scope, $location, projectsFactory) {

})