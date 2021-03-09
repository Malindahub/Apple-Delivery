//start page, bkg changed to green
$(".startb").click(function() {
    $(".start").hide();
    $("body").css("background-color", "#9ef8d5");
    $(".one").show();
});

//stage one jean enters
$(".yes1").click(function() {
    $(".one").hide();
    $(".two").show();
});
$(".no1").click(function() { //the bad ending
    $(".one").hide();
    $("h1").css("color", "#f23035");
    $("body").css("background-color", "#005148");
    $(".bad1").show();
});

//stage two jean leaves, bkg changed to reg
$(".twonext").click(function() {
    $(".two").hide();
    $("body").css("background-color", "#a9dcf6");
    $(".three").show();
});

//stage three scenery, bkg changed to red
$(".threenext").click(function() {
    $(".three").hide();
    $("body").css("background-color", "#f23035");
    $(".four").show();
});

//stage four enemy appears
$(".fourfight").click(function() {
    $(".four").hide();
    $(".five").show();
});
$(".fourrun").click(function() { //the bad ending
    $(".four").hide();
    $("h1").css("color", "#f23035");
    $("body").css("background-color", "#005148");
    $(".bad2").show();
});

//stage five fight, bkg changed back to reg
$(".enemy").dblclick(function() {
    $(".five").hide();
    $("body").css("background-color", "#a9dcf6");
    $(".six").show();
});

//stage six enemy defeated
$(".sixnext").click(function() {
    $(".six").hide();
    $(".seven").show();
});

//stage seven say hi to venti
$(".sevennext").click(function() {
    $(".seven").hide();
    $("body").css("background-color", "#9ef8d5");
    $(".eight").show();
});

//stage eight talk to venti
$(".sevennext").click(function() {
    $(".seven").hide();
    $(".eight").show();
});

//move to stage nine give venti apples
$(".eightnext").click(function() {
    $(".eight").hide();
    $(".nine").show();
});

//yes for good ending, no for bad ending
$(".nineyes").click(function() {
    $(".nine").hide();
    $("h1").css("color", "#24cc8f");
    $(".goodend").show();
});
$(".nineno").click(function() { //bad ending
    $(".nine").hide();
    $("h1").css("color", "#f23035");
    $("body").css("background-color", "#005148");
    $(".bad3").show();
});

//good ending
$(".playagain").click(function() {
    $(".goodend").hide();
    $("h1").css("color", "black");
    $("body").css("background-color", "#a9dcf6");
    $(".start").show();
});

//all bad endings, bkg change to reg
$(".tryagain").click(function() {
    $(".badend").hide();
    $("h1").css("color", "black");
    $("body").css("background-color", "#a9dcf6");
    $(".start").show();
});