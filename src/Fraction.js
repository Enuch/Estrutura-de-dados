class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    multiplies(fracao) {
        this.numerator = this.numerator * fracao.numerator;
        this.denominator = this.denominator * fracao.denominator;
        return this
    }

    division(fracao) {
        this.numerator = this.numerator * fracao.denominator;
        this.denominator = this.denominator * fracao.numerator;
        return this
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }

}

export default Fraction;