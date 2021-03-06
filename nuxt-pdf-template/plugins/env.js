const env = {}

//环境变量 允许一个nuxt vue ssr服务对接多个java web服务 在这里我只使用了一个java web所以参数相同
if (process.env.NODE_ENV === "sit") { // 测试环境
  env.module1BaseURL = "http://sit/java-html-pdf"
  env.module2BaseURL = "http://sit/java-html-pdf"
} else if (process.env.NODE_ENV === "prod") { // 生产环境
  env.module1BaseURL = "http://prod/java-html-pdf"
  env.module2BaseURL = "http://prod/java-html-pdf"
} else { //开发环境
  env.module1BaseURL = "http://localhost:8080/java-html-pdf"
  env.module2BaseURL = "http://localhost:8080/java-html-pdf"
}
export default env
