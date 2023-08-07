import Swal from 'sweetalert2';
import axios from "axios";
export function alertConfirmation(msg) {
    Swal.fire({
        title: msg,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    });
}

export function alertError(titulo, mensaje) {
    Swal.fire({
        title: titulo,
        icon: 'error',
        text: mensaje,
    });
}

export function alertInfo(titulo, mensaje) {
    Swal.fire({
        title: titulo,
        icon: 'info',
        text: mensaje,
    });
}


export function alertDeleted(handleDeleted, id) {
    Swal.fire({
        title: 'Quieres borrar la imagen?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            handleDeleted(id)
            Swal.fire({
                text: "Borrando imagen...",
                didOpen: () => {
                    Swal.showLoading()

                },
                willClose: () => {
                    Swal.hideLoading()
                }
            })
        }

    })
}


export function closeAlert() {
    Swal.close();
}