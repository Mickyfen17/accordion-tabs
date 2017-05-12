const headers = document.querySelectorAll('h1');

headers.forEach((header, i) => {
  header.addEventListener('click', function(){
    // if(this.nextElementSibling.classList.contains('show')) {
    //   this.nextElementSibling.classList.add('show')
    // }
    // tabsShown()
    // this.nextElementSibling.classList.add('show')
    const tabArticle = this.nextElementSibling;
    if(tabArticle.classList.contains('show-tab')) {
      tabArticle.classList.remove('show-tab');
      this.classList.remove('show-header');
    } else {
      tabsShown()
      tabArticle.classList.add('show-tab');
      this.classList.add('show-header');

    }
  })
})

const tabsShown = function(){
  const tabs = document.querySelectorAll('article');
  tabs.forEach(tab => {
    if(tab.classList.contains('show-tab')) {
      tab.classList.remove('show-tab');
      tab.previousElementSibling.classList.remove('show-header');
    }
  })
}