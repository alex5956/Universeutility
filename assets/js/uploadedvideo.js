    const progressBarFill = document.getElementsByClassName('progress');
    const progressBarText = document.getElementsByClassName('progress-bar');
    var uploadForm = document.getElementById("form2");
    inputFile=document.getElementsByClassName("custom-file-label");
    $("#search").click(function (){
        $("#search").attr('value',"");
    })


    uploadForm.addEventListener("submit", uploadFile);
    function uploadFile(e) {
        e.preventDefault();
        var inputFile = document.getElementById("user_file").files[0];
        console.log(inputFile);
        console.log(inputFile['name']);
        let uploadDataForm = new FormData();
        uploadDataForm.append('file', inputFile);
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/uploadAjax');
            xhr.upload.addEventListener('progress', e => {
                const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
                $(".progress-bar").width(percent + '%');
                $(".progress-bar").html(percent + '%');
            });
            xhr.send(uploadDataForm);
        } catch (error) {
            console.error(error);
        }
    }
