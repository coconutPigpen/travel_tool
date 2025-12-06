/**
 * 點擊清單項目時切換「完成/未完成」狀態
 * @param {HTMLElement} element - 被點擊的 li 元素
 */
function toggleDone(element) {
    element.classList.toggle('done');
    saveState();
}

/**
 * 載入本地儲存的狀態
 */
function loadState() {
    const savedState = localStorage.getItem('fukuokaItineraryState');
    if (savedState) {
        const state = JSON.parse(savedState);
        document.querySelectorAll('.task-list li').forEach((li, index) => {
            if (state[index]) {
                li.classList.add('done');
            }
        });
    }
}

/**
 * 儲存當前的狀態到本地儲存 (Local Storage)
 */
function saveState() {
    const state = [];
    document.querySelectorAll('.task-list li').forEach(li => {
        state.push(li.classList.contains('done'));
    });
    localStorage.setItem('fukuokaItineraryState', JSON.stringify(state));
}

// 頁面載入時，立即載入上次的打勾狀態
document.addEventListener('DOMContentLoaded', loadState);

// 提示：因為 Local Storage 是儲存在手機上的，
// 網頁部署到 GitHub 後，使用者點擊打勾的狀態會被保留！
