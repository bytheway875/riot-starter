var items = [
  { name: 'TV', price: 500},
  { name: 'Roku', price: 99},
  { name: 'Lamp', price: 30}
]

var itemTemplate = $('#templates .item').html();

for(i=0; i<= items.length; i++){
  var newItemHtml = $.render(itemTemplate, items[i]);
  $('#store').append(newItemHtml);
}
