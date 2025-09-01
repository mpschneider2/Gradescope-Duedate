window.addEventListener('load', function() {
    document.querySelector("#assignments-student-table > thead > tr > th.table--complexHeader.sorting-right.sorting.sorting_desc").click();
    chrome.storage.sync.get("showCompleted", function(data) {
        if (data.showCompleted === undefined) {
            Array.from(document.getElementsByClassName("submissionStatus-complete")).forEach((el)=>{el.closest("tr").style.display="none"});
        } else {
            Array.from(document.getElementsByClassName("submissionStatus-complete")).forEach((el)=>{el.closest("tr").style.display=((data.showCompleted) ? "" : "none")});
        }
    })
});