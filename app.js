const headers = document.querySelectorAll('.tab-header');

headers.forEach((header, i) => {
  header.addEventListener('click', function(){
    const tabArticle = this.nextElementSibling;
    if (tabArticle.classList.contains('show-tab')) {
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
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    if (tab.classList.contains('show-tab')) {
      tab.classList.remove('show-tab');
      tab.previousElementSibling.classList.remove('show-header');
    }
  })
}

window.onload = () => {
  if (window.innerWidth > 500) {
    document.getElementById('tab1').classList.add('show-tab');
    document.querySelector('.tab-header').classList.add('show-header');
  }
}


