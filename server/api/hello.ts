export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  console.log("MongoDB URL:", config.public.mongoUrl);
  return 'Hello World!';
});
