import validateFIO from "./validateFIO.js";

function getSig(): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            const validationResult = await validateFIO();
            
            if (validationResult.errors.length > 0) {
                reject(new Error(validationResult.errors.join(", ")));
                return;
            }

            if (!validationResult.fioData) {
                reject(new Error("Данные ФИО отсутствуют"));
                return;
            }

            const { lastName, firstName, surname } = validationResult.fioData;
            
            const firstInitial = firstName.charAt(0).toUpperCase() + ".";
            
            const surnameInitial = surname ? surname.charAt(0).toUpperCase() + "." : "";
            
            const signature = `${lastName} ${firstInitial}${surnameInitial}`.trim();
            
            resolve(signature);
            
        } catch (error) {
            reject(error);
        }
    });
}

export default getSig;