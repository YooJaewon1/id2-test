function nextIntro(introNumber) {
  // 모든 섹션 숨기기
  document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
  
  // 현재 섹션 표시
  const currentSection = document.getElementById('intro' + introNumber);
  if (currentSection) {
      currentSection.style.display = 'block';
  }

  // 타이핑 멈추기
  isTyping = true;
}

const textContent = "사랑하는 이가 떠난 후에도 그들의 흔적은 이 숲 속에서 언제든지 찾을 수 있습니다. 그들과의 유대는 우리가 이 길을 걷는 동안 계속 이어질 것입니다. 그들의 존재가 우리 삶 속에서 얼마나 큰 의미를 가졌는지, 이곳에서 함께 느끼며 나누길 바랍니다."; // 텍스트 내용
const words = textContent.split(' '); // 단어 단위로 나누기

let wordIndex = 0; // 현재 생성할 단어의 인덱스
let isTyping = false; // 타이핑 중인지 여부를 추적

const introSection = document.getElementById('intro1'); // intro1 div 선택

// 마우스가 intro1 div에 들어왔을 때만 타이핑 시작
introSection.addEventListener('mousemove', (e) => {
  // 텍스트가 생성 중일 때는 새 단어가 생기지 않도록 처리
  if (isTyping || wordIndex >= words.length) return;

  isTyping = true; // 타이핑 시작

  const x = e.clientX;
  const y = e.clientY;

  // 새로운 텍스트 요소 생성
  const textElement = document.createElement('div');
  textElement.classList.add('text');
  textElement.textContent = words[wordIndex]; // 현재 단어 출력

  // 텍스트를 마우스 위치에 배치
  textElement.style.left = `${x}px`;
  textElement.style.top = `${y}px`;

  // 텍스트를 body에 추가
  document.body.appendChild(textElement);

  // 텍스트가 서서히 나타나게 하기
  setTimeout(() => {
    textElement.style.opacity = 1;
  }, 0);

  // 3초 뒤에 서서히 사라지게 하기
  setTimeout(() => {
    textElement.style.opacity = 0;
    // 사라진 후 텍스트 삭제
    setTimeout(() => {
      textElement.remove();
    }, 1000); // 사라진 후 1초 뒤 삭제
  }, 3000);

  // 다음 단어로 넘어가고, 타이핑을 끝낸 후 500ms 기다림
  wordIndex++;
  setTimeout(() => {
    isTyping = false; // 타이핑 끝
  }, 500);  // 텍스트가 끝난 후 500ms 뒤에 타이핑 가능
});

// intro1 밖으로 마우스가 나갔을 때 타이핑 중단
document.addEventListener('mousemove', (e) => {
  if (!introSection.contains(e.target)) {
    isTyping = false; // 다른 영역으로 마우스가 나가면 타이핑 중지
  }
});




 const container = document.getElementById("container");
        const starSrc = "star.png"; // 별 이미지 경로
        const starCount = 7; // 별의 개수
        const stars = [];
        const positions = [];

        // 랜덤 위치 생성 함수
        function getRandomPosition() {
            const x = Math.random() * (container.clientWidth - 50) + 25; // 경계선 안쪽으로 배치
            const y = Math.random() * (container.clientHeight - 50) + 25;
            return { x, y };
        }

        // 별 생성 함수
        function createStar(index) {
            const { x, y } = getRandomPosition();
            positions.push({ x, y });

            const star = document.createElement("img");
            star.src = starSrc;
            star.className = "star";
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            star.style.animationDelay = `${index * 2}s`; // 별이 더 느리게 순차적으로 나타남
            container.appendChild(star);

            stars.push(star);
        }

        // 선 생성 함수
        function createLine(x1, y1, x2, y2, delay) {
            const svgNS = "http://www.w3.org/2000/svg";
            const line = document.createElementNS(svgNS, "line");

            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.style.animationDelay = `${delay}s`; // 선 애니메이션 순차적

            return line;
        }

        // 초기화 함수
        function init() {
            // SVG 추가
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            container.appendChild(svg);

            // 별 생성
            for (let i = 0; i < starCount; i++) {
                createStar(i);
            }

            // 선 생성
            for (let i = 0; i < starCount - 1; i++) {
                const line = createLine(
                    positions[i].x, // 별의 중심과 맞추기
                    positions[i].y,
                    positions[i + 1].x,
                    positions[i + 1].y,
                    (i + 1) * 2 // 선이 별보다 천천히 나타나도록 설정
                );

                setTimeout(() => {
                    svg.appendChild(line);
                }, i * 2000); // 각 선이 2초 간격으로 나타남
            }
        }

        // 실행
init();


const image1 = document.getElementById("image1");
        const image2 = document.getElementById("image2");
        const image3 = document.getElementById("image3");
        const backgroundDim = document.getElementById("backgroundDim");
        const bgVideo2 = document.getElementById("bg-video-2");
        const addLet = document.getElementById("addlet");

        // 배경 활성화 함수
        function showBackground() {
            backgroundDim.classList.add("active");
        }

        // 배경 비활성화 함수
        function hideBackground() {
            backgroundDim.classList.remove("active");
        }

        // 페이지 로드 시 배경과 첫 이미지 표시
        document.addEventListener("DOMContentLoaded", () => {
            showBackground(); // 배경 활성화
            image1.classList.add("visible"); // 첫 이미지 보이기
        });

        // 이미지 클릭 이벤트 핸들러 추가
        image1.addEventListener("click", () => {
            image1.classList.remove("visible");
            image2.classList.add("visible");
        });

        image2.addEventListener("click", () => {
            image2.classList.remove("visible");
            image3.classList.add("visible");
        });

        image3.addEventListener("click", () => {
            image3.classList.remove("visible");
            hideBackground();
            bgVideo2.classList.add("visible"); // 동영상 표시
            bgVideo2.play(); // 동영상 재생
            addLet.classList.add("visible"); // 동영상 표시
        });

        document.addEventListener("DOMContentLoaded", function () {
          document.getElementById("addlet").addEventListener("click", function () {
              // 편지쓰기 팝업을 열기 전에 input 필드 초기화
              document.getElementById("letterInput").value = ""; // 편지 내용 지우기
              document.getElementById("letterPopup").style.display = "flex";
          });
      
          document.getElementById("closePopup").addEventListener("click", function () {
              document.getElementById("letterPopup").style.display = "none";
          });
      
          // 비공개 비밀번호 입력란 표시/숨기기
          document.getElementById("private").addEventListener("change", function () {
              document.getElementById("privatePasswordSection").style.display = "block";
              document.getElementById("timeOptions").style.display = "none"; // 기간 설정 버튼 숨기기
          });
      
          document.getElementById("public").addEventListener("change", function () {
              document.getElementById("privatePasswordSection").style.display = "none";
              document.getElementById("timeOptions").style.display = "none"; // 기간 설정 버튼 숨기기
          });
      
          document.getElementById("time").addEventListener("change", function () {
              document.getElementById("privatePasswordSection").style.display = "none";
              document.getElementById("timeOptions").style.display = "block"; // 기간 설정 버튼 표시
          });
      
          // 저장 버튼 이벤트
          document.getElementById("saveButton").addEventListener("click", function () {
              const letterContent = document.getElementById("letterInput").value;
              const visibility = document.querySelector('input[name="visibility"]:checked');
              const privatePassword = document.getElementById("privatePassword").value;
      
              if (letterContent === "") {
                  alert("편지를 작성해 주세요.");
                  return;
              }
      
              if (!visibility) {
                  alert("공개 설정을 선택해 주세요.");
                  return;
              }
      
              let gifPath = "";
              let passwordForThisLetter = ""; // 비공개 설정 시 비밀번호를 저장
      
              if (document.getElementById("public").checked) {
                  gifPath = "letter1.gif"; // 전체 공개 선택 시
              } else if (document.getElementById("private").checked) {
                  if (privatePassword === "") {
                      alert("비공개 설정 시 비밀번호를 입력해 주세요.");
                      return;
                  }
                  gifPath = "letter2.gif"; // 비공개 선택 시
                  passwordForThisLetter = privatePassword; // 비밀번호 저장
              } else if (document.getElementById("time").checked) {
                  gifPath = "letter3.gif"; // 기간 설정 선택 시
              }
      
              // GIF 추가
              const gifContainer = document.getElementById("gifContainer");
              const gifImage = document.createElement("img");
              gifImage.src = gifPath;
              gifImage.alt = "letter gif";
      
              // 저장된 시간 기록
              const saveTime = new Date().toLocaleString();
      
              // 클릭 시 편지 내용과 시간을 보여줄 팝업을 띄울 함수
              gifImage.addEventListener("click", function () {
                  if (document.getElementById("private").checked) {
                      // 비공개일 때 비밀번호 입력 확인 (alert 사용)
                      const enteredPassword = prompt("비밀번호를 입력하세요:");
                      if (enteredPassword === passwordForThisLetter) {
                          document.getElementById("viewLetterContent").textContent = letterContent;
                          document.getElementById("viewSaveTime").textContent = "기억을 남긴 시간: " + saveTime;
                          document.getElementById("letterViewPopup").style.display = "flex";
                      } else {
                          alert("비밀번호가 틀렸습니다.");
                      }
                  } else {
                      document.getElementById("viewLetterContent").textContent = letterContent;
                      document.getElementById("viewSaveTime").textContent = "기억을 남긴 시간: " + saveTime;
                      document.getElementById("letterViewPopup").style.display = "flex";
                  }
              });
      
              gifContainer.appendChild(gifImage); // 새 GIF 추가
      
              // 팝업 닫기
              document.getElementById("letterPopup").style.display = "none";
          });
      
          // "닫기" 버튼 클릭 시 "저장된 편지" 팝업 닫기
          document.getElementById("closeLetterViewPopup").addEventListener("click", function () {
              document.getElementById("letterViewPopup").style.display = "none";
          });
      });
      
      // 기간 설정 버튼 추가 (HTML 코드에 추가된 부분)
      