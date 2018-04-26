const apiURIDefault =
  process.env.NODE_ENV === 'production'
    ? 'https://lumoa-feedback-api-stage.azurewebsites.net'
    : 'https://test-feedback-api.lumoa.tk';

export const configApi =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'https://test-feedback-api.lumoa.tk';

export const apiURI = process.env.API_HOST || apiURIDefault;

export const configURI = process.env.API_HOST || configApi;

export const apiVersion = process.env.API_VERSION || 'v1';

export const megaklinikAPI =
  process.env.MEGAKLINIK_API || 'https://api.megaklinikka.fi';

export default { apiURI, apiVersion, megaklinikAPI };
