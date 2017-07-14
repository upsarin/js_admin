
var jsa_params_help = {
    "width": "px/%",
    "height": "px/%",
    "text-align": "left/center/right",
    "margin": "0px 0px 0px 0px",
    "position": "absolute/relative",
    "top": "px/%",
    "left": "px/%",
    "bottom": "px/%",
    "right": "px/%",
    "padding": "0px 0px 0px 0px",
    "min-width": "px/%",
    "min-height": "px/%",
    "max-width": "px/%",
    "max-height": "px/%",
    "border": "1px solid #ffffff",
    "border-radius": "0px 0px 0px 0px",
    "background": "url()/#ffffff",
    "background-attachment": "",
    "background-position": "0px 0px/10% 10%",
    "background-repeat": "no-repeat/repeat-x/repeat-y/round/space",
    "background-size": "px/%",
    "overflow": "scroll/hidden"
}

var jsa_params = {
    "width": "",
    "height": "",
    "text-align": "",
    "margin": "",
    "position": "",
    "top": "",
    "left": "",
    "bottom": "",
    "right": "",
    "padding": "",
    "min-width": "",
    "min-height": "",
    "max-width": "",
    "max-height": "",
    "border": "",
    "border-radius": "",
    "background": "",
    "background-attachment": "",
    "background-position": "",
    "background-repeat": "",
    "background-size": "",
    "overflow": ""
}
var jsa_titles_en = {
    "width": "Width",
    "height": "Height",
    "text-align": "Centering",
    "margin": "Indenting",
    "position": "Element position type",
    "top": "Position from the top edge",
    "left": "Position from the left edge",
    "bottom": "Position from the bottom edge",
    "right": "Position from the right edge",
    "padding": "Indentation",
    "min-width": "Min width",
    "min-height": "Min height",
    "max-width": "Max width",
    "max-height": "Max height",
    "border": "Element border",
    "border-radius": "Smoothing corners",
    "background": "Background",
    "background-attachment": "Background scroll",
    "background-position": "Background postition",
    "background-repeat": "Background repeat",
    "background-size": "Background size",
    "overflow": "Scroll"
}
var jsa_titles_ru = {
    "width": "Ширина",
    "height": "Высота",
    "text-align": "Центрирование",
    "margin": "Отступы внешние",
    "position": "Тип позиционирования",
    "top": "Позиция от верхнего края",
    "left": "Позиция от левого края",
    "bottom": "Позиция от нижниго края",
    "right": "Позиция от правого края",
    "padding": "Отступы внутренние",
    "min-width": "Минимальная ширина",
    "min-height": "Минимальная высота",
    "max-width": "Максимальная ширина",
    "max-height": "Максимальная высота",
    "border": "Бордюр/Граница блока",
    "border-radius": "Сглаживание углов",
    "background": "Фон",
    "background-attachment": "Скрол фона",
    "background-position": "Позиция фона",
    "background-repeat": "Повтор фона",
    "background-size": "Размер фона",
    "overflow": "Прокручивание"
}
var lang = $("html").attr("lang");
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
    $("html").append("<div class='jsa_control'><a href='/jsa_app/app.jsa'>Dashboard</a> <a href='/jsa_app/save/'>Save</a></div>");
    $(".jsa_control").ready(function(){
        $(".jsa_control").css({
            position: "fixed",
            bottom: 0,
            left: 0,
            background: "rgba(255, 255, 255, 0.73)",
            width: "100%",
            height: "15px",
            color: "white",
            padding: "15px",
        });
        $(".jsa_control a").css({
            border: "2px solid #083f08",
            "border-radius": "15px",
            padding: "5px",
            top: "15px",
        });
        $(".jsa_control").append("<a href='' id='jsa_logo'>JSA</a>");
        $("#jsa_logo").ready(function(){
            $("#jsa_logo").css({
                float: "right",
                "margin-right": "50px",
                border: "2px solid #083f08",
                "border-radius": "50px",
                padding: "6px",
                "margin-top": "-10px"
            });
        });

        $("a").live("click", function(){
            var route = explode("/", window.location.href);
            var domen = route[0] + "//" +route[2];

            if(this.href === domen + "/jsa_app/app.jsa") {
                window.location = this.href;
                return false;
            } else if(this.href === domen + "/jsa_app/save/"){
                console.log("save");
                return false;
            } else if(this.href === domen + "/block/save/"){
                return false;
            } else if(this.href === domen + "/block/cancel/"){
                $(".jsa_module_edit").remove();
                $(".jsa_module_edit_block").remove();
                return false;
            } else if(this.href === domen + "/block/edit/"){
                var obj = $(".jsa_module_edit");
                $("html").append("<div class='jsa_module_edit_block' jsa-id-content='" + obj.attr("jsa-id-content") + "'><h3>JSA module #"+ obj.attr("jsa-id-content") +"</h3><div class='jsa_editor'></div><div class='jsa_params'><h4>CSS parameters</h4></div></div>");
                $(".jsa_module_edit_block").append("")
                if(obj[0].offsetLeft > "50"){
                    $(".jsa_module_edit_block").css({
                        position: "absolute",
                        top: (obj[0].offsetTop + 1)+(obj[0].offsetHeight + 20),
                        left: 50,
                        width: screen.width - 70,
                        height: "400px",
                        background: "rgba(255, 255, 255, 0.7)",
                        "z-index": "100000",
                        border: "1px solid rgba(0, 0, 0, 0.28)",
                        "min-width": "668px",
                        "min-height": "300px"
                    });
                } else {
                    $(".jsa_module_edit_block").css({
                        position: "absolute",
                        top: (obj[0].offsetTop + 1)+(obj[0].offsetHeight + 20),
                        left: obj[0].offsetLeft,
                        width: screen.width - 70,
                        height: "400px",
                        background: "rgba(255, 255, 255, 0.7)",
                        "z-index": "100000",
                        border: "1px solid rgba(0, 0, 0, 0.28)",
                        "min-width": "668px",
                        "min-height": "300px"
                    });
                }
                $(".jsa_editor").css({
                    width:"65%",
                    height: "85%",
                    float: "left"
                });
                $(".jsa_params").css({
                    width: "30%",
                    height: "85%",
                    float: "left",
                    zoom: "0.8",
                    overflow: "scroll"
                });
                jsa_params.width = obj[0].offsetWidth-1 + "px";
                jsa_params.height = obj[0].offsetHeight-1 + "px";
                $(".jsa_params").append("<form id='jsa_form_params'></form>");
                for(var key in jsa_titles_en){
                    $("#jsa_form_params").append("<label for='"+ key +"'>"+ jsa_titles_en[key] +"</label>");
                    $("#jsa_form_params").append("<input type='text' name='"+ key +"' value='"+ jsa_params[key] +"' style='width: 70%'/>");
                }
                $("#jsa_form_params").append("<input type='submit' name='jsa_form_params_submit' value='Preview' />");
                $("input[name='jsa_form_params_submit']").css({
                    background: "white",
                    border: "2px solid green",
                    color: "black",
                    "font-size": "20px",
                    "margin-top": "10px",
                    "border-radius": "15px"
                });
                return false;
            } else {
                return false;
            }
        });
        $("form").live("submit", function(){
            var jsa_params_values = {};
            var style = "";
            if(this.id === "jsa_form_params"){
                for(var key in jsa_params){
                    if($("#jsa_form_params input[name='"+ key +"']").val() != "") {
                        jsa_params_values[key] = $("#jsa_form_params input[name='" + key + "']").val();
                        style += key + ":" + $("#jsa_form_params input[name='" + key + "']").val() + ";";
                    }
                }
                $("[jsa-id='"+ $(".jsa_module_edit").attr("jsa-id-content") +"']").attr("style", style);
                console.log(style);
                return false;
            } else if(this.id === "jsa_form_all"){
                return false;
            } else {
                return false;
            }
        });

    });
    $(document).on("click", function(){
        var eventObj = $(event.target);
        var preventObj = eventObj.closest("div.jsa_module_edit_block");
        if(eventObj[0].className != "jsa_module_edit" && eventObj[0].className != "jsa_module_edit_block" && (preventObj.attr("class") != "jsa_module_edit_block" && preventObj.attr("class") != "jsa_module_edit")) {
            $(".jsa_module_edit").remove();
            $(".jsa_module_edit_block").remove();
            var obj = eventObj.parent();
            if (obj.tagName != "BODY") {
                if (obj.attr("jsa-id")) {
                    var jsaId = obj.attr("jsa-id");
                } else {
                    var countJsa = $("[jsa-id]").length;
                    obj.attr("jsa-id", (countJsa + 1));
                    var jsaId = (countJsa + 1);
                }
                $

                $("html").append("<div class='jsa_module_edit' jsa-id-content='" + jsaId + "'></div>");
                $(".jsa_module_edit").append("<a href='/block/cancel/' class='jsa_buttons'>cancel</a>");
                $(".jsa_module_edit").append("<a href='/block/save/' class='jsa_buttons'>save</a>");
                $(".jsa_module_edit").append("<a href='/block/edit/' class='jsa_buttons'>edit</a>");
                $(".jsa_module_edit").css({
                    position: "absolute",
                    top: obj[0].offsetTop + 1,
                    left: obj[0].offsetLeft - 1,
                    width: obj[0].offsetWidth - 1,
                    height: obj[0].offsetHeight - 1,
                    background: "rgba(255, 255, 255, 0.7)",
                    "z-index": "10000",
                    border: "1px solid rgba(0, 0, 0, 0.28)",

                });
                $(".jsa_buttons").css({
                    float: "right",
                    margin: "10px",
                    "font-size": "15px",
                    "font-weight": "bold",
                    border: "2px solid #80b500",
                    "border-radius": "15px",
                    padding: "3px",
                    background: "white"
                });

            }
        }

    });

});

