import ReactGA from "react-ga4";

export const initGA4 = () => {
  const GA_ID = import.meta.env.VITE_GA4_ID; // 환경변수에서 불러오기
  if (!GA_ID) {
    console.warn("GA_ID가 없습니다. .env에 VITE_GA4_ID를 설정하세요.");
    return;
  }
  ReactGA.initialize(GA_ID);
  console.log("GA4 Initialized: 잘 들어옴" );
};

// 페이지뷰 추적
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// 이벤트 추적
export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
