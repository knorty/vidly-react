import * as Sentry from "@sentry/browser";

function init() {
    Sentry.init({ dsn: "https://a8bb8fd8c0424c2dada3ca25e646fd52@sentry.io/4874946" });
};

function log(error) {
    Sentry.captureException(error);
};

export default {
    init,
    log
}