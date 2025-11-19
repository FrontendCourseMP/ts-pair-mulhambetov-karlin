import getFIO from "./getFIO.js"

interface ValidationResult {
    errors: string[];
    fioData?: {
        lastName: string;
        firstName: string;
        surname: string;
    };
}

async function validateFIO(): Promise<ValidationResult> {
    try {
        const fioData = await getFIO();
        const errors: string[] = [];

        if (!fioData.lastName) {
            errors.push("Фамилия обязательна для заполнения");
        } else if (!/^[А-ЯЁ][а-яё]*$/.test(fioData.lastName)) {
            errors.push("Фамилия должна начинаться с заглавной буквы и содержать только русские буквы");
        }

        if (!fioData.firstName) {
            errors.push("Имя обязательно для заполнения");
        } else if (!/^[А-ЯЁ][а-яё]*$/.test(fioData.firstName)) {
            errors.push("Имя должно начинаться с заглавной буквы и содержать только русские буквы");
        }

        if (fioData.surname) {
            if (!/^[А-ЯЁ][а-яё]*$/.test(fioData.surname)) {
                errors.push("Отчество должно начинаться с заглавной буквы и содержать только русские буквы");
            } else if (!/(ович|овна)$/i.test(fioData.surname)) {
                errors.push("Отчество должно заканчиваться на -ович или -овна");
            }
        }

        if (errors.length === 0) {
            return {
                errors: [],
                fioData
            };
        } else {
            return {
                errors,
                fioData
            };
        }

    } catch (error) {
        return {
            errors: ["Ошибка при получении данных формы"],
            fioData: undefined
        };
    }
}

export default validateFIO;