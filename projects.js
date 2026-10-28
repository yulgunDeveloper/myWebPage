window.PORTFOLIO_PROJECTS = [
  {
    "id": "serial-data",
    "group": "work",
    "title": "기상 데이터 연계·적재",
    "subtitle": "수신한 데이터가, 다음 작업으로.",
    "category": "전남 LRMS 사업 내 세부 시스템 · Serial 통신",
    "visual": "serial",
    "description": "기상 데이터를 예측·관제 업무에서 활용할 수 있도록, 수신 이후의 작업 관리와 데이터 적재를 구현했습니다.",
    "stack": [
      "Spring Boot",
      "MariaDB",
      "Gradle",
      "Linux"
    ],
    "context": "전남 LRMS 사업에 포함된 기상 데이터 연계·적재 시스템을 개발했습니다. 기상청 데이터 수신 이후 Linux에서 Spring Boot 애플리케이션을 실행하고, 작업 로그의 조건과 상태에 따라 적재를 수행하는 흐름을 구현했습니다.",
    "points": [
      [
        "수신부터 적재까지의 흐름",
        "기상청 데이터를 수신한 뒤 적재 대상 테이블과 조건을 작업 로그에 기록해 이벤트를 발생시키는 흐름을 구현했습니다."
      ],
      [
        "작업 상태에 따른 처리",
        "TBS_JOB_LOG의 상태값이 0이고 수행 상태가 N인 작업을 대상으로 적재를 수행하는 구조입니다."
      ],
      [
        "Linux 백그라운드 실행",
        "Spring Boot·Gradle·MariaDB를 사용하고, Linux 백그라운드 실행 환경에서 데이터를 처리했습니다."
      ]
    ],
    "flow": [
      "기상청 데이터 수신",
      "작업 로그·상태 확인",
      "대상 테이블 적재"
    ],
    "scope": "개발 업무: Spring Boot 기반 데이터 적재, 작업 로그·상태 조건 처리, Linux 백그라운드 실행.",
    "sources": [
      {
        "label": "한국전력 · 광주·전남 LRMS 준공 보도자료 · 2025.06.18",
        "url": "https://www.newswire.co.kr/newsRead.php?no=1013351"
      },
      {
        "label": "한국전력 보도자료 · 2020.04.17",
        "url": "https://www.newswire.co.kr/newsRead.php?no=903849"
      },
      {
        "label": "기존 프로젝트 소개",
        "url": "https://github.com/yulgunDeveloper/myWebPage/blob/4e008f5/portfolio.html"
      }
    ],
    "background": "전남 LRMS는 지역 재생에너지의 발전 출력을 파악하고 예측·평가·제어를 연계하는 관제 사업입니다. 기상에 따라 달라지는 태양광·풍력의 발전량을 다루기 위해서는 기상 데이터가 후속 애플리케이션에 도달하는 기반이 필요합니다. 이 가운데 기상 데이터 수신 이후의 연계·적재 기능을 담당했습니다.",
    "value": "기상 데이터가 수신 단계에 머무르지 않고, 예측·관제 애플리케이션에서 활용할 수 있는 데이터로 이어지도록 연결했습니다."
  },
  {
    "id": "energy-volatility",
    "group": "work",
    "title": "신재생 발전량 예측·실측 비교",
    "subtitle": "발전량, 더 명확하게.",
    "category": "전남 LRMS 관련 개발 경험 · 발전 데이터 시각화",
    "visual": "chart",
    "description": "태양광·풍력의 발전 예측값과 실제 데이터를 비교하고, 오차 범위를 표와 차트로 표현했습니다.",
    "stack": [
      "전자정부프레임워크",
      "JSP",
      "Oracle"
    ],
    "context": "신재생에너지 관제 업무에서 활용하는 발전량 예측·실측 비교 프로그램을 개발했습니다. 기존 포트폴리오의 ‘변동성 프로젝트’에 해당하며, 예측값과 실제값 사이의 오차를 표와 차트로 확인하는 기능을 구현했습니다.",
    "points": [
      [
        "발전 데이터 비교",
        "태양광 및 풍력 발전량의 순시 예측값과 실제 데이터를 비교하는 프로그램을 개발했습니다."
      ],
      [
        "표와 차트로 오차 표현",
        "발전량 예측의 오차 범위를 표와 차트로 표현해 데이터를 확인할 수 있도록 구성했습니다."
      ],
      [
        "기존 기술 환경에서의 개발",
        "전자정부프레임워크·JSP·OracleDB를 이용한 웹 애플리케이션 개발 경험입니다."
      ]
    ],
    "flow": [
      "발전·예측 데이터",
      "값 비교·오차 확인",
      "표·차트 표현"
    ],
    "scope": "개발 업무: 발전량 예측·실측 비교 화면, 오차 범위의 표·차트 표현, 전자정부프레임워크 기반 웹 개발.",
    "sources": [
      {
        "label": "한국전력 · 광주·전남 LRMS 준공 보도자료 · 2025.06.18",
        "url": "https://www.newswire.co.kr/newsRead.php?no=1013351"
      },
      {
        "label": "한국전력 보도자료 · 2020.04.17",
        "url": "https://www.newswire.co.kr/newsRead.php?no=903849"
      },
      {
        "label": "기존 프로젝트 소개",
        "url": "https://github.com/yulgunDeveloper/myWebPage/blob/4e008f5/portfolio.html"
      }
    ],
    "background": "재생에너지의 변동성에 대응하려면 발전량을 예측하는 것과 함께 실제 발전값과의 차이를 확인할 수 있어야 합니다. 한전이 발표한 예측 기반 계통 운영의 배경 속에서, 이 프로젝트는 예측값과 실제값을 비교하는 데이터 표현에 초점을 맞췄습니다.",
    "value": "예측과 실측 데이터를 표와 차트로 함께 제시해, 발전량의 차이와 오차 범위를 확인하는 화면을 구현했습니다."
  },
  {
    "id": "renewable-lrms",
    "group": "work",
    "title": "발전·예측 데이터 비교·분석",
    "subtitle": "발전과 예측을, 한 흐름 안에서.",
    "category": "전남 LRMS 사업 내 세부 시스템 · 관제 지원",
    "visual": "energy",
    "description": "실시간 신재생 발전·예측 데이터를 비교·분석하는 지역 관제시스템(LRMS) 구축 프로젝트입니다.",
    "stack": [
      "Spring Boot",
      "MariaDB",
      "Gradle"
    ],
    "context": "전남 신재생발전 지역 관제시스템(LRMS) 사업에 포함된 발전·예측 데이터 비교·분석 프로그램 개발에 참여했습니다. 전체 LRMS의 감시·예측·평가·제어 기능 가운데, 발전량과 예측량을 비교하고 분석하는 애플리케이션을 다뤘습니다.",
    "points": [
      [
        "실시간 발전·예측 데이터 활용",
        "신재생에너지 발전량과 발전 예측량을 비교·분석하는 프로그램을 개발했습니다."
      ],
      [
        "지역 관제 업무 지원",
        "지역 계통 운영에서 발전 데이터와 예측 데이터를 함께 확인할 수 있는 시스템 구축 경험입니다."
      ],
      [
        "Spring Boot 기반 구현",
        "Spring Boot·Gradle·MariaDB를 이용한 애플리케이션 개발 경험입니다."
      ]
    ],
    "flow": [
      "발전·예측 데이터",
      "비교·분석",
      "지역 관제 지원"
    ],
    "scope": "개발 업무: Spring Boot·MariaDB 기반 발전·예측 데이터 비교·분석 프로그램. LRMS 전체 사업과 세부 시스템 개발 범위를 구분해 정리했습니다.",
    "sources": [
      {
        "label": "한국전력 LRMS 보도자료 · 2025.06.18",
        "url": "https://www.newswire.co.kr/newsRead.php?no=1013351"
      },
      {
        "label": "기존 프로젝트 소개",
        "url": "https://github.com/yulgunDeveloper/myWebPage/blob/4e008f5/portfolio.html"
      }
    ],
    "background": "지역별로 분산된 재생에너지를 전력망에서 안정적으로 활용하려면 발전 상태를 파악하고 예측 데이터를 함께 살펴야 합니다. LRMS는 지역 재생에너지의 감시·예측·평가·제어를 연결하는 관제 체계입니다.",
    "value": "발전 실적과 예측 데이터를 함께 비교·분석하는 애플리케이션 개발에 참여하며, 지역 관제 업무에 필요한 데이터 활용을 지원했습니다."
  }
];
