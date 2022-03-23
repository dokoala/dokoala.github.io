// introduce 클릭 시 content-box 내용 보이기
let introBtn = document.querySelector('.introduce-content-btn');
let introBox = document.querySelector('.introduce-content-box');

introBtn.addEventListener("click", () => {
    introBox.classList.toggle('on');
});

// swiper
new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//overlay
function on() {
    document.getElementById("overlay").style.display = "block";
    map.relayout();
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

//kakaomap
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(35.833531, 128.732058), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPositionHome  = new kakao.maps.LatLng(35.830580, 128.737153); 

var marker = new kakao.maps.Marker({
    position: markerPositionHome
});

marker.setMap(map);