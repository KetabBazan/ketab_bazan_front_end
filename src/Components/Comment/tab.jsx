import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArticleCard from './tabContent/articleCard';
import VeriFyArticles from '../VerifyArticles';

const fakeArticles = [
  {
    "id": 45,
    "title": "مرگ کسب و کار من است ...",
    "image": "https://api.ketabbazan.ml/media/articles/download.jpg",
    "book": 33,
    "created_jalali": "1401/02/07",
    "body": "<p>مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است که آن را زندگی‌نامه رودلف فرانتس هوس می‌دانند. البته همه حوادث کتاب با حوادث زندگی فرانتس هوس همخوانی ندارد اما رویه کلی داستان و اتفاقات اصلی دقیقا با زندگی فرمانده اردوگاه آشویتس منطبق است. نویسنده کتاب، که رمان درخشانی نوشته است در زمان جنگ جهانی دوم توسط نیروی‌ها آلمانی دستگیر و مدتی را در زندان گذراند.</p><p>رودلف فرانتس هوس در زمانی که افسر ارشد اردوگاه آشویتس – بزرگترین و مجهزترین اردوگاه کار اجباری آلمان نازی بود که در طول اشغال لهستان توسط نازی‌ها ساخته شد – بود بیشتر از دو و نیم میلیون نفر را از میان برد. او در سال ۱۹۰۰ به دنیا آمد. پدرش کاتولیکی سخت متعصب بود و اصرار داشت که پسرش – یعنی رودلف – کشیش شود اما در عوض او در سال ۱۹۲۲ به عضویت حزب نازی درآمد. یک سال پس از عضویت در حزب نازی متهم به قتل آموزگاری شد که نتیجه آن ۵ سال را در زندان انداخته گذراند. در سال ۱۹۲۸ به موجب یک فرمان عفو عمومی آزاد شد و بار دیگر به فعالیت‌های حزبی پرداخت. رودلف در سال ۱۹۳۴ به عضویت گروه جمجمه – از گروه‌های ویژه نیروی اس‌اس که سرپرستی اردوگاه‌های کار اجباری را بر عهده داشتند – درآمد و نهایتاً فرمانده اردوگاه آشویتس شد.</p><p>رودلف فرانتس هوس در یک برهه زمانی به هیملر – فرمانده نیروهای اس‌اس – می‌نویسد که «برای ایجاد یک اردوگاه قرنطینه جدید در حوالی آشویتس محل بسیار مناسبی» پیدا کرده که «برای منظور ما جان می‌دهد.» رودلف بعد از جنگ در دادگاه نورنبرگ محاکمه و به اعدام محکوم شد اما در دادگاه به کارهایی که در آشویتس انجام داده بود افتخار می‌کرد.</p><p>در قسمتی از متن پشت جلد کتاب می‌خوانیم که این رمان زندگی‌نامه یک جلاد مدرن است، جلادی که ویلیام شایر درباره او در کتاب ظهور و سقوط رایش سوم چنین می‌نویسد:</p><p>&nbsp;</p><p>هوس قاتل محکوم به اعدامی بود که پنج سال زندان کشیده بود. این شخص در تمام سال‌های عمر خویش یا زندانی بود یا زندان‌بان… وی که به سال ۱۹۴۶ در دادگاه نورنبرگ به جرم نظارت بر سر به نیست کردن دو و نیم میلیون انسان به دار آویخته شد در سراسر مدت محاکمه خویش لاف زنان از اعمالی که کرده بود بر خود می‌بالید!</p><p><strong>[ »</strong>&nbsp;معرفی و نقد کتاب:&nbsp;<a href=\"https://kafebook.ir/%d9%87%d9%80-%d9%87%d9%80-%d9%80%d8%ad%d9%80-%d9%87%d9%80/\">رمان هـ هـ ـحـ هـ</a>&nbsp; – ماجرای ترور افسر ارشد نازی در جنگ جهانی دوم <strong>]</strong></p><h2>کتاب مرگ کسب و کار من است</h2><p>شخصیت اصلی کتاب ردولف لانگ نام دارد و ما داستان زندگی او را از دوران کودکی تا زمانی که به زندان می‌افتد دنبال می‌کنیم. اینکه سرنوشت او درنهایت به چه شکل شد شاید موضوع مهمی نباشد. موضوع اصلی در کتاب حاضر این است که بر سر رودلف لانگ چه آمد که به یکی از دهشتناک‌ترین انسان‌های این کره خاکی تبدیل شد.</p><p>کودکی شخصیت اصلی داستان نشان می‌دهد که او چقدر آدم با نظم و مرتبی است که در همه حال مراقب رفتارهایش است. کودکی که پدرش اصرار دارد که کشیش شود اما خودش رویای دیگری در سر دارد. رویایی که به خلق و خوی جدی و منضبط او سازگای بیشتری داشت.</p><blockquote><p>قلبم بنا کرد به کوبیدن. در را بستم و مشغول تماشای عکس‌ها شدم. سه تا برادرها، عمو، پدر و بابابزرگ پدرم آن‌جا بودند: همه‌شان افسر. همه‌شان در لباس تمام رسمی. از همه بیشتر تو نخِ عکس پدربزرگ خودم رفتم که سرهنگ تمام بود و می‌گفتند من به او رفته‌ام. (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۲)</p></blockquote><p>به نظر می‌رسد ردولف لانگ راه دیگری جز کشیش شدن ندارد اما طی یک اتفاق اعتقاد لانگ به دین و کلیسا محو می‌شود. او دیگر حتی هنگام غذا خوردن قادر به دعا کردن نیست و می‌توان گفت از همین نقطه بود که زندگی لانگ دستخوش تحول اساسی شد. «ایمانم را از دست داده بودم و درست و حسابی هم از دست داده بودم.»</p><p>داستان کتاب از سال‌های جنگ جهانی اول شروع می‌شود و می‌خوانیم که لانگ بارها و بارها تلاش می‌کند تا خود را به جبهه جنگ برساند. اما هر بار که به جبهه می‌رسد او را شناسایی و به علت سن کمی که دارد به خانه بازمی‌گردانند. پدر پیرش توانایی کنترل او را ندارد و خیلی سریع از دنیا می‌رود. تلاش‌های لانگ برای افسر شدن و شرکت کردن در جنگ بالاخره به نتیجه می‌رسد و نهایتا به خدمت یک سروان درمی‌آید. سروانی که فکر می‌کند رودلف یک «<strong>آلمانی خوب</strong>» است که هر کاری به او بگویند به شکل دقیق و کامل انجام می‌دهد. این سروان در قسمتی از کتاب به لانگ می‌گوید:</p><blockquote><p>یک گناه، یک معصیت بیش‌تر وجود ندارد <strong>رودلف</strong>. خوب گوش‌هایت را واکن ببین چه می‌گویم. و آن گناه، آن معصیت، این است که <strong>آدم، آلمانی خوبی نباشد</strong>. اگر معصیتی وجود داشته باشد همین است و بس! و من که <strong>ریت‌مایسترگونتر</strong> هستم یک آلمانی خوبم. کاری را که <strong>آلمان</strong> به‌ام می‌گوید <strong>بکن</strong>، می‌کنم! کاری را که روسای آلمانی من بم می‌گویند بکن، می‌کنم! والسلام و نامه تمام! (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۸۹)</p></blockquote><p>رودلف لانگ وارد ارتش می‌شود و یاد می‌گیرد که کارها را مطابق دستور انجام دهد و تحت هیچ شرایطی از زیر بار مسئولیت شانه خالی نکند. در حدی که وقتی در جبهه جنگ با کمترین شانس، مقابل دشمن قرار گرفت همچنان به جنگیدن ادامه می‌دهد و حتی اجازه هم نمی‌دهد که همرزمانش نیز از زیر بار مسئولیت فرار کنند.</p><p>بعد از جنگ جهانی اول شخصیت منظم لانگ در حکومت نازی خیلی سریع مورد توجه قرار می‌گیرد و او به زودی یاد می‌گیرد که کلیسای واقعی، شرافت، زندگی، امید و همه چیز او «<strong>آلمان</strong>» است. بنابراین برای سرافرازی آلمان باید با جان و دل تلاش کرد و دستورات مقامات بالا را به بهترین شکل انجام داد، حتی اگر این دستورات پیدا کردن راهی برای از میان بردن یهودیان باشد. چرا که مقامات بالا، هیملر و مهمتر از همه هیتلر، فقط خیر و صلاح آلمان را می‌خواهند.</p><p><strong>[ »</strong> معرفی و نقد کتاب: <a href=\"https://kafebook.ir/%d9%85%d8%b1%d8%af%d9%87-%d9%87%d8%a7-%d8%ac%d9%88%d8%a7%d9%86-%d9%85%db%8c-%d9%85%d8%a7%d9%86%d9%86%d8%af/\">کتاب مرده‌ها جوان می‌مانند</a> – تصویری از جامعه آلمان بین دو جنگ جهانی <strong>]</strong></p><p><img src=\"https://kafebook.ir/wp-content/uploads/2020/10/%D9%85%D8%B1%DA%AF-%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1-%D9%85%D9%86-%D8%A7%D8%B3%D8%AA.jpg\" alt=\"مرگ کسب و کار من است\" srcset=\"https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است.jpg 780w, https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است-768x619.jpg 768w\" sizes=\"40%\" width=\"30%\"></p><h3>درباره رمان روبر مرل</h3><p>زندگی رودلف فرانتس هوس بسیار عجیب است. چطور ممکن است کسی مسئول مرگ دو و نیم میلیون نفر آدم باشد و بعدها که فلسفه پشت این کشتار را هم می‌بیند همچنان به کارهایی که انجام داده افتخار کند و سرش را بالا بگیرد. دقیقا برای یک انسان چه اتفاقی می‌افتد که تبدیل به چنین چیزی می‌شود. به اعتقاد من روبر مرل در کتاب مرگ کسب و کار من است تا حد بسیار زیادی به این سوال پاسخ داده است.</p><p>قبل از شروع کتاب جمله‌ای آمده است که عنوان کتاب و محتوای آن را به خوبی نشان می‌دهد:</p><p><strong>جز به قربانیانِ آن کسان که</strong><br><strong>مرگ از برای‌شان کسب و کاری به حساب می‌آید</strong><br><strong>این کتاب را به که اهدا می‌توانم کرد؟</strong></p><p>البته نباید فراموش کنیم که بیشتر کتاب درباره شکل‌گیری شخصیت این جلاد مدرن است. درباره کارهایی که او در اردوگاه کار اجباری آشویتس انجام داده تا «حل نهایی مسئله یهود که به معنی انهدام تمامی یهودیان اروپا بود» به بهترین شکل ممکن انجام شود. همان‌طور که در کتاب آمده است، برای فرمانده اردوگاه آشویتس مسئله فقط یک چیز بود: چطور و از طریق چه راهی می‌شد روزانه «واحد»های بیشتری را پاک‌سازی کرد؟ بله درست است، فرانتس هوس به این فکر نمی‌کرد که او مسئول کشتار «انسان» است بلکه او فقط «وظیفه» داست که این «واحد»ها را از میان بردارد و رضایت خاطر فرماندهان خود را جلب کند.</p><blockquote><p><strong>پیشوای ما آدولف هیتلر یک بار برای همیشه شرافت اس.اس. را به صراحت معین کرده است. او شعار گروه برگزیده‌اش را با این جمله بیان می‌کند: شرف تو، وفاداری تو است.</strong> (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۸۸)</p></blockquote><p>بنابراین مسئله در ذهن شخصیت اصلی کتاب به شکل دیگری تعریف می‌شود. رودلف لانگ شاید یک <strong>ماشین کشتار بی‌احساس</strong> باشد اما بالاخره اطرافیان او، افسران دیگر و اعضای خانواده‌اش از پوست و گوشت و استخوان ساخته شده‌اند و احساس دارند. وظیفه «انسان» بودن و احساس داشتن در کتاب حاضر بر دوش یکی از فرماندهان نزدیک رودلف لانگ است که همه این کارهای وحشیانه را می‌بیند اما جرات سرپیچی ندارد. این افسر احساس نمی‌کند چون فرماندهان به توانایی‌های او در اردوگاه نیاز دارند پس باید هرکاری انجام دهد. سرنوشت این فرمانده و کارهایی که انجام می‌دهد در کتاب بسیار دقیق و جالب آورده شده است. شاید او تنها کسی باشد که هنوز کمی «وجدان» دارد.</p><p>مسئله دیگری که در توجیه این اعمال در مقدمه کتاب به آن اشاره شده است، گفته‌های هیتلر است که همیشه در توجیه هر جنایتی می‌گفت: «<strong>فکرش راهم نکنید آقایان. این هم جزئی از اقدامات دولت است در جهت چهارمیخه کردن قدرت قانونی حکومت. وانگهی چه کسی دیده است کسی از پیروزمندان حساب پس بکشد؟</strong>» مسئله پیروز بودن یا مغلوب بودن را مترجم کتاب در مقدمه خود به شکل مفصل آورده است.</p>",
    "summary": "مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است.",
    "owner": "محمدعلی صمدی",
    "owner_id": 10,
    "owner_image": "https://api.ketabbazan.ml/profile/getimage/?username=u884469",
    "isverified": true,
    "text": "shghsfa shoghohasg sjaldghojshgoshg osahgohsoah ashgsahgouh sohg oshgsoh"
  },
  {
    "id": 46,
    "title": "مرگ کسب و کار من است ...",
    "image": "https://api.ketabbazan.ml/media/articles/download.jpg",
    "book": 33,
    "created_jalali": "1401/02/07",
    "body": "<p>مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است که آن را زندگی‌نامه رودلف فرانتس هوس می‌دانند. البته همه حوادث کتاب با حوادث زندگی فرانتس هوس همخوانی ندارد اما رویه کلی داستان و اتفاقات اصلی دقیقا با زندگی فرمانده اردوگاه آشویتس منطبق است. نویسنده کتاب، که رمان درخشانی نوشته است در زمان جنگ جهانی دوم توسط نیروی‌ها آلمانی دستگیر و مدتی را در زندان گذراند.</p><p>رودلف فرانتس هوس در زمانی که افسر ارشد اردوگاه آشویتس – بزرگترین و مجهزترین اردوگاه کار اجباری آلمان نازی بود که در طول اشغال لهستان توسط نازی‌ها ساخته شد – بود بیشتر از دو و نیم میلیون نفر را از میان برد. او در سال ۱۹۰۰ به دنیا آمد. پدرش کاتولیکی سخت متعصب بود و اصرار داشت که پسرش – یعنی رودلف – کشیش شود اما در عوض او در سال ۱۹۲۲ به عضویت حزب نازی درآمد. یک سال پس از عضویت در حزب نازی متهم به قتل آموزگاری شد که نتیجه آن ۵ سال را در زندان انداخته گذراند. در سال ۱۹۲۸ به موجب یک فرمان عفو عمومی آزاد شد و بار دیگر به فعالیت‌های حزبی پرداخت. رودلف در سال ۱۹۳۴ به عضویت گروه جمجمه – از گروه‌های ویژه نیروی اس‌اس که سرپرستی اردوگاه‌های کار اجباری را بر عهده داشتند – درآمد و نهایتاً فرمانده اردوگاه آشویتس شد.</p><p>رودلف فرانتس هوس در یک برهه زمانی به هیملر – فرمانده نیروهای اس‌اس – می‌نویسد که «برای ایجاد یک اردوگاه قرنطینه جدید در حوالی آشویتس محل بسیار مناسبی» پیدا کرده که «برای منظور ما جان می‌دهد.» رودلف بعد از جنگ در دادگاه نورنبرگ محاکمه و به اعدام محکوم شد اما در دادگاه به کارهایی که در آشویتس انجام داده بود افتخار می‌کرد.</p><p>در قسمتی از متن پشت جلد کتاب می‌خوانیم که این رمان زندگی‌نامه یک جلاد مدرن است، جلادی که ویلیام شایر درباره او در کتاب ظهور و سقوط رایش سوم چنین می‌نویسد:</p><p>&nbsp;</p><p>هوس قاتل محکوم به اعدامی بود که پنج سال زندان کشیده بود. این شخص در تمام سال‌های عمر خویش یا زندانی بود یا زندان‌بان… وی که به سال ۱۹۴۶ در دادگاه نورنبرگ به جرم نظارت بر سر به نیست کردن دو و نیم میلیون انسان به دار آویخته شد در سراسر مدت محاکمه خویش لاف زنان از اعمالی که کرده بود بر خود می‌بالید!</p><p><strong>[ »</strong>&nbsp;معرفی و نقد کتاب:&nbsp;<a href=\"https://kafebook.ir/%d9%87%d9%80-%d9%87%d9%80-%d9%80%d8%ad%d9%80-%d9%87%d9%80/\">رمان هـ هـ ـحـ هـ</a>&nbsp; – ماجرای ترور افسر ارشد نازی در جنگ جهانی دوم <strong>]</strong></p><h2>کتاب مرگ کسب و کار من است</h2><p>شخصیت اصلی کتاب ردولف لانگ نام دارد و ما داستان زندگی او را از دوران کودکی تا زمانی که به زندان می‌افتد دنبال می‌کنیم. اینکه سرنوشت او درنهایت به چه شکل شد شاید موضوع مهمی نباشد. موضوع اصلی در کتاب حاضر این است که بر سر رودلف لانگ چه آمد که به یکی از دهشتناک‌ترین انسان‌های این کره خاکی تبدیل شد.</p><p>کودکی شخصیت اصلی داستان نشان می‌دهد که او چقدر آدم با نظم و مرتبی است که در همه حال مراقب رفتارهایش است. کودکی که پدرش اصرار دارد که کشیش شود اما خودش رویای دیگری در سر دارد. رویایی که به خلق و خوی جدی و منضبط او سازگای بیشتری داشت.</p><blockquote><p>قلبم بنا کرد به کوبیدن. در را بستم و مشغول تماشای عکس‌ها شدم. سه تا برادرها، عمو، پدر و بابابزرگ پدرم آن‌جا بودند: همه‌شان افسر. همه‌شان در لباس تمام رسمی. از همه بیشتر تو نخِ عکس پدربزرگ خودم رفتم که سرهنگ تمام بود و می‌گفتند من به او رفته‌ام. (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۲)</p></blockquote><p>به نظر می‌رسد ردولف لانگ راه دیگری جز کشیش شدن ندارد اما طی یک اتفاق اعتقاد لانگ به دین و کلیسا محو می‌شود. او دیگر حتی هنگام غذا خوردن قادر به دعا کردن نیست و می‌توان گفت از همین نقطه بود که زندگی لانگ دستخوش تحول اساسی شد. «ایمانم را از دست داده بودم و درست و حسابی هم از دست داده بودم.»</p><p>داستان کتاب از سال‌های جنگ جهانی اول شروع می‌شود و می‌خوانیم که لانگ بارها و بارها تلاش می‌کند تا خود را به جبهه جنگ برساند. اما هر بار که به جبهه می‌رسد او را شناسایی و به علت سن کمی که دارد به خانه بازمی‌گردانند. پدر پیرش توانایی کنترل او را ندارد و خیلی سریع از دنیا می‌رود. تلاش‌های لانگ برای افسر شدن و شرکت کردن در جنگ بالاخره به نتیجه می‌رسد و نهایتا به خدمت یک سروان درمی‌آید. سروانی که فکر می‌کند رودلف یک «<strong>آلمانی خوب</strong>» است که هر کاری به او بگویند به شکل دقیق و کامل انجام می‌دهد. این سروان در قسمتی از کتاب به لانگ می‌گوید:</p><blockquote><p>یک گناه، یک معصیت بیش‌تر وجود ندارد <strong>رودلف</strong>. خوب گوش‌هایت را واکن ببین چه می‌گویم. و آن گناه، آن معصیت، این است که <strong>آدم، آلمانی خوبی نباشد</strong>. اگر معصیتی وجود داشته باشد همین است و بس! و من که <strong>ریت‌مایسترگونتر</strong> هستم یک آلمانی خوبم. کاری را که <strong>آلمان</strong> به‌ام می‌گوید <strong>بکن</strong>، می‌کنم! کاری را که روسای آلمانی من بم می‌گویند بکن، می‌کنم! والسلام و نامه تمام! (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۸۹)</p></blockquote><p>رودلف لانگ وارد ارتش می‌شود و یاد می‌گیرد که کارها را مطابق دستور انجام دهد و تحت هیچ شرایطی از زیر بار مسئولیت شانه خالی نکند. در حدی که وقتی در جبهه جنگ با کمترین شانس، مقابل دشمن قرار گرفت همچنان به جنگیدن ادامه می‌دهد و حتی اجازه هم نمی‌دهد که همرزمانش نیز از زیر بار مسئولیت فرار کنند.</p><p>بعد از جنگ جهانی اول شخصیت منظم لانگ در حکومت نازی خیلی سریع مورد توجه قرار می‌گیرد و او به زودی یاد می‌گیرد که کلیسای واقعی، شرافت، زندگی، امید و همه چیز او «<strong>آلمان</strong>» است. بنابراین برای سرافرازی آلمان باید با جان و دل تلاش کرد و دستورات مقامات بالا را به بهترین شکل انجام داد، حتی اگر این دستورات پیدا کردن راهی برای از میان بردن یهودیان باشد. چرا که مقامات بالا، هیملر و مهمتر از همه هیتلر، فقط خیر و صلاح آلمان را می‌خواهند.</p><p><strong>[ »</strong> معرفی و نقد کتاب: <a href=\"https://kafebook.ir/%d9%85%d8%b1%d8%af%d9%87-%d9%87%d8%a7-%d8%ac%d9%88%d8%a7%d9%86-%d9%85%db%8c-%d9%85%d8%a7%d9%86%d9%86%d8%af/\">کتاب مرده‌ها جوان می‌مانند</a> – تصویری از جامعه آلمان بین دو جنگ جهانی <strong>]</strong></p><p><img src=\"https://kafebook.ir/wp-content/uploads/2020/10/%D9%85%D8%B1%DA%AF-%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1-%D9%85%D9%86-%D8%A7%D8%B3%D8%AA.jpg\" alt=\"مرگ کسب و کار من است\" srcset=\"https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است.jpg 780w, https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است-768x619.jpg 768w\" sizes=\"40%\" width=\"30%\"></p><h3>درباره رمان روبر مرل</h3><p>زندگی رودلف فرانتس هوس بسیار عجیب است. چطور ممکن است کسی مسئول مرگ دو و نیم میلیون نفر آدم باشد و بعدها که فلسفه پشت این کشتار را هم می‌بیند همچنان به کارهایی که انجام داده افتخار کند و سرش را بالا بگیرد. دقیقا برای یک انسان چه اتفاقی می‌افتد که تبدیل به چنین چیزی می‌شود. به اعتقاد من روبر مرل در کتاب مرگ کسب و کار من است تا حد بسیار زیادی به این سوال پاسخ داده است.</p><p>قبل از شروع کتاب جمله‌ای آمده است که عنوان کتاب و محتوای آن را به خوبی نشان می‌دهد:</p><p><strong>جز به قربانیانِ آن کسان که</strong><br><strong>مرگ از برای‌شان کسب و کاری به حساب می‌آید</strong><br><strong>این کتاب را به که اهدا می‌توانم کرد؟</strong></p><p>البته نباید فراموش کنیم که بیشتر کتاب درباره شکل‌گیری شخصیت این جلاد مدرن است. درباره کارهایی که او در اردوگاه کار اجباری آشویتس انجام داده تا «حل نهایی مسئله یهود که به معنی انهدام تمامی یهودیان اروپا بود» به بهترین شکل ممکن انجام شود. همان‌طور که در کتاب آمده است، برای فرمانده اردوگاه آشویتس مسئله فقط یک چیز بود: چطور و از طریق چه راهی می‌شد روزانه «واحد»های بیشتری را پاک‌سازی کرد؟ بله درست است، فرانتس هوس به این فکر نمی‌کرد که او مسئول کشتار «انسان» است بلکه او فقط «وظیفه» داست که این «واحد»ها را از میان بردارد و رضایت خاطر فرماندهان خود را جلب کند.</p><blockquote><p><strong>پیشوای ما آدولف هیتلر یک بار برای همیشه شرافت اس.اس. را به صراحت معین کرده است. او شعار گروه برگزیده‌اش را با این جمله بیان می‌کند: شرف تو، وفاداری تو است.</strong> (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۸۸)</p></blockquote><p>بنابراین مسئله در ذهن شخصیت اصلی کتاب به شکل دیگری تعریف می‌شود. رودلف لانگ شاید یک <strong>ماشین کشتار بی‌احساس</strong> باشد اما بالاخره اطرافیان او، افسران دیگر و اعضای خانواده‌اش از پوست و گوشت و استخوان ساخته شده‌اند و احساس دارند. وظیفه «انسان» بودن و احساس داشتن در کتاب حاضر بر دوش یکی از فرماندهان نزدیک رودلف لانگ است که همه این کارهای وحشیانه را می‌بیند اما جرات سرپیچی ندارد. این افسر احساس نمی‌کند چون فرماندهان به توانایی‌های او در اردوگاه نیاز دارند پس باید هرکاری انجام دهد. سرنوشت این فرمانده و کارهایی که انجام می‌دهد در کتاب بسیار دقیق و جالب آورده شده است. شاید او تنها کسی باشد که هنوز کمی «وجدان» دارد.</p><p>مسئله دیگری که در توجیه این اعمال در مقدمه کتاب به آن اشاره شده است، گفته‌های هیتلر است که همیشه در توجیه هر جنایتی می‌گفت: «<strong>فکرش راهم نکنید آقایان. این هم جزئی از اقدامات دولت است در جهت چهارمیخه کردن قدرت قانونی حکومت. وانگهی چه کسی دیده است کسی از پیروزمندان حساب پس بکشد؟</strong>» مسئله پیروز بودن یا مغلوب بودن را مترجم کتاب در مقدمه خود به شکل مفصل آورده است.</p>",
    "summary": "مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است.",
    "owner": "محمدعلی صمدی",
    "owner_id": 10,
    "owner_image": "https://api.ketabbazan.ml/profile/getimage/?username=u884469",
    "isverified": true,
    "text": "shghsfa shoghohasg sjaldghojshgoshg osahgohsoah ashgsahgouh sohg oshgsoh"
  },
  {
    "id": 47,
    "title": "مرگ کسب و کار من است ...",
    "image": "https://api.ketabbazan.ml/media/articles/download.jpg",
    "book": 33,
    "created_jalali": "1401/02/07",
    "body": "<p>مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است که آن را زندگی‌نامه رودلف فرانتس هوس می‌دانند. البته همه حوادث کتاب با حوادث زندگی فرانتس هوس همخوانی ندارد اما رویه کلی داستان و اتفاقات اصلی دقیقا با زندگی فرمانده اردوگاه آشویتس منطبق است. نویسنده کتاب، که رمان درخشانی نوشته است در زمان جنگ جهانی دوم توسط نیروی‌ها آلمانی دستگیر و مدتی را در زندان گذراند.</p><p>رودلف فرانتس هوس در زمانی که افسر ارشد اردوگاه آشویتس – بزرگترین و مجهزترین اردوگاه کار اجباری آلمان نازی بود که در طول اشغال لهستان توسط نازی‌ها ساخته شد – بود بیشتر از دو و نیم میلیون نفر را از میان برد. او در سال ۱۹۰۰ به دنیا آمد. پدرش کاتولیکی سخت متعصب بود و اصرار داشت که پسرش – یعنی رودلف – کشیش شود اما در عوض او در سال ۱۹۲۲ به عضویت حزب نازی درآمد. یک سال پس از عضویت در حزب نازی متهم به قتل آموزگاری شد که نتیجه آن ۵ سال را در زندان انداخته گذراند. در سال ۱۹۲۸ به موجب یک فرمان عفو عمومی آزاد شد و بار دیگر به فعالیت‌های حزبی پرداخت. رودلف در سال ۱۹۳۴ به عضویت گروه جمجمه – از گروه‌های ویژه نیروی اس‌اس که سرپرستی اردوگاه‌های کار اجباری را بر عهده داشتند – درآمد و نهایتاً فرمانده اردوگاه آشویتس شد.</p><p>رودلف فرانتس هوس در یک برهه زمانی به هیملر – فرمانده نیروهای اس‌اس – می‌نویسد که «برای ایجاد یک اردوگاه قرنطینه جدید در حوالی آشویتس محل بسیار مناسبی» پیدا کرده که «برای منظور ما جان می‌دهد.» رودلف بعد از جنگ در دادگاه نورنبرگ محاکمه و به اعدام محکوم شد اما در دادگاه به کارهایی که در آشویتس انجام داده بود افتخار می‌کرد.</p><p>در قسمتی از متن پشت جلد کتاب می‌خوانیم که این رمان زندگی‌نامه یک جلاد مدرن است، جلادی که ویلیام شایر درباره او در کتاب ظهور و سقوط رایش سوم چنین می‌نویسد:</p><p>&nbsp;</p><p>هوس قاتل محکوم به اعدامی بود که پنج سال زندان کشیده بود. این شخص در تمام سال‌های عمر خویش یا زندانی بود یا زندان‌بان… وی که به سال ۱۹۴۶ در دادگاه نورنبرگ به جرم نظارت بر سر به نیست کردن دو و نیم میلیون انسان به دار آویخته شد در سراسر مدت محاکمه خویش لاف زنان از اعمالی که کرده بود بر خود می‌بالید!</p><p><strong>[ »</strong>&nbsp;معرفی و نقد کتاب:&nbsp;<a href=\"https://kafebook.ir/%d9%87%d9%80-%d9%87%d9%80-%d9%80%d8%ad%d9%80-%d9%87%d9%80/\">رمان هـ هـ ـحـ هـ</a>&nbsp; – ماجرای ترور افسر ارشد نازی در جنگ جهانی دوم <strong>]</strong></p><h2>کتاب مرگ کسب و کار من است</h2><p>شخصیت اصلی کتاب ردولف لانگ نام دارد و ما داستان زندگی او را از دوران کودکی تا زمانی که به زندان می‌افتد دنبال می‌کنیم. اینکه سرنوشت او درنهایت به چه شکل شد شاید موضوع مهمی نباشد. موضوع اصلی در کتاب حاضر این است که بر سر رودلف لانگ چه آمد که به یکی از دهشتناک‌ترین انسان‌های این کره خاکی تبدیل شد.</p><p>کودکی شخصیت اصلی داستان نشان می‌دهد که او چقدر آدم با نظم و مرتبی است که در همه حال مراقب رفتارهایش است. کودکی که پدرش اصرار دارد که کشیش شود اما خودش رویای دیگری در سر دارد. رویایی که به خلق و خوی جدی و منضبط او سازگای بیشتری داشت.</p><blockquote><p>قلبم بنا کرد به کوبیدن. در را بستم و مشغول تماشای عکس‌ها شدم. سه تا برادرها، عمو، پدر و بابابزرگ پدرم آن‌جا بودند: همه‌شان افسر. همه‌شان در لباس تمام رسمی. از همه بیشتر تو نخِ عکس پدربزرگ خودم رفتم که سرهنگ تمام بود و می‌گفتند من به او رفته‌ام. (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۲)</p></blockquote><p>به نظر می‌رسد ردولف لانگ راه دیگری جز کشیش شدن ندارد اما طی یک اتفاق اعتقاد لانگ به دین و کلیسا محو می‌شود. او دیگر حتی هنگام غذا خوردن قادر به دعا کردن نیست و می‌توان گفت از همین نقطه بود که زندگی لانگ دستخوش تحول اساسی شد. «ایمانم را از دست داده بودم و درست و حسابی هم از دست داده بودم.»</p><p>داستان کتاب از سال‌های جنگ جهانی اول شروع می‌شود و می‌خوانیم که لانگ بارها و بارها تلاش می‌کند تا خود را به جبهه جنگ برساند. اما هر بار که به جبهه می‌رسد او را شناسایی و به علت سن کمی که دارد به خانه بازمی‌گردانند. پدر پیرش توانایی کنترل او را ندارد و خیلی سریع از دنیا می‌رود. تلاش‌های لانگ برای افسر شدن و شرکت کردن در جنگ بالاخره به نتیجه می‌رسد و نهایتا به خدمت یک سروان درمی‌آید. سروانی که فکر می‌کند رودلف یک «<strong>آلمانی خوب</strong>» است که هر کاری به او بگویند به شکل دقیق و کامل انجام می‌دهد. این سروان در قسمتی از کتاب به لانگ می‌گوید:</p><blockquote><p>یک گناه، یک معصیت بیش‌تر وجود ندارد <strong>رودلف</strong>. خوب گوش‌هایت را واکن ببین چه می‌گویم. و آن گناه، آن معصیت، این است که <strong>آدم، آلمانی خوبی نباشد</strong>. اگر معصیتی وجود داشته باشد همین است و بس! و من که <strong>ریت‌مایسترگونتر</strong> هستم یک آلمانی خوبم. کاری را که <strong>آلمان</strong> به‌ام می‌گوید <strong>بکن</strong>، می‌کنم! کاری را که روسای آلمانی من بم می‌گویند بکن، می‌کنم! والسلام و نامه تمام! (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۸۹)</p></blockquote><p>رودلف لانگ وارد ارتش می‌شود و یاد می‌گیرد که کارها را مطابق دستور انجام دهد و تحت هیچ شرایطی از زیر بار مسئولیت شانه خالی نکند. در حدی که وقتی در جبهه جنگ با کمترین شانس، مقابل دشمن قرار گرفت همچنان به جنگیدن ادامه می‌دهد و حتی اجازه هم نمی‌دهد که همرزمانش نیز از زیر بار مسئولیت فرار کنند.</p><p>بعد از جنگ جهانی اول شخصیت منظم لانگ در حکومت نازی خیلی سریع مورد توجه قرار می‌گیرد و او به زودی یاد می‌گیرد که کلیسای واقعی، شرافت، زندگی، امید و همه چیز او «<strong>آلمان</strong>» است. بنابراین برای سرافرازی آلمان باید با جان و دل تلاش کرد و دستورات مقامات بالا را به بهترین شکل انجام داد، حتی اگر این دستورات پیدا کردن راهی برای از میان بردن یهودیان باشد. چرا که مقامات بالا، هیملر و مهمتر از همه هیتلر، فقط خیر و صلاح آلمان را می‌خواهند.</p><p><strong>[ »</strong> معرفی و نقد کتاب: <a href=\"https://kafebook.ir/%d9%85%d8%b1%d8%af%d9%87-%d9%87%d8%a7-%d8%ac%d9%88%d8%a7%d9%86-%d9%85%db%8c-%d9%85%d8%a7%d9%86%d9%86%d8%af/\">کتاب مرده‌ها جوان می‌مانند</a> – تصویری از جامعه آلمان بین دو جنگ جهانی <strong>]</strong></p><p><img src=\"https://kafebook.ir/wp-content/uploads/2020/10/%D9%85%D8%B1%DA%AF-%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1-%D9%85%D9%86-%D8%A7%D8%B3%D8%AA.jpg\" alt=\"مرگ کسب و کار من است\" srcset=\"https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است.jpg 780w, https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است-768x619.jpg 768w\" sizes=\"40%\" width=\"30%\"></p><h3>درباره رمان روبر مرل</h3><p>زندگی رودلف فرانتس هوس بسیار عجیب است. چطور ممکن است کسی مسئول مرگ دو و نیم میلیون نفر آدم باشد و بعدها که فلسفه پشت این کشتار را هم می‌بیند همچنان به کارهایی که انجام داده افتخار کند و سرش را بالا بگیرد. دقیقا برای یک انسان چه اتفاقی می‌افتد که تبدیل به چنین چیزی می‌شود. به اعتقاد من روبر مرل در کتاب مرگ کسب و کار من است تا حد بسیار زیادی به این سوال پاسخ داده است.</p><p>قبل از شروع کتاب جمله‌ای آمده است که عنوان کتاب و محتوای آن را به خوبی نشان می‌دهد:</p><p><strong>جز به قربانیانِ آن کسان که</strong><br><strong>مرگ از برای‌شان کسب و کاری به حساب می‌آید</strong><br><strong>این کتاب را به که اهدا می‌توانم کرد؟</strong></p><p>البته نباید فراموش کنیم که بیشتر کتاب درباره شکل‌گیری شخصیت این جلاد مدرن است. درباره کارهایی که او در اردوگاه کار اجباری آشویتس انجام داده تا «حل نهایی مسئله یهود که به معنی انهدام تمامی یهودیان اروپا بود» به بهترین شکل ممکن انجام شود. همان‌طور که در کتاب آمده است، برای فرمانده اردوگاه آشویتس مسئله فقط یک چیز بود: چطور و از طریق چه راهی می‌شد روزانه «واحد»های بیشتری را پاک‌سازی کرد؟ بله درست است، فرانتس هوس به این فکر نمی‌کرد که او مسئول کشتار «انسان» است بلکه او فقط «وظیفه» داست که این «واحد»ها را از میان بردارد و رضایت خاطر فرماندهان خود را جلب کند.</p><blockquote><p><strong>پیشوای ما آدولف هیتلر یک بار برای همیشه شرافت اس.اس. را به صراحت معین کرده است. او شعار گروه برگزیده‌اش را با این جمله بیان می‌کند: شرف تو، وفاداری تو است.</strong> (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۸۸)</p></blockquote><p>بنابراین مسئله در ذهن شخصیت اصلی کتاب به شکل دیگری تعریف می‌شود. رودلف لانگ شاید یک <strong>ماشین کشتار بی‌احساس</strong> باشد اما بالاخره اطرافیان او، افسران دیگر و اعضای خانواده‌اش از پوست و گوشت و استخوان ساخته شده‌اند و احساس دارند. وظیفه «انسان» بودن و احساس داشتن در کتاب حاضر بر دوش یکی از فرماندهان نزدیک رودلف لانگ است که همه این کارهای وحشیانه را می‌بیند اما جرات سرپیچی ندارد. این افسر احساس نمی‌کند چون فرماندهان به توانایی‌های او در اردوگاه نیاز دارند پس باید هرکاری انجام دهد. سرنوشت این فرمانده و کارهایی که انجام می‌دهد در کتاب بسیار دقیق و جالب آورده شده است. شاید او تنها کسی باشد که هنوز کمی «وجدان» دارد.</p><p>مسئله دیگری که در توجیه این اعمال در مقدمه کتاب به آن اشاره شده است، گفته‌های هیتلر است که همیشه در توجیه هر جنایتی می‌گفت: «<strong>فکرش راهم نکنید آقایان. این هم جزئی از اقدامات دولت است در جهت چهارمیخه کردن قدرت قانونی حکومت. وانگهی چه کسی دیده است کسی از پیروزمندان حساب پس بکشد؟</strong>» مسئله پیروز بودن یا مغلوب بودن را مترجم کتاب در مقدمه خود به شکل مفصل آورده است.</p>",
    "summary": "مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است.",
    "owner": "محمدعلی صمدی",
    "owner_id": 10,
    "owner_image": "https://api.ketabbazan.ml/profile/getimage/?username=u884469",
    "isverified": true,
    "text": "shghsfa shoghohasg sjaldghojshgoshg osahgohsoah ashgsahgouh sohg oshgsoh"
  },
  {
    "id": 48,
    "title": "مرگ کسب و کار من است ...",
    "image": "https://api.ketabbazan.ml/media/articles/download.jpg",
    "book": 33,
    "created_jalali": "1401/02/07",
    "body": "<p>مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است که آن را زندگی‌نامه رودلف فرانتس هوس می‌دانند. البته همه حوادث کتاب با حوادث زندگی فرانتس هوس همخوانی ندارد اما رویه کلی داستان و اتفاقات اصلی دقیقا با زندگی فرمانده اردوگاه آشویتس منطبق است. نویسنده کتاب، که رمان درخشانی نوشته است در زمان جنگ جهانی دوم توسط نیروی‌ها آلمانی دستگیر و مدتی را در زندان گذراند.</p><p>رودلف فرانتس هوس در زمانی که افسر ارشد اردوگاه آشویتس – بزرگترین و مجهزترین اردوگاه کار اجباری آلمان نازی بود که در طول اشغال لهستان توسط نازی‌ها ساخته شد – بود بیشتر از دو و نیم میلیون نفر را از میان برد. او در سال ۱۹۰۰ به دنیا آمد. پدرش کاتولیکی سخت متعصب بود و اصرار داشت که پسرش – یعنی رودلف – کشیش شود اما در عوض او در سال ۱۹۲۲ به عضویت حزب نازی درآمد. یک سال پس از عضویت در حزب نازی متهم به قتل آموزگاری شد که نتیجه آن ۵ سال را در زندان انداخته گذراند. در سال ۱۹۲۸ به موجب یک فرمان عفو عمومی آزاد شد و بار دیگر به فعالیت‌های حزبی پرداخت. رودلف در سال ۱۹۳۴ به عضویت گروه جمجمه – از گروه‌های ویژه نیروی اس‌اس که سرپرستی اردوگاه‌های کار اجباری را بر عهده داشتند – درآمد و نهایتاً فرمانده اردوگاه آشویتس شد.</p><p>رودلف فرانتس هوس در یک برهه زمانی به هیملر – فرمانده نیروهای اس‌اس – می‌نویسد که «برای ایجاد یک اردوگاه قرنطینه جدید در حوالی آشویتس محل بسیار مناسبی» پیدا کرده که «برای منظور ما جان می‌دهد.» رودلف بعد از جنگ در دادگاه نورنبرگ محاکمه و به اعدام محکوم شد اما در دادگاه به کارهایی که در آشویتس انجام داده بود افتخار می‌کرد.</p><p>در قسمتی از متن پشت جلد کتاب می‌خوانیم که این رمان زندگی‌نامه یک جلاد مدرن است، جلادی که ویلیام شایر درباره او در کتاب ظهور و سقوط رایش سوم چنین می‌نویسد:</p><p>&nbsp;</p><p>هوس قاتل محکوم به اعدامی بود که پنج سال زندان کشیده بود. این شخص در تمام سال‌های عمر خویش یا زندانی بود یا زندان‌بان… وی که به سال ۱۹۴۶ در دادگاه نورنبرگ به جرم نظارت بر سر به نیست کردن دو و نیم میلیون انسان به دار آویخته شد در سراسر مدت محاکمه خویش لاف زنان از اعمالی که کرده بود بر خود می‌بالید!</p><p><strong>[ »</strong>&nbsp;معرفی و نقد کتاب:&nbsp;<a href=\"https://kafebook.ir/%d9%87%d9%80-%d9%87%d9%80-%d9%80%d8%ad%d9%80-%d9%87%d9%80/\">رمان هـ هـ ـحـ هـ</a>&nbsp; – ماجرای ترور افسر ارشد نازی در جنگ جهانی دوم <strong>]</strong></p><h2>کتاب مرگ کسب و کار من است</h2><p>شخصیت اصلی کتاب ردولف لانگ نام دارد و ما داستان زندگی او را از دوران کودکی تا زمانی که به زندان می‌افتد دنبال می‌کنیم. اینکه سرنوشت او درنهایت به چه شکل شد شاید موضوع مهمی نباشد. موضوع اصلی در کتاب حاضر این است که بر سر رودلف لانگ چه آمد که به یکی از دهشتناک‌ترین انسان‌های این کره خاکی تبدیل شد.</p><p>کودکی شخصیت اصلی داستان نشان می‌دهد که او چقدر آدم با نظم و مرتبی است که در همه حال مراقب رفتارهایش است. کودکی که پدرش اصرار دارد که کشیش شود اما خودش رویای دیگری در سر دارد. رویایی که به خلق و خوی جدی و منضبط او سازگای بیشتری داشت.</p><blockquote><p>قلبم بنا کرد به کوبیدن. در را بستم و مشغول تماشای عکس‌ها شدم. سه تا برادرها، عمو، پدر و بابابزرگ پدرم آن‌جا بودند: همه‌شان افسر. همه‌شان در لباس تمام رسمی. از همه بیشتر تو نخِ عکس پدربزرگ خودم رفتم که سرهنگ تمام بود و می‌گفتند من به او رفته‌ام. (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۲)</p></blockquote><p>به نظر می‌رسد ردولف لانگ راه دیگری جز کشیش شدن ندارد اما طی یک اتفاق اعتقاد لانگ به دین و کلیسا محو می‌شود. او دیگر حتی هنگام غذا خوردن قادر به دعا کردن نیست و می‌توان گفت از همین نقطه بود که زندگی لانگ دستخوش تحول اساسی شد. «ایمانم را از دست داده بودم و درست و حسابی هم از دست داده بودم.»</p><p>داستان کتاب از سال‌های جنگ جهانی اول شروع می‌شود و می‌خوانیم که لانگ بارها و بارها تلاش می‌کند تا خود را به جبهه جنگ برساند. اما هر بار که به جبهه می‌رسد او را شناسایی و به علت سن کمی که دارد به خانه بازمی‌گردانند. پدر پیرش توانایی کنترل او را ندارد و خیلی سریع از دنیا می‌رود. تلاش‌های لانگ برای افسر شدن و شرکت کردن در جنگ بالاخره به نتیجه می‌رسد و نهایتا به خدمت یک سروان درمی‌آید. سروانی که فکر می‌کند رودلف یک «<strong>آلمانی خوب</strong>» است که هر کاری به او بگویند به شکل دقیق و کامل انجام می‌دهد. این سروان در قسمتی از کتاب به لانگ می‌گوید:</p><blockquote><p>یک گناه، یک معصیت بیش‌تر وجود ندارد <strong>رودلف</strong>. خوب گوش‌هایت را واکن ببین چه می‌گویم. و آن گناه، آن معصیت، این است که <strong>آدم، آلمانی خوبی نباشد</strong>. اگر معصیتی وجود داشته باشد همین است و بس! و من که <strong>ریت‌مایسترگونتر</strong> هستم یک آلمانی خوبم. کاری را که <strong>آلمان</strong> به‌ام می‌گوید <strong>بکن</strong>، می‌کنم! کاری را که روسای آلمانی من بم می‌گویند بکن، می‌کنم! والسلام و نامه تمام! (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۸۹)</p></blockquote><p>رودلف لانگ وارد ارتش می‌شود و یاد می‌گیرد که کارها را مطابق دستور انجام دهد و تحت هیچ شرایطی از زیر بار مسئولیت شانه خالی نکند. در حدی که وقتی در جبهه جنگ با کمترین شانس، مقابل دشمن قرار گرفت همچنان به جنگیدن ادامه می‌دهد و حتی اجازه هم نمی‌دهد که همرزمانش نیز از زیر بار مسئولیت فرار کنند.</p><p>بعد از جنگ جهانی اول شخصیت منظم لانگ در حکومت نازی خیلی سریع مورد توجه قرار می‌گیرد و او به زودی یاد می‌گیرد که کلیسای واقعی، شرافت، زندگی، امید و همه چیز او «<strong>آلمان</strong>» است. بنابراین برای سرافرازی آلمان باید با جان و دل تلاش کرد و دستورات مقامات بالا را به بهترین شکل انجام داد، حتی اگر این دستورات پیدا کردن راهی برای از میان بردن یهودیان باشد. چرا که مقامات بالا، هیملر و مهمتر از همه هیتلر، فقط خیر و صلاح آلمان را می‌خواهند.</p><p><strong>[ »</strong> معرفی و نقد کتاب: <a href=\"https://kafebook.ir/%d9%85%d8%b1%d8%af%d9%87-%d9%87%d8%a7-%d8%ac%d9%88%d8%a7%d9%86-%d9%85%db%8c-%d9%85%d8%a7%d9%86%d9%86%d8%af/\">کتاب مرده‌ها جوان می‌مانند</a> – تصویری از جامعه آلمان بین دو جنگ جهانی <strong>]</strong></p><p><img src=\"https://kafebook.ir/wp-content/uploads/2020/10/%D9%85%D8%B1%DA%AF-%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1-%D9%85%D9%86-%D8%A7%D8%B3%D8%AA.jpg\" alt=\"مرگ کسب و کار من است\" srcset=\"https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است.jpg 780w, https://kafebook.ir/wp-content/uploads/2020/10/مرگ-کسب-و-کار-من-است-768x619.jpg 768w\" sizes=\"40%\" width=\"30%\"></p><h3>درباره رمان روبر مرل</h3><p>زندگی رودلف فرانتس هوس بسیار عجیب است. چطور ممکن است کسی مسئول مرگ دو و نیم میلیون نفر آدم باشد و بعدها که فلسفه پشت این کشتار را هم می‌بیند همچنان به کارهایی که انجام داده افتخار کند و سرش را بالا بگیرد. دقیقا برای یک انسان چه اتفاقی می‌افتد که تبدیل به چنین چیزی می‌شود. به اعتقاد من روبر مرل در کتاب مرگ کسب و کار من است تا حد بسیار زیادی به این سوال پاسخ داده است.</p><p>قبل از شروع کتاب جمله‌ای آمده است که عنوان کتاب و محتوای آن را به خوبی نشان می‌دهد:</p><p><strong>جز به قربانیانِ آن کسان که</strong><br><strong>مرگ از برای‌شان کسب و کاری به حساب می‌آید</strong><br><strong>این کتاب را به که اهدا می‌توانم کرد؟</strong></p><p>البته نباید فراموش کنیم که بیشتر کتاب درباره شکل‌گیری شخصیت این جلاد مدرن است. درباره کارهایی که او در اردوگاه کار اجباری آشویتس انجام داده تا «حل نهایی مسئله یهود که به معنی انهدام تمامی یهودیان اروپا بود» به بهترین شکل ممکن انجام شود. همان‌طور که در کتاب آمده است، برای فرمانده اردوگاه آشویتس مسئله فقط یک چیز بود: چطور و از طریق چه راهی می‌شد روزانه «واحد»های بیشتری را پاک‌سازی کرد؟ بله درست است، فرانتس هوس به این فکر نمی‌کرد که او مسئول کشتار «انسان» است بلکه او فقط «وظیفه» داست که این «واحد»ها را از میان بردارد و رضایت خاطر فرماندهان خود را جلب کند.</p><blockquote><p><strong>پیشوای ما آدولف هیتلر یک بار برای همیشه شرافت اس.اس. را به صراحت معین کرده است. او شعار گروه برگزیده‌اش را با این جمله بیان می‌کند: شرف تو، وفاداری تو است.</strong> (کتاب مرگ کسب و کار من است اثر روبر مرل – صفحه ۲۸۸)</p></blockquote><p>بنابراین مسئله در ذهن شخصیت اصلی کتاب به شکل دیگری تعریف می‌شود. رودلف لانگ شاید یک <strong>ماشین کشتار بی‌احساس</strong> باشد اما بالاخره اطرافیان او، افسران دیگر و اعضای خانواده‌اش از پوست و گوشت و استخوان ساخته شده‌اند و احساس دارند. وظیفه «انسان» بودن و احساس داشتن در کتاب حاضر بر دوش یکی از فرماندهان نزدیک رودلف لانگ است که همه این کارهای وحشیانه را می‌بیند اما جرات سرپیچی ندارد. این افسر احساس نمی‌کند چون فرماندهان به توانایی‌های او در اردوگاه نیاز دارند پس باید هرکاری انجام دهد. سرنوشت این فرمانده و کارهایی که انجام می‌دهد در کتاب بسیار دقیق و جالب آورده شده است. شاید او تنها کسی باشد که هنوز کمی «وجدان» دارد.</p><p>مسئله دیگری که در توجیه این اعمال در مقدمه کتاب به آن اشاره شده است، گفته‌های هیتلر است که همیشه در توجیه هر جنایتی می‌گفت: «<strong>فکرش راهم نکنید آقایان. این هم جزئی از اقدامات دولت است در جهت چهارمیخه کردن قدرت قانونی حکومت. وانگهی چه کسی دیده است کسی از پیروزمندان حساب پس بکشد؟</strong>» مسئله پیروز بودن یا مغلوب بودن را مترجم کتاب در مقدمه خود به شکل مفصل آورده است.</p>",
    "summary": "مرگ کسب و کار من است رمانی از روبر مرل، نویسنده فرانسوی است.",
    "owner": "محمدعلی صمدی",
    "owner_id": 10,
    "owner_image": "https://api.ketabbazan.ml/profile/getimage/?username=u884469",
    "isverified": true,
    "text": "shghsfa shoghohasg sjaldghojshgoshg osahgohsoah ashgsahgouh sohg oshgsoh"
  }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="کتاب های من" {...a11yProps(0)} />
          <Tab label="مقاله های من" {...a11yProps(1)} />
          <Tab label="کوییز های من" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        dasdssda
      </TabPanel>
      <TabPanel value={value} index={1}>
        {fakeArticles.length == 0 ? <>هیچ مقاله ای وجود ندارد</> : <>
        {
          fakeArticles.map(
            (art) => {
              return <ArticleCard article={art} />
            }
          )
        }
        </>}
      </TabPanel>
      <TabPanel value={value} index={2}>
        test test test
      </TabPanel>
    </Box>
  );

}