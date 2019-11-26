function staffMemberList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<div class="employee sbrw-3col"><div class="employee-thumb">' + 
	'<img width="360" height="505" src="' + arr[i].memberImageURL + 
	'" class="attachment-sbrw-small-thumb size-sbrw-small-thumb" alt="" sizes="(max-width: 360px) 100vw, 360px">' + 
	'</div>' + '<div class="employee-content"><h3 class="employee-title">' +
	'<a href="' + arr[i].memberSocialURL + '" target="_blank">' + arr[i].memberUsername + '</a></h3>' +
	'<p style="color:black">' + arr[i].memberRole + '</p>' + '</div></div>';
  }
  document.getElementById("teamMemberList").innerHTML = out;
}
function menuDisplayList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<li id="menu-item-' + arr[i].menuItemNum + 
	'" class="menu-item menu-item-object-page menu-item-' + arr[i].menuItemNum + '"' + arr[i].menuSubCheck + '><a href="' +
	arr[i].menuLink + '"' + arr[i].menuAddon + '">' + arr[i].menuTitle + '</a></li>';
  }
  document.getElementById("primary-menu").innerHTML = out;
  document.getElementById("footer-menu").innerHTML = out;
}