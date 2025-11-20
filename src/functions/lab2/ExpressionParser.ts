
export class ExpressionParser {
    private expression: string;
    private index: number;

    constructor(expression: string) {
        this.expression = expression;
        this.index = 0;
    }

    public calculate(): number {
        this.index = 0;
        return this.sum();
    }

    private sum(): number {
        let result = this.multiply();

        while (this.index < this.expression.length && this.expression[this.index] === '+') {
            this.index++;
            result += this.multiply();
        }

        return result;
    }

    private multiply(): number {
        let result = this.getNumber();

        while (this.index < this.expression.length && this.expression[this.index] === '*') {
            this.index++;
            result *= this.getNumber();
        }

        return result;
    }

    private getNumber(): number {
        let numStr = '';

        while (this.index < this.expression.length) {
            const char = this.expression[this.index];
            
            if (char && (char >= '0' && char <= '9' || char === '.')) {
                numStr += char;
                this.index++;
            } else {
                break;
            }
        }

        return parseFloat(numStr);
    }
}