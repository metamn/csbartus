jQuery(document).ready(function(){
  
  jQuery("#people-badge-name").click(function() {
    var id = jQuery(this).attr('rel');
    var badge = "." + id;
    alert(badge);
    jQuery(badge).slideToggle();
  });
  
    
});
