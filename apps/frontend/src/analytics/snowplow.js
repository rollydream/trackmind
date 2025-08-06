// src/analytics/snowplow.js
import { newTracker, trackPageView, trackSelfDescribingEvent } from "@snowplow/browser-tracker";
import { ActivityTrackingPlugin } from "@snowplow/browser-plugin-activity-tracking";
import { PageViewTrackingPlugin } from "@snowplow/browser-plugin-page-view-tracking";

// ✅ Snowplow 초기화
export const initSnowplow = () => {
  const SNOWPLOW_COLLECTOR = import.meta.env.VITE_SNOWPLOW_ENDPOINT; // 환경변수
  if (!SNOWPLOW_COLLECTOR) {
    console.warn("Snowplow Collector URL이 없습니다. .env에 VITE_SNOWPLOW_ENDPOINT를 설정하세요.");
    return;
  }

  newTracker("sp", SNOWPLOW_COLLECTOR, {
    appId: "my-analytics-app",
    plugins: [
      ActivityTrackingPlugin({ minimumVisitLength: 30, heartbeatDelay: 10 }),
      PageViewTrackingPlugin(),
    ],
  });

  // 기본 페이지뷰
  trackPageView();
  console.log("✅ Snowplow Initialized:", SNOWPLOW_COLLECTOR);
};

// ✅ 커스텀 이벤트 추적
export const trackCustomEvent = (schema, data) => {
  trackSelfDescribingEvent({ schema, data });
};
