
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    return `${text1}${text2}`
}
const showChar5 = (text) => {
    return text[4]
}
const showChar9 = (text) => {
    return text.slice(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim()
}
const IsString = (text) => {
    return typeof (text) == "string"
}

const getExtension = (text) => {
    let index = text.indexOf(".") + 1
    return text.slice(index, text.length)
}
const countSpaces = (text) => {
    let array = text.split("");
    let sum = 0
    const count = array.reduce((accumulator, currentValue) => {
        if (currentValue == " ") {
            return accumulator + 1
        }
        else {
            return accumulator
        }
    }, sum);
    return count
}
const InverseString = (text) => {
    let arr = text.split("");
    let reverseArr = arr.reverse();
    return reverseArr.join("")
}

const power = (x, y) => {
    return Math.pow(x, y)
}
const absoluteValue = (num) => {
    return Math.abs(num)
}
const absoluteValueArray = (array) => {
    let absoluteArray = array.map((num) => Math.abs(num))
    return absoluteArray
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius, 2))
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2))
}
const BMI = (weight, height) => {
    let num = weight / (height * height);
    return parseFloat(num.toFixed(2))
}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

const createNumbersArray = () => {
    return [0, 1, 2, 3, 4, 5]
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby', 'Python')
    return languages
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1)
    return numbers;
}


const removeFirst = (languages) => {
    languages.shift(0)
    return languages
}

const removeLast = (languages) => {
languages.pop()
return languages
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",")

}

const convertArrToStr = (languages) => {
return languages.join(",")
}

const sortArr = (social_arr) => {
    return social_arr.sort()

}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}