import getSig from "./getSig.js";

function displaySignature(): void {
    const form = document.querySelector('#formFio') as HTMLFormElement;
    const output = document.querySelector('#outputFio') as HTMLOutputElement;

    form?.addEventListener('submit', async (ev: SubmitEvent) => {
        ev.preventDefault();
        
        try {
            const signature = await getSig();
            output.textContent = signature;
            output.style.color = 'black';
        } catch (error) {
            if (error instanceof Error) {
                output.textContent = error.message;
                output.style.color = 'red';
            } else {
                output.textContent = 'Произошла неизвестная ошибка';
                output.style.color = 'red';
            }
        }
    });
}

export default displaySignature;