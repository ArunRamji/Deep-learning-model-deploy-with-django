async function saveFile()
{
    let formData = new FormData();
    formData.append("file", file.files[0]);
    await fetch('http://127.0.0.1:8000/file/upload/', {method: "POST", body: formData});
    alert("Data Uploaded: ");
}