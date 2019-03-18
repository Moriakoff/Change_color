function changeColor(color) {
    const mainSelectors = document.querySelectorAll('.modal-header, .btn-success, nav, a, .dropdown-menu > li >a ');
    const inputs = document.getElementsByTagName("input");
    const selects = document.getElementsByTagName("select");

    if (color === 1) {

        [].forEach.call(inputs, value => {
            value.style.borderColor = "#42a5f5"
        });

        [].forEach.call(selects, value => {
            value.style.borderColor = "#42a5f5"
        });

        mainSelectors.forEach(value => {
            value.style.backgroundColor = "#2196f3";
            value.style.color = "#ffffff";
        });
    }

    if (color === 2) {

        [].forEach.call(inputs, value => {
            value.style.borderColor = "#00bcd4"
        });

        [].forEach.call(selects, value => {
            value.style.borderColor = "#00bcd4"
        });

        mainSelectors.forEach(value => {
            value.style.backgroundColor = "#00bcd4";
            value.style.color = "black";
        });
    }


    if (color === 3) {

        [].forEach.call(inputs, value => {
            value.style.borderColor = "#d4e157"
        });

        [].forEach.call(selects, value => {
            value.style.borderColor = "#d4e157"
        });

        mainSelectors.forEach(value => {
            value.style.backgroundColor = "#cddc39";
            value.style.color = "black";
        });
    }
    if (color === 4) {

        [].forEach.call(inputs, value => {
            value.style.borderColor = "#F44336"
        });

        [].forEach.call(selects, value => {
            value.style.borderColor = "#F44336"
        });

        mainSelectors.forEach(value => {
            value.style.backgroundColor = "#F44336";
            value.style.color = "#ffffff";
        });
    }


}
