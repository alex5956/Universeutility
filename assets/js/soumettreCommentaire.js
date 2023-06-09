import $ from 'jquery' ;
 $(document).ready(function() {
     $('#soumettre').submit(function (e) {
         {
             e.preventDefault();
             $.ajax(
                 {
                     url: "/submitComment"
                 }).then(function (data) {

             });
         }
     });
 });