$(document).once().ajaxComplete(function (event, xhr, settings) {
  if (drupalSettings.data == "found") {
    $(".order4 .blue_title").html('<a href="overall-proficiency-details/' + drupalSettings.invite_id + '">Overall Proficiency</a>');
    $('.overall-proficiency-homepage-block').css("display", "block");
    $('.overall-noresult').css("display", "none");
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(load_overall_chart);
    function load_overall_chart() {
      var strengths = drupalSettings.my_strengths;
      var opportunities = drupalSettings.my_opportunities;
      var percentage = drupalSettings.my_overall_percentage;
      if( strengths == 1 || strengths == 0) {
        $(".proficient_skill").html(strengths + " Proficient Skill")
      } else {
        $(".proficient_skill").html(strengths + " Proficient Skills")
      }
      if( opportunities == 1 || opportunities == 0) {
        $(".skill_gap").html(opportunities + " Skill Gap")
      } else {
        $(".skill_gap").html(opportunities + " Skill Gaps")
      }
      
      $(".centerLabel").html(percentage + "%")
//                $('.noresult').css("display", "none");
      $('.overall-proficiency-homepage-block').css("display", "block");

      var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['Proficient skills', percentage],
        ['Skills gap', 100 - percentage],
      ]);
      if ($(window).width() < 767) {
          var pie_size = 180;
      } else {
        var pie_size = $('.atlas-home .right_section').height()*0.75 - $('.box_title').height() - 10;
      }

      var options = {
        width: pie_size,
        height: pie_size,
        pieHole: 0.6,
        pieSliceTextStyle: {
          color: 'black',
        },
        colors: ['#008ec3', '#FF2F2F'],
        pieSliceText: 'none',
        legend: {position: 'none', pointSize: 1},
        chartArea: {width: '90%', height: '90%'},
        tooltip: {trigger: 'none'},
      };

      var chart = new google.visualization.PieChart(document.getElementById('donut_home'));
      chart.draw(data, options);
    }
  } else {
    $(".order4 .blue_title").html('Overall Proficiency');
    $('.overall-proficiency-homepage-block').css("display", "none");
    $('.overall-noresult').css("display", "block");
  }

});

