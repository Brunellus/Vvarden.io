let conversaion = {
  "topic1":{"title":"Blades","content":"Lorem <a data-content='Lipsum ipsum dolor it resquat crenum'>ipsum dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere. Praesent semper feugiat nibh sed. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nunc sed velit dignissim sodales. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Sed faucibus turpis in eu mi bibendum neque. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Orci sagittis eu volutpat odio facilisis mauris. Hac habitasse platea dictumst vestibulum rhoncus. Facilisis sed odio morbi quis commodo. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ligula ullamcorper malesuada proin libero nunc consequat. Malesuada fames ac turpis egestas. A pellentesque sit amet porttitor eget dolor morbi non. Orci nulla pellentesque dignissim enim sit amet. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Velit sed ullamcorper morbi tincidunt ornare massa. Ante metus dictum at tempor commodo ullamcorper a lacus."},
  "topic2":{"title":"Blades Trainers","content":"Curabitur gravida arcu ac tortor dignissim convallis aenean. Eget arcu dictum varius duis at consectetur. Semper quis lectus nulla at volutpat diam ut. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Id diam vel quam elementum pulvinar etiam non. Feugiat nisl pretium fusce id. Sed vulputate odio ut enim blandit volutpat maecenas. Rhoncus urna neque viverra justo nec ultrices dui sapien. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet nulla facilisi morbi tempus. Turpis massa sed elementum tempus egestas sed sed. Urna duis convallis convallis tellus id interdum. Consequat nisl vel pretium lectus quam id leo in. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nulla facilisi etiam dignissim diam. At elementum eu facilisis sed odio morbi. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Quam adipiscing vitae proin sagittis."},
  "topic3":{"title":"Ciaus Cosades","content":"Eget aliquet nibh praesent tristique magna. Non tellus orci ac auctor augue mauris. Egestas purus viverra accumsan in. Scelerisque in dictum non consectetur a erat nam at. Bibendum enim facilisis gravida neque. Sed felis eget velit aliquet sagittis id. Pharetra vel turpis nunc eget lorem dolor sed. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Lectus urna duis convallis convallis tellus id. Facilisis leo vel fringilla est ullamcorper eget. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Integer malesuada nunc vel risus commodo viverra maecenas. Ac placerat vestibulum lectus mauris. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ultricies leo integer malesuada nunc vel risus. Tortor at risus viverra adipiscing at in tellus. Elit at imperdiet dui accumsan sit amet. Auctor eu augue ut lectus arcu bibendum at."},
  "topic4":{"title":"Fighters Guild","content":"Quis commodo odio aenean sed adipiscing diam donec adipiscing. Et malesuada fames ac turpis egestas maecenas. Sit amet risus nullam eget felis eget. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Malesuada nunc vel risus commodo viverra. Amet porttitor eget dolor morbi. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Pellentesque eu tincidunt tortor aliquam. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Nec dui nunc mattis enim. Et malesuada fames ac turpis egestas. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Ac tincidunt vitae semper quis lectus nulla. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Hac habitasse platea dictumst vestibulum rhoncus."} 
  
}


let bgmPlay
let song = getRandom(0,7)

$(function(){
  $("#backtrack").attr("src",`sounds/mx_explore_${song}.mp3`)
  var bgm = document.getElementById("backtrack");
 // bgm.play();
 // bgmPlay=true

  for(items in conversaion){
    $(".vv-ul").append(`<li class="vv-li" data-content="${conversaion[items].content}"> ${conversaion[items].title} </li>`)
  }
  
});

var aud = document.getElementById("backtrack");
aud.onended = function() {
      var bgm = document.getElementById("backtrack"); 
    bgm.pause();
    song = (song == 0) ? 7 : song-1
    $("#backtrack").attr("src",`sounds/mx_explore_${song}.mp3`)
    bgm.play();
}


$(document).on("click", ".vv-li, .vv-button, a", function(){
  var menuSound = document.getElementById("menu");
  menuSound.play();
});

$("#playback").on("click", function(){
  var bgm = document.getElementById("backtrack"); 
  if(bgmPlay){
    $(this).find("i").attr("class","fas fa-play")
      bgm.pause();
    bgmPlay = false
    
  }
  else{
    $(this).find("i").attr("class","fas fa-pause")
    bgm.play();
    bgmPlay = true
  }

});

$("#prev").on("click", function(){
    var bgm = document.getElementById("backtrack"); 
    bgm.pause();
    song = (song == 0) ? 7 : song-1
    $("#backtrack").attr("src",`sounds/mx_explore_${song}.mp3`)
    bgm.play();
})

$("#next").on("click", function(){
    var bgm = document.getElementById("backtrack"); 
    bgm.pause();
    song = (song == 7) ? 0 : song+1
    $("#backtrack").attr("src",`sounds/mx_explore_${song}.mp3`)
    bgm.play();
})



$( ".vv" ).resizable();

$(".vv-top-bar").on("mousedown", function(e){
    $( ".vv" ).draggable();
}).on("mouseup", function(e){
    $(".vv").draggable( "destroy" );
});

$(".vv-settings-icon").on("click", function(){
  $(".vv-settings").removeClass("d-none");
  $(".vv-overlay").removeClass("d-none");
})

$(".vv-settings-closer").on("click", function(){
  $(".vv-settings").addClass("d-none");
  $(".vv-overlay").addClass("d-none");  
})


let topics = []
  
$(document).on("click", ".vv-li, a", function(){

  let topicsbegin = []
  let topicsend = []
  
  let content = $(this).attr("data-content")
  $(".vv-main").append(`<span class="vv-topic">${$(this).html()}</span>`)
  $(".vv-main").append(`<span class="vv-content">${content}</span>`)
  
 topicsbegin = getIndicesOf("'>", content, false)
 topicsend = getIndicesOf("</a>", content, false)
  
  for(let i = 0; i<topicsbegin.length; i++){
    if( !(topics.includes(content.substring(topicsbegin[i]+2, topicsend[i]))) ){
      $(".vv-ul").append("<li class='vv-li' data-content='Lipsum ipsum dolor it resquat crenum'>"+content.substring(topicsbegin[i]+2, topicsend[i])+"</li>")
      topics.push(content.substring(topicsbegin[i]+2, topicsend[i]))
        $('.vv-side-menu').scrollTop($('.vv-main')[0].scrollHeight);

    }
    
  }
  
  $('.vv-main').scrollTop($('.vv-main')[0].scrollHeight);
  
})

var handle = $( "#vv-handle" );
    $( ".vv-slider" ).slider({
      create: function() {
        $(".vv-slider").slider('value', 80);
        handle.text( 8 );
        
      },
      slide: function( event, ui ) {
        handle.text( Math.floor(ui.value/10));
        $(".vv-overlay").addClass("d-none");
        $(".vv").css(`background`,`rgba(0,0,0,${Math.floor(ui.value/10)/10})`);
        $(".vv-settings, .vv-overlay").on("mouseup",function(){$(".vv-overlay").removeClass("d-none")})
      }
    });

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}
  