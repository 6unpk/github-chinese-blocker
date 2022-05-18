setInterval(() => findChineseAndKill(), 500)
function findChineseAndKill() {
   document.querySelectorAll('ul > .repo-list-item').forEach((e) => {
      if (/[\u3000\u3400-\u4DBF\u4E00-\u9FFF]+/.test(e.textContent)) {
         e.remove();
      }
   });
}