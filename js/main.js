
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var videoTemplate = $('#templates .video-list-item').html();
var renderVideoList = function () {
  for (i=0; i <= videos.length; i++){
    var videoHtml = $.render(videoTemplate, videos[i]);
    $('#video-list').append(videoHtml);
  }
};

$('button').on('click', function(e){
  e.preventDefault();
  var title = $('input[id=title]').val();
  var youtubeId = $('input[id=youtubeId]').val();
  videoHtml = $.render(videoTemplate, {title: title, youtubeId: youtubeId});
  $('#video-list').append(videoHtml);
  $('input').val('');
});

renderVideoList();
