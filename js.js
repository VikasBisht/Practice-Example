function obj () {
	
}

obj.prototype.generateId = function() {
	return Math.floor((Math.random() * 100000) + 1);
}
obj.prototype.createCommentBox = function() {
			childrenID = this.generateId();
			
			 var divsion =  document.createElement("div");
			 divsion.style = "margin : 5px 30px 2px ; "
			 divsion.setAttribute("id" ,"Child"+childrenID);
			 var btn = document.createElement("textarea");
			 var t = document.createTextNode("Type your comment");
			 var submit = document.createElement("button");
			 var buttonName = document.createTextNode("submit");
			 submit.setAttribute("onclick" ,"postComment(this)");

			 btn.appendChild(t);

			 submit.appendChild(buttonName);
			 

			 divsion.appendChild(btn);
			 divsion.appendChild(submit);
			 return divsion;
			}
obj.prototype.onDocLoad=function () { 
			
			

			var divsion =  this.createCommentBox();
			
			var mainParent = document.getElementById("main");

			    mainParent.appendChild(divsion);
			}

obj.prototype.ReplyClick=function(subchild) { 

			
			var subchildID = subchild.parentElement.parentElement.id;
			
			var divsion = this.createCommentBox();

			var mainParent = document.getElementById(subchildID);

			    mainParent.appendChild(divsion);
}
obj.prototype.postComment=function(childId) {
			var replaceWithText = document.getElementById(childId.parentElement.id).children[0].value;
			var replaceWithNode = document.getElementById(childId.parentElement.id)
			


			var btn = document.createElement("div");
			var reply = document.createElement("button");
			reply.style = "float:right ; margin-top:30px";
			reply.setAttribute("onclick" ,"ReplyClick(this)");
			var t2 = document.createTextNode("Reply");
			btn.style = "margin : 5px 30px 2px ; border : 1px dotted lightgrey ;  width : 200px ; min-height:50px"
			var t = document.createTextNode(replaceWithText);
			var t2 = document.createTextNode("Reply");
			btn.appendChild(t);
			reply.appendChild(t2);
			btn.appendChild(reply)
			while(replaceWithNode.firstChild){
			replaceWithNode.removeChild(replaceWithNode.firstChild);
			}
			replaceWithNode.appendChild(btn);

}

var o = new obj;

function catchclick(){
	
	o.onDocLoad();
}

function postComment(val) {
	o.postComment(val)

}
function ReplyClick(val) {
	o.ReplyClick(val)

}