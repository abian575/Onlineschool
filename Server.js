// 1. استيراد مكتبة Express
const express = require('express');

// 2. إنشاء تطبيق Express
const app = express();

// 3. تحديد المنفذ الذي سيتم استخدامه
const port = 8158;

// 4. تعيين مجلد ثابت لتقديم الملفات (مثل HTML, CSS, JS)
// تأكد من أن ملفاتك موجودة في مجلد يسمى "public"
app.use(express.static('public'));

// 5. بدء تشغيل الخادم
app.listen(port, () => {
  console.log(`الخادم يعمل على http://localhost:${port}`);
});