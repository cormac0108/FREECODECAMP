 var firebaseConfig = {
            apiKey: "AIzaSyAUmMeZj9WJmFVe_b30Of1DKX7p2Tug8n4",
            authDomain: "sunwin-95abe.firebaseapp.com",
            databaseURL: "https://sunwin-95abe.firebaseio.com",
            projectId: "sunwin-95abe",
            storageBucket: "sunwin-95abe.appspot.com",
            messagingSenderId: "1058728169318",
            appId: "1:1058728169318:web:e419b3d2782520e8bbc2a7",
            measurementId: "G-HE41XNB0LL"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        
    (function () {
            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            window.hide = function (obj) {
                var el = document.getElementById(obj);
                el.style.display = 'none';
                setCookie("isShowPWA", Date.now(), 1);
            };

            const isInStandaloneMode = () => (window.matchMedia('(display-mode: standalone)').matches) || (window
                .navigator.standalone) || document.referrer.includes('android-app://');

            var userAgent = window.navigator.userAgent;
            if (navigator.userAgent.match('CriOS') || navigator.userAgent.match('FxiOS') || isInStandaloneMode() ||
                getCookie("isShowPWA") !== "") {
                document.getElementById("android-ath-container").style.display = "none";
                document.getElementById("ios-ath-container").style.display = "none";
            } else if (userAgent.match(/iPad/i)) {
                document.getElementById("android-ath-container").style.display = "none";
                document.getElementById("ios-ath-container").style.display = "block";
                if (userAgent.match(/iPad/i)) {
                    var cl = document.getElementById("ios-ath-container");
                    cl.classList.add("ipad-device");
                }
            } else if (userAgent.match(/iPhone/i)) {
                document.getElementById("android-ath-container").style.display = "none";
                document.getElementById("ios-ath-container").style.display = "block";

                if (userAgent.match(/iPad/i)) {
                    var cl = document.getElementById("ios-ath-container");
                    cl.classList.add("ipad-device");
                }
            } else if (userAgent.match(/Android/i)) {
                document.getElementById("ios-ath-container").style.display = "none";
                document.getElementById("android-ath-container").style.display = "block";
            }

            // lấy ngôn ngữ và đổi text trình duyệt
            var language = window.navigator.userLanguage || window.navigator.language;
            if (language === "vi-VN") {
                var text = document.getElementsByClassName('text-add');
                var i;
                for (i = 0; i < text.length; i++) {
                    text[i].innerHTML = 'Thêm vào màn hình chính';
                }
            }
            //
        })();

        var canvas = document.getElementById('gameCanvas');
        canvas.ontouchstart = function (e) {
            let isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null;

            if (isMobile) {
                if (cc && cc.view && cc.view.enableAutoFullScreen) {
                    cc.view.enableAutoFullScreen(true, function (event) {
                        if (cc.sys.isMobile) {
                            if (redrawLobbyScene) {
                                setTimeout(function () {
                                    redrawLobbyScene();
                                }, 200);
                            }
                        }
                    });
                }
            }

            if (e.touches) e = e.touches[0];
            return false;
        }
