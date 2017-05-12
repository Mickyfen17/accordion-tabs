const header = document.getElementById('header-1');
const headers = document.querySelectorAll('h1');

headers.forEach((header, i) => {
  header.addEventListener('click', function(){
    if(this.nextElementSibling.classList.contains('show')) {
      this.nextElementSibling.classList.add('show')
    }
    tabsShown()
    this.nextElementSibling.classList.add('show')
    // const tabArticle = this.nextElementSibling;
    // if(tabArticle.classList.contains('show')) {
    //   tabArticle.classList.remove('show')
    // } else {
    //   tabsShown()
    //   tabArticle.classList.add('show')
    // }
  })
})

const tabsShown = () => {
  const tabs = document.querySelectorAll('article');
  tabs.forEach(tab => {
    if(tab.classList.contains('show')) {
      tab.classList.remove('show')
    }
  })
}