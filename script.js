// Данные героев с наградами
const heroes = [
    {
        id: 1,
        name: "Вячеслав Васильевич Заседателев",
        slug: "zasedatelev", // Добавляем slug для URL
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
            </div>
        `;
        
        // Перенаправление на страницу героя при клике
        heroCard.addEventListener('click', () => {
            window.location.href = `SokolHero/${hero.slug}.html`;
        });
        
        grid.appendChild(heroCard);
    });
}

// Загрузка при старте
document.addEventListener('DOMContentLoaded', loadHeroes);