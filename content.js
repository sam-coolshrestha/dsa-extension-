function saveSolvedProblem(slug) {

    chrome.storage.local.get(["solved"], (data) => {

        let solved = data.solved || [];

        if (!solved.includes(slug)) {

            solved.push(slug);

            chrome.storage.local.set({ solved });

            console.log("Saved:", slug);
        }
    });
}


// Detect solved problem on LeetCode
function detectLeetCodeSolve() {

    if (!window.location.href.includes("leetcode.com/problems")) return;

    const slug = window.location.pathname.split("/")[2];

    setTimeout(() => {

        const accepted = document.body.innerText.includes("Accepted");

        if (accepted) {
            saveSolvedProblem(slug);
        }

    }, 4000);
}

detectLeetCodeSolve();



// Mark solved problems on Striver Sheet
function markStriverSolved() {

    if (!window.location.href.includes("takeuforward")) return;

    chrome.storage.local.get(["solved"], (data) => {

        const solved = data.solved || [];

        const links = document.querySelectorAll('a[href*="leetcode.com/problems"]');

        links.forEach(link => {

            const slug = link.href
                .split("/problems/")[1]
                .split("/")[0];   // safer slug extraction

            if (solved.includes(slug)) {

                const row = link.closest("tr");

                if (row) {

                    row.style.backgroundColor = "#173f17";

                    const firstCell = row.querySelector("td");

                    if (firstCell && !firstCell.innerText.includes("✔")) {

                        firstCell.innerHTML = "✔";
                    }
                }
            }
        });
    });
}



// Wait for React page to fully render
function waitForStriverTable() {

    const observer = new MutationObserver(() => {

        const table = document.querySelector("table");

        if (table) {

            observer.disconnect();

            markStriverSolved();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

waitForStriverTable();