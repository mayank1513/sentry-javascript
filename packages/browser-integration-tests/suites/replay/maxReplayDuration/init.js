import * as Sentry from '@sentry/browser';

window.Sentry = Sentry;
window.Replay = new Sentry.Replay({
  flushMinDelay: 200,
  flushMaxDelay: 200,
  minReplayDuration: 0,
  maxReplayDuration: 2000,
});

Sentry.init({
  dsn: 'https://public@dsn.ingest.sentry.io/1337',
  sampleRate: 0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 0.0,

  integrations: [window.Replay],
});

window.Replay._replay.timeouts = {
  sessionIdlePause: 1000, // this is usually 5min, but we want to test this with shorter times
  sessionIdleExpire: 2000, // this is usually 15min, but we want to test this with shorter times
};
