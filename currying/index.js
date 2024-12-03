const createLogger = (level) => (message) =>
  `[${level.toUpperCase()}] ${message}`;

const infoLogger = createLogger("info");
const warnLogger = createLogger("warn");
const errorLogger = createLogger("error");
// Log messages with "info" level
console.log(infoLogger("Application started"));
console.log(infoLogger("User logged in"));

// Log messages with "warn" level
console.log(warnLogger("Low disk space"));
console.log(warnLogger("High memory usage"));

// Log messages with "error" level
console.log(errorLogger("Unhandled exception"));
console.log(errorLogger("Failed to save file"));
