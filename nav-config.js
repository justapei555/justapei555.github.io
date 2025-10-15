// 所有页面导航配置 (只需维护这里)
//数据分析	📈 ⚖️ 📉 🧮 🔢
//战斗/属性	⚔️ 🛡️ 🔥 ❄️ ⚡ 🌊 🌪️
//名称/标签	🔤 📛 🎯 🗂️ 📌
//多语言/国际化	🗺️ 🔠 🇨🇳 🇯🇵 🇺🇸
//工具类	🔧 ⚙️ 🔍 📌 🗃️
//收藏/游戏	⭐ 🎮 🎲 🏆 🎴
//用户交互	👤 🔔 ❤️ ✉️ ⚡
const navConfig = {
    items: [
        { name: '综合', url: 'index.html', icon: '🏠' },
		{ name: '个体', url: 'pokemon_chinese.html', icon: '⚔️' },
        { name: '特性', url: 'ability.html', icon: '📄' },
		{ name: '名字', url: 'name.html', icon: '🔤' },
		{ name: '构造', url: 'tectonic.html', icon: '🧮' },
		{ name: '魂石', url: 'soulstones.html', icon: '🗃️' },
    ],
    settings: {
        hoverEffect: true,
        mobileBreakpoint: 768
    }
};