/** @type {import('next').NextConfig} */

const nextTranslate = require ("next-translate-plugin");
module.exports =
   nextTranslate({
  experimental: { appDir: true},
  Image :{minimumCacheTTL: 50, //In seconds}
},

   }
)


