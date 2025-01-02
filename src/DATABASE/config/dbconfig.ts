export default () => ({
    database: {
      connnectionString: `${process.env.DATASOURCE_DATABASE_URL}`,
    },
  });