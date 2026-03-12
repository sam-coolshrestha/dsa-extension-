# DSA Sync Tracker 🚀

A Chrome Extension that automatically synchronizes your solved **LeetCode problems** with **Striver's A2Z DSA Sheet**.

This helps DSA learners track their progress without manually marking solved problems.

---

## ✨ Features

* ✅ Detects **Accepted submissions on LeetCode**
* 🔄 Automatically **marks solved problems on Striver Sheet**
* 📊 Shows **total solved problems in extension popup**
* 👤 Allows syncing solved problems using **LeetCode username**
* 🎯 Highlights solved problems directly in the Striver A2Z sheet

---

## 🖥️ Demo Workflow

1. Solve a problem on **LeetCode**
2. The extension stores the solved problem slug
3. Open **Striver A2Z Sheet**
4. The solved problem is automatically marked ✔

---

## 📂 Project Structure

```
dsa-sync-extension
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
└── README.md
```

---

## ⚙️ Installation (Developer Mode)

1. Clone the repository

```
git clone https://github.com/your-username/dsa-sync-extension.git
```

2. Open Chrome and go to

```
chrome://extensions
```

3. Enable **Developer Mode**

4. Click **Load Unpacked**

5. Select the project folder

The extension will now appear in your browser.

---

## 🚀 Usage

### Method 1 — Automatic Tracking

1. Open any LeetCode problem
2. Submit an **Accepted solution**
3. The extension saves the problem slug
4. Open **Striver A2Z Sheet**
5. The problem will automatically be marked ✔

---

### Method 2 — Username Sync

1. Click the extension icon
2. Enter your **LeetCode username**
3. Click **Sync Problems**
4. Your recent solved problems will be imported

---

## 🧠 How It Works

The extension uses:

* **Chrome Extension APIs**
* **DOM parsing**
* **LeetCode GraphQL API**
* **Local storage**

Workflow:

```
LeetCode Accepted Submission
        ↓
Extract problem slug
        ↓
Save in chrome.storage
        ↓
Open Striver Sheet
        ↓
Match slug and mark problem ✔
```

---

## 🛠️ Tech Stack

* JavaScript
* Chrome Extension API (Manifest V3)
* HTML / CSS
* DOM Manipulation
* LeetCode GraphQL API

---

## 📌 Future Improvements

Planned upgrades:

* 📊 Topic-wise DSA progress tracker
* 🔁 Revision reminders
* 🔥 Daily problem solving streak
* 📈 Progress analytics dashboard
* Support for **NeetCode 150 / Blind 75**

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this extension:

1. Fork the repository
2. Create a new branch
3. Submit a pull request

---

## 📜 License

This project is open source and available under the **MIT License**.

---

## 👩‍💻 Author

**Samridhi Kulshrestha**
