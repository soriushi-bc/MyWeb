document.addEventListener('DOMContentLoaded', () => {
    // 建立遮罩層,放在 body 最後面
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<img src="" alt="">';
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector('img');

    // 抓所有作品圖片,點擊時放大
    document.querySelectorAll('.photo-container img').forEach(img => {
        img.addEventListener('click', () => {
            overlayImg.src = img.src;
            overlayImg.alt = img.alt;
            overlay.classList.add('active');
        });
    });

    // 點遮罩層任何地方就關閉
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});