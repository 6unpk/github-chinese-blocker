setInterval(() => findChineseAndKill(), 500)
function findChineseAndKill() {
   const chineseRegExp = /[\u3000\u3400-\u4DBF\u4E00-\u9FFF]+/;
   function removeItem (e) {
      if (chineseRegExp.test(e.textContent)) {
         e.remove();
      }
   }

   const selectors = {
      'repository': 'ul > .repo-list-item',
      'issues_and_pull_request': 'div > .js-issue-row',
   };

   // repository
   Object.keys(selectors).map((key) => {
      document.querySelectorAll(selectors[key]).forEach(removeItem);
   });
}