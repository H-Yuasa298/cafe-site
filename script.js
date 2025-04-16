// 「メニューを見る」ボタンをクリックした際にメニューセクションへスムーズスクロールする
document.getElementById('viewMenu').addEventListener('click', function() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// お問い合わせフォームの送信処理（デモ用）
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('お問い合わせありがとうございます！');
  this.reset();
});
