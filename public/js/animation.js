function nodeExpand(e,t){TweenMax.fromTo(e,nodeExpandTime,{attr:{r:nodeRadius}},{attr:{r:nodeRadiusExpanded},ease:Power1.easeOut}),TweenMax.to(t,.01,{scale:1}),TweenMax.to($(t).find("foreignObject"),.01,{attr:{width:getContentWidth(t),height:getContentHeight(t)}}),TweenMax.fromTo(t,contentExpandTime,{opacity:0},{opacity:1,ease:Power1.easeOut})}function nodeExpandOut(e,t){var o=new TimelineMax;o.add(TweenMax.to(e,nodeCollapseTime,{attr:{r:nodeRadius},ease:Power1.easeOut})),o.add(TweenMax.fromTo(t,contentCollapseTime,{opacity:1},{opacity:0,ease:Power1.easeOut})),o.add(TweenMax.to(t,.01,{scale:0})),o.add(TweenMax.to($(t).find("foreignObject"),.01,{attr:{width:0,height:0}})),o.add(TweenMax.to(e,nodeCollapseTime,{attr:{r:0},ease:Power1.easeOut}))}function closeAllNodes(){document.querySelectorAll(".hover-group").forEach(function(e){var t=e.querySelectorAll(".hover-node")[0],o=e.querySelectorAll(".content")[0];TweenMax.to(o,contentCollapseTime,{opacity:0}),TweenMax.to(o,.01,{scale:0}),TweenMax.to($(o).find("foreignObject"),.01,{attr:{width:0,height:0}}),TweenMax.to(t,nodeCollapseTime,{attr:{r:0}})})}function getContentWidth(e){var t=$(e).find("foreignObject");return $(t).find("div").prop("scrollWidth")}function getContentHeight(e){var t=$(e).find("foreignObject");return $(t).find("div").prop("scrollHeight")}var nodeRadius=9,nodeRadiusExpanded=12,nodeExpandTime=.5,nodeCollapseTime=.2,contentExpandTime=.5,contentCollapseTime=.5,contentLoopActiveTime=5;$(document).ready(function(e){var t=document.querySelectorAll("polyline");TweenMax.staggerFromTo(t,1,{opacity:.75,drawSVG:"100% 100%"},{opacity:.75,drawSVG:"0% 100%"},.1);var o=document.querySelectorAll(".node");TweenMax.staggerFromTo(o,1.5,{opacity:1,attr:{r:0}},{opacity:1,attr:{r:nodeRadius},ease:Back.easeOut},.03);var a,n=document.querySelectorAll(".hover-group"),r=new TimelineMax({repeat:-1,repeatDelay:2,delay:3});n.forEach(function(e){var t=e.querySelectorAll(".hover-node")[0],o=e.querySelectorAll(".hover")[0],n=e.querySelectorAll(".content")[0],i=$(n).find("foreignObject"),d=getContentWidth(n),l=getContentHeight(n);if(i.attr("width",d),i.attr("height",l),r.add(TweenMax.fromTo(t,nodeExpandTime,{attr:{r:0}},{attr:{r:nodeRadiusExpanded},ease:Power1.easeOut})).add(TweenMax.to(n,.01,{scale:1})).add(TweenMax.to(i,.01,{attr:{width:d,height:l}})).add(TweenMax.fromTo(n,contentExpandTime,{opacity:0,delay:.2},{opacity:1,ease:Power1.easeOut})).add(TweenMax.to(t,nodeCollapseTime,{delay:contentLoopActiveTime,attr:{r:nodeRadius},ease:Power1.easeOut})).add(TweenMax.to(n,contentCollapseTime,{opacity:0,ease:Power1.easeOut})).add(TweenMax.to(n,.01,{scale:0})).add(TweenMax.to(i,.01,{attr:{width:0,height:0}})).add(TweenMax.to(t,nodeCollapseTime,{attr:{r:0},ease:Power1.easeOut})),n.style.visibility="visible",TweenMax.to(n,.01,{scale:0}),TweenMax.to(i,.01,{attr:{width:0,height:0}}),n.classList.contains("from-right")){var i=n.querySelectorAll("foreignObject")[0];TweenMax.to(i,0,{attr:{x:i.getAttribute("x")-d}})}if(n.classList.contains("from-bottom")){var i=n.querySelectorAll("foreignObject")[0];TweenMax.to(i,0,{attr:{y:i.getAttribute("y")-l}})}o.onmouseover=function(e){clearTimeout(a),r.pause(),closeAllNodes(),nodeExpand(t,n)},o.onmouseout=function(e){nodeExpandOut(t,n),a=setTimeout(function(){r.play(0)},2e3)}})});