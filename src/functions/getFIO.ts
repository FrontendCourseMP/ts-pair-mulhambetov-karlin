
function getFIO(): Promise<{ lastName: string; firstName: string; surname: string }> {
    const form = document.querySelector('#formFio') as HTMLFormElement;
    const lastNameInput = document.querySelector('#inputLastName') as HTMLInputElement;
    const firstNameInput = document.querySelector('#inputFirstName') as HTMLInputElement;
    const surnameInput = document.querySelector('#inputSurname') as HTMLInputElement;

    return new Promise((resolve) => {
        form?.addEventListener('submit', (ev: SubmitEvent) => {
            ev.preventDefault();

            const lastName = lastNameInput?.value.trim() || '';
            const firstName = firstNameInput?.value.trim() || '';
            const surname = surnameInput?.value.trim() || '';

            resolve({
                lastName,
                firstName,
                surname,
            });
        });
    });
}

export default getFIO;