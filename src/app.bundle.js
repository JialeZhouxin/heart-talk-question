/*
 * app.bundle.js
 * ??????? file:// ?????????
 * ???src/data + src/core + src/ui + src/main
 */


const cards = [
    { id: 1, level: 1, category: 'couple', question: '今天我最让你开心的一个举动是什么？' },
    { id: 2, level: 1, category: 'couple', question: '你最喜欢我的哪个小习惯？' },
    { id: 3, level: 1, category: 'couple', question: '我们一起做过最有趣的事是什么？' },
    { id: 4, level: 1, category: 'couple', question: '你什么时候第一次对我心动？' },
    { id: 5, level: 1, category: 'couple', question: '用三个词形容我们的关系' },
    { id: 6, level: 1, category: 'couple', question: '你最喜欢我们一起做的哪件事？' },
    { id: 7, level: 1, category: 'couple', question: '今天有什么想和我分享的小事吗？' },
    { id: 8, level: 1, category: 'couple', question: '最近有什么让你开心的事？' },
    { id: 9, level: 1, category: 'couple', question: '你理想中的周末是怎样度过的？' },
    { id: 10, level: 1, category: 'couple', question: '如果能去任何地方旅行，你最想去哪里？' },
    { id: 11, level: 1, category: 'couple', question: '你最近看过最好的电影是什么？' },
    { id: 12, level: 1, category: 'couple', question: '最喜欢我做的哪道菜？' },

    { id: 13, level: 1, category: 'friend', question: '我们第一次见面时，你对我的印象是什么？' },
    { id: 14, level: 1, category: 'friend', question: '你最喜欢我们一起做的什么活动？' },
    { id: 15, level: 1, category: 'friend', question: '用三个词形容我们的友谊' },
    { id: 16, level: 1, category: 'friend', question: '最近有什么让你开心的小事？' },
    { id: 17, level: 1, category: 'friend', question: '最近有什么新鲜事想分享吗？' },
    { id: 18, level: 1, category: 'friend', question: '这周过得怎么样？' },
    { id: 19, level: 1, category: 'friend', question: '最近有什么新的爱好或兴趣？' },
    { id: 20, level: 1, category: 'friend', question: '推荐一本你最近喜欢的书' },

    { id: 21, level: 1, category: 'family', question: '家里最让你感到温暖的时刻是什么？' },
    { id: 22, level: 1, category: 'family', question: '你最喜欢家里的哪个传统？' },
    { id: 23, level: 1, category: 'family', question: '用三个词形容我们的家庭' },
    { id: 24, level: 1, category: 'family', question: '小时候家里最让你温暖的传统是什么？' },
    { id: 25, level: 1, category: 'family', question: '家人做的哪道菜让你最怀念？' },
    { id: 26, level: 1, category: 'family', question: '你最想和家人一起完成的一件事是什么？' },
    { id: 27, level: 1, category: 'family', question: '家里有什么有趣的故事？' },
    { id: 28, level: 1, category: 'family', question: '最近和家人有什么开心的时刻？' },

    { id: 29, level: 1, category: 'self', question: '今天最让你开心的小事是什么？' },
    { id: 30, level: 1, category: 'self', question: '用三个词形容现在的自己' },
    { id: 31, level: 1, category: 'self', question: '最近有什么新的发现或领悟？' },
    { id: 32, level: 1, category: 'self', question: '最近有什么让你感到有成就感的事情？' },
    { id: 33, level: 1, category: 'self', question: '今天有什么让你感恩的事情？' },
    { id: 34, level: 1, category: 'self', question: '如果可以学习一项新技能，你想学什么？' },
    { id: 35, level: 1, category: 'self', question: '最近有什么新的爱好或兴趣？' },
    { id: 36, level: 1, category: 'self', question: '这周有什么小确幸？' },

    { id: 37, level: 2, category: 'couple', question: '这段关系让你变成了什么样的人？' },
    { id: 38, level: 2, category: 'couple', question: '你觉得我们之间最健康的沟通方式是什么？' },
    { id: 39, level: 2, category: 'couple', question: '你希望我们一年后的关系是什么样的？' },
    { id: 40, level: 2, category: 'couple', question: '有什么是我做过让你感动但你没说过的事？' },
    { id: 41, level: 2, category: 'couple', question: '你觉得我们处理冲突的方式健康吗？' },
    { id: 42, level: 2, category: 'couple', question: '你什么时候第一次意识到你爱我？' },
    { id: 43, level: 2, category: 'couple', question: '做什么事让你感觉最被爱？' },
    { id: 44, level: 2, category: 'couple', question: '你理想中的亲密关系是什么样的？' },
    { id: 45, level: 2, category: 'couple', question: '在我面前，你什么时候感觉最自在？' },
    { id: 46, level: 2, category: 'couple', question: '在我们的关系中，你最感激的三个时刻是什么？' },
    { id: 47, level: 2, category: 'couple', question: '你童年最难忘的经历是什么？它如何影响了你？' },
    { id: 48, level: 2, category: 'couple', question: '你对未来的五年有什么样的憧憬？' },
    { id: 49, level: 2, category: 'couple', question: '你觉得我们之间最珍贵的特质是什么？' },
    { id: 50, level: 2, category: 'couple', question: '有什么话你一直想对我说，但还没说出口？' },
    { id: 51, level: 2, category: 'couple', question: '我们第一次约会时你在想什么？' },
    { id: 52, level: 2, category: 'couple', question: '我们一起经历的哪个挑战让你最骄傲？' },
    { id: 53, level: 2, category: 'couple', question: '你认为爱情中最重要的是什么？' },
    { id: 54, level: 2, category: 'couple', question: '什么让你感到真正的快乐和满足？' },

    { id: 55, level: 2, category: 'friend', question: '这段友谊让你变成了什么样的人？' },
    { id: 56, level: 2, category: 'friend', question: '有什么是你只愿意告诉我，不会告诉别人的？' },
    { id: 57, level: 2, category: 'friend', question: '你觉得真正的朋友应该是什么样的？' },
    { id: 58, level: 2, category: 'friend', question: '我们一起经历的最难忘的事是什么？' },
    { id: 59, level: 2, category: 'friend', question: '你希望我们五年后的友谊是什么样的？' },
    { id: 60, level: 2, category: 'friend', question: '你最珍视的友谊是怎样的？为什么它对你重要？' },
    { id: 61, level: 2, category: 'friend', question: '在你人生低谷时，是谁帮助了你？发生了什么？' },
    { id: 62, level: 2, category: 'friend', question: '你觉得我们之间的友谊最特别的地方是什么？' },
    { id: 63, level: 2, category: 'friend', question: '什么书或电影对你影响最深？' },
    { id: 64, level: 2, category: 'friend', question: '你如何定义成功？这个定义有过变化吗？' },
    { id: 65, level: 2, category: 'friend', question: '过去一年你最大的成长是什么？' },
    { id: 66, level: 2, category: 'friend', question: '你最大的优点和缺点分别是什么？' },

    { id: 67, level: 2, category: 'family', question: '成长过程中，我最让你骄傲的时刻是什么？' },
    { id: 68, level: 2, category: 'family', question: '有什么是你一直想感谢但我没说的？' },
    { id: 69, level: 2, category: 'family', question: '你觉得我们家最宝贵的价值观是什么？' },
    { id: 70, level: 2, category: 'family', question: '家里有什么变化让你感触最深？' },
    { id: 71, level: 2, category: 'family', question: '你希望我们家庭时间怎么度过？' },
    { id: 72, level: 2, category: 'family', question: '父母教给你最重要的人生道理是什么？' },
    { id: 73, level: 2, category: 'family', question: '你觉得家庭对你性格形成的最大影响是什么？' },
    { id: 74, level: 2, category: 'family', question: '你想对小时候的自己说什么？' },
    { id: 75, level: 2, category: 'family', question: '什么让你感到真正的快乐和满足？' },
    { id: 76, level: 2, category: 'family', question: '你对"家"的理解这些年有什么变化？' },

    { id: 77, level: 2, category: 'self', question: '你最喜欢自己的哪个特质？' },
    { id: 78, level: 2, category: 'self', question: '过去一年你最大的成长是什么？' },
    { id: 79, level: 2, category: 'self', question: '有什么是你一直想做但还没开始的？' },
    { id: 80, level: 2, category: 'self', question: '你理想中的一天是什么样的？' },
    { id: 81, level: 2, category: 'self', question: '什么让你感到最有意义？' },
    { id: 82, level: 2, category: 'self', question: '你人生中最艰难的决定是什么？你是如何做出的？' },
    { id: 83, level: 2, category: 'self', question: '什么让你感到真正的快乐和满足？' },
    { id: 84, level: 2, category: 'self', question: '你最大的优点和缺点分别是什么？' },
    { id: 85, level: 2, category: 'self', question: '过去一年你最大的成长是什么？' },
    { id: 86, level: 2, category: 'self', question: '什么书或电影对你影响最深？' },
    { id: 87, level: 2, category: 'self', question: '你如何定义成功？这个定义有过变化吗？' },
    { id: 88, level: 2, category: 'self', question: '最近有什么新的发现或领悟？' },
    { id: 89, level: 2, category: 'self', question: '你的长期目标是什么？' },
    { id: 90, level: 2, category: 'self', question: '什么能给你带来内心的平静？' },

    { id: 91, level: 3, category: 'couple', question: '你在这段关系里最害怕失去什么？' },
    { id: 92, level: 3, category: 'couple', question: '有什么是我做过让你受伤但你一直没说的？' },
    { id: 93, level: 3, category: 'couple', question: '你觉得我们之间最大的挑战是什么？' },
    { id: 94, level: 3, category: 'couple', question: '你准备好和我共度余生了吗？为什么？' },
    { id: 95, level: 3, category: 'couple', question: '如果我们的关系只能保留一个回忆，你选择什么？' },
    { id: 96, level: 3, category: 'couple', question: '你在这段关系里最需要什么，但一直没开口？' },
    { id: 97, level: 3, category: 'couple', question: '有什么是你担心我会离开的原因？' },
    { id: 98, level: 3, category: 'couple', question: '你希望我如何在你困难时支持你？' },
    { id: 99, level: 3, category: 'couple', question: '你对婚姻和承诺的看法是什么？' },
    { id: 100, level: 3, category: 'couple', question: '你害怕失去什么？这个恐惧如何影响你的生活？' },

    { id: 101, level: 1, category: 'couple', question: '最近一周里，我做的哪件小事让你感觉被在乎？' },
    { id: 102, level: 1, category: 'couple', question: '这周你希望我用哪一种方式陪伴你（聊天、拥抱、散步或安静待着）？' },
    { id: 103, level: 1, category: 'friend', question: '最近一次和我聊天时，哪个瞬间让你觉得被理解了？' },
    { id: 104, level: 1, category: 'friend', question: '如果你今天只想被倾听，你希望我怎么回应你？' },
    { id: 105, level: 1, category: 'family', question: '最近家里哪件小事让你感到温暖和安心？' },
    { id: 106, level: 1, category: 'family', question: '这周你最希望家人一起做的一件小事是什么？' },
    { id: 107, level: 1, category: 'self', question: '今天你最真实的感受是什么？它最接近开心、疲惫、焦虑还是平静？' },
    { id: 108, level: 1, category: 'self', question: '你现在最需要被满足的一件事是什么（休息、支持、空间或肯定）？' },

    { id: 109, level: 2, category: 'couple', question: '当我们意见不同时，你内心最希望被看见的需要是什么？' },
    { id: 110, level: 2, category: 'couple', question: '下次你情绪上来时，希望我先做什么会让你更有安全感？' },
    { id: 111, level: 2, category: 'friend', question: '当你压力很大时，你更需要建议、陪伴，还是只被安静地听见？' },
    { id: 112, level: 2, category: 'friend', question: '我们之间有没有一个沟通习惯，你希望我微调一下？' },
    { id: 113, level: 2, category: 'family', question: '在家庭沟通中，什么表达方式最容易让你觉得被评判？' },
    { id: 114, level: 2, category: 'family', question: '如果要让家里的沟通更顺畅，你希望先改变哪一件具体小事？' },
    { id: 115, level: 2, category: 'self', question: '你最近反复出现的一种情绪背后，可能在提醒你什么需要？' },
    { id: 116, level: 2, category: 'self', question: '当你对自己不满意时，你最希望如何对自己说话会更有力量？' },

    { id: 117, level: 3, category: 'couple', question: '在这段关系里，你最害怕我误解你的哪一部分？' },
    { id: 118, level: 3, category: 'couple', question: '如果我们为冲突建立一个“暂停-复盘”约定，你希望规则是什么？' },
    { id: 119, level: 3, category: 'friend', question: '当我们价值观不一致时，你希望我们如何既真诚又不伤关系地讨论？' },
    { id: 120, level: 3, category: 'friend', question: '如果有一天我们疏远了，你希望用什么方式重新连接彼此？' },
    { id: 121, level: 3, category: 'family', question: '家庭里有哪些旧模式你想终止？你希望从你这里开始什么新模式？' },
    { id: 122, level: 3, category: 'family', question: '当家庭期待和你个人选择冲突时，你希望被怎样理解与支持？' },
    { id: 123, level: 3, category: 'self', question: '你最深层的边界是什么？它过去在哪些时刻被忽视过？' },
    { id: 124, level: 3, category: 'self', question: '如果你要对未来一年的自己提出一个“温柔但坚定”的请求，那会是什么？' },

    { id: 125, level: 1, category: 'clear_thinking', question: '这件事里，我现在最强烈的第一反应是什么？' },
    { id: 126, level: 1, category: 'clear_thinking', question: '我此刻看到的事实是什么，不带解释会怎样描述？' },
    { id: 127, level: 1, category: 'clear_thinking', question: '如果先暂停十分钟再决定，结果会改变吗？' },
    { id: 128, level: 1, category: 'clear_thinking', question: '我现在更想“证明自己对”，还是“解决问题”？' },
    { id: 129, level: 1, category: 'clear_thinking', question: '今天最值得我认真思考的一件事是什么？' },
    { id: 130, level: 1, category: 'clear_thinking', question: '我现在的情绪可能在放大哪一种担心？' },
    { id: 131, level: 1, category: 'clear_thinking', question: '如果只能问一个关键问题，我会问什么？' },
    { id: 132, level: 1, category: 'clear_thinking', question: '此刻我最需要补充的关键信息是什么？' },

    { id: 133, level: 2, category: 'clear_thinking', question: '这个决定是一阶收益明显，还是二阶代价更大？' },
    { id: 134, level: 2, category: 'clear_thinking', question: '我是否只在寻找支持自己观点的证据？' },
    { id: 135, level: 2, category: 'clear_thinking', question: '如果我是旁观者，我会给自己什么建议？' },
    { id: 136, level: 2, category: 'clear_thinking', question: '这次判断里，哪些是事实，哪些是我的推测？' },
    { id: 137, level: 2, category: 'clear_thinking', question: '如果三个月后回看今天，我会后悔忽略什么？' },
    { id: 138, level: 2, category: 'clear_thinking', question: '这是可逆决策还是不可逆决策？我该投入多少谨慎度？' },
    { id: 139, level: 2, category: 'clear_thinking', question: '我是不是因为已经投入太多而不愿止损？' },
    { id: 140, level: 2, category: 'clear_thinking', question: '为了更稳妥，我现在可以做哪个最小验证实验？' },
    { id: 141, level: 2, category: 'clear_thinking', question: '在这个问题上，我的盲点最可能出现在哪里？' },

    { id: 142, level: 3, category: 'clear_thinking', question: '这个选择背后，我真正长期想成为怎样的人？' },
    { id: 143, level: 3, category: 'clear_thinking', question: '哪些习惯性反应正在重复消耗我的判断力？' },
    { id: 144, level: 3, category: 'clear_thinking', question: '我该建立什么规则，避免在情绪高峰时做重大决定？' },
    { id: 145, level: 3, category: 'clear_thinking', question: '这件事的机会成本是什么？我在用什么交换什么？' },
    { id: 146, level: 3, category: 'clear_thinking', question: '如果结果失败，我希望复盘时能回答哪三个问题？' },
    { id: 147, level: 3, category: 'clear_thinking', question: '我是否把“熟悉”误当成了“正确”？' },
    { id: 148, level: 3, category: 'clear_thinking', question: '为了长期更清晰地思考，我该停止哪一个旧模式？' },
    { id: 149, level: 3, category: 'clear_thinking', question: '我愿意从今天开始坚持哪一个清晰思考习惯？' }
        ];


function filterCards(cards, category, level) {
    return cards.filter((card) => {
        const categoryMatched = category === 'all' || card.category === category;
        const levelMatched = level === 'all' || String(card.level) === String(level);
        return categoryMatched && levelMatched;
    });
}

function drawRandomCard(cards) {
    if (!cards.length) return null;
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}


const HISTORY_KEY = 'heartTalkHistory';

function loadHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveHistory(history) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        return true;
    } catch {
        return false;
    }
}

function clearHistoryStore() {
    try {
        localStorage.removeItem(HISTORY_KEY);
        return true;
    } catch {
        return false;
    }
}


function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function renderCard({ currentCard, categoryNames, levelNames, elements }) {
    const {
        emptyState,
        cardContent,
        cardCategory,
        cardLevel,
        cardQuestion,
        saveBtn,
        shareBtn
    } = elements;

    if (!currentCard) {
        emptyState.style.display = 'block';
        cardContent.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    cardContent.style.display = 'block';
    cardCategory.textContent = categoryNames[currentCard.category] || currentCard.category;
    cardLevel.textContent = levelNames[String(currentCard.level)] || `第${currentCard.level}级`;
    cardLevel.className = `card-level level-${currentCard.level}`;
    cardQuestion.textContent = currentCard.question;
    saveBtn.style.display = 'inline-block';
    shareBtn.style.display = 'inline-block';
}

function renderHistory({ history, levelNames, historyList }) {
    historyList.replaceChildren();

    if (!history.length) {
        const empty = createElement('div', 'empty-state');
        empty.appendChild(createElement('p', '', '暂无对话记录'));
        historyList.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    history.forEach((item) => {
        const wrapper = createElement('div', 'history-item');
        wrapper.appendChild(createElement('div', 'timestamp', item.timestamp));

        const badge = createElement('span', `level-badge level-${item.card.level}`);
        badge.textContent = levelNames[String(item.card.level)] || `第${item.card.level}级`;
        wrapper.appendChild(badge);

        wrapper.appendChild(createElement('div', 'question', item.card.question));
        wrapper.appendChild(createElement('div', 'answer', item.answer));
        fragment.appendChild(wrapper);
    });

    historyList.appendChild(fragment);
}



const state = {
    currentCard: null,
    currentCategory: 'all',
    currentLevel: 'all',
    history: loadHistory()
};

const UI_TIMING = {
    toastVisibleMs: 1800,
    toastExitMs: 180
};

const THEME_KEY = 'heartTalkTheme';
const THEME_CHOICES = ['forest', 'warm', 'dark'];
const THEME_LABELS = {
    forest: '\u6d45\u7eff\u68ee\u6797',
    warm: '\u6696\u7eb8\u6cbb\u6108',
    dark: '\u591c\u95f4\u62a4\u773c'
};

const elements = {
    cardContainer: document.getElementById('cardContainer'),
    emptyState: document.getElementById('emptyState'),
    cardContent: document.getElementById('cardContent'),
    cardCategory: document.getElementById('cardCategory'),
    cardLevel: document.getElementById('cardLevel'),
    cardQuestion: document.getElementById('cardQuestion'),
    drawBtn: document.getElementById('drawBtn'),
    saveBtn: document.getElementById('saveBtn'),
    shareBtn: document.getElementById('shareBtn'),
    historyList: document.getElementById('historyList'),
    saveModal: document.getElementById('saveModal'),
    shareModal: document.getElementById('shareModal'),
    saveModalQuestion: document.getElementById('saveModalQuestion'),
    answerInput: document.getElementById('answerInput'),
    confirmSaveBtn: document.getElementById('confirmSaveBtn'),
    cancelSaveBtn: document.getElementById('cancelSaveBtn'),
    shareQuestion: document.getElementById('shareQuestion'),
    shareAnswer: document.getElementById('shareAnswer'),
    copyShareBtn: document.getElementById('copyShareBtn'),
    closeShareBtn: document.getElementById('closeShareBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    categoryFilters: document.getElementById('categoryFilters'),
    levelFilters: document.getElementById('levelFilters'),
    toastContainer: document.getElementById('toastContainer'),
    confirmModal: document.getElementById('confirmModal'),
    confirmMessage: document.getElementById('confirmMessage'),
    confirmOkBtn: document.getElementById('confirmOkBtn'),
    confirmCancelBtn: document.getElementById('confirmCancelBtn'),
    themeSelector: document.getElementById('themeSelector')
};

function buildNamesMap(selector, dataKey) {
    const map = {};
    document.querySelectorAll(selector).forEach((btn) => {
        const key = btn.dataset[dataKey];
        if (key && key !== 'all') {
            map[key] = btn.textContent.trim();
        }
    });
    return map;
}

const categoryNames = buildNamesMap('#categoryFilters .filter-btn', 'category');
const levelNames = buildNamesMap('#levelFilters .filter-btn', 'level');

function getSavedAnswerForCurrentCard() {
    if (!state.currentCard) return '';
    const item = state.history.find((entry) => entry.card.id === state.currentCard.id);
    return item ? item.answer : '';
}

function refreshCardView() {
    renderCard({
        currentCard: state.currentCard,
        categoryNames,
        levelNames,
        elements
    });
}

function refreshHistoryView() {
    renderHistory({
        history: state.history,
        levelNames,
        historyList: elements.historyList
    });
}

function getStoredTheme() {
    const value = localStorage.getItem(THEME_KEY);
    return THEME_CHOICES.includes(value) ? value : 'forest';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (!elements.themeSelector) return;
    elements.themeSelector.querySelectorAll('[data-theme-choice]').forEach((button) => {
        const active = button.dataset.themeChoice === theme;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

function setTheme(theme) {
    if (!THEME_CHOICES.includes(theme)) return;
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
    showToast(`\u5df2\u5207\u6362\u5230${THEME_LABELS[theme]}\u98ce\u683c\u3002`, 'success');
}

function showToast(message, type = 'info') {
    const oldToasts = elements.toastContainer.querySelectorAll('.toast');
    if (oldToasts.length >= 2) {
        oldToasts[0].remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : type === 'success' ? 'toast-success' : ''}`.trim();
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-hide');
        setTimeout(() => {
            toast.remove();
        }, UI_TIMING.toastExitMs);
    }, UI_TIMING.toastVisibleMs);
}

function showConfirm(message) {
    return new Promise((resolve) => {
        elements.confirmMessage.textContent = message;
        elements.confirmModal.classList.add('active');

        const cleanUp = () => {
            elements.confirmModal.classList.remove('active');
            elements.confirmOkBtn.removeEventListener('click', onConfirm);
            elements.confirmCancelBtn.removeEventListener('click', onCancel);
            elements.confirmModal.removeEventListener('click', onOverlayClick);
            document.removeEventListener('keydown', onKeyDown);
        };

        const onConfirm = () => {
            cleanUp();
            resolve(true);
        };

        const onCancel = () => {
            cleanUp();
            resolve(false);
        };

        const onOverlayClick = (event) => {
            if (event.target === elements.confirmModal) {
                onCancel();
            }
        };

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                onCancel();
            }
        };

        elements.confirmOkBtn.addEventListener('click', onConfirm);
        elements.confirmCancelBtn.addEventListener('click', onCancel);
        elements.confirmModal.addEventListener('click', onOverlayClick);
        document.addEventListener('keydown', onKeyDown);
    });
}

function drawCard() {
    const filtered = filterCards(cards, state.currentCategory, state.currentLevel);
    if (!filtered.length) {
        showToast('当前筛选条件下没有可用卡牌，请调整筛选后重试。', 'error');
        return;
    }

    state.currentCard = drawRandomCard(filtered);
    refreshCardView();
    elements.cardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openSaveModal() {
    if (!state.currentCard) return;
    elements.saveModalQuestion.textContent = state.currentCard.question;
    elements.answerInput.value = '';
    elements.saveModal.classList.add('active');
    elements.answerInput.focus();
}

function closeSaveModal() {
    elements.saveModal.classList.remove('active');
}

function saveAnswer() {
    if (!state.currentCard) return;

    const answer = elements.answerInput.value.trim();
    if (!answer) {
        showToast('请先输入你的回答。', 'error');
        return;
    }

    const historyItem = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('zh-CN'),
        card: state.currentCard,
        answer
    };

    state.history.unshift(historyItem);
    if (!saveHistory(state.history)) {
        showToast('保存失败，请检查浏览器存储权限。', 'error');
        return;
    }

    refreshHistoryView();
    closeSaveModal();
    showToast('回答已保存。', 'success');
}

function openShareModal() {
    if (!state.currentCard) return;

    elements.shareQuestion.textContent = state.currentCard.question;
    const answer = getSavedAnswerForCurrentCard() || '（点击“保存回答”后可展示你的回答）';
    elements.shareAnswer.textContent = answer;
    elements.shareModal.classList.add('active');
}

function closeShareModal() {
    elements.shareModal.classList.remove('active');
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    let ok = false;
    try {
        ok = document.execCommand('copy');
    } catch {
        ok = false;
    }

    document.body.removeChild(textarea);
    return ok;
}

async function copyShareLink() {
    if (!state.currentCard) return;

    const text = `心语卡牌\n\n${state.currentCard.question}\n\n来自心语卡牌`;

    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            showToast('已复制到剪贴板。', 'success');
            return;
        }

        if (fallbackCopy(text)) {
            showToast('已复制到剪贴板。', 'success');
            return;
        }

        showToast('复制失败，请手动复制。', 'error');
    } catch {
        if (fallbackCopy(text)) {
            showToast('已复制到剪贴板。', 'success');
            return;
        }
        showToast('复制失败，请手动复制。', 'error');
    }
}

async function clearHistory() {
    const confirmed = await showConfirm('确定要清空所有历史记录吗？此操作不可恢复。');
    if (!confirmed) return;

    state.history = [];
    clearHistoryStore();
    refreshHistoryView();
    showToast('历史记录已清空。', 'success');
}

function setActiveFilterButton(container, target) {
    if (!target.classList.contains('filter-btn')) return;
    container.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
    target.classList.add('active');
}

function setupEventListeners() {
    elements.drawBtn.addEventListener('click', drawCard);
    elements.saveBtn.addEventListener('click', openSaveModal);
    elements.shareBtn.addEventListener('click', openShareModal);
    elements.confirmSaveBtn.addEventListener('click', saveAnswer);
    elements.cancelSaveBtn.addEventListener('click', closeSaveModal);
    elements.closeShareBtn.addEventListener('click', closeShareModal);
    elements.copyShareBtn.addEventListener('click', copyShareLink);
    elements.clearHistoryBtn.addEventListener('click', clearHistory);
    elements.themeSelector.addEventListener('click', (event) => {
        const button = event.target.closest('[data-theme-choice]');
        if (!button) return;
        setTheme(button.dataset.themeChoice);
    });

    elements.categoryFilters.addEventListener('click', (event) => {
        setActiveFilterButton(elements.categoryFilters, event.target);
        if (event.target.dataset.category) {
            state.currentCategory = event.target.dataset.category;
        }
    });

    elements.levelFilters.addEventListener('click', (event) => {
        setActiveFilterButton(elements.levelFilters, event.target);
        if (event.target.dataset.level) {
            state.currentLevel = event.target.dataset.level;
        }
    });

    elements.saveModal.addEventListener('click', (event) => {
        if (event.target === elements.saveModal) closeSaveModal();
    });

    elements.shareModal.addEventListener('click', (event) => {
        if (event.target === elements.shareModal) closeShareModal();
    });
}

function init() {
    applyTheme(getStoredTheme());
    refreshCardView();
    refreshHistoryView();
    setupEventListeners();
}

init();
