// let lang = document.querySelectorAll('.header__choose')
// let currentLocation = location.href;
// let menu = document.querySelectorAll('.menu__link');
// let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

// lang.forEach(c => {

// 	c.addEventListener('click', function () {
// 		lang.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')
// 	})

// })

// Для многостраничной страницы

// for (let i = 0; i < menuLength; i++) {
// 	if (menu[i].href === currentLocation) {
// 		menu[i].classList.add("active");
// 	}
// }
let burger = document.querySelector('.menu__icon')
let iconMenu = document.querySelector('.menu__body')

if (burger) {
	burger.addEventListener('click', function(e) {
		document.body.classList.toggle('lock')
		burger.classList.toggle('active')
		iconMenu.classList.toggle('active')
	})
}
// let catalogSection = document.querySelector(".section-catalog");

// let removeChildren = function(item) {
// 	while(item.firstChild) {
// 		item.removeChild(item.firstChild);
// 	}
// }

// let pushChild = function(item, children) {
// 	removeChildren(item)
// 	for (let i = 0; i < children.length; i++) {
// 		item.appendChild(children[i]);
// 	}
// }

// let catalogRow = catalogSection.querySelector('.pizza__row');
// let catalogItem = catalogSection.querySelectorAll('.pizza__column');
// let catalogNav = catalogSection.querySelector('.menu-catalog__nav');

// catalogNav.addEventListener('click', function(e) {
// 	let target = e.target;
// 	let catalogBtn = target.closest('.menu-catalog__item')

// 	if(catalogBtn === null || catalogBtn.classList.contains('.menu-catalog__item.active')) {
// 		return;
// 	}

// 	let btnValue = catalogBtn.getAttribute('data-filter')

// 	if(btnValue === 'all') {
// 		pushChild(catalogRow, catalogItem);
// 		return;
// 	}

// 	let filterValue = [];
// 	for (let i = 0; i < catalogItem.length; i++) {
// 		const curent = catalogItem[i];
// 		if(curent.getAttribute('data-category') == btnValue) {
// 			filterValue.push(curent);
// 		}
// 	}

// 	pushChild(catalogRow, filterValue)

// })
let modalBtn = document.querySelectorAll('[data-modal]');
let madalCLose = document.querySelectorAll('.popup__close');
let madalArea = document.querySelectorAll('.popup');

let modalFloorTitle = document.querySelector('.number-of-floor');


modalBtn.forEach(i => {
	i.addEventListener('click', e => {
		let current = e.currentTarget;
		let modalId = current.getAttribute('data-modal');
		let modal = document.getElementById(modalId);
		let modalContent = document.querySelector('.popup__content')

		modalContent.addEventListener('click', e => {
			e.stopPropagation()
		})

		modal.classList.add('open');
		document.body.classList.add('lock');

		let currentNumberFLoor = counter.textContent; // let counter = document.querySelector('.choose__counter');
		modalFloorTitle.textContent = currentNumberFLoor
	})
})

madalCLose.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget.closest('.popup');

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})


madalArea.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget;

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})
// let autoresize = document.querySelectorAll('[data-autoresize]');

// autoresize.forEach(i => {
// 	let autoresizeH = i.offsetHeight;

// 	i.addEventListener('input', e => {
// 		let current = e.target;

// 		current.style.height = autoresizeH + 'px';
// 		current.style.height = current.scrollHeight + 'px';
// 	})
// })
// function ibg(){

// 	let ibg=document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if(ibg[i].querySelector('img')){
// 			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// 		}
// 	}
// }

// ibg();
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

// new Swiper(".swiper-container", {
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {		
// 		el: '.swiper-pagination',
		
// 		type: 'fraction',
// 		renderFraction: function (currentClass, totalClass){
// 			return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
// 		},


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true, 


		// scss: swiper-pagination-bullets
	// },



	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true
	// },


	// simulateTouch: false,
	// градус при котором поворот
	// touchAngle: 90,
	// grabCursor: true,


	// slideToClickedSlide: false,


	// hashNavigation: {
	// 	watchState: true,
	// },

	// keyboard: {
		// enabled: true,
		// onlyInViewport: true,
	// },

	// mousewheel: {
		// sensiitivity: 1,
	// },


	// autoHeight: true,

	// сколько элементов в 1ой странице свайпера
	// slidesPerView: 2,

	// watchOverflow: true,

	// spaceBetween: 30,
	
	// сколько элементов при прокрутке пропустит
	// slidesPerGroup: 2,

	// centeredSlides: false,
	
	// с какой начнет
	// initialSlide: 0,
	
	// колонка(нужна высота+вычесть spaceBetween)
	// slidesPerColumn: 2,

	// бесконечность
	// loop: true,
	// loopedSlides: 0,
	
	
	// freeMode: true,
	
	
	// autoplay: {
	// 	delay: 2000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false,
	// },
	
	// speed: 800,
	
	// direction: 'vertical',

	// effect: 'slide',

	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },

	// плохой режим
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// 	shadow: true,
	// 	shadowOffset: 0,
	// 	shadowScale: 0.5,
	// },

	// effect: 'coverflow',
	// flipEffect: {
	// 	slideShadows: false,
	// 	rotate: 10,
	// 	stretch: 50,
	// },

	// breakpoints: {
	// 	320: {
	// 	},
	// 	480: {
	// 	},
	// 	772: {
	// 	},
	// 	992: {
	// 	}, 
	// },

	// миниатюра
	// thumbs: {
	// 	swiper: {
	// 		el: '.mini-swiper',
	// 		slidesPerView: 4,
	// 	}
	// },


// 	preloadImages: false,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: false,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	nested: true,
// });


// Swiper in swiper
// new Swiper(".image-in", {
// 	pagination: {		
// 		el: '.swiper-pagination',
		
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass){
		// 	return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true,


		// scss: swiper-pagination-bullets
	// },
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	initialSlide: 0,
// 	nested: true,
// });
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
// const headerHeight = document.querySelector('.header__inner');
// const body = document.querySelector('body');

// window.addEventListener('scroll', function () {
// 	if (window.matchMedia('(max-width:826px)').matches) {
// 		return;
// 	}
// 	else if (window.pageYOffset > 0) {
// 		headerHeight.classList.add('scroll')
// 	} else {
// 		headerHeight.classList.remove('scroll')
// 	}
// })

// body.addEventListener('click', function (e) {
	
// 	let target = e.target;
// 	if(!target.hasAttribute("data-scroll-to")) {
// 		return;
// 	}

// 	let scrollToItemClass = target.closest('[data-scroll-to]').getAttribute('data-scroll-to');

// 	let scrollToItem = document.querySelector('.' + scrollToItemClass)

// 	if (scrollToItem) {
// 		scrollToSection(scrollToItem);
// 	}
// })

// let scrollToSection = function (item) {
// 	let targetTop = item.getBoundingClientRect().top;
// 	let scrollTop = window.pageYOffset;
// 	let summTop = scrollTop + targetTop
// 	let headerOffset = document.querySelector('.header__inner').clientHeight;

	// window.scrollTo(0, summTop - headerOffset + 11, behavior: 'smooth')

// 	if (window.pageYOffset === 0) {
// 		window.scrollTo({
// 			top: summTop - headerOffset + 11,
// 			behavior: "smooth"
// 		});
// 	} else {
// 		window.scrollTo({
// 			top: summTop - headerOffset,
// 			behavior: "smooth"
// 		});
// 	}

	// components/burger.js
	// let burger = document.querySelector('.menu__icon')
	// let iconMenu = document.querySelector('.menu__body')

// 	if (window.matchMedia('(max-width:826px)').matches) {
// 		iconMenu.classList.remove('active');
// 		burger.classList.remove('active');
// 		document.body.classList.remove('lock');
// 	}
// }
// let catalog = document.querySelector('.pizza');


// let thisSizeChoosen = function(target) {
// 	let parent = target.closest('.pizza__item');
// 	let previousActiveSize = parent.querySelector('.pizza__size-item.active');

// 	previousActiveSize.classList.remove('active');
// 	target.classList.add('active');
// }


// let changeProductPopup = function(target) {
// 	let parent = target.closest('.pizza__item');
// 	let popupOrder = document.querySelector('.popup')



// 	let pizzaTitle = parent.querySelector('.pizza__title').textContent;
// 	let pizzaImg = parent.querySelector('.pizza__img-item').getAttribute('src');
// 	let pizzaPrice = parent.querySelector('.pizza__price').textContent;
// 	let pizzaSize = parent.querySelector('.pizza__size-item.active').textContent;

// 	popupOrder.querySelector('.popup__info-title').setAttribute('value', pizzaTitle);
// 	popupOrder.querySelector('.popup__info-price').setAttribute('value', pizzaPrice);
// 	popupOrder.querySelector('.popup__info-size').setAttribute('value', pizzaSize);

// 	popupOrder.querySelector('.popup__name').textContent = pizzaTitle
// 	popupOrder.querySelector('.popup__price').textContent = pizzaPrice
// 	popupOrder.querySelector('.popup__size').textContent = pizzaSize
// 	popupOrder.querySelector('.popup__img-item').setAttribute('src', pizzaImg)
// }

// catalog.addEventListener('click', function(e) {
// 	let target = e.target;

// 	if(target.classList.contains('pizza__size-item'))  {
// 		e.preventDefault();
// 		thisSizeChoosen(target);
// 	}

// 	if(target.classList.contains('pizza__btn')) {
// 		e.preventDefault();
// 		changeProductPopup(target);
// 	}
// });
let up = document.querySelector('.choose__arrow-up');
let down = document.querySelector('.choose__arrow-down');
let counter = document.querySelector('.choose__counter');

let floor = document.querySelectorAll('.choose__img-item path')

let currentFloor = 7;



floor.forEach(e => {
	e.addEventListener('mouseover', function() {
		currentFloor = e.getAttribute('data-floors');
		
		counter.textContent = currentFloor;

		floor.forEach(e => {
			e.classList.remove('current__floor');
		});
	})
});

function updateCounter() {
	let strCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
	counter.textContent = strCurrentFloor;
	

	let activeFloor = document.querySelector(`[data-floors="${strCurrentFloor}"]`);
	
	floor.forEach(e => {
		e.classList.remove('current__floor');
	});

	activeFloor.classList.add('current__floor'); 
	
}

up.addEventListener('click', function() {
	if (currentFloor >= 17) {
		return;
	}
	currentFloor++;
	updateCounter()
});

down.addEventListener('click', function() {
	if (currentFloor <= 1) {
		return;
	}
	currentFloor--;
	
	updateCounter()
})
let flat = document.querySelector('.popup-flat');
let flatPath = document.querySelectorAll('.popup-flat path');
let flatFloors = document.querySelector('.left-popup__floors');
let flatText = document.querySelectorAll('.left-popup__floor');


flat.addEventListener('mouseover', function (e) {
	let target = e.target
	let flatFind = target.closest('path');

	if(flatFind === null) {
		return;
	}
	
	flatPath.forEach(e => {
		e.classList.remove('current-text')
	})

	let currentFlat = flatFind.getAttribute('data-find')

	
	flatText.forEach(e => {
		let currentFlatText = e;
		currentFlatText.classList.remove('current-flat')

		if (currentFlatText.getAttribute('data-metr') === currentFlat) {
			
			currentFlatText.classList.add('current-flat')
		}
	})
})

flatFloors.addEventListener('mouseover', function (e) {
	let target = e.target

	let currentMetr = target.getAttribute('data-metr')

	if(currentMetr === null) {
		return;
	}

	flatText.forEach(e => {
		e.classList.remove('current-flat')
	})
	
	flatPath.forEach(e => {
		let currentFlatMetr = e
		currentFlatMetr.classList.remove('current-text')

		if (currentFlatMetr.getAttribute('data-find') === currentMetr) {
			currentFlatMetr.classList.add('current-text');
		}
	})
})