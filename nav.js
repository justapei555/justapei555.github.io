document.addEventListener('DOMContentLoaded', () => {
    // 创建导航容器
    const nav = document.createElement('nav');
    nav.className = 'float-nav';

    // 生成导航项
    navConfig.items.forEach(item => {
        const isActive = window.location.pathname.endsWith(item.url);
        const link = document.createElement('a');
        link.className = `nav-link ${isActive ? 'active-nav' : ''}`;
        link.href = item.url;
        
        // 添加图标和文字
        link.innerHTML = `
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-text">${item.name}</span>
        `;
        
        nav.appendChild(link);
    });

    // 添加到页面
    document.body.appendChild(nav);

    // 移动端适配
    const updateMobileView = () => {
        if (window.innerWidth <= navConfig.settings.mobileBreakpoint) {
            nav.querySelectorAll('.nav-text').forEach(text => {
                text.style.display = 'none';
            });
        } else {
            nav.querySelectorAll('.nav-text').forEach(text => {
                text.style.display = 'inline';
            });
        }
    };

    window.addEventListener('resize', updateMobileView);
    updateMobileView();
});