// Home
$('.menu-link').mouseover(function(){
  $(this).css('z-index', '5');
  $('.menu-links').append('<div class="menu-links--overlay"></div>');
});

$('.menu-link').mouseout(function(){
  $('.menu-link').css('z-index', '3');
  $('.menu-links--overlay').remove();
});

// Films
$(function(){
  for (var i=61; i > 1; i--){
    switch(i%4){
      case 0 : $('.grid-section--films').children('.column2').append('<img src="img/films/film'+i+'.jpg" class="lazy" id="film'+i+'">'); break;
      case 1 : $('.grid-section--films').children('.column1').append('<img src="img/films/film'+i+'.jpg" class="lazy" id="film'+i+'">'); break;
      case 2 : $('.grid-section--films').children('.column4').append('<img src="img/films/film'+i+'.jpg" class="lazy" id="film'+i+'">'); break;
      case 3 : $('.grid-section--films').children('.column3').append('<img src="img/films/film'+i+'.jpg" class="lazy" id="film'+i+'">'); break;
    }
  }
  $('.grid-section--films').children('.column3').append('<img src="img/films/film1.jpg" class="lazy" id="film1">');
})

var film_details = {
  61: {title: "A Night to Remember (1957)" , summary: "Directed by Hammer horror director Baker, this is another version of the tale of the doomed maiden voyage of the Titanic, told in a semi-documentary style through the eyes of the ship's second officer, Herbert Lightoller, whose duties provided him with a unique perspective of the everyday goings-on aboard the huge ocean liner. An excellent cast (selected for their resemblances to photos of the real passengers) conveys the courage, greed, fear, hope and despair of the real-life passengers. Based on the novel by Walter Lord."}, 
  60: {title: "Another Time, Another Place (1958)", summary: "Lana Turner is a female American journalist who has an affair with BBC war correspondent, Sean Connery, during WWII. When Connery is killed in action, Turner returns to his hometown to console his wife."},
  59: {title: "Tarzan's Greatest Adventure (1959)", summary: "Four British villains raid a settlement to obtain explosives for use in a diamond mine. In doing so they nearly destroy the settlement, so and Tarzan pursues them to their mine."},
  58: {title: "Darby O'Gill and the Little People (1959)", summary: "In the enchanted Emerald Isle, Darby O'Gill spins tall tales of leprechauns and banshees. Unfortunately, when he actually captures the leprechaun king and discovers their hidden gold, no one will believe him!"},
  57: {title: "Hard Drivers (1959)", summary: "An ex-con tries to live straight as a heavy cargo trucker. With an underhanded boss and dirty rival driver, it won't be easy."},
  56: {title: "On the Fiddle (1961)", summary: "Two con artists join the Royal Air Force as part of a scam, but the ruse backfires when they accidentally become national heroes."},
  55: {title: "The Frightened City (1961)", summary: "A petty enforcer for a London crime syndicate is caught between sides in a violent mob turf war."},
  54: {title: "The Longest Day (1962)", summary: "England in June 1944. Unseasonal storms. Allied troops are massed ready for the invasion of France, some already on the boats. The Normandy beaches will be their destination while paratroopers are dropped inland to take key towns and bridges. On the other side of the Channel the Germans still expect the invasion at Calais, and anyway the weather makes them think nothing is likely to be imminent. Eisenhower decides to go. Hitler sleeps on."},
  53: {title: "Dr. No (1962)", summary: "An agent of the British Secret Service, James Bond (007), is sent out to the West Indies in order to find out why another of his number was killed. His arrival is not welcomed by everyone, but it is not long before he is on the trail of the killer. The trail leads to a secretive scientist, Dr. No, but the discovery has wider implications..."},
  52: {title: "Woman Of Straw (1964)", summary: "Tyrannical but ailing tycoon Charles Richmond becomes very fond of his attractive Italian nurse, Maria. The nurse, in turn, falls in love with Charles' ne'er-do-well nephew Anthony, who plots ways to gain control of his uncle's fortune."},
  51: {title: "Marnie (1964)", summary: "Marnie Edgar is an ice-cold habitual thief. She uses her looks to gain the confidence of her employers, robs them, and changes her identity. Her only loves are her horse and her mother, although she has problems with the latter relationship. Marnie applies for a job at Mark Rutland's Philadelphia publishing company. Mark recognises her since he is a client of her last employer, but instead of turning her in, he decides to watch her."},
  50: {title: "Goldfinger (1964)", summary: "The Bank of England has discovered that someone is stockpiling vast quantities of gold and suspects international bullion dealer Auric Goldfinger of being involved. The Bank requests that British agent James Bond be sent to investigate. Bond soon uncovers an audacious plan to commit \"the crime of the century\" and bring economic chaos to the West."},
  49: {title: "From Russia With Love (1963)", summary: "James Bond, 007, is sent on a mission to Istanbul to try and acquire a Russian cypher machine known as Lektor from a defecting Russian agent. However, the Russians have no knowledge of this as it is a S.P.E.C.T.R.E. ploy to lure James Bond into a trap - a fitting tribute to their now- dead agent Dr. No."},
  48: {title: "The Hill (1965)", summary: "WWII, in a British disciplinary camp located in the Libyan desert. Prisoners are persecuted by Staff Sergeant Williams, who made them climb again and again, under the heavy sun, an artificial hill built right in the middle of the camp. Harris is a more human and compassionate guard, but the chief, S.M. Wilson, refuses to disown his subordinate Williams. One day, five new prisoners arrive. Each of them will deal in a different way with the authority and Williams' ferocity."},
  47: {title: "Thunderball (1965)", summary: "SPECTRE hatches its most audacious plot to date when its agents hijack a British Vulcan bomber armed with two atomic bombs and hold NATO to ransom for the sum of #100,000,000. The British send all their \"00\" agents, including James Bond, to recover the warheads before SPECTRE carries out its threat to detonate the devices on the UK and US mainlands."},
  46: {title: "A Fine Madness (1966)", summary: "Samson Shillitoe, a frustrated poet and a magnet for women, is behind in his alimony payments, and lives with Rhoda, a waitress who stands by him through all his troubles. Samson becomes belligerent when he cannot find the inspiration to finish his big poem so Rhoda tries to get him to see the psychiatrist Dr. West, who claims to be able to cure writer's block. Samson ends up begin pursued by various women while trying to evade the subpoena servers and finish his poem."},
  45: {title: "You Only Live Twice (1967)", summary: "When an American space capsule is swallowed up by what they believe to be a Russian spaceship, World War 3 nearly breaks out. The British Government, however, suspect that other powers are at work as the space craft went down near Japan. S.P.E.C.T.R.E. is the force behind the theft, as James Bond discovers, but its motives are far from clear, and he must first find out where the captured space capsule is held before America and Russia initiate another world war."},
  44: {title: "Shalako (1968)", summary: "A fairly standard Louis Lamour western. Shalako, the hunter and tracker has to save a party of European hunters who are in danger from an Indian uprising."},
  43: {title: "The Molly Maguires (1970)", summary: "Life is rough in the coal mines of 1876 Pennsylvania. A secret group of Irish emigrant miners, known as the Molly Maguires, fights against the cruelty of the mining company with sabotage and murder. A detective, also an Irish emigrant, is hired to infiltrate the group and report on its members. But on which side do his sympathies lie?"},
  42: {title: "The Red Tent (1971)", summary: "The commander of a failed 1928 Arctic airship expedition is remembering the events of the \"Italia\" airship flight, crash and subsequent rescue efforts. The \"ghosts\" of people involved in the events appear in his memories to assist him in determining his guilt in the affair. The reminiscences are mixed with the real action: the flight of the \"Italia\", the air rescue operation from Kings Bay airfield, the expedition of the \"Krassin\" ice-breaker. A sort of human touch is added by the ever beautiful C.C. playing Malmgren's girlfriend"},
  41: {title: "Diamonds Are Forever (1971)", summary: "After traveling the world in his quest to kill Blofeld, Bond returns triumphant, only to discover a case waiting for him: a large amount of diamonds has been stolen from the South African mines and two offbeat assassins are killing everyone in the smuggling ring one-by-one. Bond goes undercover as Peter Franks, diamond smuggler. What he discovers shocks him: the head of the smuggling ring is none other than Ernst Stavros Blofeld! Now, Bond must resist the wiles of a beautiful smuggler and survive the machinations of Mr. Wint and Mr. Kidd, Blofeld's two best assassins so that he can uncover Blofeld's sinister plot."},
  40: {title: "The Anderson Tapes (1971)", summary: "A thief (Duke Anderson) just released from ten years in jail, takes up with his old girlfriend (Ingrid) in her posh apartment. He makes plans to rob the entire building. What he doesn't know is that his every move is recorded on audio and video tape, although he is not the subject of any surveillance."},
  39: {title: "Offence (1973)", summary: "In Sidney Lumet's harrowing portrayal of police brutality, Detective Sergeant Johnson (Sean Connery) has been with the British Police Force for 20 years. In that time, the countless murders, rapes and other serious crimes he has had to investigate has left a terrible mark on him. His anger and aggression that had been suppressed for years finally surfaces when interviewing a suspect, Baxter (Ian Bannen), whom Johnson is convinced is the man that has been carrying out a series of brutal attacks on young girls. Throughout the interview Johnson brutally beats Baxter and during this ordeal he inadvertently reveals that the state of his own mind is probably no worse than that of the offenders who committed the crimes that disgusted Johnson originally."},
  38: {title: "Zardoz (1974)", summary: "In the distant future Earth is divided into two camps, the barely civilized group and the overly civilized one with mental powers. A plague is attacking the second group after which it's members cease to have any interest in life and become nearly catatonic. When Sean Connery one of the barbarians, crosses over, the tenuous balance in their world is threatened."},
  37: {title: "The Terrorists (1975)", summary: "A gang of hijackers led by Ian McShane seize a British plane as it is landing in Scandinavia. Ruthless military police chief Colonel Tahlvik (Sean Connery) is assigned to rescue the plane and it's passengers. But he must also deal with the problem of the British Ambassador, whose residence has been seized by a second group of terrorists."},
  36: {title: "Murder On The Orient Express (1974)", summary: "After solving a case, Hercule Poirot takes the Orient Express home. On board is Ratchett, a millionaire and his secretary Hector MacQueen and butler Beddoes. Also there is a Count and Countess, a Colonel, a bossy American woman, an Italian, a Princess and her nurse and Pierre, the conductor. The train gets stuck in the snow and during the night, Ratchett is murdered, stabbed many times. Poirot and Bianchi (the train's detective and friend) investigate and discover that Ratchett and the rest of the passengers are involved in the \"Daisy Armstrong\" case in which a child was taken for ransom and then horribly killed..."},
  35: {title: "The Wind And The Lion (1975)", summary: "At the beginning of the 20th century an American woman is abducted in Morocco by Berbers. The attempts to free her range from diplomatic pressure to military intervention."},
  34: {title: "The Man Who Would Be King (1975)", summary: "This adaptation of the famous short story by Rudyard Kipling tells the story of Daniel Dravot and Peachy Carnahan, two ex-soldiers in India when it was under British rule. They decide that the country is too small for them, so they head off to Kafiristan in order to become Kings in their own right. Kipling is seen as a character that was there at the beginning, and at the end of this glorious tale."},
  33: {title: "The Next Man (1976)", summary: "Khalil (Sean Connery) is an Arab diplomat who wants to not only make peace with Israel, but admit the Jewish state as a member of OPEC. This instantly makes him a target for a series of ingeniously conceived assassination attempts, most of which he foils with the aid of his friend Hamid (Albert Paulsen) and his girlfriend Nicole (Cornelia Sharpe). But can he trust even them?"},
  32: {title: "Robin And Marian (1976)", summary: "Robin Hood is an old man when he returns with his best friend Little John to England after the Crusades. Maid Marian has entered a nunnery, King Richard is a raving lunatic, his Brother John a moron, and the age of great adventure has seemed to have passed Robin by. But when The Sheriff of Nottingham once again threatens Sherwood, Robin gathers his faithful men, and band of peasants to fight oppression."},
  31: {title: "A Bridge Too Far (1977)", summary: "This WWII film follows the perspectives of American, Polish and British soldiers attempting to capture key bridges behind German lines in a complicated parachute and armoured assault."},
  30: {title: "Cuba (1979)", summary: "End fifties a British hireling is send to Cuba to train the Basistas. They must be trained to fight Castro's army. In Cuba he encounters an old love, who is married in the mean time. While Castro's army wins more and more their love revives..."},
  29: {title: "Meteor (1979)", summary: "After a collision with a comet, a nearly 8km wide piece of the asteroid \"Orpheus\" is heading towards Earth. If it will hit it will cause a incredible catastrophe which will probably extinguish mankind. To stop the meteor NASA wants to use the illegal nuclear weapon satellite \"Hercules\" but discovers soon that it doesn't have enough fire power. Their only chance to save the world is to join forces with the USSR who have also launched such an illegal satellite. But will both governments agree?"},
  28: {title: "The Great Train Robbery (1979)", summary: "Sutherland and Connery wish to rob a moving train's safe in Victorian England. They need wax impressions of keys, coffins, dead cats, and a great deal of planning in order to pull it off."},
  27: {title: "Time Bandits (1981)", summary: "Kevin, an imaginative child, goes on a time-travelling adventure with a bunch of treasure-hunting dwarves, who have \"borrowed\" a map to the Universe's time holes from The Supreme Being."},
  26: {title: "Outland (1981)", summary: "A marshal in outer space assigned to a remote mining colony refuses to look the other way when miners begin dying from a deadly narcotic designed to increase their productivity in this film patterned on _High Noon_. Separated from his family, the marshal finds few allies in the corporate-controlled colony when assassins are sent to take care of him."},
  25: {title: "Wrong Is Right (1982)", summary: "A satire of American news reporting, Covert Agencies, and political system. The theft of two suitcase sized nuclear weapons, and their sale to a terrorist group, leads TV Newsman Patrick Hale on an international chase to track them down, and uncover the twisting maze of apparent involvement of US Government agencies."},
  24: {title: "Five Days One Summer (1982)", summary: "The obsessive love affair between an older Scottish doctor and a younger woman takes a strange turn when they travel together to the Swiss Alps on a short holiday. Based in part on the novel \"Maiden, Maiden\" by Kay Boyle."},
  23: {title: "Never Say Never Again (1983)", summary: "SPECTRE agents under the command of Ernst Blofeld infiltrate a US air force base situated in the UK and steal two Tomahawk cruise missiles. When NATO is held to ransom, the British reactive their \"00\" agents and send James Bond to recapture the warheads and kill Blofeld."},
  22: {title: "Sword of the Valiant (1984)", summary: "Gawain was a squire in King Arthur's court when the Green Knight burst in and offered to play a game with a brave knight. No knights stand to defend their king's honor. Except for the valiant Gawain. After being quickly knighted Gawain plays the game, but learns that it's all a trick, and he has lost. But the Green Knight shows mercy, letting Gawain grow a year older before having to face the consequences. Gawain journeys across the land, learning about life, saving damsels, and solving the Green Knight's riddle."},
  21: {title: "The Name Of The Rose (1986)", summary: "After a mysterious death in a Benedictine Abbey, 1327, the monks are convinced that the apocalypse is coming. With the Abbey to play host to a council on the Franciscan's Order's belief that the Church should rid itself of wealth, William of Baskerville, a respected Franciscan monk, is asked to assist in determining the cause of the untimely death. Alas, more deaths occur as the investigation draws closer to uncovering the secret the Abbey wants hidden, and there is finally no stopping the Holy Inquisition from taking an active hand in the process. William and his young novice must race against time to prove the innocence of the unjustly accused, and avoid the wrath of Holy Inquisitor Bernardo Gui."},
  20: {title: "Highlander (1986)", summary: "Born in the Highlands of Scotland in 1518, Connor Macleod is immortal. When he is wounded in battle but does not die, he is banished from his village. He meets another like himself, Ramirez, who teaches him swordsmanship--the only way to kill another immortal is to take his head--and the ways of the immortals. Modern-day New York is the location of \"The Gathering,\" where Connor and the few remaining immortals must battle to the last for \"The Prize.\""},
  19: {title: "The Untouchables (1987)", summary: "Federal agent Elliot Ness assembles a personal team of mob fighters to bring Chicago crime boss Al Capone to justice using unconventional means during the mob wars of the 1920s. This fictionalized account of the arrest of Al Capone is heavy on style and gunfire. The end shootout combines a baby carriage and stairs with a nod to Eisenstein's _The Battleship Potemkin_."},
  18: {title: "The Presidio (1988)", summary: "Jay Austin is now a civilian police detective. Colonel Caldwell was his commanding officer years before when he left the military police over a disagreement over the handling of a drunk driver. Now a series of murders that cross jurisdictions force them to work together again. That Austin is now dating Caldwell's daughter is not helping the relationship at all."},
  17: {title: "Indiana Jones And The Last Crusade (1989)", summary: "Renowned archeologist and expert in the occult, Dr. Indiana Jones, returns for the 3rd and final Indy film. Teaming up with his father, Indiana sets out to try and find the Holy Grail. Once again, the Nazis are after the same prize, and try to foil Indianas plans."},
  16: {title: "Family Business (1989)", summary: "Jessie is an ageing career criminal who has been in more jails, fights, schemes, and lineups than just about anyone else. His son Vito, while currently on the straight and narrow, has had a fairly shady past and is indeed no stranger to illegal activity. They both have great hope for Adam, Vito's son and Jessie's grandson, who is bright, good-looking, and without a criminal past. So when Adam approaches Jessie with a scheme for a burglary he's shocked, but not necessarily disinterested...."},
  15: {title: "The Russia House (1990)", summary: "Three notebooks supposedly containing Russian military secrets are handed to a British publisher during a Russian book conference. The British secret service are naturally keen to learn if these notebooks are the genuine article. To this end, they enlist the help of the scruffy British publisher Barley Blair, who has plenty of experience with Russian and Russians. Barley, an unconventionaly character who doesn't respond well to authority, finds himself in a game more complex than he first thought when he digs into the origin of the notebooks."},
  14: {title: "The Hunt For Red October (1990)", summary: "Based on the Best Selling novel by Tom Clancy this film tells the story of Captain Marko Ramius, the skipper of the Soviet Union's newest nuclear sub. Jack Ryan of the CIA gets involved in a tense, tangled hunt for this sub, when Ramius defects, taking the \"Red October\" with him. The story is an action packed techno-thriller."},
  13: {title: "Highlander II: Renegade Version (1991)", summary: "In the year 2025, the ozone layer is believed to have been destroyed. It is up to MacLeod and Rameriz to set things right. Opposition comes from both the planet Ziest (MacLeod and Ramirez's homeworld) and a corporation profiting from the supposed lack of ozone. Also, flashbacks show the story behind MacLeod and Ramirez's exile from Ziest."},
  12: {title: "Medicine Man (1992)", summary: "An eccentric scientist working for a large drug company is working on a research project in the Amazon jungle. He sends for a research assistant and a gas chromatograph because he's close to a cure for cancer. When the assistant turns out to be a \"mere woman,\" he rejects her help. Meanwhile the bulldozers get closer to the area in which they are conducting research, and they eventually learn to work together, and begin falling in love."},
  11: {title: "Rising Sun (1993)", summary: "At a celebration over the completed joint venture between a Japanese company and a US defence contractor a young woman is found strangled. A retired foreign liaison with expertise on Japanese culture is called in to help the current liaison overcome resistance from the Japanese, who are actively trying to mislead the investigation. As the liaisons get closer to the truth, political pressure is applied to get them off the case, and they must race against time to resolve it."},
  10: {title: "A Good Man In Africa (1994)", summary: ": In this comedy of manners set in a fictional West African country a British diplomat must convince an official to alter his vote on a project to make up for being caught with the wife of a corrupt politician. The catch is, the man whose mind he has to change is apparently the only uncorruptable man in Kinjanja."},
  9: {title: "First Knight (1995)", summary: "Lancelot lives by the sword. In fact, they're next door neighbours, so teaming up to fight for money comes pretty naturally. Lady Guinevere, on her way to marry King Arthur is ambushed by the evil Sir Malagant. Fortunately Lancelot is lurking nearby and he rescues his future queen. They fall in love, but Guinevere still fancies the idea of wearing a crown, so she honours her promise to Arthur. Can Lady Guinevere remain faithful, or will this Pretty Woman become a lady of the knight?"},
  8: {title: "Just Cause (1995)", summary: "Bobby Earl is facing the electric chair for the murder of a young girl. Eight years after the crime he calls in Paul Armstrong, a professor of law, to help prove his innocence. Armstrong quickly uncovers some overlooked evidence to present to the local police, but they aren't interested - Bobby was their killer."},
  7: {title: "The Rock (1996)", summary: "A group of renegade marine commandos seizes a stockpile of chemical weapons and takes over Alcatraz, with 81 tourists as hostages. Their leader, a former highly-decorated U. S. general, demands $100 million to be paid in ransom, as restitution to families of soldiers who died in covert operations and were thereby denied compensation. Otherwise, he is threatening to launch 15 rockets carrying deadly VX nerve gas into the San Francisco Bay area. An elite SEAL team, with support from an FBI chemical warfare expert (Stanley Goodspeed) and a former Alcatraz escapee (John Mason), is assembled to penetrate the terrorists' defenses on Alcatraz and neutralize the rocket threat before time runs out."},
  6: {title: "Dragonheart (1996)", summary: "Set in the 10th Century, a man (Bowen) teams up with the last dragon to remind the people of a long lost code of honor, and inspire them to fight for their freedom from a tyrannical king."},
  5: {title: "Playing By Heart (1998)", summary: "Eleven articulate people work through affairs of the heart in L.A. Paul produces Hannah's TV cooking show, and they must move beyond gentle barbs when she wants to know about an affair of his years ago. Mark is dying of AIDS, and his mother comes to his bedside: they must talk truthfully. Men have scalded Meredith so she rebuffs Trent's charm, but he persists. The trendy, prolix Joan tries to pull the solitary Keenan into her orbit: why is he reluctant? An adulterous couple meet at hotels for evening sex, but she is unwilling for the relationship to grow. Hugh tells tall tales, usually tragic, to women in bars. By the week's end, their parallel stories converge."},
  4: {title: "The Avengers (1998)", summary: "British Ministry agent John Steed (Ralph Fiennes), under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter (Sean Connery) to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel (Uma Thurman), the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August."},
  3: {title: "Entrapment (1999)", summary: "Following the theft of a highly-secured piece of artwork, an agent convinces her insurance agency employers to allow her to wriggle into the company of an aging but active master thief. Connery's burglar takes her on suspiciously and demands rigorous training before their first job together--stealing a highly-valued mask from a chichi party. Their deepening attraction and distrust could tear apart their partnership but the promise of a bigger prize (some eight billion odd dollars) by Zeta-Jones keeps the game interesting. Only, who's playing with whom?"},
  2: {title: "Finding Forrester (2001)", summary: "Because of scoring exceptionaly high on a state wide standardized exam and being an exceptionally good basketball player Jamal Wallace is sent to a prestigious prep school in Manhattan. He soon befriends the reclusive writer, William Forrester. The friendship leads to William to overcome his reclusivness and for Jamal to overcome the racial prejudices and pursue his true dream - writing."},
  1: {title: "The League of Extraordinary Gentlemen (2003)", summary: "Renowned adventurer Allan Quatermain (Connery) leads a team of extraordinary figures with legendary powers to battle the technological terror of a madman known as \"The Fantom.\" This \"League\" comprises seafarer/inventor Captain Nemo (Shah), vampiress Mina Harker (Wilson), an invisible man named Rodney Skinner (Curran), American secret service agent Tom Sawyer (West), the ageless and invincible Dorian Gray (Townsend), and the dangerous split personality of Dr. Jekyll/Mr. Hyde (Flemyng)."}
}

$(function(){
  $('.lazy').click(function(e) {
    var film_num = this.id.replace("film", "");
    $('.grid-section--films').append('<div class="popup popup--films"><span class="close">☓</span><div class="popup-left"><img src="img/films/film'+film_num+'.jpg"></div><div class="popup-right"><h3>'+film_details[film_num]['title'] +'</h3><p>'+film_details[film_num]['summary']+'</p></div></di>');
    $("body").append('<div class="modal-overlay"></div>');
    $(".modal-overlay").fadeIn("slow");
    getPosition();
    $('.popup--films').css({
      "right": rightDistance + "px",
      "top": topDistance + "px"
    });
  })
})

// Photos
$(function(){
  for (var i=1; i < 20; i++){
    switch(i%4){
      case 0 : $('.grid-section--photos').children('.column1').append('<img src="img/photos/'+i+'.jpg" class="lazy">'); break;
      case 1 : $('.grid-section--photos').children('.column2').append('<img src="img/photos/'+i+'.jpg" class="lazy">'); break;
      case 2 : $('.grid-section--photos').children('.column3').append('<img src="img/photos/'+i+'.jpg" class="lazy">'); break;
      case 3 : $('.grid-section--photos').children('.column4').append('<img src="img/photos/'+i+'.jpg" class="lazy">'); break;
    }
  }
})

// Films & Photos
$(window).scroll(function() {
  $('img.lazy').lazyload({
    effect : 'fadeIn',
    effect_speed: 1000
  });
});

// Films & Gallery
var rightDistance;;
var topDistance;
function getPosition(){
  var w = $(window).width();
  var h = $(window).height();
  var cw = $('.popup').outerWidth();
  var headerw = $('header').outerWidth();
  var ch = $('.popup').outerHeight();
  rightDistance = ((w - cw - headerw)/2)
  topDistance = ((h - ch)/2)
}

$(document).on('click', function(e) {
  if ($(e.target).is('.modal-overlay, .close')) {
    $('.popup--films').remove();
    $('.popup--gallery').hide();
    $('.modal-overlay').remove();
  }
});

// Gallery
$(function(){
  $('.popup-link--gallery--readmore').click(function(e) {
    $('.popup--gallery').show();
    $("body").append('<div class="modal-overlay"></div>');
    $(".modal-overlay").fadeIn("slow");
    getPosition();
    $('.popup--gallery').css({
      "right": rightDistance + "px",
      "top": topDistance + "px"
    });
  })
})

// Video
var video;
$('.main-visual--films').click(function(){
  $('.main-visual--films--thumbnail').hide();
  $('#video--films').show();
  video = $('#video--films');
  video[0].play();
  if(video){
    window.onscroll = function(){
      ScrollIndicator();
      if($(window).scrollTop() > 700){
        video[0].pause();
      }
    }
  }
});

$('.second-visual--image').click(function(){
  $('.second-visual--thumbnail').hide();
  $('#video--index').show();
  video = $('#video--index');
  video[0].play();
  if(video){
    window.onscroll = function(){
      if(($(window).scrollTop() < 300) || $(window).scrollTop() > 1400){
        video[0].pause();
      }
    }
  }
});

video = document.querySelector('video');
if(video){
  video.onpause = function(){
    $('.second-visual--message').css('z-index', '2')
  }
  video.onplaying = function(){
    $('.second-visual--message').css('z-index', '-1')
  }
}

// Scroll bar
window.onscroll = function() {ScrollIndicator()};
function ScrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var barHight = (document.documentElement.clientHeight / document.body.clientHeight) * 100;
  $('.progress-bar').css({'height': barHight + "%", 'top': scrolled + "%"});
}
