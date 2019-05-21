Drupal.behaviors.atlas_user = {
  attach: function (context, settings) {
    // On page load.
    $(function () {
      $(".form-item-field-is-manager select").change();
    });

    $(".form-item-field-is-manager select").change(function(){
      var selected = $(this).children("option:selected").val();
        if (selected == 1) {
            $(".js-form-item-roles-res input").prop('checked', true);
        }
      });
    }
};
