
(function() {
    function a(b) {
        if (!b) return;
        let c = b.getBoundingClientRect(),
            d = c.left + c.width / 2,
            e = c.top + c.height / 2,
            f = ["mousemove", "mouseenter", "mouseover", "mousedown", "mouseup", "click"];

        f.forEach((g, h) => {
            let i = new MouseEvent(g, {
                bubbles: h !== 1,
                cancelable: true,
                view: window,
                clientX: d,
                clientY: e,
                button: g === "mousedown" || g === "mouseup" ? 0 : undefined
            });
            setTimeout(() => b.dispatchEvent(i), h * 50);
        });

        console.log("✅ 이벤트 트리거 완료");
    }

    let j = document.querySelector("button");
    a(j);
})();


(function() {
    function a(b) {
        if (!b) return;
        let c = b.getBoundingClientRect(),
            d = c.left + c.width / 2,
            e = c.top + c.height / 2,
            f = ["mousemove", "mouseenter", "mouseover", "mousedown", "mouseup", "click"];

        f.forEach((g, h) => {
            let i = new MouseEvent(g, {
                bubbles: h !== 1,
                cancelable: true,
                view: window,
                clientX: d,
                clientY: e,
                button: g === "mousedown" || g === "mouseup" ? 0 : undefined
            });
            setTimeout(() => b.dispatchEvent(i), h * 50);
        });
    }

    let j = document.querySelector('[class="prod-cart-btn"]');
    a(j);
})();

function a(b) {
    if (!b) return;
    let c = b.getBoundingClientRect(),
        d = c.left + c.width / 2,
        e = c.top + c.height / 2,
        f = ["mousemove", "mouseenter", "mouseover", "mousedown", "mouseup", "click"];

    f.forEach((g, h) => {
        let i = new MouseEvent(g, {
            bubbles: h !== 1,
            cancelable: true,
            view: window,
            clientX: d,
            clientY: e,
            button: g === "mousedown" || g === "mouseup" ? 0 : undefined
        });
        setTimeout(() => b.dispatchEvent(i), h * 50);
    });
}

function moveMouseAndClick(element) {
    if (!element) return;

    const rect = element.getBoundingClientRect(); // 요소의 위치 가져오기
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 마우스 이동 이벤트
    const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 요소에 진입하는 이벤트
    const mouseEnterEvent = new MouseEvent("mouseenter", {
        bubbles: false, // mouseenter는 버블링되지 않음
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 마우스 오버 이벤트
    const mouseOverEvent = new MouseEvent("mouseover", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 마우스 버튼 누름 (클릭 전)
    const mouseDownEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY,
        button: 0 // 왼쪽 클릭
    });

    // 마우스 버튼 뗌 (클릭 완료)
    const mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY,
        button: 0
    });

    // 마우스 클릭 이벤트
    const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 이벤트 실행 (순서 중요)
    document.dispatchEvent(mouseMoveEvent);  // 1. 마우스 이동
    element.dispatchEvent(mouseEnterEvent);  // 2. 요소에 처음 진입
    element.dispatchEvent(mouseOverEvent);   // 3. 마우스 오버
    element.dispatchEvent(mouseDownEvent);   // 4. 클릭하려고 마우스 누름
    element.dispatchEvent(mouseUpEvent);     // 5. 마우스 버튼 뗌
    element.dispatchEvent(clickEvent);       // 6. 최종 클릭

    console.log("마우스 이동 → 요소 진입 → 클릭 완료!");
}

// 사용 예시: 클릭하고 싶은 요소를 선택 후 실행
const element = document.querySelector("button"); // 버튼 요소 예시
moveMouseAndClick(element);



setTimeout(function() {
    const element = document.querySelector('[class="prod-cart-btn"]');
    if (!element) return;

    const rect = element.getBoundingClientRect(); // 요소의 위치 가져오기
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 마우스 이동 이벤트
    const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 요소에 진입하는 이벤트
    const mouseEnterEvent = new MouseEvent("mouseenter", {
        bubbles: false, // mouseenter는 버블링되지 않음
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 마우스 오버 이벤트
    const mouseOverEvent = new MouseEvent("mouseover", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 마우스 버튼 누름 (클릭 전)
    const mouseDownEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY,
        button: 0 // 왼쪽 클릭
    });

    // 마우스 버튼 뗌 (클릭 완료)
    const mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY,
        button: 0
    });

    // 마우스 클릭 이벤트
    const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: centerX,
        clientY: centerY
    });

    // 이벤트 실행 (순서 중요)
    document.dispatchEvent(mouseMoveEvent);  // 1. 마우스 이동
    element.dispatchEvent(mouseEnterEvent);  // 2. 요소에 처음 진입
    element.dispatchEvent(mouseOverEvent);   // 3. 마우스 오버
    element.dispatchEvent(mouseDownEvent);   // 4. 클릭하려고 마우스 누름
    element.dispatchEvent(mouseUpEvent);     // 5. 마우스 버튼 뗌
    element.dispatchEvent(clickEvent);       // 6. 최종 클릭
}, 1000);
