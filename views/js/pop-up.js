function feedback(){
  if (document.forms["Form"]["review[firstName]"].value == null || document.forms["Form"]["review[firstName]"].value == "",
      document.forms["Form"]["review[lastName]"].value == null || document.forms["Form"]["review[lastName]"].value == "", 
      document.forms["Form"]["review[title]"].value == null || document.forms["Form"]["review[title]"].value == "",
      document.forms["Form"]["review[body]"].value == null || document.forms["Form"]["review[body]"].value == "") {
        // Swal.fire({
        //   position: 'center',
        //   icon: 'warning',
        //   title: 'All fields are requrired',
        //   showConfirmButton: false,
        //   timer: 1000
        // })
        return false;
  } else {
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thanks for the feedback!',
        showConfirmButton: false,
        timer: 1500
      }).then(timedRefresh(1550));

    }
  
}

function timedRefresh(time) {
	setTimeout("location.reload(true);", time);
}