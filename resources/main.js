const button = document.getElementById('b');
const qes = document.getElementById('qes');
const answer = document.getElementById('answer');
let qestion;
let sword;

function ask(){
  qestion = qes.value.toLowerCase();
  sword = getresult(qestion)
  answer.innerHTML = sword
  qes.value = '';
}

let random = ['صارحة باش نجيك من اللخر، قاع ما فهمت اش قلتي،','كنظن انني مفهمتش هضرتك، حاول تسول بالدارجة اولا شي سؤال اكون خفيف،' , 'هذا لا يتوافق مع الشريعة الاسلامية، هههه، اكنضحك معاك راني قاع مفهتمك،','تقدر تعاود ؟','عزيز عليا التفاح 🍎', 'اودي هاذي غير تجربة مكناش عارفين بلي غادي تسول هاد الاسئلة المعقدين','وفقا للتحاليل والدراسة والابحاث التي تم اجرائها هاته السنة فاني اقول ان سؤالك اصلا خطأ،', 'نسا عليا، اشنو موالف نتا كتشرب، قهوة اولا حليب ؟اولا اتاي ههه', 'معرفتش واش انا اللي غبي اولا سؤالك اللي صعيب،','عيت من الاسئلة 😐،']

function getresult(q){
  if(q.includes('سلام')) return 'وعليكم السلام نقدر نعاونك ؟';
  if(q.includes('شكون نتا')) return 'انا تجربة قام بها المطور ديالي باش اجرب فيا فكرة كيفاش كيخدم الذكاء الاصطناعي';
  if(q.includes('مرحبا')) return 'مرحبا ! لاباس عليك ؟ من دابا تقدر تهضر معايا بالدارجة باش نفهمك مزيان';
  if(q.includes('اهلا')) return 'اهلا كيف الاحوال ! فاش بغيتي نهضروا ؟';
  if(q.includes('ههه')) return 'ههههههههه 😆';
  if(q.includes('كم')) return 'حسنا، لحساب هذا سنقوم بعملية رياضية معقدة للغاية، اولا من جهازك افتح الالة الحاسبة واحسب بنفسك';
  if(q.includes('شحال')) return 'صارحة منفقدرش نقوليك بالظبط ولكن الا جينا نحسبوا بالمعقول غادي نقوليك "بطاطا 🥔"';
  if(q.includes('شكون هو')) return 'شكون هو ؟ اللي دار داكشي فديك الوقيتة، باش غانعرف انا ؟ 😐';
  if(q.includes('كيفاش')) return 'كيفاش نتا ؟';
  if(q.includes('علاش')) return  'واا منعرف علاش';
  return random[Math.floor(Math.random()*10)]
}
