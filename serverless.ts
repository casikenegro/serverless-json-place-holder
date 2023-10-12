import type { AWS } from "@serverless/typescript";

import {
  findAll,
  findOne,
  me,
  mePostById,
  mePosts,
  login,
  meCommentsByPostId,
  addRole,
  findAllRole,
  findOneRole,
  findById,
  getRegisterUsers,
  add,
} from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "customer-scoops",
  frameworkVersion: "3",
  plugins: [
    "serverless-auto-swagger",
    "serverless-esbuild",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      STAGE: "${self:custom.stage}",
      SECRET_KEY: "contratenme",
      EXPIRES_IN: "15 m",
      DATABASE_URL: "mysql://root:password@localhost:3306/develop",
    },
  },
  // import the function via paths
  functions: {
    findAll,
    findOne,
    me,
    mePostById,
    mePosts,
    login,
    meCommentsByPostId,
    addRole,
    findAllRole,
    findOneRole,
    getRegisterUsers,
    findById,
    add,
  },
  package: { individually: true },
  custom: {
    stage: '${opt:stage, "local"}',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
