
$(document).ready(() => {
  $("#files").on("change", (e) => {
    const files = $("#files")[0].files;
    const outputFiles = $("#output-files");
    if (files.length > 0) {
      let filesString = '';
      for (const file of files) {
        filesString += `<img class="output-img m-2" src="${URL.createObjectURL(
          file
        )}">`;
      }
      outputFiles.html(filesString);
    }
  });
});

