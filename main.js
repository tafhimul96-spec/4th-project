const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const jobList = document.getElementById("jobList");



document.querySelectorAll(".interviewBtn").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".job-card");
        card.dataset.status = "interview";
        updateCounts();
    });
});

document.querySelectorAll(".rejectBtn").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".job-card");
        card.dataset.status = "rejected";
        updateCounts();
    });
});

document.querySelectorAll(".deleteBtn").forEach(button => {
    button.addEventListener("click", function () {

        const card = this.closest(".job-card");
        card.remove();

        updateCounts();        
        filterJobs("all");     
    });
})



function updateCounts() {
    const jobCards = document.querySelectorAll(".job-card");

    let interview = 0;
    let rejected = 0;

    jobCards.forEach(card => {
        if (card.dataset.status === "interview") interview++;
        if (card.dataset.status === "rejected") rejected++;
    });

    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;
}



function filterJobs(status) {
    const jobCards = document.querySelectorAll(".job-card");
    let visibleCount = 0;

    jobCards.forEach(card => {
        if (status === "all" || card.dataset.status === status) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    showEmptyState(visibleCount);
}

function showEmptyState(count) {
    let noJob = document.getElementById("noJob");

    if (count === 0) {
        if (!noJob) {
            noJob = document.createElement("div");
            noJob.id = "noJob";
            noJob.className = "flex flex-col items-center justify-center py-16 text-center";

            noJob.innerHTML = `
                <img src="./img.png" 
                     alt="No Jobs" 
                     class="w-200 h-100 mb-4 opacity-70">

            `;

            jobList.appendChild(noJob);
        }
    } else {
        if (noJob) noJob.remove();
    }
}



allTab.addEventListener("click", () => filterJobs("all"));
interviewTab.addEventListener("click", () => filterJobs("interview"));
rejectedTab.addEventListener("click", () => filterJobs("rejected"));



updateCounts();