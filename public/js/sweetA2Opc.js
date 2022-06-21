$("#eliminarSTFcrear").click(function () {
	Swal.fire({
		title: 'Estas seguro?',
		text: "Esta acción no se podrá revertir!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#4984',
		cancelButtonColor: '#d33',
		confirmButtonText: 'SI, ELIMINAR!'
	  }).then((result) => {
		if (result.isConfirmed) {
		  Swal.fire(
			'Deleted!',
			'ELIMINADO EXITOSAMENTE.',
			'success'
		  )
		}
	  })

});

