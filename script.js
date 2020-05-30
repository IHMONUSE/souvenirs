
// Объявление переменных //
var sections = document.querySelectorAll('.sec1:not(.pilka)')
var tos = document.querySelectorAll('.to')
var below = document.querySelector('.below')
var shop = document.querySelector('.shop')
var galleryPhotos = document.querySelectorAll('.a-photo-pilka:not(.full)')
var aShops = document.querySelectorAll('.a')
var sShops = document.querySelectorAll('.pilka')
var pokazs = document.querySelectorAll('.pokaz')
// .Объявление переменных //

// Ищет элементы и возвращает //
var find = function(nameFor) {
var item = document.querySelector(nameFor)
return item
}
// .Ищет элементы и возвращает //
// Меняет страницы и скролит до них //
for(let to of tos) {
  to.addEventListener('click', function (evt) {
  var a = 0
  for(let sShop of sShops) {if (!sShop.classList.contains('hidden')) {sShop.classList.add('hidden')}}
  if (to.textContent === 'О магазине'){
  focus = find('.aboutshop')}
  if (to.textContent === 'Условия доставки и оплаты'){
  focus = find('.conditionsdeliver')}
  if (to.textContent === 'Условия возврата товара'){
  focus = find('.conditionsreturn')}
  if (to.textContent === 'Оферта'){
  focus = find('.oferta')}
  if (to.textContent === 'Согласие на обработку персональных данных'){
  focus = find('.agreement')}
  if (to.textContent === 'Магазин' || to.classList.contains('bbuy') || to.classList.contains('img') || to.textContent === 'Вернуться в каталог'){
  focus = find('.shop'); a = 1}
  evt.preventDefault()

  for (let element of sections) {
    if (!element.classList.contains('hidden')) {element.classList.add('hidden')}
  }

  focus.classList.remove('hidden')
  below.insertBefore(focus,below.firstChild)

  var offset = 2;
  $('html, body').animate({
  scrollTop: $(focus).offset().top - offset
}, 0);

})
}
// .Меняет страницы и скролит до них //
var findGallerySection = function(anchor) {
  var galleries = document.querySelectorAll('.gallery')
  for (let gallery of galleries) {
    nowgallery = gallery
    var pictures = gallery.querySelectorAll('.a-photo-pilka')
    for(let picture of pictures) {if (picture.classList.contains(anchor)) {return gallery}}
  }
}
// Находит класс focus //
var findFocusAndDelete = function(section) {
var imgs = section.querySelectorAll('img')
for(let img of imgs) {if (img.classList.contains('focus')) {img.classList.remove('focus')}}
}
// .Находит класс focus //
// Меняет картинки в галереях //
for(let picture of galleryPhotos) {
picture.addEventListener('click',function(evt) {
evt.preventDefault()
picture.classList.add('onHere')
var theGallerySection = findGallerySection('onHere')
picture.classList.remove('onHere')
findFocusAndDelete(theGallerySection)
var theImg = picture.querySelector('img')
theImg.classList.add('focus')
var fullPhoto = theGallerySection.querySelector('.full-photo:not(.left)')
var fullPhotoleftt = theGallerySection.querySelector('.leftt')
var fullPhotoleft = theGallerySection.querySelector('.left')
if (fullPhoto.src != theImg.src ) {
if (fullPhotoleft) {
fullPhotoleft.src = theImg.src} else {fullPhotoleftt.src = theImg.src}
fullPhoto.style.transition = '100ms ease-in'
fullPhoto.style.transform += 'translateX(100%)'

setTimeout(poka,100)

function poka() {fullPhoto.style.transition = '0s'

if (fullPhotoleftt) {fullPhotoleftt.style.transition = '150ms ease-out'
fullPhotoleftt.style.transform += 'translate(0%,-101.15%)'} else {fullPhotoleft.style.transition = '150ms ease-out'
  fullPhotoleft.style.transform += 'translatex(100%)'}

setTimeout(privet,150)

function privet() {if (fullPhotoleftt) {fullPhotoleftt.style.transition = '0s'} else {fullPhotoleft.style.transition = '0s'}}
fullPhoto.style.transform += 'translateX(-200%)'

if (fullPhotoleftt) {fullPhotoleftt.classList.remove('leftt')} else {fullPhotoleft.classList.remove('left')}
fullPhoto.classList.add('left')}}
})
}
// .Меняет картинки в галереях //
for(let aShop of aShops) {
  aShop.classList.add('opaci')
aShop.addEventListener('click',function(evt) {

   evt.preventDefault()
   shop.classList.add('hidden')
   if (aShop.classList.contains('matreshka')) {var need = 's-matreshka'}
   if (aShop.classList.contains('plastic')) {var need = 's-plastic'}
   if (aShop.classList.contains('bogem')) {var need = 's-bogem'}
   if (aShop.classList.contains('moscow')) {var need = 's-moscow'}
   var needSection = document.querySelector('.'+need)
   var p = needSection.querySelector('p:nth-of-type(2)')
   var pokaz = needSection.querySelector('.pokaz')
   pokaz.style.fontSize = '100%'
   pokaz.style.position = null
   p.textContent = document.querySelector('.textdlyapilok').textContent
   p.classList.add('maintext')
   needSection.classList.remove('hidden')
   var offset = 2;
   $('html, body').animate({
   scrollTop: $(needSection).offset().top - offset
 }, 0);
   var children = needSection.children
   for (let child of children) {child.classList.add('opaci')}
})
}
// Показать полностью
var findSection = function() {
  for(let sShop of sShops) {

    var thepokaz = sShop.querySelector('.pokaz')
    if (thepokaz.classList.contains('that')) {return sShop}
  }
}
for (let pokaz of pokazs) {
  pokaz.addEventListener('click',function(evt) {
    evt.preventDefault()
    pokaz.classList.add('that')
    var section = findSection()
    pokaz.classList.remove('that')
    var p = section.querySelector('p:nth-of-type(2)')
    var parent = section.querySelector('.text')
    pokaz.style.transition = '0s'
    pokaz.style.fontSize = '0px'
    pokaz.style.position = 'absolute'
    p.classList.remove('maintext')

  })
}
