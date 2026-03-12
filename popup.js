async function fetchSolvedProblems(username) {

    const query = `
    query userProfileQuestions($username: String!) {
      matchedUser(username: $username) {
        userProfilePublicProfile {
          username
        }
      }
      recentSubmissionList(username: $username) {
        titleSlug
      }
    }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            variables: { username }
        })
    });

    const data = await response.json();

    const submissions = data.data.recentSubmissionList;

    const solved = submissions.map(s => s.titleSlug);

    chrome.storage.local.set({ solved });

    document.getElementById("status").innerText =
        "Synced " + solved.length + " problems!";
}



document.getElementById("sync").addEventListener("click", () => {

    const username = document.getElementById("username").value;

    fetchSolvedProblems(username);

});