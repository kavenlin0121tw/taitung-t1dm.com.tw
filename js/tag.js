// JavaScript Document



function tagclass(id)
{
   switch(id)
   {
case 'tagbut1':
              
			  $("#tagarea li a").removeClass("stay");
			  $("#tagbut1 a").addClass("stay");
              $('.tagpagearea div').css("display","none");
			  document.getElementById('tagtext1').style.display="block"; 
			  break;
			  
case 'tagbut2':
              $("#tagarea li a").removeClass("stay");
			  $("#tagbut2 a").addClass("stay");
              $('.tagpagearea div').css("display","none");
			  document.getElementById('tagtext2').style.display="block"; 
			  break;
			  
			  
case 'tagbut3':
              $("#tagarea li a").removeClass("stay");
			  $("#tagbut3 a").addClass("stay");
              $('.tagpagearea div').css("display","none");
			  document.getElementById('tagtext3').style.display="block"; 
			  break;
			  
			  
case 'tagbut4':
              $("#tagarea li a").removeClass("stay");
			  $("#tagbut4 a").addClass("stay");
              $('.tagpagearea div').css("display","none");
			  document.getElementById('tagtext4').style.display="block"; 
			  break;
			  
case 'tagbut5':
              $("#tagarea li a").removeClass("stay");
			  $("#tagbut5 a").addClass("stay");
              $('.tagpagearea div').css("display","none");
			  document.getElementById('tagtext5').style.display="block"; 
			  break;
			  
			  
   }  
}


