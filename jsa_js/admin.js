/*
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

*/

function explode( delimiter, string ) {	// Split a string by string
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: kenneth
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

    var emptyArray = { 0: '' };

    if ( arguments.length != 2
        || typeof arguments[0] == 'undefined'
        || typeof arguments[1] == 'undefined' )
    {
        return null;
    }

    if ( delimiter === ''
        || delimiter === false
        || delimiter === null )
    {
        return false;
    }

    if ( typeof delimiter == 'function'
        || typeof delimiter == 'object'
        || typeof string == 'function'
        || typeof string == 'object' )
    {
        return emptyArray;
    }

    if ( delimiter === true ) {
        delimiter = '1';
    }

    return string.toString().split ( delimiter.toString() );
}
$(document).ready(function(){

    $.ajax({
        url: '/jsa_ajax/jsa_admin_check.php',
        type: 'post',
        success: function(data) {
            if(data == false){
                window.location = "/jsa_app/index.jsa";
            }
        }
    });

    $(".linkTo a").click(function(){
        var routes = explode("/", this.href);

        return false;
    })
    $("#jsa_admin_form").submit(function(){
            var login = $("#jsa_login").val();
            var pass = $("#jsa_pass").val();

            var data = "login=" + login + "&pass=" +pass;
            $.ajax({
                url: '/jsa_ajax/admin_auth.php',
                type: 'post',
                data: data,
                success: function(data) {
                    $("#jsa_admin_form .form-signin-heading").html(data);
                    setTimeout(function () {
                        window.location = $("#jsa_admin_form").attr("action");
                    }, 2000);
                }
            });

            return false;
        });
})