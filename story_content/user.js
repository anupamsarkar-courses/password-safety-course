window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
var pwd    = player.GetVar("PwdText") || "";
var lower  = pwd.toLowerCase();
player.SetVar("StrengthScore", -1);
var len       = pwd.length;
var hasUpper  = /[A-Z]/.test(pwd);
var hasLower  = /[a-z]/.test(pwd);
var hasNumber = /[0-9]/.test(pwd);
var hasSymbol = /[^A-Za-z0-9]/.test(pwd);
var words     = pwd.trim().split(/[\s\-_.]+/).filter(function (w) { return w.length > 0; }).length;
var common = ["password","passw0rd","123456","qwerty","letmein","welcome","admin","iloveyou","abc123","111111","monkey","dragon"];
var hasCommon = common.some(function (w) { return lower.indexOf(w) !== -1; });
var score = 0;
if (len >= 8)   score += 1;
if (len >= 12)  score += 1;
if (len >= 15)  score += 2;
if (words >= 4) score += 1;
var variety = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
if (variety >= 2) score += 1;
if (hasCommon) score = Math.min(score, 2);
if (len === 0) score = 0;
var label = score >= 5 ? "Strong" : (score >= 3 ? "Fair" : "Weak");
player.SetVar("PwdLength", len);
player.SetVar("WordCount", words);
player.SetVar("HasUpper", hasUpper);
player.SetVar("HasNumber", hasNumber);
player.SetVar("HasSymbol", hasSymbol);
player.SetVar("HasCommon", hasCommon);
player.SetVar("StrengthLabel", label);
player.SetVar("StrengthScore", score);
}

};
