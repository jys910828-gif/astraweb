(() => {
  const pageName = decodeURIComponent(location.pathname.split("/").pop() || "index.html");
  const savedLanguage = localStorage.getItem("astraLanguage") || "ko";

  const pageTranslations = {
    "index.html": [
      [".hero-panel h1", "별빛이 머무는 공간,<br />하루의 모든 순간을 특별하게", "A Space Where Starlight Stays,<br />Making Every Moment Special", true],
      [".hero-description", "감각적인 공간과 섬세한 요리가 함께하는<br />강남의 다이닝 라운지", "A dining lounge in Gangnam<br />where refined cuisine meets an elegant space", true],
      [".hero-button-primary", "예약하기", "Reservation"],
      [".hero-button-secondary", "메뉴 보기", "View Menu"],
      [".home-about-copy h2", "도심의 소란이<br />한 걸음 물러나는 자리", "Where the Noise of the City<br />Takes a Step Back", true],
      [".home-about-copy > p:not(.home-eyebrow)", "문을 여는 순간, 강남의 빠른 템포가 잠시 멈춥니다. 탁 트인 공간과 별빛처럼 은은한 조명, 그리고 한 접시의 진심. ASTRA는 바쁜 하루 끝에 조용히 빛나는 시간을 건넵니다.", "The moment you open the door, Gangnam’s fast tempo slows down. An open space, starlight-like lighting, and sincerity on every plate. ASTRA offers a quietly glowing moment at the end of a busy day."],
      [".home-keyword-space strong", "도심의 감각을 담은 여유로운 공간", "A Spacious Setting with an Urban Sense"],
      [".home-keyword-space p", "간결한 선과 탁 트인 110평의 개방감이 어우러진 모던 다이닝 공간. 소중한 식사부터 최대 60명의 프라이빗 이벤트까지, 모임의 크기와 분위기에 맞는 자리를 준비합니다.", "A modern dining space where clean lines meet the openness of 110 pyeong. From intimate meals to private events for up to 60 guests, ASTRA prepares the right setting for every gathering."],
      [".home-keyword-stellar strong", "별빛 아래 완성되는 프리미엄 다이닝", "Premium Dining Completed Under Starlight"],
      [".home-keyword-stellar p", "은은한 샹들리에와 섬세한 서비스가 평범한 저녁을 특별한 장면으로 바꿉니다. 과하지 않으면서도 품격 있게 머무는 ASTRA만의 럭셔리를 경험해보세요.", "A soft chandelier glow and thoughtful service turn an ordinary evening into a memorable scene. Experience ASTRA’s understated, refined sense of luxury."],
      [".home-keyword-fusion strong", "익숙함 너머의 특별함을 담은 한 접시", "A Plate That Captures Something Special Beyond Familiarity"],
      [".home-keyword-fusion p", "이탈리안의 탄탄한 기본 위에 동양적인 풍미와 한국의 식재료를 더했습니다. 익숙하면서도 새롭고, 한 번 더 떠오르는 ASTRA만의 아시안 퓨전입니다.", "Built on Italian fundamentals and layered with Asian flavors and Korean ingredients, ASTRA’s cuisine feels familiar yet new — the kind of dish you remember."],
      [".home-closing h2", "별빛이 머무는 곳에서 특별한 한 끼를 만나보세요.", "Meet a Special Meal Where Starlight Stays."]
    ],
    "astra-bobi-story.html": [
      [".story-visual h1", "강남의 저녁을 별빛처럼 채우는 아시안 퓨전 다이닝", "Asian Fusion Dining That Fills Gangnam Evenings Like Starlight"],
      [".story-intro p", "복잡한 빌딩 숲 사이, 문을 열고 들어서는 순간 도심의 소란이 한 걸음 물러납니다. ASTRA는 강남역과 신논현역 사이에서 좀처럼 만나기 어려운 탁 트인 개방감과, 별빛처럼 은은하게 머무는 편안함을 함께 담은 프리미엄 다이닝 라운지입니다.", "Among the dense buildings of Gangnam, the moment you step inside, the noise of the city fades. Located between Gangnam Station and Sinnonhyeon Station, ASTRA is a premium dining lounge with rare openness and a starlight-like sense of comfort."],
      [".story-details article:nth-child(1) h2", "탁 트인 공간,<br />머물고 싶은 여유", "An Open Space,<br />A Leisurely Moment to Stay", true],
      [".story-details article:nth-child(1) p", "통창 너머로 흐르는 시원한 시야와 세련된 인테리어가 만드는 여백. 일반적인 강남역 식당에서는 느끼기 힘든 개방감 속에서, 소중한 사람과의 식사도 비즈니스 미팅도 단체 모임도 한층 편안해집니다. 도심의 활기를 눈에 담으면서도 프라이빗한 한 테이블을 누리실 수 있습니다.", "A refreshing view through wide windows and a refined interior create a sense of space rarely found near Gangnam Station. Whether dining with loved ones, holding a business meeting, or gathering as a group, you can enjoy both the energy of the city and the comfort of a private table."],
      [".story-details article:nth-child(2) h2", "익숙함 너머,<br />한 접시의 특별함", "Asian Fusion,<br />With a Distinctive Touch", true],
      [".story-details article:nth-child(2) p", "ASTRA는 정통 이탈리안 베이스에 동양적인 풍미를 더해, 익숙하면서도 어디서도 경험하지 못한 한 접시를 완성합니다. 매일 엄선한 신선한 재료, 선명한 플레이팅, 그리고 한국인의 입맛에 최적화된 깊은 감칠맛. 파스타와 리조또를 비롯한 시그니처 메뉴마다 ASTRA만의 섬세한 터치를 담았습니다.", "ASTRA brings Asian flavors to a classic Italian base, creating dishes that feel familiar yet unique. Fresh ingredients selected daily, vivid plating, and deep umami tailored to Korean tastes define our signature pastas, risottos, and more."],
      [".story-details article:nth-child(3) h2", "어디서든, 가깝게", "Close from Anywhere"],
      [".story-details article:nth-child(3) p", "강남역과 신논현역 어디서든 도보 5분. 먹자골목의 중심에서 접근성과 분위기, 맛이라는 세 가지를 모두 갖춘 약속의 자리가 되어 드립니다.", "Just a five-minute walk from both Gangnam Station and Sinnonhyeon Station. In the heart of the dining district, ASTRA offers accessibility, atmosphere, and taste in one place."],
      [".story-closing p", "ASTRA는 한 끼의 식사를 넘어,<br />바쁜 하루의 끝에 조용히 빛나는 시간을 전합니다.", "Beyond a meal,<br />ASTRA offers a quietly glowing moment at the end of a busy day.", true],
      [".story-closing strong", "별빛이 머무는 자리에서, 당신의 저녁이 한층 특별해지기를.", "May your evening become more special where starlight stays."]
    ],
    "astra-bobi-team.html": [
      [".team-intro", "ASTRA의 모든 요리는 각자의 감각과 경험을 지닌 셰프들의 손에서 완성됩니다.<br />좋은 재료에 창의적인 해석을 더해, 익숙하면서도 특별한 한 끼를 선보입니다.<br />한 접시에 담긴 우리 팀의 철학과 이야기를 만나보세요.", "Every dish at ASTRA is completed by chefs with their own senses and experience.<br />With quality ingredients and creative interpretation, we present meals that feel both familiar and special.<br />Meet our team’s philosophy and story on every plate.", true],
      [".team-board article:nth-child(1) .chef-bio", "정통 이탈리안 조리법을 바탕으로 동양적인 향과 깊은 감칠맛을 더해 ASTRA의 아시안 퓨전 스타일을 이끕니다.", "Based on classic Italian techniques, he leads ASTRA’s Asian fusion style with Eastern aromas and deep umami."],
      [".team-board article:nth-child(2) .chef-bio", "신선한 제철 재료의 식감과 선명한 플레이팅을 살려 한 접시 안의 균형과 완성도를 책임집니다.", "She brings out the texture of fresh seasonal ingredients and vivid plating, completing balance on every plate."]
    ],
    "astra-bobi-store.html": [
      [".store-hero-detail span", "도심 한가운데, 별빛이 머무는 자리", "A place where starlight stays in the heart of the city"],
      [".store-concept-copy > span", "탁 트인 홀부터 아늑한 프라이빗 룸까지, 별빛처럼 머무는 공간. 강남의 활기와 편안한 여유가 공존하는 ASTRA에서 특별한 저녁을 만나보세요.", "From an open main hall to cozy private rooms, ASTRA is a space that lingers like starlight. Discover a special evening where Gangnam’s energy meets relaxed comfort."],
      [".interior-heading p", "ASTRA만의 개방적인 홀과 프라이빗 공간을 소개합니다.", "Explore ASTRA’s open hall and private dining spaces."],
      [".location-copy p", "강남역과 신논현역 사이, ASTRA로 오시는 길을 안내합니다.", "Find your way to ASTRA, located between Gangnam Station and Sinnonhyeon Station."],
      [".location-copy dl div:nth-child(1) dt", "주소", "Address"],
      [".location-copy dl div:nth-child(1) dd", "서울시 강남구 봉은사로6길 39 아스트라", "39, Bongeunsa-ro 6-gil, Gangnam-gu, Seoul"],
      [".location-copy dl div:nth-child(2) dt", "전화번호", "Phone"],
      [".location-copy dl div:nth-child(3) dt", "운영시간", "Hours"],
      [".location-copy dl div:nth-child(3) dd", "11:30 - 22:00 / 매주 화요일 휴무", "11:30 - 22:00 / Closed every Tuesday"]
    ],
    "astra-bobi-reservation.html": [
      [".reservation-title-one-line", "소중한 모임을 위한 ASTRA의 프라이빗 공간.", "ASTRA’s Private Spaces for Meaningful Gatherings."],
      [".reservation-intro-copy", "탁 트인 개방감 속, 별빛처럼 은은하게 머무는 오롯이 우리만의 시간.<br />일반 홀 테이블부터 2~4인의 아늑한 프라이빗룸, 5~10인의 넉넉한 메인룸,<br />그리고 110평 전체의 단독 대관까지 — 모임의 인원과 분위기에 맞춰 자유롭게 선택해보세요.", "A private moment that lingers softly like starlight in an open, spacious setting.<br />Choose freely according to your group and occasion — from regular hall tables to cozy private rooms for 2–4,<br />main rooms for 5–10, or exclusive rental of the entire 110-pyeong space.", true],
      [".reservation-list-heading h2", "모임에 맞는 공간을 선택하세요", "Choose the Space for Your Gathering"],
      [".reservation-room-card:nth-child(1) h2", "일반 홀 테이블", "Dining Hall Table"],
      [".reservation-room-card:nth-child(1) .reservation-room-copy > span", "ASTRA의 개방적인 분위기와 별빛처럼 은은한 공간을 가장 편안하게 즐길 수 있는 일반 다이닝 테이블입니다.", "A regular dining table where you can comfortably enjoy ASTRA’s open atmosphere and starlight-like ambience."],
      [".reservation-room-card:nth-child(2) h2", "2~4인 프라이빗룸", "Private Room for 2–4"],
      [".reservation-room-card:nth-child(2) .reservation-room-copy > span", "기념일과 조용한 식사를 위한 아늑하고 프라이빗한 공간입니다.", "A cozy private space for anniversaries and quiet meals."],
      [".reservation-room-card:nth-child(3) h2", "5~10인 메인룸", "Main Room for 5–10"],
      [".reservation-room-card:nth-child(3) .reservation-room-copy > span", "가족 식사, 비즈니스 미팅, 소규모 회식에 적합한 넉넉한 독립 공간입니다.", "A spacious independent room ideal for family meals, business meetings, and small gatherings."],
      [".reservation-room-hall h2", "110평 홀 대관 · 최대 60명", "110-Pyeong Hall Rental · Up to 60 Guests"],
      [".reservation-room-hall .reservation-room-copy > span", "워크숍, 세미나, 송년회, 브랜드 행사와 프라이빗 파티까지 최대 60명을 수용할 수 있는 넓고 개방적인 메인홀입니다.", "A spacious main hall for workshops, seminars, year-end parties, brand events, and private parties for up to 60 guests."],
      [".reservation-room-actions a[target]", "캐치테이블", "Catchtable"],
      [".reservation-room-actions a[href='#reservation-contact']", "예약문의", "Inquiry"],
      [".reservation-event-title", "별빛이 머무는, 오직 당신의 모임만을 위한 공간", "A Starlit Space Reserved Only for Your Gathering"],
      [".reservation-event-copy", "생일 파티, 청첩장 모임, 브라이덜 샤워 같은 프라이빗 모임부터 워크숍, 세미나, 송년회 같은 기업 행사까지 —<span class=\"reservation-event-closing\">ASTRA만의 다이닝과 함께 경험해보세요. 대관 문의와 예약은 언제든 환영합니다.</span>", "From private occasions such as birthday parties, wedding invitation gatherings, and bridal showers to corporate events like workshops, seminars, and year-end parties —<span class=\"reservation-event-closing\">experience them with ASTRA’s dining. Rental inquiries and reservations are always welcome.</span>", true]
    ],
    "astra-bobi-contact.html": [
      [".contact-page h1", "별빛이 머무는 자리에서 만나요", "Meet Us Where Starlight Stays"],
      [".contact-page dl div:nth-child(1) dt", "주소", "Address"],
      [".contact-page dl div:nth-child(1) dd", "서울시 강남구 봉은사로6길 39 아스트라", "39, Bongeunsa-ro 6-gil, Gangnam-gu, Seoul"],
      [".contact-page dl div:nth-child(2) dt", "전화", "Phone"],
      [".contact-page dl div:nth-child(3) dt", "메일", "Email"],
      [".contact-page dl div:nth-child(5) dt", "운영", "Hours"],
      [".contact-page dl div:nth-child(5) dd", "11:30 - 22:00 / 매주 화요일 휴무", "11:30 - 22:00 / Closed every Tuesday"]
    ]
  };

  const createSwitch = () => {
    const switcher = document.createElement("div");
    switcher.className = "language-switch global-language-switch";
    switcher.setAttribute("aria-label", "언어 선택");
    switcher.innerHTML = `
      <button type="button" data-language-option="ko" aria-pressed="false">KO</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-language-option="en" aria-pressed="false">EN</button>
    `;
    document.body.prepend(switcher);
  };

  const applySelectorTranslations = (language) => {
    (pageTranslations[pageName] || []).forEach(([selector, ko, en, html = false]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const value = language === "ko" ? ko : en;
        if (value === undefined) return;
        if (html) element.innerHTML = value;
        else element.textContent = value;
      });
    });
  };

  const applyDataTranslations = (language) => {
    document.querySelectorAll("[data-ko][data-en]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
  };

  const setLanguage = (language) => {
    document.documentElement.lang = language;
    localStorage.setItem("astraLanguage", language);
    applySelectorTranslations(language);
    applyDataTranslations(language);

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const isActive = button.dataset.languageOption === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  createSwitch();

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
  });

  setLanguage(savedLanguage);
})();
