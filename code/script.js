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


// ===========================================
// ПЛАНЕТЫ С ГАЛЕРЕЕЙ - ИСПРАВЛЕННАЯ ВЕРСИЯ
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Данные для планет с фотографиями
    const planetsData = {
        sun: {
            name: 'Солнце',
            desc: 'Звезда, вокруг которой вращается наша планетная система.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/2482_Sun_PIA16211_200.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/2483_Sun_PIA16212_200.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/2484_Sun_PIA16213_200.jpg'
            ],
            details: [
                'Диаметр: 1,392,700 км',
                'Температура: 5,500°C',
                'Возраст: 4.6 млрд лет',
                'Состав: Водород (73%), Гелий (25%)'
            ]
        },
        mercury: {
            name: 'Меркурий',
            desc: 'Ближайшая к Солнцу планета.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/772_mercury_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/773_Mercury_M10_200.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/774_Mercury_M11_200.jpg'
            ],
            details: [
                'Диаметр: 4,879 км',
                'Расстояние: 57.9 млн км',
                'Температура: +430°C днём, -180°C ночью',
                'Спутники: нет'
            ]
        },
        venus: {
            name: 'Венера',
            desc: 'Самая горячая планета.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/773_venus_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/774_Venus_V1_200.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/775_Venus_V2_200.jpg'
            ],
            details: [
                'Диаметр: 12,104 км',
                'Расстояние: 108.2 млн км',
                'Температура: +462°C',
                'Атмосфера: CO2',
                'Спутники: нет'
            ]
        },
        earth: {
            name: 'Земля',
            desc: 'Наш дом. Единственная планета с жизнью.',
            photos: [
                'https://cdn.sportmaster.ru/upload/content/mediahab/prod/bc27ac57-9c19-4a85-b099-1c8c4b6aa0f8.jpg',
                'https://cdn.sportmaster.ru/upload/content/mediahab/prod/bc27ac57-9c19-4a85-b099-1c8c4b6aa0f8.jpg',
                'https://cdn.sportmaster.ru/upload/content/mediahab/prod/bc27ac57-9c19-4a85-b099-1c8c4b6aa0f8.jpg'
            ],
            details: [
                'Диаметр: 12,742 км',
                'Расстояние: 149.6 млн км',
                'Спутник: Луна',
                'Вода: 71% поверхности'
            ]
        },
        mars: {
            name: 'Марс',
            desc: 'Красная планета.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/780_mars_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/781_mars_480x320_2.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/782_mars_480x320_3.jpg'
            ],
            details: [
                'Диаметр: 6,779 км',
                'Расстояние: 227.9 млн км',
                'Спутники: Фобос, Деймос',
                'Горы: Олимп (самая высокая)'
            ]
        },
        jupiter: {
            name: 'Юпитер',
            desc: 'Самая большая планета.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/776_jupiter_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/777_jupiter_480x320_2.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/778_jupiter_480x320_3.jpg'
            ],
            details: [
                'Диаметр: 139,820 км',
                'Расстояние: 778.5 млн км',
                'Спутники: Ио, Европа, Ганимед, Каллисто',
                'Большое красное пятно'
            ]
        },
        saturn: {
            name: 'Сатурн',
            desc: 'Имеет красивые кольца.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/777_saturn_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/778_saturn_480x320_2.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/779_saturn_480x320_3.jpg'
            ],
            details: [
                'Диаметр: 116,460 км',
                'Расстояние: 1.43 млрд км',
                'Спутники: Титан, Рея, Япет',
                'Кольца: изо льда и пыли'
            ]
        },
        uranus: {
            name: 'Уран',
            desc: 'Ледяной гигант. Вращается на боку.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/778_uranus_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/779_uranus_480x320_2.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/780_uranus_480x320_3.jpg'
            ],
            details: [
                'Диаметр: 50,724 км',
                'Расстояние: 2.87 млрд км',
                'Спутники: Титания, Оберон, Умбриэль',
                'Температура: -224°C'
            ]
        },
        neptune: {
            name: 'Нептун',
            desc: 'Самая ветреная планета.',
            photos: [
                'https://solarsystem.nasa.gov/system/resources/detail_files/779_neptune_480x320.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/780_neptune_480x320_2.jpg',
                'https://solarsystem.nasa.gov/system/resources/detail_files/781_neptune_480x320_3.jpg'
            ],
            details: [
                'Диаметр: 49,244 км',
                'Расстояние: 4.5 млрд км',
                'Спутники: Тритон, Нереида',
                'Скорость ветра: 2100 км/ч'
            ]
        }
    };
    
    // Удаляем старые попапы
    document.querySelectorAll('.planet-popup').forEach(p => p.remove());
    
    // Создаем новые попапы с галереей
    for (let planetId in planetsData) {
        const data = planetsData[planetId];
        
        const popup = document.createElement('div');
        popup.className = 'popup planet-popup';
        popup.id = `${planetId}Popup`;
        popup.style.display = 'none';
        popup.setAttribute('data-planet', planetId); // Добавляем атрибут для отладки
        
        let detailsHTML = '';
        data.details.forEach(detail => {
            detailsHTML += `<p>${detail}</p>`;
        });
        
        // Создаем HTML для галереи
        let galleryHTML = '<div class="gallery-images">';
        data.photos.forEach((photo, index) => {
            galleryHTML += `<img src="${photo}" alt="${data.name}" class="gallery-image ${index === 0 ? 'active' : ''}" data-index="${index}">`;
        });
        galleryHTML += '</div>';
        
        // Создаем точки-индикаторы
        let dotsHTML = '<div class="gallery-dots">';
        data.photos.forEach((_, index) => {
            dotsHTML += `<div class="gallery-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
        });
        dotsHTML += '</div>';
        
        // Эмодзи для планеты
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
    
    // Функция для переключения фото в галерее
    function switchGalleryImage(popup, direction) {
        const galleryImages = popup.querySelectorAll('.gallery-image');
        const galleryDots = popup.querySelectorAll('.gallery-dot');
        
        if (galleryImages.length === 0) return;
        
        // Находим текущее активное фото
        let currentIndex = 0;
        galleryImages.forEach((img, index) => {
            if (img.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
        // Вычисляем новый индекс
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % galleryImages.length;
        } else if (direction === 'prev') {
            newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        } else {
            // Переключение по точке
            newIndex = direction;
        }
        
        // Обновляем классы у фото
        galleryImages.forEach(img => img.classList.remove('active'));
        galleryImages[newIndex].classList.add('active');
        
        // Обновляем точки
        galleryDots.forEach(dot => dot.classList.remove('active'));
        galleryDots[newIndex].classList.add('active');
        
        // Для отладки
        console.log(`Переключено на фото ${newIndex + 1} из ${galleryImages.length}`);
    }
    
    // НАВЕШИВАЕМ ОБРАБОТЧИКИ НА СТРЕЛКИ (ПРЯМОЕ НАЗНАЧЕНИЕ)
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
    
    // Применяем обработчики ко всем попапам
    document.querySelectorAll('.planet-popup').forEach(popup => {
        setupGalleryControls(popup);
    });
    
    // Функция для позиционирования попапа рядом с планетой
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
    
    // Обработка кликов по планетам
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
    
    // Закрытие по крестику
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
    
    // Закрытие при клике вне
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
    
    // Предотвращаем закрытие при клике внутри
    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Обновление позиции при скролле
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








// ===========================================
// ЛОГИКА ДЛЯ СТРАНИЦЫ КОСМИЧЕСКИХ АГЕНТСТВ
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 1. ПОПАПЫ ПОД ПОДПИСЯМИ =====
    // При клике на подпись показываем попап под ней
    document.querySelectorAll('.image-caption').forEach(caption => {
        caption.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Находим попап внутри того же gallery-item
            const popup = this.closest('.gallery-item').querySelector('.person-popup, .rocket-popup');
            
            if (popup) {
                // Скрываем все другие попапы
                document.querySelectorAll('.person-popup, .rocket-popup').forEach(p => {
                    p.style.display = 'none';
                });
                
                // Показываем этот попап
                popup.style.display = 'block';
            }
        });
    });
    
    // ===== 2. ЗАКРЫТИЕ ПОПАПОВ ПРИ КЛИКЕ ВНЕ =====
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.image-caption')) {
            document.querySelectorAll('.person-popup, .rocket-popup').forEach(p => {
                p.style.display = 'none';
            });
        }
    });
    
    // ===== 3. ПЕРЕКЛЮЧЕНИЕ ГАЛЕРЕЙ =====
    // Функция для переключения фото в конкретной галерее
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
        
        // Показываем первый
        showItem(0);
        
        // Листаем вперед
        rightArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });
        
        // Листаем назад
        leftArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });
    }
    
    // Настраиваем все галереи
    document.querySelectorAll('.gallery-container').forEach(container => {
        const gallery = container.closest('.section-gallery');
        if (!gallery) return;
        
        const leftArrow = gallery.querySelector('.left-arrow');
        const rightArrow = gallery.querySelector('.right-arrow');
        
        if (leftArrow && rightArrow) {
            setupGallery(container, leftArrow, rightArrow);
        }
    });
    
    // ===== 4. ЗАПОЛНЯЕМ РЕАЛЬНЫМИ ФОТО (ПОЗЖЕ) =====
    console.log('Страница космических агентств готова');
});









// // ===========================================
// // КНОПКА "НАВЕРХ" - ПОЯВЛЯЕТСЯ ПРИ ПРОКРУТКЕ
// // ===========================================

// Функция для показа/скрытия кнопки
function toggleBackToTopButton() {
    const button = document.getElementById('backToTop');
    if (!button) return; // Если кнопки нет на странице - выходим
    
    // Если прокрутили больше 1000px - показываем, иначе скрываем
    if (window.scrollY > 100) {
        button.style.display = 'flex';  // Используем flex, чтобы сохранить центрирование
    } else {
        button.style.display = 'none';
    }
}

// Слушаем событие прокрутки
window.addEventListener('scroll', toggleBackToTopButton);

// Проверяем сразу при загрузке страницы
toggleBackToTopButton();

// Функция для плавного подъема наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Плавная прокрутка
    });
}

// Назначаем обработчик клика на кнопку
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('backToTop');
    if (button) {
        button.addEventListener('click', scrollToTop);
    }
});

// Дополнительно: если хочешь, чтобы стрелка была золотой на белом фоне
// (можно закомментировать, если оставил как выше)




















// ===========================================
// КАЛЬКУЛЯТОР - АБСОЛЮТНО РАБОЧАЯ ВЕРСИЯ
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Калькулятор запущен');
    
    // ===== 1. ДАЛЬНОСТЬ ПОЛЕТА =====
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
    
    // ===== 2. СООТНОШЕНИЕ МАСС =====
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
    
   // === КОСМИЧЕСКАЯ СКОРОСТЬ (УЛУЧШЕННАЯ) ===
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
        
        // Коэффициент сложности в зависимости от типа скорости
        // Первая скорость - выход на орбиту
        // Вторая - уход от Земли
        // Третья - уход от Солнца
        let difficultyFactor = 1.0;
        
        if (v === 7.9) difficultyFactor = 1.0;      // Первая
        else if (v === 11.2) difficultyFactor = 1.8; // Вторая (сложнее в 1.8 раза)
        else if (v === 16.7) difficultyFactor = 3.2; // Третья (еще сложнее)
        
        const v_ms = v * 1000;
        const mass_kg = m * 1000;
        
        // Учитываем сложность
        const thrust_n = (mass_kg * v_ms / 600) * difficultyFactor;
        const thrust_kn = Math.round(thrust_n / 1000);
        
        // Добавляем пояснение
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
    
    // ===== 4. ТОПЛИВНЫЙ РАСЧЕТ =====
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
            
            // Удельный импульс для разных топлив
            const isp = {
                'kerosene': 300,
                'hydrogen': 450,
                'solid': 250
            };
            
            // Упрощенный расчет топлива
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
            
            // Защита от отрицательных значений
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
    
    // === 6. НАГРЕВ ПРИ ВХОДЕ (НОВЫЙ БЛОК) ===
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