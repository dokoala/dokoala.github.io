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
var mapContainer = document.getElementById('map'), 
mapOption = { 
    center: new kakao.maps.LatLng(35.833531, 128.732058),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerPositionHome  = new kakao.maps.LatLng(35.830580, 128.737153); 

var marker = new kakao.maps.Marker({
    position: markerPositionHome
});

marker.setMap(map);