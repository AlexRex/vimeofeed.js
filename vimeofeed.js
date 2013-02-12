        <script>
            $(document).ready(function() {
                $.getJSON('http://vimeo.com/api/v2/1062108/videos.json?callback=?', function(data) { //Change the number between v2/ [THIS NUMBER] /videos.json to your vimeo's id number.
                    var target = "#vimeo"; // Name of the ID div where videos will be.
                    for (i = 0; i <= 10; i = i + 1) { // Loop, inicially 10 videos, you can change it. 

                        var link = data[i].id;

                        $(target).append("<iframe src='http://player.vimeo.com/video/" + link + "' width='500' height='375' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"); // Here you can change the width and height.


                    }
                });
            });
       </script>