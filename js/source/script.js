
$(function(){

  $('.jcarousel')
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;

  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
    $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
    $(this).removeClass('active');
  })
  .jcarouselPagination();

  var arrObject = [];
  $.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(data){
    //console.log('data', data);
    var arrSkills = [];
    var arrFriends = [];

    for (var i = 0; i < data.length; i++) {
      arrSkills = arrSkills.concat(data[i].skills);
      if(data[i].friends.length > 0) {
          for (var k = 0; k < data[i].friends.length; k++) {
            arrFriends.push(data[i].friends[k].name);
          }
      }
    }

    var arrSortUniqueFriends = _.sortBy(_.union(arrFriends));
    var arrSortUniqueSkills = _.sortBy(_.union(arrSkills));
    
    for (var i = 0; i < data.length; i++) {
      data[i].friendsCount = data[i].friends.length;
    }
    
    var sortedData = _.sortBy(data, ['friendsCount']);
    var arrNames = [];

    for (var i = 0; i < sortedData.length; i++) {
      arrNames.push(sortedData[i].name);
    }

    console.log('Array sorted unique skills', arrSortUniqueSkills);
    console.log('Names sorted by friends count:', arrNames);
    console.log('Array sorted unique friends', arrSortUniqueFriends);
  });

})

