export function redirectAlert(message, icon, url) {
    let timerInterval;
    Swal.fire({
        title: message,
        html: "Esta ventana se cierra en 2000 <b></b> milisegundos.",
        timer: 2000,
        timerProgressBar: true,
        icon,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            if (url) {
                window.location.href = url;
            }
        }
    });
}
