const testsContext = require.context('./', true, /\.test\.tsx?$/);
testsContext.keys().forEach(testsContext);
