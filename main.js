// 환전앱 만들기 작업 순서
// 1. 박스 2개 만들기 > html, css 로 만들었음
// 2. 드랍다운 리스트 만들기 > html, css 로 만들었음
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀌는 기능
// 5. 금액을 입력하면 환전이 되는 기능
// 6. 드랍다운 리스트에서 아이템을 바꾸면 다시 바뀐 단위 기준으로 바뀌는 기능
// 7. 숫자를 한국어로 보여주는 기능
// 8. 아래 박스에서 숫자를 수정해도 위 박스에 환율이 적용되는 기능


// 3. 환율정보 들고오기
// 객체를 정의하는 법
let currencyRatio = {
  USD: {
    KRW: 1279,
    USD: 1,
    VND: 23507,
    unit: "달러"
  },
  KRW: {
    KRW: 1,
    USD: 0.00078,
    VND: 18.38,
    unit: "원"
  },
  VND: {
    KRW: 0.054,
    USD: 0.000043,
    VND: 1,
    unit: "동"
  }
}

// 객체를 불러오는 법
// console.log(currencyRatio.VND.unit);
// console.log(currencyRatio["VND"]["unit"]);


// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀌는 기능
// html의 화면 UI 아이템을 Javascript로 가져다가 동작하게 만들어줌
// document 라는 객체는 html 파일에 태그들을 들고올 수 있는 유용한 기능들을 제공해줌
let fromCurrency = 'USD';
let toCurrency = 'USD';

document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click", function() {
  // 1. 버튼을 가져온다 > 2. 버튼에 값을 바꾼다
  document.getElementById("from-button").textContent = this.textContent;
  // 3. 선택된 currency 값을 변수에 저장해준다
  fromCurrency = this.textContent;
  convert();    // convert 함수를 불러와서 다른 금액을 선택할 때 마다 환전이 되도록 함
}));

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
  document.getElementById("to-button").textContent = this.textContent;
  toCurrency = this.textContent;
  convert();    // convert 함수를 불러와서 다른 금액을 선택할 때 마다 환전이 되도록 함
}));


// 5. 금액을 입력하면 환전이 되는 기능
// 키를 입력하는 순간 > 환전이 됨 > 환전된 값이 보임
function convert(){
  // 환전에 필요한 정보: 가지고 있는 금액, 어떤 화폐인지, 어떤 화폐로 바꿀건지
  // 가지고 있는 금액 * 환율 = 환전 금액
  let amount = document.getElementById("from-input").value;
  // input 태그 안에 입력한 값을 가져오고 싶으면 .value를 쓰면 됨
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

  document.getElementById("to-input").value = convertedAmount;
}


