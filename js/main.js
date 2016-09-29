var i=0;

var comment=[];
comment.push({avatar: "img/john_smith-1.png",
				txt: "These guys are incredible! I get my project in 10 days and it was awesome!\n Very good service! Highly recommended!",
				autor: "John Smith-1"});
comment.push({avatar: "img/john_smith-2.png",
				txt: "These guys are incredible! I get my project in 9 days and it was awesome!\n Very good service! Highly recommended!",
				autor: "John Smith-2"});
comment.push({avatar: "img/john_smith-3.png",
				txt: "These guys are incredible! I get my project in 8 days and it was awesome!\n Very good service! Highly recommended!",
				autor: "John Smith-3"});
comment.push({avatar: "img/john_smith-4.png",
				txt: "These guys are incredible! I get my project in 7 days and it was awesome!\n Very good service! Highly recommended!",
				autor: "John Smith-4"});
comment.push({avatar: "img/john_smith-5.png",
				txt: "These guys are incredible! I get my project in 6 days and it was awesome!\n Very good service! Highly recommended!",
				autor: "John Smith-5"});
var img=document.getElementsByClassName('what-client-say_client_photo-img');
var txt=document.getElementsByClassName('what-client-say_client_comment_text');
var autor=document.getElementsByClassName('what-client-say_client_autor_text');
var team_photo1=document.getElementsByClassName('our-team_item_photo_img');
var team_name=document.getElementsByClassName('our-team_item_name_text');
var team_comment=document.getElementsByClassName('our-team_item_coment_text');
var nav=document.getElementsByClassName('navigation_item');

function NextComent()
	{
		if (i<4)
		{
			i++;
		}
		else
		{
			i=0;
		}
		img[0].src=comment[i].avatar;
		txt[0].innerText=comment[i].txt;
		autor[0].innerText=comment[i].autor;
	}
function BackComent()
	{
		var img=document.getElementsByClassName('what-client-say_client_photo-img');
		if (i>0)
		{
			i--;
		}
		else
		{
			i=4;
		}
		img[0].src=comment[i].avatar;
		txt[0].innerText=comment[i].txt;
		autor[0].innerText=comment[i].autor;
	}
var bk=1;
function Changed(ch)
{
				nav[bk-1].style.backgroundColor="#c4c6c9";
				nav[ch-1].style.backgroundColor="#f7600e";
				bk=ch;
		for(var j=0;j<4;j++)
		{
			team_photo1[j].src='img/our-team_photo'+ch+'.png';
		}
}