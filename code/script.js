document.addEventListener('DOMContentLoaded', function() {
 
    const starCards = document.querySelectorAll('.star-card');
    
    starCards.forEach((card, index) => {
        
        const infoButton = card.querySelector('.star-button[id^="infoButton"]');
        const historyButton = card.querySelector('.star-button[id^="historyButton"]');
        const infoPopup = card.querySelector('.popup[id^="infoPopup"]');
        const historyPopup = card.querySelector('.popup[id^="historyPopup"]');
        const closeButtons = card.querySelectorAll('.close-button');
        
       
        function openPopup(popupToOpen) {
        
            if (infoPopup) infoPopup.style.display = 'none';
            if (historyPopup) historyPopup.style.display = 'none';
            
          
            if (popupToOpen) {
                popupToOpen.style.display = 'block';
            }
        }
        
   
        function closePopup(popupToClose) {
            if (popupToClose) {
                popupToClose.style.display = 'none';
            }
        }
        
        if (infoButton && infoPopup) {
            infoButton.addEventListener('click', (e) => {
                e.stopPropagation(); 
                openPopup(infoPopup);
            });
        }
        
        if (historyButton && historyPopup) {
            historyButton.addEventListener('click', (e) => {
                e.stopPropagation();
                openPopup(historyPopup);
            });
        }
        
    
        closeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const popup = button.closest('.popup');
                closePopup(popup);
            });
        });
    });
    
  
    window.addEventListener('click', function(event) {
        
        if (!event.target.closest('.star-button') && !event.target.closest('.popup')) {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
        }
    });
});




'https://cdn.sportmaster.ru/upload/content/mediahab/prod/bc27ac57-9c19-4a85-b099-1c8c4b6aa0f8.jpg',
                'https://cdn.sportmaster.ru/upload/content/mediahab/prod/bc27ac57-9c19-4a85-b099-1c8c4b6aa0f8.jpg',
                'https://cdn.sportmaster.ru/upload/content/mediahab/prod/bc27ac57-9c19-4a85-b099-1c8c4b6aa0f8.jpg'



document.addEventListener('DOMContentLoaded', function() {
    
   
    const planetsData = {
    sun: {
        name: 'Солнце',
        desc: 'Солнце — звезда, центр нашей системы. Это гигантский ядерный реактор, дающий жизнь Земле. В нём содержится 99.86% всей массы Солнечной системы. Температура ядра — 15 млн °C, а энергии, которую оно выделяет за секунду, хватило бы человечеству на миллион лет.',
        photos: [
            'https://img.freepik.com/premium-photo/sun-shining-through-clouds_1048944-28774661.jpg?semt=ais_hybrid&w=740',
            'https://avatars.mds.yandex.net/i?id=15988dd243402eb67b1453059b859292_l-12753003-images-thumbs&n=13',
            'https://xras.ru/database/sun_images/2024/suvi304/202412/20241223_180400_suvi304.jpg'
        ],
        details: [
            'Тип: Жёлтый карлик (G2V)',
            'Диаметр: 1.39 млн км',
            'Температура поверхности: 5,500°C',
            'Температура ядра: 15 млн °C',
            'Возраст: 4.6 млрд лет',
            'Состав: 73% водород, 25% гелий',
            'Особенность: Содержит 99.86% массы системы'
        ]
    },
    mercury: {
        name: 'Меркурий',
        desc: 'Самая быстрая планета, ближайшая к Солнцу. Днём здесь +427°C, ночью — -173°C — самый резкий перепад температур в системе. Год длится 88 дней, а сутки — 59. Поверхность покрыта кратерами, как у Луны.',
        photos: [
            'https://avatars.mds.yandex.net/i?id=24eb276eaeb9088f9695010e54ca8669_l-12752501-images-thumbs&n=13',
            'https://ir.ozone.ru/s3/seller-promo-events/uploads/c1200/Sistema_Merkurij_statya_26a8dcb0d3.png',
            'https://cdnn21.img.ria.ru/images/92931/81/929318165_0:0:1920:1080_1920x0_80_0_0_7e3c6c42d362a64719b22a021750fc7c.jpg'
        ],
        details: [
            'Диаметр: 4,879 км',
            'Расстояние: 57.9 млн км',
            'Год: 88 земных дней',
            'Сутки: 59 земных дней',
            'Спутники: нет',
            'Температура: -173°C ... +427°C',
            'Особенность: Самый резкий перепад температур'
        ]
    },
    venus: {
        name: 'Венера',
        desc: 'Самая горячая планета (+462°C). Плотная атмосфера из углекислого газа и облака серной кислоты создают адский парниковый эффект. Давление в 92 раза выше земного. Вращается в обратную сторону — Солнце там восходит на западе.',
        photos: [
            'https://s.yimg.com/ny/api/res/1.2/w.oHrnP_.sfWXiWSptAPuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/space_311/39232f47b5844fcdaded61ef8d7bec73',
            'https://img.freepik.com/premium-photo/venus-planet-isolated-transparent-background_995162-5563.jpg?semt=ais_hybrid',
            'https://avatars.mds.yandex.net/i?id=83f92ecd58c8b03caadf4831e07e3c35_l-5244939-images-thumbs&n=13'
        ],
        details: [
            'Диаметр: 12,104 км',
            'Расстояние: 108.2 млн км',
            'Год: 225 земных дней',
            'Сутки: 243 земных дня',
            'Спутники: нет',
            'Температура: +462°C',
            'Особенность: Вращается в обратную сторону'
        ]
    },
    earth: {
        name: 'Земля',
        desc: 'Наш дом. Единственная известная планета с жизнью. 71% поверхности покрыто водой. Уникальная атмосфера и магнитное поле защищают нас от космической радиации. Луна стабилизирует наклон оси, обеспечивая смену сезонов.',
        photos: [
            'https://avatars.mds.yandex.net/i?id=0cfeb3cdbaeb39ae9a286288f965157d_l-4275191-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=2189180d42896123b6fba98161b98e76_l-4510207-images-thumbs&n=13',
            'https://media.istockphoto.com/id/1277760130/ru/фото/голубая-планета-земля-глобус-вид-из-космоса-элементы-этого-изображения-предоставлены-наса-3d.jpg?s=612x612&w=0&k=20&c=E0lfkNrUlDuz81wsfnKtXm_M8y7EmWPLX1c-ju6tI8w='
        ],
        details: [
            'Диаметр: 12,742 км',
            'Расстояние: 149.6 млн км',
            'Год: 365.25 дней',
            'Сутки: 24 часа',
            'Спутники: 1 (Луна)',
            'Температура: -89°C ... +58°C',
            'Особенность: Единственная планета с жидкой водой на поверхности'
        ]
    },
    mars: {
        name: 'Марс',
        desc: 'Красная планета из-за оксида железа в грунте. Здесь находится высочайшая гора в системе — вулкан Олимп (21 км). Атмосфера разрежена, вода есть под землёй в виде льда. Главная цель для поисков жизни и будущей колонизации.',
        photos: [
            'https://avatars.mds.yandex.net/i?id=3cb7369ea0dc3c1687b6c8cdfc29e599_l-10743754-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=da59f0fb701169c6498cee05beab2c51_l-5116917-images-thumbs&n=13',
            'https://i.pinimg.com/originals/78/46/cb/7846cbfd11f0300220724afe5ce22511.jpg'
        ],
        details: [
            'Диаметр: 6,779 км',
            'Расстояние: 227.9 млн км',
            'Год: 687 земных дней',
            'Сутки: 24.6 часа',
            'Спутники: 2 (Фобос, Деймос)',
            'Температура: -140°C ... +20°C',
            'Особенность: Высочайшая гора — Олимп (21 км)'
        ]
    },
    jupiter: {
        name: 'Юпитер',
        desc: 'Король планет. В 2.5 раза массивнее всех остальных планет вместе взятых. Газовый гигант без твёрдой поверхности. Знаменитое Большое красное пятно — гигантский шторм, бушующий уже 300 лет. 95 спутников, включая вулканическую Ио и ледяную Европу.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/5/5c/Jupiter_Globe.jpg',
            'https://img.freepik.com/premium-photo/yupiter-planet-chaos_1176913-24013.jpg',
            'https://www.worldatlas.com/r/w768/upload/f6/9e/37/adobestock-283753187-1.jpeg'
        ],
        details: [
            'Диаметр: 139,820 км',
            'Расстояние: 778.5 млн км',
            'Год: 11.86 земных лет',
            'Сутки: 9.9 часа',
            'Спутники: 95',
            'Температура: -110°C',
            'Особенность: Большое красное пятно — шторм размером с Землю'
        ]
    },
    saturn: {
        name: 'Сатурн',
        desc: 'Планета с самыми красивыми кольцами изо льда и камня. Плотность меньше плотности воды — плавал бы в океане. 146 спутников, среди которых Титан (с атмосферой и метановыми озёрами) и Энцелад (с гейзерами солёной воды).',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1280px-Saturn_during_Equinox.jpg',
            'https://img.freepik.com/premium-photo/saturn-from-perspective-its-rings_425671-4593.jpg?semt=ais_hybrid&w=740',
            'https://i.pinimg.com/originals/89/6f/d8/896fd83bdd5e106c0f8f5c499533c13a.jpg'
        ],
        details: [
            'Диаметр: 116,460 км',
            'Расстояние: 1.434 млрд км',
            'Год: 29.45 земных лет',
            'Сутки: 10.5 часа',
            'Спутники: 146',
            'Температура: -140°C',
            'Особенность: Плотность меньше плотности воды'
        ]
    },
    uranus: {
        name: 'Уран',
        desc: 'Ледяной гигант, вращающийся "лёжа на боку" — наклон оси 98°. Из-за этого день на полюсе длится 42 года. Первая планета, открытая с помощью телескопа (1781 год). Бледно-голубой цвет — от метана в атмосфере.',
        photos: [
            'https://avatars.mds.yandex.net/i?id=a3416f557d5a35813147b46aee779348_l-4835514-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=75fa86e22f9344fb05eea3e3423525a01e1d5ca4-5221012-images-thumbs&n=13',
            'https://ab-news.ru/wp-content/uploads/2022/07/35687b575u76u7vjvjuran.jpg'
        ],
        details: [
            'Диаметр: 50,724 км',
            'Расстояние: 2.871 млрд км',
            'Год: 84 земных года',
            'Сутки: 17.2 часа',
            'Спутники: 27',
            'Температура: -195°C',
            'Особенность: Вращается "лёжа на боку"'
        ]
    },
    neptune: {
        name: 'Нептун',
        desc: 'Самая ветреная планета — ветер до 2100 км/ч. Глубокий синий цвет. Единственная планета, открытая математически "на кончике пера" (1846 год). Спутник Тритон вращается в обратную сторону и, возможно, захвачен из пояса Койпера.',
        photos: [
            'https://img.freepik.com/premium-photo/neptune-space-background-elements-this-image-furnished-by-nasa_1347512-2526.jpg?semt=ais_hybrid&w=740',
            'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_685e519705ab543f9c4e653f_685e541605ab543f9c522844/scale_1200',
            'https://avatars.mds.yandex.net/i?id=3b3ca81d8d70174c5a274e8e5536161c_l-10727469-images-thumbs&n=13'
        ],
        details: [
            'Диаметр: 49,244 км',
            'Расстояние: 4.495 млрд км',
            'Год: 165 земных лет',
            'Сутки: 16.1 часа',
            'Спутники: 14',
            'Температура: -200°C',
            'Особенность: Самая высокая скорость ветра — до 2100 км/ч'
        ]
    }
};

  
    

    document.querySelectorAll('.planet-popup').forEach(p => p.remove());
    

    for (let planetId in planetsData) {
        const data = planetsData[planetId];
        
        const popup = document.createElement('div');
        popup.className = 'popup planet-popup';
        popup.id = `${planetId}Popup`;
        popup.style.display = 'none';
        popup.setAttribute('data-planet', planetId); 
        
        let detailsHTML = '';
        data.details.forEach(detail => {
            detailsHTML += `<p>${detail}</p>`;
        });
        

        let galleryHTML = '<div class="gallery-images">';
        data.photos.forEach((photo, index) => {
            galleryHTML += `<img src="${photo}" alt="${data.name}" class="gallery-image ${index === 0 ? 'active' : ''}" data-index="${index}">`;
        });
        galleryHTML += '</div>';
        
  
        let dotsHTML = '<div class="gallery-dots">';
        data.photos.forEach((_, index) => {
            dotsHTML += `<div class="gallery-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
        });
        dotsHTML += '</div>';
        
      
        const emoji = planetId === 'sun' ? '☀️' : '🪐';
        
        popup.innerHTML = `
            <h3>${emoji} ${data.name}</h3>
            <div class="popup-flex">
                <div class="popup-gallery">
                    ${galleryHTML}
                    
                    <button class="gallery-arrow left" data-planet="${planetId}">◀</button>
                    <button class="gallery-arrow right" data-planet="${planetId}">▶</button>
                    
                    ${dotsHTML}
                </div>
                <div class="popup-text">
                    <p><strong>${data.desc}</strong></p>
                    <div class="planet-details">
                        ${detailsHTML}
                    </div>
                </div>
            </div>
            <button class="close-button">✖</button>
        `;
        
        document.body.appendChild(popup);
    }
    

    function switchGalleryImage(popup, direction) {
        const galleryImages = popup.querySelectorAll('.gallery-image');
        const galleryDots = popup.querySelectorAll('.gallery-dot');
        
        if (galleryImages.length === 0) return;
        
    
        let currentIndex = 0;
        galleryImages.forEach((img, index) => {
            if (img.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
       
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % galleryImages.length;
        } else if (direction === 'prev') {
            newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        } else {
          
            newIndex = direction;
        }
        

        galleryImages.forEach(img => img.classList.remove('active'));
        galleryImages[newIndex].classList.add('active');
        
    
        galleryDots.forEach(dot => dot.classList.remove('active'));
        galleryDots[newIndex].classList.add('active');
        
      
        console.log(`Переключено на фото ${newIndex + 1} из ${galleryImages.length}`);
    }
    
 
    function setupGalleryControls(popup) {
        const leftArrow = popup.querySelector('.gallery-arrow.left');
        const rightArrow = popup.querySelector('.gallery-arrow.right');
        const dots = popup.querySelectorAll('.gallery-dot');
        
        if (leftArrow) {
            leftArrow.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                console.log('Клик по левой стрелке');
                switchGalleryImage(popup, 'prev');
                return false;
            };
        }
        
        if (rightArrow) {
            rightArrow.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                console.log('Клик по правой стрелке');
                switchGalleryImage(popup, 'next');
                return false;
            };
        }
        
        dots.forEach(dot => {
            dot.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                const index = parseInt(this.dataset.index);
                console.log(`Клик по точке ${index}`);
                switchGalleryImage(popup, index);
                return false;
            };
        });
    }
    
   
    document.querySelectorAll('.planet-popup').forEach(popup => {
        setupGalleryControls(popup);
    });
    
  
    function positionPopupNearPlanet(popup, planetElement) {
        const planetRect = planetElement.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();
        
        let left = planetRect.right + 20;
        let top = planetRect.top - 30;
        
        if (left + popupRect.width > window.innerWidth - 20) {
            left = planetRect.left - popupRect.width - 20;
        }
        
        if (top < 20) {
            top = 20;
        }
        if (top + popupRect.height > window.innerHeight - 20) {
            top = window.innerHeight - popupRect.height - 20;
        }
        
        popup.style.left = left + 'px';
        popup.style.top = top + 'px';
        popup.style.transform = 'none';
    }
    

    document.querySelectorAll('.planet').forEach(planet => {
        planet.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const planetId = this.dataset.planet;
            
            document.querySelectorAll('.planet').forEach(p => {
                p.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const popup = document.getElementById(`${planetId}Popup`);
            
            if (popup) {
                document.querySelectorAll('.popup').forEach(p => {
                    p.style.display = 'none';
                });
                
                popup.style.display = 'block';
                
                setTimeout(() => {
                    positionPopupNearPlanet(popup, this);
                }, 10);
            }
        });
    });
    

    document.querySelectorAll('.close-button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const popup = this.closest('.popup');
            if (popup) {
                popup.style.display = 'none';
                
                document.querySelectorAll('.planet').forEach(p => {
                    p.classList.remove('active');
                });
            }
        });
    });
    

    window.addEventListener('click', function(e) {
        if (!e.target.closest('.popup') && !e.target.closest('.planet')) {
            document.querySelectorAll('.popup').forEach(p => {
                p.style.display = 'none';
            });
            
            document.querySelectorAll('.planet').forEach(p => {
                p.classList.remove('active');
            });
        }
    });
    

    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    

    window.addEventListener('scroll', function() {
        const activePopup = document.querySelector('.popup[style*="display: block"]');
        const activePlanet = document.querySelector('.planet.active');
        
        if (activePopup && activePlanet) {
            positionPopupNearPlanet(activePopup, activePlanet);
        }
    });
    
    window.addEventListener('resize', function() {
        const activePopup = document.querySelector('.popup[style*="display: block"]');
        const activePlanet = document.querySelector('.planet.active');
        
        if (activePopup && activePlanet) {
            positionPopupNearPlanet(activePopup, activePlanet);
        }
    });
    
    console.log('Скрипт загружен, попапы созданы');
});









document.addEventListener('DOMContentLoaded', function() {
    

    document.querySelectorAll('.image-caption').forEach(caption => {
        caption.addEventListener('click', function(e) {
            e.stopPropagation();
            

            const popup = this.closest('.gallery-item').querySelector('.person-popup, .rocket-popup');
            
            if (popup) {
  
                document.querySelectorAll('.person-popup, .rocket-popup').forEach(p => {
                    p.style.display = 'none';
                });
                
     
                popup.style.display = 'block';
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.image-caption')) {
            document.querySelectorAll('.person-popup, .rocket-popup').forEach(p => {
                p.style.display = 'none';
            });
        }
    });

    function setupGallery(galleryContainer, leftArrow, rightArrow) {
        const items = galleryContainer.querySelectorAll('.gallery-item');
        if (items.length === 0) return;
        
        let currentIndex = 0;
        
        function showItem(index) {
            items.forEach((item, i) => {
                if (i === index) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
    
        showItem(0);
        
        rightArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });
        

        leftArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });
    }
    

    document.querySelectorAll('.gallery-container').forEach(container => {
        const gallery = container.closest('.section-gallery');
        if (!gallery) return;
        
        const leftArrow = gallery.querySelector('.left-arrow');
        const rightArrow = gallery.querySelector('.right-arrow');
        
        if (leftArrow && rightArrow) {
            setupGallery(container, leftArrow, rightArrow);
        }
    });
    

    console.log('Страница космических агентств готова');
});





function toggleBackToTopButton() {
    const button = document.getElementById('backToTop');
    if (!button) return; 
    
    if (window.scrollY > 100) {
        button.style.display = 'flex';  
    } else {
        button.style.display = 'none';
    }
}

window.addEventListener('scroll', toggleBackToTopButton);

toggleBackToTopButton();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('backToTop');
    if (button) {
        button.addEventListener('click', scrollToTop);
    }
});
























document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Калькулятор запущен');
    
   const speed = document.getElementById('speed-slider');
const speedSpan = document.getElementById('speed-value');
const angle = document.getElementById('angle-slider');
const angleSpan = document.getElementById('angle-value');
const result = document.getElementById('distance-result');

function updateAll() {
    speedSpan.textContent = speed.value;
    angleSpan.textContent = angle.value;
    
    const v = parseFloat(speed.value);
    const a = parseFloat(angle.value);
    const distance = Math.round((v * v * Math.sin(2 * a * Math.PI/180)) / 9.81);
    
    result.textContent = '≈ ' + distance + ' км';
    console.log('Новое значение:', distance);
}

speed.addEventListener('input', updateAll);
angle.addEventListener('input', updateAll);
updateAll();
    
    const rocketSlider = document.getElementById('rocket-mass-slider');
    const rocketSpan = document.getElementById('rocket-mass-value');
    const payloadSlider = document.getElementById('payload-mass-slider');
    const payloadSpan = document.getElementById('payload-mass-value');
    const massResult = document.getElementById('mass-ratio-result');
    
    if (rocketSlider && rocketSpan && payloadSlider && payloadSpan && massResult) {
        console.log('✓ Блок массы: все элементы найдены');
        
        function updateMass() {
            rocketSpan.textContent = rocketSlider.value;
            payloadSpan.textContent = payloadSlider.value;
            
            const r = parseFloat(rocketSlider.value);
            const p = parseFloat(payloadSlider.value);
            
            if (p === 0) {
                massResult.textContent = '∞ : 1 (нет груза)';
            } else {
                const ratio = (r / p).toFixed(1);
                massResult.textContent = ratio + ' : 1';
            }
            
            console.log('Масса пересчитана:', r + '/' + p + ' = ' + (r/p).toFixed(1));
        }
        
        rocketSlider.addEventListener('input', updateMass);
        payloadSlider.addEventListener('input', updateMass);
        updateMass();
    }
    
const spdMass = document.getElementById('speed-mass-slider');
const spdMassVal = document.getElementById('speed-mass-value');
const cosmic = document.getElementById('cosmic-speed-select');
const spdRes = document.getElementById('speed-result');

if (spdMass && spdMassVal && cosmic && spdRes) {
    console.log('✓ Скорость: все элементы найдены');
    
    function updateSpeed() {
        spdMassVal.textContent = spdMass.value;
        
        const m = parseFloat(spdMass.value);
        const v = parseFloat(cosmic.value);
        
        
        let difficultyFactor = 1.0;
        
        if (v === 7.9) difficultyFactor = 1.0;      
        else if (v === 11.2) difficultyFactor = 1.8; 
        else if (v === 16.7) difficultyFactor = 3.2; 
        
        const v_ms = v * 1000;
        const mass_kg = m * 1000;
        
        
        const thrust_n = (mass_kg * v_ms / 600) * difficultyFactor;
        const thrust_kn = Math.round(thrust_n / 1000);
        
        let speedType = '';
        if (v === 7.9) speedType = ' (орбита)';
        else if (v === 11.2) speedType = ' (уход от Земли)';
        else if (v === 16.7) speedType = ' (уход от Солнца)';
        
        spdRes.textContent = 'Тяга: ' + thrust_kn.toLocaleString() + ' кН' + speedType;
    }
    
    spdMass.addEventListener('input', updateSpeed);
    cosmic.addEventListener('change', updateSpeed);
    updateSpeed();
}
    
    const fuelSlider = document.getElementById('fuel-distance-slider');
    const fuelSpan = document.getElementById('fuel-distance-value');
    const fuelSelect = document.getElementById('fuel-type-select');
    const fuelResult = document.getElementById('fuel-result');
    
    if (fuelSlider && fuelSpan && fuelSelect && fuelResult) {
        console.log('✓ Блок топлива: все элементы найдены');
        
        function updateFuel() {
            fuelSpan.textContent = fuelSlider.value;
            
            const distance = parseFloat(fuelSlider.value);
            const type = fuelSelect.value;
            
         
            const isp = {
                'kerosene': 300,
                'hydrogen': 450,
                'solid': 250
            };
            
    
            const fuelNeeded = Math.round(distance / isp[type] * 100);
            fuelResult.textContent = '≈ ' + fuelNeeded + ' тонн';
            
            console.log('Топливо пересчитано: дальность ' + distance + ' км, тип ' + type + ', топливо ' + fuelNeeded + ' т');
        }
        
        fuelSlider.addEventListener('input', updateFuel);
        fuelSelect.addEventListener('change', updateFuel);
        updateFuel();
    }
    

    const rangeMass = document.getElementById('range-mass-slider');
    const rangeMassVal = document.getElementById('range-mass-value');
    const rangePayload = document.getElementById('range-payload-slider');
    const rangePayloadVal = document.getElementById('range-payload-value');
    const rangeFuel = document.getElementById('range-fuel-select');
    const rangeResult = document.getElementById('range-result');

    if (rangeMass && rangeMassVal && rangePayload && rangePayloadVal && rangeFuel && rangeResult) {
        console.log('✓ Блок дальности по массе: все элементы найдены');
        
        function updateRangeByMass() {
            rangeMassVal.textContent = rangeMass.value;
            rangePayloadVal.textContent = rangePayload.value;
            
            const mass = parseFloat(rangeMass.value);
            const payload = parseFloat(rangePayload.value);
            const fuelType = rangeFuel.value;
            
  
            if (payload >= mass) {
                rangeResult.textContent = '≈ ∞ (невозможно)';
                return;
            }
            
            const isp = {
                'kerosene': 300,
                'hydrogen': 450,
                'solid': 250
            };
            
            const fuelMass = mass * 0.8;
            const massRatio = (mass + fuelMass) / (mass + payload);
            const deltaV = isp[fuelType] * 9.81 * Math.log(massRatio);
            const range = Math.round(deltaV * 200);
            
            rangeResult.textContent = '≈ ' + range.toLocaleString() + ' км';
        }
        
        rangeMass.addEventListener('input', updateRangeByMass);
        rangePayload.addEventListener('input', updateRangeByMass);
        rangeFuel.addEventListener('change', updateRangeByMass);
        updateRangeByMass();
    }
    

    const entrySpeed = document.getElementById('entry-speed-slider');
    const entrySpeedVal = document.getElementById('entry-speed-value');
    const entryAngle = document.getElementById('entry-angle-select');
    const heatShield = document.getElementById('heat-shield-select');
    const heatResult = document.getElementById('heat-result');

    if (entrySpeed && entrySpeedVal && entryAngle && heatShield && heatResult) {
        console.log('✓ Блок нагрева: все элементы найдены');
        
        function updateHeat() {
            entrySpeedVal.textContent = entrySpeed.value;
            
            const speed = parseFloat(entrySpeed.value);
            const angle = entryAngle.value;
            const shield = heatShield.value;
            
            let baseTemp = speed * speed * 25;
            
            if (angle === 'steep') baseTemp *= 1.4;
            else if (angle === 'shallow') baseTemp *= 0.7;
            
            if (shield === 'ablative') baseTemp *= 0.9;
            else if (shield === 'carbon') baseTemp *= 0.8;
            
            const temp = Math.round(baseTemp);
            
            let tempText = temp.toLocaleString() + ' °C';
            if (temp > 2000) tempText += ' 🔥 Критично!';
            else if (temp > 1500) tempText += ' ⚠️ Высокий';
            else if (temp > 1000) tempText += ' 👍 Средний';
            else tempText += ' ✅ Низкий';
            
            heatResult.textContent = '≈ ' + tempText;
        }
        
        entrySpeed.addEventListener('input', updateHeat);
        entryAngle.addEventListener('change', updateHeat);
        heatShield.addEventListener('change', updateHeat);
        updateHeat();
    }


    console.log('✅ Калькулятор готов! Двигай ползунки — цифры будут меняться');
});