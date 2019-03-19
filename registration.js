function changeColor(color) {

    const blackFont = "#000000";
    const whiteFont = "#ffffff";

    let primaryColor = "#F44336";
    let secondaryColor = "#B71C1C";

    switch (color) {

        case 1:
            primaryColor = "#2196f3";
            secondaryColor = "#0d47a1";

            changeElementsByEvent(secondaryColor, primaryColor);
            changeColorScheme(primaryColor, whiteFont);
            break;

        case 2:
            primaryColor = "#80deea";
            secondaryColor = "#00acc1";

            changeElementsByEvent(secondaryColor, primaryColor);
            changeColorScheme(primaryColor, blackFont);
            break;

        case 3:
            primaryColor = "#ffeb3b";
            secondaryColor = "#f9a825";

            changeElementsByEvent(secondaryColor, primaryColor);
            changeColorScheme(primaryColor, blackFont);
            break;

        case 4:
            changeElementsByEvent(secondaryColor, primaryColor);
            changeColorScheme(primaryColor, whiteFont);
            break;

        case 5:
            primaryColor = $("#colorPicker").val();
            secondaryColor = '#128' + primaryColor.substring(1);
            changeElementsByEvent(secondaryColor, primaryColor);
            changeColorScheme(primaryColor, whiteFont);
            break;
    }
}

function changeElementsByEvent(color, colorDefault) {

    $(".form-control").focusin(function () {
        $(this).css("border-color", color);
    });

    $("input").focusout(function () {
        $(this).css("border-color", colorDefault);
    });

    $(".btn-success").hover(function () {
        $(this).css("background-color", color);
    }, function () {
        $(this).css("background-color", colorDefault);
    });

}

function changeColorScheme(primaryColor, primaryFontColor) {
    const mainSelectors = document.querySelectorAll('.modal-header, .btn-success, nav, a,' +
        ' .dropdown-menu > li >a ');
    const inputs = document.getElementsByTagName("input");
    const selects = document.getElementsByTagName("select");

    [].forEach.call(inputs, value => {
        value.style.borderColor = primaryColor;
    });

    [].forEach.call(selects, value => {
        value.style.borderColor = primaryColor;
    });

    mainSelectors.forEach(value => {
        value.style.backgroundColor = primaryColor;
        value.style.color = primaryFontColor;
    });
    document.getElementById("colorPicker").defaultValue = primaryColor;
    $("#white-font").css("color", "white");
    $("#black-font").css("color", "black");
}

function changeFont(value) {
    let fontColor = "black";
    if (value===1) {
        fontColor = "white";
    }
    const mainSelectors = document.querySelectorAll('.modal-header, .btn-success, nav, a,' +
        ' .dropdown-menu > li >a ');
    mainSelectors.forEach(value => {
        value.style.color = fontColor;
    });

    $("#white-font").css("color", "white");
    $("#black-font").css("color", "black");
}

