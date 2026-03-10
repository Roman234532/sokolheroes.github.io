// Данные героев с наградами и архивными материалами
const heroes = [
    {
        id: 1,
        name: "Вячеслав Васильевич Заседателев",
        slug: "zasedatelev",
        image: "images/Вячеслав_Васильевич_Заседателев1.jpg",
        years: "14.03.1923-27.02.1996",
        rank: "Полковник",
        bio: "Герой Советского Союза. Участник Великой Отечественной войны. Отличился при форсировании Днепра в сентябре 1943 года",
        address: "Вологодская область, г. Сокол, ул. Советская 55А",
        awards: [
            { name: "Герой Советского Союза", icon: "images/awards/Hero_of_the_Soviet_Union.png" },
            { name: "Орден Ленина", icon: "images/awards/Order_of_Lenin_badge_with_ribbon.png" },
            { name: "Орден Отечественной войны 1 степени", icon: "images/awards/Order_of_the_Patriotic_War_(1st_class).png" },
            { name: "Орден Красной Звезды", icon: "images/awards/Order_of_the_Red_Star_1.png" }
        ],
        archivePhotos: [
            {
                image: "images/archive/zasedatelev/Zasedatelev3.jpg",
                title: "Фото В.В. Заседателева в военные годы",
                description: "Вячеслав Заседателев в первый год службы (1942 г.)"
            },
            {
                image: "images/archive/zasedatelev/Zasedatelev1.jpg",
                title: "Фото В.В. Заседателева в военные годы",
                description: "Вячеслав Васильевич Заседателев после форсирования Днепра (Сентябрь 1943)"
            },
            {
                image: "images/archive/zasedatelev/Zasedatelev2.jpg",
                title: "В.В.Заседателев в послевоенные годы",
                description: "Вячеслав Васильевич Заседателев 1950-е годы"
            }
        ],
		archiveDocuments: [
			{
				image: "images/archive/zasedatelev/Prikaz.jpg",
				title: "Наградной лист В.В. Заседателева",
				description: "Наградной лист Вячеслава Васильевича Заседателева",
				type: "jpg"
			},
			{
				image: "images/archive/zasedatelev/pismo1.jpg",
				title: "Письмо В.В. Заседателева (часть 1)",
				description: "Воспоминания о школьных годах и начале трудового пути в г. Сокол",
				type: "jpg"
			},
			{
				image: "images/archive/zasedatelev/pismo2.jpg",
				title: "Письмо В.В. Заседателева (часть 2)",
				description: "О парадах на Красной площади и передаче формы в музей",
				type: "jpg"
			}
		]
    },
	
	{
        id: 2,
        name: "Сергей Павлович Басков",
        slug: "baskov",
        image: "images/archive/baskov/baskov1.jpg",
        years: "17.09.1917-22.03.1946",
        rank: "Майор",
        bio: "Герой Советского Союза. Участник Великой Отечественной войны. Отличился при форсировании реки Одер в апреле 1945 года",
        address: "Вологодская область, г. Сокол, Сокольский целлюлозно-бумажный комбинат",
        awards: [
            { name: "Герой Советского Союза", icon: "images/awards/Hero_of_the_Soviet_Union.png" },
            { name: "Орден Ленина", icon: "images/awards/Order_of_Lenin_badge_with_ribbon.png" },
			{ name: "Орден Красного Знамени", icon: "images/awards/red_znamya.png" },
			{ name: "Орден Суворова 3 степени", icon: "images/awards/Order_of_Alexaner_Suvorov_3rd_class_2nd_type.png" },
			{ name: "Орден Александра Невского", icon: "images/awards/Order_of_Alexaner_Nevsky_2nd_type.png" },
            { name: "Орден Отечественной войны 2 степени", icon: "images/awards/Order_Of_The_Patriotic_War_(2nd_Class).png" }
        ],
        archivePhotos: [
            {
                image: "images/archive/baskov/baskov1.jpg",
                title: "Фото С.П. Баскова",
                description: "Сергей Павлович Басков"
            },
			{
                image: "images/archive/baskov/baskov2.jpg",
                title: "Фото С.П. Баскова",
                description: "Сергей Павлович Басков"
            },
			{
                image: "images/archive/baskov/baskov3.jpg",
                title: "Фото С.П. Баскова",
                description: "Сергей Павлович Басков"
            }
        ],
		archiveDocuments: [
			{
				image: "images/archive/baskov/geroySSSR.jpg",
				title: "Наградной лист С.П. Баскова",
				description: "Наградной лист Сергея Павловича Баскова к званию Героя Советского Союза",
				type: "jpg"
			},
			{
				image: "images/archive/baskov/krasnoeznamya.jpg",
				title: "Наградной лист С.П. Баскова",
				description: "Наградной лист Сергея Павловича Баскова к ордену Красного Знамени",
				type: "jpg"
			},
			{
				image: "images/archive/baskov/ordensuvorova.jpg",
				title: "Наградной лист С.П. Баскова",
				description: "Наградной лист Сергея Павловича Баскова к ордену Суворова 3 степени",
				type: "jpg"
			},
			{
				image: "images/archive/baskov/ordenVOV.jpg",
				title: "Наградной лист С.П. Баскова",
				description: "Наградной лист Сергея Павловича Баскова к ордену Отечественной войны 2 степени",
				type: "jpg"
			},
			{
				image: "images/archive/baskov/otvaga1.jpg",
				title: "Наградной лист С.П. Баскова",
				description: "Наградной лист Сергея Павловича Баскова к медали за отвагу",
				type: "jpg"
			}
		]
    },

	{
		id: 3,
		name: "Николай Васильевич Мамонов",
		slug: "mamonov",
		image: "images/archive/mamonov/mamonov1.jpg",
		years: "27.09.1919-26.10.1944",
		rank: "Подполковник",
		bio: "Герой Советского Союза. Участник Великой Отечественной Войны. Отличился при освобождении Белоруссии и Польши.",
		address: "Вологодская область, г. Сокол, ул. Мамонова, 14",
		awards: [
			{ name: "Герой Советского Союза", icon: "images/awards/Hero_of_the_Soviet_Union.png" },
			{ name: "Орден Ленина", icon: "images/awards/Order_of_Lenin_badge_with_ribbon.png" },
			{ name: "Орден Красного Знамени", icon: "images/awards/red_znamya.png" },
			{ name: "Орден Кутузова 3-й степени", icon: "images/awards/Order_of_Mikhail_Kutuzov_3rd_class_2nd_type.png" },
			{ name: "Орден Александра Невского", icon: "images/awards/Order_of_Alexaner_Nevsky_2nd_type.png" },
			{ name: "Орден Красной Звезды", icon: "images/awards/Order_of_the_Red_Star_1.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/mamonov/mamonov1.jpg",
				title: "Фото Н.В. Мамонова",
				description: "Николай Васильевич Мамонов"
			},
			{
				image: "images/archive/mamonov/mamonov2.jpg",
				title: "Фото Н.В. Мамонова",
				description: "Николай Васильевич Мамонов"
			},
			{
				image: "images/archive/mamonov/mamonov3.jpg",
				title: "Фото Н.В. Мамонова",
				description: "Николай Васильевич Мамонов"
			},
			{
				image: "images/archive/mamonov/mamonovkursant.jpg",
				title: "Фото Н.В. Мамонова",
				description: "Николай Васильевич Мамонов"
			}
		],
		archiveDocuments: [
			{
				image: "images/archive/mamonov/geroySSSR.jpg",
				title: "Наградной лист Н.В.Мамонова",
				description: "Наградной лист Николая Васильевича Мамонова к званию Героя Советского Союза",
				type: "jpg"
			},
			{
				image: "images/archive/mamonov/krasnoeznamya.jpg",
				title: "Наградной лист Н.В.Мамонова",
				description: "Наградной лист Николая Васильевича Мамонова к ордену Красного Знамени",
				type: "jpg"
			},
			{
				image: "images/archive/mamonov/kutuzov.jpg",
				title: "Наградной лист Н.В.Мамонова",
				description: "Наградной лист Николая Васильевича Мамонова к ордену Кутузова 3 степени",
				type: "jpg"
			},
			{
				image: "images/archive/mamonov/ordenVOV.jpg",
				title: "Наградной лист Н.В.Мамонова",
				description: "Наградной лист Николая Васильевича Мамонова к ордену Отечественной войны 1 степени",
				type: "jpg"
			}
		]
	},
	
	{
		id: 4,
		name: "Павел Федорович Поросенков",
		slug: "porosenkov",
		image: "images/archive/porosenkov/porosenkov1.jpg",
		years: "25.09.1912-03.01.1976",
		rank: "Лейтенант",
		bio: "Герой Советского Союза. Участник советско-финляндской войны. Особо отличился в декабре 1939 года в боях в районе поселка Луостари.",
		address: "Вологодская область, г. Сокол, улица Горького, 15",
		awards: [
			{ name: "Герой Советского Союза", icon: "images/awards/Hero_of_the_Soviet_Union.png" },
			{ name: "Орден Ленина", icon: "images/awards/Order_of_Lenin_badge_with_ribbon.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/porosenkov/porosenkov1.jpg",
				title: "Фото П.Ф. Поросенкова",
				description: "Павел Федорович Поросенков"
			},
			{
				image: "images/archive/porosenkov/porosenkov2.jpg",
				title: "Фото П.Ф. Поросенкова",
				description: "Павел Федорович Поросенков"
			}
		],
		archiveDocuments: [
			{
				image: "images/archive/porosenkov/geroySSSR.jpg",
				title: "Наградной лист П.Ф. Поросенкова",
				description: "Наградной лист к званию Героя Советского Союза",
				type: "jpg"
			}
		]
	},
	
	{
		id: 5,
		name: "Сергей Николаевич Орешков",
		slug: "oreshkov",
		image: "images/archive/oreshkov/oreshkov1.jpg",
		years: "20.06.1916-16.08.1943",
		rank: "Младший лейтенант",
		bio: "Герой Советского Союза. Участник Великой Отечественной Войны. Отличился в бою у села Васищево",
		address: "Вологодская область, г. Сокол, улица Орешкова, 8",
		awards: [
			{ name: "Герой Советского Союза", icon: "images/awards/Hero_of_the_Soviet_Union.png" },
			{ name: "Орден Ленина", icon: "images/awards/Order_of_Lenin_badge_with_ribbon.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/oreshkov/oreshkov1.jpg",
				title: "Фото С.Н.Орешкова",
				description: "Сергей Николаевич Орешков"
			},
			{
				image: "images/archive/oreshkov/oreshkov2.jpg",
				title: "Фото С.Н.Орешкова",
				description: "Сергей Николаевич Орешков"
			}
		],
		archiveDocuments: [
			{
				image: "images/archive/oreshkov/geroySSSR.jpg",
				title: "Наградной лист С.Н.Орешкова",
				description: "Наградной лист к званию Героя Советского Союза",
				type: "jpg"
			},
			{
				image: "images/archive/oreshkov/kartoteka.jpg",
				title: "Учетно-послужная картотека С.Н.Орешкова",
				description: "Учетно-послужная картотека С.Н.Орешкова",
				type: "jpg"
			}
		]
	},
	
	{
		id: 6,
		name: "Аполос Алексеевич Мельников",
		slug: "melnikov",
		image: "images/archive/melnikov/melnikov1.jpg",
		years: "13.11.1914-1947",
		rank: "Старшина",
		bio: "Полный кавалер Ордена Славы. Участник Великой Отечественной Войны.",
		address: "",
		awards: [
			{ name: "Орден Славы 1 степени", icon: "images/awards/slava1.png" },
			{ name: "Орден Славы 2 степени", icon: "images/awards/slava2.png" },
			{ name: "Орден Славы 3 степени", icon: "images/awards/slava3.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/melnikov/melnikov1.jpg",
				title: "Фото А.А.Мельника",
				description: "Аполос Алексеевич Мельников"
			}
		],
		archiveDocuments: [
			{
				image: "images/archive/melnikov/ordenslava3.jpg",
				title: "Наградной лист А.А.Мельника",
				description: "Наградной лист к Ордену Славы 3 степени",
				type: "jpg"
			},
			{
				image: "images/archive/melnikov/ordenslava2.jpg",
				title: "Наградной лист А.А.Мельника",
				description: "Наградной лист к Ордену Славы 2 степени",
				type: "jpg"
			},
			{
				image: "images/archive/melnikov/ordenslava1.jpg",
				title: "Наградной лист А.А.Мельника",
				description: "Наградной лист к Ордену Славы 1 степени",
				type: "jpg"
			}
		]
	},

	{
		id: 7,
		name: "Акиндин Иванович Пуховкин",
		slug: "puhovkin",
		image: "images/archive/puhovkin/puhovkin.jpg",
		years: "1922-17.08.1942",
		rank: "Красноармеец",
		bio: "Участник Великой Отечественной Войны. Достоин представления к званию Герой Советского Союза (посмертно)",
		address: "",
		awards: [
			{ name: "Орден Красного Знамени", icon: "images/awards/red_znamya.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/puhovkin/puhovkin.jpg",
				title: "Фото А.И.Пуховкина",
				description: "Акиндин Иванович Пуховкин"
			}
		],
		archiveDocuments: [
			{
				image: "images/archive/puhovkin/krasnoeznamya.jpg",
				title: "Наградной лист А.И.Пуховкина",
				description: "Наградной лист к Ордену Красного Знамени",
				type: "jpg"
			}
		]
	},
	
	{
		id: 8,
		name: "Юрий Григорьевич Лагунов",
		slug: "lagunov",
		image: "images/archive/lagunov/lagunov1.jpg",
		years: "25.12.1968-21.07.2001",
		rank: "Cтарший лейтенант милиции",
		bio: "Участник Второй чеченской войны. Награждён Орденом Мужества (посмертно)",
		address: "",
		awards: [
			{ name: "Орден Мужества", icon: "images/awards/muzhestvo.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/lagunov/lagunov1.jpg",
				title: "Фото Ю.Г.Лагунова",
				description: "Лагунов Юрий Григорьевич"
			}
		],
		archiveDocuments: [
		]
	},
	
	{
		id: 9,
		name: "Евгений Игоревич Ворочалкин",
		slug: "vorochalkin",
		image: "images/archive/vorochalkin/vorochalkin1.jpg",
		years: "20.04.1964-28.09.1983",
		rank: "Рядовой",
		bio: "Участник Афганской войны. Награждён Орденом Красной Звезды (посмертно)",
		address: "",
		awards: [
			{ name: "Орден Красной Звезды", icon: "images/awards/Order_of_the_Red_Star_1.png" },
			{ name: "Памятная медаль «Воину-интернационалисту от благодарного афганского народа»", icon: "images/awards/inter.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/vorochalkin/vorochalkin1.jpg",
				title: "Фото Е.И.Ворочалкина",
				description: "Ворочалкин Евгений Игоревич"
			},
			
			{
				image: "images/archive/vorochalkin/vorochalkin2.jpg",
				title: "Фото Е.И.Ворочалкина",
				description: "Ворочалкин Евгений Игоревич"
			}
		],
		archiveDocuments: [
		]
	},
	
	{
		id: 10,
		name: "Владимир Николаевич Изюмов",
		slug: "izyumov",
		image: "images/archive/izyumov/izyumov1.jpg",
		years: "13.08.1977-01.03.2000",
		rank: "Гвардии рядовой",
		bio: "Участник Второй чеченской войны. Награждён Орденом Мужества (посмертно).",
		address: "",
		awards: [
			{ name: "Орден Мужества", icon: "images/awards/muzhestvo.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/izyumov/izyumov1.jpg",
				title: "Фото В.Н. Изюмова",
				description: "Владимир Николаевич Изюмов"
			},
			
			{
				image: "images/archive/izyumov/izyumov2.jpg",
				title: "Фото В.Н. Изюмова",
				description: "Владимир Николаевич Изюмов"
			}
		],
		archiveDocuments: [
			{
				image: "images/archive/izyumov/izyumov_izveshenie.jpg",
				title: "Извещение о смерти Владимира Николаевича Изюмова",
				description: "Извещение",
				type: "jpg"
			}
		]
	},
	
	{
		id: 11,
		name: "Евгений Сергеевич Филатов",
		slug: "filatov",
		image: "images/archive/filatov/filatov1.jpg",
		years: "16.10.1990-22.02.2019",
		rank: "Гвардии сержант",
		bio: "Участник боевых действий в Сирийской Арабской Республике. Награждён Орденом Мужества (посмертно).",
		address: "",
		awards: [
			{ name: "Орден Мужества", icon: "images/awards/muzhestvo.png" }
		],
		archivePhotos: [
			{
				image: "images/archive/filatov/filatov1.jpg",
				title: "Фото Е.С. Филатова",
				description: "Евгений Сергеевич Филатов"
			}
		],
		archiveDocuments: [
		]
	}
];

// Загрузка героев на главную страницу
function loadHeroes() {
    const grid = document.getElementById('heroes-grid');
    
    heroes.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card';
        heroCard.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}">
            <div class="hero-card-content">
                <h3>${hero.name}</h3>
                <p class="years">${hero.years}</p>
                <p class="rank">${hero.rank}</p>
                <p>${hero.bio.substring(0, 120)}...</p>
                <div class="archive-badge">Архивные материалы: ${hero.archivePhotos.length + hero.archiveDocuments.length}</div>
            </div>
        `;
        
        heroCard.addEventListener('click', () => {
            window.location.href = `SokolHero/${hero.slug}.html`;
        });
        
        grid.appendChild(heroCard);
    });
}

// Функции для поиска
function createSearchElements() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <input type="text" class="search-input" placeholder="Поиск героя..." autocomplete="off">
            <div class="search-results"></div>
        </div>
    `;
    document.body.appendChild(searchContainer);

    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');

    function searchHeroes(query) {
        if (!query.trim()) {
            searchResults.classList.remove('active');
            return [];
        }
        
        const lowerQuery = query.toLowerCase();
        return heroes.filter(hero => 
            hero.name.toLowerCase().includes(lowerQuery) ||
            hero.rank.toLowerCase().includes(lowerQuery)
        );
    }

    function displayResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item no-results">Ничего не найдено</div>';
            searchResults.classList.add('active');
            return;
        }

        results.forEach(hero => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="search-result-name">${hero.name}</div>
                <div class="search-result-rank">${hero.rank}</div>
            `;
            
            resultItem.addEventListener('click', () => {
                window.location.href = `SokolHero/${hero.slug}.html`;
            });
            
            searchResults.appendChild(resultItem);
        });
        
        searchResults.classList.add('active');
    }

    searchInput.addEventListener('input', (e) => {
        const results = searchHeroes(e.target.value);
        displayResults(results);
    });

    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Управление видимостью при скролле
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop === 0) {
            searchContainer.classList.add('visible');
        } else {
            searchContainer.classList.remove('visible');
            searchResults.classList.remove('active');
        }
    });

    // Проверяем начальное положение
    if (window.pageYOffset === 0) {
        searchContainer.classList.add('visible');
    }
}

// Управление меню
function initMenu() {
    const menuButton = document.getElementById('menuButton');
    const menuPanel = document.getElementById('menuPanel');

    // Открытие/закрытие меню при клике на кнопку
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        menuPanel.classList.toggle('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!menuPanel.contains(e.target) && !menuButton.contains(e.target)) {
            menuPanel.classList.remove('active');
        }
    });

    // Управление видимостью при скролле
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop === 0) {
            menuButton.classList.add('visible');
        } else {
            menuButton.classList.remove('visible');
            menuPanel.classList.remove('active');
        }
    });

    // Проверяем начальное положение
    if (window.pageYOffset === 0) {
        menuButton.classList.add('visible');
    }
}

// Загрузка при старте
document.addEventListener('DOMContentLoaded', () => {
    loadHeroes();
    createSearchElements(); // Создаем поиск
    initMenu(); // Создаем меню
});