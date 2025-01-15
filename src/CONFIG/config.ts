export default () => ({
    jwt: {
      secret: `${process.env.DATASOURCE_JWT_SECRET_KEY}`,
      signOptions: {
        expiresIn: `${process.env.DATASOURCE_JWT_EXPIRES_IN}`
      }
    },
    database: {
      connnectionString: `${process.env.DATASOURCE_DATABASE_UR}`,
    },
  });