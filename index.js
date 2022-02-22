function toPower(number, exp) {
    if(exp === 1) {
        return number;
    }
    else if(exp > 1) {
        return number * toPower(number, exp - 1);
    }

    else if(exp < 1 && exp !== 0) { // negative numbers
        return 1/(number * toPower(number, (exp * -1) - 1));
    }
}