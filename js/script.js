        function openModal() {
            var modal = document.getElementById('myModal');
            var img = document.getElementById('myImg');
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");

            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;

            // Cerrar el modal al hacer clic fuera de él
            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        }

        // Función para cerrar el modal
        function closeModal() {
            var modal = document.getElementById('myModal');
            modal.style.display = "none";
        }

        // Cerrar el modal al hacer clic en el botón de cierre
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() { 
            closeModal();
        }