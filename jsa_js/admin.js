function runOnKeys(func) {
    var codes = [].slice.call(arguments, 1);

    var pressed = {};

    document.onkeydown = function(e) {
        e = e || window.event;

        pressed[e.keyCode] = true;

        for (var i = 0; i < codes.length; i++) { // проверить, все ли клавиши нажаты
            if (!pressed[codes[i]]) {
                return;
            }
        }

        // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
        // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
        // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
        pressed = {};

        func();

    };

    document.onkeyup = function(e) {
        e = e || window.event;

        delete pressed[e.keyCode];
    };

}

runOnKeys(
    function() {
        getAdmin();
    },
    "A".charCodeAt(0),
    "D".charCodeAt(0),
    "M".charCodeAt(0)
);

function getAdmin(){

    $.ajax({
        url: "/jsa_ajax/admin_form.php",
        type: "POST",
        success: function(html){
            $("body").append(html);
            $(".jsa_close").click(function(){
                $(".jsa_admin_form").remove();
            });
            $(".jsa_admin_form form").submit(function(){
                var login = $("#jsa_login").val();
                var pass = $("#jsa_pass").val();

                var sendInfo = {
                    login: login,
                    pass: pass
                };

                $.ajax({
                    type: "POST",
                    url: "/jsa_ajax/admin_auth.php",
                    dataType: "json",
                    data: sendInfo,
                    success: function () {
                        console.log("success");
                    }
                });
                console.log(data);
                return false;
            });
        }
    });

}