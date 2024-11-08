document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Проверка дали се пополнети полето за корисничко име и лозинка
    if (username && password) {
        // Прикажи поп-ап со успешна најава
        document.getElementById("popup-message").textContent = "Успешна најава!";
    } else {
        // Прикажи поп-ап со порака за неуспешна најава
        document.getElementById("popup-message").textContent = "Погрешно корисничко име или лозинка!";
    }

    // Прикажи поп-ап
    document.getElementById("popup").style.display = "flex";
});

// Затвори поп-ап кога ќе се кликне на копчето
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Пример за обработка на форма за тест возење
document.getElementById("test-drive-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const carModel = document.getElementById("car-model").value;
    const testDate = document.getElementById("test-date").value;

    // Проверка дали сите полиња се пополнети
    if (name && carModel && testDate) {
        // Порака за успешен заказан тест возење
        document.getElementById("popup-message").textContent = `Тест возењето е закажано за ${name} на ${testDate}.`;
    } else {
        // Порака за неуспешен обид (не се пополнети сите полиња)
        document.getElementById("popup-message").textContent = "Ве молиме пополнете ги сите полиња!";
    }

    // Прикажи поп-ап
    document.getElementById("popup").style.display = "flex";
});

// Затвори поп-ап кога ќе се кликне на копчето
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Лајк функционалност за сите тековни слики
document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", function() {
        button.textContent = button.textContent === "Лајк" ? "Отфрли Лајк" : "Лајк";
    });
});

// Коментирај функционалност за сите тековни слики
document.querySelectorAll(".comment-btn").forEach(button => {
    button.addEventListener("click", function() {
        const commentInput = button.previousElementSibling;
        if (commentInput.value) {
            alert(`Коментар: ${commentInput.value}`);
            commentInput.value = "";
        } else {
            alert("Ве молиме внесете коментар.");
        }
    });
});

// Кога ќе се кликне копчето "Додади Нова Слика", отвори го прозорецот за избор на фајл
document.getElementById("add-photo").addEventListener("click", function() {
    document.getElementById("photo-input").click();
});

// Додавање на нова слика во галеријата кога ќе се избере од компјутерот
document.getElementById("photo-input").addEventListener("change", function(event) {
    const file = event.target.files[0]; // се зема избраната датотека
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newPhoto = document.createElement("div");
            newPhoto.classList.add("instagram-post");
            newPhoto.innerHTML = `
                <img src="${e.target.result}" alt="Нов пост" width="200" height="200">
                <button class="like-btn">Лајк</button>
                <input type="text" placeholder="Коментар..." class="comment-input">
                <button class="comment-btn">Коментирај</button>
            `;
            document.querySelector(".instagram-gallery").appendChild(newPhoto);

            // Поврзување на новата слика со лајк функционалност
            newPhoto.querySelector(".like-btn").addEventListener("click", function() {
                const likeButton = newPhoto.querySelector(".like-btn");
                likeButton.textContent = likeButton.textContent === "Лајк" ? "Отфрли Лајк" : "Лајк";
            });

            // Поврзување на новата слика со коментар функционалност
            newPhoto.querySelector(".comment-btn").addEventListener("click", function() {
                const commentInput = newPhoto.querySelector(".comment-input");
                if (commentInput.value) {
                    alert(`Коментар: ${commentInput.value}`);
                    commentInput.value = "";
                } else {
                    alert("Ве молиме внесете коментар.");
                }
            });
        };
        reader.readAsDataURL(file); // Читање на фајлот како Data URL за прикажување
    }
});

// Пример за обработка на анкета
document.getElementById("survey-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const impressions = document.getElementById("impressions").value;
    const rating = document.querySelector('input[name="rating"]:checked');

    if (impressions && rating) {
        // Прикажи поп-ап со порака за успешна испратена анкета
        document.getElementById("popup-message").textContent = "Вашата анкета е успешно испратена!";
    } else {
        // Прикажи поп-ап со порака за неисполнети полиња
        document.getElementById("popup-message").textContent = "Ве молиме пополнете ги сите полиња!";
    }

    // Прикажи поп-ап
    document.getElementById("popup").style.display = "flex";
});

// Затвори поп-ап кога ќе се кликне на копчето
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});