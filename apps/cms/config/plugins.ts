export default ({ env }) => {
  const plugins: Record<string, unknown> = {};

  if (env("AWS_BUCKET")) {
    plugins.upload = {
      config: {
        provider: "@strapi/provider-upload-aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
            },
            region: env("AWS_REGION"),
            params: {
              Bucket: env("AWS_BUCKET"),
              ACL: env("AWS_ACL", "public-read"),
            },
          },
        },
      },
    };
  }

  return plugins;
};
