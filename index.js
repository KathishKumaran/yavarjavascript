function switchCase(a){
    var result="";
    switch(a){
        case 1:
            result="alpha";
            break;
            case 2:
            result="beta";
            break;
            case 3:
            result="gamma";
            break;
            case 4:
            result="alpha1";
            break;
    }
    return result;

}
console.log(switchCase(2));

//Example2
function switchCase1(a){
    var result="";
    switch(a){
        case "a":
            result="apple";
            break;
            case "b":
            result="orange";
            break;
            case "c":
            result="pineapple";
            break;
            case "d":
            result="lemon";
            break;
            default:
                result="stuff"
    }
    return result;

}
console.log(switchCase1("b"));
console.log(switchCase1("t"));

//example 3
function switchCase3(a){
    var result="";
    switch(a){
        case 1:
            case 2:
                case 3:
            result="cow";
            break;
            case 4:
                case 5:
                    case 6:
            result="dog";
            break;
            case 7:
                case 8:
                    case 9:
            result="birds";
            break;
            default:
                result="insects";
                break;
    }
    return result;

}
console.log(switchCase3(7));