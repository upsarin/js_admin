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
$(document).ready(function() {
    $(".linkTo a").click(function () {
        var route = explode("/", this.href);
        console.log(route);
        var routes = {
            page: route[3],
            action: route[4],
        };
        if(routes.page != "") {
            $.ajax({
                url: '/jsa_ajax/jsa_router.php',
                type: 'post',
                data: routes,
                success: function(data) {
                    $(".main").html(data);
                    $("#files").change(function(){
                        if(this.value != "all") {
                            window.location = this.value + "?action=edit";
                        }
                    });
                }
            });
        }
        return false;
        /*

         */
    });


});