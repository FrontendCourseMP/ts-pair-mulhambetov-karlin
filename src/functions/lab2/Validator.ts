export class ExpressionValidator {
    
    
    public static clean(expression: string): string {
        let cleaned = expression.replace(/\s+/g, '');
        cleaned = cleaned.replace(/[^0-9+*\.]/g, '');
        return cleaned;
    }

    public static isValid(expression: string): { valid: boolean; error: string } {
        
        if (expression === '') {
            return { valid: false, error: 'Пустое выражение' };
        }

        
        if (expression[0] === '+' || expression[0] === '*') {
            return { valid: false, error: 'Начинается с оператора' };
        }

       
        const last = expression[expression.length - 1];
        if (last === '+' || last === '*') {
            return { valid: false, error: 'Заканчивается на оператор' };
        }

        
        if (expression.includes('++') || expression.includes('**') || 
            expression.includes('+*') || expression.includes('*+')) {
            return { valid: false, error: 'Два оператора подряд' };
        }

        
        if (!/\d/.test(expression)) {
            return { valid: false, error: 'Нет чисел' };
        }

        return { valid: true, error: '' };
    }
}