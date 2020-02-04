/*
    Statements

    for, if, else, continue, while, switch,
    break, throw, try e catch
*/

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec augue id odio vulputate pharetra sit amet vitae mi. Pellentesque eget facilisis mi. Ut condimentum purus in orci maximus pulvinar. Fusce aliquet egestas nibh ac ultrices. Maecenas at diam eu turpis luctus lacinia non at ex. Ut molestie magna id lectus cursus, at rutrum lectus pretium. Etiam auctor congue tortor, eu ullamcorper elit luctus vitae. Maecenas non lectus dui. Cras congue magna sed nulla aliquet accumsan. Nunc placerat ornare malesuada. Pellentesque risus elit, fringilla a purus vitae, scelerisque efficitur nulla. Donec lobortis tempus ullamcorper. In semper purus et metus eleifend, id elementum justo aliquet."

var HackerTextError = function (message) {
    this.message = message;
    this.name = "HackerTextError";
}

var toHackerCase = function (text) {
    if (!text) {
        throw new HackerTextError("Invalid Text");
    }
    if (typeof text !== "string") {
        throw new HackerTextError("Invalid type");
    }
    var hackerTextArray = [];
    var i = 0;
    while (i < text.length) {
        switch (text.charAt(i)) {
            case "o":
                hackerTextArray.push(0);
                break;
            case "l":
                hackerTextArray.push(1);
                break;
            case "e":
                hackerTextArray.push(3);
                break;
            case "a":
                hackerTextArray.push(4);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
                break;
        }
        i++;
    }
    return hackerTextArray.join("");
};

try {
    console.log(toHackerCase());
} catch (e) {
    console.log("Error: " + e.message + ". " + e.name);
}

try {
    console.log(toHackerCase(10));
} catch (e) {
    console.log("Error: " + e.message + ". " + e.name);
}

console.log(toHackerCase(text));